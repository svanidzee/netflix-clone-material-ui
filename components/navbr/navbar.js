import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navDropdown: {
    position: "absolute",
    marginLeft: "auto",
    marginTop: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingRight: "0.5rem",
    backgroundColor: "rgb(20, 20, 20)",
    borderWidth: "1px",
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "0.25rem",

    borderColor: "rgba(75, 85, 99, 1)",

    // boxShadow: var(--shadow30, 0 0 #0000), var(--ring-shadow, 0 0 #0000),
    //   var(--shadow30);

    // boxShadow: "(0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 #0000), var(--ring-shadow, 0 0 #0000), (0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))
  },
  linkName: {
    transitionProperty: "background-color, border-color, color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
    display: "block",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    color: "rgba(255, 255, 255, 1)",

    fontSize: "1rem",
    lineHeight: "1.25rem",
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

  //
  navContainer: {
    // display: "flex",
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    marginLeft: "57rem",
  },
  usernameBtn: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "transparent",
  },
  username: {
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    lineHeight: "20px",
  },

  //
  container: {
    color: "rgba(255, 255, 255, 1)",
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
    // display: "flex",
    padding: "1.25rem",
  },
  logoLink: {
    // display: "flex",
    // justifyContent: "start",
    fontWeight: 500,
    fontSize: "1rem",
    // alignItems: "center",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: "1rem",
    // marginLeft: "-5rem",
  },
  logoWrapper: {
    color: "rgb(220, 38, 38)",
    width: "8rem",
  },

  //
  navItems: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginLeft: "3.5rem",
    fontSize: "0.875rem",
    fontSize: "1rem",

    lineHeight: "1.25rem",
    listStyle: "none",
  },
  navItem: {
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "1.15rem",
  },
  navItem2: {
    cursor: "pointer",
  },
});

const navbar = (props) => {
  const classes = useStyles();

  const [showDropdown, setShowDropdown] = useState(false);

  const { username } = props;
  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/my-list");
  };

  const handleShopDropdown = (e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };

  return (
    <Box as="header" className={classes.container}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        className={classes.wrapper}
      >
        {/*  */}
        <Grid item>
          <Link className={classes.logoLink} href="/">
            <Box className={classes.logoWrapper}>
              <Image
                src={"/static/netflix.svg"}
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </Box>
          </Link>
        </Grid>

        {/*  */}
        <Grid item>
          <ul className={classes.navItems}>
            <li className={classes.navItem} onClick={handleOnClickHome}>
              Home
            </li>
            <li className={classes.navItem2} onClick={handleOnClickMyList}>
              My List
            </li>
          </ul>
        </Grid>

        {/*  */}
        <Grid item as="nav" className={classes.navContainer}>
          <Button
            variant="text"
            className={classes.usernameBtn}
            onClick={handleShopDropdown}
          >
            <Typography className={classes.username}>{username}</Typography>

            <Image
              src={"/static/expand_more.svg"}
              alt="Expand dropdown"
              width="24px"
              height="24px"
            />
          </Button>

          {showDropdown && (
            <Box className={classes.navDropdown}>
              <Box>
                <NextLink href="/login">
                  <Link className={classes.linkName}>Sign out</Link>
                </NextLink>
                <Box className={classes.lineWrapper} />
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default navbar;
