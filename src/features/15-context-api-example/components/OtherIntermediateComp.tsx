import React, { ReactElement } from 'react'
import DisplayPerson from './DisplayPerson';

export default function OtherIntermediateComp(): ReactElement {
  return (
    <div>
      <h3>OtherIntermediateComp</h3>
      <DisplayPerson />
    </div>
  )
}

