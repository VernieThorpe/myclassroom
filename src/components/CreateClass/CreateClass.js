import React from "react";
import { useLocalContext } from "../../context/context";

import "./style.css";

const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  return (
    <>
      {createClassDialog && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </>
  );
};

export default CreateClass;
