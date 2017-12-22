export function generateTitle(title) {
  return this.$t('route.' + title) // $t :this method from vue-i18n ,inject in @/lang/index.js
}
/**
 * 国际化
 * @author heshengjin
 * @date 2017-12-22
 * @param text
 * @returns {TranslateResult|*}
 */
export function selfi18n(text) {
  return this.$t('selfText.' + text) // $t :this method from vue-i18n ,inject in @/lang/index.js
}
