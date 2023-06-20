import { useState, useEffect } from 'react'
import { getTopStories } from '../services/hacker-news'
import { CONSTANTS } from '../constants'

export function useStories () {
  const [stories, setStories] = useState<number[]>([])
  const [page, setPage] = useState(1)
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
