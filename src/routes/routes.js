import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1> Sign In page </h1>} />
    </Routes>
  );
};
