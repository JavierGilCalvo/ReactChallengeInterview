import { getStoryInfo } from '../services/hacker-news'
import { useState } from 'react'
import Comment from '../components/Comment'

export default function useDetail ({ id }) {
  const [story, setStory] = useState()
  getStoryInfo(id).then(storyInfo => setStory(storyInfo))

  const getComment = (comment, level: number) => {
    let commentComponent = (
      <Comment comment={comment} level={level} />
    )
    if (comment.children) {
      for (const commentChildId in comment.children) {
        const commentChildComponent = getComment(comment.children[commentChildId], level + 1)
        commentComponent = (
          <>
            {commentComponent}
            {commentChildComponent}
          </>
        )
      }
    }
    return commentComponent
  }

  return { story, getComment }
}
