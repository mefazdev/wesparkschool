import { NextResponse } from "next/server";

const ADMIN_USER = {
    username:process.env.ADMIN_USERNAME,
    password:process.env.ADMIN_PASSWORD
}

export async function POST(req) {
  
    const {username,password} = await req.json();
    console.log(username,password,'admin user')
     // Validate credentials
     if(username === ADMIN_USER.username && password === ADMIN_USER.password){
          // Set an auth cookie for session tracking
          const response = NextResponse.json({message:'Login Successfull'})
          response.cookies.set('auth', 'true', {httpOnly:true, path:'/'})
          return response;
     }

     return NextResponse.json({message:'Invalid credential'}, {status:401})
}