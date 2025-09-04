import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import AddJobPage from './Pages/AddJobPage';
import Redirect from './Pages/redirect';
import MainLayout from './layout/MainLayout'

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    try {
      // With Vite proxy, just use relative path
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `Server error: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Add job failed:", error);
      return { error: error.message };
    }
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/join-group' element={<Redirect />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;