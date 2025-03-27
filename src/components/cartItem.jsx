import { useState ,useEffect } from "react"
import {products} from '../products'
import { useDispatch } from "react-redux"
import { changeQuantity } from "../stores/cart"
export const CartItem = (props) =>{
    const {productId ,quantity} =props.data
    const {detail ,setDetail} =useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const findDetail = products.filter(product => product.id === productId)[0]
        setDetail(findDetail)
    },[productId])
    
    return (
        <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 rounded-md">
            <img src={detail.image} alt="" className="w-12"/>
            <h3>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div>
                <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handleMinusQuantity}>-</button>
                <span>{quantity}</span>
                <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600">+</button>
            </div>
        </div>
    )
}