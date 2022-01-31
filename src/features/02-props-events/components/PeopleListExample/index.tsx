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
          people.map((person, i) => {
            const itemClickHandler = () => {
              console.log('person:', person);
            };

            return (
              <li key={person.id} onClick={itemClickHandler}>
                <div>
                  <h3>
                    {person.name}
                  </h3>
                  <small> {i} </small>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
