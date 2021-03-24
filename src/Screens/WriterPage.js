import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Form, Checkbox, Radio } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  Row,
  Nav,
  Navbar,
  Modal,
  Button,
  Col,
} from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import Footer from "../Components/Footer";
import EditorTabContain from '../Components/EditorTabContain'

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.handleShowlogoutmodal = this.handleShowlogoutmodal.bind(this);
    this.handleCloselogoutmodal = this.handleCloselogoutmodal.bind(this);

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      show: false,
    };
  }

  handleCloselogoutmodal() {
    this.setState({ show: false });
  }

  handleShowlogoutmodal() {
    this.setState({ show: true });
  }

  logoutButtonFunction = (e) => {
    localStorage.removeItem("token");

    console.log("cliasdk");
    return this.props.history.push("/");
  };

  render() {
    const { loggedIn } = this.state;
    if (!loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Router>
        <header>
          <Navbar style={{backgroundColor:'black'}} collapseOnSelect>
      
                <h1   style={{
                
                color: "#b33939",
                marginLeft:'20vh',
                fontSize: "30px",
              }}> Nuntium</h1>
             

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <div onClick={this.handleShowlogoutmodal}>
                    <h3 style={{ color: "white", cursor: "pointer" ,marginRight:'10vh'}}>
                      Log-out <i class="fas fa-sign-out-alt"></i>
                    </h3>
                  </div>
                </Nav>
              </Navbar.Collapse>
              
          </Navbar>
        </header>
        <main className="" style={{ background: "#b2bec3", height: "100%" }}>
          <div style={{ height: "100%" }}>
            <Row>
         
            <ProSidebar>
              <div
                style={{
                  minHeight: "85vh",
                  backgroundColor: "#535c68",
                  width: "38vh",
                }}
              >
                <Container style={{paddingLeft:50, paddingTop:50}}>
                  <h1 style={{color:'black'}}> user profile</h1>
                  <text>This column will contain user profile</text>
                </Container>
              </div>
            </ProSidebar>
           
            <Col style={{}}>
           <div style={{marginLeft:-15}}>
              
              
           
              {/*  this is container fro other */}
            
            
            
              </div>
              </Col>
              </Row>
          </div>

          <Modal show={this.state.show} onHide={this.handleCloselogoutmodal}>
           
            <Modal.Body><h1 variant="dark" >Logging out ?? </h1></Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.logoutButtonFunction}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
        <Footer />
      </Router>
    );
  }
}
