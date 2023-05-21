import React, { useContext } from "react";
import { ColorModeContext, token } from "../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";

export const TopBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorsMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        borderRadius="3px"
        sx={{ backgroundColor: colors.primary[400], marginLeft: "20px" }}
      >
        <InputBase placeholder="Search" sx={{ ml: 3, flex: 1 }} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined sx={{ color: colors.primary[100] }} />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorsMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};
