import { Country } from './common';

export interface SelectProps {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    className?: string; 
    countries: Country[]
  }