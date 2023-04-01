import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';
import NotMatch from './routes/NotMatch';
import SinglePage from './routes/SinglePage';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
