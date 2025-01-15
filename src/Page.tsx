import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const useDarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    switch (localStorage.getItem('darkMode')) {
      case null: {
        const darkMode =
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches

        localStorage.setItem('darkMode', `${darkMode}`)
        break
      }
      case 'true': {
        document.getElementsByTagName('body')[0].classList.add('dark')
        break
      }
    }
  }, [])

  const onDarkModeToggle = () => {
    setDarkMode(!darkMode)
    document.getElementsByTagName('body')[0].classList.toggle('dark')
    localStorage.setItem('darkMode', `${!darkMode}`)
  }

  return (
    <Button size='icon' onClick={onDarkModeToggle}>
      <FontAwesomeIcon icon={faLightbulb} size='lg' />
    </Button>
  )
}

export default function Page() {
  const [count, setCount] = useState(0)
  const darkModeToggle = useDarkModeToggle()

  return (
    <div className='flex items-center justify-center pt-10'>
      <div className='w-full max-w-3xl'>
        <div className='p-10 flex justify-between'>
          <img
            src='https://files.catbox.moe/lbv4lx.jpg'
            className='rounded-full shadow-lg shadow-black/30'
            width='150'
            height='150'
          />
          {darkModeToggle}
        </div>
        <h1 className='font-bold text-4xl'>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}
