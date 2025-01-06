import express from 'express'
import  validation from './validationController.js';

const AuthRoute = express.Routes();
AuthRoute.get("/validation",validation);

export default AuthRoute;