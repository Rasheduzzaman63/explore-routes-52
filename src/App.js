import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Friends from './components/Friends/Friends';
import Main from './Layout/Main/Main';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, 
    children:[
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: 'product', element:<Product></Product>},
      {path: 'friends', 
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
      element : <Friends></Friends>},
      {
        path: '/friend/:friendId',
        loader: async({params})=>{
        // console.log(params.friendId)
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element: <FriendDetails></FriendDetails>
      }
    ]},
   
    {path:'/about', element: <About></About>},
   

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
      

    </div>
  );
}

export default App;
