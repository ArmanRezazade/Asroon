import { useState, useEffect } from "react";
import User from "../models_services/User";
import Grid from "@mui/material/Grid";
import Logo from "../assets/image/Logo.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import UserDataGrid from "../components/UserDataGrid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function IndexPage() {
  let navigate = useNavigate();

  const [dataSource, setDataSource] = useState<User[]>([]);

  const [loadResult, setLoadResult] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);

  const [userId, setUserId] = useState("");

  const getAllUsers = () => {
    setLoadResult(true);
    User.getAllUsers().then((response) => {
      setDataSource(response);
      setLoadResult(false);
    });
  };

  const deleteUser = () => {
    User.deleteUser(userId).then(() => {
      setShowConfirm(false);
      getAllUsers();
    });
  };

  useEffect(() => {
    getAllUsers();
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
        <>
          <Dialog
            open={showConfirm}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                آیا از حذف این ردیف اطمینان دارید ؟
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setShowConfirm(false);
                  setUserId("");
                }}
              >
                خیر
              </Button>
              <Button onClick={deleteUser}>بله</Button>
            </DialogActions>
          </Dialog>
          <Grid xs={4} sm={4} md={4} lg={8} xl={8} item>
            <p>داده ها</p>
          </Grid>
          <Grid xs={4} sm={4} md={4} lg={2} xl={2} item>
            <Button
              variant="outlined"
              className="fullWidth"
              onClick={getAllUsers}
            >
              دریافت اطلاعات از سرور
            </Button>
          </Grid>
          <Grid xs={4} sm={4} md={4} lg={2} xl={2} item>
            <Button
              variant="contained"
              className="fullWidth"
              onClick={() => {
                navigate("/Insert");
              }}
            >
              <AddIcon />
              ساخت اکانت جدید
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="centerAlign"
          >
            <UserDataGrid
              dataSource={dataSource}
              editAction={(id) => {
                navigate(`/Edit?id=${id}`);
              }}
              deleteAction={(id) => {
                setUserId(id);
                setShowConfirm(true);
              }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default IndexPage;
