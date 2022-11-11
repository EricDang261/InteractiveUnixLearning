import React from 'react'

const PageProgress = (props) => {
    const completion = JSON.parse(localStorage.getItem("completion"));

    // const Parentdiv = {
    //     height: height,
    //     width: '90%',
    //     backgroundColor: 'whitesmoke',
    //     borderRadius: 40,
    //     margin: 50,
    //     marginTop: "5rem"
        
    //   }
      
      const Childdiv = {
        // height: '100%',
        width: `${completion}%`,
        // backgroundColor: "grey",
        // borderRadius:40,
        // textAlign: 'center'
      }
      
      // const progresstext = {
      //   color: 'black',
      //   fontWeight: 900,
      //   lineHeight: 3
      // }

  return (
    <div className={props.outer}>
      <div style={Childdiv} className={props.inner}>
        <span className={props.text}>Module Completion {`${completion}%`}</span>
      </div>
    </div>
  )
}

export default PageProgress