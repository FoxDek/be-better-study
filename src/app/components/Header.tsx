import Logo from "@/assets/logo.svg";
import LogIn from "@/assets/log_in.svg";
import { cva } from "class-variance-authority";
import Link from "next/link";

const headerIcon = cva(
  "w-full h-full max-w-10 fill-white hover:fill-emerald-400 transform duration-300 ease-in-out "
);

export default function Header() {
  return (
    <div className='bg-linear-to-r from-[#8C90D7] to-[#8488CD] p-3'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-5'>
          <Link href={"/"} className=''>
            <Logo className={headerIcon()} />
          </Link>
          <span className='text-white text-xl '>be better</span>

          <Link href={"/"} className='ml-auto'>
            <LogIn className={headerIcon()} />
          </Link>
        </div>
      </div>
    </div>
  );
}
