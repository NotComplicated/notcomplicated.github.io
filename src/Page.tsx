import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  const [count, setCount] = useState(0)

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    if (localStorage.getItem('darkMode') === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        localStorage.setItem('darkMode', 'true')
      } else {
        localStorage.setItem('darkMode', 'false')
      }
    }
    if (localStorage.getItem('darkMode') === 'true') {
      document.getElementsByTagName('body')[0].classList.add('dark')
    }
  }, [])

  const onToggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.getElementsByTagName('body')[0].classList.toggle('dark')
    localStorage.setItem('darkMode', (!darkMode).toString())
  }

  return (
    <>
      <Button size='icon' onClick={onToggleDarkMode}>
        <FontAwesomeIcon icon={faLightbulb} size='lg' />
      </Button>
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
    </>
  )
}
