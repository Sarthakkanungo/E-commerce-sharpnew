import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const ToursDetail = [
  {
    date: "JUL16",
    city: "DETROIT, MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    city: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];

const Store = () => {
  return (
    <div>
      <Header />
      <div className="mt-4 d-flex flex-column justify-content-center text-white bg-secondary align-items-center p-4">
        <div className=" display-1 fw-bold ">The Generics</div>
        <button className="btn bg-secondary border border-info mt-5 fw-bold fs-2 p-3 text-white">
          {" "}
          Get our latest album
        </button>
        <button className="play-btn rounded-circle border border-info mt-3 mb-3 bg-secondary p-3 fs-3 text-info">
          ►
        </button>
      </div>
      <div>
        <p className="text-center fs-1 ">Tours</p>
        {/* <div className="d-flex flex-column mx-auto" >
          {ToursDetail.map(
            (item) => 
              <ul key={item.date} className=" mx-auto d-flex list-unstyled justify-content-end">
              <li className="mx-5 align-items-start"> {item.date} </li>
              <li className="mx-5 align-items-start"> {item.city} </li>
              <li className="mx-5">{item.place}</li>
              <button className="btn btn-info"> buy tickets</button>
              </ul>
            
          )}
        </div> */}
        <table className="mx-auto w-50 ">
          <tbody>
            {ToursDetail.map((item) => (
                <div>
              <tr
                key={item.date}
                className="d-flex justify-content-between align-items-center"
              >
                <td className="mx-5">{item.date}</td>
                <td className="mx-2">{item.city}</td>
                <td className="mx-auto">{item.place}</td>
                <td>
                  <button className="btn btn-info"> buy tickets</button>
                </td>
              </tr>
             <hr />
             </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Store;
