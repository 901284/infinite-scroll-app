import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=1&limit=8&order=popularity`
    );

    const data = await res.json();

    return NextResponse.json({
      status: 200,
      message: 'success',
      data,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 500,
      message: 'error',
    });
  }
}
