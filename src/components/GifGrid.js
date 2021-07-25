import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    }, []);

    // Petición a API Giphy.
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=js&limit=2&api_key=wVPinMHaw1TK9d0hmQgZ6CTLl8Q3w1jH';
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
    };

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => setCount(count + 1) }>Click</button>
        </div>
    )
}