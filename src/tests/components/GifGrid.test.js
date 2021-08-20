import React from 'react';
import { shallow } from "enzyme"
import '@testing-library/jest-dom';

import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid', () => {
    
    const category = 'One';

    test('Show successful', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    });

    // Cuando el useFetch regresa la informacion.
    test('Show items when load images useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Calquier cosa',
                url: 'https://localhost.com/awdawdawd'
            },
            {
                id: 'abcd',
                title: 'Calquier cosa',
                url: 'https://localhost.com/awdawdawd'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
