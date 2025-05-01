import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import SignIn from './pages/Login/SignIn/SignIn';
import Post from './pages/Post/Post';
import SignUp from './pages/Login/SignUp/SignUp';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post" element={<Post />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default Router;