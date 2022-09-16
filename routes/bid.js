import express from 'express';

import { getPosts, getPost, createPost,   deletePost, updateCart } from '../controllers/bid.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.delete('/:id',  deletePost);
router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id/cartupdate', updateCart);


export default router;