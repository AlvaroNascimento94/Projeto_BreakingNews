import { ButtonSpace } from './ButtonStyled';
import PropTypes from 'prop-types';

export function Button({ type, text }) {
    return (
        <ButtonSpace type={type}>{text}</ButtonSpace>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};