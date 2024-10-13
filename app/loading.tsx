"use client"
import React from 'react';

export default function Loading() {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height loader
  };

  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    borderTop: '4px solid #3498db', // Change color to your liking
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
