import React from 'react';

export default function PreviousUser(props) {
  return(
    <button
      onClick={ () => {
        props.previousUser()
      }}
    > Previous </button>
  )
}
