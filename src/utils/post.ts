import { Post } from "@/app/api/types";

  
  export const createPost = async (post: Post) => {
    try {
      const res = await fetch("/api/user-profile/1", {
        method: "POST",
        body: JSON.stringify(post),
      });
      console.log(res);
    } catch (error) {
      console.error("Ошибка при публикации поста: ", error);
    }
  };