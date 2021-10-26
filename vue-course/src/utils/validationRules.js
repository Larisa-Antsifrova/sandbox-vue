export const isRequired = val => ({
  hasPassed: !!val,
  message: 'Please, fill in this field.',
});

export const charLimit = limit => val => ({
  hasPassed: val.length <= limit,
  message: 'Limit is exceeded.',
});

export const emailValidation = val => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Wrong e-mail format.',
});

export const passwordValidation = val => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: 'Password should contain one symbol and one number.',
});
