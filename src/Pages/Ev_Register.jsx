import React, { useState } from 'react';
import Uploader from '../Components/File_Uploader';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '../Styles/overall_css.css';
import evimg from "../ev_charge_station.png";

function Register() {
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
              <h2>Create an Account</h2>
              <p>
                Discover the future of convenient electric vehicle charging with our user-friendly application. Locate nearby charging stations and manage your charging sessions effortlessly for a seamless driving experience.
              </p>
              <img src={evimg} width={'100%'} alt="EV Charging Station" />
            </div>

            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='E.g: "Joe Shmoe"'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

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

                <label>
                  Mobile Number <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='+91 8866225678'
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />

                <label>
                  Country <b>*</b>
                </label>
                <select
                  name="country"
                  id="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">select...</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="America">America</option>
                </select>

                <label>
                  Vehicle Type <b>*</b>
                </label>
                <select
                  name="vehicleType"
                  id="Vehicle type"
                  value={vehicleType}
                  onChange={(e) => handleVehicleTypeChange(e.target.value)}
                >
                  <option value="">select...</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Scooter">Scooter</option>
                  <option value="Other">Other</option>
                </select>

                {vehicleType === 'Car' && (
                  <>
                    <label>
                      Model Name <b>*</b>
                    </label>
                    <select
                      name="modelName"
                      id="modelName"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                    >
                      <option value="">select...</option>
                      <option value="Tata">Tata</option>
                      <option value="Other">Other</option>
                    </select>
                  </>
                )}
                {vehicleType === 'Scooter' && (
                  <>
                    <label>
                      Model Name <b>*</b>
                    </label>
                    <select
                      name="modelName"
                      id="modelName"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                    >
                      <option value="">select...</option>
                      <option value="Ola">Ola</option>
                      {/* Add more scooter models here */}
                    </select>
                  </>
                )}

                {modelName === 'Other' && (
                  <>
                    <label>
                      Mileage Ranges <b>*</b>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Mileage Ranges'
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                    />

                    <label>
                      Battery Capacity Level <b>*</b>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Battery Capacity Level'
                      value={batteryCapacity}
                      onChange={(e) => setBatteryCapacity(e.target.value)}
                    />
                  </>
                )}

                <label>
                  Charging Type <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='Ex: Type 2'
                  value={chargingType}
                  onChange={(e) => setChargingType(e.target.value)}
                />

                <label>Upload your license here</label>
                <Uploader
                  onUpload={(file) => setLicense(file)}
                />
                <div style={{fontSize:'16px',paddingBottom:'30px'}}>
                <p>Already have an account? <span ><Link style={{color:'red'}} to={'/signin'}>Sign In</Link></span> </p> 
                </div>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Register
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

export default Register;
