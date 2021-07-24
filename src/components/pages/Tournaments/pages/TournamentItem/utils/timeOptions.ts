export const hourOptions = new Array(24)
  .fill(null)
  .map((_, index) => ({ value: String(index), label: String(index) }))

export const minuteOptions = new Array(4)
  .fill(null)
  .map((_, index) => ({ value: String(index * 15), label: String(index * 15) }))
