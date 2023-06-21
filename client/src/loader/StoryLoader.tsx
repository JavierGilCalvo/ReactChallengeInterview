import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { detailStory } from '../pages/TopStoriesPage.css'

export function StoryLoader () {
  return (
    <>
      <Skeleton />
      <Skeleton className={detailStory} style={{ float: 'left' }} />
    </>
  )
}
