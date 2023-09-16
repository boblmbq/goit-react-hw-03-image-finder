import { ButtonStyled } from './Button.styled';

const Button = ({ onClick }) => {
  return <ButtonStyled onClick={onClick}>Load More</ButtonStyled>;
};

export default Button;
