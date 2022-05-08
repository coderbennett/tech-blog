const router = require('express').Router();
const apiRoutes = require('./api');
const blogRoutes = require('./blogRoutes');
const homepageRoutes = require('./homepageRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/api', apiRoutes);
// router.use('/blog', blogRoutes);
router.use('/home', homepageRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;