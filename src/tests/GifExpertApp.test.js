import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {
    test('Show successful', () => {
       const wrapper = shallow(<GifExpertApp />);
       expect(wrapper).toMatchSnapshot();
    });
    
    test('Show list of categories', () => {
        const categories = ['One Punch', 'Space X'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });    
});
