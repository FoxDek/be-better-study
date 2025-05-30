"use client";
import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { Post } from "../../api/types";
import UserPosts from "../../components/UserPosts";
import AboutUserBlock from "../../components/AboutUserBlock";
import Search from "@/assets/search.svg";

const userProfile = cva("flex gap-10 h-full");
const userPostsBlock = cva("user-posts-block w-full flex flex-col gap-5");
const userPostsBlockTop = cva('flex justify-between items-center pb-5');
const userPostsBlockTitle = cva('text-2xl')
const userPostsBlockButtons = cva('flex gap-5');
const userPostsBlockButton = cva(' border-2  px-2 py-1 rounded-xl flex gap-3 items-center  transform duration-300 ease-in-out', {
  variants: {
    active: {
      true: 'bg-white fill-[#8C90D7] border-[#8C90D7] text-[#8C90D7]',
      false: 'text-white border-white bg-[#8C90D7] hover:bg-[#8488CD]',
    }
  },
});

const userPostsBlockButtonIcon = cva('w-full h-full max-w-5 transform duration-300 ease-in-out', {
  variants: {
    active: {
      true: 'fill-[#8C90D7]',
      false: 'fill-white',
    }
  },
});


const userPostsBlockBottom = cva(
  "transition-all duration-300 ease-in-out overflow-hidden flex gap-10",
  {
    variants: {
      visible: {
        true: "max-h-50 opacity-100",
        false: "max-h-0 opacity-0 pointer-events-none",
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
);

// const post: Post = {
//   title: "My post",
//   content:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas?",
//   likes: 10,
//   repostes: 5,
//   date: "2025-03-28T09:07:45",
// };

export default function UserProfile() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/user-profile/1");
        const data = await res.json();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Ошибка при выгрузке постов: ", err);
      }
    };

    fetchPosts();
  }, []);

  // const createPost = async () => {
  //   try {
  //     const res = await fetch("/api/user-profile/1", {
  //       method: "POST",
  //       body: JSON.stringify(post),
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.error("Ошибка при публикации поста: ", error);
  //   }
  // };

  return (
    <section className={userProfile()}>
      <AboutUserBlock />

      <div className={userPostsBlock()}>
        <div className={userPostsBlockTop()}>
          <h1 className={userPostsBlockTitle()}>Posts:</h1>

          <div className={userPostsBlockButtons()}>
            <button className={userPostsBlockButton({ active: searchIsOpen })} onClick={() => setSearchIsOpen(!searchIsOpen)}>
              <Search className={userPostsBlockButtonIcon({ active: searchIsOpen })} />
            </button>
            <button className={userPostsBlockButton({ active: modalIsOpen })} onClick={() => setModalIsOpen(!modalIsOpen) }>
              New Post
            </button>
          </div>
        </div>

        <div className={userPostsBlockBottom({ visible: searchIsOpen })}>
          <input
            type='text'
            placeholder='search'
            className='w-full border border-gray-300 p-3 rounded-xl shadow-sm'
          />
          <button className='border border-gray-300 p-3 rounded-xl shadow-sm'>
            search
          </button>
        </div>

        <UserPosts isLoading={isLoading} posts={posts} />
      </div>
    </section>
  );
}
