import React from 'react'
import Input from '../atoms/input';
import Label from '../atoms/Label';

const InputField = ({ lable, inputType, placeHolder }) => {
  return (
    <>
      <div>
        <Label lable={lable}></Label>
        <Input inputType={inputType} placeHolder={placeHolder}></Input>
      </div>
    </>
  );
};

export default InputField