import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { workshopData, registrationData } = location.state || {};

  useEffect(() => {
    // Redirect to ticket page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/workshop/ticket', {
        state: {
          workshopData,
          registrationData,
        },
        replace: true
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, workshopData, registrationData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
        <div className="mb-4">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Payment Successful!
        </h2>
        <div className="text-gray-600 space-y-4 mb-6">
          <p className="font-medium">
            Thank you for registering for {workshopData?.title}
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-sm">
            <p>Generating your ticket...</p>
          </div>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/workshop/ticket', {
              state: {
                workshopData,
                registrationData,
              }
            })}
            className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
          >
            View Ticket Now
          </button>
          <p className="text-sm text-gray-500">
            Redirecting to your ticket in 3 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;