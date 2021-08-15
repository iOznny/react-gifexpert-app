import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas <GifGridItem />', () => {

    const title = 'Title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('Show componen successful ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Have p with text', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('Get image', () => {
        const img = wrapper.find('img');   
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Animation Fade Bounce', () => {
        const div = wrapper.find('div');        
        const className = div.prop('className');

        expect(className.includes('animate__bounce')).toBe(true);
    });
    

});