import { NextRequest, NextResponse } from "next/server";
import { PostFromServer } from "@/app/api/types";

const dataDateMap = (posts: PostFromServer[]) => {
  return posts.map((post) => {
    let date;
    if (typeof post.date === "number") {
      date = new Date(post.date * 1000); // Умножаем на 1000, так как JS использует миллисекунды
    } else if (typeof post.date === "string") {
      date = new Date(post.date);
    } else {
      date = post.date;
    }

    return {
      ...post,
      date: date.toLocaleString(),
    };
  });
};

export async function GET() {
  try {
    const res = await fetch(
      "https://683761892c55e01d1849aea9.mockapi.io/posts"
    );
    const data = await res.json();
    const mappedData = dataDateMap(data);

    return NextResponse.json(mappedData);
  } catch (error) {
    console.error("Ошибка при выгрузке постов: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const res = await fetch(
      "https://683761892c55e01d1849aea9.mockapi.io/posts",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await res.json();

    return NextResponse.json(responseData, {
      status: 201,
    });
  } catch (err) {
    console.error("Ошибка при публикации поста: ", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
