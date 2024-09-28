import { SelectProps } from '../../types/select';

export const Select = ({
  id,
  name,
  value,
  onChange,
  required = false,
  countries
}: SelectProps) => {

  return (
    <div className="input-container">
      <label >
        Country {required && '*'}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="select" 
        >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};



