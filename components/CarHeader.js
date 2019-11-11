import React, {Component} from 'react';

class CarHeader extends Component {
render () {
    return (
      <div>
      <h1 className='CarHeader_Title'>Car Wow Test</h1>
        <p className='CarHeader_Description'>
            {this.props.lead}
        </p>
      </div>)
  }
}

export default CarHeader;