import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import styles from "./TextInput.module.css";

type Props = {
  onChange: (newInput: string) => void;
};

const TextInput: FunctionComponent<Props> = function ({ onChange }) {
  return (
    <div id={styles.valueInput}>
      <TextField
        label="Value"
        fullWidth
        autoFocus
        multiline
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
