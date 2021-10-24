import React from 'react';

import useManageTasksInMemory from '../hooks/useManageTasksInMemory';
import TaskList, { Task } from './TaskList';

export default function MyTaskListContainer(): React.ReactElement {
  const tasksFacade = useManageTasksInMemory();
  const importantChangeHandler = (task: Task) => {
    tasksFacade.toggleImportant(task);
  };
  const urgentChangeHandler = (task: Task) => {
    tasksFacade.toggleUrgent(task);
  };

  return (
    <React.Fragment>
      <TasksSummary
        important={tasksFacade.important}
        urgent={tasksFacade.urgent}
      />
      <TaskList
        tasks={tasksFacade.tasks}
        important={tasksFacade.importantMap}
        urgent={tasksFacade.urgentMap}
        onUrgentChange={urgentChangeHandler}
        onImportantChange={importantChangeHandler}
      />
    </React.Fragment>
  );
}

interface ITasksSummaryProps {
  urgent: Task[];
  important: Task[];
}

function TasksSummary(props: ITasksSummaryProps) {
  const { important, urgent } = props;
  return (
    <h5>Urgent count: {urgent.length}, Important count: {important.length}</h5>
  );
}
