import React, {Component} from 'react'
import Video from '../../component/Video'
import './style.css'
// import {Link} from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            passwd: ''
        }

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePasswd = this.handlePasswd.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    handlePasswd = (event) => {
        this.setState({ passwd: event.target.value })
    }

    handleSubmit = (event) => {
        alert('username: ' + this.state.username +  '\npasswd: ' + this.state.passwd)
        event.preventDefault()
        fetch(process.env.SERVER_URL, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, passwd: this.state.passwd }),
            headers: {'Content-Type':'application/json'}
        }).then(res => {
            // authentication part
            console.log(res)
        })
    }

    render(){
        return(
            <div className="container">
                <Video />
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            帳號:
                            <br/>
                            <input 
                                type="text" 
                                placeholder="姓名(例如：王大明)" 
                                value={this.state.username} 
                                onChange={this.handleUsername} 
                            />
                            <br/>
                        </label> 
                        <label>
                            密碼:
                            <br/>
                            <input 
                                type="password" 
                                placeholder="身分證字號(例如：A123456789)" 
                                value={this.state.passwd} 
                                onChange={this.handlePasswd} 
                            />
                            <br/>
                        </label> 
                        <input type="submit" value="Login"/>
                        <br/>
                        <br/>
                        <p className="contact">遇到問題嗎？<a href="https://www.facebook.com/nctucsChaseDream/">聯絡我們</a></p>
                    </form>
                </div>
            </div>
        )
    }


}


export default Login

// const Login = () => {
//     return(
//         <div className='container'>
//             <Video />
//             <div>
//                 <input>
//             </div>
//             <Link to='/'>home</Link>
//         </div>
//     )
// }