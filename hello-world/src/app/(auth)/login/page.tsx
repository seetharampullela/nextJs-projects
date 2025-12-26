import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Link href="/complex-dashboard?logInSuccess=true">
        Login to View the User Dashboard
      </Link>
    </div>
  );
}
