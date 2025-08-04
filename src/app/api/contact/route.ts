import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Create a cached connection variable
let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, company, subject, message } =
      await request.json();

    // Validate the required input
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        {
          error:
            "First name, last name, email, subject, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    try {
      // Connect to MongoDB
      const client = await connectToDatabase();
      const db = client.db("Cluster0");
      const collection = db.collection("contacts");

      // Insert the contact data
      await collection.insertOne({
        firstName,
        lastName,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
        createdAt: new Date(),
      });

      return NextResponse.json(
        { message: "Contact message sent successfully" },
        { status: 201 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
