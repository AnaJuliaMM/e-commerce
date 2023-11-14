import { productList } from "@/app/constants/productList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function convertToBRL(text: string) {}

  return (
    <main className="flex  flex-col  justify-between p-10 w-full gap-10">
      <h1 className="text-center text-xl">Um cafézinho ou um latte para relaxar?</h1>
      <section className="flex gap-5 w-full">
        {productList.map((product) => (
          <Link href={`/products/${product.id}`}
            className="bg-slate-50 text-black w-full flex-col gap-2 justify-between p-5 rounded-md  transition-all hover:scale-105 hover:bg-slate-200"
            key={product.id}
          >
            <div className="w-full flex justify-between h-1/10">
              <p>
                <strong>Satisfação:</strong> {product.avaliation}
              </p>
              {product.promotional_price ? (
                <div className="text-slate-500 font-bold">
                  <p className="line-through text-slice-300 text-xs">
                    {product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <h3>
                    {product.promotional_price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                </div>
              ) : (
                <h3 className="text-slate-500 font-bold">
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
              )}
            </div>
            <div>
              <figure>
                <Image
                  src={product.image}
                  alt="Visualização do produto"
                  width={110}
                  height={110}
                />
                <figcaption>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                </figcaption>
              </figure>

              <p className="text-xs">{product.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
