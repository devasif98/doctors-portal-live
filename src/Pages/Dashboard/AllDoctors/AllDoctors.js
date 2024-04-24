import React from 'react';

const AllDoctors = () => {
    return (
        <div>
        <h1 className='text-3xl my-5'>All Doctors</h1>

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
                    {/* {
          users?.map((user, i) => (
            <tr key={user._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Admin</td>
              <td>Delete</td>
            </tr>
          ))
        } */}

                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Deletion</th>
                    </tr>


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllDoctors;