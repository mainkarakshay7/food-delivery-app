import React from "react";
import UserContext from "../utils/userContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        location: "",
      },
    };
    console.log("child-constructor" + this.props.name);
  }

  async componentDidMount() {
    console.log("Child-cdm" + this.props.name);

    const response = await fetch("https://api.github.com/users/mainkarakshay7");
    const data = await response.json();

    this.timer = setInterval(() => console.log("Timer here"), 1000);

    this.setState({
      user: data,
    });

    console.log(data);
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  componentWillUnmount() {
    console.log("Cleanup code here-child");
    clearInterval(this.timer);
  }

  render() {
    console.log("Child-render" + this.props.name);
    return (
      <div className='flex justify-center flex-col m-auto'>
        <img
          className='w-80 h-80 my-6 m-auto'
          src={this.state.user.avatar_url}
        ></img>
        <h2 className='text-xl font-bold m-auto'>
          Name: {this.state.user.name}
        </h2>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 className='text-lg font-mono my-2 m-auto'>
              Created with ❤️ By, {user.name} - {user.email}
            </h3>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profile;
