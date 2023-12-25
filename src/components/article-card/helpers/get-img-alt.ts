export const getImgAlt = (data: string | undefined): string =>
  (data?.match(/alt=["|'].*?["|']/) !== null
    ? data
        ?.match(/alt=["|'].*?["|']/)!
        .splice(-1, 1)[0]
        .slice(4)
        .split('"')[1]
    : 'theGuardianPic') ?? 'theGuardianPic'
