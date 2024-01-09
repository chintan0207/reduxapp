import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'

const Shop = () => {

  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const value = useSelector(state => state.value)

  const {depositMoney,withdrawMoney,increment,Decrement} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>

    <h3>Deposite/Withdraw Money</h3> 
    {/*<button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>

  */}
  <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance({balance})
    <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button> <br/>

    <button className='btn btn-primary mx-2 mt-2' onClick={() => {increment(2)}} >+2 Increment</button>
    <span className='mx-2'>Counter: {value}</span>
    <button className='btn btn-primary mx-2' onClick={() => {Decrement(1)}}>-1 Decrement</button>

    </div>
  )
}

export default Shop