import { style } from '@vanilla-extract/css'

export const topStoriesList = style({
  listStyleType: 'none'
})

export const storyStyle = style({
  alignItems: 'left',
  textAlign: 'left',
  fontFamily: 'Verdana, Geneva, sans-serif',
  marginBottom: '12px',
  cursor: 'pointer'
})

export const storyTitle = style({
  color: '#3B3B3B',
  margin: 0,
  fontSize: '10pt'
})

export const detailStory = style({
  color: '#929292',
  fontSize: '7pt',
  textDecoration: 'none',
  margin: 0
})
