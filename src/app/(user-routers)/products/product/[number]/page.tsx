import React from 'react'


// Essa interface define a estrutura dos params, de forma que ele possua um objeto denominado params do tipo Params
interface PageProps {
  params : Params;
}


// Define um tipo em TypeScript, esse tipo é um objeto que contém um valor number
type Params = {
  number: number
}

export default function page({params}: PageProps) {
  return (
    <div>Sobre o produto {params.number}</div>
  )
}
