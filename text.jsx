import React from 'react';
import ddd from './ddd.png';
import Text2 from './text2.jsx';

export default class Text extends React.Component {
    state = {
        mmm: 'mmm'
    }
    render() {
        return <>
            <Text2 />
            <img src={ddd} />
            sss
        </>
    }
}