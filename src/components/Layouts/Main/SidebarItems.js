import React from 'react';
import useStyles  from './styles';
import { ListItemIcon, ListItem } from '@material-ui/core';
import SmallText from '../../Typography/SmallText';

export default function SideBar({item}) {
  const classes = useStyles();
  return (
    <ListItem button >
      <ListItemIcon style={{minWidth: '30px'}}> 
        <item.component className={classes.sideItem}/>
      </ListItemIcon>
      <SmallText style={{fontWeight: 600, color: '#66788a'}}>
        {item.title}
      </SmallText>
    </ListItem>
   
  );
}