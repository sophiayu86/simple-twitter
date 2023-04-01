import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUpPage, LoginPage, MainPage, AdminLoginPage, AdminMainPage, AdminUsersPage, ProfilePage, UserFollowerPage, SettingPage, ReplyPage } from './Pages';
import { AuthProvider } from './Context/AuthContext';
const basename = process.env.PUBLIC_URL;

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route
              path='signup'
              element={<SignUpPage />}
            />
            <Route
              path='login'
              element={<LoginPage />}
            />
            <Route
              path='main'
              element={<MainPage />}
            />
            <Route
              path='admin_login'
              element={<AdminLoginPage />}
            />
            <Route
              path='admin_main'
              element={<AdminMainPage />}
            />
            <Route
              path='admin_users'
              element={<AdminUsersPage />}
            />
           
            <Route
              path='profile/:userID'
              element={<ProfilePage />}
            />
            
            <Route
              path='followers/:userID'
              element={<UserFollowerPage />}
            />
            <Route
              path='user/setting'
              element={<SettingPage />}
            />
            
            <Route
              path='tweet/:tweetID/replies'
              element={<ReplyPage />}
            />
            <Route
              path='/'
              element={<LoginPage />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}


