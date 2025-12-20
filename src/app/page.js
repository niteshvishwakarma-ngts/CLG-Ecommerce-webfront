import HomePage from "@/components/home/HomePage";
import ProductPage from "@/components/home/ProductPage";
import PromoBannersPage from "@/components/home/PromoBannersPage";
import TestimonialsPage from "@/components/home/TestimonialsPage";
import NewsletterPage from "@/components/newsletter/NewsletterPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <ProductPage />
      <PromoBannersPage/>
      <TestimonialsPage/>
      <NewsletterPage/>
      
    </main>
  );
}
