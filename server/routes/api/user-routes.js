const router = require('express').Router();
const{
// once controller.js is created the call backs should go here
} = require('../../controllers/user-controller');

// once the middleware is created, we can replace the existing GET route with the following:
// const { authMiddleware } = require('../../utils/auth');

// GET all and POST at /api/users
router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;