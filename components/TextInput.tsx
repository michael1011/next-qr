import { Input } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

type Props = {
  onChange: (newInput: string) => void;
}

const TextInput: FunctionComponent<Props> = ({ onChange }) => {
  return (
    <div>
      <Input onChange={(event) => {
        onChange(event.target.value);
      }}/>
    </div>
  );
};

export default TextInput;
