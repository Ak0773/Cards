import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='flex items-center justify-center min-h-screen gap-[80px]  bg-gray-100 '>
			<div className=' bg-yellow-500 w-sm h-[550px] flex-col text-center flex  items-center rounded-[20px] pt-3 shadow-2xl shadow-yellow-800'>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px] mb-[50px]'
					alt='Vite logo'
				/>
				<h1 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h1>
				<p className='p-[20px] text-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
					distinctio error sapiente alias, veniam temporibus placeat vero
					repellat eveniet
				</p>
				<button className='bg-yellow-700 hover:bg-yellow-900 hover:text-yellow-300 text-white font-bold py-2 px-4 rounded-xl w-[100px]'>
					<a href=''>Like</a>
				</button>
			</div>
			<div
				className='  bg-gray-300 w-sm h-[550px] flex-col text-center flex  items-center rounded-[20px] pt-3 
			shadow-2xl shadow-gray-800'
			>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]  mb-[50px] '
					alt='Vite logo'
				/>
				<h1 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h1>
				<p className='p-[20px] text-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
					distinctio error sapiente alias, veniam temporibus placeat vero
					repellat eveniet
				</p>
				<button
					className='bg-gray-700 hover:bg-gray-900 hover:text-gray-300 text-white font-bold py-2 px-4
				w-[100px] rounded-xl'
				>
					<a href=''>Like</a>
				</button>
			</div>
			<div className=' bg-blue-300 w-sm h-[550px] flex-col text-center flex  items-center rounded-[20px] pt-3 shadow-2xl shadow-blue-800'>
				<img
					src={viteLogo}
					className='logo w-[100px] h-[100px]  mb-[50px]'
					alt='Vite logo'
				/>
				<h1 className='p-[30px] text-2xl'>
					Lorem ipsum dolor sit amet consectetur
				</h1>
				<p className='p-[20px] text-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
					distinctio error sapiente alias, veniam temporibus placeat vero
					repellat eveniet
				</p>
				<button
					className='bg-blue-700 hover:bg-blue-900 hover:text-blue-300 text-white font-bold py-2 px-4 rounded-xl 
				w-[100px]'
				>
					<a href=''>Like</a>
				</button>
			</div>
		</div>
	)
}

export default App
