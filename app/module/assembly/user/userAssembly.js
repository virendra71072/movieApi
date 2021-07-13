const constant              = require(__basePath + '/app/config/constant');
const response              = require(constant.path.app + 'util/response');
const utility               = require(constant.path.app + 'util/utility');
const config                = require(constant.path.app + 'core/configuration');
const async                 = require('async');
const {logger}              = require(constant.path.app + 'core/logger');
const underscore            = require('underscore');
const jwt                   = require('jsonwebtoken');

/*
 * generate token
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */
exports.generateToken = function (req, res, next) {
    let body = {
        tokeData: constant.defaultToken
    }
    //generate JWT token & set session expire time 1 day
    var token = jwt.sign(body, 'user_session', { expiresIn: 60 * 60 * 24});

    return res.status(200).json(response.build('SUCCESS', {token}));
};


