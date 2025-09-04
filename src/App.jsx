import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './Pages/HomePage';
import AddJobPage from './Pages/AddJobPage';
import Redirect from './Pages/redirect';
import NotFoundPage from './Pages/NotFoundPage';

// Backend URL (replace with your Render backend)
const BACKEND_URL = 'https://pair-up-z43e.onrender.com';

const App = () => {
  // Add New Job function
  const addJob = async (newJob) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });

      if (!res.ok) {
        let errorMsg = `Server error: ${res.status}`;
        try {
          const errorData = await res.json();
          errorMsg = errorData.error || errorMsg;
        } catch {
          // ignore JSON parse error
        }
        throw new Error(errorMsg);
      }

      return await res.json();
    } catch (error) {
      console.error('Add job failed:', error);
      return { error: error.message };
    }
  };

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/join-group' element={<Redirect />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;