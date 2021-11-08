import React from 'react';

export default function PeopleListExample(): React.ReactElement {
  // TODO
  const people = [
    { id: 100, name: 'bob' },
    { id: 200, name: 'ed' },
    { id: 300, name: 'kate' },
    { id: 400, name: 'beth' },
  ];

  return (
    <div>
      <h3>PeopleListExample</h3>
      <ul>
        {
          people.map((person, i) => {
            return (
              <li key={person.id}>
                <div>
                  <h3>{person.name}</h3>
                  <small>{i + 1}</small>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
