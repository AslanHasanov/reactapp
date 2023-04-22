import React, { Component } from 'react'
import UserList from './components/UserList'

 class App extends Component {
  state={
    isValid:true,
    users:[
      {id:1,name:"Aslan"},
      {id:2,name:"Elnur"},
      {id:3,name:"Qember"}
    ]
  }

  DeleteUser=(id)=>{
    this.setState({
      users:this.state.users.filter(x=>x.id !==id)
    })
  }

  render() {
    return (
      <div>     
        <h3 style={this.state.users.length===0?{"color":"red"}: {"color":"blue"}}>Istifadeciler</h3> 
        {
          this.state.users.length === 0 ? "istifadeci movcud deyil" : 
          <UserList DeleteUser={this.DeleteUser} users={this.state.users}/>
        }
      </div>
    )
  }
}

export default App
