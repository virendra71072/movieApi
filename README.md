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
    - credential setup for 3rd party service like get current rate 

Set Permission to asset folder for logger

npm install;
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


4. http://localhost:8085/api/v1/movie/:movieId?currency=:currency
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
            "movieId": "195bc173-3b9c-40cc-9d2b-b16d1906ddba",
            "name": "abcd",
            "price": 14.792459999999998,
            "description": "gddgg jhhjfghjg",
            "viewCount": 12,
            "createdAt": "2021-06-22T17:33:45.000Z"
        }
    }

Or

    {
        "status": false,
        "statusCode": "102",
        "statusMessage": "Invalid Product!",
        "response": {}
    }



5. http://localhost:8085/api/v1/movie/:type?currency=USD&limit=5&page=1
	Description: get most view movie

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
                "movieId": "195bc173-3b9c-40cc-9d2b-b16d1906ddba",
                "name": "abcd",
                "price": 12,
                "description": "gddgg jhhjfghjg",
                "viewCount": 14
            },
            {
                "movieId": "68d2d0d7-02c5-42d5-818b-f9a202a4f26c",
                "name": "bbjjgg",
                "price": 5,
                "description": "dfdfdfdfsfds",
                "viewCount": 14
            },
            {
                "movieId": "593fe92f-6fb9-4102-8429-ac9762890f83",
                "name": "bb333jjgg",
                "price": 51,
                "description": "dfdfdfdfsfds",
                "viewCount": 3
            },
            {
                "movieId": "f3c016ec-ed3b-4302-9c7a-6c3643ce9aca",
                "name": "trtrtrt",
                "price": 1,
                "description": null,
                "viewCount": 2
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

6. http://localhost:8085/api/v1/movie/:movieId
	Description: soft delete a single movie

	method : DELETE
    header: {
        "token" : "<<Token from user login api response>>"
    }
	
	O/p:
	{
        "status": true,
        "statusCode": "0",
        "statusMessage": "Success",
        "response": true
    }

OR
    {
        "status": false,
        "statusCode": "102",
        "statusMessage": "Invalid Product!",
        "response": {}
    }
```

## Contributors
```
 1. Virendra kumar singh
```