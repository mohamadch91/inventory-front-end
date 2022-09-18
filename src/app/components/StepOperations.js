import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import LeftArrowIcon from "../shared/LeftArrowIcon";
import RightArrowIcon from "../shared/RightArrowIcon";

function StepOperations(props) {
  const {
    activeStep,
    handleBack,
    handleNext,
    stepsLength,
    isNextDisabled,
    id,
  } = props;
  return (
    <div className="row mt-2">
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
          type="button"
        >
          <LeftArrowIcon sx={{ mr: 2 }} />
          <Trans>Back</Trans>
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <>
          {id !== "new" && (
            <>
              <button className="btn btn-primary w-25 ">SAVE ALL</button>
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
          {id === "new" && activeStep !== stepsLength && (
            <Button
              disabled={isNextDisabled}
              onClick={handleNext}
              type="button"
              sx={{ mr: 1 }}
            >
              <Trans>Next</Trans>
              <RightArrowIcon />
            </Button>
          )}
          {id === "new" && activeStep === stepsLength && (
            <button className="btn btn-primary w-25 ">SAVE ALL</button>
          )}
        </>
      </Box>
    </div>
  );
}

export default StepOperations;
