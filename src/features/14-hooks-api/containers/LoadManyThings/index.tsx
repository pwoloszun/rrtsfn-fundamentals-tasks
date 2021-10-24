import React from 'react';

import MySpinner from '../../../../components/MySpinner';
import useWait from '../../hooks/useWait';

export default function LoadManyThings() {
  const { startWaiting, endWaiting, isWaiting } = useWait();

  const userWaitingId = 'load/user';
  const projectsWaitingId = 'load/projects';

  return (
    <div>
      <h3>LoadManyThings</h3>
      <div className="card">
        <div className="card-body">
          {
            isWaiting(userWaitingId) && <MySpinner text="User data..."/>
          }
          <button onClick={() => startWaiting(userWaitingId)}
                  disabled={isWaiting(userWaitingId)}>
            Start loading User
          </button>
          <button onClick={() => endWaiting(userWaitingId)}
                  disabled={!isWaiting(userWaitingId)}>
            End loading User
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {
            isWaiting(projectsWaitingId) && <MySpinner text="Loading Projects..."/>
          }
          <button onClick={() => startWaiting(projectsWaitingId)}
                  disabled={isWaiting(projectsWaitingId)}>
            Start loading Projects
          </button>
          <button onClick={() => endWaiting(projectsWaitingId)}
                  disabled={!isWaiting(projectsWaitingId)}>
            End loading Projects
          </button>
        </div>
      </div>
    </div>
  );
}
