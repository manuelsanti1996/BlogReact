import React from 'react';

const DrawerContents = () => {
  return (
    <div className="fixed inset-0 bg-black ">
      <div className="text-white rounded-lg">
        <ul>
          <li className="font-bold text-4xl py-8 px-4 hover:underline" style={{ textDecorationColor: "yellow" }}>
            <a>Home</a>
          </li>
          <li className="font-bold text-4xl py-8 px-4 hover:underline" style={{ textDecorationColor: "yellow" }}>
          <a>Archivio</a>
          </li>
          <li className="font-bold text-4xl py-8 px-4 hover:underline" style={{ textDecorationColor: "yellow" }}>
            Contatti
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerContents;


