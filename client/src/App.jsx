import { useState } from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/signup' element={<SignUp />}></Route>
			<Route path='/login' element={<LogIn />}></Route>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />}></Route>
				<Route path='product' element={<Product />}></Route>
			</Route>
		</Route>
	)
);

function App() {

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)

}

export default App
