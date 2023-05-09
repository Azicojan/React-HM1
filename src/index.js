import React from 'react';
import ReactDOM from 'react-dom/client';
import MyStores from './MyStores';

const myShops = [
    {id:1, name:'Korzinka', opens:"8.00 am", closed:"01.00 am", location:"10 km", status:"VIP"},
    {id:2, name:'Makro', opens:"9.00 am", closed:"11.00 pm", location:"5 km", status:"active"},
    {id:3, name:'Havas', opens:"8.00 am", closed:"10.00 pm", location:"2 km", status:"inactive"}
  ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyStores shops={myShops} />);

