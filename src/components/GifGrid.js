import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // Images
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    // Petición a API Giphy.
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=tesla&limit=5&api_key=wVPinMHaw1TK9d0hmQgZ6CTLl8Q3w1jH';
        const res = await fetch(url);
        const { data } = await res.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    };

    return (
        <div>
            <h3>{ category }</h3>        
            {
                images.map(img => (                    
                    // <GifGridItem 
                    //     key={ img.id }                        
                    //     { ...img }
                    // />

                    <GifGridItem 
                        key={ img.id }                        
                        { ...img }                                           
                    />
                ))
            }
        </div>
    )
}