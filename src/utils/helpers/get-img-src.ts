export const getImgSrc = (data: string | undefined): string =>
  (data?.match(/(https?:\/\/.*\.(?:png|jpg))/) !== null
    ? data?.match(/(https?:\/\/.*\.(?:png|jpg))/)!.splice(-1, 1)[0]
    : '/the-guardian-logo.png') ?? '/the-guardian-logo.png'
