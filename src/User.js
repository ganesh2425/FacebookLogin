import React, { useEffect, useState } from 'react';
import axios from"axios";

function User() {
    const [currLocation, setCurrLocation] = useState({});

    useEffect(()=>{
    axios.get("https://ipapi.co/json")
   axios.get("https://ipapi.co/json")
   .then(res=>{
    console.log(res)
    setCurrLocation(res.data)
   })
   .catch(err=>{
    console.log(err)
   })
    },[]);
// useEffect(()=>{
//     getLocation();
// })
// const getLocation = async()=>{
//     const location = await axios.get("https://ipapi.co/json")
//     setCurrLocation(location.data);
// }

   
  return (
   <>
   <h2>Currect Location!!</h2>
   <p>Latitude: {currLocation.latitude}</p>
   <p>Longitude: {currLocation.longitude}</p>
   <p>Org: {currLocation.org}</p>
   <p>City: {currLocation.city}</p>
   <p>IP Address: {currLocation.ip}</p>
   
   </>
  )
}

export default User