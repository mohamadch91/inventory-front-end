import React, { Component, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import bsCustomFileInput from "bs-custom-file-input";
import UserService from "../services/user.service";
// import ReactDualRangeSlider from 'react-dual-range-slider'
import MultiRangeSlider from "../components/Dualslider";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Level = (update) => {
  const [startDate, setstartDate] = useState(new Date());
  const [validated, setvalidated] = useState(false);
  const [minPop, setminPop] = useState(0);
  const [maxPop, setmaxPop] = useState(100);

  const [name, setname] = useState("");
  const [number, setnumber] = useState(1);
  const [current2, setcurrent2] = useState(0.0);
  const [current20, setcurrent20] = useState(0.0);
  const [current25, setcurrent25] = useState(0.0);
  const [current70, setcurrent70] = useState(0.0);
  const [currentdry, setcurrentdry] = useState(0.0);
  const [planned2, setplanned2] = useState(0.0);
  const [planned20, setplanned20] = useState(0.0);
  const [planned25, setplanned25] = useState(0.0);
  const [planned70, setplanned70] = useState(0.0);
  const [planneddry, setplanneddry] = useState(0.0);
  const [parent , setParent] = useState(null);
  const [country, setcountry] = useState(JSON.parse(localStorage.getItem("country")));


  // form event targets
  const [levelNumber , setLevelNumber] = useState(1);
  const levelNumberHandler = (event) => {
   setLevelNumber( parseInt(event.target.value))
  }

 
  // start steps
  const steps = ["Add level", "Current", "Planned"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // end steps

  const handleChange = (date) => {
    setstartDate(date);
  };
  const handlemin = (min) => {
    setminPop(min);
  };
  const handlemax = (max) => {
    setmaxPop(max);
  };
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  const handleSubmit = (event) => {
    if(levelNumber ===1 ){
      setParent(null)
    }else{
      setParent(levelNumber-1)
    }
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = {
        number: levelNumber,
        maxpop: maxPop,
        minpop: minPop,
        uppervol: current2,
        undervol: current20,
        m25vol: current25,
        m70vol: current70,
        m25volnew: planned25,
        m70volnew: planned70,
        uppervolnew: planned20,
        undervolnew: planned2,
        name: name,
        dryvol: currentdry,
        dryvolnew: planneddry,
        country: 1,
        parent: parent,
      };
      console.log(data)
      UserService.addlevel(data)
        .then((response) => {
          console.log(response);
          let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    
  setstartDate(new Date());
  setvalidated(false);
  setminPop(0);
  setmaxPop(100);
  setname("");
  setnumber(1);
  setcurrent2();
  setcurrent20();
  setcurrent25();
  setcurrent70();
  setcurrentdry();
  setplanned2();
  setplanned20();
  setplanned25();
  setplanned70();
  setplanneddry();
  setParent();
          // this.props.history.push('/level');
        })
        .catch((error) => {
          console.log(error);
        });
        
    }
    
    //  this.setState({ validated: true });
    setvalidated(true);
  };
  const levelvalidator = () => {

    if (name.length >0) {
      return true;
    }
  };
  const minpopvalidator = ()=> {
    if (minPop.toString().length>0 ) {
      return true;
    }
  }
  const maxpopvalidator = ()=> {
    if (maxPop.toString().length>0 ) {
      return true;
    }
  }
  const capacityvalidator = (text) => {
    console.log(typeof text)
    if(text<0){
      return false
    }
    if (text.toString().length>0 ) {
      return true;
    }
  };

  return (
   
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="form-sample"
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                // labelProps.optional = (
                //   <Typography variant="caption">Optional</Typography>
                // );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you have submited your level.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset} variant="contained">Add new level</Button>
              </Box>
            </React.Fragment>
          ) : activeStep === 0 ? (
            <React.Fragment>
              <div className="row">
                <div className="col-12 grid-margin text-black">
                
                   
                      <h4 className="card-title"><Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> Level configurations</h4>

                      <p className="card-description h3"> Level info </p>
                      <div className="row">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label control-label">
                              Level number
                            </label>
                            <div className="col-sm-9">
                              <Form.Control className="form-select" as="select" onChange={levelNumberHandler} value={levelNumber}>
                              {[...Array(country.levels)].map((x, i) =>
                            <option value={i+1}>{i+1}</option>
                               )}
                     
                              </Form.Control>
                            </div>
                          </Form.Group>
                        
                   
                      </div>

                      <div className="row">

                      <Form.Group className="row">
                            <label className="col-sm-3 col-form-label control-label">
                              Level name
                            </label>
                            <div className="col-sm-9">
                              <Form.Control
                                required
                                
                                isValid={levelvalidator()}
                                value={name}
                                onChange={(e) => {
                                  setname(e.target.value);
                                }}
                                type="text"
                              />
                            </div>
                          </Form.Group>
                      </div>
                      <div className="row">
                      <Form.Group className="row">
                            <label className="col-sm-3 col-form-label control-label">
                            Min {country.poptarget}  at this level
                            </label>
                            <div className="col-sm-9">
                              <Form.Control
                                required
                               
                                isValid={minpopvalidator()}
                                value={minPop}
                                onChange={(e) => {
                                  setminPop(e.target.value);
                                }}
                                type="number"
                              />
                            </div>
                          </Form.Group>
                      </div>
                      <div className="row">
                      <Form.Group className="row">
                            <label className="col-sm-3 col-form-label control-label">
                            Max {country.poptarget}  at this level
                            </label>
                            <div className="col-sm-9">
                              <Form.Control

                                required
                                isValid={maxpopvalidator()}
                                value={maxPop}
                                onChange={(e) => {
                                  setmaxPop(e.target.value);
                                }
                                }
                                type="number"
                              />
                            </div>
                          </Form.Group>
                      </div>
                   
                   
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="outlined"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }} variant="contained">
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext} variant="contained">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
              
                </div>
              </div>
              
            </React.Fragment>
          ) : activeStep === 1 ? (
            <React.Fragment>
              <div className="row">
                <div className="col-md-12 grid-margin text-black">
               
                      <h4 className="card-title"><Typography sx={{ mt: 2, mb: 1 }}>
                Step{activeStep + 1}
              </Typography> Current</h4>
                      <p className="card-description"> Current Capacities </p>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+25 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(current25)}
                            value={current25}
                            onChange={(e) => {
                              setcurrent25(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>


                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+2- +8 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(current2)}
                            value={current2}
                            onChange={(e) => {
                              setcurrent2(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>


                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -20 C in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(current20)}
                            value={current20}
                            onChange={(e) => {
                              setcurrent20(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -70 C in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(current70)}
                            value={current70}
                            onChange={(e) => {
                              setcurrent70(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Dry Store in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(currentdry)}
                            value={currentdry}
                            onChange={(e) => {
                              setcurrentdry(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>
                      </div>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="outlined"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )} */}

                <Button onClick={handleNext} variant="contained">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
               
             
              </div>
              
              
            </React.Fragment>
          ) : activeStep === 2 ? (
            <React.Fragment>
              <div className="row">
                <div className="col-md-12 grid-margin text-black">
                  
                      <h4 className="card-title"><Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> Planned</h4>
                      <p className="card-description"> planned Capacity </p>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+25 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(planned25)}
                            value={planned25}
                            onChange={(e) => {
                              setplanned25(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+2 - +8 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isValid={capacityvalidator(planned2)}
                            value={planned2}
                            onChange={(e) => {
                              setplanned2(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -20 C in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planned20)}
                            isValid={capacityvalidator(planned20)}
                            value={planned20}
                            onChange={(e) => {
                              setplanned20(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -70 C in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planned70)}
                            isValid={capacityvalidator(planned70)}
                            value={planned70}
                            onChange={(e) => {
                              setplanned70(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Dry Store in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planneddry)}
                            isValid={capacityvalidator(planneddry)}
                            value={planneddry}
                            onChange={(e) => {
                              setplanneddry(parseFloat(e.target.value));
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                   variant="outlined"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleSubmit} variant="contained">
                  Submit
                </Button>
              </Box>
                 
              
              </div>
             
            </React.Fragment>
          ) : (
            "hello"
          )}
        </Box>
      </Form>


  );
};

export default Level;
