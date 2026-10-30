const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const rawPath = path.join(__dirname, '..', 'user_prompt_raw.txt');
const raw = fs.readFileSync(rawPath, 'utf8');

const lines = raw.split('\n');
const sections = [];
let currentSection = null;
let currentMainTopic = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Stop when pedagogy instructions start
  if (trimmed.startsWith('## 📚') || trimmed.startsWith('## ??') || trimmed.startsWith('⚡ **ابدأ الآن')) {
    break;
  }

  // Section header: ## 1. القسم الأول: ...
  const sectionMatch = trimmed.match(/^##\s*(\d+)\.\s*(.+)/);
  if (sectionMatch) {
    const secId = parseInt(sectionMatch[1], 10);
    const secTitle = sectionMatch[2].trim();
    currentSection = {
      id: secId,
      title: secTitle,
      mainTopics: []
    };
    sections.push(currentSection);
    currentMainTopic = null;
    continue;
  }

  // Main topic: 1. مقدمة في ...
  const mainTopicMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
  if (mainTopicMatch && currentSection) {
    const topicNum = parseInt(mainTopicMatch[1], 10);
    const topicTitle = mainTopicMatch[2].trim();
    currentMainTopic = {
      id: topicNum,
      title: topicTitle,
      subtopics: []
    };
    currentSection.mainTopics.push(currentMainTopic);
    continue;
  }

  // Subtopic: a. ما هو ...
  const subtopicMatch = trimmed.match(/^([a-z]|[0-9]+|[ivxlcdm]+)\.\s+(.+)/i);
  if (subtopicMatch && currentMainTopic) {
    const subIdStr = subtopicMatch[1];
    const subTitle = subtopicMatch[2].trim();
    currentMainTopic.subtopics.push({
      letter: subIdStr,
      title: subTitle
    });
    continue;
  }
}

console.log('Parsed sections count:', sections.length);
let totalMain = 0;
let totalSub = 0;
sections.forEach(s => {
  totalMain += s.mainTopics.length;
  s.mainTopics.forEach(m => {
    totalSub += m.subtopics.length;
  });
});
console.log('Total main topics:', totalMain);
console.log('Total subtopics:', totalSub);

fs.writeFileSync(path.join(dataDir, 'roadmapRaw.json'), JSON.stringify(sections, null, 2), 'utf8');
console.log('Successfully written to src/data/roadmapRaw.json');
