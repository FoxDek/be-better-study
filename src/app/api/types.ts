
// Тип для поста, который приходит с сервера (date гарантированно есть)
export type PostFromServer = {
  title: string;
  content: string;
  likes: number;
  repostes: number;
  date: string | number; // Обязательное поле
  id: string;
};

// Тип для создания поста (date необязателен)
export type PostToCreate = {
  title: string;
  content: string;
  likes?: number;
  repostes?: number;
  date?: never; // или просто не указываем
};