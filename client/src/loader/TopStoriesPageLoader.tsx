import { StoryLoader } from './StoryLoader'
import { CONSTANTS } from '../constants'

export function TopStoriesPageLoader () {
  return (
    <>
      {
      [...Array(CONSTANTS.LIMIT)].map(() => {
        return (
          // eslint-disable-next-line react/jsx-key
          <StoryLoader />
        )
      })
      }
    </>
  )
}
