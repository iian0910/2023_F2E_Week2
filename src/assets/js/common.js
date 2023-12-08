export const fix2 = (value) => {
  return value.toFixed(2)
}

export const ThousandSign = (value) => {
  let comma=/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
  let newVal = value.toString().replace(comma, ',')
  return newVal
}