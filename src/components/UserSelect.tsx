import { Box, Select, MenuItem, Typography, FormHelperText, FormControl, SelectChangeEvent } from '@mui/material';

interface UserSelectProps {
  name: string;
  value: string | number;
  label: string;
  isRequire: boolean;
  error: boolean;
  helperText: string;
  options: { key: string | number; label: string }[];
  handleChange: (e: SelectChangeEvent<string | number>) => void;
}

export const UserSelect: React.FC<UserSelectProps> = ({
  name,
  value,
  isRequire,
  label,
  error,
  helperText,
  options,
  handleChange,
}) => {
  return (
    <Box>
      <FormControl fullWidth error={error}>
        <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#555' }}>
          {isRequire ? label + '*' : label}
        </Typography>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          displayEmpty
          sx={{
            '& .MuiSelect-select': {
              fontSize: '14px',
              fontWeight: 500,
              color: '#333',
            },
          }}
        >
          <MenuItem value="" disabled>
            Select {label}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};
