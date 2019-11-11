import React, {Component} from 'react';
import api from '../../../api/api';
import CarModel from '../../../components/CarModel';
const namer = require('color-namer');


class  Model extends Component  {
   
  static async getInitialProps (ctx) {
    const car = await api.get(`model/${ctx.query.id}`);
    if (car.data.available_colors.length > 1)
    {
      const carsWithColors = car.data.available_colors.map((colorHex) => {
        let colorName = namer(colorHex).pantone[0].name;
        return {colorName, colorHex};
      })
      car.data.available_colors = carsWithColors;
    }
    return {car: car.data};
  }
  
  render() {
  return (
      <CarModel car={this.props.car}/>
    );
  }
}


export default Model;