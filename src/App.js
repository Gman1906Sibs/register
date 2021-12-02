import './App.css';
import logo from './images/logo.png';
import banner from "./images/banner.png";
import Form from "./Form";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className=" flex justify-center ">
      <div className=" max-w-[1500px]  ">
        <div className=" max-w-full w-[100vw] h-full text-[20px] overflow-y-hidden overflow-x-hidden  ">
          <div className=" text-gray-400 text-sm py-2 border border-b-[1px] border-gray-200 font-semibold mb-3 flex justify-center md:justify-start border-l-0 border-r-0 ">
            <h1 className=" md:ml-[50px] ">SUNDAY SERVICE REGISTRATION</h1>
          </div>
          <div className=" flex w-[100vw] ">
            <div className=" w-[50vw] ">
              <img src={logo} alt="" className=" md:ml-[50px] "/>
            </div>
            <div className=" hidden lg:flex justify-evenly border-l-[1px] border-r-[1px] w-[30vw] items-center text-gray-500 text-base font-semibold ">
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/">HOME</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/about-us/">ABOUT US</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/audio-messages/">MEDIA</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/contacts-us/">CONTACT</a></h1>
            </div>
            <div className=" w-[20vw] ">

            </div>
          </div>
          <div className="  lg:hidden flex w-[100vw] text-sm justify-evenly border-t-[1px] border-b-[1px] items-center text-gray-500 font-semibold py-2 mt-2 ">
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/">HOME</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/about-us/">ABOUT US</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/audio-messages/">MEDIA</a></h1>
              <h1 className=" hover:text-red-500 "><a href="https://joburgnorthchristianchurch.org/contacts-us/">CONTACT</a></h1>
            </div>
          <img src={banner} alt="" className=" ml-2 w-[100vw] max-h-[400px] my-4 "/>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
