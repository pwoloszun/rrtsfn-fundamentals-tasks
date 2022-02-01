/* eslint @typescript-eslint/no-unused-vars: 'off' */

import React from 'react';

import LoadManyThings from './containers/LoadManyThings';
import SearchWithDebounce from './containers/SearchWithDebounce';
import NoHooksCounter from './containers/01-NoHooksCounter';
import WithHooksCounter from './containers/02-WithHooksCounter';
import HistoricCounter from './containers/03-HistoricCounter';
import TrackableCounter from './containers/TrackableCounter';
import HelloEffectHook from './containers/04-HelloEffectHook';
import SimpleApiTask from './containers/SimpleApiTask';
import MyDashboard from './containers/MyDashboard/index';

export default function HooksApi() {
  return (
    <React.Fragment>
      <h3>HooksApi</h3>
      <div>
        <h3>useState hooks</h3>
        {/* <NoHooksCounter /> */}
        {/* <WithHooksCounter /> */}
        {/* <HistoricCounter /> */}
        <TrackableCounter />
      </div>
      <div>
        <h3>useEffects hooks</h3>
        {/* <HelloEffectHook /> */}
      </div>
      <div>
        {/* <LoadManyThings /> */}
        {/* <MyDashboard /> */}
      </div>
      <div>
        {/* <SearchWithDebounce /> */}
      </div>
      <div>
        {/* <SimpleApiTask /> */}
      </div>
    </React.Fragment>
  );
}
