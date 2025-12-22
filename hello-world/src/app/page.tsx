import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home!</h1>
      <div className="flex gap-4">
        <Link href="/(auth)/login">Go to Login</Link>
        <Link href="/products">Go to Products</Link>
        <Link href="/articles/breaking-news-Delhi">Visit Delhi News</Link>
      </div>
    </>
  );
}
