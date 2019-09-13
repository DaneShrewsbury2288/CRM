import React from 'react';

const styles = {
  line: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  message: {
    boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',
    paddingLeft: '.75rem',
    paddingRight: '.75rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    marginRight: '.75rem',
    marginTop: '.5rem',
    borderRadius: '.5rem',
    backgroundColor: '#c6f6d5',
    fontSize: '.8rem'
  },
  placeholder: {
    flexShrink: 0,
    width: '30%'
  }
}

function Sender(props) {
  return (
    <div style={styles.line}>
      <div style={styles.message}>
        {props.content}
      </div>
      <div style={styles.placeholder}></div>
    </div>
  )
}

export default Sender;