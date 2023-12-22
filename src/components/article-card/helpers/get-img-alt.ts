export const getImgAlt = (data: { main: { bodyHtml: string } }): string =>
  data?.main?.bodyHtml?.match(/alt=["|'].*?["|']/) !== null
    ? data?.main?.bodyHtml
        ?.match(/alt=["|'].*?["|']/)!
        .splice(-1, 1)[0]
        .slice(4)
        .split('"')[1]
    : 'theGuardianPic'
