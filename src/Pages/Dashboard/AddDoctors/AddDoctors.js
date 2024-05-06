import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('specialization', data.specialization);
            formData.append('phoneNumber', data.phoneNumber);
            formData.append('educationPractice', data.educationPractice);
            formData.append('imageFile', data.image[0]); // Assuming image is a single file

            const uploadPhotoUrl = "https://doctors-portal-server23.vercel.app/uploadPhoto";
            const addDoctorUrl = "https://doctors-portal-server23.vercel.app/addDoctor";

            // Upload photo
            const uploadResponse = await fetch(uploadPhotoUrl, {
                method: "POST",
                body: formData,
            });
            const ImageData = await uploadResponse.json();

            if (!uploadResponse.ok) {
                throw new Error(`Failed to upload photo: ${uploadResponse.statusText}`);
            }

            // Update image URL
            const imageUrl = ImageData.url;
            const imageElement = document.getElementById('uploadedImage');
            if (imageElement) {
                imageElement.src = imageUrl;
            }

            const postDoctorsData = {
                name: data.name,
                specialization: data.specialization,
                phoneNumber: data.phoneNumber,
                educationPractice: data.educationPractice,
                imageUrl
            }

            // Add doctor
            const addDoctorResponse = await fetch(addDoctorUrl, {
                method: 'POST',
                body: JSON.stringify(postDoctorsData), // Send imageURL along with other data
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (addDoctorResponse.ok) {
                console.log('Doctor added successfully');
                // Reset the form after successful submission
                reset();
            } else {
                console.error('Failed to add doctor:', addDoctorResponse.statusText);
            }
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };
    return (
        <div className="container mx-auto">
            <h1 className='text-3xl my-5'>Add Doctors</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" placeholder="Enter doctor's name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('name', { required: true })} />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Specialization */}
                <div className="mb-4">
                    <label htmlFor="specialization" className="block text-gray-700 text-sm font-bold mb-2">Specialization</label>
                    <select id="specialization" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('specialization', { required: true })}>
                        <option value="">Select Specialization</option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Endodontics">Endodontics</option>
                        <option value="Periodontics">Periodontics</option>
                        <option value="Prosthodontics">Prosthodontics</option>
                        <option value="Oral Surgery">Oral Surgery</option>
                        <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.specialization && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="text" id="phoneNumber" placeholder="Enter doctor's phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Education/Practice */}
                <div className="mb-4">
                    <label htmlFor="educationPractice" className="block text-gray-700 text-sm font-bold mb-2">Education/Practice</label>
                    <input type="text" id="educationPractice" placeholder="Enter doctor's education or practice" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('educationPractice', { required: true })} />
                    {errors.educationPractice && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                    <input type="file" name='image' accept="image/*" id="files" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('image', { required: true })} />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctors;
