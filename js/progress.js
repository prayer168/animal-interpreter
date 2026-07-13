const KEY = 'animal-interpreter-progress-v1';

export function createProgress(total) {
  let visited = new Set(['mission']);
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (Array.isArray(saved)) visited = new Set(['mission', ...saved]);
  } catch { /* 使用預設進度 */ }

  const text = document.querySelector('#progress-text');
  const bar = document.querySelector('#progress-bar');

  function render() {
    const count = Math.min(visited.size, total);
    text.textContent = `${count} / ${total}`;
    bar.style.width = `${(count / total) * 100}%`;
  }

  function mark(tab) {
    visited.add(tab);
    localStorage.setItem(KEY, JSON.stringify([...visited]));
    render();
  }

  render();
  return { mark, visited };
}

