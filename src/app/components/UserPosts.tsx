import { cva } from "class-variance-authority";
import Like from "@/assets/like.svg";
import Repost from "@/assets/repost.svg";
import Loader from "./Loader";
import { PostFromServer } from '../api/types';
import Cross from "@/assets/cross.svg";

const userPosts = cva("userPosts flex flex-col gap-7 h-full");
const userLoaderBlock = cva('userLoaderBlock flex items-center justify-center h-full')
const userPostCard = cva(
  "userPostCard relative border border-gray-300 p-5 rounded-xl shadow-sm flex flex-col gap-3"
);
const userPostCardTop = cva("userPostCardTop flex justify-between");
const userPostCloseButton = cva('userPostCloseButton absolute group bg-white right-3 top-3 border border-[#8C90D7] hover:bg-[#8488CD] aspect-square w-7 flex items-center justify-center p-2 rounded-lg transform duration-300 ease-in-out')
const userPostCloseButtonIcon = cva('fill-[#8C90D7] w-full h-full group-hover:fill-white transform duration-300 ease-in-out')
const userPostCardContent = cva("userPostCardContent");
const userPostCardBottom = cva("userPostCardBottom flex items-center justify-between")
const userPostCardFeedback = cva("userPostCardFeedback flex gap-5");
const feedbackButton = cva("feedbackButton group border border-black px-3 py-1 rounded-xl flex gap-3 items-center hover:border-[#8C90D7] hover:text-[#8C90D7] transform duration-300 ease-in-out cursor-pointer hover:scale-102");
const feedbackButtonIcon = cva("feedbackButtonIcon w-full h-full max-w-5 fill-black group-hover:fill-[#8C90D7] transform duration-300 ease-in-out ");


export default function UserPosts({posts, isLoading, handleDeletePost}: {posts: PostFromServer[], isLoading: boolean, handleDeletePost: (id: string) => void}) {
  return (
    <div className={userPosts()}>
      {isLoading ? (
        <div className={userLoaderBlock()}>
          <Loader spinnerColor='border-[#8C90D7]' />
        </div>
      ) : (
        posts.length > 0 ? posts.map((post) => (
          <div key={post.id} className={userPostCard()}>
            <div className={userPostCardTop()}>
              <h3 className=''>{post.title}</h3>
              <button className={userPostCloseButton()} onClick={() => handleDeletePost(post.id)}>
                <Cross className={userPostCloseButtonIcon()} />
              </button>
            </div>
            <div className={userPostCardContent()}>
              <p className=''>{post.content}</p>
            </div>
            <div className={userPostCardBottom()}>
              <div className={userPostCardFeedback()}>
                <button className={feedbackButton()}>
                  <Like className={feedbackButtonIcon()}/>{post.likes}
                </button>
                <button className={feedbackButton()}>
                  <Repost className={feedbackButtonIcon()}/> {post.repostes}
                </button>
              </div>
              <span className="opacity-40">{post.date}</span>
            </div>
          </div>
        )) : <p className="text-center italic text-2xl opacity-50">There are no posts yet</p>
      )}
    </div>
  )
}
