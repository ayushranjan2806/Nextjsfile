import { user } from '@/app/util/db';
import { NextResponse } from 'next/server';

export function GET(request, content) {
  const { id, email } = content.params; // Assuming the parameters are called 'id' and 'email'

  // Filter user data based on the provided 'id' and 'email' parameters
  const userData = user.filter((item) => item.id === id && item.name === name);

  // Return the filtered user data as a JSON response with status 200
  return NextResponse.json(userData, { status: 200 });
}
