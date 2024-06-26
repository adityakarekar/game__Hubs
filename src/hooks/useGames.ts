import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";


export interface Platform{
    id:number,
    name:string,
    slug:string,
}
 export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
  } 
  
  interface FetchGamesResp {
    count: number;
    results: Game[];
  }

  const useGames=()=>{
    const controller=new AbortController();

      const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
      const [loading,setLoading]=useState(false)
      
      useEffect(() => {
        setLoading(true)
        apiClient
          .get<FetchGamesResp>("/games",{signal:controller.signal})
          .then((res) =>{
            setGames(res.data.results)
            setLoading(false)
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
          return ()=> controller.abort();

      },[]);

      return{games,error,loading}

  }

export default useGames