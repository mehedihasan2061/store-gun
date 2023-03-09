import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props ) => {
    const [modalData, setModalData] = useState(null);
    
    const { gun, countIncrease } = props;
    
  
  const { action, name, img, bullet, category } = gun;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-lg mt-14">
        <figure>
          <img className="h-44" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{bullet}</div>
          </h2>
          <p>{category}</p>
          <p>{action}</p>
          <div className="card-actions">
            <button onClick={countIncrease} className="btn btn-sm btn-primary">
              Add to Cart
            </button>
            <label
              onClick={() => setModalData(gun)}
              htmlFor="my-modal-3"
              className=" btn btn-sm"
            >
              Details
            </label>
          </div>
        </div>
      </div>

      {modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>}
    </div>
  );
};

export default SingleGun;