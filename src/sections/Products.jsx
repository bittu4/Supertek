import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const Product = () => {
  return (
    <section className="w-full max-container flex items-center flex-col">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Our Premium Products
      </h3>
      <div className="grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 xl:gap-14 lg:gap-8 gap-4 mt-12">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
