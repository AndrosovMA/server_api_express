import express from 'express';
import userRouter from './users/users.js'

const port = 8000;
const app = express();

//midlewere - при запросе любым методом на /hellow мы должны ключить обработчик
app.all('/hello', (req, res,next) => {
  console.log('All');
  next();
})

app.get('/hello', (req, res) => {
  res.send('hi');
  console.log('отправил ответ на запрос');
})

app.use('./user', userRouter);


app.listen(port, () => {
  console.log(`сервер запущен на http:localhost:${port}`);
})



// динамические роуты
// 'hel?lo', 'h(el)?lo' - символ l не обязателен
// 'hel+lo' - не ограниченное кол-во символов после +
// 'hel*lo' - любой символ и не ограниченное кол-во символов после
//  '.*a$' - regexp, последний символ должен быть a
