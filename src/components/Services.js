import React from "react";

function services() {
  return (
    <>
 
      <div className=" d-flex justify-content-center my-5 ">
        <iframe
          src="https://embed.lottiefiles.com/animation/96365"
          title="fghfgh"
          style={{ pointerEvents: "none", height: "18rem", width: "29rem" }}
        ></iframe>
      </div>
      <p>
        <h5>
         <p  className="text-start mx-3 font-Roboto" id="tit"> On demand laundry web app</p>
          <ul>
            <li>
              <h6 className="text-start p-3 font-Roboto">
              Let`s face it that the on-demand services now, are literally everywhere, changing each aspect of our everyday life. Even, surprisingly enough, the sphere of chores. The question of making a laundry app and also the cost to develop a laundry app are the ones we raise here.
              </h6>
            </li>
            <li>
              <h6 className="text-start p-3 font-Roboto">
              Let`s face it that the on-demand services now, are literally everywhere, changing each aspect of our everyday life. Even, surprisingly enough, the sphere of chores. The question of making a laundry app and also the cost to develop a laundry app are the ones we raise here.
              </h6>
            </li>
            <li>
              <h6 className="text-start p-3 font-Roboto">
              Let`s face it that the on-demand services now, are literally everywhere, changing each aspect of our everyday life. Even, surprisingly enough, the sphere of chores. The question of making a laundry app and also the cost to develop a laundry app are the ones we raise here.
              </h6>
            </li>

          </ul>
        </h5>
      </p>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          classname="card"
          style={{
            display: "grid",
            placeItems: "center",
            width: "400px",
            color: "black",
            padding: "15px",
            backgroundColor: "pink",
            borderRadius: "10px",
            textAlign: "center",
            textJustify: "auto",
            marginBottom:"3px"
          }}
        >
          <div classname="card-body">
            <h5 classname="font_style" id="font_style">Contact us </h5>
            <p classname="card-text ">
              <p>
                Mail us :
                <a
                  className="black-text"
                  href="https://gmail.google.com"
                  rel="noreferrer"
                >
                  jagadeeshsura5@gmail.com
                </a>
                <br />
              </p>
            </p>
          </div>
          <div classname="card-body">
            <p classname="card-link">
              Message owner :
              <a className="black-text" href="" target="_blank" rel="noreferrer">
                <br />
                Sura Jagadeesh
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
