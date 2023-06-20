import { commentStyle, userName } from './Comment.css.ts'
import { IComment } from '../hooks/useDetail'

export default function Comment ({ comment }: { comment: IComment }) {
  return (
    <li className={commentStyle} style={{ marginLeft: `${24 * comment.level}px` }}>
      <p className={userName}>{comment.by}</p>
      <p>{comment.text}</p>
    </li>
  )
}
