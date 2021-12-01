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
        {
          people.map((person, index) => {
            const myHandler = () => {
              console.log('name:', person.name);
            };

            return (
              <li key={person.id} onClick={myHandler}>
                <div>
                  <h3>
                    {person.name}
                  </h3>
                  <span>{index + 1}</span>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
