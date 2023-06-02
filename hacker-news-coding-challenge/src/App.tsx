import './App.css'
import { Header } from './components/Header'
import { Route } from 'wouter'
import { Suspense, lazy } from 'react'

const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))

function App () {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback='Loading...'>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/item/:id' component={DetailPage} />
        </Suspense>
      </main>
    </>
  )
}

export default App
