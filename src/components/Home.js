import React,{ useState, useEffect} from "react";
import { motion } from "framer-motion";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
function Home() {
  const [UserName, setUserName] = useState('');
  const [show, setshow] = useState(false);
  const userHome = async() => {
   try {
     const response = await fetch('/getuser',{
       method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
     });
      const data = await response.json();
      setUserName(data.name);
      setshow(true);
   } catch (error) {
     console.log(error);
   } 
  }
  useEffect(() => {
    userHome();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div id="test1"></div>

      <motion.button
        className="btn btn-outline "
        style={{ backgroundColor: "#cceaff" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        drag
        dragConstraints={{
          right: 20,
          left: 0,
          top: 5,
          bottom: 40,
        }}
      >
        <ConnectWithoutContactIcon/>
      </motion.button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      ></div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            contact us
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ backgroundColor: "blue" }}>
          <div className="card">
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                className="card"
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "350px",
                  color: "black",
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  textAlign: "center",
                  textJustify: "auto",
                }}
              >
                <img
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  src="https://source.unsplash.com/200x200/?phone"
                  className="card-img-top"
                  alt="images"
                />
                <div className="card-body">
                  <h5 className="card-title">Contact us </h5>
                  <div className="card-text">
                    <div>
                      Mail us :
                      <a
                        className="black-text"
                        href="https://gmail.google.com"
                        rel="noreferrer"
                      >
                        jagadeeshsura5@gmail.com
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cover">
      
        <div className="w-25">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "calc(50vw - 50%)" }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 50,
            }}
            className="d-flex flex-wrap"
          >
            <h1 className="heading text-center" style={{ color: "purple" }}>
              Hello {UserName? UserName.toUpperCase():"Welcome! "} <br />
            </h1>
            <h3 className="text-center">{show?'Glad, to see you back 😁':' We are happy to see you '} </h3>
          </motion.div>
          <iframe src="https://img.freepik.com/premium-photo/laundry-basket-with-colorful-towels-background_488220-35147.jpg?w=2000" id="me" title="hi"></iframe>
        </div>
      </div>
      <div
        id="services"
        className="container-row justify-content-center text-center justify-content-row"
      >
      <div className="d-flex justify-content-start">  <Link className="m-2" to="/Shop">
      <motion.button
        className="btn btn-outline "
        style={{ backgroundColor: "black" }}
        type="button"
        drag
        dragConstraints={{
          right: 20,
          left: 10,
          top: 15,
          bottom: 40,
        }}>
       <AddShoppingCartIcon/>
      </motion.button>
       </Link>
</div>

        <b>
          <h2>Our Services</h2>
        </b>

          <img
            src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29ubmVjdHx8fHx8fDE2NzM5NjMwODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=330"
            className=" rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">Connections</h4>
          <p className="font-Roboto">
            We connect you to your laundryshop near you{" "}
          </p>
  
        
          <img
            src="https://images.unsplash.com/photo-1547341074-c5e9b0f9c335?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9uZXl8fHx8fHwxNjczOTYyOTg0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=330"
            className=" rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">Low prices </h4>
          <p className="font-Roboto">
            We provide you good washes at reasonable prices
          </p>
        
        
          <img
            src="https://images.unsplash.com/photo-1595518016504-e28ae999ea98?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVsaXZlcnl8fHx8fHwxNjczOTYyNzcy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=330"
            className="rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">Home pickup and delivery</h4>
          <p className="font-Roboto">
            According to our terms and conditions the shopkeeper will come to your address and pickup your order
          </p>
        
      </div>

      <ul className="smooth-scroll list-unstyled text-end m-3">
        <li>
          <h5>
            <a href="#test1">go to top </a>
          </h5>
        </li>
      </ul>
    </>
  );
}

export default Home;
