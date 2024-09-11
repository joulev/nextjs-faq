export function middleware(request: Request) {
  const userAgent = request.headers.get("user-agent");
  // Prevent Discord from crawling the site, to make it stop embedding the opengraph image.
  // We need to keep the opengraph image for other platforms though since it'll look very weird without it.
  if (userAgent?.includes("Discordbot")) return new Response(null, { status: 403 });
}
