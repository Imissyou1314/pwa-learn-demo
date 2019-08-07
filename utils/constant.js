import Vue from 'vue'
import * as mappers from '~/utils/mapper'

function toText(input, type) {
  const mapper = mappers[type]
  return mapper[input]
}

export function formatDate(timestamp, fmt = 'yyy-MM-dd HH:mm:ss') {
  if (!Number.parseInt(timestamp)) {
    return timestamp
  }

  const date = new Date(Number(timestamp))
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'f+': date.getMilliseconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : _pad(str))
    }
  }
  return fmt
}

const filters = {
  toText,
  formatDate
}

function registerFilters() {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

registerFilters()
