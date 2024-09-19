import PropTypes from 'prop-types';

export function TextLimit(props) {
  const textLimit = props.text?.length > props.limit ? `${props.text.substring(0, props.limit)}...` : props.text;

  return <p> {textLimit}</p>;
}

TextLimit.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};
