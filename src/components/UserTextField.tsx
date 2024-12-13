import { Box, TextField, Typography } from '@mui/material';

interface UserTextFieldProps {
  type: string;
  name: string;
  value: string | number | Date | null;
  label: string;
  isRequire: boolean;
  error: boolean;
  helperText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const formatValue = (type: string, value: string | number | Date | null) => {
  if (type === 'date') {
    // 檢查 value 是否為 Date 類型
    if (value instanceof Date) {
      return value.toISOString().split('T')[0];
    }
    return ''; // 如果不是 Date，返回空字串
  }
  return value;
};

export const UserTextField: React.FC<UserTextFieldProps> = (
  { type, name, value, isRequire, label, error, helperText, handleChange }
) => {
  const today = new Date().toLocaleDateString('en-CA'); // 獲取今天的日期，格式化為 'yyyy-mm-dd'
  // console.log(new Date().toLocaleString('en-CA'));

  return (
    <Box>
      <Typography
        sx={{ fontSize: '12px', fontWeight: 500, color: '#555' }}
      >{isRequire?label+'*':label}</Typography>
      <TextField
        fullWidth
        type={type}
        name={name}
        value={formatValue(type, value)}
        error={error}
        helperText={helperText}
        onChange={handleChange}
        sx={{
          '& .MuiInputBase-input': {
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
          },
        }}
        inputProps={{
          max: today, // 設置最大日期為今天
        }}
      >
      </TextField>
    </Box>
  );
};
