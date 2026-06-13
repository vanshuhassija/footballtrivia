import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const POINT_TIERS = {
  Difficult: { reward: 20, penalty: 15, label: '+20 / -15', tone: 'hard' },
  Medium: { reward: 10, penalty: 10, label: '+10 / -10', tone: 'mid' },
  Easy: { reward: 5, penalty: 5, label: '+5 / -5', tone: 'easy' },
};

const QUESTION_DATA = [
  {
    category: 'Football Rules',
    short: 'Rules',
    accent: '#168a54',
    questions: [
      {
        question:
          'During the start of the match or during the resumption after a conceded goal, a footballer kicks the ball with a first touch and the ball hits the net. Will a goal be awarded?',
        answer: 'Yes',
        difficulty: 'Easy',
      },
      {
        question:
          "A football player makes a throw-in and the ball, without touching anyone, hits the player's own net.",
        answer: 'A corner kick is awarded to the opposing team.',
        difficulty: 'Difficult',
      },
      {
        question:
          'After a shot on goal, the ball bursts before it crosses the goal line. Will a goal be awarded?',
        answer:
          'The goal is disallowed. If the ball was in the penalty area when play was stopped, the ball is dropped for the goalkeeper, otherwise for the team that last touched it.',
        difficulty: 'Difficult',
      },
      {
        question:
          'The goalkeeper takes the goal kick, and the ball deflects from the referee, who has not left the penalty area, into own goal.',
        answer: 'Play is restarted with a dropped ball for the goalkeeper.',
        difficulty: 'Difficult',
      },
      {
        question:
          'The goalkeeper took possession of the ball in his own penalty area, but during the allowed game situation with the opposing team, he fell into his own net with the ball.',
        answer: 'The goal is awarded.',
        difficulty: 'Medium',
      },
      {
        question:
          'A football player of the attacking team rests upon his team-mate to jump higher and reach the ball.',
        answer:
          'An indirect free kick is awarded and the player unfairly gaining an advantage is cautioned for unsporting behaviour if the teammate is deliberately involved.',
        difficulty: 'Medium',
      },
      {
        question:
          'During the indirect free kick, the ball crosses the goal line of the opponents without touching any of the players.',
        answer: 'A goal kick is awarded to the defending team.',
        difficulty: 'Easy',
      },
      {
        question:
          'During penalty shoot-outs, the first 5 rounds of kicks did not decide the winner. The series continues, but one team had two red cards before the shoot-out. What should a referee do?',
        answer: 'He needs to instruct the other team to remove two players from the list.',
        difficulty: 'Medium',
      },
    ],
  },
  {
    category: 'Career Path',
    short: 'Career',
    accent: '#1f7ed0',
    questions: [
      {
        question: 'EYblNPljYmxsLaDGOtcB_kJKUKYkUQOeXvsh3lDQOhSDloANUVUUvEAtMH',
        answer: 'Messi',
        difficulty: 'Easy',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1GTM0LOwpjNUiphl3_HbBmGl-dRoIXjuB=w1287-h935-iv1?auditContext=prefetch',
        answer: 'Mohamed Salah',
        difficulty: 'Easy',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1HbLT-WNC10mgVb6qx8UYKOBwnSBTVrSR=w1287-h935-iv2?auditContext=prefetch',
        answer: 'Paul Pogba',
        difficulty: 'Medium',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1XhL_gul72vnMUOF5WC-dn-SM4A2inttJ=w1287-h935-iv1?auditContext=prefetch',
        answer: 'Luka Modric',
        difficulty: 'Medium',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1XshyWMkeIkThPDc4y-0hwHMo1IDXvcOo=w1287-h935-iv1?auditContext=prefetch',
        answer: 'Romelu Lukaku',
        difficulty: 'Difficult',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1tasA1Z-jkcSzYBYZZ4nLG4NBS5kv_ohH=w1287-h935-iv1?auditContext=prefetch',
        answer: 'Joao Felix',
        difficulty: 'Medium',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1MbdhVEIQtxkyw14B2WKbSiselmTMnuQb=w1287-h935-iv1?auditContext=prefetch',
        answer: 'David Beckham',
        difficulty: 'Medium',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/19LfCzhDm5T5hf2yvlIriOIFH9TxfBSnV=w1287-h935-iv2?auditContext=prefetch',
        answer: 'Raphinha',
        difficulty: 'Medium',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/1S0TjOkgm3hn6sNTKHIiRAf1P_8p2cy21=w1287-h935-iv2?auditContext=prefetch',
        answer: 'David Luiz',
        difficulty: 'Difficult',
      },
      {
        question:
          'https://lh3.google.com/u/2/d/15SgN0tDXDCKenrf8vHUw8uFybA50vis9=w1287-h935-iv2?auditContext=prefetch',
        answer: 'Harry Kewell',
        difficulty: 'Difficult',
      },
    ],
  },
  {
    category: 'Records',
    short: 'Records',
    accent: '#cf3f30',
    questions: [
      {
        question:
          "This player holds the record for the most goals in men's international football. Who is he?",
        answer: 'Cristiano Ronaldo',
        difficulty: 'Easy',
      },
      {
        question: 'This nation is the only five-time FIFA World Cup winner. Name the country.',
        answer: 'Brazil',
        difficulty: 'Easy',
      },
      {
        question: "With 8 Ballon d'Or awards, this player holds the record for the most wins. Who is he?",
        answer: 'Lionel Messi',
        difficulty: 'Easy',
      },
      {
        question:
          'No club has won more UEFA Champions League titles than this Spanish giant. Name the club.',
        answer: 'Real Madrid',
        difficulty: 'Easy',
      },
      {
        question:
          'Which goalkeeper holds the record for the most clean sheets in Premier League history?',
        answer: 'Petr Cech',
        difficulty: 'Medium',
      },
      {
        question: 'Which player scored the fastest hat-trick in Premier League history?',
        answer: 'Sadio Mane',
        difficulty: 'Medium',
      },
      {
        question: 'Which player has the most assists in Premier League history?',
        answer: 'Ryan Giggs',
        difficulty: 'Medium',
      },
      {
        question:
          'Which player holds the record for the most goals scored in a single FIFA World Cup tournament?',
        answer: 'Just Fontaine',
        difficulty: 'Difficult',
      },
      {
        question:
          'Which team recorded the biggest victory margin in FIFA World Cup history, 10-1?',
        answer: 'Hungary',
        difficulty: 'Difficult',
      },
      {
        question:
          'This player holds the unwanted record for the most red cards in football history. Who is he?',
        answer: 'Gerardo Bedoya, 46 times',
        difficulty: 'Difficult',
      },
      {
        question: 'Which player has won the most FIFA World Cup titles?',
        answer: 'Pele',
        difficulty: 'Medium',
      },
      {
        question: 'Which player was the youngest goalscorer in FIFA World Cup history?',
        answer: 'Pele',
        difficulty: 'Difficult',
      },
    ],
  },
  {
    category: 'World Cup Moments',
    short: 'World Cup',
    accent: '#c59a20',
    questions: [
      {
        question:
          'Which player scored the infamous "Hand of God" goal against England in the 1986 World Cup?',
        answer: 'Diego Maradona',
        difficulty: 'Easy',
      },
      {
        question:
          'Which player was sent off in the 2006 World Cup Final after headbutting Marco Materazzi?',
        answer: 'Zinedine Zidane',
        difficulty: 'Easy',
      },
      {
        question: 'Which nation defeated Brazil 7-1 in the 2014 World Cup semi-final?',
        answer: 'Germany',
        difficulty: 'Easy',
      },
      {
        question: 'Which player scored the winning goal in the 2010 World Cup Final?',
        answer: 'Andres Iniesta',
        difficulty: 'Easy',
      },
      {
        question: 'Which nation shocked Argentina 2-1 in the group stage of the 2022 World Cup?',
        answer: 'Saudi Arabia',
        difficulty: 'Medium',
      },
      {
        question: 'Which player scored the extra-time winner in the 2014 World Cup Final?',
        answer: 'Mario Gotze',
        difficulty: 'Medium',
      },
      {
        question:
          'Which goalkeeper made the crucial save against Kolo Muani in the final moments of the 2022 World Cup Final?',
        answer: 'Emiliano Martinez',
        difficulty: 'Medium',
      },
      {
        question:
          'Which player scored a hat-trick in the 2022 World Cup Final but still ended up on the losing side?',
        answer: 'Kylian Mbappe',
        difficulty: 'Medium',
      },
      {
        question:
          'Which player became famous for biting Giorgio Chiellini during the 2014 World Cup?',
        answer: 'Luis Suarez',
        difficulty: 'Medium',
      },
      {
        question:
          "Which goalkeeper's mistake allowed Robert Green to concede a famous goal against the USA in 2010?",
        answer: 'Robert Green',
        difficulty: 'Medium',
      },
      {
        question:
          'Which player scored the fastest goal in World Cup history after just 11 seconds in 2002?',
        answer: 'Hakan Sukur',
        difficulty: 'Difficult',
      },
      {
        question:
          'Which Cameroonian striker became the oldest goalscorer in World Cup history at age 42?',
        answer: 'Roger Milla',
        difficulty: 'Difficult',
      },
      {
        question: 'Which nation won the first-ever FIFA World Cup in 1930?',
        answer: 'Uruguay',
        difficulty: 'Medium',
      },
    ],
  },
].map((category) => ({
  ...category,
  questions: category.questions.map((question, index) => ({
    ...question,
    id: `${category.short}-${index}`,
  })),
}));

const urlPattern = /^https?:\/\//i;
const STORAGE_KEY = 'football-trivia-game-state';

function isImagePrompt(text) {
  return urlPattern.test(text.trim());
}

function findQuestionById(questionId) {
  for (const category of QUESTION_DATA) {
    const question = category.questions.find((item) => item.id === questionId);

    if (question) {
      return {
        ...question,
        category: category.category,
        accent: category.accent,
        points: POINT_TIERS[question.difficulty],
      };
    }
  }

  return null;
}

function loadStoredGameState() {
  try {
    if (typeof window === 'undefined') {
      return { usedIds: [], activeQuestion: null, answerVisible: false };
    }

    const rawState = window.localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return { usedIds: [], activeQuestion: null, answerVisible: false };
    }

    const parsedState = JSON.parse(rawState);
    const activeQuestion = parsedState.activeQuestionId
      ? findQuestionById(parsedState.activeQuestionId)
      : null;

    return {
      usedIds: Array.isArray(parsedState.usedIds) ? parsedState.usedIds : [],
      activeQuestion,
      answerVisible: Boolean(parsedState.answerVisible && activeQuestion),
    };
  } catch {
    return { usedIds: [], activeQuestion: null, answerVisible: false };
  }
}

function App() {
  const [storedGameState] = useState(loadStoredGameState);
  const [usedIds, setUsedIds] = useState(storedGameState.usedIds);
  const [activeQuestion, setActiveQuestion] = useState(storedGameState.activeQuestion);
  const [answerVisible, setAnswerVisible] = useState(storedGameState.answerVisible);

  const totalQuestions = useMemo(
    () => QUESTION_DATA.reduce((sum, category) => sum + category.questions.length, 0),
    [],
  );
  const completedCount = usedIds.length;

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        usedIds,
        activeQuestionId: activeQuestion?.id ?? null,
        answerVisible,
      }),
    );
  }, [activeQuestion, answerVisible, usedIds]);

  const pickQuestion = (category, difficulty) => {
    const nextQuestion = category.questions.find(
      (question) => question.difficulty === difficulty && !usedIds.includes(question.id),
    );

    if (!nextQuestion) {
      return;
    }

    setActiveQuestion({
      ...nextQuestion,
      category: category.category,
      accent: category.accent,
      points: POINT_TIERS[difficulty],
    });
    setAnswerVisible(false);
  };

  const revealAnswer = () => {
    if (!activeQuestion) {
      return;
    }

    setAnswerVisible(true);
    setUsedIds((currentIds) =>
      currentIds.includes(activeQuestion.id) ? currentIds : [...currentIds, activeQuestion.id],
    );
  };

  const closeQuestion = () => {
    setActiveQuestion(null);
    setAnswerVisible(false);
  };

  const resetBoard = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setUsedIds([]);
    setActiveQuestion(null);
    setAnswerVisible(false);
  };

  return (
    <main className="app-shell">
      <section className="scoreboard">
        <div>
          <p className="eyebrow">Matchday trivia board</p>
          <h1>Football Trivia</h1>
        </div>
        <div className="progress-card" aria-label={`${completedCount} of ${totalQuestions} questions played`}>
          <span className="progress-number">{completedCount}</span>
          <span className="progress-copy">played of {totalQuestions}</span>
          <div className="progress-track">
            <span style={{ width: `${(completedCount / totalQuestions) * 100}%` }} />
          </div>
        </div>
        <button className="reset-button" onClick={resetBoard} type="button">
          Reset board
        </button>
      </section>

      <section className="pitch-board" aria-label="Football trivia categories">
        {QUESTION_DATA.map((category) => (
          <CategoryColumn
            category={category}
            key={category.category}
            onPick={pickQuestion}
            usedIds={usedIds}
          />
        ))}
      </section>

      {activeQuestion && (
        <QuestionModal
          answerVisible={answerVisible}
          onClose={closeQuestion}
          onReveal={revealAnswer}
          question={activeQuestion}
        />
      )}
    </main>
  );
}

function CategoryColumn({ category, onPick, usedIds }) {
  return (
    <article className="category-column" style={{ '--accent': category.accent }}>
      <header>
        <span className="column-kicker">{category.short}</span>
        <h2>{category.category}</h2>
      </header>

      <div className="point-stack">
        {Object.entries(POINT_TIERS).map(([difficulty, tier]) => {
          const available = category.questions.filter(
            (question) => question.difficulty === difficulty && !usedIds.includes(question.id),
          ).length;
          const total = category.questions.filter((question) => question.difficulty === difficulty).length;
          const disabled = available === 0;

          return (
            <button
              className={`point-button ${tier.tone}`}
              disabled={disabled}
              key={difficulty}
              onClick={() => onPick(category, difficulty)}
              type="button"
            >
              <span className="difficulty">{difficulty}</span>
              <strong>{tier.label}</strong>
              <span className="available">
                {disabled ? 'Cleared' : `${available}/${total} left`}
              </span>
            </button>
          );
        })}
      </div>
    </article>
  );
}

function QuestionModal({ answerVisible, onClose, onReveal, question }) {
  const isImage = isImagePrompt(question.question);

  return (
    <section className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Trivia question">
      <article className="question-card" style={{ '--accent': question.accent }}>
        <div className="question-topline">
          <span>{question.category}</span>
          <span>{question.difficulty}</span>
          <span>{question.points.label}</span>
        </div>

        <div className="question-body">
          {isImage ? (
            <ImageClue question={question} />
          ) : (
            <div className="text-question">
              <p>{question.question}</p>
            </div>
          )}
        </div>

        <div className={`answer-panel ${answerVisible ? 'visible' : ''}`}>
          <span>Answer</span>
          <strong>{answerVisible ? question.answer : 'Hidden until reveal'}</strong>
        </div>

        <div className="question-actions">
          {!answerVisible ? (
            <button className="primary-action" onClick={onReveal} type="button">
              Reveal answer
            </button>
          ) : (
            <button className="primary-action" onClick={onClose} type="button">
              Back to board
            </button>
          )}
          <button className="secondary-action" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </article>
    </section>
  );
}

function ImageClue({ question }) {
  const [imageErrored, setImageErrored] = useState(false);

  useEffect(() => {
    setImageErrored(false);
  }, [question.id]);

  return (
    <figure className={`image-question ${imageErrored ? 'image-question-error' : ''}`}>
      <img
        src={question.question}
        alt={`${question.category} question clue`}
        onError={() => setImageErrored(true)}
        referrerPolicy="no-referrer"
      />
      <figcaption>
        {imageErrored ? (
          <>
            <span>Image could not load</span>
            <a href={question.question} target="_blank" rel="noreferrer">
              Open image
            </a>
          </>
        ) : (
          'Image clue'
        )}
      </figcaption>
    </figure>
  );
}

createRoot(document.getElementById('root')).render(<App />);
