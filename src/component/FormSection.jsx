"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer YOUR_API_KEY', // Replace YOUR_API_KEY with your actual API key
                },
                body: JSON.stringify({
                    service_id: 'YOUR_SERVICE_ID', // Replace YOUR_SERVICE_ID with your actual service ID
                    template_id: 'YOUR_TEMPLATE_ID', // Replace YOUR_TEMPLATE_ID with your actual template ID
                    user_id: 'YOUR_USER_ID', // Replace YOUR_USER_ID with your actual user ID
                    template_params: {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-sm font-semibold text-[#333]">I am interested in...</p>
            <div className="space-x-4 max-lg:mt-4 lg:flex-row flex mt-4">
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${formData.interest === 'Academics' ? 'bg-[#a91079] text-white' : 'bg-transparent text-[#a91079] bold'} text-sm tracking-wider font-medium outline-none border-2 border-[#a91079]`}
                    onClick={() => setFormData({ ...formData, interest: 'Academics' })}
                >
                    Academics
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${formData.interest === 'Digital Marketing' ? 'bg-[#a91079] text-white' : 'bg-transparent text-[#a91079] bold'} text-sm tracking-wider font-medium outline-none border-2 border-[#a91079]`}
                    onClick={() => setFormData({ ...formData, interest: 'Digital Marketing' })}
                >
                    Digital Marketing
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${formData.interest === 'Personality Development' ? 'bg-[#a91079] text-white' : 'bg-transparent text-[#a91079] bold'} text-sm tracking-wider font-medium outline-none border-2 border-[#a91079]`}
                    onClick={() => setFormData({ ...formData, interest: 'Personality Development' })}
                >
                    Personality Development
                </button>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    placeholder='Email'
                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                />
                <textarea
                    placeholder='Message'
                    rows="6"
                    className="w-full rounded-md px-4 text-sm pt-3 outline-[#a91079]"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    type='submit'
                    className="text-white bg-[#a91079] hover:bg-[#a91079e2] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
