import { styled } from "@mui/styles";

const StatWrapper = styled("div")(
  ({ theme }) => `
    background-color: ${theme.palette.background.paper};
    box-shadow: ${theme.shadows[1]};
    border-radius: ${theme.shape.borderRadius}px;
    padding: ${theme.spacing(2)};
    min-width: 300px;
  `
);

const StatHeader = styled("div")(
  ({ theme }) => `
    color: ${theme.palette.text.secondary};
  `
);

const StyledTrend = styled(TrendingUpIcon)(
  ({ theme }) => `
    color: ${theme.palette.success.dark};
    font-size: 16px;
    vertical-alignment: sub;
  `
);

const styledComponents = () => {
  return (
    <StatWrapper>
      <StatHeader>Sessions</StatHeader>
      <StyledTrend />
    </StatWrapper>
  );
};

export default styledComponents;
