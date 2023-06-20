import { commentsList, topText, storyTitle } from './DetailPage.css'
import { useDetail, IComment } from '../hooks/useDetail'
import { DetailPageLoader } from '../loader/DetailPageLoader'
import Comment from '../components/Comment'

export default function DetailPage (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { story, isLoading } = useDetail({ id })

  return (
    <div>
      <h1 className={storyTitle}>{story?.title}</h1>
      <div className={topText}>
        {story?.text}
      </div>
      <ul className={commentsList}>
        {
            story?.comments?.map((commentFromStory: IComment): JSX.Element => {
              return (
                <Comment key={commentFromStory.id} comment={commentFromStory} />
              )
            })
        }
        {
          (isLoading) &&
            <DetailPageLoader />
        }
      </ul>
    </div>
  )
}
