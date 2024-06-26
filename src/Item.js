import React from 'react'
import { product } from "./Data/data";
import { getImageUrl } from "./Utils";
import './App.css';
let dateExpire=new Date("2023-01-01");


const items=product.map((p)=>(
    <div key={p.id} id={p.id}className='div2'>
        <img className="img" alt="Images" src={getImageUrl(p)}></img>
        {p.expireDate < dateExpire ? (
            <img className="imgExpire" alt="Images" src={"/images/11.png"} />
        ) : null}
        <h3>Name : <b>{p.name}</b></h3>
        <h3>Price : <b>{p.price}</b> Discount : <b>{p.discount}</b></h3>
        <h3>ExpireDate : <b>{p.expireDate.toISOString()}</b></h3>
    </div>
))


export default function Item() {
  return (
    <div className='div1'>{items}</div>
  )
}




