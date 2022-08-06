import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class Level extends Component {
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
          <h3 className="page-title"> Level configuration </h3>
         
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Level</h4>
                <form className="form-sample">
                  <p className="card-description"> Level info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Level number</label>
                        <div className="col-sm-9">
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option >4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Level name</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
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
                        <label className="col-sm-3 col-form-label">Country code</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
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
                        <label className="col-sm-3 col-form-label">Min. Population at this Level</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Max. Population at this Level</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Min. Population: Children under one year at this level</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Max. Population: Children under one year at this level</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Above zero (2 - 8 C) in cm3</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Below zero (-20 C)</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">-80 degree C</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">+25 degree C</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Above zero (2 - 8 C) (NEW) in cm3</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Below zero (-20 C) (NEW)</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">+20 degree C (NEW)</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">-80 degree C (NEW)</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Dry Store Volume</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
              
                    <div className="col-md-6">
                        
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Dry Store Volume(New)</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
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

export default Level
