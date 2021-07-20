import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';

function Banner() {

    const [movie,setMovie] = useState();

    useEffect(()=>{
        async function fetchData(){
            const request = await axios
        }
    },[])

    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1)+'...':string
    }

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundPosition: "center center"
        }}> 
            <div className="banner__contents">
                <h1 className="banner__title">Movie Title</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`This is a test description`,150)}</h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
