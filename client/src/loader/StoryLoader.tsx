import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { storyStyle, storyTitle, detailStory, topStoriesList, buttonLoadMore } from '../pages/TopStoriesPage.css'

export function StoryLoader () {
  return (
    <>
      <Skeleton />
      <Skeleton className={detailStory} style={{ float: 'left' }} />
    </>
  )
}
