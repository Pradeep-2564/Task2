import React, { useEffect, useState } from 'react'
import './Fetch.css'


const FetchData = () => {

    const [data, setData] = useState([]);

    async function getData() {
       try{ 
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const newData = await response.json();
        setData(newData);
       }
       catch{
        console.log('Error');
       }
    }
    getData();
    useEffect(()=>{
        console.log(getData());
    },[]);
   

  return (
    <div>
      <table align='center'>
        <caption>Fetching data from API</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Website</th>
                <th>Company Name</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.zipcode}</td>
                    <td>{item.website}</td>
                    <td>{item.company.name}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchData
