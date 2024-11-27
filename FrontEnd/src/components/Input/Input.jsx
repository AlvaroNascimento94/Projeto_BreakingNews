import { InputSpace, TextArea } from "./InputStyled";
import PropTypes from "prop-types";

export function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value,
}) {
  let inputProps = {
    type,
    placeholder,
    ...register(name),
  };
  if (value)inputProps.value = value;
  
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
};
