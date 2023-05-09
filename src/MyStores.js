

//Looping through the array of myShops
/*

import './index.css'


const myShops = [
    {id:1, name:'Korzinka', opens:"8.00 am", closed:"01.00 am", location:"10 km", status:"VIP"},
    {id:2, name:'Makro', opens:"9.00 am", closed:"11.00 pm", location:"5 km", status:"active"},
    {id:3, name:'Havas', opens:"8.00 am", closed:"10.00 pm", location:"2 km", status:"inactive"}
];



function MyStores(){

    const myStyles = {
        color:'#990000',
        fontSize: '24px',
        fontWeight:'700'
    }

    const listOfStores = myShops.map(myShop =>
        
        <tr key={myShop.id}>
            <td style={myStyles}>
            {myShop.name} 
            </td>
            <td >
             {myShop.opens} 
            </td>
            <td >
             {myShop.closed} 
            </td>
            <td >
             {myShop.location} 
            </td>
            <td >
             {myShop.status}
            </td>
        </tr>
    )
    
    return(
        <table>
            <tbody>
            <tr>
             <th>Name</th>
             <th>Open</th>
             <th>Closed</th>
             <th>Location</th>
             <th>Store's status</th>      
            </tr>
                {listOfStores}
            </tbody>
        </table>
    )
    
}

export default MyStores
           
*/

//Using props

import React from 'react';
import './index.css';

function MyStores(props) {
  const { shops } = props;

  const myStyles = {
    color:'#990000',
    fontSize: '24px',
    fontWeight:'700'
  }

  const listOfStores = shops.map(myShop => (
    <tr key={myShop.id}>
      <td style={myStyles}>{myShop.name}</td>
      <td>{myShop.opens}</td>
      <td>{myShop.closed}</td>
      <td>{myShop.location}</td>
      <td>{myShop.status}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Open</th>
          <th>Closed</th>
          <th>Location</th>
          <th>Store's status</th>      
        </tr>
        {listOfStores}
      </tbody>
    </table>
  );
}

export default MyStores;
