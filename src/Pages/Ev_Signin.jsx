import React, { useState } from 'react';
import Uploader from '../Components/File_Uploader';
import Footer from '../Components/Footer';
import '../Styles/overall_css.css';
import { Link } from 'react-router-dom';
import evimg from "../ev_charge_station.png";

function Signin() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [modelName, setModelName] = useState('');
  const [chargingType, setChargingType] = useState('');
  const [license, setLicense] = useState('');
  const [mileage, setMileage] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');

  const handleVehicleTypeChange = (value) => {
    setVehicleType(value);
    setModelName('');
  };

  return (
    <>
      <section className="contact-page" style={{paddingTop:'50px'}}>
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Sign in</h2>
              <p>
                Discover the future of convenient electric vehicle charging with our user-friendly application. Locate nearby charging stations and manage your charging sessions effortlessly for a seamless driving experience.
              </p>
              <img src={evimg} width={'100%'} alt="EV Charging Station" />
            </div>

            <div className="contact-div__form">
              <form>
               

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>
                  Password <b>*</b>
                </label>
                <input
                  type="password"
                  placeholder="Must have 12 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{fontSize:'16px',paddingBottom:'30px'}}>
                <p>Don't have an account? <span ><Link style={{color:'red'}} to={'/register'}>Create Account</Link></span> </p> 
                </div>
              
           <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'lightgray', height: '3px' }} ></div>
        <Footer />
      </section>
    </>
  );
}

export default Signin;
