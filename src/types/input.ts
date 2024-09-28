export interface InputProps {
    id: string;
    name: string;
    type: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }
  