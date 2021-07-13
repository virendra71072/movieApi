const constant   = require(__basePath + '/app/config/constant');
const database   = require(constant.path.app + 'core/database');
const utility    = require(constant.path.app + 'util/utility');
const underscore = require("underscore");

/*
 * Class for movie model
 */
class MovieModel {

    constructor() {
        this.databaseObj = database.getInstance();
    }

    static get DB() {
        return {
            READSLAVE: 'READSLAVE',
            MASTER   : 'MASTER'
        };
    }

    createMovie(dataPayload, callback) {
        let userData = {
            title   : dataPayload.title,
            url     : dataPayload.url,
            image   : dataPayload.image,
            movieId   : dataPayload.movieId,
            description   : dataPayload.description,
            voteCount   : dataPayload.voteCount,
            voteAverage   : dataPayload.voteAverage,
            popularity   : dataPayload.popularity,
            releaseDate   : dataPayload.releaseDate,
            createdAt: new Date()
        };

        let query = `
            INSERT INTO 
                movies (
                    title,
                    url,
                    image,
                    movieId,
                    voteCount,
                    voteAverage,
                    popularity,
                    description,
                    releaseDate,
                    createdAt
                ) 
            VALUES (
                :title,
                :url,
                :image,
                :movieId,
                :voteCount,
                :voteAverage,
                :popularity,
                :description,
                :releaseDate,
                :createdAt
            ) 
        `;

        this.databaseObj.query(
            MovieModel.DB.MASTER,
            {
                sql   : query,
                values: userData
            },
            callback,
            {queryFormat: 'namedParameters'}
        );
    };

    getMovieByUrl(url, callback) {

        let query = `
            SELECT
                *
            FROM 
                movies
            WHERE
                url = ?
            ORDER BY
                createdAt desc
        `;

        this.databaseObj.query(
            MovieModel.DB.READSLAVE,
            {
                sql   : query,
                values: [url]
            },
            callback
        );
    };

    list(options, callback) {
        let {page = 1, limit = 10, type= 'LATEST'} = options;

        let dataParam = {
            offset      : (page - 1) * limit,
            limit       : limit,
            type: (type === 'POPULAR')? 'popularity': 'releaseDate'
        };

        let query = `
            SELECT
                *
            FROM 
                movies
            ORDER BY
                ${dataParam.type} desc
            LIMIT ${dataParam.offset},${dataParam.limit} 
        `;

        this.databaseObj.query(
            MovieModel.DB.READSLAVE,
            {
                sql   : query,
                values: dataParam
            },
            callback
        );
    };
}

module.exports = MovieModel;
