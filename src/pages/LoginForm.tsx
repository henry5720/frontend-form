import { ChangeEvent } from 'react';
import { Grid2 } from '@mui/material/';
import { Login } from '../types/Login';
import { UserTextField } from '../components/UserTextField';

interface LoginFormProps {
  data: Login;
  setData: React.Dispatch<React.SetStateAction<Login>>;
  isValid: any
}

export const LoginForm: React.FC<LoginFormProps> = ({ data, setData, isValid }) => {
  // Handle input change
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={true}
          type={'text'}
          name={'email'}
          label={'Email Address'}
          value={data.email}
          handleChange={handleChangeText}
          error={isValid.emailOrPhone} // Check if validation failed
          helperText={isValid.email ? 'This field is required' : ''}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={false}
          type={'text'}
          name={'phone'}
          label={'Phone Number'}
          value={data.phone}
          handleChange={handleChangeText}
          error={isValid.emailOrPhone} // Check if validation failed
          helperText={isValid.lastName ? 'This field is required' : ''}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={true}
          type={'password'}
          name={'password'}
          label={'Password'}
          value={data.password}
          error={isValid.password}
          helperText=""
          handleChange={handleChangeText}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={true}
          type={'password'}
          name={'confirmPassword'}
          label={'Confirm Password'}
          value={data.confirmPassword}
          error={isValid.password}
          helperText=""
          handleChange={handleChangeText}
        />
      </Grid2>
    </Grid2>
  );
};
