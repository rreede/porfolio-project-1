import Link from "next/link";
import data from './productsList';  // Assuming productsList is the correct path to your data
import Image from "next/image";
import Header from "./ui/Header";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <main>
        <div className="wrapper text-center">
          <h2 className="text-2xl font-bold">Popular products</h2>

          <div className="popular-product-container">
            {data.map((item) => {
              return (
                <div className="popular-products font-bold" key={item.id}>
                  <div className="image-container">
                    <Image
                      className="popular-img"
                      src={`/${item.img[0]}`}
                      width={200}
                      height={100}
                      alt={item.name}
                    />
                  </div>
                  {item.name} <br/>
                  {item.price}$
                  <br />
                  <button className="bg-blue-700 rounded-md px-5 py-2.5 mt-5 text-white">
                    <Link href={`/products/${item.id}`}>See more</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer>
        <div className="wrapper text-center">
          <p>Tech.io {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
