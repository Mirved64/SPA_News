export const getImgSrc = (data: { main: { bodyHtml: string } }): string =>
  data?.main?.bodyHtml?.match(/(https?:\/\/.*\.(?:png|jpg))/)!.splice(-1, 1)[0]
