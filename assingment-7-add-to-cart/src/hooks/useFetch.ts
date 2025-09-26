import { useEffect, useState } from 'react'
import type { ProductType } from '../components/Card.tsx';

const useFetch = (url : string) => {
  const [data, setData] = useState<ProductType[]>([])

  async function fetchdata() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(await res.text())
      }
      const result = await res.json();
      setData(result.products);
      
    } catch (error: unknown) {
      if (error instanceof Error) {
      console.log("error :", error.message);
        
      } else {
        console.log("error:", error)
      }
    }
    
  }

  useEffect(() => {
    fetchdata()
  }, [])
  
  return [data]
}

export default useFetch