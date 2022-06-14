import Grid from "@mui/material/Grid";
import User from "../models_services/User";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  dataSource: User[];
  editAction: (id: string) => any;
  deleteAction: (id: string) => any;
}

const columns = [
  { field: "fullName", name: "نام و نام خانوادگی" },
  { field: "mobile", name: "موبایل" },
  { field: "age", name: "سن" },
  { field: "email", name: "ایمیل" },
];

export default function UserInfoForm({
  dataSource,
  editAction,
  deleteAction,
}: IProps) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      container
      style={{ border: "1px solid lightgrey" }}
    >
      {columns.map((column) => {
        return (
          <Grid
            key={column.field}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            <p>{column.name}</p>
          </Grid>
        );
      })}
      <Grid
        key="editAction"
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        style={{ borderBottom: "1px solid lightgrey" }}
      ></Grid>
      <Grid
        key="deleteAction"
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        style={{ borderBottom: "1px solid lightgrey" }}
      ></Grid>
      {dataSource.map((user) => {
        return (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            container
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            <Grid key={user.fullName} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p>{user.fullName}</p>
            </Grid>
            <Grid key={user.mobile} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p>{user.mobile}</p>
            </Grid>
            <Grid key={user.age} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p>{user.age}</p>
            </Grid>
            <Grid key={user.email} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p>{user.email}</p>
            </Grid>
            <Grid
              key={`Edit${user.id}`}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              className="centerAlign"
            >
              <Button
                variant="contained"
                onClick={() => {
                  editAction(user.id);
                }}
              >
                <EditIcon />
              </Button>
            </Grid>
            <Grid
              key={`Delete${user.id}`}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              className="centerAlign"
            >
              <Button variant="contained">
                <DeleteIcon
                  onClick={() => {
                    deleteAction(user.id);
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
