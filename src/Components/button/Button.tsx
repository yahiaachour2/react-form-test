import { ButtonProps } from '../../types/button';

export const Button = ({ content, style }: ButtonProps) => {
  return (
    <button className="button" type="submit" style={style}>
      {content}
    </button>
  );
};
