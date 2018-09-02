const express = require('express');
const router = express.Router();

const number_literal = require('../tools/numberEs');


router.get('/esES', (req, res) => {

    const { number_value, plural, singular, centPlural, centSingular } = req.headers;

    if( !isNaN(number_value)){
        res.json({
            number_literal: number_literal.NumeroALetras(number_value, 
                {
                plural: plural,
                singular: singular,
                centPlural: centPlural,
                centSingular: centSingular
            }
        )
        });
    } else {
        res.send('error');
    }
});

module.exports = router;