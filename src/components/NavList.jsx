import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Box from '@mui/material/Box';

import {LightbulbOutline, NotificationsNoneIcon,BookmarkBorderIcon,ArchiveIcon,DeleteOutlineIcon,SettingsIcon,HelpOutlineIcon} from '@mui/material';


const NavList =() =>{
  const navList =[
    {id: 1, name: 'Notes', icon: <LightbulbOutline/>}
    {id: 2, name: 'Reminder', icon: <NotificationsNoneIcon/>}
    {id: 3, name: 'Create new label', icon: <BookmarkBorderIcon/>}
    {id: 4, name: 'Archive', icon: <ArchiveIcon/>}
    {id: 5, name: 'Trash', icon: <DeleteOutlineIcon/>}
    {id: 6, name: 'Setting', icon: <SettingsIcon/>}
    {id: 7, name: 'Help & Feedback', icon: <HelpOutlineIcon/>}
  ]
}

const NavList = () =>{
  return(
    <List>
      {
      navList.map(list => (
        <ListItem button key={list.id}>
        <listItemIcon>
          {list.icon}
          <ListItemIcon/>
          <ListItemText primary={list.name}/>
          <ListItem/>
      ))
      }
      </List>
  )
}
export default NavList;