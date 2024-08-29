import { useDispatch,useSelector } from "react-redux"
import {increment, decrement  } from "./redux/features/counterSlice"
function App() {
 const dispatch = useDispatch();
 const count = useSelector((state) => state.counter.count)
  return (
    <>
      <h1 onClick={()=> dispatch(increment())}>Allhumdulliah </h1>
      <p> {count}</p>
    </>
  )
}

export default App
