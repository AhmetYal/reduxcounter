import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {artir,azalt,degerliartis} from '../redux/counter/counterSlice'

function Counter() {
const [amount,setAmount]=useState(3);    
const countValue=useSelector((state)=> state.counter.value);
const dispatch=useDispatch(); 
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={()=>dispatch(azalt())}>Azalt</button>
            <button onClick={()=>dispatch(artir())}>Artır</button>  
            <br></br>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <br></br>
            <button onClick={()=>dispatch(degerliartis(amount))}>Değere Göre Artır</button>          
        </div>
    )
}

export default Counter
