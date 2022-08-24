import express, {ErrorRequestHandler, Request, Response} from 'express';
import dotenv from 'dotenv';
import MainRoutes from './routes/api';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import { MulterError } from 'multer';
import cors from 'cors';


dotenv.config();

const server = express();

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(passport.initialize());

server.use(MainRoutes)

server.use(express.static(path.join(__dirname, '../public')));

server.use((req: Request, res: Response) => {
  res.status(404).json({error: 'Endpoint não encontrado'});
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if(err.status) {
    res.status(err.status); //bad request - error do client
  } else {
    res.status(400)
  }
  if(err.message) {
    res.json({error: err.message});
  } else {
    res.json({error: "Ocorreu algum erro."})
  }
  if(err instanceof MulterError) {
    res.json({error: err.code});
  } else {
    console.log( err );
    res.json({error: 'Ocorreu algum erro.'})
  }
};
server.use(errorHandler);

server.listen(process.env.PORT);