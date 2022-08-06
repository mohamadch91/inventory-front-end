import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class Country extends Component {
  state = {
    startDate: new Date(),
    levels:4,
   
    validated: false,
    CountryName:"",
    CountryCode:"",
    Currency:"",
    logo:null,
    slogo:null,
    growthRate:0,
    mainlocation:"",
    enableHR:false,
    enableMaintaining:false,
    targetpopulation:"",
    requiredcapacities:"",
  };
  changestate = (e,state) => {
    this.setState({[state]:e.target.value});
  }
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
  
     this.setState({ validated: true });
    };
    countryvalidator = () => {
      var hasNumber = /\d/; 
      if(this.state.CountryCode.length > 3){
        return false;
      }
      if(this.state.CountryCode.length <3){
        return false;
      }
      if(hasNumber.test(this.state.CountryCode)){
        return false;
      }
      return true;
    }
    CurrencyValidator = () => {
      if(this.state.Currency.length > 1){
        return false;
      }
      if(this.state.Currency.length <1){
        return false;
      }
      return true;
    }
    growthRateValidator = () => {
      if(isNaN(this.state.growthRate)){
        return false;
      }
     
      return true;
    }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Country configuration </h3>
         
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Country</h4>
                <Form noValidate validated={this.state.validated}  onSubmit={this.handleSubmit} className="form-sample">
                  <h3 className=" card-description text-bold"> Country info </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                        <Form.Control required placeholder="Example: USA"  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country code</label>
                        <div className="col-sm-9">
                        <Form.Control required    isInvalid={!this.countryvalidator()} isValid={this.countryvalidator()} value={this.state.CountryCode} onChange={(e)=>{
                          this.setState({  CountryCode : e.target.value.toUpperCase() })
                       
                        }}placeholder="Example: ABC"   type="text" />
                        </div>
                      </Form.Group>
                   
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    
                      <Form.Group className="row" >
                    <label className="col-sm-3 col-form-label">Currency</label>
                    <div className="col-sm-9">
                  <div className="input-group">
               
                    <Form.Control
                    required
                    isInvalid={!this.CurrencyValidator()} isValid={this.CurrencyValidator()} value={this.state.Currency} onChange={(e)=>{
                      this.setState({  Currency : e.target.value })}}
                   placeholder="Example: $"  type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    </div>
                  </div>
                </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Allow levels</label>
                        <div className="col-sm-9 mt-3">
                        
                        <Form.Control required onChange={(e)=>{
                          this.setState({levels:e.target.value})

                        }} type="range" min="1" max="8" step="1"  defaultValue={4}/>
                        </div>
                        <label className="col-sm-3 col-form-label">value :</label>
                        <div className="col-sm-9 mt-3">
                        
                        {this.state.levels}
                        </div>
                        
                        
                      </Form.Group>
            
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">logo </label>
                        <div className="custom-file col-sm-8">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">second logo </label>
                        <div className="custom-file col-sm-8">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 ">
                   
  
                      <Form.Group className=" input-group row  ">
                      <label className="col-sm-3 col-form-label">Annual Population Growth Rate</label>
                     <div className="input-group col-sm-9">
                 
                    <Form.Control required isInvalid={!this.growthRateValidator()} isValid={this.growthRateValidator()} value={this.state.growthRate} onChange={(e)=>{
                          this.setState({  growthRate : e.target.value })
                       
                        }} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <div className="input-group-append h-75 pb-3">

                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                     
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Main Location</label>
                        <div className="col-sm-9">
                        <Form.Control  required type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">Enable HR</label>
                        <div className="col-sm-7">
                        <Form.Check 
        
        type="switch"
        label=""
        id="disabled-custom-switch"
      />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">Enable Maintenance</label>
                        <div className="col-sm-7">
                        <Form.Check 
        
        type="switch"
        label=""
        id="disabled-custom"
      />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Target Population</label>
                        <div className="col-sm-9">
                        <Form.Control className="form-select" as="select" >
                        <option>General population</option>
                            <option>Under-1 Population</option>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Require Capacity</label>
                        <div className="col-sm-9">
                          <Form.Control  className="form-select" as="select">
                            <option>Estimate required capacity  (in MS Excel)</option>
                            <option>Enter required capacity manually</option>
                          
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Country
