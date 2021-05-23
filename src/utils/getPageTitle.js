import config from '@/config'

const title = config.title || '前端小菜鸟吖'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}