export function getTimeOfItem (time: number) {
  const timeOfItem = new Date(time * 1000)
  const now = new Date()
  const diff = Math.abs(now - timeOfItem)
  const hour = diff / 36e5
  return Math.round(hour)
}
