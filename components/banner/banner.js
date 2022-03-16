/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

const ImageBox = styled.div`
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

const StyledButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding-left: 1.25rem; 
padding-right: 1.25rem;
margin-top: 1.25rem; 

border-radius: 0.5rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;

background-color: "rgb(255, 255, 255)"
width: 8rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: none;
  border: 0px;
  outline: 0px;
`;

const StyledText = styled.span`
  color: rgb(31, 41, 55);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.75rem;
  padding-left: 0.25rem;
  text-align: center;
`;

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "80vh",
    position: "relative",
  },
  leftWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    height: "100%",
    flexDirection: "column",
    marginTop: "6rem",
  },
  firstLetter: {
    fontSize: "3.75rem",
    lineHeight: 1,
    color: "rgb(220, 38, 38)",
    fontWeight: 800,
    fontFamily: "Roboto Slab",
  },
  series: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(156, 163, 175)",
    alignSelf: "center",
    fontFamily: "Roboto Slab",
  },
  title: {
    fontSize: "60px",
    lineHeight: "60px",
    fontWeight: 800,
    color: "rgba(255, 255, 255, 1)",
    WebkitTextStroke: "2px rgb(0, 0, 0)",
    fontFamily: "Roboto Slab",
    maxWidth: "28rem",
  },
  subTitle: {
    fontSize: "24px",
    lineHeight: "32px",
    color: "rgba(255, 255, 255, 1)",
    WebkitTextStroke: "1px gray",
    fontFamily: "Roboto Slab",
    fontWeight: 600,
  },
  playBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});

const Banner = (props) => {
  const classes = useStyles();

  const { title, subTitle, imgUrl, videoId } = props;

  const handleOnPlay = () => {
    console.log("play");
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.leftWrapper}>
        <Box className={classes.left}>
          <Box display="flex">
            <Typography className={classes.firstLetter} variant="body1">
              N
            </Typography>
            <Typography className={classes.series} variant="body1">
              S E R I E S
            </Typography>
          </Box>
          <Typography className={classes.title} variant="h3">
            {title}
          </Typography>
          <Typography className={classes.subTitle} variant="h3">
            {subTitle}
          </Typography>

          <Box className={classes.playBtnWrapper}>
            <StyledButton onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <StyledText>Play</StyledText>
            </StyledButton>
          </Box>
        </Box>
      </Box>
      <ImageBox
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></ImageBox>
    </Box>
  );
};

export default Banner;
