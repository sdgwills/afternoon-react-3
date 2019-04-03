import React from 'react';

export default function NextUser(props) {
  return(
    <button
      onClick={ () => {
          props.nextUser()
      }}
    > 
      Next
     </button>
  )
}
