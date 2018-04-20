import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from './../../ducks/reducer';

class Auth extends Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.updatePassword = this.updatePassword.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.registerUser = this.registerUser.bind(this)
        this.LoginUser = this.LoginUser.bind(this)
    }
    registerUser() {
        let {username, password} = this.state
        axios.post('/api/register', {username, password}).then(results => console.log(results))
    }
    LoginUser() {
        let {username, password} = this.state
        axios.post('/api/login', {username, password}).then(results => console.log(results))
    }
    updateUsername(val){
        this.setState({username: val})
    }
    updatePassword(val){
        this.setState({username: val})
    }
    render(){
        return (
            <div>
                Auth
                <input value={this.username} type='text' onChange={this.updateUsername}/>
                <input value={this.password} type='text' onChange={this.updatePassword}/>
                <button onClick={this.LoginUser}>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}
export default connect(null, {getUser})(Auth);