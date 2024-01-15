import moment from 'moment'

export const getArticleDate = (date: string): string =>
  moment(new Date(date)).format('DD.MM.YYYY h:mm a')
