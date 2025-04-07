import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='flex items-center justify-center min-h-screen gap-[80px]  bg-gray-100 '>
			<div className='flex items-start justify-center 	 bg-yellow-300 w-sm h-[500px] '>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]'
					alt='Vite logo'
				/>
			</div>
			<div className='flex align-baseline flex-column justify-column bg-gray-300 w-sm h-[500px] inset-shadow-indigo-500  '>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]'
					alt='Vite logo'
				/>
				<h1>Vite + React</h1>
			</div>
			<div className='flex items-start justify-center bg-blue-300 w-sm h-[500px] '>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]'
					alt='Vite logo'
				/>
			</div>
		</div>
	)
}

export default App
