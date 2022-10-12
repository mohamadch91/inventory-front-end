import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import LeftArrowIcon from "../shared/LeftArrowIcon";
import RightArrowIcon from "../shared/RightArrowIcon";
import { useHistory, useParams } from "react-router-dom";

function StepOperations(props) {
  const {
    activeStep,
    handleBack,
    handleNext,
    stepsLength,
    isNextDisabled,
    id,
  } = props;
  const history = useHistory();

  return (
    <div className="row mt-2">
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
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
