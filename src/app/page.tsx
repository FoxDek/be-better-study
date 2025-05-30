import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href={"/user-profile/1"}>
        click
      </Link>
    </div>
  )
}
