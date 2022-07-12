import Express from 'express';
import router from './routes';

const app = Express();

app.use(Express.json());

app.use(router);

app.listen(process.env.PORT || 3007, ()=>{
    console.log("Express running on http://localhost:3007");
    // console.log(process.env.DATABASE_URL);
})