import React, { Component } from 'react'
import CustomHead from '../components/CustomHead';
import CarGrid from '../components/CarGrid';
import CarHeader from '../components/CarHeader';
import api from '../api/api';

class Home extends Component {

static async getInitialProps () {
  const allCars = await api.get('models');
  allCars.data.map(cars => {
    cars['model_url'] = cars.model.split(' ').join('_');
  })
  return {cars: allCars.data};
}

render () {
  return (
    <div>
      <CustomHead/>
      <CarHeader lead="Choose your perfect car." />
      <CarGrid cars={this.props.cars}/>
    </div>
    );
  }
}

export default Home
