import React, { useState, useEffect } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';
import fetchUsers, { User } from 'src/api/fetch-users';

import EntitiesSimpleList from '../../components/EntitiesSimpleList';
import useAsync from '../../hooks/useAsync';


// interface IProps {
//   id: number;
//   fullName: string;
// }

// interface IState {
//   value: number;
// }

// class MyCmp extends React.Component<IProps, IState> {

//   state = {
//     value: 100,
//     age: 123,
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.btnClickHanlder}></button>
//       </div>
//     );
//   }

//   componentDidMount() {
//     //...
//   }

//   componentDidUpdate() {
//     //...
//     if (id) {
//       // ...
//     }
//     if (fullName) {
//       // ...

//     }
//   }

//   private btnClickHanlder = () => {
//     this.setState({ value: 200 });
//   };
// }

// function FnMyCmp(props: IProps) {
//   const [state, setState] = useState({
//     value: 100,
//     age: 123
//   });

//   useEffect(() => {
//     // ...
//   }, []);

//   useEffect(() => {
//     // ...
//   }, [props.id]);

//   const btnClickHanlder = () => {
//     setState({ value: 200 });
//   };

//   return (
//     <div>
//       <button onClick={btnClickHanlder}></button>
//     </div>
//   );
// }
















export default function MyDashboard() {
  const [
    realEstates,
    isRealEstatesLoading,
    realEstatesError
  ] = useAsync(fetchRealEstates);

  const [
    users,
    isUsersLoading,
    usersError
  ] = useAsync(fetchUsers);

  return (
    <div>
      <h3>MyDashboard</h3>

      <EntitiesSimpleList
        entites={realEstates}
        isLoading={isRealEstatesLoading}
        error={realEstatesError}
        renderValue="street"
      />

      <hr />

      <EntitiesSimpleList
        entites={users}
        isLoading={isUsersLoading}
        error={usersError}
        renderValue="email"
      />
    </div>
  );
}
