import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://683761892c55e01d1849aea9.mockapi.io/posts");
    const data = await res.json();
    return NextResponse.json(data);
    
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
          'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await res.json()

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
