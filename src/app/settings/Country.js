import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'
import UserService from '../services/user.service';
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
    targetpopulation:"General population",
    requiredcapacities:true,
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
      else{
       const  data={
          "country": this.state.CountryName,
          "codecountry": this.state.CountryCode,
          "currency": this.state.Currency,
          "levels": this.state.levels,
          "logo": this.state.logo,
          "secondLogo": this.state.slogo,
          "poptarget": this.state.targetpopulation,
          "poprate": this.state.growthRate,
          "havehr": this.state.enableHR,
          "mainlocation": this.state.mainlocation,
          "logo2": this.state.logo2,
          "usingtool": this.state.requiredcapacities,
          "usingmaintenance": this.state.enableMaintaining,
        }
        UserService.addcountry(data).then(res => {
          console.log(res)
          // this.alerthandle("Country added successfully","success")
        }
        ).catch(err => {
          console.log(err)
          // this.alerthandle("Country added unsuccessfully","error")
        }
        )

      }
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
                        <Form.Control  required value={this.state.mainlocation} onChange={(e)=>{
                          this.setState({  mainlocation : e.target.value })
                       
                        }} type="text"/>
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
                        onChange={(e)=>{
                          this.setState({  enableHR : e.target.value })
                       
                        }}
        
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
         onChange={(e)=>{
          this.setState({  enableMaintaining : e.target.value })
       
        }}
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
                        <Form.Control  onChange={(e)=>{
                          this.setState({  targetpopulation : e.target.value })
                       
                        }}className="form-select" as="select" >
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
                          <Form.Control  onChange={(e)=>{
                          this.setState({  requiredcapacities : e.target.value })
                       
                        }}   className="form-select" as="select">
                            <option value="true">Estimate required capacity  (in MS Excel)</option>
                            <option value="false">Enter required capacity manually</option>
                          
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
