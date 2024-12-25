import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import Login from './views/Login';


const App = () => (
  <AuthProvider>
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  </AuthProvider>
);

export default App
