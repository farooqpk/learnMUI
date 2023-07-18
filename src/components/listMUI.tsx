import { MailOutline } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Divider,
} from "@mui/material";

export const ListMUI = () => {
  return (
    <Box width="15%" bgcolor={"grey"}>
      <List>
        <ListItemButton>
          <ListItem sx={{display:'flex',gap:1}}>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailOutline />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="its good item" />
          </ListItem>
        </ListItemButton>

        <Divider/>

        <ListItemButton>
          <ListItem sx={{display:'flex',gap:1}}>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailOutline />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 2" secondary="its good item" />
          </ListItem>
        </ListItemButton>

        <Divider/>

        <ListItemButton>
          <ListItem sx={{display:'flex',gap:1}}>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailOutline />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 3" secondary="its good item" />
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );
};
