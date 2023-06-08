import { createContext } from 'react'
import { useStories } from '../hooks/useStories'

export const StoriesContext = createContext('Stories')

export function StoriesContextProvider ({ children }) {
  const { stories, setStories, isLoading, turnForwardPage } = useStories()

  return (
    <StoriesContext.Provider value={{
      stories,
      setStories,
      isLoading,
      turnForwardPage
    }}
    >
      {children}
    </StoriesContext.Provider>
  )
}
