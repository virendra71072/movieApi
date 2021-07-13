const constant  = require(__basePath + 'app/config/constant');
const router    = require('express').Router({
    caseSensitive   : true,
    strict          : true
});

const movieAssembly   = require(constant.path.module + 'assembly/movie/movieAssembly');
const validation    = require(constant.path.module + 'assembly/movie/movieValidation');
const movieMiddleware = require(constant.path.module + 'assembly/movie/movieMiddleware');


/*
 * Router list
 */

/* get list of movie whose view count is more than 0 */
router.get(
    '/list/:type',
    movieMiddleware.validateToken,
    validation.listType,
    movieAssembly.list
);

/* get a movie detail by id */
router.get(
    '/:movieId',
    validation.getMovie,
    movieMiddleware.validateToken,
    movieMiddleware.loadDetail,
    movieAssembly.getMovie
);

module.exports = {
    router: router
};
