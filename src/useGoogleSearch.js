import React, { useEffect, useState } from 'react';
import API_KEY from "./Keys";
const CONTEXT_KEY="4efa0ea338816c317";

//MAKING CUSTOM HOOK HERE;

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) =>response.json()).then((result)=>{
              setData(result);
          })
      }
      fetchData();
    }, [term])

    return {data};
}

export default useGoogleSearch;