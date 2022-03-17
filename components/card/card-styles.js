import styled from "@emotion/styled";
import Image from "next/image";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: "0.25rem",
    cursor: "pointer",
  },
  lgItem: {
    position: "relative",
    width: "218px",
    minWidth: "218px",
    height: "434px",
    minHeight: "434px",
  },
  mdItem: {
    position: "relative",
    width: "158px",
    minWidth: "158px",
    height: "280px",
    minHeight: "280px",
  },
  smItem: {
    position: "relative",
    width: "300px",
    minWidth: "300px",
    height: "170px",
    minHeight: "170px",
  },
  imgMotionWrapper: {
    position: "relative",
    display: "inline-block",
  },
}));

export const StyledImage = styled(Image)`
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  border-radius: 0.375rem /* 6px */;
  object-fit: cover;

  object-position: center;
  display: block;

  max-width: 100%;
`;

export const StyledMotion = styled(motion.div)`
  position: relative;
  display: inline-block;
`;
