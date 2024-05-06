import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ResponsivePagination from 'react-responsive-pagination';
import { MdDeleteOutline } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import 'react-responsive-pagination/themes/classic.css';
import { toast } from 'react-hot-toast';
import './style.css';

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

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

  const handleUserTypeClick = async (userId, userType) => {
    try {
      const res = await fetch(`https://doctors-portal-server23.vercel.app/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userType }),
      });

      if (!res.ok) {
        throw new Error('Failed to update user type');
      }

      queryClient.invalidateQueries(['users', user?.email]);
      toast.success('User userType updated successfully');
    } catch (error) {
      toast.error('Failed to update user userType');
    }
  };

  const handleDeleteClick = async (userId) => {
    try {
      const res = await fetch(`https://doctors-portal-server23.vercel.app/users/${userId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete user');
      }

      queryClient.invalidateQueries(['users', user?.email]);
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

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
                  <div
                    className={` ${user.userType === 'admin' ? 'disabled' : ''}`}

                  >

                    {user.userType === "admin" ?
                      <RiAdminFill className='text-center uppercase cursor-pointer  text-2xl text-blue-500' onClick={() =>
                        handleUserTypeClick(user._id, 'admin')
                      } />
                      :
                      <>
                        <FaUser className='text-center uppercase cursor-pointer  text-2xl text-green-500' onClick={() =>
                          handleUserTypeClick(user._id, 'admin')
                        } />
                      </>
                    }
                  </div>
                </td>
                <td>
                  <div className='text-red-700 flex justify-center'>
                    <MdDeleteOutline className='cursor-pointer text-3xl' onClick={() => handleDeleteClick(user._id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='mt-5'>
          <ResponsivePagination
            current={currentPage}
            total={Math.ceil(users.length / usersPerPage)}
            onPageChange={setCurrentPage}
            pageClassName="bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
