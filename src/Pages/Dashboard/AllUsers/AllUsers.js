import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './style.css';

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server23.vercel.app/users`;

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }
      return res.json();
    },
  });

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
            {currentUsers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className='px-3 py-1 bg-slate-700 text-white rounded-lg text-center uppercase cursor-pointer'>
                    {user.userType}
                  </div>
                </td>
                <td>
                  <div className='px-3 py-1 bg-red-700 text-white rounded-lg text-center cursor-pointer'>
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ResponsivePagination
          current={currentPage}
          total={Math.ceil(users.length / usersPerPage)}
          onPageChange={setCurrentPage}
          pageClassName="bg-gray-300"
        />

      </div>
    </div>
  );
};

export default AllUsers;
