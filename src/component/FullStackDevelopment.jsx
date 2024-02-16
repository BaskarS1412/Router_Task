import React from 'react';
import Card from "./Card";

const FullStackDevelopment = ({ data }) => {
    const fullStackData = data.filter((item) => item.Title === 'Full Stack Development');

    return (
      <div className="cart-body">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {fullStackData.map((item, index) => {
                return (
                  <>
                    <Card item={item} index={index} />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
};

export default FullStackDevelopment;