import Header from "./Header";
import Hero from "./Hero";
import Listings from "./Listings";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Landing = ({ contract }) => {
  return (
    <>
      <Header />
      <main id="content" role="main">
        <Hero />
        <Listings contract={contract} />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
