import Card from "../card/card";

import { Box, Typography } from "@mui/material";

import { useStyles } from "./section-styles";

const SectionCard = (props) => {
  const { title, videos, size } = props;

  const classes = useStyles();

  return (
    <Box as="section" className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.cardWrapper}>
        {videos.map((video, idx) => {
          return <Card id={idx} imgUrl={video.imgUrl} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default SectionCard;
