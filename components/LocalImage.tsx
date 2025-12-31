import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface LocalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

const LocalImage: React.FC<LocalImageProps> = ({ src, alt, className, fallbackClassName, ...props }) => {
  const [error, setError] = useState(false);

  // Allow paths that start with http, /, or ./ to pass through. 
  // Otherwise, default to absolute path for safety.
  const safeSrc = src.startsWith('/') || src.startsWith('http') || src.startsWith('.') ? src : `/${src}`;

  if (error) {
    return (
      <div 
        className={`${className} ${fallbackClassName || 'bg-gray-100'} flex flex-col items-center justify-center text-gray-400 p-4 border border-dashed border-gray-300 overflow-hidden`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <p className="text-xs text-center font-mono font-medium text-gray-500 break-all px-2">
          {src.split('/').pop()}
        </p>
        <p className="text-[10px] text-center mt-1 text-gray-400 uppercase tracking-wide">
          File Not Found
        </p>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default LocalImage;