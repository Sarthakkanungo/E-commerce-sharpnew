import React from 'react';

const Banner = () => {
  return (
    <div
        style={{
          background: "grey",
          height: "190px",
          textAlign: "center",
          fontSize: "200px",
          color: "white",
          fontFamily: "cursive",
          marginTop: "35px",
        }}
      >
        <div className="display-1 fw-bold mt-3 p-2">The Generics</div>
      </div>
  )
}

export default Banner;