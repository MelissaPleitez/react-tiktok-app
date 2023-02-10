import React from 'react'
import { useState, useEffect } from 'react'

function Fetchuse(url, type) {
    const [data, setData]=useState(null);
    const [response, setResponse]=useState(null);
    const [isLoading, setisLoading]=useState(false);

    useEffect(()=>{
        if(!!url){
            fetchData();
        }
        
       async function fetchData(){
        setisLoading(true);
          
        try {
            
        const response = await fetch(url);
        setResponse(response);
        console.log(response);

      switch(type){

        case 'text':
        const text= await response.text();
        setData(text);
        setisLoading(false);
            break;
        case 'json':
            const json= await response.json();
            setData(json);
            setisLoading(false);
            console.log(json);
            break;

            default:

      }
        } catch (error) {
            console.error(error);
            setisLoading(false);
        }

        }
    },[url])
  return (
    [response, data, isLoading]
  )
}

export default Fetchuse