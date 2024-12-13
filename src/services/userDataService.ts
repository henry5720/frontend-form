export const validateRequire = (text: string): boolean => text ? true : false;

export const validateBirthDate = (birth: Date | null): boolean => {
  if (!birth) {
    return true
  }
  const today = new Date();
  return birth < today ? true : false;
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phonePattern = /^\+852\d{8}$/;
  return phonePattern.test(phone);
};

export const validateEmailOrPhone = (email: string, phone: string): boolean => {
  if (email) {
    return true
  }
  if (phone) {
    return validatePhone(phone)
  }
  return false
}

export const validatePassword = (target: string, compare: string): boolean => {
  // 如果任一密碼為空，返回 false
  if (!target || !compare) {
    return false;
  }
  // 如果兩個密碼相等，返回 true
  return target === compare;
};

export const validateStrength = (password: string): boolean => password.length > 6;
