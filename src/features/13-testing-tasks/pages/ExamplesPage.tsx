import React from 'react';

import AsyncTimerExample from '../examples/AsyncTimerExample';
import MyAjaxCounter from '../examples/MyAjaxCounter';
import MyCounter from '../examples/MyCounter';

export default function ExamplesPage(): React.ReactElement {
  return (
    <div>
      <h3>ExamplesPage</h3>

      <MyCounter />
      <hr />

      <MyAjaxCounter />
      <hr />

      <AsyncTimerExample />
      <hr />

    </div>
  );
}

