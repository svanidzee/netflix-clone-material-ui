import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

export const ImageBox = styled.div`
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

export const useStyles = makeStyles((theme) => ({
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
    ...theme.typography.firstLetter,
  },
  series: {
    ...theme.typography.series,
  },
  title: {
    ...theme.typography.title,
    maxWidth: "28rem",
  },
  subTitle: {
    ...theme.typography.subTitle,
  },
  playBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  playBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    marginTop: "1.25rem",

    borderRadius: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",

    backgroundColor: "rgb(255, 255, 255)",
    width: "8rem",
    fontWeight: 600,
    cursor: "pointer",
    textTransform: "none",
    border: "0px",
    outline: "0px",
  },
  playText: {
    color: "rgb(31, 41, 55)",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "1.75rem",
    paddingLeft: "0.25rem",
    textAlign: "center",
  },
}));
