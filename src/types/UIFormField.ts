import { Gender } from "./Gender";

export interface UIFormField {
  info: {
    name: string;
    label: string;
    type: 'text' | 'select' | 'date' | 'password';
    options?: { key: Gender; label: string }[];
  },
  value: string | Date | null;
  isRequire?: boolean;
  isVaild: boolean;
}
