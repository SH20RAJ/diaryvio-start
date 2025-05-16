import { NextResponse } from 'next/server';
import { getDbFromContext } from '@/lib/db';
import { todos } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(request, context) {
  try {
    const db = getDbFromContext(context);
    const { id } = context.params;
    const { completed } = await request.json();

    if (completed === undefined) {
      return NextResponse.json({ error: 'Completed status is required' }, { status: 400 });
    }

    const updatedTodo = await db.update(todos)
      .set({
        completed,
        updatedAt: new Date()
      })
      .where(eq(todos.id, id))
      .returning();

    if (!updatedTodo.length) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json(updatedTodo[0]);
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
  }
}

export async function DELETE(request, context) {
  try {
    const db = getDbFromContext(context);
    const { id } = context.params;

    const result = await db.delete(todos).where(eq(todos.id, id)).returning({ id: todos.id });

    if (!result.length) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return NextResponse.json({ error: 'Failed to delete todo' }, { status: 500 });
  }
}