import React from 'react'
import Board from 'react-trello'
import data from '../components/JSON/NFkanban'


export default class App extends React.Component {
  render() {
    return <Board 
    editable
    data={data} 
    style={{
      backgroundColor: '#313131',
      height: "600px",
  }}
    />
  }
}
