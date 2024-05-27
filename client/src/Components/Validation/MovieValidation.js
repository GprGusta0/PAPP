import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  comment: yup
    .string()
    .required("Comentário é obrigatório")
    .max(150, "O comentário deve ter menos de 150 caracteres"),
  rating: yup.number().required("Selecione uma classificação"),
});

const movieValidation = yup.object().shape({
  name: yup
    .string()
    .required("Por favor insira um nome de filme")
    .max(50, "O nome do filme deve ter menos de 50 caracteres"),
  time: yup.number().required("Insira a duração do filme"),
  language: yup.string().required("Insira um idioma do filme"),
  year: yup.number().required("Insira o ano de lançamento"),
  category: yup.string().required("Selecione a categoria do filme"),
  desc: yup
    .string()
    .required("Por favor insira uma descrição do filme")
    .max(500, "A descrição do filme deve ter menos de 500 caracteres"),
});

export { ReviewValidation, movieValidation };
