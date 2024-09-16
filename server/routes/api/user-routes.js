const router = require('express').Router();

const {
    fetchAllOrgProjects,
    fetchAllCharities,
} = require('../../controllers/user-controller');

// once the middleware is created, we can replace the existing GET route with the following:
// const { authMiddleware } = require('../../utils/auth');

// GET all and POST at /api/users
router.route('/charities').get(fetchAllCharities);

router.route('/charities').get(fetchAllOrgProjects);

module.exports = router;