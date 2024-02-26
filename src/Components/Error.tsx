import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mx-4 mt-2 rounded">
      <p>{message}</p>
    </div>
  );
};

export default Error;
