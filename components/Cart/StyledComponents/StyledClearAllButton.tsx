import { Button, styled } from "@mui/material";

export default styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: none;

  padding: 0;
`;