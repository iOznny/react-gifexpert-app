import React from 'react'
import { GifGridItem } from './GifGridItem';

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>    
            <h5>{ category }</h5>    
            { loading && <p>Cargando...</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }                        
                            { ...img }                                           
                        />
                    ))
                }
            </div>
        </>
    )
}