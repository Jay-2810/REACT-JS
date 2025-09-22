import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import AddPost from "./pages/AddPost.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import EditPost from "./pages/EditPost.jsx";
import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";
import Signup from './pages/Signup.jsx';
import { AuthLayout,Login } from './components/index.js';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<AuthLayout authentication={false}> 
                                      <Login/>
                                    </AuthLayout>}>
      </Route>
      <Route path='/signup' element={<AuthLayout authentication={false}> 
                                      <Signup/>
                                    </AuthLayout>}>
      </Route>
      <Route path='/all-posts' element={<AuthLayout authentication={true}> 
                                          {" "}
                                          <AllPosts/>
                                        </AuthLayout>}>
      </Route>
      <Route path='/add-post' element={<AuthLayout authentication={true}> 
                                          {" "}
                                          <AddPost/>
                                        </AuthLayout>}>
      </Route>
      <Route path='/edit-post/:slug' element={<AuthLayout authentication={true}>
                                      {" "} 
                                      <EditPost/>
                                    </AuthLayout>}>
      </Route>
      <Route path='/post/:slug' element={<Post/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
