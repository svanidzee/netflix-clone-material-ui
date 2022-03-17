import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

export const StyledDropdown = styled.div`
  position: absolute;
  margin-left: auto;
  margin-top: 0.5rem /* 8px */;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
  padding-right: 0.5rem;
  background-color: rgb(20, 20, 20);
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  border-radius: 0.25rem /* 4px */;

  border-color: rgba(75, 85, 99, 1);

  box-shadow: var(
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      0 0 #0000
    ),
    var(--ring-shadow, 0 0 #0000),
    var(
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04)
    );
`;

export const useStyles = makeStyles((theme) => ({
  linkName: {
    ...theme.typography.linkName,
    transitionProperty: "background-color, border-color, color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
    display: "block",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  lineWrapper: {
    paddingtop: "0.5rem",
    paddingBottom: "0.5rem",
  },
  navContainer: {
    marginLeft: "57rem",
  },
  usernameBtn: {
    color: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  username: {
    ...theme.typography.username,
  },
  container: {
    color: theme.palette.primary.light,
    position: "fixed",
    top: "0px",
    left: "50px",
    backgroundImage: "linear-gradient(to bottom, var(--gradient-stops))",

    GradientFrom: "rgb(0, 0, 0)",
    GradientStops: "var(--gradient-from), var(--gradient-to, rgba(0, 0, 0, 0))",
    width: "100%",
    zIndex: "50",
  },
  wrapper: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    padding: "1.25rem",
  },
  logoLink: {
    ...theme.typography.logoLink,
    marginBottom: "1rem",
  },
  logoWrapper: {
    color: theme.palette.error.light,
    width: "8rem",
  },
  navItems: {
    ...theme.typography.navItems,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginLeft: "3.5rem",
  },
  navItem: {
    ...theme.typography.navItem,
    cursor: "pointer",
    marginRight: "1.15rem",
  },
  navItem2: {
    cursor: "pointer",
  },
}));
