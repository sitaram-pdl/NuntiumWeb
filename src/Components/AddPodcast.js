import React, { Component } from "react";
import { Container, Row, Nav, Navbar, Modal, Col } from "react-bootstrap";
import { Button, Form, TextArea } from "semantic-ui-react";
import SpeakerInput from "./SpeakerInput";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

const options = [
  { value: 'flavor', label: 'flavor' },
  { value: 'yummy', label: 'yummy' },
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'yellow', label: 'yellow' },
];

export class AddPodcast extends Component {
  constructor() {
    super();

  

    this.state = {
      show: false,
      addNewsCategories: null,
      addEpisodeHeadline: "",
      addPodcastInfo: "",
      selectedPodcastOption: 'None',
      newsImage: "",
      newsImageBeforeUpload:''
    };

    this.handleShowlogoutmodal = this.handleShowlogoutmodal.bind(this);
    this.handleCloselogoutmodal = this.handleCloselogoutmodal.bind(this);
    this. handlePodcastChange = this. handlePodcastChange.bind(this);
  
    this.handleaddNewsCategoriesChange = this.handleaddNewsCategoriesChange.bind(
      this
    );
    this.handleEpisodeHeadlineChange = this.handleEpisodeHeadlineChange.bind(
      this
    );
    this.handlePodcastInfoChange = this.handlePodcastInfoChange.bind(this);
    this.handleInputImageChange = this.handleInputImageChange.bind(this);
  }

  

  handleCloselogoutmodal() {
    this.setState({ show: false });
  }

  handleShowlogoutmodal() {
    this.setState({ show: true });
  }

  handleaddNewsCategoriesChange(event) {
    this.setState({
      addNewsCategories: event.target.value,
    });
    console.log(this.state.addNewsCategories);
  }

  handlePodcastChange = ({ target }) => {
    this.setState({
      selectedPodcastOption: target.value
    })
  }

  handleEpisodeHeadlineChange(event) {
    this.setState({
      addEpisodeHeadline: event.target.value,
    });
  }

  handlePodcastInfoChange(event) {
    this.setState({
      addPodcastInfo: event.target.value,
    });
  }

  handleInputImageChange(event) {
    this.setState({
      newsImage: URL.createObjectURL(event.target.files[0]),
    });
    
    
               
    }
   
  
  

  submit() {
    console.log(this.state.addNewsCategories);
  }

  render() {
    const {
      addNewsCategories,
      addEpisodeHeadline,
      addPodcastInfo,
      newsImage,
      selectedPodcastOption
    } = this.state;
    return (
      <div>
        <div style={{ marginRight: 20 }}>
          <div class="card " style={{ borderColor: '"#b33939' }}>
            <div class="card-header">
              <h1 style={{ color: "#b33939" }}>Add Podcast</h1>
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
                  <div style={{ marginTop: "3vh" }}>
                    {/**podcast select */}
                    <h3 style={{ marginBottom: "3vh" }}>Podcast :</h3>
                    <select
         className="form-control"
                     
          style={{ width: "20vh", fontSize: 16 }}
                    
          value={this.state.selectedPodcastOption}
          onChange={this.handlePodcastChange}
          >
        {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}
        </select>
                    
                    </div>


                  {/**headlines */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Episode Headline :</h3>

                    <Form.Input
                      iconPosition="left"
                      placeholder="Enter Episode Headline "
                      value={this.state.addEpisodeHeadline}
                      onChange={this.handleEpisodeHeadlineChange}
                    />
                  </div>

                  {/**Podcast Info */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Podcast Info :</h3>

                    <Form.Input
                      iconPosition="left"
                      placeholder="Enter Podcast Info "
                      value={this.state.addPodcastInfo}
                      onChange={this.handlePodcastInfoChange}
                    />
                  </div>

                  {/**tag input */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Speaker :</h3>

                    {/**https://www.npmjs.com/package/react-input-tags */}
                    <SpeakerInput />
                  </div>
                  {/** photo  */}
                  <div style={{ marginTop: "3vh" }}>
                    <h3 style={{ marginBottom: "3vh" }}>Audio :</h3>
                    <input type="file"   onChange={this.handleInputImageChange} />
                    
                    <div style={{ marginTop: "3vh" }}>
                    <AudioPlayer
                    style={{
                      width: '400px'
                    }}
                    
                      src={this.state.newsImage}
                      onPlay={(e) => console.log("onPlay")}
                      // other props here
                    />
                    </div>

                  </div>

                  {/**model container starts from here */}
                  <Modal
                    show={this.state.show}
                    onHide={this.handleCloselogoutmodal}
                  >
                    <Modal.Body>
                      <h1 variant="dark">
                        {addNewsCategories} {addEpisodeHeadline}{" "}
                        {addPodcastInfo} {newsImage} { selectedPodcastOption}
                        <img
                          style={{ maxWidth: "10vh" }}
                          src={this.state.newsImage}
                        />
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

export default AddPodcast;
