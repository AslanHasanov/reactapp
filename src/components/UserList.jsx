import React, { Component } from 'react'
import UserItem from './UserItem';

 class UserList extends Component {
  render(props) {
    console.log(props);
    return (
      <div>
        
        {
            this.props.users.map(item=>{return(
                <UserItem 
                key={item.id}
                id={item.id}
                name={item.name}
                DeleteUser={this.props.DeleteUser}
                />
            )})
        }
      </div>
    )
  }
}

export default UserList