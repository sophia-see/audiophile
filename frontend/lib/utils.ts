export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const toProductUrl = (id: number, title: string) => {
  return `/product/${id}_${title.replaceAll(" ", "-").toLowerCase()}`
}