import React, {Component} from 'react';
import CarHeader from './CarHeader';

class CarModel extends Component {
    render() {
    const car = this.props.car;
    return (
<div>
      <CarHeader lead="Car details." />
      <div className="CarModel_Container">
        <div className="CarModel_Item">
          <section className="CarModel_Section">
            <div className="CarModel_Header">
              <h2>Make</h2>
              <p>{car.make}</p>
            </div>
            <div className="CarModel_Header">
              <h2>Model</h2>
              <p>{car.model}</p>
            </div>
            <h3>Rating</h3>
            <div>
              <span className="Rating_Star"/>
              <p className="Rating_Number">{car.carwow_rating}/10</p>
            </div>
            <div>
              <h3><abbr title="Recommended Retail Price">RRP</abbr></h3>
              <p className="RRP">&pound;{car.rrp}</p>
            </div>
            <button disabled className="Button">Get Offers</button>
          </section>
          <img alt={`${car.make} ${car.model}`} src={car.img_url}/>
          <section>        
            <p>{car.summary}</p>
            <h3>Available Colors</h3>
            <ul>
              {car.available_colors.map((color, idx) => {
                return (
                  <li className="Color_List" key={idx}>
                    <span className="Color_Box" style={{backgroundColor: color.colorHex}}/>
                    <p className="Color_Name">{color.colorName}</p> 
                  </li>
                )
              })}
            </ul>
            <h3>Recommended Engine</h3>
            <p>{car.recommended_engine}</p>
          </section>
        </div>
        </div>
        <style jsx >{`
        .CarModel_Section {
          display: inline-block;
        }
        .CarModel_Header {
          display: inline-block;
          margin-right: 50px;
        }
        .CarModel_Container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .CarModel_Item {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row-reverse;
          justify-content: space-around;
          height: auto;
          width: 60%;
          margin: auto;
          padding: 10px;
          border: solid 1px #b1b1b1;
          background-color: white;
        }
        .RRP {
          font-weight: bold;
        }
        .Color_Box {
          width: 70px;
          height: 30px;
          display: block;
          border-style: solid;
          border-width: 1px;
        }
        .Rating_Star {
          background: url(../../../assets/star.svg);
          background-repeat: no-repeat;
        }
        .Color_Name {
          margin-top: 5px;
        }
        .Color_List {
          display: inline-block;
          margin-right: 30px;
        }
        .Button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        .Button:disabled {
          background-color: grey;
        }

        @media (max-width: 1600px) { 
          .CarModel_Item {
            width: 80%; 
          }
         }

        @media (max-width: 991.98px) { 
          .CarModel_Item {
            width: 70%;
            flex-direction: row;
            justify-content: left; 
          }
         }

        @media (max-width: 767.98px) { 
          .CarModel_Item {
            width: 80%;
            flex-direction: row;
            justify-content: left;  
          }
        }

        @media (max-width: 575.98px) {
          .CarModel_Item {
            width: 90%; 
            flex-direction: row;
            justify-content: left;         
          }
        }
      `}</style>
      </div>)}}

export default CarModel;