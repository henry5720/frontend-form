export const validateRequire = (text: string): { error: boolean; helperText: string } => {
  const isVaild=text ? false : true;
  // console.log({text, isVaild});
  return {
    error: isVaild,
    helperText: isVaild ? '' : 'This field is required'
  };
}

export const validateBirthDate = (birth: Date | null): { error: boolean; helperText: string } => {
  if (!birth) {
    return {
      error: false,
      helperText: ''
    }
  };
  const today = new Date().toLocaleDateString('en-CA');
  // console.log(today);
  const isVaild=birth <= new Date(today) ? false : true;
  return {
    error: isVaild,
    helperText: isVaild ? 'Invalid Date of Birth' : ''
  };
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phonePattern = /^\+852\d{8}$/;
  return phonePattern.test(phone);
};

export const validateEmailOrPhone = (email: string, phone: string): { error: boolean; helperText: string } => {
  if (email) {
    return {
      error: false,
      helperText: ''
    };
  }
  if (phone) {
    const isValidPhone = validatePhone(phone);
    return {
      error: !isValidPhone,
      helperText: isValidPhone ? '' : 'Invalid Phone Number (ex. +85212345678)'
    };
  }
  return {
    error: true,
    helperText: 'Email or a Phone Number is required'
  };
};

export const validatePassword = (target: string, compare: string):  { error: boolean; helperText: string } => {
  // 如果任一密碼為空，返回 false
  if (!target || !compare) {
    return {
      error: true,
      helperText: 'Password Or Confirm Password is required'
    };
  }
  // 如果兩個密碼相等，返回 true
  if (target !== compare) {
    return {
      error: true,
      helperText: 'Invalid Password Or Confirm Password'
    };
  }
  return {
    error: false,
    helperText: ''
  };;
};

export const validateStrength = (password: string): boolean => password.length > 6;
