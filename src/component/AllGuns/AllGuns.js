import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGuns = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {guns.map((gun) => (
        <SingleGun gun={gun} key={gun.id} countIncrease={countIncrease}></SingleGun>
      ))}
    </div>
  );
};

export default AllGuns;