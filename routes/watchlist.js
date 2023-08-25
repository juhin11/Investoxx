require('dotenv').config()
const router = require('express').Router();
const POLARDBconnection = require('../POLARDB.config');
const axios = require('axios');


// ADD STOCK TO WATCHLIST

router.post('/addStock', (req, res) => {
    const symbol = req.body.symbol;
    const name = req.body.name;
    const email = req.body.email;

    const table_base_name = email.replace(/[@.]/g, "")

    const SQL = `INSERT INTO ${table_base_name}_watchlist (symbol, name) VALUES ('${symbol}', '${name}')`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send({error: err, message: 'Error adding stock to WATCHLIST'});
        } else {
            res.status(200).send({message: 'Stock added to WATCHLIST successfully', result});
        }
    });

})


// DELETE STOCK FROM WATCHLIST

router.post('/deleteStock', (req, res) => {
    const symbol = req.body.symbol;
    const email = req.body.email;

    const table_base_name = email.replace(/[@.]/g, "")

    const SQL = `DELETE FROM ${table_base_name}_watchlist WHERE symbol = '${symbol}'`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send({error: err, message: 'Error deleting stock from WATCHLIST'});
        } else {
            res.status(200).send({message: 'Stock deleted from WATCHLIST successfully', result});
        }
    });

})

// GET WATCHLIST

router.get('/getWatchlist/:email', (req, res) => {
    const email = req.params.email;

    const table_base_name = email.replace(/[@.]/g, "")

    const SQL = `SELECT * FROM ${table_base_name}_watchlist`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send({error: err, message: 'Error getting WATCHLIST'});
        } else {
            res.status(200).send({message: 'WATCHLIST retrieved successfully', result});
        }
    });

})



module.exports = router;