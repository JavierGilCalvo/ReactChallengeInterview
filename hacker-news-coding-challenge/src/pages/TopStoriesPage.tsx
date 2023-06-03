import { topStories } from '../mocks/story.json'
import { storyStyle, storyTitle, detailStory, topStoriesList } from './TopStoriesPage.css'
import { Link } from 'wouter'
import { useState, useEffect } from 'react'
import { getTopStories } from '../services/hacker-news'
import { CONSTANTS } from '../constants'

export default function TopStoriesPage () {
  const [page, setPage] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const turnForwardPage = () => {
    setPage(page + 1)
  }

  const turnBackwardPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    try {
      setLoading(true)
      getTopStories(page, CONSTANTS.LIMIT)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [page])

  return (
    <div>
      <ul className={topStoriesList}>
        {
            topStories.map((story: any) => {
              return (
                <Link key={story.id} href='/item/8863'>
                  <li className={storyStyle}>
                    <p className={storyTitle}>{story.title}</p>
                    <p className={detailStory}>{story.by} - score: {story.score}</p>
                  </li>
                </Link>
              )
            })
        }
      </ul>
    </div>
  )
}
