import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { token } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Item } from "./Item";

export const SideBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [isCollapse, setIsCollapse] = useState(false);
  const [selected, setSelected] = useState("Dashbord");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: "trasparent  !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapse}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapse(!isCollapse)}
            icon={isCollapse ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapse && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h5"
                  color={
                    theme.palette.mode === "dark" ? colors.grey[100] : "white"
                  }
                >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapse(!isCollapse)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapse && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                  alt="user profile"
                  width={"80"}
                  height={"80px"}
                  src="https://avatars.githubusercontent.com/u/62210936?s=400&u=1d1d6b35732fefd1f1731c399d094aa130485089&v=4"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={
                    theme.palette.mode === "dark" ? colors.grey[100] : "white"
                  }
                  fontWeight="bold"
                  fontSize={"20px"}
                  sx={{ margin: "5px 0 10px 0" }}
                >
                  Nirintsoa
                </Typography>
                <Typography variant="h3" color={colors.greenAccent[500]}>
                  Sindwai
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapse ? undefined : "10%"}>
            <Item
              title="Dashbord"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={
                theme.palette.mode === "dark"
                  ? colors.grey[300]
                  : colors.redAccent[900]
              }
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={
                theme.palette.mode === "dark"
                  ? colors.grey[300]
                  : colors.redAccent[900]
              }
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={
                theme.palette.mode === "dark"
                  ? colors.grey[300]
                  : colors.redAccent[900]
              }
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
