import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST() {
    BigInt.prototype.toString = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        //Insert One
        await prisma.user.update({
            where: { id: 1 },
            data: {
                firstName: "Rejaul",
                lastName: "Karim",
                email: "reza@gmail.com",
                mobile: "017001524",
                password: "abc-000",
                otp: "0000",
            },
        });
        return NextResponse.json({
            status: "Success",
        });
    } catch (error) {
        console.log(error.toString());
        return NextResponse.json({
            status: "Fail",
        });
    }
}
