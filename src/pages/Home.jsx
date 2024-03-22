import {
  Hero,
  Work,
  Product,
  Faq,
  Benefit,
  Supertek,
  OurProducts,
  Partners,
  Testimonials,
  Form,
  Services,
} from "../sections/";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Work />
      </section>
      <section className="padding bg-[#FAFAFA]">
        <Product />
      </section>
      <section id="benefits" className="padding">
        <Services />
      </section>
      <section>
        <Benefit />
      </section>
      <section id="about" className="padding bg-dark-orange-100">
        <Supertek />
      </section>
      <section id="products" className="padding">
        <OurProducts />
      </section>
      <section className="padding bg-dark-orange-100">
        <Partners />
      </section>
      <section className="padding-t">
        <Testimonials />
      </section>
      <section className="padding">
        <Faq />
      </section>
      <section id="contact" className="padding-b padding-x">
        <Form />
      </section>
    </main>
  );
};

export default Home;
