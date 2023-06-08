import { TopStoriesPageLoader } from '../loader/TopStoriesPageLoader'
import { storyStyle, storyTitle, urlStory, detailStory, topStoriesList, buttonLoadMore } from './TopStoriesPage.css'
import { Link } from 'wouter'
import { useState, useContext } from 'react'
import { StoriesContext } from '../context/StoriesContext'
import { getTimeOfItem } from '../utils'

export default function TopStoriesPage () {
  const { stories, setStories, isLoading, turnForwardPage } = useContext(StoriesContext)

  const [error, setError] = useState(null)

  const getDomain = (url = 'https://news.ycombinator.com/news') => {
    const domain = (new URL(url))
    let hostname: string = domain.hostname
    hostname = domain.hostname.replace('www.', '')
    return hostname
  }

  return (
    <div>
      <ul className={topStoriesList}>
        {
            stories?.map((story: any) => {
              return (
                <Link key={story.id} href={`/item/${story.id}`}>
                  <li className={storyStyle}>
                    <p className={storyTitle}>{story.title}</p>
                    <p className={urlStory}>({getDomain(story.url)})</p>
                    <p className={detailStory}>{story.score} points by {story.by} {getTimeOfItem(story.time)} hours ago | {story.kids?.length} comments </p>
                  </li>
                </Link>
              )
            })
        }
        {
          (isLoading) &&
            <TopStoriesPageLoader />
        }
        <button className={buttonLoadMore} onClick={() => { turnForwardPage() }}>Load More</button>
      </ul>

    </div>
  )
}
