import { NextResponse, Request } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle POST request to fetch rehabs with optional filtering
export async function POST(req) {
  try {
    const { state, zip } = await req.json(); // Get filter options from the request body

    const rehabs = await prisma.allRehabs.findMany({
      where: {
        ...(state && { state }),
        ...(zip && { zip }),
      },
      select: {
        id: true,
        name1: true,
        city: true,
        state: true,
        zip: true,
        provider_first_name: true,
        provider_last_name: true,
        name1: true,
        name2: true,
        phone: true,
        mailing_address: true,
      },
    });

    return NextResponse.json(rehabs, { status: 200 });
  } catch (error) {
    console.error("Error fetching rehabs:", error);
    return NextResponse.json(
      { error: "Failed to fetch rehabs" },
      { status: 500 }
    );
  }
}
