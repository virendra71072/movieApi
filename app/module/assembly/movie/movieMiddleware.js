const constant              = require(__basePath + '/app/config/constant');
const config                = require(constant.path.app + 'core/configuration');
const response              = require(constant.path.app + 'util/response');
const utility               = require(constant.path.app + 'util/utility');
const underscore            = require('underscore');
const jwt                   = require('jsonwebtoken');
const async                 = require('async');
const {logger}              = require(constant.path.app + 'core/logger');
const baseModel             = require(constant.path.app + 'module/model/system/baseModel');
const movieModel          = require(constant.path.app + 'module/model/database/movieModel');

const movieModelObj       = new movieModel();
const systemBaseModelObj    = new baseModel();

/*
 * Validate user input token with jwt (JSON WEB TOKEN)
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {json}
 */
exports.validateToken = function (req, res, next) {
    const { token = null } = req.headers;
    try {
        var detail = jwt.verify(token, 'user_session');
        if (detail && !!detail['tokeData']) {
            req.userDetail = detail;
            next();
        } else {
            logger.error('[validateToken] Invalid token');
            return res.status(500).json(response.build('INVALID_AUTH_TOKEN'));
        }
    } catch(err) {
        logger.info('[validateToken] Returned with error [%s]:', err);
        return res.status(500).json(response.build('INVALID_AUTH_TOKEN', {error: err}));
    }
};

/*
 * Load movie detail
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {json}
 */
exports.loadDetail = function (req, res, next) {
    const { movieId = null } = req.params;

    let loadData = function(callback) {

        movieModelObj.getMovieByUrl(movieId, function (error, result) {
            if (error) {
                return callback(error);
            }

            if (utility.isEmpty(result) === true) {
                return callback(null, false);
            } else {

                return callback(null, result[0]);
            }
        });
    }

    async.series([
        loadData
    ], function (error, result, body) {
        logger.info('[loadDetail] Returned with error [%s] & result:', error, result);
        if (error) {
            return res.status(500).json(response.build('ERROR_SERVER_ERROR', {error: error}));
        }

        if (underscore.size(result[0]) == 0) {
            return res.status(500).json(response.build('ERROR_MOVIE_NOT_EXISTS'));
        }

        req.movieDetail = result[0];
        next();
    });
};

