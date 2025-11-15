import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(` ${productId}`);
    }, 100);
  });
  return {
    title: `Product ${title} Details`,
  };
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about the Product {productId}</h1>;
}
