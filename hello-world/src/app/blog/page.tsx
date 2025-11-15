import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is the blog page description",
};
/* 
  Simulating a delay to demonstrate loading UI
 */
export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Welcome to my Blog!</h1>;
}
