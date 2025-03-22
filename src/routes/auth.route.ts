import express from 'express';
import {
  authHealth,
  forgotPassword,
  resendVerification,
  resetPassword,
  signin,
  signup,
  verification,
} from '../controllers/auth.controller';

const router = express.Router();


router.get('/', authHealth)
router.post('/signup', signup);
router.post('/login', signin);
router.post('/verification', verification);
router.post('/resendverification', resendVerification);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword', resetPassword);

export default router;
