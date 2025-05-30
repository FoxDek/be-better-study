import { cva } from "class-variance-authority"
import Image from "next/image"

const aboutUserBlock = cva("about-user max-w-1/4 flex flex-col gap-5");
const userName = cva('text-2xl')
const userPhoto = cva("user-photo w-full h-full object-cover max-w-sm rounded-xl");

const userData = {
  name: "John",
  surname: "Doe",
  age: 30,
  city: "New York",
  blog_description: 'My blog about the best things in the world',
}


export default function AboutUserBlock() {
  return (
    <div className={aboutUserBlock()}>
      <Image
        src={"/user-photo-template.jpg"}
        alt='user photo'
        className={userPhoto()}
        width={200}
        height={200}
        layout='responsive'
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
