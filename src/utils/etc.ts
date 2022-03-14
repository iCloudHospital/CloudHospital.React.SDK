// 시작점, 목표지점 (엘리먼트) 인자로 넣으면,
// 상위요소를 연속적으로 탐색하여 boolean반환
export const SearchOnTheWayUp = (startEl: Element, targetEl: Element) => {
  let currentEl = startEl
  // console.log(currentEl)
  while (startEl !== targetEl) {
    // console.log(currentEl)
    if (currentEl.tagName === 'HTML') {
      return false
    }
    currentEl = currentEl.parentElement as Element
  }
  return true
}
