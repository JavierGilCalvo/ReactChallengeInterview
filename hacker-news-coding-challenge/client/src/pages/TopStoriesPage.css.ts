import { style } from '@vanilla-extract/css'

export const topStoriesList = style({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left'
})

export const storyStyle = style({
  ':hover': {
    backgroundColor: '#d0d0d0'
  },
  alignItems: 'left',
  textAlign: 'left',
  fontFamily: 'Verdana, Geneva, sans-serif',
  marginBottom: '12px',
  cursor: 'pointer',
  width: 'fit-content',
  borderRadius: '8px',
  padding: '0 8px'
})

export const storyTitle = style({
  display: 'inline',
  color: '#3B3B3B',
  margin: 0,
  fontSize: '10pt'
})

export const urlStory = style({
  display: 'inline',
  color: '#828282',
  fontFamily: 'Verdana, Geneva, sans-serif',
  fontSize: '8pt',
  marginLeft: '8px'
})

export const detailStory = style({
  color: '#929292',
  fontSize: '7pt',
  textDecoration: 'none',
  margin: 0,
  width: '300px',
  alignItems: 'left',
  textAlign: 'left'
})

export const buttonLoadMore = style({
  ':hover': {
    backgroundColor: '#e15411',
    borderColor: '#e15411'
  },
  backgroundColor: '#f26522',
  color: '#f2f2f2',
  padding: '12px',
  marginTop: '12px',
  border: '1px solid #f26522',
  borderRadius: '12px',
  height: '48px',
  width: '160px',
  fontSize: '16px',
  fontFamily: 'sans-serif, Verdana, Geneva',
  fontWeight: 'bold',
  transition: '0.2s',
  cursor: 'pointer'
})
