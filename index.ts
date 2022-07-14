import Express from 'express';
import router from './routes';

const app = Express();

app.use(Express.json());

app.use((req, res, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });

app.use(router);

app.listen(process.env.PORT || 3003, ()=>{
    console.log("Express running on http://localhost:3000");
});
