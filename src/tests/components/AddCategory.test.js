import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Testing AddCategory', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    test('Show successful', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('You must change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value }  }); 
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
});
