import express from 'express';

const router = express.Router();

router.post('./login', (req, res) => {
  res.send('./login')
});

router.post('./register', (req, res) => {
  res.send('./register')
});

function user (a:string, b: string)  {
  return a + b
}

export default router