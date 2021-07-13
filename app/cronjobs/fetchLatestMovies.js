global.__basePath = process.cwd() + '/';

const constant              = require(__basePath + '/app/config/constant');
const config                = require(constant.path.app + 'core/configuration');
const response              = require(constant.path.app + 'util/response');
const utility               = require(constant.path.app + 'util/utility');
const async                 = require('async');
const {logger}              = require(constant.path.app + 'core/logger');
const movieModel            = require(constant.path.app + 'module/model/database/movieModel');
const tmdb                  = require('tmdbv3').init(config.get('moviesProvider:key'));
const movieModelObj         = new movieModel()

//Validate the input data
let loadList = function(callback) {
        tmdb.misc.popular( (err ,res) => {
            if (err) {
                callback(null)
            }

            if (!!res.results) {
                callback(null, res.results);
            }
        });
}

let saveData = function(data,callbackOfAsyncParallel) {
    movieModelObj.createMovie(data, function (error, result, body) {
        if (error) {
            return callbackOfAsyncParallel(error);
        }
        console.log('gggg', result);
        callbackOfAsyncParallel(null,result);
    });
}
let saveList = function (list, callback) {
    if (!list) {
        callback('Empty List');
    } else {
        async.each(list, function (value, callbackOfAsyncParallel){

            let dataPayload = {
                title   : value.title,
                url     : (`${value.title} ${value.id}`).replace(/[^a-z0-9 ]/gi, '').replace(/ /gi,'-').replace(/--/gi,'-').toLowerCase(),
                image   :  `${config.get('moviesProvider:imagePath')}${value.backdrop_path}`,
                movieId   : value.id,
                description   : value.overview,
                voteCount   : value.vote_count,
                voteAverage   : value.vote_average,
                popularity   : value.popularity,
                releaseDate   : new Date(value.release_date),
                createdAt: new Date()
            };

            movieModelObj.getMovieByUrl(dataPayload['url'], function (error, result, body) {

                if (error) {
                    return callbackOfAsyncParallel(error);
                }
                if (!!result[0] && !!result[0].id) {
                    callbackOfAsyncParallel(null,result[0]);
                } else {
                    movieModelObj.createMovie(dataPayload, function (error, result, body) {
                        if (error) {
                            return callbackOfAsyncParallel(error);
                        }
                        callbackOfAsyncParallel(null,result);
                    });
                }
            });

        }, function(err,res) {
            console.log('iterating done', err,res);
            callback(null,true);
        });

    }
}

async.waterfall([
    loadList,
    saveList
], function (error, result) {
    if (error) {
        console.log("error: ", error);
    }
    console.log("result: ", result);
    process.exit(0);
});