export const hourOptions = new Array(24)
  .fill(null)
  .map((_, index) => ({ value: String(index), label: String(index) }))

export const minuteOptions = new Array(60)
  .fill(null)
  .map((_, index) => ({ value: String(index), label: String(index) }))
