import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { commentStyle, userName } from '../components/Comment.css.ts'

export function CommentLoader ({ level }: { level: number }) {
  return (
    <>
      <div style={{ marginLeft: `${24 * level}px`, marginTop: '32px' }}>
        <Skeleton className={userName} style={{ float: 'left' }} />
        <Skeleton className={commentStyle} style={{ float: 'left', height: '25px', width: '500px' }} />
      </div>

    </>
  )
}
