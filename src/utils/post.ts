import { PostToCreate } from "@/app/api/types";

  
export const createPost = async (post: PostToCreate, id: string) => {
  try {
    await fetch(`/api/user-profile/${id}`, {
      method: "POST",
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.error("Ошибка при публикации поста: ", error);
  }
};