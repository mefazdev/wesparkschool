import { NextResponse } from "next/server";

export async function GET() {
    const response =  NextResponse.json({messsage:'Logged out successfully'});
    response.cookies.delete('auth',{path:'/'})
    return response
}