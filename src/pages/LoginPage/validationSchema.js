import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Email"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(100, "Too Long!")
    .required("Required Password"),
});
