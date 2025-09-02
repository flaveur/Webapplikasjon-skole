interface Quiz {
  id: string;
  title: string;
  category: string;
}

interface Answer{
  id: string;
  quizId: string;
  text: string;
}

const quizzes: Quiz[] = [];
const answers: Answer[] = [];

function addQuiz(quiz:Quiz): void{
  if (quizzes.some(q => q.id === quiz.id)) {
    throw new Error('Quiz med id ${quiz.id}finnes allerede')
  }
  quizzes.push(quiz);
}''function getQuizById(id: string): Quiz | undefined {
  return quizzes.find (q => q.id === id);

}

function filterByCategory(category: string): Quiz[] {
  return quizzes.filter(q => q.category == category);
}

function printQuizAnswersCount(): void{
  quizzes.forEach(q => {
    const count = getQuizAnswers (q.id).length;
    console.log('${q.title} [${q.category}] - ${count} svar')
  });
}


/*// Eksempelbruk:
addQuiz({ id: 'q1', title: 'Hovedsteder', category: 'geografi' });
addQuiz({ id: 'q2', title: 'JS Basics', category: 'tech' });

answers.push(
  { id: 'a1', quizId: 'q1', text: 'Oslo' },
  { id: 'a2', quizId: 'q1', text: 'Stockholm' },
  { id: 'a3', quizId: 'q2', text: 'let og const' },
);

console.log(getQuizById('q1'));            // Quiz | undefined
console.log(filterByCategory('tech'));     // Quiz[]
console.log(getQuizAnswers('q1'));         // Answer[]
printQuizAnswersCount();                   // logger antall svar per quiz*/