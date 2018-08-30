const express = require('express');
const router = express.Router();

const demo = require('../tools/numberEs');


router.get('/', (req, res) => {
    const { number_value, lang_value } = req.headers;
    console.log('demo: ', demo.mult(4,50));
    console.log('valor: ', demo.NumeroALetras(number_value));
    //console.log('number value: ', number_value, 'lang: ', lang_value);

    if( !isNaN(number_value)){
        res.json({
            number_literal: number_value
        });
    } else {
        res.send('error');
    }
});

module.exports = router;