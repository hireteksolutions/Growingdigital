import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./Page/Home/Home'));
const About = lazy(() => import('./Page/About/About'));
const Blog = lazy(() => import('./Page/blog/Blog'))
const Partners = lazy(() => import('./Page/Partners/Partners'))
const Subblogs = lazy(() => import('./Page/Subblogs/Subblogs'))
const Security = lazy(() => import('./Page/Security/Security'))
const Contact = lazy(() => import('./Page/Contact/Contact'))
const Training = lazy(() => import('./Page/Training/Training'))
const Reset = lazy(() => import('./Page/PasswordReset/PasswordReset'))
const DashboardBlog = lazy(() => import('./Page/Blogs/Blog'))
const UploadBlog = lazy(() => import('./Page/BlogForm/BlogForm'))
const DashboardContact = lazy(() => import('./Page/DashboardContact/DashboardContact'))
const ErrorPage = lazy(() => import('./Page/ErrorPage/ErrorPage'));
const Loader = lazy(() => import('./Component/Loader/Loader'));
const Fb = lazy(() => import('./Page/Fb/Fb'));
// const DashboardContact = lazy(()=> import('./Page/Contacts/Contact'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Subblogs />} />
            <Route path="/partner" element={<Partners />} />
            <Route path="/Fb" element={<Fb />} />

            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/training" element={<Training />} /> */}
            <Route path="/password-reset" element={<Reset />} />
            <Route path="/blogs" element={<DashboardBlog />} />
            <Route path="/upload" element={<UploadBlog />} />
            <Route path="/contact-details" element={<DashboardContact />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route path="/contacts" element={<DashboardContact />}/> */}
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
