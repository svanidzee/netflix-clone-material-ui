/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { styled } from "@mui/material/styles";

const CustomText = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const hello = () => {
  return (
    <div>
      <CustomText>Hello</CustomText>
    </div>
  );
};

export default hello;
