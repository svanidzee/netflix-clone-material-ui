/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import Image from "next/image";
// import styles from "./banner.module.css";

import { css } from "@emotion/react";
// import { styled } from "@mui/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

// const MyComponent = styled("div")({
//   position: "absolute",
//   width: "100%",
//   height: "100%",
//   bottom: "0px",
//   twGradientStops:
//     "var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))",
//   backgroundImage: "linear-gradient(to top, var(--tw-gradient-stops))",
//   twGradienFrom: "rgb(0, 0, 0)",
//   backgroundSize: "cover",
//   backgroundPosition: "50% 50%",
// });

const ImageBox = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 0, 0, 0));
  background-image: linear-gradient(to top, var(--tw-gradient-stops));

  --tw-gradient-from: var(--black);

  background-size: cover;
  background-position: "50% 50%";
`;

const useStyles = makeStyles({
  // bannerImg: {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   bottom: "0px",
  //   twGradientStops:
  //     "var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))",
  //   backgroundImage: "linear-gradient(to top, var(--tw-gradient-stops))",
  //   twGradienFrom: "rgb(0, 0, 0)",
  //   backgroundSize: "cover",
  //   backgroundPosition: "50% 50%",
  // },
});

const Banner = (props) => {
  const classes = useStyles();

  const { title, subTitle, imgUrl, videoId } = props;

  const handleOnPlay = () => {
    console.log("play");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "10",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            height: "100%",
            flexDirection: "column",
            marginTop: "6rem",
          }}
        >
          <Box display="flex">
            <Typography
              sx={{
                fontSize: "3.75rem",
                lineHeight: 1,
                color: "rgb(220, 38, 38)",
                fontWeight: 800,
              }}
              variant="body1"
            >
              N
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "rgb(156, 163, 175)",
                alignSelf: "center",
              }}
              variant="body1"
            >
              S E R I E S
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: 800,
              color: "rgba(255, 255, 255, 1)",
              WebkitTextStroke: "2px rgb(0, 0, 0)",
            }}
            variant="h3"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              color: "rgba(255, 255, 255, 1)",
              WebkitTextStroke: "1px gray",
            }}
            variant="h3"
          >
            {subTitle}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
                marginTop: "1.25rem",

                borderRadius: "0.5rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",

                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "8rem",
              }}
              onClick={handleOnPlay}
            >
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <span
                style={{
                  color: "rgb(31, 41, 55)",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  paddingLeft: "0.25rem",
                  textAlign: "center",
                }}
              >
                Play
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
      <ImageBox
        // className={classes.bannerImg}
        // className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></ImageBox>
    </Box>
  );
};

export default Banner;
