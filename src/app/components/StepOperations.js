import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import LeftArrowIcon from "../shared/LeftArrowIcon";
import RightArrowIcon from "../shared/RightArrowIcon";
import { useHistory, useParams } from "react-router-dom";
/**
 * @param  {props} props
 * componenet to show next and previous button in each page
 * @returns next and previous bar
 * @example
 * <StepOperations />
 * also you can pass props to this component
 * and save all button in edit pages
 * 
 */
function StepOperations(props) {
  /**
   * @constant {string} activeStep  - active step in page or edit page 
   * @example field specific to cold chain
   * @constant {function} handleBack - function to go to previous page
   * @constant {function} handleNext - function to go to next page
   * @constant {function} handleSave - function to save all data in edit page
   * @constant {integer} stepLength - number of steps in page or edit page
   * @constant {Boolean} isNextDisabled - check if next disabled or not
   * @constant {String} id - id of item in edit page if new item id is "new"
   * @example "new" or "7"
   */
  const {
    activeStep,
    handleBack,
    handleNext,
    stepsLength,
    isNextDisabled,
    id,
  } = props;
  const history = useHistory();
  /**
   * in here we didnt use else cause we need else if in this case
   * and we cannot use else if in return DOM
   * so we use if and return DOM in each if
   * and if all conditions not true we return empty DOM
   * @returns {DOM} next and previous bar
   * @example
   * <StepOperations />
   */
  return (
    <div className="row mt-2">
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {/* we need back button in all steps */}
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
          type="button"
        >
          <LeftArrowIcon sx={{ mr: 2 }} />
          <Trans>Back</Trans>
        </Button>
        <Box sx={{ flex: "0.5 0.5 auto" }} />
        <>
          {/* check if new page and not in last step */}
          {id !== "new" && activeStep !== stepsLength && (
            <>
              <button className="btn btn-primary w-10 ">
                <Trans>Save all</Trans>
              </button>
              <Box sx={{ flex: "0.6 0.5 auto" }} />

              <Button
                disabled={isNextDisabled}
                onClick={handleNext}
                type="button"
                sx={{ mr: 1 }}
              >
                <Trans>Next</Trans>
                <RightArrowIcon />
              </Button>
            </>
          )}
          {/* check if not new and in last page */}
          {id !== "new" && activeStep === stepsLength && (
            <>
              <Box sx={{ flex: "0.48 0.5 auto" }} />

              <button
                className="btn btn-primary w-10 "
                value="saveAll"
                name="saveaLL"
              >
                <Trans>Save all</Trans>
              </button>
            </>
          )}
          {/* check new and not in last page */}
          {id === "new" && activeStep !== stepsLength && (
            <>
              <Box sx={{ flex: "0.6 0.5 auto" }} />

              <Button
                disabled={isNextDisabled}
                onClick={handleNext}
                type="button"
                sx={{ mr: 1 }}
              >
                <Trans>Next</Trans>
                <RightArrowIcon />
              </Button>
            </>
          )}
          {/* check for new and last page  */}
          {id === "new" && activeStep === stepsLength && (
            <>
              <Box sx={{ flex: "0.6 0.5 auto" }} />

              <button className="btn btn-primary w-10 " name="save" value="x">
                <Trans>Save all</Trans>
              </button>
              <button
                className="btn btn-primary w-10 "
                name="saveNew"
                value="y"
              >
                <Trans>SAVE and New</Trans>
              </button>
            </>
          )}
        </>
      </Box>
    </div>
  );
}

export default StepOperations;
