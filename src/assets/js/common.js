export const fix2 = (value) => {
  return value.toFixed(2)
}

export const ThousandSign = (value) => {
  let comma=/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
  let newVal = value.toString().replace(comma, ',')
  return newVal
}

export const TransCountyName = (name) => {
  switch(name) {
    case 'jls':
      return '基隆市'
    case 'tbs':
      return '台北市'
    case 'xbs':
      return '新北市'
    case 'ylx':
      return '宜蘭縣'
    case 'hlx':
      return '花蓮縣'
    case 'tdx':
      return '台東縣'
    case 'pdx':
      return '屏東縣'
    case 'gxs':
      return '高雄市'
    case 'tns':
      return '台南市'
    case 'jyx':
      return '嘉義縣'
    case 'jys':
      return '嘉義市'
    case 'yulx':
      return '雲林縣'
    case 'zhx':
      return '彰化縣'
    case 'tzs':
      return '台中市'
    case 'mlx':
      return '苗栗縣'
    case 'xzx':
      return '新竹縣'
    case 'xzs':
      return '新竹市'
    case 'tys':
      return '桃園市'
    case 'jmx':
      return '金門縣'
    case 'phx':
      return '澎湖縣'
  }
}