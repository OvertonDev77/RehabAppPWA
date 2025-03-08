import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle POST request to fetch all payers
export async function POST() {
  try {
    const payers = await prisma.payer.findMany({
      select: {
        payer_code: true,
        payer_name: true,
        state: true,
      },
    });
    return NextResponse.json(payers, { status: 200 });
  } catch (error) {
    console.error("Error fetching payers:", error);
    return NextResponse.json(
      { error: "Failed to fetch payers" },
      { status: 500 }
    );
  }
}
