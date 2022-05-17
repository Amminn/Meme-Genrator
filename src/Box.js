import React from "react"

export default function Box(props) {

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div 
      style={styles}
      key={props.id}
      onClick={()=>props.handleClick(props.id)}
    >{props.id}</div>
  )

}















/* ====== setting state on each box to make it toggle the background ========= /*

/* import React from "react"

// export default function Box(props) {

//     const [result, setResult] = React.useState(props.on)

//     function toggle() {
//         setResult(prevValue => !prevValue)
//     }

//     const styles = {
//         backgroundColor: result ? "#222222" : "transparent"
//     }

//     return (
//         <div style={styles} key={props.key} onClick={toggle} >{props.id}</div>
//     )
// } */