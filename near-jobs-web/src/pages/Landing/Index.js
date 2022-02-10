import Header from "./Header";
import Hero from "./Hero";
import Listings from "./Listings";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <main id="content" role="main">
        <Hero />
        <Listings />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
