import React from 'react'
import { productList } from '@/app/constants/productList';
import Image from 'next/image';


// Essa interface define a estrutura dos params, de forma que ele possua um objeto denominado params do tipo Params
interface PageProps {
  params : Params;
}


// Define um tipo em TypeScript, esse tipo é um objeto que contém um valor number
type Params = {
  product: number
}

export default function page({params}: PageProps) {
  const product = productList[params.product]

  return (
    <div className='flex-col gap-10 w-full p-10 '>
      <section className=' flex justify-between bg-slate-100 text-black rounded-md p-5 w-full'>
        <div className='flex-col gap-10'>
            <h2 className='font-bold text-4xl'>{product.name}</h2>
            <p>{product.description}</p>
            {product.promotional_price ? (
                <div className="text-slate-500 font-bold">
                <p className="line-through text-slice-300 text-2xl">
                    {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                    })}
                </p>
                <h3 className='text-3xl'>
                    {product.promotional_price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                    })}
                </h3>
                </div>
            ) : (
                <h3 className="text-slate-500 font-bold text-3xl">
                {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })}
                </h3>
            )}
        </div>
        <div className='flex'>
          <figure>
            <Image src={product.image} alt="Imagem do produto" width={300} height={360}/>
          </figure>
        </div>
      </section>
      <section className='flex justify-center items-center w-full  bg-amber-800 rounded-md p-5'>
        <h2 className='text-2xl'> <strong>Avaliação: </strong>O que outras pessoas acharam?</h2>
        {product.comments.map((comment => (
            <div className='bg-amber-700 rounded-md p-5 w-2/3 '>
                <div className='flex justify-between w-full'>
                    <span className='flex w-1/4 justify-between '>
                        <p className='font-semibold'>Nota {comment.avaliation}</p>
                        <p>{comment.name}</p>
                    </span>
                   <p>{comment.city}, {comment.state}</p>
                </div>
                <div className='flex justify-center p-3 rounded-md w-full'>
                   <p className='flex  bg-amber-600 rounded-md  w-2/3 p-3'>"{comment.review}"</p>
                </div>
            </div>

        )))}
      </section>
      
    </div>
  )
}
