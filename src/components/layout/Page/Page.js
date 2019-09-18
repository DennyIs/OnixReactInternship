import React, { Component } from 'react';
import PageView from './PageView';

class Page extends Component {
    render() {
        return (
            <PageView page={ this.props.children }/>
        )
    }
}

export default Page;