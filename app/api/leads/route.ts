import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Lead from "@/models/Lead";

async function connectDB() {
  if (mongoose.connection.readyState >= 1)
    return;

  await mongoose.connect(
    process.env.MONGODB_URI as string
  );
}

export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const lead = await Lead.create(body);

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const { id, status } =
      await req.json();

    await Lead.findByIdAndUpdate(id, {
      status,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } =
      await req.json();

    await Lead.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}