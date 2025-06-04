import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { User } from "../api/types";

const userCard = cva("userCard flex p-3 border border-gray-200 rounded-xl gap-10 hover:scale-103 transform duration-300 ease-in-out hover:shadow-sm hover:border-[#9fa2e0]");
const userCardPhoto = cva("userCardPhoto w-full aspect-square max-w-40 h-full");
const userCardPhotoImage = cva("user-photo w-full h-full object-cover rounded-xl");
const userCardInfo = cva("userCardInfo flex flex-col gap-2");
const userCardFullName = cva("userCardFullName flex gap-2");
const userCardName = cva("userCardName text-xl font-medium");
const userCardDescription = cva("userCardDescription bg-gray-100 p-2 rounded-xl");
const userCardInterests = cva("userCardInterests flex gap-2 flex-wrap");
const userCardInterestLabel = cva("userCardInterestLabel px-2 py-1 bg-[#9fa2e0] text-white rounded-xl");


function UserProfileCard({ user }: { user: User }) {
  return (
    <Link href={`/user-profile/${user.id}`} className={userCard()}>
      <div className={userCardPhoto()}>
        <Image
          src={user.avatar}
          alt='user photo'
          className={userCardPhotoImage()}
          width={200}
          height={200}
          sizes='100vw'
          priority
        />
      </div>
      <div className={userCardInfo()}>
        <div className={userCardFullName()}>
          <span className={userCardName()}>{user.name}</span>
          <span className={userCardName()}>{user.surname}</span>
        </div>
        <p className={userCardDescription()}>{user.blog_description}</p>
        <div className={userCardInterests()}>
          {user.interests.length > 0
            ? user.interests.map((interest, i) => (
                <label key={i} className={userCardInterestLabel()}>
                  {interest}
                </label>
              ))
            : null}
        </div>
      </div>
    </Link>
  );
}

export default UserProfileCard;
