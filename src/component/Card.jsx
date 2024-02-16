import React from 'react';

const Card = ({item, index}) => {
    return (
      <>
        <div key={index}>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top"  src={item.image} alt />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.Title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;