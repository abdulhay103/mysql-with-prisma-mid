import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let user = await prisma.user.create({
            data: {
                email: reqBody["email"],
                password: reqBody["password"],
                profile: {
                    create: {
                        firstName: reqBody["firstName"],
                        lastName: reqBody["lastName"],
                        mobile: reqBody["mobile"],
                    },
                },
            },
        });
        return NextResponse.json({
            status: "Registration Success",
            data: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Registration Fail",
            data: error.toString(),
        });
    }
}
