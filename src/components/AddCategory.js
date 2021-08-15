import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    // Inicio del input
    const [inputValue, setInputValue] = useState('');

    // Cambiar valor del input
    const handleInputChange = (e) => {        
        setInputValue(e.target.value);
        console.log('handleInputChange llamado');
    };

    // Prevenir posteo de form y agregar nuevo valor al arreglo
    const handleSubmit = (e) => {                
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (  
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Requerir el prop-types
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
