import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'
import UserService from '../services/user.service';
export class Level extends Component {
  state = {
    startDate: new Date(),
    validated: false,
    minPop:5,
    maxPop:16,
    name:"",
    number:1,
    current2:0,
    current20:0,
    current80:0,
    currentdry:0,
    planned2:0,
    planned20:0,
    planned80:0,
    planneddry:0,
    
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
    }
    handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const form = event.currentTarget;
      console.log(form)
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        const data={
          "maxpop": this.state.maxPop,
        "minpop": this.state.minPop,
        "uppervol": this.state.current2,
        "undervol": null,
        "maxpopu1": this.state.maxPop,
        "minpopu1": this.state.minPop,
        "m25vol": this.state.current20,
        "m70vol": this.state.current80,
        "m25volnew": this.state.planned20,
        "m70volnew": this.state.planned80,
        "uppervolnew": this.state.planned2,
        "undervolnew": null,
        "name": this.state.name,
        "dryvol": this.state.currentdry,
        "dryvolnew": this.state.planneddry,
  
        "country": null,
        "parent": this.state.number,
        }
        UserService.addlevel(data)
        .then(
          (response) => {
            console.log(response)
            // this.props.history.push('/level');
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
        
      }
  
     this.setState({ validated: true });
    };
    levelvalidator = () => {
      var hasNumber = /\d/; 

   
      if(hasNumber.test(this.state.name)){
        return false;
      }
      if(this.state.name.length < 1){
        return false;
      }
      return true;
    }
    capacityvalidator = (text) => {
      var hasNumber = /\d/;
      if(hasNumber.test(text)){
        const num = Number(text);
        
            if (Number.isInteger(num) && num > 0) {
              return true;
            }

      }
      return false;
    }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Level configuration </h3>
         
        </div>
        <Form noValidate validated={this.state.validated}  onSubmit={this.handleSubmit} className="form-sample">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Level</h4>
               
                  <p className="card-description"> Level info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Level number</label>
                        <div className="col-sm-9">
                        <Form.Control className="form-select" as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option >4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Level name</label>
                        <div className="col-sm-9">
                        <Form.Control required    isInvalid={!this.levelvalidator()} isValid={this.levelvalidator()} value={this.state.name} onChange={(e)=>{
                          this.setState({  name : e.target.value })
                       
                        }}  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
        
                  <div className="row">
                  <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Min. Population at this Level</label>
                        <div className="col-sm-9 mt-3">
                        
                        <Form.Control required onChange={(e)=>{
                          this.setState({minPop:e.target.value})

                        }} type="range" min="0" max="100" step="1"  defaultValue={5}/>
                        </div>
                        <label className="col-sm-3 col-form-label">value :</label>
                        <div className="col-sm-9 mt-3">
                        
                        {this.state.minPop} M
                        </div>
                        
                        
                      </Form.Group>
            
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Max. Population at this Level</label>
                        <div className="col-sm-9 mt-3">
                        
                        <Form.Control required onChange={(e)=>{
                          this.setState({maxPop:e.target.value})

                        }} type="range"  min="0" max="100" step="1"  defaultValue={4}/>
                        </div>
                        <label className="col-sm-3 col-form-label">value :</label>
                        <div className="col-sm-9 mt-3">
                        
                        {this.state.maxPop} M
                        </div>
                        
                        
                      </Form.Group>
            
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Min. Population: Children under one year at this level</label>
                        <div className="col-sm-9 mt-3">
                        
                        <Form.Control required onChange={(e)=>{
                          this.setState({minPop:e.target.value})

                        }} type="range" min="0" max="100" step="1" defaultValue={4}/>
                        </div>
                        <label className="col-sm-3 col-form-label">value :</label>
                        <div className="col-sm-9 mt-3">
                        
                        {this.state.minPop} M
                        </div>
                        
                        
                      </Form.Group>
            
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Max. Population: Children under one year at this level</label>
                        <div className="col-sm-9 mt-3">
                        
                        <Form.Control required onChange={(e)=>{
                          this.setState({maxPop:e.target.value})

                        }} type="range"  min="0" max="100" step="1"  defaultValue={4}/>
                        </div>
                        <label className="col-sm-3 col-form-label">value :</label>
                        <div className="col-sm-9 mt-3">
                        
                        {this.state.maxPop} M
                        </div>
                        
                        
                      </Form.Group>
            
                    </div>
          </div>
              
              </div>
            </div>
          </div>

        </div>
        <div className="page-header">
          <h3 className="page-title"> Required Capacity </h3>
         
        </div>
        <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Current</h4>
                <p className="card-description"> Current Capacity </p>
              
                <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">(2 - 8 C) in cm3</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.current2)} isValid={this.capacityvalidator(this.state.current2)} value={this.state.current2} onChange={(e)=>{
                      this.setState({  current2 : e.target.value })}}  type="text" />
                        </div>
                      </Form.Group>
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Below zero (-20 C)</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.current20)} isValid={this.capacityvalidator(this.state.current20)} value={this.state.current20} onChange={(e)=>{
                      this.setState({  current20 : e.target.value })}} type="text" />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">-80 degree C</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.current80)} isValid={this.capacityvalidator(this.state.current80)} value={this.state.current80} onChange={(e)=>{
                      this.setState({  current80 : e.target.value })}}  type="text" />
                        </div>
                      </Form.Group>
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Dry Store Volume</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.currentdry)} isValid={this.capacityvalidator(this.state.currentdry)} value={this.state.currentdry} onChange={(e)=>{
                      this.setState({  currentdry : e.target.value })}}  type="text" />
                        </div>
                      </Form.Group>
                 
                  
                  
            
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">planned</h4>
                <p className="card-description"> planned Capacity </p>
              
                <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">(2 - 8 C) in cm3</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.planned2)} isValid={this.capacityvalidator(this.state.planned2)} value={this.state.planned2} onChange={(e)=>{
                      this.setState({  planned2 : e.target.value })}}  type="text" />
                        </div>
                      </Form.Group>
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Below zero (-20 C)</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.planned20)} isValid={this.capacityvalidator(this.state.planned20)} value={this.state.planned20} onChange={(e)=>{
                      this.setState({  planned20 : e.target.value })}} type="text" />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">-80 degree C</label>
                        <div className="col-sm-9">
                        <Form.Control required
                    isInvalid={!this.capacityvalidator(this.state.planned80)} isValid={this.capacityvalidator(this.state.planned80)} value={this.state.planned80} onChange={(e)=>{
                      this.setState({  planned80 : e.target.value })}}  type="text" />
                        </div>
                      </Form.Group>
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Dry Store Volume</label>
                        <div className="col-sm-9">
                        <Form.Control  required
                    isInvalid={!this.capacityvalidator(this.state.planneddry)} isValid={this.capacityvalidator(this.state.planneddry)} value={this.state.planneddry} onChange={(e)=>{
                      this.setState({  planneddry : e.target.value })}} type="text" />
                        </div>
                      </Form.Group>
                 
                  
                  
            
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary ml-5 mb-4 w-25 offset-3  ">Submit</button>
          </div>
   
          </Form>
      </div>
    )
  }
}

export default Level
