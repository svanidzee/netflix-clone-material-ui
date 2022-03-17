/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import Image from "next/image";

import { Box, Typography, Button } from "@mui/material";
import { ImageBox, useStyles } from "./styles";

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
            <Button className={classes.playBtn} onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <Typography className={classes.playText} component="span">
                Play
              </Typography>
            </Button>
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
