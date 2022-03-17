import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    color: "rgb(55, 65, 81)",
    backgroundColor: "rgb(20, 20, 20)",
    paddingLeft: "4.2rem",
    paddingRight: "1rem",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: "2rem",
  },
  cardWrapper: {
    display: "flex",
    paddingTop: "1.7rem",
    paddingBottom: "1.5rem",
    marginTop: "1.5rem",
    marginRight: "0.75rem",
    overflowX: "scroll",
    overflowY: "hidden",
  },
}));
