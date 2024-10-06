import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/cn';

const Counter: React.FC = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 10) {
          clearInterval(timer);
          setTimeout(() => navigate('/videotraining'), 1000); // Redirect after 1 second
          return 10;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Counter</h1>
      <div className={cn(
        "text-6xl font-bold",
        "w-40 h-40 rounded-full",
        "flex items-center justify-center",
        "bg-blue-600 text-white",
        "transition-all duration-300 ease-in-out",
        count === 10 ? "scale-110 bg-green-600" : ""
      )}>
        {count}
      </div>
      {count === 10 && (
        <p className="mt-8 text-xl animate-pulse text-green-400">Redirecting to Video Training...</p>
      )}
    </div>
  );
};

export default Counter;