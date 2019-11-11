import React, {Component} from 'react';
import Link from "next/link";

class CarGrid extends Component {
  render() {
    return (
      <div>
        <div className="CarGrid_Container">
          <ol className="CarGrid_List">
          {this.props.cars.map(car => {
            return (
              <li key={car.id} className="CarGrid_ListItem">
                
                <div className="CarGrid_GridItem">
                  <section className="CarGrid_Section">
                    <h2 >
                    <Link href={`/model/${car.make}_${car.model_url}/${car.id}` } ><a className="CarGrid_Link">{`${car.make} ${car.model}`}</a></Link>
                    </h2>
                      <Link href={`/model/${car.make}_${car.model_url}/${car.id}`} >
                        <a className="CarGrid_LinkImg">
                          <img alt={`${car.make} ${car.model_url}`} src={car.img_url}/>
                        </a>
                      </Link>
                    <p>{car.summary}</p>
                        
                  </section>
                  <section className="CarGrid_Section__Width">
                    <div className="CarGrid_Rating">
                      <h3>Rating</h3>
                      <div>
                        <span className="Rating_Star"/>
                        <p className="Rating_Number">{car.carwow_rating}/10</p>
                      </div>
                    </div>
                    <div className="CarGrid_Section__Dark">
                      <Link href={`/model/${car.make}_${car.model_url}/${car.id}`} >
                        <a className="CarGrid_Link">
                          <h3><abbr title="Recommended Retail Price">RRP</abbr></h3>
                        </a>
                      </Link>
                      <Link href={`/model/${car.make}_${car.model_url}/${car.id}`} >
                        <a className="CarGrid_Link">
                          <p className="CarGrid_Price">&pound;{car.rrp}</p>
                        </a>
                      </Link>
                    </div>
                  </section>
                </div>
          
              </li>
            )
          })}
          </ol>
      </div>
      <style jsx >{`
        .CarGrid_Container {
          max-width: 95%;
          margin: 0 auto;
        }
        img:hover {
          background-color: #ebf8ff;
        }
        .CarGrid_Link:hover {
          color: #0072b1;
        }
        .CarGrid_Section__Width {
          width: 100%;
        }
        .CarGrid_Link {
          text-decoration: none;
          color: black;
        }
        .CarGrid_List {
          padding-left: 0;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
        }
        .CarGrid_Rating {
          text-align: center;
        }
        .CarGrid_Rating > h3{
          margin-bottom: 12px;
        }
        .CarGrid_Price {
          font-weight: bold;
          font-size: 1.17em;
        }
        .CarGrid_Section {
          padding: 10px;
        }
        .CarGrid_Section__Dark {
          padding: 10px;
          background-color: #EEEEEE;
        }
        .CarGrid_GridItem {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-between; 
        }
        .CarGrid_ListItem {
          height: auto;
          flex-basis: 24%;
          -ms-flex: auto;
          display: flex;
          flex-direction: column;
          width: 259px;
          position: relative;
          box-sizing: border-box;
          background-color: white;
          margin: 2px;
          border: solid 1px #b1b1b1;
        }

        @media (max-width: 991.98px) { 
          .CarGrid_ListItem {
            flex-basis: 32%;
          }
         }

        @media (max-width: 767.98px) { 
          .CarGrid_ListItem {
            flex-basis: 49%;
          }
        }

        @media (max-width: 575.98px) {
          .CarGrid_ListItem {
            flex-basis: 100%;          
          }
        }

        
      `}</style>
    </div>
    )
  }
}

export default CarGrid;