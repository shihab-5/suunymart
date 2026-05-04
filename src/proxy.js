import { NextResponse } from "next/server"
import { auth } from "./lib/auth"
import { headers } from "next/headers"


export async function proxy(request) {

 const session = await auth.api.getSession({
        headers: await headers()
    })
if(session){
    return NextResponse.next();
}
else{
      return NextResponse.redirect(new URL('/login', request.url))

}
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/profile', '/products/:path*'],
}