import React, { useState } from "react";
import { FaBehance, FaFacebookF, FaMediumM } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Wrapper>
        <div id="navbar">
          <Hamburger onClick={toggleMenu}>
            {isOpen ? "\u2715" : "\u2630"}
          </Hamburger>
          <div id="name">
            <p>Gilb.</p>
          </div>
          <NavMiddleItem isOpen={isOpen}>
            <p id="home">Home</p>
            <p>About</p>
            <p>Product</p>
            <p>Works</p>
            <p>Contact Me</p>

          </NavMiddleItem>
          <div id="talk">
            <p>Let's Talk</p>
          </div>
        </div>

        <div id="header">
          <h1>I'm  <span id="glib"> Glib.  </span> I will create a design that can give value to your product</h1>
        </div>
        <div id="img">
          <img src="https://barbarianstyle.net/wp-content/uploads/2020/10/Long-Bushy-Beard.jpg" alt="" />
          <div>


          </div>

        </div>

        <div id="middle_outer_div">


          <div id="middle_div">
            <div className="inner_middle_div">
              <div>
                <FaMediumM className="medium" />
              </div>

              <div className="details">
                <p className="inside_det">Medium</p>
                <p className="exp">  2 Years Experience  </p>
              </div>

            </div>

            <div className="inner_middle_div">
              <div>
                <FaBehance className="medium" />
              </div>

              <div className="details">
                <p className="inside_det">Behance</p>
                <p className="exp">  1+ Years Experience  </p>
              </div>

            </div>

            <div className="inner_middle_div">
              <div>
                <ImAppleinc className="medium" />
              </div>

              <div className="details">
                <p className="inside_det">Apple Inc</p>
                <p className="exp">  2+ Years Experience  </p>
              </div>

            </div>

            <div className="inner_middle_div">
              <div>
                <FaFacebookF className="medium" />
              </div>

              <div className="details">
                <p className="inside_det">Facebook</p>
                <p className="exp">  4+ Years Experience  </p>
              </div>

            </div>
          </div>
          <div id="middle_inner_div">
            <div id="inside_inner_div">
              <h1>
                Want to work together and create amazing products with me?
              </h1>
            </div>
          


          </div>
        </div>




      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }

  #talk>p:hover{
      background-color:  #091fed;
      cursor: pointer;
      transition: all  0.3s ease-in-out;
    }

  #navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
   /* border: 2px solid red; */
    padding: 10px 0px;
    position: sticky;
    top: 0px;
    z-index: 100;
    background-color: white;
  }

  #name > p {
    color: black;
    font-size: 25px;
    font-weight: 800;
  }

  #home {
    font-weight: 700;
  }

  #talk > p {
    background-color: #4659f7;
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 10px 17px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    #navbar {
      justify-content: space-between;
      padding: 10px;
      position: sticky;
      z-index: 100;
      background-color: white;
    }
  }

  #header{
    /* border: 2px solid blue; */
    text-align: center;
    width: 50%;
    margin: auto;
    padding: 70px 0px;
  }

  #header>h1{
    font-size: 35px;
    font-weight: 800;
   text-align: center;
  }


#glib{
 color: #4659f7;
}


#img>img{
  width: 200px;
  padding: 40px 0px;
  margin: auto;
  mix-blend-mode: multiply;


}

#img{
  background: rgb(177,185,238);
  background: radial-gradient(circle, rgba(177,185,238,1) 13%, rgba(255,255,255,1) 64%);
  /* border:2px solid red; */
  text-align: center;
}

#middle_outer_div{
  background-color: black;
  padding-top: 50px;
  padding-bottom: 0px;
}

#middle_div{
  /* border:2px solid green; */
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 80%;
  margin: auto;
  padding: 30px 30px;
  
}

.inner_middle_div{
    display: flex;
    /* border:2px solid green; */
    justify-content: center;
    align-items: center;
    color: white;
  }

  .medium{
    font-size: 30px;
    background-color: white;
    color: black;
    padding: 2px 3px;
    margin-right: 3px;
  }

  .details{
    margin: 0px;
    padding: 0px;
  }

  .details>p{
    font-size: 13px;
    margin-left: 5px;
  }


  .inside_det{
    font-weight: 700;
   

  }

  .exp{
    color: grey;
    font-weight: 700;
    font-size: 10px;
    margin-top: 5px;
    
  }

  @media screen and (min-width: 601px) and (max-width: 850px) {
    #middle_div {
      grid-template-columns: repeat(2, 1fr); 
      
    }

    .inner_middle_div{
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 301px) and (max-width: 600px) {
    #middle_div {
      grid-template-columns: repeat(1, 1fr); 
    }

    .inner_middle_div{
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }

  #middle_inner_div{
    /* border: 2px solid red; */
    width: 80%;
    margin: auto;
    background-color:  #4659f7;
    color: white;
    padding: 80px 0px 30px 0px;
    text-align: center;
    margin-top: 50px;
  }

  #inside_inner_div{
     width:60%;
     /* border: 2px solid green; */
     margin: auto;
     font-weight: 800;
  }

`;

const NavMiddleItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;


  p{
    padding: 3px 5px;
    transition: all  0.3s ease-in-out;
    border-radius: 10px;
  }

  p:hover{
    background-color: black;
    color: white;
    cursor: pointer; 
  }


  /* #talk:hover{
      background-color:  green;
      cursor: pointer;
    } */

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background-color: white;
  
    padding: 10px 0;
    grid-template-columns: 1fr;
    text-align: center;

    p:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    

    
  }

    #talk {
      margin-top: 10px;
    }

    /* #talk:hover{
      background-color:  #091fed;
    } */
  }
`;

const Hamburger = styled.div`

  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }






`;
