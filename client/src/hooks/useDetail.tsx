import { getStoryInfo } from '../services/hacker-news'
import { useMemo, useState } from 'react'

export interface IComment {
  by: string
  id: number
  kids: number[]
  parent: number
  text: string
  time: number
  type: string
  level: number
}
export interface IStory {
  by: string
  descendants: number
  id: number
  text: string
  kids: number[]
  comments: IComment[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

export function useDetail ({ id }: { id: string }) {
  const [story, setStory] = useState<IStory>()
  const [isLoading, setLoading] = useState<boolean>(false)
  useMemo(() => {
    try {
      setLoading(true)
      getStoryInfo(id).then((storyInfo) => {
        setStory(storyInfo)
        setLoading(false)
      })
    } catch (e) {
      console.error(e)
    }
  }, [id])

  return { story, isLoading }
}
