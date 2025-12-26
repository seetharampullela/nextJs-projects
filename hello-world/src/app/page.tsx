import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold gap-2">Welcome to Home!</h1>
      <div className="grid grid-col-1 gap-2 mt-5">
        <Link href="/login">Go to Login</Link>
        <Link href="/products">Go to Products</Link>
        <Link href="/articles/breaking-news-Delhi">Visit Delhi News</Link>
        <Link href="/photo-feed">Photo Gallery</Link>
      </div>
    </>
  );
}
