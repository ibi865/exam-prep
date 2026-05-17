// ============================================
// EXAM PREP – App Logic
// ============================================

(function () {
    'use strict';

    // --- State ---
    const BATCH_SIZE = 100;
    let currentBatch = null;          // 0-indexed batch number
    let userAnswers = {};             // { questionIndex: 'A'|'B'|'C'|'D' }
    let batchResults = {};            // Persisted: { batchIndex: { score, total, answers: { qIdx: 'A' } } }
    let currentBatchQuestions = [];   // Subset of ALL_QUESTIONS for active batch

    // Load saved results from localStorage
    const STORAGE_KEY = 'examPrepResults';
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) batchResults = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    function saveResults() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(batchResults));
        } catch (e) { /* ignore */ }
    }

    // --- DOM References ---
    const screens = {
        landing: document.getElementById('landing-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen'),
        review: document.getElementById('review-screen')
    };

    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // --- Helpers ---
    function getTotalBatches() {
        return Math.ceil(ALL_QUESTIONS.length / BATCH_SIZE) || 1;
    }

    function getBatchQuestions(batchIdx) {
        const start = batchIdx * BATCH_SIZE;
        return ALL_QUESTIONS.slice(start, start + BATCH_SIZE);
    }

    // --- Landing Screen ---
    function renderLanding() {
        const grid = document.getElementById('batch-grid');
        grid.innerHTML = '';
        const totalBatches = Math.max(getTotalBatches(), 7); // Show at least 7 batch slots

        let totalAttempted = 0, totalCorrect = 0;

        for (let i = 0; i < totalBatches; i++) {
            const questions = getBatchQuestions(i);
            const hasQuestions = questions.length > 0;
            const result = batchResults[i];

            if (result) {
                totalAttempted += result.total;
                totalCorrect += result.score;
            }

            const card = document.createElement('div');
            card.className = 'batch-card' + (result ? ' completed' : '') + (!hasQuestions ? ' locked' : '');
            
            const start = i * BATCH_SIZE + 1;
            const end = Math.min((i + 1) * BATCH_SIZE, ALL_QUESTIONS.length);

            card.innerHTML = `
                <div class="batch-card-content">
                    <div class="batch-number">Batch ${i + 1}</div>
                    <div class="batch-range">Q${start} – Q${hasQuestions ? end : start + BATCH_SIZE - 1}</div>
                    ${result ? `<div class="batch-score">Score: ${result.score}/${result.total} (${Math.round(result.score / result.total * 100)}%)</div>` : ''}
                    ${!result && hasQuestions ? '<div class="batch-status ready">Ready</div>' : ''}
                    ${!hasQuestions ? '<div class="batch-status no-questions">No questions yet</div>' : ''}
                </div>
            `;

            if (hasQuestions) {
                card.addEventListener('click', () => startBatch(i));
            }

            grid.appendChild(card);
        }

        // Update global stats
        document.getElementById('total-attempted').textContent = totalAttempted;
        document.getElementById('total-correct').textContent = totalCorrect;
        document.getElementById('overall-accuracy').textContent = totalAttempted > 0 
            ? Math.round(totalCorrect / totalAttempted * 100) + '%' 
            : '0%';
    }

    // --- Quiz Screen ---
    function startBatch(batchIdx) {
        currentBatch = batchIdx;
        currentBatchQuestions = getBatchQuestions(batchIdx);
        
        // If previously attempted, load those answers
        if (batchResults[batchIdx]) {
            userAnswers = { ...batchResults[batchIdx].answers };
        } else {
            userAnswers = {};
        }

        renderQuiz();
        showScreen('quiz');
    }

    function renderQuiz() {
        document.getElementById('batch-label').textContent = `Batch ${currentBatch + 1}`;
        const container = document.getElementById('questions-container');
        container.innerHTML = '';

        currentBatchQuestions.forEach((q, idx) => {
            const globalIdx = currentBatch * BATCH_SIZE + idx;
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `question-${idx}`;

            let optionsHTML = '';
            const letters = Object.keys(q.options);
            letters.forEach(letter => {
                const selected = userAnswers[idx] === letter ? ' selected' : '';
                optionsHTML += `
                    <button class="option-btn${selected}" data-q="${idx}" data-opt="${letter}" id="opt-${idx}-${letter}">
                        <span class="option-letter">${letter}</span>
                        <span class="option-text">${q.options[letter]}</span>
                    </button>
                `;
            });

            card.innerHTML = `
                <div class="question-header">
                    <span class="question-number">${globalIdx + 1}</span>
                    <p class="question-text">${q.q}</p>
                </div>
                <div class="options-list">
                    ${optionsHTML}
                </div>
            `;

            container.appendChild(card);
        });

        // Attach option click handlers
        container.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = parseInt(btn.dataset.q);
                const opt = btn.dataset.opt;

                // Deselect siblings
                container.querySelectorAll(`[data-q="${qIdx}"]`).forEach(b => b.classList.remove('selected'));
                
                // If clicking the same option, deselect it
                if (userAnswers[qIdx] === opt) {
                    delete userAnswers[qIdx];
                } else {
                    btn.classList.add('selected');
                    userAnswers[qIdx] = opt;
                }

                updateProgress();
            });
        });

        updateProgress();
    }

    function updateProgress() {
        const answered = Object.keys(userAnswers).length;
        const total = currentBatchQuestions.length;
        document.getElementById('progress-text').textContent = `${answered} / ${total} answered`;
        document.getElementById('progress-bar').style.width = `${(answered / total) * 100}%`;
        
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = answered === 0;
        
        if (answered === total) {
            submitBtn.textContent = 'Submit All';
            submitBtn.classList.add('pulse');
        } else {
            submitBtn.textContent = `Submit (${answered})`;
            submitBtn.classList.remove('pulse');
        }
    }

    // --- Results Screen ---
    function submitQuiz() {
        const total = currentBatchQuestions.length;
        const answered = Object.keys(userAnswers).length;

        if (answered === 0) return;

        // Confirm if not all answered
        if (answered < total) {
            const unanswered = total - answered;
            if (!confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) {
                return;
            }
        }

        // Calculate score
        let correctCount = 0;
        currentBatchQuestions.forEach((q, idx) => {
            if (userAnswers[idx] === q.answer) {
                correctCount++;
            }
        });

        // Save results
        batchResults[currentBatch] = {
            score: correctCount,
            total: total,
            answers: { ...userAnswers }
        };
        saveResults();

        // Show results
        showResults(correctCount, total);
    }

    function showResults(correct, total) {
        const wrong = Object.keys(userAnswers).length - correct;
        const skipped = total - Object.keys(userAnswers).length;
        const pct = Math.round((correct / total) * 100);

        document.getElementById('score-number').textContent = correct;
        document.getElementById('score-total').textContent = `/ ${total}`;
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('wrong-count').textContent = wrong;
        document.getElementById('skipped-count').textContent = skipped;
        document.getElementById('results-subtitle').textContent = `You answered ${correct} out of ${total} correctly`;

        // Score ring animation
        const circumference = 2 * Math.PI * 52; // r=52
        const offset = circumference - (correct / total) * circumference;
        const ring = document.getElementById('score-ring');
        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = circumference;
        
        // Title based on score
        let title = 'Keep Practicing!';
        if (pct >= 90) title = 'Outstanding! 🎉';
        else if (pct >= 75) title = 'Great Job! 💪';
        else if (pct >= 60) title = 'Good Effort! 👍';
        else if (pct >= 40) title = 'You Can Do Better! 📚';
        document.getElementById('results-title').textContent = title;

        // Color the ring based on score
        const gradStop1 = document.querySelector('#score-grad stop:first-child');
        const gradStop2 = document.querySelector('#score-grad stop:last-child');
        if (pct >= 75) {
            gradStop1.setAttribute('stop-color', '#00b894');
            gradStop2.setAttribute('stop-color', '#00cec9');
        } else if (pct >= 50) {
            gradStop1.setAttribute('stop-color', '#ffc048');
            gradStop2.setAttribute('stop-color', '#fdcb6e');
        } else {
            gradStop1.setAttribute('stop-color', '#ff6b6b');
            gradStop2.setAttribute('stop-color', '#ee5a24');
        }

        showScreen('results');

        // Animate ring after screen transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ring.style.strokeDashoffset = offset;
            });
        });
    }

    // --- Review Screen ---
    function renderReview(filter = 'all') {
        const container = document.getElementById('review-container');
        container.innerHTML = '';
        document.getElementById('review-batch-label').textContent = `Review – Batch ${currentBatch + 1}`;

        currentBatchQuestions.forEach((q, idx) => {
            const globalIdx = currentBatch * BATCH_SIZE + idx;
            const userAns = userAnswers[idx] || null;
            const isCorrect = userAns === q.answer;
            const isSkipped = !userAns;

            // Apply filter
            if (filter === 'correct' && !isCorrect) return;
            if (filter === 'wrong' && (isCorrect || isSkipped)) return;
            if (filter === 'skipped' && !isSkipped) return;

            const statusClass = isSkipped ? 'review-skipped' : (isCorrect ? 'review-correct' : 'review-wrong');
            const badgeClass = isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'wrong');
            const badgeText = isSkipped ? 'Skipped' : (isCorrect ? 'Correct' : 'Wrong');

            const card = document.createElement('div');
            card.className = `question-card ${statusClass}`;

            let optionsHTML = '';
            const letters = Object.keys(q.options);
            letters.forEach(letter => {
                let extraClass = 'review-mode';
                if (letter === q.answer) {
                    extraClass += ' review-correct-answer';
                } else if (letter === userAns && !isCorrect) {
                    extraClass += ' review-wrong-answer';
                }
                optionsHTML += `
                    <div class="option-btn ${extraClass}">
                        <span class="option-letter">${letter}</span>
                        <span class="option-text">${q.options[letter]}</span>
                    </div>
                `;
            });

            card.innerHTML = `
                <div class="question-header">
                    <span class="question-number">${globalIdx + 1}</span>
                    <p class="question-text">${q.q}</p>
                    <span class="review-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="options-list">
                    ${optionsHTML}
                </div>
                ${!isCorrect ? `<div class="correct-answer-note">✓ Correct answer: ${q.answer}. ${q.options[q.answer]}</div>` : ''}
            `;

            container.appendChild(card);
        });

        if (container.children.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <p style="font-size: 48px; margin-bottom: 16px;">🎯</p>
                    <p style="font-size: 16px; font-weight: 600;">No questions match this filter</p>
                </div>
            `;
        }
    }

    // --- Event Listeners ---

    // Submit
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);

    // Back to landing from quiz
    document.getElementById('back-btn').addEventListener('click', () => {
        if (Object.keys(userAnswers).length > 0) {
            if (!confirm('Your progress will be lost if you haven\'t submitted. Go back?')) return;
        }
        renderLanding();
        showScreen('landing');
    });

    // Back to batches from results
    document.getElementById('back-to-batches-btn').addEventListener('click', () => {
        renderLanding();
        showScreen('landing');
    });

    // Review answers
    document.getElementById('review-btn').addEventListener('click', () => {
        renderReview('all');
        showScreen('review');
    });

    // Back from review to results
    document.getElementById('review-back-btn').addEventListener('click', () => {
        showScreen('results');
    });

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderReview(tab.dataset.filter);
        });
    });

    // Scroll buttons
    document.getElementById('scroll-top-btn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('scroll-bottom-btn').addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+Enter to submit
        if (e.ctrlKey && e.key === 'Enter') {
            const submitBtn = document.getElementById('submit-btn');
            if (!submitBtn.disabled && screens.quiz.classList.contains('active')) {
                submitQuiz();
            }
        }
    });

    // --- Initialize ---
    renderLanding();
})();
