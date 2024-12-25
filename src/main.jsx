import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Login from './views/Login'
import { AuthProvider } from './components/AuthProvider';
import Attendance from './views/SubmitAttendance';
import EmployeeDashboard from './views/EmployeeDashboard';
import AttendanceDashboard from './views/AttendanceDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/attendance',
    element: <Attendance />,
  },
  {
    path: '/dashboard',
    element: <EmployeeDashboard />
  },
  {
    path: '/attendance/:employeeid',
    element: <AttendanceDashboard />
  }
  // {
  //   path: '/protected',
  //   element: (
  //     <ProtectedRoute allowedRoles={['admin', 'viewer']}>
  //       <div>Protected content</div>
  //     </ProtectedRoute>
  //   ),
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
