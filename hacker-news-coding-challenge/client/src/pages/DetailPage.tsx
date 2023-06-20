import { commentsList, topText, storyTitle } from './DetailPage.css'
import { useDetail, IComment } from '../hooks/useDetail'
import Comment from '../components/Comment'

export default function DetailPage (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { story } = useDetail({ id })

  return (
    <div>
      <h1 className={storyTitle}>{story?.title}</h1>
      <div className={topText}>
        {story?.text}
      </div>
      <p>{story?.by}</p>
      <ul className={commentsList}>
        {
            story?.comments?.map((commentFromStory: IComment): JSX.Element => {
              return (
                <Comment key={commentFromStory.id} comment={commentFromStory} />
              )
            })
        }
      </ul>
    </div>
  )
}
