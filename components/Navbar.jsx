import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthContext'
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function Navbar() {
  const { logout } = useAuth()

  function handleAnchorLogoutClick() {
    logout();
  }

  return (
    <Box>
      <List className={styles.ul}>
        <ListItem className={styles.li} disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem className={styles.li} disablePadding>
          <ListItemButton component="a" href="/classes">
            <ListItemText primary="Turmas" />
          </ListItemButton>
        </ListItem>
        <ListItem className={styles.li} disablePadding>
          <ListItemButton component="a" onClick={handleAnchorLogoutClick}>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
