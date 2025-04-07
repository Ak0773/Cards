import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='flex items-center justify-center min-h-screen gap-[80px]  bg-gray-100 '>
			<div className=' bg-yellow-300 w-sm h-[500px] flex-col text-center flex  items-center border-b-gray-700 '>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px] mb-[50px]'
					alt='Vite logo'
				/>
				<h2 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h2>
			</div>
			<div className='  bg-gray-300 w-sm h-[500px] flex-col text-center flex  items-center  '>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]  mb-[50px] '
					alt='Vite logo'
				/>
				<h1 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h1>
			</div>
			<div className=' bg-blue-300 w-sm h-[500px] flex-col text-center flex  items-center'>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]  mb-[50px]'
					alt='Vite logo'
				/>
				<h1 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h1>
				<p></p>
			</div>
		</div>
	)
}

export default App
