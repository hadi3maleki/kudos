import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().required("ایمیل سازمانی خوذ را وارد کنید"),
  password: yup.string().required("رمز عبور خود را وارد کنید"),
});

interface IAuthenticationPageProps {}
const AuthenticationPage: React.FC<
  IAuthenticationPageProps
> = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values)
    },
  });
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
      spacing={2}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h6" fontWeight="bold">
        ورود به تشکرات
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <TextField
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && !!formik.errors.email}
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            size="small"
            label="ایمیل سازمانی"
          />
          <TextField 
          autoComplete="off"
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && !!formik.errors.password}
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            size="small"
            label="کلمه عبور"
            type="password"
          />
        </Stack>
        <Button variant="contained" type="submit">
          ورود
        </Button>
      </Stack>
    </Stack>
  );
};

export default AuthenticationPage;
