import { useState } from 'react';
import { produce } from 'immer';

import { IN_MEMORY_TASKS, TaskDto } from '../data/in-memory-tasks';

interface CheckedDictionary {
  [id: string]: boolean;
}

export type IUseManageTasksInMemoryResult = {
  tasks: TaskDto[];
  urgent: TaskDto[];
  important: TaskDto[];
  urgentMap: CheckedDictionary;
  importantMap: CheckedDictionary;
  toggleImportant: (task: TaskDto) => void;
  toggleUrgent: (task: TaskDto) => void;
};

export default function useManageTasksInMemory(): IUseManageTasksInMemoryResult {
  const [tasks, setTasks] = useState(IN_MEMORY_TASKS);
  const [importantMap, setImportantMap] = useState<CheckedDictionary>({});
  const [urgentMap, setUrgentMap] = useState<CheckedDictionary>({});

  const important = tasks.filter(({ id }) => !!importantMap[id]);
  const urgent = tasks.filter(({ id }) => !!urgentMap[id]);

  const toggleImportant = (task: TaskDto) => {
    setImportantMap((currImportant) => {
      const nextImportant = produce(currImportant, (draft) => {
        draft[task.id] = !draft[task.id];
      });
      return nextImportant;
    });
  };

  const toggleUrgent = (task: TaskDto) => {
    setUrgentMap((currUrgent) => {
      const nextUrgent = produce(currUrgent, (draft) => {
        draft[task.id] = !draft[task.id];
      });
      return nextUrgent;
    });
  };

  return {
    tasks,
    importantMap,
    urgentMap,
    urgent,
    important,
    toggleImportant,
    toggleUrgent,
  };
}
