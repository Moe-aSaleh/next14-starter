import { connectTodb } from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectTodb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Faild To catch posts");
  }
};
export const getPost = async (slug) => {
  try {
    connectTodb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Faild To catch post");
  }
};

export const getUser = async (id) => {
  try {
    connectTodb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Faild To catch user");
  }
};

export const getUsers = async () => {
  try {
    connectTodb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Faild To catch users");
  }
};
