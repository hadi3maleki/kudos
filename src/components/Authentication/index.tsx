import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { UseLoginMutation } from "../../services/mutations/useLoginMutation";
import toast from 'react-hot-toast';


const validationSchema = yup.object({
  username: yup.string().required("ایمیل سازمانی خوذ را وارد کنید"),
  password: yup.string().required("رمز عبور خود را وارد کنید"),
});

interface IAuthenticationProps {}
const Authentication: React.FC<IAuthenticationProps> = (): JSX.Element => {
  const loginMutation = UseLoginMutation();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
      loginMutation.mutate(values,{
        onSuccess(){
            alert("ریکوست با موفقیت انجام شد")
        },
        onError(err){
          console.log("*************",err)
          toast("This is an error", {
            duration: 4000, style: {
              background: "red",
              color: "white",
              fontSize: "20px",
              padding: "10px",
              borderRadius: "5px"
            }})
        }
      })

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
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && !!formik.errors.username}
            value={formik.values.username}
            name="username"
            onChange={formik.handleChange}
            size="small"
            label="نام کاربری "
          />
          <TextField
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

export default Authentication;
