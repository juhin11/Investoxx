const router = require('express').Router();
const POLARDBconnection = require('../POLARDB.config');
const CryptoJS =require("crypto-js");
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// REGISTER

router.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC.toString());
    const id = uuidv4();

    const SQL = `INSERT INTO users (id, name, email, password) VALUES ('${id}', '${name}', '${email}', '${password}')`;


    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send({error: err, message: 'Error email already registered'});
        } else {

            const table_base_name = email.replace(/[@.]/g, "")

            const CREATE_PORTFOLIO = `CREATE TABLE ${table_base_name}_portfolio (symbol VARCHAR(10) PRIMARY KEY,name VARCHAR(50),predicted_price DECIMAL(10,2),added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
            const CREATE_WATCHLIST = `CREATE TABLE ${table_base_name}_watchlist (symbol VARCHAR(10) PRIMARY KEY,name VARCHAR(50),added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
            
            POLARDBconnection.query(CREATE_PORTFOLIO , (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Portfolio and WATCHLIST table created');
                    
                    POLARDBconnection.query(CREATE_WATCHLIST , (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Portfolio and WATCHLIST table created');
                            res.status(200).send({message: 'User registered successfully', result});
                        }
                    });
                }
            });

        }
    });
});




// LOGIN

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const SQL = `SELECT * FROM users WHERE email = '${email}';`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err, message: 'Error'});
        } else {
            if (result.length === 0) {
                res.status(400).send({message: 'User not found'});
            }else{
                const bytes = CryptoJS.AES.decrypt(result[0].password, process.env.PASS_SEC);
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
                
                if (password === originalPassword) {
                    res.status(200).send({message: 'Login successful', result});
                } else {
                    res.status(400).send({message: 'Incorrect password'});
                }
            }
        }

    });

});


// GET All USER DATA

router.get('/get-all-user-data/', (req, res) => {
    const SQL = `SELECT * FROM users;`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err, message: 'Error'});
        } else {
            res.status(200).send({message: 'All user data fetched', result});
        }
    });
});


// DELETE USER

router.post('/delete-user', (req, res) => {
    const email = req.body.email;
    const SQL = `DELETE FROM users WHERE email = '${email}';`;

    POLARDBconnection.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({error: err, message: 'Error'});
        } else {
            res.status(200).send({message: 'User deleted successfully', result});
        }
    });
});






    

module.exports = router;