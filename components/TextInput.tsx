import styles from '../css/styles.css';
import { TextField } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

type Props = {
  onChange: (newInput: string) => void;
}

const TextInput: FunctionComponent<Props> = ({ onChange }) => {
  return (
    <div id={styles.valueInput}>
      <TextField label={"Value"} fullWidth={true} autoFocus={true} multiline={true} onChange={(event) => {
        onChange(event.target.value);
      }}/>
    </div>
  );
};

export default TextInput;
