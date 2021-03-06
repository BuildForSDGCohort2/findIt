import React from 'react';
import '../bootstrap.css';
import city from '../Images/city.jpg';

function HotelMaps(props) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <img src={city} alt="hotel-images" className="rounded mx-2" />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <table className="table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunset Hotel</td>
                  <td>Nairobi CBD</td>
                  <td>600 metres</td>
                </tr>
                <tr>
                  <td>WESTLIFE Hotels</td>
                  <td>Nairobi Westlands</td>
                  <td>2km</td>
                </tr>
                <tr>
                  <td>Kempinsky Villa Rosa</td>
                  <td>Nairobi </td>
                  <td>1km</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default HotelMaps;
