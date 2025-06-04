import { PostFromServer } from "@/app/api/types";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(req: NextRequest, {params}: { params: Promise<{ id: string }> }) {

  try {
    const id = (await params).id;
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "5";

    const res = await fetch(
      `https://683761892c55e01d1849aea9.mockapi.io/users-collection/${id}/posts?page=${page}&limit=${limit}`
    );

    if (res.status === 404) {
      return NextResponse.json([]);
    }

    if (!res.ok) {
      throw new Error(`Ошибка ответа сервера: ${res.status}`);
    }
    
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