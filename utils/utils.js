
function isIOS () {
  let u = navigator.userAgent, app = navigator.appVersion
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return isIOS
}

function isAndroid () {
  let u = navigator.userAgent, app = navigator.appVersion
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
}

function changeIosBlur () {  // ios键盘唤起，键盘收起以后页面不归位
  if (isIOS()) {
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
      window.scroll(0, Math.max(scrollHeight - 1, 0))
    }, 200)
  }
}


function changeAndroidFocus () {  // 安卓弹出的键盘遮盖文本框
  if (isAndroid()) {
    setTimeout(() => {
      document.activeElement.scrollIntoViewNeeded()
      document.activeElement.scrollIntoView()
    }, 500)
  }
}

export {
  isAndroid,
  isIOS,
  changeIosBlur,
  changeAndroidFocus
}