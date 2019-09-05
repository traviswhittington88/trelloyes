import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('List component', () => {
    //smoke tests
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders to the UI as expected', () => {
        const tree = renderer
            .create(<List header={'List A'} key={1} cardsArray={'a'} cardsObj={{a:'could be anything'}}/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });








})