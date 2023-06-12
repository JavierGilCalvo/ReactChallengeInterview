import { commentsList } from './DetailPage.css'
import useDetail from '../hooks/useDetail'

export default function DetailPage (props: {
  params: {
    id: string
  }
}) {
  /*
  by: "jart",
  children: [{…}, {…}],
  id: 36223911,
  kids: [36224001, 36224394],
  parent: 36223283,
  text: "I discovered a really cool ARM64 trick today...",
  time: 1686122747,
  type: "comment"
  */
  const { params: { id } } = props
  const { story, getComment } = useDetail({ id })

  return (
    <div>
      <h1>{story?.title}</h1>
      <p>{story?.by}</p>
      <ul className={commentsList}>
        {
            story?.comments?.map((comment: any) => {
              return (
                getComment(comment, 0)
              )
            })
        }
      </ul>
    </div>
  )
}
