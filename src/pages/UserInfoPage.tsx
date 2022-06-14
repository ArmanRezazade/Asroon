import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Logo from "../assets/image/Logo.jpg";
import User from "../models_services/User";
import CircularProgress from "@mui/material/CircularProgress";
import UserInfoForm from "../components/UsernfoForm";

function UserInfoPage() {
  const location = useLocation();

  const [user, setUser] = useState<User>(new User());

  const [loadResult, setLoadResult] = useState(true);

  useEffect(() => {
    const userId = new URLSearchParams(location.search).get("id");

    if (userId) {
      User.getUser(userId).then((response) => {
        setUser(response);
        setLoadResult(false);
      });
    } else {
      setLoadResult(false);
    }
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="centerAlign"
      >
        <img src={Logo} alt="logo" loading="lazy" />
      </Grid>
      {loadResult ? (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="centerAlign"
        >
          <CircularProgress color="error" />
        </Grid>
      ) : (
        <UserInfoForm user={user} />
      )}
    </Grid>
  );
}

export default UserInfoPage;
