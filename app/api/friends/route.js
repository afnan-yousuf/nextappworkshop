import { NextResponse } from 'next/server';
export function GET() {
  const list = [
    { id: 1, name: "Afnan" },
    { id: 2, name: "Rahil" },
    { id: 3, name: "Latif" },
  ];
  return NextResponse.json(list);
}
