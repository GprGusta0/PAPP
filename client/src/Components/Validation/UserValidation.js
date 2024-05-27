import * as yup from "yup";

// login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required("O e-mail é obrigatório").trim(),
  password: yup
    .string()
    .required("Senha requerida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter menos de 20 caracteres")
    .matches(/(?=.*[0-9])/, "A senha deve conter um número"),
});

// register validation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required("O e-mail é obrigatório").trim(),
  password: yup
    .string()
    .required("Senha requerida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter menos de 20 caracteres")
    .matches(/(?=.*[0-9])/, "A senha deve conter um número"),
  fullName: yup
    .string()
    .required("O nome completo é obrigatório")
    .max(20, "O nome completo deve ter menos de 20 caracteres")
    .matches(/^[a-zA-Z ]*$/, "O nome completo deve conter apenas letras"),
});

const ProfileValidation = yup.object().shape({
  fullName: yup
    .string()
    .required("O nome completo é obrigatório")
    .max(20, "O nome completo deve ter menos de 20 caracteres")
    .matches(/^[a-zA-Z ]*$/, "O nome completo deve conter apenas letras"),
  email: yup.string().email().required("O e-mail é obrigatório").trim(),
});

const PasswordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Senha requerida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter menos de 20 caracteres")
    .matches(/(?=.*[0-9])/, "A senha deve conter um número"),
  newPassword: yup
    .string()
    .required("Senha requerida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter menos de 20 caracteres")
    .matches(/(?=.*[0-9])/, "A senha deve conter um número"),
  confirmPassword: yup
    .string()
    .required("Senha requerida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter menos de 20 caracteres")
    .matches(/(?=.*[0-9])/, "A senha deve conter um número")
    .oneOf([yup.ref("newPassword"), null], "As senhas devem corresponder"),
});

export {
  LoginValidation,
  RegisterValidation,
  ProfileValidation,
  PasswordValidation,
};
