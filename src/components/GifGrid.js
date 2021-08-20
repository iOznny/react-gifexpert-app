import React from 'react';
import PropTypes from 'prop-types';

// Hooks
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>    
            <h5>{ category }</h5>    
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                    images.map(img => (<GifGridItem key={ img.id } { ...img } />))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}