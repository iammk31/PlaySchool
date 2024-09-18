import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('');
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        if (!email || !query) {
            setStatus('Please fill in both fields.');
            return;
        }
    
        const serviceId = 'service_30n6i0z';
        const templateId = 'template_tyaeb3b';
        const publickey = 'gKhblNtw5HXzewo53';
    
        const templateParams = {
            from_email: email,
            from_query: query,
            to_name: 'EduKids',
        };
    
        emailjs.send(serviceId, templateId, templateParams, publickey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Your query has been sent!');
                setShowModal(true);
                alert('Your query has been successfully sent!'); // This will trigger the alert
            }, (err) => {
                console.log('FAILED...', err);
                setStatus('Failed to send the query. Please try again.');
                alert('Failed to send the query. Please try again.'); // This will alert the error
            });
    
        setEmail('');
        setQuery('');
    };
    

    return (
        <div className="bg-pink-50 py-8 px-4 md:px-10 flex justify-center items-center">
            <div className="max-w-xl w-full bg-white rounded-lg p-6 shadow-md text-center relative">
                <div className="absolute inset-0 bg-teal-700 opacity-60 rounded-lg"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-2">Ask a Query</h2>
                    <p className="text-white mb-6">
                        Enter your email and query, and we’ll get back to you soon!
                    </p>

                    <form onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 rounded-md w-full border-none focus:outline-none"
                            />
                        </div>

                        <div>
                            <input
                                placeholder="Your Query"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="p-3 rounded-md w-full h-24 border-none focus:outline-none"
                            ></input>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 rounded-md w-full"
                            >
                                Send Query
                            </button>
                        </div>

                        {status && (
                            <p className="text-white mt-4">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Query Sent!</h2>
                        <p>Your query has been successfully sent. We’ll get back to you soon.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-teal-500 text-white mt-4 px-4 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
