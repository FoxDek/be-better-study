import { cva } from "class-variance-authority";
import Like from "@/assets/like.svg";
import Repost from "@/assets/repost.svg";
import Loader from "./Loader";
import { Post } from '../api/types';

const userPosts = cva("user-posts flex flex-col gap-7 h-full");
const userPostCard = cva(
  "user-post-card border border-gray-300 p-5 rounded-xl shadow-sm flex flex-col gap-3"
);
const userPostCardTop = cva("user-post-card-top flex justify-between");
const userPostCardContent = cva("user-post-card-content");
const userPostCardFeedback = cva("user-post-card-feedback flex gap-10");
const feedbackButton = cva("group border border-black px-3 py-1 rounded-xl flex gap-3 items-center hover:border-[#8C90D7] hover:text-[#8C90D7] transform duration-300 ease-in-out cursor-pointer hover:scale-102");
const feedbackButtonIcon = cva("w-full h-full max-w-5 fill-black group-hover:fill-[#8C90D7] transform duration-300 ease-in-out ");


export default function UserPosts({posts, isLoading}: {posts: Post[], isLoading: boolean}) {
  return (
    <div className={userPosts()}>
      {isLoading ? (
        <div className='flex items-center justify-center h-full'>
          <Loader spinnerColor='border-[#8C90D7]' />
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={userPostCard()}>
            <div className={userPostCardTop()}>
              <h3 className=''>{post.title}</h3>
              <span>{post.date}</span>
            </div>
            <div className={userPostCardContent()}>
              <p className=''>{post.content}</p>
            </div>
            <div className={userPostCardFeedback()}>
              <button className={feedbackButton()}>
                <Like className={feedbackButtonIcon()}/>{post.likes}
              </button>
              <div className={feedbackButton()}>
                <Repost className={feedbackButtonIcon()}/> {post.repostes}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
