const POINT_ORDER = { Hard: 0, Medium: 1, Easy: 2 };

const difficultyPoints = {
  Difficult: 20,
  'Medium/Difficult': 20,
  Medium: 10,
  Easy: 5,
};

const pointDifficulty = {
  20: 'Hard',
  10: 'Medium',
  5: 'Easy',
};

const categories = [
  {
    category: 'Origins, Backgrounds & Careers',
    short: 'Origins',
    accent: '#5aa2d0',
    questions: [
      ["What is Jay's middle name?", 'Francis', 'Easy'],
      ['Haley was conceived after a concert by which band?', 'Duran Duran', 'Difficult'],
      ["What is the name of Cam's carol group which staged a coup and kicked him out?", 'The Greensleevers', 'Medium'],
      ['What is the name of the trampoline magazine that Phil subscribes to?', 'Bounce', 'Difficult'],
      ['What is the name of the football team Cam coaches?', 'The Dolphins', 'Medium'],
      ["What is Phil's mother's name?", 'Grace', 'Medium'],
      ["What is Mitchell's middle name?", 'Vincent', 'Medium'],
      ['Who is Claire’s rival in the race for town council?', 'Duane Bailey', 'Difficult'],
      ['What is the name of the closets company founded by Jay’s ex-partner, and who is its president?', 'Closets Closets Closets Closets — Earl Chambers', 'Medium'],
      ['What college does Alex attend?', 'Caltech', 'Easy'],
      ['What sport did Mitchell and Claire perform together as kids?', 'Figure Skating', 'Easy'],
      ['Name the pre-school Joe went to and the hippy teacher.', 'The Learnin’ Barn, Erica', 'Difficult'],
      ['What is the name of the company that hires Haley for social media work?', 'NERP', 'Medium'],
    ],
  },
  {
    category: 'Love, Relationships & Family Bonds',
    short: 'Relationships',
    accent: '#d45d45',
    questions: [
      ['Who gives Gloria the baby microphone for prenatal bonding?', 'Darlene', 'Difficult'],
      ["What is Haley's middle name?", 'Gwendolyn', 'Difficult'],
      ["What is the name of Sal's baby?", 'Sammy', 'Medium'],
      ['Where did Alex finally have her first kiss?', 'At a dude ranch in Wyoming', 'Difficult'],
      ["What is Claire's original anniversary gift for Phil in the episode ‘Great Expectations’?", 'Coupons for free hugs', 'Medium'],
      ["What are the first names of Phil and Claire’s Valentine's Day alter-egos?", 'Clive and Juliana', 'Easy'],
      ['What is the full name of Joe?', 'Fulgencio-Joseph “Joe” Ramirez Pritchett', 'Difficult'],
      ["Who officiates Mitch and Cam's wedding?", 'Phil', 'Medium'],
      ['What is the fake name Claire uses on Facebook so she can be friends with Haley?', 'Brody Kendall', 'Difficult'],
      ['What is the name of the high school football player who comes and lives with Mitch and Cam?', 'Dwight', 'Medium'],
      ['What does DeDe leave for Mitch after her death?', 'A box of jewellery', 'Medium'],
      ["What are the names of Haley and Dylan's twins?", 'Poppy and George', 'Easy'],
      ["What was the name of Claire and Mitchell's childhood ice-skating duo?", 'Fire and Nice', 'Medium'],
    ],
  },
  {
    category: 'Character Traits, Personalities & Quirks',
    short: 'Quirks',
    accent: '#85b96b',
    questions: [
      ['What does Phil name his alpaca?', 'Jolene', 'Difficult'],
      ['What does Manny say his biggest fear is?', 'Dying Alone', 'Medium'],
      ["In addition to never getting her driver's licence, what is Haley's biggest fear?", 'Getting a driver’s licence with a bad photo', 'Medium'],
      ['What was the item that Claire said she had been trying to get Phil to try for years, but he would never listen to her?', 'Wedge Salad', 'Difficult'],
      ["What is the name of Gloria's ventriloquist dummy?", 'Uncle Grumpy', 'Difficult'],
      ['According to Phil, who makes the best iced tea?', 'Older black ladies', 'Medium'],
      ['What is Luke allergic to?', 'Soy', 'Easy'],
      ["What is Cam's favourite movie?", 'The Wizard of Oz', 'Difficult'],
      ['Who is Gloria’s sauce rival, accused of stealing her recipe?', 'Aunty Alice', 'Easy'],
      ["What is the name of Phil's head-scratching invention?", 'The Real Head-scratcher TM', 'Medium'],
      ['Why does Mitchell say that yellow is not Cameron’s colour?', 'It makes him look like the sun', 'Easy'],
      ['What does Phil think WTF means?', 'Why the Face', 'Medium'],
      ['What is Dylan allergic to?', 'Mayonnaise', 'Difficult'],
      ['According to Cameron, how many types of clowns are there? Name any 2.', '4 — A tramp, an Auguste, a whiteface, a character', 'Difficult'],
    ],
  },
  {
    category: 'Holidays, Celebrations & Family Drama',
    short: 'Celebrations',
    accent: '#f4cf4f',
    questions: [
      ['What did Manny win off Jay after beating him in a chess match?', 'His Watch', 'Easy'],
      ['Cam and Mitchell tried to get a reservation in a famous newly opened restaurant a few blocks from their house. Name that restaurant.', 'Amilia', 'Medium'],
      ['Phil had three ducks. Name them and which child each duck reminded him of.', 'Lucky: Luke; Princess: Haley; Feather: Alex', 'Difficult'],
      ["Phil's birthday coincides with what event?", 'iPad launch day', 'Medium'],
      ['The only thing that Jay wanted to do when the family visited Disneyland was see the robotic U.S. President presentation. What was the name of the robotic president they saw at the end of their trip to the park?', 'Abraham Lincoln', 'Difficult'],
      ['When Mitchell is a stay-at-home dad with Lily, who does he want to kill?', 'Dora the Explorer', 'Medium'],
      ['What time does Phil agree to “shoot Luke” after he shoots Alex with his BB gun in the very first episode?', '04:15 PM', 'Easy'],
      ['On Halloween, Mitchell wears a costume to work only to find out no one dresses up. Who does he dress up as?', 'Spiderman', 'Easy'],
      ['Why does Stella keep jumping in the pool?', 'Her toy was caught in the filter', 'Medium'],
      ['What do Phil and Claire offer each child as a prize for staying away from electronics for a week?', 'Luke: Chicken Pot Pie; Alex: A new computer; Haley: A car', 'Medium/Difficult'],
      ['What do Phil and Claire offer Luke as a prize for staying away from electronics for a week?', 'Cheerleading', 'Easy'],
      ['The year Phil takes over Halloween, what costume does Jay reject in favor of Prince Charming?', 'Shrek', 'Difficult'],
    ],
  },
  {
    category: 'Complete the Line from Phil’s-osophy',
    short: 'Phil’s-osophy',
    accent: '#21354f',
    questions: [
      ['Never be _____ to reach for the stars, because even if you fall, you’ll always be wearing a _____.', 'afraid, Parent-chute™', 'Difficult'],
      ['Always look people in the eye, even if they’re _____. Just say, “I’m looking you in the _____.”', 'blind, eye', 'Medium'],
      ['If you get pulled over for speeding, tell the policeman _____.', 'your spouse has diarrhea', 'Difficult'],
      ['You only get one chance at a first impression. I suggest _____, because it’s easy to do. “_____!”', 'Julia Child, Save the giblets!', 'Difficult'],
      ['The most amazing things that can happen to a _____ will happen to you, if you just lower your _____.', 'human being, expectations', 'Easy'],
      ['Dance until your feet hurt. Sing until your lungs hurt. Act until your _____.', 'William hurt', 'Difficult'],
      ['Marry someone who _____.', 'looks sexy disappointed', 'Medium'],
      ['Success is 1% inspiration, 98% _____, and 2% attention to detail.', 'perspiration', 'Easy'],
      ['You can tell a lot about a person from their _____.', 'biography', 'Medium'],
      ['Watch a _____ at least once a day.', 'sunrise', 'Medium'],
      ['If you love something, _____. Unless it’s a _____.', 'set it free, tiger', 'Medium'],
      ['If you’re ever in a jam, a _____ scrunched up under your nose makes a good pretend _____.', 'crayon, moustache', 'Difficult'],
      ['When life gives you _____, make _____. Life will be all like, “What?!”', 'lemonade, lemons', 'Easy'],
    ],
  },
];

export const MODERN_FAMILY_QUESTION_DATA = categories.map((category) => ({
  ...category,
  questions: category.questions
    .map(([question, answer, difficulty], index) => {
      const points = difficultyPoints[difficulty];

      return {
        question,
        answer,
        difficulty: pointDifficulty[points],
        id: `${category.short}-${index}`,
      };
    })
    .sort((first, second) => POINT_ORDER[first.difficulty] - POINT_ORDER[second.difficulty]),
}));
