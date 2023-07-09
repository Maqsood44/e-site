import React from 'react';

export default function HeroImage(props) {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?w=2000')", height: 400, backgroundPosition: "center" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{props.heading}</h1>
              <h4 className='mb-3'>{props.slogan}</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}