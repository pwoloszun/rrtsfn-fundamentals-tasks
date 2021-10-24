import React from 'react';

export default function PeopleListExample(): React.ReactElement {
  // TODO
  const people = [
    { id: 100, name: 'bob' },
    { id: 200, name: 'ed' },
    { id: 300, name: 'kate' },
  ];

  return (
    <div>
      <h3>PeopleListExample</h3>
      <ul>
        <li>TODO 1</li>
        <li>TODO 2</li>
      </ul>
    </div>
  );
}
