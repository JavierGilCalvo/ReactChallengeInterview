import './App.css'
import { Header } from './components/Header'
import { Route } from 'wouter'
import TopStoriesPage from './pages/TopStoriesPage'
import DetailPage from './pages/DetailPage'

function App () {
  return (
    <>
      <Header />

      <Route path='/' component={TopStoriesPage} />
      <Route path='/item/:id' component={DetailPage} />
    </>
  )
}

export default App
