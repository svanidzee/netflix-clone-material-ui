/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

const hello = () => {
  return (
    <div>
      <Typography
        css={css`
          color: red;
        `}
      >
        Hello
      </Typography>{" "}
    </div>
  );
};

export default hello;
