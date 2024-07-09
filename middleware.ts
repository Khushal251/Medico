// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// {
//   publicRoutes: ['/api/webhook/clerk']
// }

import { authMiddleware } from "@clerk/nextjs/server"; 

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
}