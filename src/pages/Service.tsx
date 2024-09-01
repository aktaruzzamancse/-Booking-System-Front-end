import ServiceCard from "../components/service/ServiceCard"
import { useGetServersQuery } from "../redux/api/api"

const Service = () => {

  //get data from server
  const { data:services, isError, isLoading } = useGetServersQuery(undefined);
  console.log(services);
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <>
    <div>Service List</div>
    {services?.data.map((item)=>(
      <ServiceCard {...item}/>
    ))}
    
    
    </> 
  )
}

export default Service