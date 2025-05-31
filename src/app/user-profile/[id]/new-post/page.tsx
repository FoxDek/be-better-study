'use client'
import { cva } from 'class-variance-authority';
import { useState } from 'react';
import Cross from "@/assets/cross.svg";
import { useRouter } from 'next/navigation';
import { createPost } from '@/utils/post';
import { PostToCreate } from '../../../api/types';

const newPostContent = cva('flex items-center justify-center py-10')
const modalSubstrate = cva("relative bg-white px-5 py-7 rounded-lg shadow-lg w-full max-w-md h-fit flex flex-col gap-3")
const modalTitle = cva("text-xl font-bold text-center pb-5")
const modalInput = cva("w-full border border-gray-300 p-3 rounded-xl shadow-sm")
const modalAddPostButton = cva('border border-gray-300 p-3 rounded-xl shadow-sm bg-[#8C90D7] hover:bg-[#8488CD] text-white mt-5')
const modalCloseButton = cva('absolute right-5 top-5 bg-[#8C90D7] hover:bg-[#8488CD] aspect-square w-7 flex items-center justify-center p-2 rounded-lg shadow-lg')

export default function NewPost() {
  const [postTitle, setPostTitle] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const router = useRouter()

  const handleAddPost = async () => {
    if (postTitle === '') {
      alert('заполните поле Title')
      return
    } else if (postDescription === '') {
      alert('заполните поле content')
      return
    }

    try {
      const post: PostToCreate = {
        title: postTitle,
        content: postDescription,
        likes: 0,
        repostes: 0,
      }

      await createPost(post)
      alert('Опубликовано')
      router.back()
    } catch (err) {
      alert('Ошибка во время публикации')
      console.error(err)
    }
  }

  return (
      <div className={newPostContent()}>
        <div className={modalSubstrate()}>
          <h2 className={modalTitle()}>Create post</h2>
          <input className={modalInput()} type="text" placeholder="title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} maxLength={30}/>
          <textarea className={modalInput()} placeholder="content" value={postDescription} onChange={(e) => setPostDescription(e.target.value)}/>
          <button className={modalAddPostButton()} onClick={() => handleAddPost()}>New post</button>
          <button className={modalCloseButton()} onClick={() => router.back()}>
            <Cross className='fill-white w-full h-full' />
          </button>
        </div>
      </div>

  );
}
