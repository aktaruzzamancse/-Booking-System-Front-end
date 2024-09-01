import {increment, decrement  } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Button } from "@/components/ui/button"
import Service from './pages/Service'

function App() {

 const count = useAppSelector((state) => state.counter.count)
 const dispatch = useAppDispatch();
  return (
    <>
     <Service/>
     
    </>
  )
}

export default App
