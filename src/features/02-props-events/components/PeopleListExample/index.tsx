import React from 'react';

export default function PeopleListExample(): React.ReactElement {
  // TODO
  const people = [
    { id: 100, name: 'bob' },
    { id: 200, name: 'ed' },
    { id: 300, name: 'kate' },
    { id: 400, name: 'ann' },
  ];

  return (
    <div>
      <h3>PeopleListExample</h3>
      <ul>
        {
          people.map((person, index) => {
            const clickHandler = () => {
              console.log('person:', person);
            };

            return (
              <li key={person.id} onClick={clickHandler}>
                <div>
                  <h3>
                    {person.name}
                  </h3>
                  <small>{index + 1}</small>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
