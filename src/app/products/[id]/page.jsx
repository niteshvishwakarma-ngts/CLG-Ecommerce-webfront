import ProductDetailsPage from "@/components/product/ProductDetailsPage";

export default function ProductDetails({ params }) {
  return <ProductDetailsPage id={params.id} />;
}
