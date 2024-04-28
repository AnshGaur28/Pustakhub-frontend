import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const jwt = sessionStorage.getItem('token');

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get('http://localhost:80/api/getUserProfile', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        setUser(response.data.profile[0]);
        console.log(user?.locations[0]);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    getProfile();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Send request to update user profile
      console.log(data);
      console.log("Working");
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input type="text" {...register('mobile', { required: true })} defaultValue={user?.user?.mobile || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">Mobile number is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" {...register('password')} defaultValue={user?.user?.password || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Username:</label>
          <input type="password" {...register('username')} defaultValue={user?.user?.username || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">City:</label>
          <input type="password" {...register('city')} defaultValue={user?.locations[0]?.city || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Locality:</label>
          <input type="password" {...register('locality')} defaultValue={user?.locations[0]?.locality || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">State:</label>
          <input type="password" {...register('state')} defaultValue={user?.locations[0]?.state || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Pincode:</label>
          <input type="password" {...register('pincode')} defaultValue={user?.locations[0]?.pincode || ''} className="mt-1 p-2 border rounded w-full" />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}
        </div>
        {/* Add other form fields for profile editing */}
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
