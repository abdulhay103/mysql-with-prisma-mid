import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toString = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        // const reqBody = await req.json();
        let user = await prisma.profile.create({
            data: {
                firstName: "Ok",
                lastName: "test",
                mobile: "123",
            },
        });
        return NextResponse.json({
            status: "Registration Success",
            result: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Registration Fail",
            result: error.toString(),
        });
    }
}
