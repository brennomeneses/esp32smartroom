import Express from 'express';
import router from './routes';

const app = Express();

app.use(Express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(router);

app.listen(process.env.PORT || 3003, ()=>{
    console.log("Express running on http://localhost:3003");
});