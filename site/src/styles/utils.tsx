export const hidden = [`none`, `none`, `block`]

export const categoryColor = (category = "") => {
  const bgColors = [
    { color: '#FA6A95' },
    { color: '#FA6AEC' },
    { color: '#B26AFA' },
    { color: '#6D6AFA' },
    { color: '#6A8AFA' },
    { color: '#6AB5FA' },
    { color: '#6AE0FA' },
    { color: '#FA6A6A' },
  ]
  const categories = [
    'branding',
    'website',
    'app',
    'design',
    'development',
    'marketing',
  ]

  return bgColors[categories.indexOf(category)].color
}
