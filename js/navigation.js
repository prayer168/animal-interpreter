export function initNavigation(tabIds, onVisit) {
  const buttons = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  panels.forEach(panel => { panel.tabIndex = -1; });
  const prev = document.querySelector('#prev-tab');
  const next = document.querySelector('#next-tab');
  const indicator = document.querySelector('#page-indicator');
  let current = 0;

  function showTab(id, focus = false) {
    const nextIndex = tabIds.indexOf(id);
    if (nextIndex < 0) return;
    current = nextIndex;

    buttons.forEach((button, index) => {
      const active = index === current;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel, index) => {
      const active = index === current;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });

    const currentButton = buttons[current];
    const currentName = currentButton.textContent.replace(/^\d+/, '').trim();
    const prevName = current > 0 ? buttons[current - 1].textContent.replace(/^\d+/, '').trim() : '已到起點';
    const nextName = current < buttons.length - 1 ? buttons[current + 1].textContent.replace(/^\d+/, '').trim() : '完成學習';
    prev.disabled = current === 0;
    next.disabled = current === buttons.length - 1;
    prev.querySelector('strong').textContent = prevName;
    next.querySelector('strong').textContent = nextName;
    indicator.textContent = `${String(current + 1).padStart(2, '0')} / ${String(buttons.length).padStart(2, '0')}・${currentName}`;
    currentButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onVisit(id);
    history.replaceState(null, '', `#${id}`);
    if (focus) panels[current].focus({ preventScroll: true });
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => showTab(tabIds[index], true));
    button.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let target = current;
      if (event.key === 'ArrowRight') target = (current + 1) % buttons.length;
      if (event.key === 'ArrowLeft') target = (current - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = buttons.length - 1;
      showTab(tabIds[target], true);
      buttons[target].focus();
    });
  });

  prev.addEventListener('click', () => current > 0 && showTab(tabIds[current - 1], true));
  next.addEventListener('click', () => current < tabIds.length - 1 && showTab(tabIds[current + 1], true));
  document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showTab(button.dataset.go, true)));

  const initial = location.hash.slice(1);
  showTab(tabIds.includes(initial) ? initial : tabIds[0]);
  return { showTab };
}
