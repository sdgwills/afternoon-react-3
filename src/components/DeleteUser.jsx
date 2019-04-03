import React from 'react';

export default function deleteUser(props) {
  return(
    <button
      onClick={ () => {
        props.deleteUser()
    }}
    
    > Delete </button>
  )
}
