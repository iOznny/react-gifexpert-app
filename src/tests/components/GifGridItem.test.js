import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas <GifGridItem />', () => {

    const title = 'Title';
    const url = 'https://localhost/algo.jpg';

    test('Show componen successful ', () => {
        const wrapper = shallow(<GifGridItem title={ title } url={ url } />);
        expect(wrapper).toMatchSnapshot();
    });
});
