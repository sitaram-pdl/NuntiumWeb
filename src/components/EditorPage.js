import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import { Button, Form,Checkbox,Radio } from 'semantic-ui-react'

export default class Admin extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('token')
        let loggedIn = true 
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    logoutButtonFunction = (e) => {
        localStorage.removeItem('token')
        
    console.log("cliasdk");
    return(
        
            this.props.history.push('/')
       
    
    )
    }
       


    
    render() {
        const { loggedIn } = this.state
        if (!loggedIn) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>This is editor page.</h1>
                <Button onClick={this.logoutButtonFunction } >Logoihj again</Button>
            </div>
        )
    }
}
