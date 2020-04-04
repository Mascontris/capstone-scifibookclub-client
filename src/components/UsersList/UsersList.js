import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./UsersList.css";

export default class UsersList extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    users: [],
    error: null
  };

  componentDidMount() {
    AuthApiService.getUsers().then(this.setList);
  }

  setList = users => {
    this.setState({ users });
  };

  renderUserList() {
    const users = this.state.users;
    if (!users) {
      return <p>Loading...</p>;
    } else {
      return users.map((user, index) => 
      (
      <div key={index}>
      <li>{user.user_name}</li>
      <br></br>
      </div>
      ));
    }
  }

  render() {
    return (
      <div className="users__container">
        <div className="user__link label">
          <h2>Currently Registered Users</h2>
          <br></br>
          {this.renderUserList()}
        </div>
      </div>
    );
  }
}
