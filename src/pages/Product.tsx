import React from 'react'
import { Link, Navigate } from 'react-router-dom'

type Props = {}



function Product({}: Props) {

    const products = [
        {id:1,name:'Jitomate'},
        {id:2,name:'Cebolla'},
        {id:3,name:'Pepino'},
        {id:4,name:'limón'}
    ];

  return (
    <>
        <div>Página de productos</div>
        <Link 
            to='/'
        >
            Inicio
        </Link>
        <ul>
            {products.map(p=>
                <li key={p.id}>
                    <Link to={`/product/${p.id}`}>{p.name}</Link>
                </li>)}
        </ul>        
    </>
    
  )
}

export default Product