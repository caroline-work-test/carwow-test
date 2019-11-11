import * as React from 'react'
import {shallow} from 'enzyme'
import CarHeader from '../components/CarHeader';
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
import toJson from 'enzyme-to-json';

describe('CarHeader', () => {
  it('should render correctly', function () {
      const wrap = shallow(<CarHeader lead={'This is test lead.'}/>)
      expect(toJson(wrap)).toMatchSnapshot();
  })
  it('should contain prop', function () {
    const wrap = shallow(<CarHeader lead={'This is test lead.'}/>)
    expect(wrap.find('.CarHeader_Description').text()).toBe('This is test lead.')
})
})