import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // Agregar nuevo elemento a categories.
    // const hadleAdd = () => {
    //     //setCategories([...categories, 'Nuevo Valor']);            
    // };

    // Renderizar el componente.
    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />

            <hr />            

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </Fragment>
    )
}