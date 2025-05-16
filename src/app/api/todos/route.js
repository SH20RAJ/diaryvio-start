import { NextResponse } from 'next/server';
import { getDbFromContext } from '@/lib/db';
import { todos } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export async function GET(request, context) {
  try {
    const db = getDbFromContext(context);
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const userTodos = await db.select().from(todos).where(eq(todos.userId, userId));
    return NextResponse.json(userTodos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

export async function POST(request, context) {
  try {
    const db = getDbFromContext(context);
    const { title, userId } = await request.json();

    if (!title || !userId) {
      return NextResponse.json({ error: 'Title and User ID are required' }, { status: 400 });
    }

    const todoId = nanoid();
    const newTodo = await db.insert(todos).values({
      id: todoId,
      title,
      userId,
      completed: false
    }).returning();

    return NextResponse.json(newTodo[0]);
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
  }
}