import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre{
    id:number,
    name:string
    image_background:string;
}

interface FetchGenresResp{
    count:number;
    results:Genre[]
}

const useGenres=()=>{
    const controller=new AbortController();

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading,setLoading]=useState(false)
    
    useEffect(() => {
      setLoading(true)
      apiClient
        .get<FetchGenresResp>("/genres",{signal:controller.signal})
        .then((res) =>{
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
        return ()=> controller.abort();

    },[]);

    return{genres,error,loading}
}

export default useGenres