export function initQuiz(questions, showTab) {
  const container = document.querySelector('#quiz-container');
  const result = document.querySelector('#quiz-result');
  const scoreLabel = document.querySelector('#quiz-score');
  let index = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    answered = false;
    result.hidden = true;
    container.hidden = false;
    const question = questions[index];
    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = `
      <p class="quiz-progress-line">第 ${index + 1} 題，共 ${questions.length} 題</p>
      <article class="quiz-card">
        <div class="quiz-labels"><span>${question.type}</span><span>${question.level}</span></div>
        <h3>${question.question}</h3>
        <div class="quiz-options">
          ${question.options.map((option, i) => `<button class="quiz-option" type="button" data-answer="${i}"><span>${letters[i]}</span>${option}</button>`).join('')}
        </div>
        <div class="quiz-feedback" role="status" hidden></div>
      </article>`;
    container.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => answer(Number(button.dataset.answer))));
    scoreLabel.textContent = `${score} / ${index}`;
  }

  function answer(selected) {
    if (answered) return;
    answered = true;
    const question = questions[index];
    const buttons = [...container.querySelectorAll('[data-answer]')];
    buttons.forEach((button, i) => {
      button.disabled = true;
      if (i === question.answer) button.classList.add('is-correct');
      if (i === selected && i !== question.answer) button.classList.add('is-wrong');
    });
    const correct = selected === question.answer;
    if (correct) score += 1;
    scoreLabel.textContent = `${score} / ${index + 1}`;
    const feedback = container.querySelector('.quiz-feedback');
    feedback.hidden = false;
    feedback.innerHTML = `
      <strong>${correct ? '答對了！你有抓到證據。' : '再想一想：答案要能連回可觀察的證據。'}</strong>
      <p>${question.explanation}</p>
      <div class="quiz-actions">
        <button class="secondary-button" type="button" data-review>回看教材</button>
        <button class="primary-button" type="button" data-next>${index === questions.length - 1 ? '查看結果' : '下一題'}</button>
      </div>`;
    feedback.querySelector('[data-review]').addEventListener('click', () => showTab(question.reviewTab, true));
    feedback.querySelector('[data-next]').addEventListener('click', nextQuestion);
  }

  function nextQuestion() {
    if (index < questions.length - 1) {
      index += 1;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    container.hidden = true;
    result.hidden = false;
    const message = score >= 9 ? '金牌解說員：你的觀察與推理很可靠！' : score >= 7 ? '合格解說員：再回看錯題對應的活動，就更完整了。' : '見習解說員：先用「觀察—推論—證據」句型重新整理一次。';
    result.innerHTML = `<p class="section-kicker">考核完成</p><span class="result-number">${score} / ${questions.length}</span><h3>${message}</h3><p>記住：好的解說會說明證據，也會承認推論的限制。</p><button class="primary-button" type="button" id="quiz-restart">重新挑戰</button>`;
    result.querySelector('#quiz-restart').addEventListener('click', () => { index = 0; score = 0; renderQuestion(); });
  }

  renderQuestion();
}

