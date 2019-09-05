import React, { Component }from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card';
import { exportAllDeclaration } from '@babel/types';

describe('Card component', () => {
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    //snap shot
    it('renders to UI as expected', () => {
        const tree = renderer
            .create(<Card title={'string'} content={'string'} key={'string'}/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });
})

