import React from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';

export interface Task {
  id: number;
  title: string;
}

export interface CheckedDictionary {
  [id: string]: boolean;
}

interface ITaskListProps {
  tasks: Task[];
  urgent?: CheckedDictionary;
  important?: CheckedDictionary;
  onUrgentChange?: (task: Task) => void;
  onImportantChange?: (task: Task) => void;
}

export default function TaskList(props: ITaskListProps): React.ReactElement {
  const {
    tasks,
    urgent = {},
    important = {},
    onImportantChange = nullHandler,
    onUrgentChange = nullHandler,
  } = props;

  return (
    <ListGroup variant="flush">
      <ListGroup.Item disabled>
        <Row>
          <Col sm={2}>Imporant</Col>
          <Col sm={2}>Urgent</Col>
          <Col sm={8}>Title</Col>
        </Row>
      </ListGroup.Item>
      {
        tasks.map((task) => {
          const { id } = task;
          const taskInfo = {
            isImportant: !!important[id],
            isUrgent: !!urgent[id]
          };

          return (
            <ListGroup.Item key={id} className="my-0">
              <TaskListRow
                task={task}
                taskInfo={taskInfo}
                onImportantChange={onImportantChange}
                onUrgentChange={onUrgentChange}
              />
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}

interface TaskInfo {
  isImportant: boolean;
  isUrgent: boolean;
}

interface ITaskListRowProps {
  task: Task;
  taskInfo: TaskInfo;
  onImportantChange: (task: Task) => void;
  onUrgentChange: (task: Task) => void;
}

function TaskListRow(props: ITaskListRowProps) {
  const { task, taskInfo, onImportantChange, onUrgentChange } = props;
  const { isImportant, isUrgent } = taskInfo;
  const { id, title } = task;
  const importantChangeHandler = () => {
    onImportantChange(task);
  };
  const urgentChangeHandler = () => {
    onUrgentChange(task);
  };

  return (
    <Row>
      <Col sm={2}>
        <Form.Group className="my-0" controlId={`important-${id}`}>
          <Form.Check
            checked={isImportant}
            onChange={importantChangeHandler}
            type="checkbox" label="Important" />
        </Form.Group>
      </Col>
      <Col sm={2}>
        <Form.Group className="my-0" controlId={`urgent-${id}`}>
          <Form.Check
            checked={isUrgent}
            onChange={urgentChangeHandler}
            type="checkbox" label="Important" />
        </Form.Group>
      </Col>
      <Col sm={8}>
        {title}
      </Col>
    </Row>
  );
}

function nullHandler(task: Task): void {
  // do nothing
}
