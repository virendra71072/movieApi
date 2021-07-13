# Assignment for API to movie Information API (Get a single movie, List the latest/popular movie) & also create a cron to update movie list from 3rd party service TMDB site  Using Nodes

### Dependencies
Node, mysql


### Installation
Default port set on 8085 for API

Run the following commands.

``` bash
git clone https://github.com/virendra71072/movieApi.git
cd movieApi

Need to import database file from database folder (database/movieInfo.sql)
Need to configure configure.development file (app/config/config.development.json)
    - port setup
    - database setup (MASTER & SLAVE) => Write in Master & Read from Slave
    - credential setup for 3rd party service like themoviedb

Set Permission to asset folder for logger

npm install;

#cron script file
node app/cronjobs/fetchLatestMovies.js

npm start;

For Testing
npm test
```

### API LIST
```
1. http://localhost:8085/api/v1/user/generateToken
	Description: generate token for api authentication

	method : GET
	body: {
		}

	O/p:
	{
        "status": true,
        "statusCode": "0",
        "statusMessage": "Success",
        "response": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZTQwOTdiYi0zMGI4LTRjNmEtYjkyNi0xODc4MjdlNDg4NTUiLCJuYW1lIjoidmlyZW5kcmEga3VtYXIgc2luZ2giLCJlbWFpbCI6InZpcmVuZHJhQGdtYWlsLmNvbSIsImlhdCI6MTYyNDQyMzc1MywiZXhwIjoxNjI0NTEwMTUzfQ.plOn_i-ogk198U3A3ddHRw5VKujoodO3sG3rUk9xuGM"
        }
    }


2. http://localhost:8085/api/v1/movie/:movieId?currency=:currency
	Description: Get a single movie detail & also update view count

	method : GET
    header: {
        "token" : "<<Token from generateToken api response>>"
    }
    
	O/p:
	{
        "status": true,
        "statusCode": "0",
        "statusMessage": "Success",
        "response": {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w440_and_h660_face/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
            "belongs_to_collection": {
                "id": 519457,
                "name": "The Boss Baby Collection",
                "poster_path": "/uVJPQ8wGZvW4h9Z7xpqToOxsuzH.jpg",
                "backdrop_path": null
            },
            "budget": 82000000,
            "genres": [
                {
                    "id": 16,
                    "name": "Animation"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 10751,
                    "name": "Family"
                }
            ],
            "homepage": "https://www.dreamworks.com/movies/the-boss-baby-2",
            "id": 459151,
            "imdb_id": "tt6932874",
            "original_language": "en",
            "original_title": "The Boss Baby: Family Business",
            "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
            "popularity": 5631.985,
            "poster_path": "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
            "production_companies": [
                {
                    "id": 521,
                    "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png",
                    "name": "DreamWorks Animation",
                    "origin_country": "US"
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "US",
                    "name": "United States of America"
                }
            ],
            "release_date": "2021-07-01",
            "revenue": 24502000,
            "runtime": 107,
            "spoken_languages": [
                {
                    "english_name": "English",
                    "iso_639_1": "en",
                    "name": "English"
                }
            ],
            "status": "Released",
            "tagline": "Playtime is over.",
            "title": "The Boss Baby: Family Business",
            "video": false,
            "vote_average": 8,
            "vote_count": 511,
            "imageHost": "https://www.themoviedb.org/t/p/w440_and_h660_face"
        }
    }

Or

    {
        "status": false,
        "statusCode": "102",
        "statusMessage": "Invalid Movies!",
        "response": {}
    }


3. http://localhost:8085/api/v1/movie/:type?currency=USD&limit=5&page=1
	Description: get list of Latest or popular movie

	method : GET
	header: {
        "token" : "<<Token from generateToken api response>>"
    }
    type: LATEST || POPULAR
    limit: (default : 5 & optional)
    limit: (default : 1 & optional)

	O/p:
	{
        "status": true,
        "statusCode": "0",
        "statusMessage": "Success",
        "response": [
            {
                "id": 184,
                "title": "The Tomorrow War",
                "url": "the-tomorrow-war-588228",
                "image": "https://www.themoviedb.org/t/p/w440_and_h660_face//yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
                "movieId": 588228,
                "description": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
                "voteCount": 2030,
                "voteAverage": 8.3,
                "popularity": 7210.2,
                "releaseDate": "2021-06-30T00:00:00.000Z",
                "createdAt": "2021-07-12T16:43:41.000Z"
            },
            {
                "id": 201,
                "title": "The Boss Baby: Family Business",
                "url": "the-boss-baby-family-business-459151",
                "image": "https://www.themoviedb.org/t/p/w440_and_h660_face//gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
                "movieId": 459151,
                "description": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
                "voteCount": 458,
                "voteAverage": 8,
                "popularity": 6327.83,
                "releaseDate": "2021-07-01T00:00:00.000Z",
                "createdAt": "2021-07-12T16:48:35.000Z"
            }
        ]
    }

OR
    {
        "status": false,
        "statusCode": "108",
        "statusMessage": "Invalid Auth Token Exception.",
        "response": {
            "error": {
                "name": "JsonWebTokenError",
                "message": "jwt must be provided"
            }
        }
    }

```

## Contributors
```
 1. Virendra kumar singh
```