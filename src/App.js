import React from "react"
import Nav from "./component/Nav"
import Meme from "./component/Meme"
// import Box from "./Box"

// import boxData from "./boxData"

export default function App() {

  
  
  // const [result, setResult] = React.useState(boxData)
/* === smaller way of doing stuff === */ 

  // function toggle(id) {
  //   setResult(prevValue => {
  //     return prevValue.map(item => {
  //       return item.id == id ? {...item, on: !item.on} : item
  //     })
  //   })
  // }

  // function toggle(id) {
  //   setResult(prevValue => {
  //     return prevValue.map(item => {
  //       return item.id = id ? {...item, on: !item.on} : item
  //     })
  //   })
  // }

  // function toggle(id) {
  //   const newSquares = []
  //   setResult(prevValue => {
  //     for (let i = 0; i < prevValue.length; i++) {
  //       if (i == id - 1) {
  //         const currentSquare = {...prevValue[i], on: !prevValue[i].on} 
  //           newSquares.push(currentSquare)
  //         } else {
  //           newSquares.push(prevValue[i])
  //       }
  //     }
  //     return newSquares
  //   })

  // }

  /*function toggle(id) {
    let newSquares = []
    setResult(prevValue => {
      for (let i = 0; i < prevValue.length; i++) {
        if (i == id - 1) {
          let currentSquare = {...prevValue[i], on: !prevValue[i].on}
          newSquares.push(currentSquare)
        } else {
          newSquares.push(prevValue[i])
        }
      }
      return newSquares
    })
  }*/

  // const squares = result.map(item => {
  //   return (
  //     <Box 
  //       id={item.id}
  //       key={item.id}
  //       handleClick={toggle}
  //       on={item.on}
  //     />
  //   )
  // })

  // console.log(squares)

  return (
    <div className="app">
      <Nav />
       <Meme /> 
       <div className="box">
        {/* {squares} */}
      </div> 
    </div>
  )
}