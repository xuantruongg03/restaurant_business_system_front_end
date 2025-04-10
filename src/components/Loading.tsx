import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  color = '#0070f3',
  className = '',
}) => {
  const sizeMap = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className={`flex justify-center items-center ${className} h-screen`}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${sizeMap[size]}`}
        style={{ borderColor: `${color} transparent ${color} ${color}` }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading; 