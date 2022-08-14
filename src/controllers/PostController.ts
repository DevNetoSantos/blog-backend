import { Request, Response } from "express";
import { PostService } from "../services/PostServices";
import { UserService } from "../services/UserServices";

export const indexPosts = async (req: Request, res: Response) => {
  const posts = await PostService.findAllPosts();
  res.status(200).json({posts});
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await PostService.createCategory(name);
  res.status(201).json({category: newCategory});
}; 

export const indexCategory = async (req: Request, res: Response) => {
  const category = await PostService.findAllCategory();
  res.status(200).json({categorias: category});
};

export const createPosts = async (req: Request, res: Response) => {
  const {title, body, author, categoryId} = req.body;
  if(title && body && author && categoryId) {
    const user = await UserService.findOne({id: parseInt(author)});
    if(user) {
      const newPost = await PostService.createPost({
        title, body, authorId: user.id, categoryId
      });
      res.status(201).json({newPost});
    } else {
      res.status(404).json({error: 'Usuário não encontrado.'});
    };
  } else {
    res.status(404).json({error: 'Preencha todos os dados.'});
  };
};

export const togglePost = async (req: Request, res: Response ) => {
  const { id } = req.params;
  const post = await PostService.findOnePost(parseInt(id));
  if(post) {
    const postUpdate = await PostService.updateToggle(
      post.id,
      {published: !post.published}
    );
    res.status(201).json({post: postUpdate});
  } else {
    res.status(404).json({error: 'Post não existe'});
  };
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await PostService.findOnePost(parseInt(id));
  if(post) {
    await PostService.deletarPost(parseInt(id));
    res.status(200).json({status: true});
  } else {
    res.status(404).json({error: 'Post não existe'});
  };
};