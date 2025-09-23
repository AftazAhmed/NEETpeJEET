// NEET Biology Questions - Page Wise Analysis
// Complete data with all chapters for Class 11 & 12

const chaptersData = {
  "11": [
    { id: "ch1",  name: "Chapter 1: The Living World",                         startPage: 3,   endPage: 9  },
    { id: "ch2",  name: "Chapter 2: Biological Classification",                 startPage: 10,  endPage: 22 },
    { id: "ch3",  name: "Chapter 3: Plant Kingdom",                             startPage: 23,  endPage: 36 },
    { id: "ch4",  name: "Chapter 4: Animal Kingdom",                            startPage: 37,  endPage: 54 },
    { id: "ch5",  name: "Chapter 5: Morphology of Flowering Plants",            startPage: 57,  endPage: 70 },
    { id: "ch6",  name: "Chapter 6: Anatomy of Flowering Plants",               startPage: 71,  endPage: 78 },
    { id: "ch7",  name: "Chapter 7: Structural Organisation in Animals",        startPage: 79,  endPage: 84 },
    { id: "ch8",  name: "Chapter 8: Cell - The Unit of Life",                   startPage: 87,  endPage: 103 },
    { id: "ch9",  name: "Chapter 9: Biomolecules",                              startPage: 104, endPage: 119 },
    { id: "ch10", name: "Chapter 10: Cell Cycle and Cell Division",             startPage: 120, endPage: 130 },
    { id: "ch11", name: "Chapter 11: Photosynthesis in Higher Plants",          startPage: 133, endPage: 152 },
    { id: "ch12", name: "Chapter 12: Respiration in Plants",                    startPage: 153, endPage: 165 },
    { id: "ch13", name: "Chapter 13: Plant Growth and Development",             startPage: 166, endPage: 180 },
    { id: "ch14", name: "Chapter 14: Breathing and Exchange of Gases",          startPage: 183, endPage: 192 },
    { id: "ch15", name: "Chapter 15: Body Fluids and Circulation",              startPage: 193, endPage: 204 },
    { id: "ch16", name: "Chapter 16: Excretory Products and their Elimination", startPage: 205, endPage: 216 },
    { id: "ch17", name: "Chapter 17: Locomotion and Movement",                  startPage: 217, endPage: 229 },
    { id: "ch18", name: "Chapter 18: Neural Control and Coordination",          startPage: 230, endPage: 238 },
    { id: "ch19", name: "Chapter 19: Chemical Coordination and Integration",    startPage: 239, endPage: 250 }
  ],
  "12": [
    { id: "ch1",  name: "Chapter 1: Sexual Reproduction in Flowering Plants",   startPage: 3,   endPage: 25  },
    { id: "ch2",  name: "Chapter 2: Human Reproduction",                        startPage: 26,  endPage: 40  },
    { id: "ch3",  name: "Chapter 3: Reproductive Health",                       startPage: 41,  endPage: 50  },
    { id: "ch4",  name: "Chapter 4: Principles of Inheritance and Variation",   startPage: 53,  endPage: 78  },
    { id: "ch5",  name: "Chapter 5: Molecular Basis of Inheritance",            startPage: 79,  endPage: 109 },
    { id: "ch6",  name: "Chapter 6: Evolution",                                  startPage: 110, endPage: 126 },
    { id: "ch7",  name: "Chapter 7: Human Health and Disease",                  startPage: 129, endPage: 148 },
    { id: "ch8",  name: "Chapter 8: Microbes in Human Welfare",                 startPage: 149, endPage: 160 },
    { id: "ch9",  name: "Chapter 9: Biotechnology: Principles and Processes",   startPage: 163, endPage: 176 },
    { id: "ch10", name: "Chapter 10: Biotechnology and Its Applications",       startPage: 177, endPage: 187 },
    { id: "ch11", name: "Chapter 11: Organisms and Populations",                startPage: 190, endPage: 204 },
    { id: "ch12", name: "Chapter 12: Ecosystem",                                startPage: 205, endPage: 215 },
    { id: "ch13", name: "Chapter 13: Biodiversity and Conservation",            startPage: 216, endPage: 227 }
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
          },
          {
            year: "AIPMT 2012",
            question: "Which organism is correctly named according to international rules?",
            options: [
              "(a) Mangifera indica",
              "(b) mangifera indica",
              "(c) Mangifera Indica",
              "(d) MANGIFERA INDICA"
            ],
            answer: "(a) Mangifera indica"
          },
          {
            year: "NEET 2016",
            question: "Nomenclature is governed by certain universal rules. Which one is contrary to the rules?",
            options: [
              "(a) Biological names can be written in any language",
              "(b) First word represents genus, second is specific epithet",
              "(c) Names are written in Latin and italicized when printed",
              "(d) When handwritten, names are underlined"
            ],
            answer: "(a) Biological names can be written in any language"
          },
          {
            year: "NEET 2019",
            question: "Which of the following is against the rules of ICBN?",
            options: [
              "(a) Handwritten scientific names should be underlined",
              "(b) Every species should have a generic name and a specific epithet",
              "(c) Scientific names are in Latin and should be italicized when printed",
              "(d) Generic and specific names should be written starting with small letters"
            ],
            answer: "(d) Generic and specific names should be written starting with small letters"
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