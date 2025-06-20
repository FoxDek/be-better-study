import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {params}: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const res = await fetch(
      `https://683761892c55e01d1849aea9.mockapi.io/users-collection/${id}`
    );
    const data = await res.json();
    
    return NextResponse.json(data)
  } catch (err) {
    console.error(err);
  }
}

export async function POST(req: NextRequest, {params}: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
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


export async function DELETE(req: NextRequest, {params}: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    const postId = await req.json();
    console.log('Пост на сервере: ', postId)
    
    const res = await fetch(`https://683761892c55e01d1849aea9.mockapi.io/users-collection/${id}/posts/${postId}`, {
      method: 'DELETE',
    })

    const responseData = await res.json();

    return NextResponse.json(responseData, {
      status: 201,
    });

  } catch (err) {
    console.error("Post deleting error: ", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}