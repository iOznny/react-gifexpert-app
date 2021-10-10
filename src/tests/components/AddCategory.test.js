import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Testing AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        // Limpiar Mocks.
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('Show successful', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('You must change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value }  }); 
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('Should not pass the information with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Set Categories Clear text box', () => {

        const value = 'Hola Mundo';

        // Simular el inputchange
        wrapper.find('input').simulate('change', { target: { value } });

        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories debe de haber llamado
        expect(setCategories).toHaveBeenCalled();        
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});