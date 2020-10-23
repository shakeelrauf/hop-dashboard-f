import React from 'react';
import useStyles  from '../../../assets/jss/styles';
import { ListItemIcon, ListItem } from '@material-ui/core';
import SmallText from '../../Typography/SmallText';
import { useHistory } from 'react-router-dom';

export default function SideBar({item}) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => { 
    if(item)
      history.push(item.path);
  };
  
  return (
    <ListItem button onClick={handleClick} >
      <ListItemIcon style={{minWidth: '30px'}}> 
        <item.component className={classes.sideItem}/>
      </ListItemIcon>
      <SmallText style={{fontWeight: 600, color: '#66788a'}}>
        {item.title}
      </SmallText>
    </ListItem>
   
  );
}