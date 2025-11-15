import { notFound, redirect } from "next/navigation";

function getrandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default async function ProductReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const random = getrandomInt(2);
  if (random == 1) {
    throw new Error("Failed loading review details");
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound()
    redirect(`/products/${productId}`);
  }
  return (
    <h1>
      Review {reviewId} for the Product {productId}
    </h1>
  );
}
