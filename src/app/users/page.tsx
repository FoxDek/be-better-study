import { cva } from "class-variance-authority";
import UserProfileCard from '../components/UserProfileCard';
import { User } from "../api/types";


const usersBlockContent = cva("flex items-center flex-col");
const usersBlockTitle = cva("text-4xl font-semibold pb-10");
const usersCards = cva("grid grid-cols-1 md:grid-cols-2 gap-5");


export default async function Users() {
  const users = await fetch(
    "https://683761892c55e01d1849aea9.mockapi.io/users-collection"
  );
  const usersData = await users.json();

  return (
    <div className={usersBlockContent()}>
      <h1 className={usersBlockTitle()}>All blogs</h1>
      <div className={usersCards()}>
        
        {usersData.map((user: User) => (
          <UserProfileCard key={user.id} user={user}/>
        )) }

      </div>
    </div>
  );
}
