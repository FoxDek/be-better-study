import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const res = await fetch(
      `https://683761892c55e01d1849aea9.mockapi.io/users-collection/${id}`
    );
    const data = await res.json();
    
    return NextResponse.json(data)
  } catch (err) {
    console.error(err);
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    console.log(id)
    const data = await req.json();

    const res = await fetch(
      `https://683761892c55e01d1849aea9.mockapi.io/users-collection/${id}/posts`,
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
