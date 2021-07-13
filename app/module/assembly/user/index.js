const constant  = require(__basePath + 'app/config/constant');
const router    = require('express').Router({
    caseSensitive   : true,
    strict          : true
});

const userAssembly   = require(constant.path.module + 'assembly/user/userAssembly');

/*
 * Router list
 */

/* generate token user */
router.get(
    '/generateToken',
    userAssembly.generateToken
);

module.exports = {
    router: router
};
