import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeaturedListings from "../components/featured-listings";
import HowItWorks from "../components/how-it-works";
import Categories from "../components/categories";
import Stats from "../components/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedListings />
        <HowItWorks />
        <Categories />
        <Stats />
      </main>
    </>
  );
}
