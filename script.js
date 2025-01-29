(() => {
  window.addEventListener('load', function() {
    const acordionItemsEl = document.querySelector('.acordion')

    if (acordionItemsEl) {
        [...acordionItemsEl.children].forEach(itemEl => {
          const headerEl = itemEl.querySelector('.acordion-header')

          if (headerEl) {
            headerEl.addEventListener('click', function() {
              const collapsibleEl = headerEl.parentElement
                .querySelector('.accordion-collapsible')

              if (collapsibleEl) {
                const EXPANDED_CLASS = 'expanded'
                const MARGIN = 6
                const contentEl = collapsibleEl.querySelector('.accordion-content')
                const { height } = contentEl.getBoundingClientRect()

                if (collapsibleEl.classList.contains(EXPANDED_CLASS)) {
                  collapsibleEl.setAttribute('style', '')
                  collapsibleEl.classList.remove(EXPANDED_CLASS)
                } else {
                  collapsibleEl.setAttribute('style', `height: ${height + MARGIN}px`)
                  collapsibleEl.classList.add(EXPANDED_CLASS)
                }
              }
            }, false)
          }
        })
    }
  })
})()
