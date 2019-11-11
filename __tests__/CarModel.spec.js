import * as React from 'react'
import {shallow, mount} from 'enzyme'
import CarModel from '../components/CarModel';
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
//import toJson from 'enzyme-to-json';
import car from './__fixtures__/car';

describe('CarModel', () => {
  it('should render correctly', function () {
    const wrap = shallow(<CarModel car={car}/>)
    expect(wrap).toMatchSnapshot();
  })
  it('should contain button', function () {
    const wrap = shallow(<CarModel car={car}/>)
    console.log(wrap.find('button').length);
    expect(wrap.find('button')).toHaveLength(1);
  })
 
})