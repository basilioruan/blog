import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Posts from './pages/Posts/Posts';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post" element={<Post />} />
      <Route path="/admin" element={<Login />} />
    </Routes>
  );
}

export default Router;