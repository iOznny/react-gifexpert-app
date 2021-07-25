import React, { Fragment } from 'react';

export const GifExpertApp = () => {

    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <hr />

            <button></button>

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
