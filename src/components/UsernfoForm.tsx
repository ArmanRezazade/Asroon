import User from "../models_services/User";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

interface IProps {
  user: User;
}

export default function UserInfoForm({ user }: IProps) {
  let navigate = useNavigate();

  const [userModel, setUserModel] = useState<User>(user);

  const changeInputHandle = (event: any) => {
    let userStateModel = Object.assign({}, userModel);

    switch (event.target.id) {
      case "fullName":
        userStateModel.fullName = event.target.value;
        break;

      case "mobile":
        userStateModel.mobile = event.target.value;
        break;

      case "age":
        userStateModel.age = event.target.value;
        break;

      case "email":
        userStateModel.email = event.target.value;
        break;

      default:
        break;
    }

    setUserModel(userStateModel);
  };

  const saveUser = () => {
    User.saveUser(userModel).then(() => {
      navigate("/");
    });
  };

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={4}
      className="autoMargin userInfoCard"
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <h5>فرم زیر را پر کنید</h5>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="userInfoInputs"
      >
        <TextField
          id="fullName"
          label="نام و نام خانوادگی شما"
          className="fullWidth"
          value={userModel.fullName}
          onChange={changeInputHandle}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="userInfoInputs"
      >
        <TextField
          id="mobile"
          label="شماره موبایل"
          className="fullWidth"
          value={userModel.mobile}
          onChange={changeInputHandle}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="userInfoInputs"
      >
        <TextField
          type="number"
          id="age"
          label="سن شما"
          className="fullWidth"
          value={userModel.age || ""}
          onChange={changeInputHandle}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="userInfoInputs"
      >
        <TextField
          type="email"
          id="email"
          label="ایمیل شما"
          className="fullWidth"
          value={userModel.email}
          onChange={changeInputHandle}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="userInfoInputs"
      >
        <Button variant="contained" className="fullWidth" onClick={saveUser}>
          {!!user.id ? <p>ثبت اطلاعات</p> : <p>ساخت اکانت</p>}
        </Button>
      </Grid>
    </Grid>
  );
}
