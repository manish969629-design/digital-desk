import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error: any) {
    console.error("GET LEADS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      mobile,
      service,
      message,
    } = body;

    if (!name || !mobile || !service) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, Mobile and Service are required",
        },
        {
          status: 400,
        }
      );
    }

    const lead = await Lead.create({
      name,
      mobile,
      service,
      message,
    });

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error: any) {
    console.error("CREATE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead ID is required",
        },
        {
          status: 400,
        }
      );
    }

    await Lead.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}