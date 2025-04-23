import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your message has been successfully sent. We will get back to you soon.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;