import { NextResponse } from "next/server";

export async function GET() {
  // simulate delay
  await new Promise((res) => setTimeout(res, 1200));

  return NextResponse.json([
    {
      _id: "1",
      name: "Kookaburra Bat",
      price: 250,
      image: "/download.jpeg",
    },
    {
      _id: "2",
      name: "SG Ball",
      price: 20,
      image: "/download.jpeg",
    },
    {
      _id: "3",
      name: "Gray-Nicolls Gloves",
      price: 80,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
    {
      _id: "4",
      name: "Adidas Pads",
      price: 95,
      image: "/download.jpeg",
    },
  ]);
}
