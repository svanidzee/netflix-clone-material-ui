/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import theme from "../src/theme";

const Style = (props) => (
  <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Roboto Slab";

      background-color: #141414;
      color: white;
      overflow-x: hidden;
    }
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    a {
      color: inherit;
      text-decoration: none;
      outline: 0px;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizelegibility;
      margin: 0;
    }
    h1 {
      font-weight: 800;
    }
    h2 {
      font-weight: 700;
    }
    h3 {
      font-weight: 600;
    }
    button {
      background-image: none;
      font-weight: 600;
      cursor: pointer;
      background-color: transparent;
      text-transform: none;
      margin: 0;
      border: 0px;
      outline: 0px;
    }
  `}</style>
);

export default Style;
