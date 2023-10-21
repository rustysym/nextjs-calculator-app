"use client"
import { ThemeProvider } from "next-themes"
import { useState ,useEffect} from "react";

function Providers({children}) {
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    if(!mounted){
        return <>{children}</>;
    }
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default Providers