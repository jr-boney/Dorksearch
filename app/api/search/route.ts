// app/api/search/route.ts
import { NextResponse } from "next/server";
import Fuse from "fuse.js";

const dorksData = [
  { title: "Admin Login Page", query: 'inurl:"admin/login"' },
  { title: "Sensitive Files", query: 'filetype:pdf "confidential"' },
  { title: "Login Page", query: 'inurl:"login.php"' },
  { title: "Vulnerable Website", query: 'inurl:"/phpinfo.php"' },
];

const fuse = new Fuse(dorksData, {
  keys: ["title", "query"],
  threshold: 0.3,
});

export async function GET(req: Request) {
  const { searchQuery } = req.url;

  if (!searchQuery) {
    return NextResponse.json({ error: "No search query provided" }, { status: 400 });
  }

  const results = fuse.search(searchQuery);

  return NextResponse.json(results);
}
