import { useState } from "react";

import Box from "@mui/material/Box";

import { useStyles, StyledImage, StyledMotion } from "./card-styles";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
    id,
  } = props;

  const classes = useStyles();

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: classes.lgItem,
    medium: classes.mdItem,
    small: classes.smItem,
  };

  // set image path if we have wrong default image props
  const handleOnError = () => {
    console.log("error");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <Box className={classes.container}>
      <StyledMotion className={classMap[size]} whileHover={{ ...scale }}>
        <StyledImage
          src={imgSrc}
          alt="Card image"
          layout="fill"
          onError={handleOnError}
        />
      </StyledMotion>
    </Box>
  );
};

export default Card;
