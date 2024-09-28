import { InputProps } from '../../types/input';

export const Input = ({
  id,
  name,
  type,
  value,
  label,
  onChange,
  required = false,
  className = '',
  style = {},
}: InputProps) => {
  return (
    <div className={`${className} input-container`} style={style}>
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
      />
    </div>
  );
};
