import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoClass from './Components/DemoClass';
import Home from './Components/HomeComponent/Home';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Home/> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent/> */}
    <DemoLogin/>
  </div>
);
