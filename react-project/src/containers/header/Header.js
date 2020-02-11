import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';
import { showLeftMenu, closeLeftMenu } from '../../actions/header/headerActions';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        if (this.props.show) this.props.closeLeftMenu();
        else this.props.showLeftMenu();
    };
    
    render() {
        
        return (
            <div className='root'>
                <AppBar className='app-bar' position="static">
                    <Toolbar className='tool-bar'>
                        <IconButton onClick={this.handleClick} edge="start" className='menu-button' color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className='title'>
                            React Project
                        </Typography>
                        <Button className='login' color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    show: state.header.show,
})


export default connect(mapStateToProps, { showLeftMenu, closeLeftMenu })(Header);
