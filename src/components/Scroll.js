import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY: 'scroll',height: '500px', border: '0.5px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;