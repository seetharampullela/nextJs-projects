"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    alert("Order Placed Successfully!");
    router.push("/");
    /* 
        You can also use router.replace("/") to replace the current entry
        in the history stack instead of adding a new one.
        Also, router.back() can be used to go back to the previous page.
        And, router.prefetch("/") can be used to prefetch the page for faster navigation.
    */
  };

  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
