import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import "./style.css";
import Form from "./Form";

const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const [check, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth={showForm ? "lg" : "xs"}
        className="form__dialog"
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Terms and Conditions
              <p></p>
              <a href="/learn" className="class__link2">
                Learn More
              </a>
            </div>
            <DialogContent className="class__content">
              <div className="class__checkboxWrapper">
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  I have read and understand the terms and conditions, and I
                  wish to create a classroom.
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Close
              </Button>

              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setShowForm(true)}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CreateClass;
