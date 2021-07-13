const constant              = require(__basePath + '/app/config/constant');
const response              = require(constant.path.app + 'util/response');
const utility               = require(constant.path.app + 'util/utility');
const async                 = require('async');
const {logger}              = require(constant.path.app + 'core/logger');
const movieModel          = require(constant.path.app + 'module/model/database/movieModel');

const movieModelObj       = new movieModel();

/*
 * get a single movie detail
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */
// exports.getProduct = function (req, res, next) {
//     let {movieDetail, currencyRate, currency } = req;
//
//     logger.info('[movie] movie with param %s,%s,%s', movieDetail.movieId, currencyRate, currency);
//     movieDetail['price'] = movieDetail['price'] *  currencyRate;
//
//     //Update the movie view count
//     let updateCount = function(callback) {
//         movieModelObj.updateCount(movieDetail.movieId, function (error, result) {
//             if (error) {
//                 return callback(error);
//             }
//
//             if (utility.isEmpty(result) === true) {
//                 return callback(null, false);
//             } else {
//                 return callback(null, result);
//             }
//         });
//     }
//
//     async.waterfall([
//         updateCount
//     ], function (error, result, body) {
//         if (error) {
//             return res.status(500).json(response.build('ERROR_SERVER_ERROR', {error: error}));
//         }
//
//         if (result == false) {
//             return res.status(500).json(response.build('USER_NOT_FOUND'));
//         }
//
//         logger.info('[movie] Returned with status [%s] & result:', 200, JSON.stringify(movieDetail));
//         return res.status(200).json(response.build('SUCCESS', movieDetail));
//     });
// };

/*
 * get the list of movie (POPULAR || LATEST)
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */
exports.list = function (req, res, next) {
    let {type = 'LATEST' } = req.params;
    let { limit = 10, page=1} = req.query;
    if (page < 1) {
        page = 1;
    }

    if (limit < 1) {
        limit = 10;
    }

    if (!(['LATEST','POPULAR'].indexOf(type) >= 0)) {
        return res.status(500).json(response.build('ERROR_VALIDATION', "Invalid type"));
    }

    logger.info('[movie] movie with param:', JSON.stringify(req.query));
    let options = {
        limit,
        page,
        type
    };

    let getList = function(callback) {
        movieModelObj.list(options, function (error, result) {
            if (error) {
                return callback(error);
            }

            if (utility.isEmpty(result) === true) {
                return callback(null, false);
            } else {
                return callback(null, result);
            }
        });

    }

    async.series([
        getList
    ], function (error, result, body) {
        if (error) {
            return res.status(500).json(response.build('ERROR_SERVER_ERROR', {error: error}));
        }

        logger.info('[movie] Returned with status [%s]:', 200);
        return res.status(200).json(response.build('SUCCESS', result[0] || []));
    });
};


