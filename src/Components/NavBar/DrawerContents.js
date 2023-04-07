import React from 'react';
import { Link } from "react-router-dom";

const DrawerContents = () => {
  return (
    <div className="fixed inset-0 bg-black ">
      <div className="text-white rounded-lg">
        <ul>
          <li className="font-bold text-4xl py-8 px-4 hover:underline" style={{ textDecorationColor: "yellow" }}>
            <Link to="/">Home</Link>
          </li>
         
          <li className="font-bold text-4xl py-8 px-4 hover:underline" style={{ textDecorationColor: "yellow" }}>
            <Link to="/contacts">Contatti</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerContents;


