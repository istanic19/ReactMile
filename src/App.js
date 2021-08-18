//import React from 'react'
import Header from './komponente/Header'

const App=() =>{

  const name = 'Blahmudin'
  const x = true

  return (
    <div className='Kontenjer'>

      <Header title='helloheader' />
     <h1>Hello From react</h1>
     <h2>Hello {name} {x ? 'mrš u pi**u materinu' : 'kraljino' } </h2>
 
    </div>
    
  );
}

const headingStyle = {
  color: 'white', backgroundColor:'black'
}
    //<h1 style={headingStyle}>Hello From react</h1>  za css u javi
     //<h2 style={headingStyle}>Hello {name} {x ? 'mrš u pi**u materinu' : 'kraljino' } </h2>

//class App2 extends React.Component {
  //render() {
    //return <h1>Alo sta ima kralju?!?!</h1>
  //}
//}

export default App;
//export default App2;
