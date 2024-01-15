"use server";

import { Post } from "./models";
import { connectTodb } from "./utils";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const userId = formData.get("userId");
  //   const slug = formData.get("slug");

  // another way
  const { title, desc, userId, slug, img } = Object.fromEntries(formData);
  try {
    connectTodb();
    const newPost = new Post({
      title,
      desc,
      userId,
      slug,
      img,
    });
    await newPost.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    throw new Error("Could Not connect to db");
  }
};

// Delete Post

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectTodb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
  } catch (err) {
    console.log(err);
    throw new Error("Could Not connect to db");
  }
};
