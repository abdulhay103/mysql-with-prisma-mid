import { NextResponse } from "next/server";

export async function POST(req) {
    const res = await req.json();
    let email = res["email"];
    let password = res["password"];

    if (email) {
        return NextResponse.json({
            status: "success",
            email: email,
            password: password,
        });
    } else {
        return NextResponse.json({
            status: "Fail",
        });
    }
}
