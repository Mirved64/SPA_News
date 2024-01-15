export const createCookie = (apiUrl: string): void => {
  document.cookie = `apiUrl=${apiUrl}`
}
