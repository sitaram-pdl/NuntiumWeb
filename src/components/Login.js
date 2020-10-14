import React, { Component ,createRef } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Icon, Image, Input,  } from 'semantic-ui-react'
import { Button, Form,Checkbox,Radio } from 'semantic-ui-react'
import './Login.css';


export default class Login extends Component {
   
    buttonRef = createRef()
  handleClick = () => this.buttonRef.current.focus()

    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let LoggedIn = true       
        if (token == null) {
            LoggedIn = false
        }

        
        this.state = {
            username: "",
            value:"",
            password:"",
            LoggedIn,
            Location:""
            
        }
       
       
    }
    
   
    handleChange = (e, { value }) => this.setState({ value })
    handler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault()
        const { username, password, value } = this.state
        
        if (username === 'a' && password === 'b'&& value === 'Writer') {
            localStorage.setItem('token', 'token')
            this.setState({
                LoggedIn: true,
                Location:"Writer"
            })
        }
        else  if (username === 'a' && password === 'b'&& value === 'Editor') {
            localStorage.setItem('token', 'token')
            this.setState({
                LoggedIn: true,
                Location:"Editor"
            })
        }


    }
   

    render() {
        
        const {LoggedIn,Location}= this.state
        if (LoggedIn ) {
             if(Location==="Writer"){
                    return (<Redirect to='/WriterPage013' />)
                }else if (Location==="Editor"){
            return (<Redirect to='/EditorPage012' />)
        }

        };

   
       
        return (
            <div className='Login-component'>
            <div  style={{  display:' flex',
            flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:'130px',
              
               

        }}>

                   <Card style={{  alignItems: 'center',
                                marginTop: '130px',
                               
                               
                                backgroundColor: '#171717',
                                width:'400px',
                                height:'60px'
                                }}>
                                    <h2 style={{ fontFamily:' fantasy', alignItems: 'center',color:'#e02a02',marginTop:'12px', fontSize: '30px' }}>Nuntium</h2>
                                    </Card>
                                    


                <Card style={{ paddingLeft:'40px',
                paddingRight :'40px',
                paddingTop:'40px',
                
                                marginTop: '20px',
                               
                                backgroundColor: '#171717',
                                width:'450px',
                                height:'300px'
                                }}>
    
                


                <Form  inverted>
                <Form.Field>

               

                <text style={{ color:'White',fontStyle:' sans-serif',marginTop: '10px', fontSize: '20px'}}> Email    :   </text>

               
                    <Form.Input 
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                    type='username'
                    name="username"
                   
                      style={{  marginTop: '5px'}}
                     value={this.state.username}
                      onChange={this.handler} />
                     </Form.Field>

              
                     <Form.Field>
                    <text style={{ color:'White',fontStyle:' sans-serif',marginTop: '10px', fontSize: '20px'}}> Password :  </text>


                    <Form.Input 
                    icon='lock'
                    iconPosition='left'
                   
                    type='password' 
                    style={{  marginTop: '5px'}}
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                     onChange={this.handler} 
                     />

</Form.Field>
<Form.Field style={{ color:'White',fontStyle:' sans-serif',marginTop: '10px', fontSize: '20px'}}>
         You are : <b>{this.state.value}</b>
        </Form.Field>
<Form.Field>
          <Radio
            label='Writer'
            name='radioGroup'
            value='Writer'
            checked={this.state.value === 'Writer'}
            onChange={this.handleChange}
          />
   
          <Radio
            label='Editer'
            name='radioGroup'
            value='Editor'
            checked={this.state.value === 'Editor'}
            onChange={this.handleChange}
            style={{ marginLeft:'15px'}}
          />
        </Form.Field>


                </Form>
                </Card>
                <Button negative onClick={this.formSubmit}  style={{  marginTop: '20px',marginLeft:'70%'}}>Submit</Button>
   
   

 


              
                
               
            </div>
            </div>
        )
    }
    
}

