import { ChangeEvent } from 'react';
import { Grid2, SelectChangeEvent } from '@mui/material/';
import { Profile } from '../types/Profile';
import { Gender } from '../types/Gender';
import { UserTextField } from '../components/UserTextField';
import { UserSelect } from '../components/UserSelect';

interface ProfileFormProps {
  data: Profile;
  setData: React.Dispatch<React.SetStateAction<Profile>>;
  isValid: any
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ data, setData, isValid }) => {
  // Handle input change
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeSelect = (e: SelectChangeEvent<string | number>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value, // 根據 name 更新 profile 中的對應屬性
    }));
  };
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 轉換值為 Date 物件
    const updatedDate = value ? new Date(value) : null; // 如果沒有值，設為 null

    setData((prevData) => ({
      ...prevData,
      [name]: updatedDate, // 更新為 Date 物件
    }));
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={true}
          type={'text'}
          name={'firstName'}
          label={'First Name'}
          value={data.firstName}
          handleChange={handleChangeText}
          error={isValid.firstName.error} // Check if validation failed
          helperText={isValid.firstName.helperText}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={true}
          type={'text'}
          name={'lastName'}
          label={'Last Name'}
          value={data.lastName}
          handleChange={handleChangeText}
          error={isValid.lastName.error} // Check if validation failed
          helperText={isValid.lastName.helperText}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserSelect
          isRequire={false}
          name={'gender'}
          label={'Gender'}
          value={data.gender}
          error={false}
          helperText=""
          options={[
            { key: Gender.Male, label: 'Male' },
            { key: Gender.Female, label: 'Female' },
          ]}
          handleChange={handleChangeSelect}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <UserTextField
          isRequire={false}
          type={'date'}
          name={'birth'}
          label={'Date of Birth'}
          value={data.birth}
          error={isValid.birth.error}
          helperText={isValid.birth.helperText}
          handleChange={handleChangeDate}
        />
      </Grid2>
    </Grid2>
  );
};
