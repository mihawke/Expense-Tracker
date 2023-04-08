import { useState } from "react";

export default function useLoaclStorage(key,defaultValue){
    const [value, seValue] = useState(()=>{
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof defaultValue == "function"){
            return defaultValue()
        }else{
            return defaultValue
        }
    })
    useEffect(() => {
      localStorage.setItem(key , JSON.stringify(value))
    }, [key,value])
    
    return [value , seValue]
}