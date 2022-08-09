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

const Level = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [validated, setvalidated] = useState(false);
  const [minPop, setminPop] = useState(0);
  const [maxPop, setmaxPop] = useState(100);
  const [minChildPop, setMinChildPop] = useState(0);
  const [maxChildPop, setMaxChildPop] = useState(100);
  const [name, setname] = useState("");
  const [number, setnumber] = useState(1);
  const [current2, setcurrent2] = useState();
  const [current20, setcurrent20] = useState();
  const [current25, setcurrent25] = useState();
  const [current70, setcurrent70] = useState();
  const [currentdry, setcurrentdry] = useState();
  const [planned2, setplanned2] = useState();
  const [planned20, setplanned20] = useState();
  const [planned25, setplanned25] = useState();
  const [planned70, setplanned70] = useState();
  const [planneddry, setplanneddry] = useState();
  const [parent , setParent] = useState();



  // form event targets
  const [levelNumber , setLevelNumber] = useState(1);
  const levelNumberHandler = (event) => {
   setLevelNumber(event.target.value)
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
    if(number ===1 ){
      setParent(null)
    }else{
      setParent(number-1)
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
        number: number,
        maxpop: maxPop,
        minpop: minPop,
        uppervol: current2,
        undervol: null,
        m25vol: current25,
        m20vol: current20,
        m70vol: current70,
        m20volnew: planned20,
        m25volnew: planned25,
        m70volnew: planned70,
        uppervolnew: null,
        undervolnew: planned2,
        name: name,
        dryvol: currentdry,
        dryvolnew: planneddry,
        country: 1,
        parent: parent,
      };
      UserService.addlevel(data)
        .then((response) => {
          console.log(response);
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
    var hasNumber = /\d/;

    if (hasNumber.test(name)) {
      return false;
    }
    if (name.length < 1) {
      return false;
    }
    return true;
  };
  const capacityvalidator = (text) => {
    var hasNumber = /\d/;
    if (hasNumber.test(text)) {
      const num = Number(text);

      if (Number.isInteger(num) && num > 0) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
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
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title"><Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> Add Level</h4>

                      <p className="card-description"> Level info </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">
                              Level number
                            </label>
                            <div className="col-sm-9">
                              <Form.Control className="form-select" as="select" onChange={levelNumberHandler} value={levelNumber}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
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
                            <label className="col-sm-3 col-form-label">
                              Level name
                            </label>
                            <div className="col-sm-9">
                              <Form.Control
                                required
                                isInvalid={!levelvalidator()}
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
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">
                              Population at this Level
                            </label>
                            <div className="col-sm-9 mt-3">
                              <MultiRangeSlider
                                min={0}
                                max={100}
                                handlemin={handlemin}
                                handlemax={handlemax}
                                onChange={({ min, max }) =>{
                                  setminPop(min);
                                  setmaxPop(max);
                                }
                                }
                              />
                            </div>
                            <label className="col-sm-3 col-form-label">
                              Min value :
                            </label>
                            <div className="col-sm-9 mt-3">{minPop} Milion</div>
                            <label className="col-sm-3 col-form-label">
                              Max value :
                            </label>
                            <div className="col-sm-9 mt-3">{maxPop} Milion</div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">
                              Population: Children under one year at this level
                            </label>
                            <div className="col-sm-9 mt-3">
                              <MultiRangeSlider
                                min={0}
                                max={100}
                                handlemin={handlemin}
                                handlemax={handlemax}
                                onChange={({ min, max }) =>{
                                setMinChildPop(min);
                                setMaxChildPop(max);
                                }
                              }
                              />
                            </div>
                            <label className="col-sm-3 col-form-label">
                              Min value :
                            </label>
                            <div className="col-sm-9 mt-3">{minChildPop} Milion</div>
                            <label className="col-sm-3 col-form-label">
                              Max value :
                            </label>
                            <div className="col-sm-9 mt-3">{maxChildPop} Milion</div>
                          </Form.Group>
                        </div>
                      </div>
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
              </div>
              
            </React.Fragment>
          ) : activeStep === 1 ? (
            <React.Fragment>
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title"><Typography sx={{ mt: 2, mb: 1 }}>
                Step1 {activeStep + 1}
              </Typography> Current</h4>
                      <p className="card-description"> Current Capacity </p>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+25 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(current25)}
                            isValid={capacityvalidator(current25)}
                            value={current25}
                            onChange={(e) => {
                              setcurrent25(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>


                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+2 to +8 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(current2)}
                            isValid={capacityvalidator(current2)}
                            value={current2}
                            onChange={(e) => {
                              setcurrent2(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>


                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -20 C
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(current20)}
                            isValid={capacityvalidator(current20)}
                            value={current20}
                            onChange={(e) => {
                              setcurrent20(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -70 C
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(current70)}
                            isValid={capacityvalidator(current70)}
                            value={current70}
                            onChange={(e) => {
                              setcurrent70(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Dry Store
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(currentdry)}
                            isValid={capacityvalidator(currentdry)}
                            value={currentdry}
                            onChange={(e) => {
                              setcurrentdry(e.target.value);
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
                </div>
              </div>
              
              
            </React.Fragment>
          ) : activeStep === 2 ? (
            <React.Fragment>
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
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
                            isInvalid={!capacityvalidator(planned25)}
                            isValid={capacityvalidator(planned25)}
                            value={planned25}
                            onChange={(e) => {
                              setplanned25(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          (+2 to +8 C) in cm3
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planned2)}
                            isValid={capacityvalidator(planned2)}
                            value={planned2}
                            onChange={(e) => {
                              setplanned2(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -20 C
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planned20)}
                            isValid={capacityvalidator(planned20)}
                            value={planned20}
                            onChange={(e) => {
                              setplanned20(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          -70 C
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planned70)}
                            isValid={capacityvalidator(planned70)}
                            value={planned70}
                            onChange={(e) => {
                              setplanned70(e.target.value);
                            }}
                            type="number"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Dry Store
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            required
                            isInvalid={!capacityvalidator(planneddry)}
                            isValid={capacityvalidator(planneddry)}
                            value={planneddry}
                            onChange={(e) => {
                              setplanneddry(e.target.value);
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
                </div>
              </div>
             
            </React.Fragment>
          ) : (
            "hello"
          )}
        </Box>
      </Form>


    </div>
  );
};

export default Level;
