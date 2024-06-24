import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/lib/db';
import Content from '@/lib/models/contentSchema';

export async function GET(req: NextRequest) {
  await connectToMongoDB();

  const url = new URL(req.url);
  const query = url.searchParams.get('q') || '';

  try {
    const contents = await Content.find({
      title: { $regex: query, $options: 'i' }, // Case-insensitive search
    });
    return NextResponse.json(contents);
  } catch (error) {
    console.error('Error fetching contents:', error);
    return new NextResponse('Error Fetching the contents', { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  await connectToMongoDB();

  try {
    const { id } = await req.json();
    const content = await Content.findById(id);

    if (!content) {
      return new NextResponse('Content not found', { status: 404 });
    }

    content.isBookmarked = !content.isBookmarked;
    await content.save();

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error updating bookmark status:', error);
    return new NextResponse('Error updating bookmark status', { status: 500 });
  }
}
