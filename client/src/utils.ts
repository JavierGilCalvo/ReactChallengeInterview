export function getTimeOfItem (time: number) {
  const timeOfItem = new Date(time * 1000)
  const now = new Date()
  const diff = Math.abs(now.getTime() - timeOfItem.getTime())
  const hour = diff / 36e5
  return Math.round(hour)
}
