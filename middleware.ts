export function middleware(request: Request) {
  console.log(request.headers.get("user-agent"));
}
