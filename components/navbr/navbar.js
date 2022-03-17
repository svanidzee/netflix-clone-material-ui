import { useState } from "react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

import { Grid, Box, Link, Button, Typography } from "@mui/material";

import { StyledDropdown, useStyles } from "./styles";

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
            <StyledDropdown>
              <Box>
                <NextLink href="/login">
                  <Link className={classes.linkName}>Sign out</Link>
                </NextLink>
                <Box className={classes.lineWrapper} />
              </Box>
            </StyledDropdown>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default navbar;
