// NEET Biology Questions - Page Wise Analysis
// Complete working JavaScript with TurboScribe-style copy-then-open flow

const chaptersData = {
  "11": [
    { id: "ch1", name: "Chapter 1: The Living World", startPage: 3, endPage: 9 },
    { id: "ch2", name: "Chapter 2: Biological Classification", startPage: 10, endPage: 22 },
    { id: "ch3", name: "Chapter 3: Plant Kingdom", startPage: 23, endPage: 36 },
    { id: "ch4", name: "Chapter 4: Animal Kingdom", startPage: 37, endPage: 54 },
    { id: "ch5", name: "Chapter 5: Morphology of Flowering Plants", startPage: 57, endPage: 70 },
    { id: "ch6", name: "Chapter 6: Anatomy of Flowering Plants", startPage: 71, endPage: 78 },
    { id: "ch7", name: "Chapter 7: Structural Organisation in Animals", startPage: 79, endPage: 84 },
    { id: "ch8", name: "Chapter 8: Cell - The Unit of Life", startPage: 87, endPage: 103 },
    { id: "ch9", name: "Chapter 9: Biomolecules", startPage: 104, endPage: 119 },
    { id: "ch10", name: "Chapter 10: Cell Cycle and Cell Division", startPage: 120, endPage: 130 }
  ],
  "12": [
    { id: "ch1", name: "Chapter 1: Sexual Reproduction in Flowering Plants", startPage: 3, endPage: 25 },
    { id: "ch2", name: "Chapter 2: Human Reproduction", startPage: 26, endPage: 40 },
    { id: "ch3", name: "Chapter 3: Reproductive Health", startPage: 41, endPage: 50 }
  ]
};

const questionsData = {
  "11": {
    "ch1": {
      "3": {
        topics: "Characteristics of life, growth, reproduction, metabolism",
        questions: [
          {
            year: "NEET 2011",
            question: "Which aspect is an exclusive characteristic of living things?",
            options: [
              "(a) Isolated metabolic reactions in vitro",
              "(b) Increase in mass from inside only",
              "(c) Perception of environmental events and memory",
              "(d) Increase in mass by accumulation"
            ],
            answer: "(c) Perception of environmental events and memory"
          },
          {
            year: "NEET 2016",
            question: "Study the four statements (A-D) and select the two correct ones: (A) Definition of biological species was given by Ernst Mayr (B) Photoperiod does not affect reproduction in plants (C) Binomial nomenclature system was given by R.H. Whittaker (D) In unicellular organisms, reproduction is synonymous with growth",
            options: [
              "(a) B and C",
              "(b) C and D", 
              "(c) A and D",
              "(d) A and B"
            ],
            answer: "(c) A and D"
          }
        ]
      },
      "6": {
        topics: "Biodiversity and need for classification",
        questions: [
          {
            year: "NEET 2013",
            question: "The common characteristics between tomato and potato will be maximum at the level of their:",
            options: [
              "(a) Division",
              "(b) Class",
              "(c) Family",
              "(d) Genus"
            ],
            answer: "(d) Genus"
          }
        ]
      },
      "7": {
        topics: "Nomenclature and identification",
        questions: [
          {
            year: "NEET 2019",
            question: "Select the correctly written scientific name of Mango, which was first described by Carolus Linnaeus:",
            options: [
              "(a) Mangifera Indica",
              "(b) Mangifera Indica Car. Linn",
              "(c) Mangifera indica Linn",
              "(d) None"
            ],
            answer: "(c) Mangifera indica Linn"
          }
        ]
      }
    }
  },
  "12": {}
};

// DOM Elements
let classSelect, chapterSelect, pageSelect, contentArea, editionNote;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  classSelect = document.getElementById('class-select');
  chapterSelect = document.getElementById('chapter-select');
  pageSelect = document.getElementById('page-select');
  contentArea = document.getElementById('content-area');
  editionNote = document.getElementById('edition-note');
  
  // Add event listeners (no inline handlers - CSP safe)
  classSelect.addEventListener('change', loadChapters);
  chapterSelect.addEventListener('change', loadPages);
  pageSelect.addEventListener('change', loadQuestions);
  
  // Delegate button clicks
  contentArea.addEventListener('click', handleButtonClick);
});

function loadChapters() {
  // Reset dependent dropdowns
  chapterSelect.innerHTML = '<option value="">Select Chapter</option>';
  pageSelect.innerHTML = '<option value="">Select Page</option>';
  chapterSelect.disabled = true;
  pageSelect.disabled = true;
  contentArea.style.display = 'none';
  
  // Show/hide edition note
  editionNote.style.display = classSelect.value ? 'block' : 'none';
  
  if (classSelect.value) {
    const chapters = chaptersData[classSelect.value] || [];
    chapters.forEach(chapter => {
      const option = document.createElement('option');
      option.value = chapter.id;
      option.textContent = `${chapter.name} (p. ${chapter.startPage}–${chapter.endPage})`;
      chapterSelect.appendChild(option);
    });
    chapterSelect.disabled = false;
  }
}

function loadPages() {
  // Reset page dropdown
  pageSelect.innerHTML = '<option value="">Select Page</option>';
  pageSelect.disabled = true;
  contentArea.style.display = 'none';
  
  if (chapterSelect.value) {
    const selectedClass = classSelect.value;
    const chapters = chaptersData[selectedClass] || [];
    const selectedChapter = chapters.find(ch => ch.id === chapterSelect.value);
    
    if (selectedChapter) {
      for (let p = selectedChapter.startPage; p <= selectedChapter.endPage; p++) {
        const option = document.createElement('option');
        option.value = String(p);
        option.textContent = `Page ${p}`;
        pageSelect.appendChild(option);
      }
      pageSelect.disabled = false;
    }
  }
}

function loadQuestions() {
  if (!pageSelect.value) {
    contentArea.style.display = 'none';
    return;
  }
  
  const selectedClass = classSelect.value;
  const selectedChapter = chapterSelect.value;
  const selectedPage = pageSelect.value;
  
  contentArea.innerHTML = '';
  contentArea.style.display = 'block';
  
  const pageData = questionsData[selectedClass] && 
                   questionsData[selectedClass][selectedChapter] && 
                   questionsData[selectedClass][selectedChapter][selectedPage];
  
  if (pageData) {
    // Page info
    const pageInfo = document.createElement('div');
    pageInfo.className = 'page-info';
    pageInfo.innerHTML = `
      <h3>Page ${selectedPage}</h3>
      <p><strong>Topics covered:</strong> ${pageData.topics}</p>
      <p><strong>No. of questions found:</strong> ${pageData.questions.length}</p>
    `;
    contentArea.appendChild(pageInfo);
    
    // Questions
    pageData.questions.forEach((questionData, index) => {
      const qId = `answer-${selectedClass}-${selectedChapter}-${selectedPage}-${index}`;
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question-container';
      
      const optionsHTML = questionData.options.map(option => 
        `<div class="option">${option}</div>`
      ).join('');
      
      questionDiv.innerHTML = `
        <div class="question-year">${questionData.year}</div>
        <div class="question-text">${questionData.question}</div>
        <div class="options">${optionsHTML}</div>
        <div class="button-group">
          <button class="btn btn-answer" data-target="${qId}">Get Answer</button>
          <span class="arrow-indicator" aria-hidden="true">→</span>
          <button class="btn btn-copy" 
                  data-year="${questionData.year}"
                  data-question="${questionData.question}" 
                  data-options='${JSON.stringify(questionData.options)}'>
            Copy Prompt
          </button>
          <span class="arrow-indicator" aria-hidden="true">→</span>
          <button class="btn btn-explain">Open ChatGPT</button>
        </div>
        <div id="${qId}" class="answer-area">
          <strong>Answer:</strong> ${questionData.answer}
        </div>
      `;
      
      contentArea.appendChild(questionDiv);
    });
  } else {
    // No questions found
    const pageInfo = document.createElement('div');
    pageInfo.className = 'page-info';
    pageInfo.innerHTML = `
      <h3>Page ${selectedPage}</h3>
      <p><strong>Topics covered:</strong> Content analysis pending</p>
      <p><strong>No. of questions found:</strong> No questions detected</p>
    `;
    contentArea.appendChild(pageInfo);
    
    const noQuestionsMsg = document.createElement('div');
    noQuestionsMsg.className = 'no-questions';
    noQuestionsMsg.innerHTML = '<h3>No questions detected for this page</h3><p>Questions data will be added in future updates.</p>';
    contentArea.appendChild(noQuestionsMsg);
  }
}

function handleButtonClick(e) {
  const btn = e.target.closest('button');
  if (!btn) return;
  
  if (btn.classList.contains('btn-answer')) {
    const targetId = btn.dataset.target;
    const answerArea = document.getElementById(targetId);
    if (answerArea) {
      answerArea.style.display = answerArea.style.display === 'block' ? 'none' : 'block';
    }
  }
  
  if (btn.classList.contains('btn-copy')) {
    const year = btn.dataset.year || '';
    const question = btn.dataset.question || '';
    let options = [];
    try {
      options = JSON.parse(btn.dataset.options || '[]');
    } catch (e) {
      options = [];
    }
    const prompt = buildPrompt(year, question, options);
    copyToClipboard(btn, prompt);
  }
  
  if (btn.classList.contains('btn-explain')) {
    // Open ChatGPT in new tab (user activation required)
    window.open('https://chat.openai.com/', '_blank', 'noopener');
  }
}

function buildPrompt(year, question, options) {
  return [
    year,
    `Question: ${question}`,
    'Choices:',
    ...options
  ].join('
');
}

function copyToClipboard(btn, text) {
  const originalText = btn.textContent;
  
  const showSuccess = () => {
    btn.textContent = 'Copied!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  };
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(showSuccess)
      .catch(() => fallbackCopy(text, showSuccess));
  } else {
    fallbackCopy(text, showSuccess);
  }
}

function fallbackCopy(text, callback) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    callback();
  } catch (err) {
    console.error('Fallback copy failed:', err);
    alert('Copy failed. Please copy manually:

' + text);
  } finally {
    document.body.removeChild(textArea);
  }
}