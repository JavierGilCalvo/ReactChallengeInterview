import { commentStyle, userName } from './Comment.css'

export default function Comment ({ comment, level }) {
  return (
    <li key={comment.id} className={commentStyle} style={{ marginLeft: `${24 * level}px` }}>
      <p className={userName}>{comment.by}</p>
      <p>{comment.text}</p>
    </li>
  )
}
