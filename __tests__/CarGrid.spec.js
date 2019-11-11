import * as React from 'react'
import {shallow, mount} from 'enzyme'
import CarGrid from '../components/CarGrid';
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
//import toJson from 'enzyme-to-json';
import cars from './__fixtures__/cars';

describe('CarGrid', () => {
    it('should render correctly', function () {
      const wrap = shallow(<CarGrid cars={cars}/>)
      expect(wrap).toMatchSnapshot();
    })
   
})