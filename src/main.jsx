import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { HARRY_POTTER_QUESTION_DATA } from './questions';

const POINT_TIERS = {
  Hard: { reward: 20, penalty: 15, label: '+20 / -15', tone: 'hard' },
  Medium: { reward: 10, penalty: 10, label: '+10 / -10', tone: 'mid' },
  Easy: { reward: 5, penalty: 5, label: '+5 / -5', tone: 'easy' },
};

const LEGACY_QUESTION_DATA = [
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
        question: '/images/mohamed-salah.png',
        answer: 'Mohamed Salah',
        difficulty: 'Easy',
      },
      {
        question: '/images/paul-pogba.png',
        answer: 'Paul Pogba',
        difficulty: 'Medium',
      },
      {
        question: '/images/luka-modric.png',
        answer: 'Luka Modric',
        difficulty: 'Medium',
      },
      {
        question: '/images/lukaku.png',
        answer: 'Romelu Lukaku',
        difficulty: 'Difficult',
      },
      {
        question: '/images/joao-felix.png',
        answer: 'Joao Felix',
        difficulty: 'Medium',
      },
      {
        question: '/images/david-beckham.png',
        answer: 'David Beckham',
        difficulty: 'Medium',
      },
      {
        question: '/images/raphinha.png',
        answer: 'Raphinha',
        difficulty: 'Medium',
      },
      {
        question: '/images/david-luiz.png',
        answer: 'David Luiz',
        difficulty: 'Difficult',
      },
      {
        question: '/images/harry-kewell.png',
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

const QUESTION_DATA = HARRY_POTTER_QUESTION_DATA;

const imagePromptPattern = /^(https?:\/\/|\/images\/)/i;
const STORAGE_KEY = 'harry-potter-trivia-game-state';
const DEFAULT_TEAM_NAME = 'Team';
const DEFAULT_PASSED_POINTS = { Easy: 2, Medium: 5, Hard: 10 };
const DEFAULT_GAME_STATE = {
  usedIds: [],
  activeQuestion: null,
  answerVisible: false,
  teams: [],
  gameStarted: false,
  currentTeamIndex: 0,
  activeTeamId: null,
  showLeaderboard: false,
  scoreHistory: [],
  passedPoints: DEFAULT_PASSED_POINTS,
};

function isImagePrompt(text) {
  return imagePromptPattern.test(text.trim());
}

function getImageSources(url) {
  const trimmedUrl = url.trim();
  const googleFileId = trimmedUrl.match(/\/d\/([^=/?#]+)/)?.[1];

  if (!googleFileId) {
    return [trimmedUrl];
  }

  const googleusercontentUrl = trimmedUrl.replace('https://lh3.google.com', 'https://lh3.googleusercontent.com');

  return [
    googleusercontentUrl,
    `https://lh3.googleusercontent.com/d/${googleFileId}=w1600`,
    `https://drive.google.com/uc?export=view&id=${googleFileId}`,
    `https://drive.google.com/thumbnail?id=${googleFileId}&sz=w1600`,
    trimmedUrl,
  ];
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
      return DEFAULT_GAME_STATE;
    }

    const rawState = window.localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return DEFAULT_GAME_STATE;
    }

    const parsedState = JSON.parse(rawState);
    const activeQuestion = parsedState.activeQuestionId
      ? findQuestionById(parsedState.activeQuestionId)
      : null;

    return {
      usedIds: Array.isArray(parsedState.usedIds) ? parsedState.usedIds : [],
      activeQuestion,
      answerVisible: Boolean(parsedState.answerVisible && activeQuestion),
      teams: Array.isArray(parsedState.teams) ? parsedState.teams : [],
      gameStarted: Boolean(parsedState.gameStarted),
      currentTeamIndex: Number.isInteger(parsedState.currentTeamIndex) ? parsedState.currentTeamIndex : 0,
      activeTeamId: parsedState.activeTeamId ?? null,
      showLeaderboard: Boolean(parsedState.showLeaderboard),
      scoreHistory: Array.isArray(parsedState.scoreHistory) ? parsedState.scoreHistory : [],
      passedPoints: {
        Easy: Number.isFinite(parsedState.passedPoints?.Easy) ? parsedState.passedPoints.Easy : DEFAULT_PASSED_POINTS.Easy,
        Medium: Number.isFinite(parsedState.passedPoints?.Medium) ? parsedState.passedPoints.Medium : DEFAULT_PASSED_POINTS.Medium,
        Hard: Number.isFinite(parsedState.passedPoints?.Hard) ? parsedState.passedPoints.Hard : DEFAULT_PASSED_POINTS.Hard,
      },
    };
  } catch {
    return DEFAULT_GAME_STATE;
  }
}

function App() {
  const [storedGameState] = useState(loadStoredGameState);
  const [usedIds, setUsedIds] = useState(storedGameState.usedIds);
  const [activeQuestion, setActiveQuestion] = useState(storedGameState.activeQuestion);
  const [answerVisible, setAnswerVisible] = useState(storedGameState.answerVisible);
  const [teams, setTeams] = useState(storedGameState.teams);
  const [gameStarted, setGameStarted] = useState(storedGameState.gameStarted);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(storedGameState.currentTeamIndex);
  const [activeTeamId, setActiveTeamId] = useState(storedGameState.activeTeamId);
  const [showLeaderboard, setShowLeaderboard] = useState(storedGameState.showLeaderboard);
  const [scoreHistory, setScoreHistory] = useState(storedGameState.scoreHistory);
  const [passedPoints, setPassedPoints] = useState(storedGameState.passedPoints);
  const [showSequenceModal, setShowSequenceModal] = useState(false);
  const [celebration, setCelebration] = useState(null);

  const totalQuestions = useMemo(
    () => QUESTION_DATA.reduce((sum, category) => sum + category.questions.length, 0),
    [],
  );
  const completedCount = usedIds.length;
  const normalizedCurrentTeamIndex = teams.length ? currentTeamIndex % teams.length : 0;
  const currentTeam = teams[normalizedCurrentTeamIndex] ?? null;
  const activeTeam = teams.find((team) => team.id === activeTeamId) ?? currentTeam;
  const sortedTeams = useMemo(
    () => [...teams].sort((first, second) => second.score - first.score),
    [teams],
  );

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        usedIds,
        activeQuestionId: activeQuestion?.id ?? null,
        answerVisible,
        teams,
        gameStarted,
        currentTeamIndex: normalizedCurrentTeamIndex,
        activeTeamId,
        showLeaderboard,
        scoreHistory,
        passedPoints,
      }),
    );
  }, [
    activeQuestion,
    activeTeamId,
    answerVisible,
    gameStarted,
    normalizedCurrentTeamIndex,
    scoreHistory,
    showLeaderboard,
    teams,
    usedIds,
    passedPoints,
  ]);

  useEffect(() => {
    if (!celebration) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCelebration(null), 2200);
    return () => window.clearTimeout(timeout);
  }, [celebration]);

  useEffect(() => {
    if (teams.length && currentTeamIndex >= teams.length) {
      setCurrentTeamIndex(0);
    }
  }, [currentTeamIndex, teams.length]);

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
    setActiveTeamId(currentTeam?.id ?? teams[0]?.id ?? null);
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
    setActiveTeamId(currentTeam?.id ?? null);
  };

  const resetBoard = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setUsedIds([]);
    setActiveQuestion(null);
    setAnswerVisible(false);
    setTeams([]);
    setGameStarted(false);
    setCurrentTeamIndex(0);
    setActiveTeamId(null);
    setShowLeaderboard(false);
    setScoreHistory([]);
    setPassedPoints(DEFAULT_PASSED_POINTS);
    setShowSequenceModal(false);
    setCelebration(null);
  };

  const addTeam = (teamName) => {
    const cleanName = teamName.trim();

    if (!cleanName) {
      return;
    }

    setTeams((currentTeams) => [
      ...currentTeams,
      {
        id: `${Date.now()}-${cleanName}`,
        name: cleanName,
        score: 0,
      },
    ]);
  };

  const removeTeam = (teamId) => {
    setTeams((currentTeams) => currentTeams.filter((team) => team.id !== teamId));
  };

  const moveTeam = (teamId, direction) => {
    setTeams((currentTeams) => {
      const currentIndex = currentTeams.findIndex((team) => team.id === teamId);
      const nextIndex = currentIndex + direction;
      const preservedTeamId = currentTeam?.id ?? currentTeams[normalizedCurrentTeamIndex]?.id;

      if (currentIndex < 0 || nextIndex < 0 || nextIndex >= currentTeams.length) {
        return currentTeams;
      }

      const nextTeams = [...currentTeams];
      const [team] = nextTeams.splice(currentIndex, 1);
      nextTeams.splice(nextIndex, 0, team);

      const preservedTeamIndex = nextTeams.findIndex((nextTeam) => nextTeam.id === preservedTeamId);

      if (preservedTeamIndex >= 0) {
        setCurrentTeamIndex(preservedTeamIndex);
      }

      return nextTeams;
    });
  };

  const reverseTeamOrder = () => {
    setTeams((currentTeams) => [...currentTeams].reverse());
    setCurrentTeamIndex(0);
  };

  const rotateTeamToFirst = (teamId) => {
    setTeams((currentTeams) => {
      const teamIndex = currentTeams.findIndex((team) => team.id === teamId);

      if (teamIndex <= 0) {
        return currentTeams;
      }

      return [...currentTeams.slice(teamIndex), ...currentTeams.slice(0, teamIndex)];
    });
    setCurrentTeamIndex(0);
  };

  const startGame = () => {
    if (!teams.length) {
      addTeam(`${DEFAULT_TEAM_NAME} 1`);
      return;
    }

    setGameStarted(true);
    setCurrentTeamIndex(0);
    setActiveTeamId(teams[0]?.id ?? null);
  };

  const updateActiveTeam = (teamId) => {
    setActiveTeamId(teamId);
  };

  const applyScore = (teamId, points, wasCorrect) => {
    const scoringTeam = teams.find((team) => team.id === teamId);

    if (!scoringTeam || !activeQuestion) {
      return;
    }

    setTeams((currentTeams) =>
      currentTeams.map((team) =>
        team.id === teamId ? { ...team, score: team.score + points } : team,
      ),
    );

    if (wasCorrect) {
      setCelebration({ teamName: scoringTeam.name, points, tone: 'goal' });
    } else {
      setCelebration({ teamName: scoringTeam.name, points, tone: 'miss' });
    }

    setScoreHistory((currentHistory) => [
      ...currentHistory,
      {
        id: `${Date.now()}-${scoringTeam.id}`,
        teamId,
        teamName: scoringTeam.name,
        points,
        question: activeQuestion.question,
        category: activeQuestion.category,
        difficulty: activeQuestion.difficulty,
      },
    ]);

    setCurrentTeamIndex((currentIndex) => (teams.length ? (currentIndex + 1) % teams.length : 0));
    closeQuestion();
  };

  const markNoTeamAnswered = () => {
    if (!activeQuestion) {
      return;
    }

    setUsedIds((currentIds) =>
      currentIds.includes(activeQuestion.id) ? currentIds : [...currentIds, activeQuestion.id],
    );
    setCurrentTeamIndex((currentIndex) => (teams.length ? (currentIndex + 1) % teams.length : 0));
    closeQuestion();
  };

  if (!gameStarted) {
    return (
      <main className="app-shell setup-shell">
        <TournamentSetup
          onAddTeam={addTeam}
          onMoveTeam={moveTeam}
          onRemoveTeam={removeTeam}
          onStartGame={startGame}
          onUpdatePassedPoints={setPassedPoints}
          passedPoints={passedPoints}
          teams={teams}
        />
      </main>
    );
  }

  return (
    <main className="app-shell">
      {celebration && (
        <Celebration
          points={celebration.points}
          teamName={celebration.teamName}
          tone={celebration.tone}
        />
      )}
      <section className="scoreboard">
        <div>
          <p className="eyebrow">The wizarding world awaits</p>
          <h1>Harry Potter Trivia</h1>
          <PartnerMark />
        </div>
        <div className="turn-card">
          <span>Now playing</span>
          <strong>{currentTeam?.name ?? 'No team'}</strong>
          <select
            aria-label="Select current team"
            onChange={(event) => setCurrentTeamIndex(Number(event.target.value))}
            value={normalizedCurrentTeamIndex}
          >
            {teams.map((team, index) => (
              <option key={team.id} value={index}>
                {team.name}
              </option>
            ))}
          </select>
          <button className="sequence-button" onClick={() => setShowSequenceModal(true)} type="button">
            Adjust sequence
          </button>
        </div>
        <div className="progress-card" aria-label={`${completedCount} of ${totalQuestions} questions played`}>
          <span className="progress-number">{completedCount}</span>
          <span className="progress-copy">played of {totalQuestions}</span>
          <div className="progress-track">
            <span style={{ width: `${(completedCount / totalQuestions) * 100}%` }} />
          </div>
        </div>
        <button className="leaderboard-button" onClick={() => setShowLeaderboard(true)} type="button">
          Reveal leaderboard
        </button>
        <button className="reset-button" onClick={resetBoard} type="button">
          Reset tournament
        </button>
      </section>

      <section className="pitch-board" aria-label="Harry Potter trivia categories">
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
          activeTeamId={activeTeam?.id ?? ''}
          onClose={closeQuestion}
          onNoTeamAnswered={markNoTeamAnswered}
          onScore={applyScore}
          onReveal={revealAnswer}
          onSelectTeam={updateActiveTeam}
          question={activeQuestion}
          passedPoints={passedPoints}
          teams={teams}
        />
      )}

      {showLeaderboard && (
        <LeaderboardModal
          onClose={() => setShowLeaderboard(false)}
          scoreHistory={scoreHistory}
          teams={sortedTeams}
        />
      )}

      {showSequenceModal && (
        <TeamSequenceModal
          currentTeamId={currentTeam?.id ?? ''}
          onClose={() => setShowSequenceModal(false)}
          onMoveTeam={moveTeam}
          onReverseOrder={reverseTeamOrder}
          onRotateTeamToFirst={rotateTeamToFirst}
          onSetCurrentTeam={(teamId) => {
            const nextIndex = teams.findIndex((team) => team.id === teamId);

            if (nextIndex >= 0) {
              setCurrentTeamIndex(nextIndex);
            }
          }}
          teams={teams}
        />
      )}
    </main>
  );
}

function TournamentSetup({ onAddTeam, onMoveTeam, onRemoveTeam, onStartGame, onUpdatePassedPoints, passedPoints, teams }) {
  const [teamName, setTeamName] = useState('');

  const submitTeam = (event) => {
    event.preventDefault();
    onAddTeam(teamName);
    setTeamName('');
  };

  return (
    <section className="setup-panel">
      <p className="eyebrow">Gather your houses</p>
      <h1>Harry Potter Trivia</h1>
      <PartnerMark />
      <section className="passed-points-setup" aria-labelledby="passed-points-title">
        <div>
          <p className="eyebrow">Passed questions</p>
          <h2 id="passed-points-title">Set passed-question points</h2>
        </div>
        <p>Choose the points a team earns after correctly answering a passed question.</p>
        <div className="passed-points-inputs">
          {Object.keys(DEFAULT_PASSED_POINTS).map((difficulty) => (
            <label key={difficulty}>
              <span>{difficulty}</span>
              <input
                aria-label={`${difficulty} passed-question points`}
                min="0"
                onChange={(event) => onUpdatePassedPoints((current) => ({
                  ...current,
                  [difficulty]: Math.max(0, Number(event.target.value) || 0),
                }))}
                type="number"
                value={passedPoints[difficulty]}
              />
            </label>
          ))}
        </div>
      </section>
      <form className="team-form" onSubmit={submitTeam}>
        <input
          aria-label="Team name"
          onChange={(event) => setTeamName(event.target.value)}
          placeholder="Add team name"
          value={teamName}
        />
        <button className="primary-action" type="submit">
          Add team
        </button>
      </form>

      <div className="team-order-list">
        {teams.length ? (
          teams.map((team, index) => (
            <article className="team-order-item" key={team.id}>
              <span>{index + 1}</span>
              <strong>{team.name}</strong>
              <button onClick={() => onMoveTeam(team.id, -1)} type="button" disabled={index === 0}>
                Up
              </button>
              <button
                onClick={() => onMoveTeam(team.id, 1)}
                type="button"
                disabled={index === teams.length - 1}
              >
                Down
              </button>
              <button onClick={() => onRemoveTeam(team.id)} type="button">
                Remove
              </button>
            </article>
          ))
        ) : (
          <div className="empty-teams">Add teams to set the play order.</div>
        )}
      </div>

      <button className="start-game-button" disabled={!teams.length} onClick={onStartGame} type="button">
        Begin the quiz
      </button>
    </section>
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

function QuestionModal({
  activeTeamId,
  answerVisible,
  onClose,
  onNoTeamAnswered,
  onReveal,
  onScore,
  onSelectTeam,
  passedPoints,
  question,
  teams,
}) {
  const [customPoints, setCustomPoints] = useState(question.points.reward);
  const defaultPassedTeamId =
    teams.find((team) => team.id !== activeTeamId)?.id ?? activeTeamId ?? teams[0]?.id ?? '';
  const [passedTeamId, setPassedTeamId] = useState(defaultPassedTeamId);
  const passedQuestionPoints = passedPoints[question.difficulty] ?? 0;
  const isImage = isImagePrompt(question.question);

  useEffect(() => {
    setCustomPoints(question.points.reward);
  }, [question.id, question.points.reward]);

  useEffect(() => {
    setPassedTeamId((currentTeamId) => {
      const currentTeamStillExists = teams.some((team) => team.id === currentTeamId);

      if (currentTeamStillExists && currentTeamId !== activeTeamId) {
        return currentTeamId;
      }

      return defaultPassedTeamId;
    });
  }, [activeTeamId, defaultPassedTeamId, teams]);

  return (
    <section className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Trivia question">
      <article className="question-card" style={{ '--accent': question.accent }}>
        <div className="question-topline">
          <span>{question.category}</span>
          <span>{question.difficulty}</span>
          <span>{question.points.label}</span>
        </div>

        <label className="modal-team-select">
          <span>Playing team</span>
          <select onChange={(event) => onSelectTeam(event.target.value)} value={activeTeamId}>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name} ({team.score})
              </option>
            ))}
          </select>
        </label>

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
            <div className="score-decision">
              <p>Was the answer correct?</p>
              <div className="score-buttons">
                <button
                  className="correct-action"
                  onClick={() => onScore(activeTeamId, question.points.reward, true)}
                  type="button"
                >
                  Yes +{question.points.reward}
                </button>
                <button
                  className="wrong-action"
                  onClick={() => onScore(activeTeamId, -question.points.penalty, false)}
                  type="button"
                >
                  No -{question.points.penalty}
                </button>
              </div>
              <div className="custom-score">
                <input
                  aria-label="Custom points"
                  onChange={(event) => setCustomPoints(Number(event.target.value))}
                  type="number"
                  value={customPoints}
                />
                <button
                  className="secondary-action"
                  onClick={() => onScore(activeTeamId, customPoints, customPoints > 0)}
                  type="button"
                >
                  Apply custom
                </button>
              </div>
              <div className="pass-score">
                <label>
                  <span>Passed to team</span>
                  <select
                    aria-label="Passed to team"
                    onChange={(event) => setPassedTeamId(event.target.value)}
                    value={passedTeamId}
                  >
                    {teams.map((team) => (
                      <option key={team.id} value={team.id}>
                        {team.name} ({team.score})
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className="secondary-action"
                  disabled={!passedTeamId}
                  onClick={() => onScore(passedTeamId, passedQuestionPoints, passedQuestionPoints > 0)}
                  type="button"
                >
                  Give +{passedQuestionPoints} to passed team
                </button>
              </div>
              <button className="no-answer-action" onClick={onNoTeamAnswered} type="button">
                No team answered
              </button>
            </div>
          )}
          <button className="secondary-action" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </article>
    </section>
  );
}

function LeaderboardModal({ onClose, scoreHistory, teams }) {
  return (
    <section className="modal-backdrop leaderboard-backdrop" role="dialog" aria-modal="true" aria-label="Leaderboard">
      <article className="leaderboard-modal">
        <p className="eyebrow">Live standings</p>
        <h2>Leaderboard</h2>
        <div className="leaderboard-list">
          {teams.map((team, index) => {
            const teamHistory = scoreHistory.filter((entry) => entry.teamId === team.id);

            return (
              <div className="leaderboard-row" key={team.id}>
                <span className="rank">{index + 1}</span>
                <div className="leaderboard-team">
                  <strong>{team.name}</strong>
                  <div className="leaderboard-points-history">
                    {teamHistory.length ? (
                      teamHistory.map((entry, historyIndex) => (
                        <span
                          className={entry.points >= 0 ? 'positive' : 'negative'}
                          key={entry.id}
                          title={`${entry.category} - ${entry.difficulty}`}
                        >
                          {historyIndex + 1}. {entry.points > 0 ? '+' : ''}
                          {entry.points}
                        </span>
                      ))
                    ) : (
                      <span className="empty">No points yet</span>
                    )}
                  </div>
                </div>
                <span>{team.score}</span>
              </div>
            );
          })}
        </div>
        <button className="primary-action" onClick={onClose} type="button">
          Back to game
        </button>
      </article>
    </section>
  );
}

function TeamSequenceModal({
  currentTeamId,
  onClose,
  onMoveTeam,
  onReverseOrder,
  onRotateTeamToFirst,
  onSetCurrentTeam,
  teams,
}) {
  const lastTeam = teams[teams.length - 1];

  return (
    <section className="modal-backdrop sequence-backdrop" role="dialog" aria-modal="true" aria-label="Team sequence">
      <article className="sequence-modal">
        <p className="eyebrow">Turn order</p>
        <h2>Team Sequence</h2>

        <div className="sequence-quicklinks" aria-label="Quick sequence changes">
          <button disabled={teams.length < 2} onClick={onReverseOrder} type="button">
            Last team first
          </button>
          <button disabled={!currentTeamId} onClick={() => onRotateTeamToFirst(currentTeamId)} type="button">
            Current team first
          </button>
          <button disabled={!lastTeam} onClick={() => onSetCurrentTeam(lastTeam.id)} type="button">
            Make last current
          </button>
        </div>

        <div className="sequence-list">
          {teams.map((team, index) => {
            const isCurrent = team.id === currentTeamId;

            return (
              <article className={`sequence-row ${isCurrent ? 'current' : ''}`} key={team.id}>
                <span className="rank">{index + 1}</span>
                <div>
                  <strong>{team.name}</strong>
                  <span>{isCurrent ? 'Now playing' : `${team.score} points`}</span>
                </div>
                <button
                  disabled={index === 0}
                  onClick={() => onMoveTeam(team.id, -1)}
                  type="button"
                >
                  Up
                </button>
                <button
                  disabled={index === teams.length - 1}
                  onClick={() => onMoveTeam(team.id, 1)}
                  type="button"
                >
                  Down
                </button>
                <button onClick={() => onRotateTeamToFirst(team.id)} type="button">
                  First
                </button>
              </article>
            );
          })}
        </div>

        <button className="primary-action" onClick={onClose} type="button">
          Back to game
        </button>
      </article>
    </section>
  );
}

function Celebration({ teamName, points, tone }) {
  const isMiss = tone === 'miss';

  return (
    <div className={`celebration ${isMiss ? 'miss' : 'goal'}`} aria-live="polite">
      <div className="celebration-burst">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
      <strong>{isMiss ? 'MISCHIEF!' : 'MAGIC!'}</strong>
      <p>
        {teamName} {points > 0 ? '+' : ''}
        {points}
      </p>
    </div>
  );
}

function PartnerMark() {
  return (
    <div className="partner-mark">
      <span>Gifting partner</span>
      <img alt="Nasher Miles" src="/images/nasher-miles.png" />
    </div>
  );
}

function ImageClue({ question }) {
  const [imageErrored, setImageErrored] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const imageSources = getImageSources(question.question);
  const imageSource = imageSources[sourceIndex] ?? question.question;

  useEffect(() => {
    setImageErrored(false);
    setSourceIndex(0);
  }, [question.id]);

  const handleImageError = () => {
    if (sourceIndex < imageSources.length - 1) {
      setSourceIndex((currentIndex) => currentIndex + 1);
      return;
    }

    setImageErrored(true);
  };

  return (
    <figure className={`image-question ${imageErrored ? 'image-question-error' : ''}`}>
      <img
        src={imageSource}
        alt={`${question.category} question clue`}
        onError={handleImageError}
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
