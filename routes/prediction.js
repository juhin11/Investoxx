require('dotenv').config()
const router = require('express').Router();
const POLARDBconnection = require('../POLARDB.config');
const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/prediction/';

const API_KEY_LIST = [
    "mTntCA4FiZkA0GmpM3Gxs8fCfBtbvOos",
    "T7KKLBmDWopzabouJya8JQBeHe5q2Lo5",
    "YRFWLLSLQKHLErOMpT4_IKxZJmA2fUUp",
    "CgxTVaE7tqACpdrTgNuS57MuM6tlw5Vc",
    "g5y8yAWfO77JOw_Bx4GTpbSZeLivXWVS",
    "PNcXk4rdjs8Bvk8x7YC21iSzXHDCMNp3",
    "UgYxlzJuWV2j_JNA6jwrX5Al8Ta2dwIU",
    "o7G7kZIr8vm5FIBQM6215uIwpOEZaLoo",
    "3y3Ni2LAvM7gMhp6SgWvlq9AqXHkBLNC",
    "3y3Ni2LAvM7gMhp6SgWvlq9AqXHkBLNC",
    "ADu65LsibS7Cpf0l_yHmbNNf2YhMZTkz",
    "OcdHW8Khs_l654JLcXWIIjyXWL85m5my",
    "xfJ3Lk3XZIreeed6fySiXSyhVfXgxlrc",
    "OXL5ANG2QlS_3Ec70gSQpxgjwi06hHGx",
    "rXs3qp0O8Kzj2hY4c3TqpavaLpj21YYy"
]


// GET ALL STOCK PREDICTION DATA
router.get('/get-all-stocks', (req, res) => {
    const SQL = 'SELECT * FROM stock_analysis;';

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err});
        } else {
            console.log(result)
            let code = 200;
            let message = 'Success';
            if(result.length == 0) {
                code = 404;
                message = 'No stocks found';
            }
            res.status(code).send({message: message, result});
        }   
    });

});

// GET STOCK PREDICTION DATA
router.get('/get-prediction/:symbol', (req, res) => {
    const symbol = req.params.symbol;
    const SQL = `SELECT * FROM stock_analysis WHERE symbol = '${symbol}';`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err});
        } else {
            console.log(result)
            let code = 200;
            let message = 'Success';
            if(result.length == 0) {
                code = 404;
                message = 'Ticker not found';
            }
            res.status(code).send({message: message, result});
        }
    });

});

// ADD STOCK PREDICTION DATA

router.post('/add-prediction', async (req, res) => {
    const symbol = req.body.symbol;
    let name;
    let marketCap;
    let stockType;

    const API_KEY = API_KEY_LIST[Math.floor(Math.random() * API_KEY_LIST.length)];
    const tickerapi = `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${API_KEY}`;

    await axios.get(tickerapi)
        .then(async (response) => {
            name = response.data.results.name;
            marketCap = response.data.results.market_cap;
            if (marketCap < 2000000000) {
                stockType = 'small';
            }

            if (marketCap > 10000000000) {
                stockType = 'large';
            }

            if (marketCap > 2000000000 && marketCap < 10000000000) {
                stockType = 'mid';
            }

            let lastKnownPrice = 0;
            let predictedPrice = 0;
        
            // Fetch last known price and predicted price from the API
            await axios.post(`${process.env.PREDICTIONENDPOINT}/get_prediction/`, {
                    symbol: symbol,
                })
                .then((response) => {
                    console.log(response.data);   
                    lastKnownPrice = response.data.prediction.current;
                    predictedPrice = response.data.prediction.prediction;
                    
                    // Remove any special characters from the name
                    name = name.replace(/[^a-zA-Z ]/g, "");
                    
                    const SQL = `INSERT INTO stock_analysis (symbol, name, market_cap, stock_type, last_known_price, predicted_performance) VALUES ('${symbol}', '${name}', '${marketCap}', '${stockType}', '${lastKnownPrice}', '${predictedPrice}');`;
        
                    POLARDBconnection.query(SQL, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send({error: err});
                            res.end();
                
                        } else {
                            res.status(200).send({message: 'Data Added', result});
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).send({"error": "request limit exceded Try again later"});
                });

        })
        .catch((error) => {
            console.log(error);
            res.status(404).send({"error": "Ticker not found"});
            res.end();
        });
    
});


// Update the stock performance

router.post('/update-prediction', async (req, res) => {
    const symbol = req.body.symbol;
    let name;
    let marketCap;
    let stockType;

    const API_KEY = API_KEY_LIST[Math.floor(Math.random() * API_KEY_LIST.length)];
    const tickerapi = `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${API_KEY}`;

    await axios.get(tickerapi)
        .then(async (response) => {
            if(response.data.status != "ERROR") {
            name = response.data.results.name;
            marketCap = response.data.results.market_cap;
            if (marketCap < 2000000000) {
                stockType = 'small';
            }

            if (marketCap > 10000000000) {
                stockType = 'large';
            }

            if (marketCap > 2000000000 && marketCap < 10000000000) {
                stockType = 'mid';
            }

            let lastKnownPrice = 0;
            let predictedPrice = 0;
        
            // Fetch last known price and predicted price from the API
            await axios.post(`${process.env.PREDICTIONENDPOINT}/get_prediction/`, {
                    symbol: symbol,
                })
                .then((response) => {
                    console.log(response.data);   
                    lastKnownPrice = response.data.prediction.current;
                    predictedPrice = response.data.prediction.prediction;
                })
                .catch((error) => {
                    console.log(error);
                });
        
            const SQL = `UPDATE stock_analysis SET name = '${name}', market_cap = '${marketCap}', stock_type = '${stockType}', last_known_price = '${lastKnownPrice}', predicted_performance = '${predictedPrice}' WHERE symbol = '${symbol}';`;
        
            POLARDBconnection.query(SQL, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({error: err});
                } else {
                    var status = 200;
                    var message = 'Data Updated';
                    if(result.affectedRows == 0) {
                        status = 404;
                        message = 'Ticker not found';            
                    }
                    res.status(status).send({message: message, result});
                }
            });
        } else {
            res.status(500).send({"error": "API Limit exceded"});
        }

        })
        .catch((error) => {
            console.log(error);
            res.status(200).send({"error": "Ticker not found"});
        });
    



});


// TOP STOCKS

router.get('/get-top-stocks', (req, res) => {
    SQL = `SELECT * FROM stock_analysis ORDER BY stock_type ASC, predicted_performance ASC LIMIT 1000;`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err});
        } else {
            var resultData =[]

            for (var i = 0; i < result.length; i++) {
                var differece = result[i].predicted_performance - result[i].last_known_price;
                var percentage = (differece / result[i].last_known_price) * 100;
                resultData.push({
                    symbol: result[i].symbol,
                    name: result[i].name,
                    market_cap: result[i].market_cap,
                    stock_type: result[i].stock_type,
                    last_known_price: result[i].last_known_price,
                    predicted_performance: result[i].predicted_performance,
                    difference: differece,
                    percentage: percentage
                })
            }

            // Sort the data by percentage
            resultData.sort(function(a, b) {
                return b.percentage - a.percentage;
            });


            // Return the top 10 stocks form all categories (small, mid, large) consider the percentage and volume
            var topStocks = [];
            var smallStocks = [];
            var midStocks = [];
            var largeStocks = [];

            for (var i = 0; i < resultData.length; i++) {
                if (resultData[i].stock_type == 'small') {
                    smallStocks.push(resultData[i]);
                }

                if (resultData[i].stock_type == 'mid') {
                    midStocks.push(resultData[i]);
                }

                if (resultData[i].stock_type == 'large') {
                    largeStocks.push(resultData[i]);
                }
            }

            // Get the top 10 stocks from each category
            for (var i = 0; i < 5; i++) {
                topStocks.push(smallStocks[i]);
                topStocks.push(midStocks[i]);
                topStocks.push(largeStocks[i]);
            }
            
            
            res.status(200).send({resultData});
        }

    })

})

// Delete the stock

router.post('/delete-stock', (req, res) => {
    const symbol = req.body.symbol;
    const SQL = `DELETE FROM stock_analysis WHERE symbol = '${symbol}';`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err});
        } else {
            var status = 200;
            var message = 'Data Deleted';
            if(result.affectedRows == 0) {
                status = 404;
                message = 'Ticker not found';
            }
            res.status(status).send({message: message, result});
        }
    });
});




module.exports = router;

