import './App.css';
// import { LoginInput, RegisterInput, Nav,SideNav } from './Components';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { SignUpPage, LoginPage, MainPage, AdminLoginPage, AdminMainPage, AdminUsersPage, ProfileTweets, ProfileReply, ProfileLikes, UserFollowerPage, UserFollowingPage, SettingPage, ReplyPage, HomePage } from'./Pages';

const basename = process.env.PUBLIC_URL;

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
      
            <Routes>
              <Route path="signup" element={<SignUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="admin_login" element={<AdminLoginPage />} />
              <Route path="admin_main" element={<AdminMainPage />} />
              <Route path="admin_users" element={<AdminUsersPage />} />
              {/* <Route path="user/:UserId/tweet" element={<ProfileTweets />} /> */}
              <Route path="user" element={<ProfileTweets />} />
              <Route
                path="replied_tweets"
                element={<ProfileReply />}
              />
              <Route path="likes" element={<ProfileLikes />} />
              {/* <Route
                path="user/:UserId/followers"
                element={<UserFollowerPage />}
              /> */}
               <Route
                path="followers"
                element={<UserFollowerPage />}
              />
              <Route
                path="following"
                element={<UserFollowingPage />}
              />
              <Route path="user/setting" element={<SettingPage />} />
              {/* <Route path="tweet/:TweetId/replies" element={<ReplyPage />} /> */}
              <Route path="replies" element={<ReplyPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
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
