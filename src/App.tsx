import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="p-4">
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
