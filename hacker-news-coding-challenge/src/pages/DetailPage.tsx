import { comments } from '../mocks/comments.json'
import { commentsList, commentStyle } from './DetailPage.css'

export default function DetailPage () {
  return (
    <div>
      <ul className={commentsList}>
        {
            comments.map((comment: any) => {
              return (
                <li key={comment.id} className={commentStyle}>
                  <p>{comment.by}: {comment.text}</p>
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}
