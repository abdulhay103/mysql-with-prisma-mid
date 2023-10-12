import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        const email = reqBody["email"];
        let password = reqBody["password"];

        let result = await prisma.user.findUnique({
            where: {
                email: email,
                password: password,
            },
        });

        return NextResponse.json({
            status: "Login Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Login Fail",
            data: error.toString(),
        });
    }
}
