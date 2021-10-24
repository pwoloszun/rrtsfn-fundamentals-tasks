import { useState } from 'react';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface UsePersonResult {
  person: Person;
  setLastName: (lastName: string) => void;
  incrementAge: () => void;
};

export default function usePerson(initialPerson: Person): UsePersonResult {
  const [person, setPerson] = useState<Person>({ ...initialPerson });

  const setLastName = (lastName: string): void => {
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        lastName
      };
    });
  };

  const incrementAge = (): void => {
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        age: prevPerson.age + 1
      };
    });
  };

  return {
    person,
    setLastName,
    incrementAge
  };
}
