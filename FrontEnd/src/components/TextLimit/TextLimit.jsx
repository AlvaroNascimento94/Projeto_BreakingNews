export function TextLimit(props) {
  const textLimit =
    // eslint-disable-next-line react/prop-types
    props.text?.length > props.limit ? `${props.text.substring(0, props.limit)}...` : props.text;

  return <p> {textLimit}</p>;
}
