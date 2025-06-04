import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { cva } from "class-variance-authority";

const homeContent = cva('flex flex-col gap-30 items-center justify-center pt-30');
const hero = cva('flex gap-20 items-center justify-center motion-preset-blur-left motion-duration-3000');
const heroLogo = cva('fill-[#8C90D7] w-full h-full max-w-60');
const heroAbout = cva('flex flex-col gap-5');
const heroTitle = cva('text-7xl font-bold');
const heroDescription = cva('');
const homeCard = cva('shadow-sm flex p-3 items-center gap-20 motion-preset-blur-left motion-duration-2000 motion-delay-500');
const homeCardLink = cva('text-white p-3 rounded-xl animated-gradient');
const homeCardDescription = cva('max-w-md');


export default function Home() {
  return (
    <section className={homeContent()}>
      <div className={hero()}>
        <Logo className={heroLogo()} />
        <div className={heroAbout()}>
          <h1 className={heroTitle()}>Be Better</h1>
          <p className={heroDescription()}>space for those who want to be better</p>
        </div>
      </div>

      <div className={homeCard()}>
        <Link href='/users' className={homeCardLink()}>
          See all blogs
        </Link>
        <p className={homeCardDescription()}>
          On this site you can find blogs of users who write posts on their
          interests.
        </p>
      </div>
    </section>
  );
}
