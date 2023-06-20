import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CommentLoader } from './CommentLoader.tsx'
import { storyTitle, commentsList, topText } from '../pages/DetailPage.css.ts'

const repeat = (arr: number[], n: number) => [].concat(...Array(n).fill(arr))

export function DetailPageLoader () {
  return (
    <>
      <Skeleton className={storyTitle} style={{ width: '500px' }} />
      <Skeleton className={topText} style={{ height: '100px' }} />
      {
      [...repeat([0, 1, 2], 2), ...[0, 1]].map(elem => {
        return (
          // eslint-disable-next-line react/jsx-key
          <CommentLoader level={elem} />
        )
      })
      }
    </>
  )
}
