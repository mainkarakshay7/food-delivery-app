import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-constructor");
  }

  componentDidMount() {
    console.log("parent-cdm");
  }

  componentDidUpdate() {
    console.log("Parent is updated");
  }

  render() {
    console.log("Parent-render");
    return (
      <div className='flex flex-col justify-center align-middle'>
        <h1 className='text-3xl font-bold m-auto'>About Us</h1>
        <Profile name='child-1' />
      </div>
    );
  }
}

export default About;
