import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import MainLayout from './Layout/MainLayout';
import SignUp from './components/signUp/SignUp';
import AuthLayout from './Layout/AuthLayout';
import PrivateRoutes from './privateRoutes/PrivateRoutes';
// import AuthLayout from './Layout/AuthLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>


    <Route path='/auth' element={<AuthLayout />}>
    {/* <Route path="/auth" element={<AuthLayout />} /> */}
    <Route path="signUp" element={<SignUp />} />
  </Route>
    {/* <Route path="register" element={<Register />} /> */}

    {/* <Route path="" element={<Home />} />  */}
      <Route element={<PrivateRoutes><MainLayout /></PrivateRoutes>} >
      <Route path="/" element={<Home />} />
      </Route>

    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
