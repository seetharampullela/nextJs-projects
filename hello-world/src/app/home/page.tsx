import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/forgot-password">Forgot Password</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
}
