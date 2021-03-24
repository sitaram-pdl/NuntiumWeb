import React, { Component } from "react";
import { Container, Row, Nav, Navbar, Modal, Col } from "react-bootstrap";
import { Button, Form, TextArea } from "semantic-ui-react";




export class AddDiscussion extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      addNewsCategories: null,
      addnewsHeadline: "",
      addUpdateInfo: "",
      newsData: "",
     
    
      
    };

    
    
    this.handleShowlogoutmodal = this.handleShowlogoutmodal.bind(this);
    this.handleCloselogoutmodal = this.handleCloselogoutmodal.bind(this);

    this.handleaddNewsCategoriesChange = this.handleaddNewsCategoriesChange.bind(this);
    this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
    this. handleUpdateInfoChange = this. handleUpdateInfoChange.bind(this);
   
    this.handleNewsDataChange = this.handleNewsDataChange.bind(this);
      }

 
  
  


  handleCloselogoutmodal() {
    this.setState({ show: false });
  }

  handleShowlogoutmodal() {
    this.setState({ show: true});
  }

  handleaddNewsCategoriesChange(event) {
    this.setState({
      addNewsCategories: event.target.value,
    });
    console.log(this.state.addNewsCategories);
  }

  handleHeadlineChange(event) {
    this.setState({
      addnewsHeadline: event.target.value,
    });
 
  }

  handleUpdateInfoChange(event) {
    this.setState({
      addUpdateInfo: event.target.value,
    });
 
  }

  handleNewsDataChange (event) {
    this.setState({
      newsData: event.target.value,
    });
    
  }
  
  

  

  submit() {
    console.log(this.state.addNewsCategories);
  }

  render() {
    const { addNewsCategories, addnewsHeadline ,newsData ,  addUpdateInfo} = this.state;
    return (
      <div>
        <div style={{ marginRight: 20 }}>
          <div class="card " style={{ borderColor: '"#b33939' }}>
            <div class="card-header">
              <h1 style={{ color: "#b33939" }}>Add Discussion</h1>
            </div>
            <div class="card-body">
              {/**contain starts fromm here */}

              <Container>
                <Form>
                  <div style={{ marginTop: "3vh" }}>
                    {/**Add category */}
                    <h3 style={{ marginBottom: "3vh" }}>Add category :</h3>

                    <select
                      className="form-control"
                      name="city"
                      style={{ width: "20vh", fontSize: 16 }}
                      onChange={this.handleaddNewsCategoriesChange}
                    >
                      <option selected>Select Category</option>
                      <option value="Business">Business</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="General">General</option>
                      <option value="Health">Health</option>
                      <option value="Science">Science</option>
                      <option value="Sport">Sport</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>

                  {/**headlines */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Headline :</h3>

                    <Form.Input
                      iconPosition="left"
                      placeholder="Enter Headline "
                      value={this.state.addnewsHeadline}
                      onChange={this.handleHeadlineChange}
                    />
                  </div>
                   {/**headlines */}
                   <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Update info :</h3>

                    <Form.Input
                      iconPosition="left"
                      placeholder="Enter Update info "
                      value={this.state. addUpdateInfo}
                      onChange={this.handleUpdateInfoChange}
                    />
                  </div>

                  {/**news  */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>News :</h3>
                    <TextArea
                      onChange={this.handleNewsDataChange}
                      placeholder="Enter newsData"
                      autoSize={{ minRows: 4, maxRows: 7 }}
                    />
                  </div>

               

         
                 
                  

                
               
                  {/**model container starts from here */}
                  <Modal
                    show={this.state.show}
                    onHide={this.handleCloselogoutmodal}
                  >
                    <Modal.Body>
                      <h1 variant="dark">
                        {addNewsCategories} {addnewsHeadline} { addUpdateInfo}  {newsData }
                        <img style={{maxWidth:'10vh'}} src={this.state.newsImage}/>
            
                      </h1>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button>Yes</Button>
                    </Modal.Footer>
                  </Modal>
                </Form>
                <Button
                    negative
                    onClick={this.handleShowlogoutmodal}
                    style={{ marginTop: "80px", marginLeft: "70%" }}
                  >
                    Submit
                  </Button>

              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDiscussion;
