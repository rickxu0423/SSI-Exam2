import React from 'react';
import Header from './header/Header';
import LeftMenu from './menu/LeftMenu'

import { connect } from 'react-redux';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        console.log(this.props.show);
        return(
            <div>
                <div><Header /></div>
                <div className='layout-container'>
                    { this.props.show ? <LeftMenu /> : null}
                    <div className='content-container'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.header.show,
})


export default connect(mapStateToProps)(Layout);

