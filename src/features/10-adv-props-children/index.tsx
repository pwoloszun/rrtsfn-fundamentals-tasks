import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import PropsExample from './components/01-PropsExample';
import PropsComponentFactory from './components/03-PropsComponentFactory';
import RenderPropsExample from './components/05-RenderPropsExample';
import PropsComponentGenerator from './components/02-PropsComponentGenerator';
import ChildrenExample from './components/04-ChildrenExample';
import AdvPropsTask from './components/AdvPropsTask';
import LoadingTask from './components/LoadingTask';
import CustomizableTaskPage from './components/CustomizableListTask/CustomizableTaskPage';

export default function AdvPropsChildren() {
  const person = {
    name: 'bob',
    age: 12,
    sex: 'M'
  };
  return (
    <Tabs defaultActiveKey="loadingTask">
      <Tab eventKey="loadingTask" title="Loading Task">
        <LoadingTask />
      </Tab>
      <Tab eventKey="Task" title="Task">
        <CustomizableTaskPage />
      </Tab>
      <Tab eventKey="PropsExample" title="Props: example">
        <PropsExample label="1st" name={'bob'} age={12} sex={'M'} />
        <PropsExample label="2nd" name="bob" age={12} sex="M" />
        <PropsExample label="3rd" name={person.name} age={person.age} sex={person.sex} />
        <PropsExample label="4th" {...person} />
      </Tab>
      <Tab eventKey="PropsCompGen" title="Props: component generator">
        <PropsComponentGenerator />
      </Tab>
      <Tab eventKey="PropsCompFactory" title="Props: component factory">
        <PropsComponentFactory entryId="video" />
        <PropsComponentFactory entryId="photo" />
      </Tab>
      <Tab eventKey="ChildrenExample" title="Children: example">
        <ChildrenExample />
      </Tab>
      <Tab eventKey="RenderPropsExample" title="Render Props: example">
        <RenderPropsExample />
      </Tab>
    </Tabs>
  );
}
