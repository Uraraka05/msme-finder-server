// server/routes/msmeRoutes.js

import express from 'express';
import { getMsmes } from '../controllers/msmeController.js';

const router = express.Router();

// When a GET request is made to '/api/msmes', call the getMsmes function
router.get('/', getMsmes);

export default router;