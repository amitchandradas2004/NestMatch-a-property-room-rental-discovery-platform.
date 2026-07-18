import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeaturedListings from "../components/featured-listings";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedListings />
      </main>
    </>
  );
}
