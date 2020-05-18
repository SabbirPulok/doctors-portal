import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';
// import appointmentData from '../../Data/appointmentData';

const Banner = () => {
    // const appointments = appointmentData;

    // const handleInsertAppointment =()=>{
    //     console.log(appointments)
    //     fetch("http://localhost:4200/addAppointments",{
    //         method:"POST",
    //         body:JSON.stringify(appointments),
    //         headers : {
    //             "Content-type" : "application/json"
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // }
    return (
        <section className="banner-area">
            <div className="container">
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col-md-4">
                        <h1>Your New Smile <br/> Starts Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the Lorem Ispum.</p>
                        {/* <button className="btn btn-danger" onClick={handleInsertAppointment}>Insert Appointment</button> */}
                        <Link to="/appointment" className="btn btn-primary">Get Appointment</Link>
                    </div>
                    <div className="col-md-6 d-none d-md-block offset-2">
                        <img src={banner} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;