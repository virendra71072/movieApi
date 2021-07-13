var should      = require('chai').should(),
    expect      = require('chai').expect(),
    supertest   = require('supertest'),
    api         = supertest('http://localhost:8085/api/v1/');

var randamString = Math.random().toString(36).substring(2,7);

var page = 1,
    limit = 10,
    movieId = 'godzilla-vs-kong-399566'
    token;




describe('generate token',function () {
    it('Should return a 200 response', function (done) {
        //use this.timeout(6000); to set timeout in miliseconds, default value for the timeout is 2000 miliseconds
        api.get('user/generateToken')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                console.log('Token generated : ',res.body.response.token);
                if (!!res.body && !!res.body.response && !!res.body.response.token) {
                    token = res.body.response.token;
                }
            })
            .expect(200, done);
    });
});


describe('get latest movie list', function () {
    it('Should return a 200 response', function (done) {
        api.get('movie/list/LATEST')
            .set('token', token)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
            })
            .expect(200, done);
    });
});

describe('get popular movie list', function () {
    it('Should return a 200 response', function (done) {
        api.get('movie/list/POPULAR')
            .set('token', token)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
            })
            .expect(200, done);
    });
});

describe('get popular movie list', function () {
    it('Should return a 500 response', function (done) {
        api.get('movie/list/TEST')
            .set('token', token)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
            })
            .expect(500, done);
    });
});

describe('get Movie detail', function () {
    it('Should return a 200 response', function (done) {
        api.get(`movie/${movieId}`)
            .set('token', token)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                //console.log('+++++',res.body);
            })
            .expect(200, done);
    });
});

describe('get Movie detail wrong', function () {
    it('Should return a 200 response', function (done) {
        api.get(`movie/1234`)
            .set('token', token)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                //console.log('+++++',res.body);
            })
            .expect(500, done);
    });
});

describe('Passing invalid token', function () {
    it('Should return a 200 response', function (done) {
        api.get(`movie/${movieId}`)
            .set('token', 'dffdf')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                //console.log('+++++',res.body);
            })
            .expect(500, done);
    });
});


