const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const animeFavoriteRouter = require('./animeFavoriteRouter');
const animeGenreRouter = require('./animeGenreRouter');
const animeInfoRouter = require('./animeInfoRouter');
const animeRaitingRouter = require('./animeRaitingRouter');
const animeRouter = require('./animeRouter');
const animeTypeRouter = require('./animeTypeRouter');
const commentRouter = require('./commentRouter');

router.use('/user', userRouter);
router.use('/animeFavorite', animeFavoriteRouter);
router.use('/animeGenre', animeGenreRouter);
router.use('/animeInfo', animeInfoRouter);
router.use('/animeRaiting', animeRaitingRouter);
router.use('/animeType', animeTypeRouter);
router.use('/anime', animeRouter);
router.use('/comment', commentRouter);

module.exports = router