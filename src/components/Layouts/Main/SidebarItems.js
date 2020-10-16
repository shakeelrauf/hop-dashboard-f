import React from 'react';
import useStyles  from './styles';
import sideBarItems from '../../../Utils/SidebarItems';
import { ListItemIcon, ListItem, List } from '@material-ui/core';
import SmallText from '../../Typography/SmallText';

export default function SideBar() {
  const classes = useStyles();
  return (
    <List style={{width: '100%'}}>
      {sideBarItems.map(item => {
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
      })}
    </List>
  );
}