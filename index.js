require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const POLARDBconnection = require('./POLARDB.config');

const authRoute = require('./routes/auth');
const predictionRoute = require('./routes/prediction');
const portfolioRoute = require('./routes/portfolio');
const watchlistRoute = require('./routes/watchlist');

const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./stocks.json');
const midCap = require('./data.json');
const axios = require('axios');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to Investoxx NODE API');
});

// GET BLOGS

app.get('/blogs', (req, res) => {
    const SQL = 'SELECT * FROM blog;'

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });

});

// GET BLOG

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    const SQL = `SELECT * FROM blog WHERE id = ${id};`

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });

});


// ADD BLOGS

app.post('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const img_url = req.body.img_url;
    const SQL = `INSERT INTO blog (title, content, author, img_url) VALUES ('${title}', '${content}', '${author}', '${img_url}');`

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });

});

// DELETE BLOGS

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    const SQL = `DELETE FROM blog WHERE id = ${id};`

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });

});




// GET INDEX Data
app.post('/index', async(req, res) => {
    const symbol = req.body.symbol;
    const API = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=2mo`
    await axios.get(API)
        .then((response) => {
            const data = response.data.chart.result[0].indicators.quote[0];
            const timestamp = response.data.chart.result[0].timestamp;
            const result = [];
            
            for (let i = 0; i < data.close.length; i++) {
                    const date = new Date(timestamp[i] * 1000);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const formattedDate = `${day}/${month}`;
                    result.push({
                        date: formattedDate,
                        close: data.close[i],
                        high: data.high[i],
                        low: data.low[i],
                        open: data.open[i],
                        volume: data.volume[i]
                    });
            }

            var differece = result[0].close - result[result.length - 1].close;
            var percentage = (differece / result[result.length - 1].close) * 100;
            
            res.status(200).send({result, differece, percentage});
        })
        .catch((error) => {
            res.status(400).send({error: error, message: 'Error fetching data'});
        });


});

// Get the sentiment of the News
app.post('/sentiment', async(req, res) => {
    const news =  req.body.news;
    const API = `${process.env.PREDICTIONENDPOINT}/get_news_analysis/`
    await axios.post(API, {
        news: news
    })
    .then((response) => {
        res.status(200).send(response.data);
    })
    .catch((error) => {
        res.status(400).send({error: error, message: 'Error fetching data'});
    });
    
})

//AUTH ROUTES
app.use('/api/auth', authRoute);

//PREDICTION ROUTES
app.use('/api/prediction', predictionRoute);

//PORTFOLIO ROUTES
app.use('/api/portfolio', portfolioRoute);

// WATCHLIST ROUTES
app.use('/api/watchlist', watchlistRoute);




// GET count of stocks

app.get('/count', (req, res) => {
    const SQL = 'SELECT COUNT(*) as count FROM stock_analysis;'
    
    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });
    
});


app.get('/categorycount', (req, res) => {
    
    const SQL = `SELECT stock_type, COUNT(stock_type) AS stock_count FROM stock_analysis GROUP BY stock_type HAVING COUNT(stock_type) > 1`;
    
    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            res.status(400).send({error: err, message: 'Error fetching data'});
        } else {
            res.status(200).send(result);
        }
    });
    
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});