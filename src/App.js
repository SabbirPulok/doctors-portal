import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
export const CalenderContext = createContext();
export const InfoContext = createContext();

function App() {
  const [date,setDate] = useState(new Date());
  
  const [allAppointments,setAllAppointments] = useState([]);
  const [allBookedAppointments,setAllBookedAppointments] = useState([]);
  const [allPatients,setAllPatients] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4200/appointments')
    .then(res=>res.json())
    .then(data=>setAllAppointments(data))
  },[allAppointments.length])

  useEffect(()=>{
    fetch("http://localhost:4200/bookedAppointments")
      .then(res => res.json())
      .then(data => {
        setAllBookedAppointments(data);
      });
      const patient = allBookedAppointments.map(app=>app.patientInfo);
      setAllPatients(patient);
  },[allBookedAppointments])

  const calenderContextValue = {date,setDate};
  const infoContextValue = {allAppointments,setAllAppointments,allBookedAppointments,setAllBookedAppointments,allPatients}
  //console.log(infoContextValue);
  return (
    <CalenderContext.Provider value = {calenderContextValue}>
      <InfoContext.Provider value={infoContextValue}>
        <Router>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/doctor/dashboard">
                <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
      </InfoContext.Provider>
    </CalenderContext.Provider>
  );
}

export default App;
