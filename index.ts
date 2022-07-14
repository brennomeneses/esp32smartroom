import Express from 'express';
import router from './routes';
import cors from 'cors';

const app = Express();

app.use(Express.json());

app.use(cors());

app.use(router);

app.listen(process.env.PORT || 3003, ()=>{
    console.log("Express running on http://localhost:3000");
});
