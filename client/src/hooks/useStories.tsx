import { useState, useEffect } from 'react'
import { getTopStories } from '../services/hacker-news'
import { CONSTANTS } from '../constants'
import { IStory } from '../hooks/useDetail'

export function useStories () {
  const [stories, setStories] = useState<IStory[]>([])
  const [page, setPage] = useState<number>(1)
  const [isLoading, setLoading] = useState<boolean>(true)

  const turnForwardPage = () => {
    setPage(page + 1)
    setLoading(true)
  }

  useEffect(() => {
    try {
      getTopStories(page, CONSTANTS.LIMIT)
        .then(data => setStories([...stories, ...data]))
        .finally(() => setLoading(false))
    } catch (error) {
      console.error(error)
    }
  }, [page])

  return { stories, setStories, isLoading, turnForwardPage }
}
