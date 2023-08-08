import { Button, styled } from "@mui/material";

export default styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;