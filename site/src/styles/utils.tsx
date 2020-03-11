export const hidden = [`none`, `none`, `block`]

export const bgColors = [
  { color: '#FA6A95' },
  { color: '#FA6AEC' },
  { color: '#B26AFA' },
  { color: '#6D6AFA' },
  { color: '#6A8AFA' },
  { color: '#6AB5FA' },
  { color: '#6AE0FA' },
  { color: '#FA6A6A' },
]

export const categories = [
  'app',
  'website',
  'branding',
  'design',
  'development',
  'marketing',
]

export const categoryColor = (category = "") => {

  return bgColors[categories.indexOf(category)].color
}
