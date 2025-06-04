import Link from "next/link";
import Logo from "@/assets/logo.svg";

export default function Home() {
  return (
    <div className='flex flex-col gap-30 items-center justify-center pt-30'>
      <div className='flex gap-20 items-center justify-center'>
        <Logo className='fill-[#8C90D7] w-full h-full max-w-60' />
        <div className='flex flex-col gap-5'>
          <h1 className='text-7xl font-bold '>Be Better</h1>
          <p className=''>space for those who want to be better</p>
        </div>
      </div>

      <div className='shadow-sm flex p-3 items-center gap-20'>
        <Link href='/users' className='text-white p-3 rounded-xl animated-gradient'>
          See all blogs
        </Link>
        <p className='max-w-md'>
          On this site you can find blogs of users who write posts on their
          interests.
        </p>
      </div>
    </div>
  );
}
