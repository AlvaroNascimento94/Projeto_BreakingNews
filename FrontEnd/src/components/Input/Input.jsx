import { set } from "zod";
import { InputSpace, TextArea } from "./InputStyled";
import PropTypes from "prop-types";
import { useState } from "react";

export function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value: initialValue,
  disabled,
}) {
  const [value, setValue] = useState(initialValue);
  let inputProps = {
    type,
    placeholder,
    onChange: (e) => set(e.target.value),
    ...register(name),
    disabled
  };
  if (value) inputProps.value = value;

  return (
    <>
      {isInput ? <InputSpace {...inputProps} /> : <TextArea {...inputProps} />}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  isInput: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool
};
