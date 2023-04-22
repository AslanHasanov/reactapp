import React, { Component } from 'react'

 class UserItem extends Component {
  render(props) {
    const{id,name,DeleteUser}=this.props;
    return (
      <div>
        <ul>
          <li>Id: {id}</li>
          <li>UserName: {name} </li>
          <li><button onClick={()=> DeleteUser(id)}>delete</button></li>
        </ul>
      </div>
    )
  }
}

export default UserItem