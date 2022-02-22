import { useEffect, useRef, useState } from 'react';
import produce from 'immer';
import { find, findIndex } from 'lodash';

import deriveId from 'src/utils/deriveId';
import { delayedValue } from 'src/utils/randoms';
import projectsApi, { ProjectDto, ProjectDtoParams } from 'src/api/projects-api';

export type { ProjectDto }

const TTL = 30_000;
const MESSAGE_DURATION = 4_000;

export default function useManageProjects() {
  const [projects, setProjects] = useState<ProjectDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesLogger = useOpLog();
  const loadTimestampRef = useRef<null | number>(null);
  const isUnmontedRef = useRef(false); // TODO: mem leaks

  useEffect(() => {
    return () => {
      isUnmontedRef.current = true;
    };
  }, []);

  const load = () => {
    if (isDataOutdated(loadTimestampRef.current)) {
      const cid = deriveId();
      const loadMessage = getLoadMessage(loadTimestampRef.current);
      messagesLogger.add(cid, loadMessage);

      loadTimestampRef.current = Date.now();
      setIsLoading(true);
      projectsApi.getAll()
        .then((projectsData) => {
          setProjects(projectsData);
        })
        .finally(() => {
          setIsLoading(false);
          messagesLogger.remove(cid);
        })
        .then(() => {
          return showMessageFor(messagesLogger, `Projects successfully loaded`);
        });
    }
  };

  const remove = (project: ProjectDto) => {
    const { id, name } = project;
    const cid = deriveId();
    messagesLogger.add(cid, `Removing Project '${name}'...`);
    setProjects((currProjects) => {
      return currProjects.filter((p) => p.id !== id);
    });

    projectsApi.remove(id)
      .then(() => {
        messagesLogger.remove(cid);
        return showMessageFor(messagesLogger, `Successfully removed Project '${name}'`);
      });
  };

  const create = (params: ProjectDtoParams) => {
    const { name } = params;
    const cid = deriveId();
    messagesLogger.add(cid, `Creating Project '${name}'...`);

    projectsApi.create(params)
      .then((createdProject) => {
        setProjects((currProjects) => {
          return [...currProjects, createdProject];
        });
        messagesLogger.remove(cid);
        return showMessageFor(messagesLogger, `Successfully created Project '${name}'`);
      });
  };

  const update = (id: number, params: ProjectDtoParams) => {
    const { name } = params;
    const cid = deriveId();
    messagesLogger.add(cid, `Updating Project '${name}'...`);

    projectsApi.update(id, params)
      .then((updatedProject) => {
        setProjects((currProjects) => {
          return produce(currProjects, (draft) => {
            const index = findIndex(currProjects, { id });
            if (index < 0) {
              throw new Error(`Can't find Project with id=${id}`);
            }
            draft[index] = updatedProject;
          });
        });
        messagesLogger.remove(cid);
        return showMessageFor(messagesLogger, `Successfully updated Project '${name}'`);
      });
  };

  const getById = (id: number): ProjectDto | undefined => {
    return find(projects, { id });
  };

  const hasNext = (id: number): boolean => {
    const currIndex = findIndex(projects, { id });
    return currIndex < projects.length - 1;
  };

  const getNext = (id: number): ProjectDto | undefined => {
    if (hasNext(id)) {
      const currIndex = findIndex(projects, { id });
      return projects[currIndex + 1];
    } else {
      return undefined;
    }
  };

  const hasPrev = (id: number): boolean => {
    const currIndex = findIndex(projects, { id });
    return currIndex > 0;
  };

  const getPrev = (id: number): ProjectDto | undefined => {
    if (hasPrev(id)) {
      const currIndex = findIndex(projects, { id });
      return projects[currIndex - 1];
    } else {
      return undefined;
    }
  };

  return {
    projects,
    isLoading,
    load,
    remove,
    create,
    update,
    getById,
    getNext,
    hasNext,
    hasPrev,
    getPrev,
    logMessages: messagesLogger.messages,
  };
}

function isDataOutdated(loadTimestamp: null | number, ttl = TTL) {
  if (loadTimestamp === null) {
    return true;
  } else {
    return loadTimestamp + ttl < Date.now();
  }
}

interface OperationLog {
  operationStatuses: {
    [key: number]: string;
  };
  order: number[];
}

function useOpLog() {
  const [log, setLog] = useState<OperationLog>({
    operationStatuses: {},
    order: [],
  });
  const messages = log.order.map((id) => {
    return { id, message: log.operationStatuses[id] };
  });

  const add = (id: number, status: string) => {
    setLog((currLog) => {
      return produce(currLog, (draft) => {
        draft.order.push(id);
        draft.operationStatuses[id] = status;
      });
    });
  };

  const remove = (id: number) => {
    setLog((currLog) => {
      return produce(currLog, (draft) => {
        draft.order = currLog.order.filter((oderId) => oderId !== id);
        delete draft.operationStatuses[id];
      });
    });
  };

  return {
    messages,
    add,
    remove,
  };
}

async function showMessageFor(messagesLogger: any, message: string, duration = MESSAGE_DURATION) {
  const cid = deriveId();
  messagesLogger.add(cid, message);
  await delayedValue(cid, duration);
  messagesLogger.remove(cid);
}

function getLoadMessage(timestamp: null | number): string {
  if (timestamp === null) {
    return `Loading Projects...`;
  } else {
    const ago = Math.ceil((Date.now() - timestamp) / 1000);
    return `Loading Projects (expired ${ago}sec ago)...`;
  }
}
