import React from 'react';

const style = {
  color: 'red'
}

function Receiver(props) {
    return (
        <div style={style}>
        {props.content}
      </div>
    )
}

export default Receiver;