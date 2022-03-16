/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { css } from "@emotion/react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { unstable_styleFunctionSx } from "@mui/system";

const CustomText = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

// const MyComponent = styled('div')({
//   backgroundColor: 'red',
// });

const CustomizedText = styled(Typography)(
  ({ theme }) => `
  font-size: 12px;
  color: red
`
);

const Div = styled("div")(unstable_styleFunctionSx);

const useStyles = makeStyles({
  root: {
    // backgroundColor: "red",
    // color: "green",
  },
});

const navbar = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {/* <CustomText>Hello</CustomText>
      <Typography
        variant="h1"
        // sx={{ color: "primary.main" }}
        color="error.main"
      >
        Hello
      </Typography> */}
      <Typography
        css={css`
          color: red;
        `}
      >
        Hello
      </Typography>
      <CustomizedText>Hello1212121212</CustomizedText>
      <Button variant="dashed">font-size: 1rem</Button>
      <Button>dfdf</Button>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        hdhdhdhdh
      </Typography>

      {/* Using pseudo selectors */}
      <Box
        sx={{
          ":hover": {
            backgroundColor: "red",
          },
        }}
      >
        sdsdd
      </Box>
      <Box
        sx={[
          { mr: 2, color: "red" },
          (theme) => ({
            "&:hover": {
              color: theme.palette.secondary.main,
            },
          }),
        ]}
      >
        jjjjjjjjjjjjj
      </Box>
      <Box
        sx={(theme) => ({
          //...theme.typography.body,
          color: theme.palette.secondary.main,
        })}
      >
        kkkkkkkkkkkkk
      </Box>

      <Box
        sx={{
          "&:hover": {
            backgroundColor: "secondary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        11111
      </Box>

      <Div sx={{ m: 1, p: 1, border: 1, color: "green" }}>
        Custom component using the system
      </Div>
    </div>
  );
};

export default navbar;
