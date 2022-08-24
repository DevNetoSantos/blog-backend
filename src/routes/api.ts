import { Router } from "express";
import * as PostController from '../controllers/PostController';
import * as UserController from '../controllers/UserController';
import { privateRoute } from '../config/passport'; //autorização das rotas
import { upload } from "../config/upload";

const router = Router();

router.post('/login', privateRoute, UserController.login); //fazer login
router.get('/logout', UserController.logout); //fazer logout

router.get('/posts', PostController.indexPosts); //listar todos posts
router.get('/users', UserController.indexUsers); // listar todos users
router.post('/users', UserController.register); // criar usuário
router.delete('/users/:id', UserController.deleteUser); // deletar usuário
router.post('/posts', PostController.createPosts); //criar um post
router.put('/posts/:id', PostController.togglePost); //exibir ou não post
router.delete('/posts/:id', PostController.deletePost); //deletar post

router.get('/category', PostController.indexCategory); //listar categorias
router.post('/category', PostController.createCategory); //criar categoria

router.post('/profile', upload.single('avatar'), UserController.uploadPhoto); // Upload de foto 

export default router;
