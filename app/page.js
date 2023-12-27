import CategoryList from "@/components/Categories/CategoryList";
import NewCollection from "@/components/collections/NewCollection";
import DealOfMonth from "@/components/deals/DealOfMonth";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList />
      <NewCollection />
      <DealOfMonth />
      <Features />
      <Footer />
    </>
  );
};
export default Home;
