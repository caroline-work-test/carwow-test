import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'
import cars from './__fixtures__/cars';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
        const wrap = mount(<IndexPage cars={cars}/>)
        expect(wrap.find('.CarHeader_Description').text()).toBe('Choose your perfect car.')
    })
  })  
})