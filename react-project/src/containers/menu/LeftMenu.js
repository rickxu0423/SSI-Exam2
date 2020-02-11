import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      //maxWidth: 220,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));
  
export default function LeftMenu(props) {
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    function createComponentList() {
        let cName = ["Avatar", "Button", "Chips", "Notification", "Table"]
        let routes = ['/avatar', '/button', '/chips', '/notification', '/table']
        let cList = [];
        for(let i = 0; i < cName.length; i++) {
            cList.push(
                <ListItem button component={Link} to={routes[i]} className={classes.nested} key={i}>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={cName[i]} />
                </ListItem>)
        };
        
        return cList;
    }

    function createChartList() {
        let cName = ["Area", "Pie", "Scatterplot"]
        let routes = ['area', 'pie', 'scatterplot']
        let cList = [];
        for(let i = 0; i < cName.length; i++) {
            cList.push(
                <ListItem button component={Link} to={routes[i]} className={classes.nested} key={i}>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={cName[i]} />
                </ListItem>)
        };
        
        return cList;
    }

    return (
        <div className='left-menu-container'>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            >
                <ListItem button component={Link} to='/home' >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" /> 
                </ListItem>
                <ListItem button component={Link} to='/color' >
                    <ListItemIcon>
                    <ColorLensIcon />
                    </ListItemIcon>
                    <ListItemText primary="Colors" />
                </ListItem>
                <ListItem button onClick={handleClick1}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Components" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {createComponentList()}
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick2}>
                    <ListItemIcon>
                    <EqualizerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Charts" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {createChartList()}
                    </List>
                </Collapse>
                <ListItem button component={Link} to='/iconography' >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Iconography" /> 
                </ListItem>
            </List>
        </div>
    );
};

