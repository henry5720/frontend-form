import { useEffect, useState } from 'react';
import { Grid2, Typography, Button } from '@mui/material/';
import { Gender } from '../types/Gender';
import { Login } from '../types/Login';
import { Profile } from '../types/Profile';
import { ProfileForm } from "./ProfileForm";
import { LoginForm } from "./LoginForm";
import { validateRequire, validateBirthDate, validateEmailOrPhone, validatePassword } from '../services/userDataService';

const initProfile: Profile = {
  firstName: '',
  lastName: '',
  gender: Gender.Male,
  birth: null,
}
const initLogin: Login = {
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
}

// 驗證函數
const validateProfile = (profile: Profile) => {
  return {
    firstName: !validateRequire(profile.firstName),
    lastName: !validateRequire(profile.lastName),
    gender: false,
    birth: !validateBirthDate(profile.birth),
  };
};
const validateLogin = (login: Login) => {
  return {
    emailOrPhone: !validateEmailOrPhone(login.email, login.phone),
    password: !validatePassword(login.password, login.confirmPassword),
  };
};
const UserDataForm: React.FC = () => {
  const [isInit, setIsInit] = useState(false);
  const [profile, setProfile] = useState<Profile>(initProfile);
  const [login, setLogin] = useState<Login>(initLogin);
  const [isValidProfile, setIsValidProfile] = useState({
    firstName: false,
    lastName: false,
    gender: false,
    birth: false,
  });
  const [isValidLogin, setIsValidLogin] = useState({
    emailOrPhone: false,
    password: false,
  });

  useEffect(() => { setIsInit(true) }, [])

  useEffect(() => {
    if (isInit) {
      const isValidProfile = validateProfile(profile);
      setIsValidProfile(isValidProfile)
      }
  }, [profile])

  useEffect(() => {
    if (isInit) {
      const isValidLogin = validateLogin(login);
      setIsValidLogin(isValidLogin)
      }
  }, [login])

  const handleClick = () => {
    const isValidProfile = validateProfile(profile);
    setIsValidProfile(isValidProfile)
    const isValidLogin = validateLogin(login);
    setIsValidLogin(isValidLogin)
  }

  return (
    <Grid2 container sx={{ padding: '20px' }}>
      <Grid2 size={12} mb={'24px'} sx={{ borderBottom: '2px solid #FFD000' }}>
        <Typography
          sx={{ fontSize: '16px', fontWeight: 600, color: '#555' }}
        >
          User Data
        </Typography>
      </Grid2>
      <Grid2 size={12} mb={'20px'}>
        <Typography
          sx={{ mb: '20px', fontSize: '14px', fontWeight: 700, color: '#555' }}
        >
          Profile Information
        </Typography>
        <ProfileForm data={profile} setData={setProfile} isValid={isValidProfile}></ProfileForm>
      </Grid2>
      <Grid2 size={12}>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 700, color: '#555' }}
        >
          Login Information
        </Typography>
        <Typography
          sx={{ mb: '20px', fontSize: '12px', fontWeight: 500, color: '#555' }}
        >
          Choose one login method to input – either email address or phone number
        </Typography>
        <LoginForm data={login} setData={setLogin} isValid={isValidLogin}></LoginForm>
      </Grid2>
      <Grid2 mt={'24px'}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            width: '89px',
            height: '44px',
            backgroundColor: '#FFD000',
            color: '#000',
            borderRadius: '8px',
            padding: '7px 10px',
            fontSize: '20px',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#FFC107',
            },
          }}
        >
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default UserDataForm;
