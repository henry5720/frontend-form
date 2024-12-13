# 資料格式

``` ts
interface Name {
  first: string;
  last: string;
}

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

interface Profile {
  name: Name;
  gender: Gender;
  birth: Date;
}

interface Password {
  source: string;
  confirm: string;
}

interface Login {
  email: string;
  phone: string;
  password: Password;
}

interface UserData {
  profile: Profile;
  login: Login;
}

  const userData={
    profile: {
      name:{
        first: '',
        last: ''
      },
      gender: '',
      birth: ''
    },
    login: {
      email: '',
      phone: '',
      password: {
        source: '',
        confirm: ''
      }
    }
  }
```