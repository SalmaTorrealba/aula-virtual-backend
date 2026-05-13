import React from "react";

type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {title && (
        <h2 className="text-lg font-semibold mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
