import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import ListOfEvents from './pages/list-of-events/index';
import PageConfirmation from './pages/page-confirmation/index';
import PageNotFound from './pages/page-not-found/index';
import SignIn from './pages/sign-in/index';
import SignUp from './pages/sign-up/index';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/events" element={<ListOfEvents />} />
    <Route path="/page-confirmation" element={<PageConfirmation />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
