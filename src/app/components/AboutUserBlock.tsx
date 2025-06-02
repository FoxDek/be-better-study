import { cva } from "class-variance-authority"
import Image from "next/image"
import { User } from "../api/types";

const aboutUserBlock = cva("about-user max-w-1/4 flex flex-col gap-5");
const userName = cva('text-2xl')
const userPhoto = cva("user-photo w-full h-full object-cover max-w-sm rounded-xl");

export default function AboutUserBlock({ userData }: { userData: User }) {
  return (
    <div className={aboutUserBlock()}>
      <Image
        src={userData.avatar}
        alt='user photo'
        className={userPhoto()}
        width={200}
        height={200}
        sizes="100vw"
        priority
      />
      <div className="flex flex-col px-2 gap-5">
        <div className="flex gap-2">
          <h2 className={userName()}>{userData.name}</h2>
          <h2 className={userName()}>{userData.surname}</h2>
        </div>
        <div className="flex flex-col">
          <span><strong>{userData.age}</strong> years old</span>
          <span>City: {userData.city}</span>
        </div>
        <div className="">
          <label>Blog description:</label>
          <p className="bg-gray-200 p-2 rounded-xl">{userData.blog_description}</p>
        </div>
      </div>
    </div>
  )
}
