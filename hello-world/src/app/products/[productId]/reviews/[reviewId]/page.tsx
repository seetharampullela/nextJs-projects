import { notFound, redirect } from "next/navigation";

export default async function ProductReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
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
