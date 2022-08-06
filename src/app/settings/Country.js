import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class Country extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
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
                <form className="form-sample">
                  <p className="card-description"> Country info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row" >
                    <label className="col-sm-3 col-form-label">Currency</label>
                    <div className="col-sm-9">
                  <div className="input-group">
                 
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-primary text-white">$</span>
                    </div>
                    <Form.Control type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    </div>
                  </div>
                </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country code</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Allow levels</label>
                        <div className="col-sm-9">
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option selected>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">logo </label>
                        <div className="custom-file col-sm-9">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">second logo </label>
                        <div className="custom-file col-sm-9">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Annual Population Growth Rate</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Main Location</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Enable HR</label>
                        <div className="col-sm-9">
                        <select className="form-control">
                            <option>yes</option>
                            <option>no</option>
                           
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Enable Maintenance</label>
                        <div className="col-sm-9">
                        <select className="form-control">
                        <option>yes</option>
                            <option>no</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Target Population</label>
                        <div className="col-sm-9">
                        <select className="form-control">
                        <option>General population</option>
                            <option>Under-1 Population</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Require Capacity</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Estimate required capacity by using Assistant Tool (in MS Excel)</option>
                            <option>Enter required capacity manually</option>
                          
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Country
