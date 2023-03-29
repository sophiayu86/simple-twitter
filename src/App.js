import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUpPage, LoginPage, MainPage, AdminLoginPage, AdminMainPage, AdminUsersPage, ProfilePage, UserFollowerPage, SettingPage, ReplyPage, HomePage } from './Pages';
import { AuthProvider } from './Context/AuthContext';
import { userContext } from './Context/UserContext';
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
            {/* <Route path="user/:UserId/tweet" element={<ProfileTweets />} /> */}
            <Route path="profile/:userID" element={<ProfilePage />} />
            {/* <Route
                path="user/:UserId/followers"
                element={<UserFollowerPage />}
              /> */}
            <Route
              path='followers'
              element={<UserFollowerPage />}
            />
            <Route
              path='user/setting'
              element={<SettingPage />}
            />
            {/* <Route path="tweet/:TweetId/replies" element={<ReplyPage />} /> */}
            <Route path="tweet/:tweetID/replies" element={<ReplyPage />} />
            <Route
              path='*'
              element={<HomePage />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Nav/>
//       <LoginInput />
//       <SideNav/>
//       <RegisterInput/>
//       </BrowserRouter>

//       <p>test</p>
//     </div>
//   );
// }
