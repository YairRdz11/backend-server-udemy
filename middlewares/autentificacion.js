var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

/**
 * Verificar token
 */

exports.verificaToken = function(req, res, next) {
    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mesaje: 'Token incorrecto',
                errors: err
            });
        }
        next();
    });
}