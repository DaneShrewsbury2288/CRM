import React from 'react';

const style = {
  color: 'blue'
}

function Sender(props) {
    return (
        <div style={style}>
        {props.content}
      </div>
    )
}

export default Sender;