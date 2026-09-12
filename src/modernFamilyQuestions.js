const POINT_ORDER = { Hard: 0, Medium: 1, Easy: 2 };

const pointDifficulty = {
  20: 'Hard',
  10: 'Medium',
  5: 'Easy',
};

const categories = [
  {
    category: 'Origins, Backgrounds and Career',
    short: 'Origins',
    accent: '#5aa2d0',
    questions: [
      ['What college does Alex attend?', 'Caltech', 20],
      ['What is the name of Mitchell\'s childhood next-door neighbour who could throw a ball much better than him?', 'Nancy', 20],
      ['What is Jay\'s nemesis business?', 'Closets, Closets, Closets, Closets', 20],
      ['What sport did Mitchell and Claire perform together as kids?', 'Figure skating', 20],
      ['What U.S. State is Cam from?', 'Missouri', 10],
      ['Where did Cameron grow up?', 'On a farm', 10],
      ['What business does Jay start after retiring?', 'Dog beds', 10],
      ['What country is Lily from?', 'Vietnam', 5],
      ['Where is Gloria from?', 'Colombia', 5],
      ['What does Mitchell do for a living?', 'Lawyer', 5],
      ['What are the names of the two main families?', 'Pritchett and Dunphy', 5],
      ['What is the name of the store Brenda works at?', 'Foto Fun', 5],
      ['As well as being a real estate agent, Phil owns what type of shop?', 'Magic shop', 5],
      ['What is the name of the business where Claire works with her father?', 'Pritchett\'s Closets & Blinds', 5],
    ],
  },
  {
    category: 'Love, Rivalries & Relationships',
    short: 'Relationships',
    accent: '#d45d45',
    questions: [
      ['Where did Alex finally have her first kiss?', 'In Wyoming', 20],
      ['Who is Claire\'s rival in the race for town council?', 'Duane Bailey', 20],
      ['What is Claire\'s original anniversary gift for Phil in the episode "Great Expectations"?', 'Coupons for free hugs', 20],
      ['What is the name of the boy Lily likes who can count to 100?', 'Patrick', 20],
      ['Phil and Claire often role-play as this couple for Valentine\'s Day.', 'Clive and Julianna Bixby', 10],
      ['How did Haley and Dylan break up?', 'Dylan decided to live on a dude ranch', 10],
      ['How old is Luke\'s girlfriend Janice?', '47', 10],
      ['What is the name of the gay couple Cam and Mitchell meet at the day care center?', 'Anton and Scott', 10],
      ['What comedian does Jay get Gloria tickets to see on Valentine night?', 'David Brenner', 10],
      ['Where did Phil and Claire meet?', 'In college', 5],
      ['Who are the Dunphys\' obnoxious next-door neighbors?', 'Ronnie and Amber', 5],
      ['What does Dylan give Haley for Valentine\'s Day that Phil feels trumps his Valentine\'s Day gift to Claire?', 'A large portrait made from a photograph of the two of them', 5],
      ['What was the name of the friend Cam and Mitchell called for a night out?', 'Sal', 5],
      ['Why does Gloria feel jealous of Maxine, a waitress in a local diner?', 'Because she has known Jay very well for years', 5],
    ],
  },
  {
    category: 'Character Traits, Personalities & Quirks',
    short: 'Quirks',
    accent: '#85b96b',
    questions: [
      ['What does Manny say his biggest fear is?', 'Dying alone', 20],
      ['What is the name of Phil\'s head-scratching invention?', 'The Real Head Scratcher TM', 20],
      ['What song does Haley sing when she auditions for America\'s Next Top Model?', 'Wannabe by the Spice Girls', 20],
      ['What was Phil\'s sport in college?', 'Cheerleading', 20],
      ['What was Cameron\'s college sport?', 'Football', 10],
      ['Why does Stella keep jumping in the pool?', 'Her toy was caught in the filter', 10],
      ['Where did Luke think he was going when Phil tricked him into going to a ballroom dance class?', 'Autopsy camp', 10],
      ['What\'s the name of Cam\'s clown alter ego?', 'Fizbo', 10],
      ['Why does Mitchell say that yellow is not Cameron\'s colour?', 'It makes him look like the sun', 10],
      ['What was the name of Gloria\'s ventriloquist doll?', 'Uncle Grumpy', 5],
      ['What is the name of Phil\'s duck who knows how to fetch?', 'Feather', 5],
      ['What type of animal has Luke kissed on the mouth, according to Phil?', 'Pigeon', 5],
    ],
  },
  {
    category: 'Holidays & Special Events',
    short: 'Events',
    accent: '#f4cf4f',
    questions: [
      ['The year Phil takes over Halloween, what costume does Jay reject in favor of Prince Charming?', 'Shrek', 20],
      ['What song is played at Phil\'s mother\'s funeral?', 'Amazing Grace', 20],
      ['The only thing that Jay wanted to do when the family visited Disneyland was see the robotic U.S. President presentation. What was the name of the robotic president they saw at the end of their trip to the park?', 'Abraham Lincoln', 20],
      ['On "Leap Day", Cameron was a leap day baby and was officially turning 10, or 40 if you asked Mitchell. What movie provided the original party theme?', 'Wizard of Oz', 20],
      ['Claire is ecstatic when Phil\'s birthday coincides with this event.', 'iPad release day', 10],
      ['Who chaperones the secret party that Haley throws at Jay and Gloria\'s house?', 'Manny', 10],
      ['What\'s Claire\'s favorite holiday?', 'Halloween', 10],
      ['What does Claire do to embarrass Phil during the Thanksgiving episode?', 'She puts a picture of him in a turkey costume on the fridge', 10],
      ['What gift did Phil give Claire for their anniversary?', 'Bracelet', 5],
      ['What Christmas tradition does Jay bring from Colombia?', 'Fireworks', 5],
      ['Jay had shirts printed that read "Haley\'s Comets". In what event was Haley participating?', '5K', 5],
    ],
  },
  {
    category: 'Family Dynamics & Drama',
    short: 'Drama',
    accent: '#21354f',
    questions: [
      ['What time does Phil agree to "shoot Luke" after he shoots Alex with his BB gun in the very first episode?', '4:15 PM', 20],
      ['What is the license plate number of the car Claire puts on her sign in order to get the driver to slow down?', '2URN801', 20],
      ['What is the name of fictional country that Gloria mentions she is from as a joke in season 1?', 'Juarez', 20],
      ['According to Mitchell and Cameron, what does a PB & J stand for in their house?', 'Pear, brie and jambon', 20],
      ['What do Phil and Claire offer Luke as a prize for staying away from electronics for a week?', 'Chicken pot pie', 10],
      ['What is Mitchell wearing when he and Claire get trapped in the backyard of their childhood home?', 'A sailor suit', 10],
      ['What was the name of Claire and Mitchell\'s childhood ice-skating duo?', 'Fire and Nice', 10],
      ['What is the fake name Claire uses on Facebook so she can be friends with Haley?', 'Brody Kendall', 10],
      ['What is Manny\'s biological father\'s first name?', 'Javier Delgado', 10],
      ['What breed of dog does Jay own?', 'French Bulldog', 10],
      ['Cam and Mitch named their daughter after a character on which TV show?', 'Sex & The City', 5],
      ['What is the first name of the eldest child of the Dunphy family?', 'Haley', 5],
      ['Names of Haley and Dylan\'s twins?', 'Poppy and George', 5],
      ['How did Walt die?', 'Heart attack', 5],
      ['What is the name of the singing ensemble that Cam once ran?', 'The Greensleevers', 5],
    ],
  },
];

export const MODERN_FAMILY_QUESTION_DATA = categories.map((category) => ({
  ...category,
  questions: category.questions
    .map(([question, answer, points], index) => {
      const difficulty = pointDifficulty[points];

      return {
        question,
        answer,
        difficulty,
        id: `${category.short}-${index}`,
      };
    })
    .sort((first, second) => POINT_ORDER[first.difficulty] - POINT_ORDER[second.difficulty]),
}));

