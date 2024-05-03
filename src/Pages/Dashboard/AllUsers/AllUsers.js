import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server23.vercel.app/users`;

  const { data: users = [] } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
      });
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
      <h1 className='text-3xl my-5'>All Users</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Deletion</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className='px-3 py-1 bg-slate-700 text-white rounded-lg text-center'>
                      Admin
                    </div>
                  </td>
                  <td>
                    <div className='px-3 py-1 bg-slate-700 text-white rounded-lg text-center'>
                      Delete
                    </div>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;