import { useState, useEffect } from 'react'
import Video from './Video'
import Fetchuse from "./Fetchuse"
import UseItems from './Useitems'
import './Tiktok.css'
import React from 'react'


function Tiktok() {
    const [url, setUrl] = useState("");
    const [page, setPage] = useState(0);
    const [index, setIndex] = useState(0);
    const [response, data, isLoading] = Fetchuse(url, "json");
    
    //Calling the Items

    const [items] = UseItems(data);


    useEffect(() => {
        setUrl("http://localhost:4000/page/" + page);
    }, [page])

    //Here are the pagination functions

    function nextVideo() {

        if(index + 2 === items.length){
         //Upload more videos
         setPage(page + 1)
        }
        setIndex(index + 1)
        
       

    }

    function prevVideo() {
        if(index > 0){
            setIndex(index - 1)
        }

       
    }


    return (

        <div className='bg-dark'>
           <div >
           <nav class="navbar navbar-light bg-info p-5">
  <div class="container-fluid justify-content-center">
    <a class="navbar-brand text-white text-uppercas fw-bold fs-2" href="#">YOUTUBE REELS</a>
    <i class="bi bi-camera-video-fill fs-3"></i>
    
  </div>
 
  
</nav>
           </div>
            <div className='mt-4 effect'>{isLoading ? "Cargando .." : ""}</div>
            <button className='btn btn-info text-white' disabled={isLoading} onClick={() => nextVideo()}>Next Video</button>
            <button className='my-3 mx-3 btn btn-info text-white' disabled={isLoading} onClick={() => prevVideo()}>Previous Videp</button>
            <div className='container-tiktok'>
            <div className='tiktok-views shadow-lg rounded' style={{transform: `translateY(${-1 * index * 960 + 'px'})`}}>
               {items?.map((item, i) => (
               <Video key={item.id} item={item} current={index === i} />
           
               ))}
            </div>
            </div>
        </div>

        // isLoading ? "Cargando ..":<div>Hello</div>

    )
}

export default Tiktok

// const Video = React.memo(()=>{

// });