import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { token } from "../theme";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {props.title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[100]}>
        {props?.subtitle}
      </Typography>
    </Box>
  );
};
