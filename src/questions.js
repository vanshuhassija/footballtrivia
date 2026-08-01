const POINT_ORDER = { Hard: 0, Medium: 1, Easy: 2 };

const categories = [
  {
    category: 'Magical Creatures', short: 'Creatures', accent: '#c79745',
    questions: [
      ['What is the name of the dragon that Cedric Diggory has to face in the Triwizard Tournament?', 'Swedish Short-Snout', 'Medium'],
      ['What is the name of the magical creature that can only be seen by those who have witnessed death?', 'Thestral', 'Hard'],
      ['In Harry Potter and the Sorcerer’s Stone, what is the name of the magical creature that Hagrid keeps in his hut?', 'Norbert', 'Medium'],
      ['What is the name of Hagrid’s massive, three-headed dog that guards the trapdoor in Sorcerer’s/Philosopher’s Stone?', 'Fluffy', 'Easy'],
      ['What aquatic creatures attack Harry during the Second Task of the Triwizard Tournament in the Black Lake?', 'Grindylows', 'Hard'],
      ['What is the name of the giant Acromantula spider living deep within the Forbidden Forest that Hagrid raised from an egg?', 'Aragog', 'Hard'],
      ['In Prisoner of Azkaban, what specific creature is hiding inside the wardrobe during Remus Lupin’s first Defense Against the Dark Arts practical lesson?', 'Boggart', 'Hard'],
      ['In Chamber of Secrets, what small, bright blue flying creatures does Gilderoy Lockhart release in class, causing total chaos until Hermione freezes them?', 'Cornish Pixies', 'Medium'],
    ],
  },
  {
    category: 'Spells & Potions', short: 'Spells', accent: '#7e5cad',
    questions: [
      ['In Half-Blood Prince, Marcus Belby is invited to Slughorn’s dinner party because of his famous uncle. What did his uncle invent?', 'Wolfsbane Potion', 'Hard'],
      ['In Chamber of Secrets, Hermione accidentally puts cat hair into her Polyjuice Potion. Whose hair did she intend to use?', 'Millicent Bulstrode', 'Hard'],
      ['In the movies, which creature does Hagrid introduce during Care of Magical Creatures that ends up causing chaos?', 'Buckbeak the Hippogriff', 'Medium'],
      ['Where does Hagrid’s dragon eventually get sent so he can live with other dragons?', 'Romania', 'Easy'],
      ['In the movies, what spell does Hermione use to repair Harry’s glasses in the first film?', 'Oculus Reparo', 'Medium'],
      ['In the Half-Blood Prince movie, which powerful sleeping potion does Professor Slughorn have the class brew during their first lesson?', 'Draught of Living Death', 'Easy'],
      ['What does Dumbledore leave Ron in his will?', 'Deluminator', 'Medium'],
      ['What is the name of the potion that brought Voldemort back to life in Goblet of Fire?', 'Dark Regeneration Potion', 'Medium'],
      ['What spell does a wizard cast to conjure the Dark Mark?', 'Morsmordre', 'Medium'],
      ['What spell does Hermione use to open the lock freeing Sirius Black in the movies?', 'Bombarda', 'Medium'],
      ['In Chamber of Secrets, what spell does Hermione use to freeze the chaotic Cornish pixies in mid-air?', 'Immobulus', 'Medium'],
      ['Which spell does Hermione secretly cast on Cormac McLaggen during the Gryffindor Keeper tryouts?', 'Confundo', 'Medium'],
    ],
  },
  {
    category: 'Hogwarts & Houses', short: 'Hogwarts', accent: '#9e3434',
    questions: [
      ['Which house did Moaning Myrtle belong to?', 'Ravenclaw', 'Easy'],
      ['What is the number written at the front of the Hogwarts Express?', '5972', 'Hard'],
      ['What password does Percy use to enter Gryffindor Tower in the Philosopher’s Stone movie?', 'Caput Draconis', 'Hard'],
      ['In the movies, who teaches Divination at Hogwarts?', 'Professor Trelawney', 'Hard'],
      ['How many extra points does Dumbledore give Gryffindor at the end-of-term feast?', '60', 'Medium'],
      ['What room number did Harry Potter stay in at the Leaky Cauldron?', 'Room No. 11', 'Hard'],
      ['What is the name of the secret passageway Harry takes to Hogsmeade?', 'One-Eyed Witch passageway', 'Medium'],
      ['In Goblet of Fire, which Slytherin student attends the Yule Ball as Draco Malfoy’s date?', 'Pansy', 'Medium'],
      ['In Order of the Phoenix, what hidden room on the seventh floor hosts Dumbledore’s Army meetings?', 'Room of Requirement', 'Easy'],
      ['In Half-Blood Prince, who is appointed as the new Potions master, forcing Snape to take over Defense Against the Dark Arts?', 'Horace Slughorn', 'Easy'],
    ],
  },
  {
    category: 'Dark Arts & Villains', short: 'Dark Arts', accent: '#38526d',
    questions: [
      ['In Deathly Hallows – Part 1, which Death Eater inadvertently learns the location of 12 Grimmauld Place due to an Apparition mishap?', 'Yaxley', 'Hard'],
      ['In Deathly Hallows – Part 2, which Death Eater briefly uses Fiendfyre in the Room of Requirement during the Battle of Hogwarts?', 'Gregory Goyle', 'Hard'],
      ['Which wizard named Barty Crouch Jr. as a Death Eater to the Ministry of Magic in exchange for his release from Azkaban?', 'Igor Karkaroff', 'Medium'],
      ['What dark spell does Harry use against Draco Malfoy in the bathroom in Half-Blood Prince after discovering it in a textbook?', 'Sectumsempra', 'Easy'],
      ['Which werewolf and Death Eater leads the attack that destroys the Millennium Bridge at the beginning of the Half-Blood Prince movie?', 'Fenrir Greyback', 'Medium'],
      ['Which dark magical object in Borgin and Burkes does Draco Malfoy repair to sneak Death Eaters into Hogwarts?', 'The Vanishing Cabinet', 'Easy'],
      ['In Order of the Phoenix, which Unforgivable Curse does Harry attempt to use on Bellatrix Lestrange after she kills Sirius?', 'The Cruciatus Curse (Crucio)', 'Medium'],
      ['Which masked Death Eater is responsible for torturing Neville Longbottom’s parents into madness?', 'Bellatrix', 'Easy'],
      ['After escaping the wedding, where do Harry, Ron, and Hermione first encounter Death Eaters in London?', 'The Luchino Caffe (on Tottenham Court Road)', 'Medium'],
      ['In Deathly Hallows – Part 2, who destroys Nagini, Voldemort’s final Horcrux, using the Sword of Gryffindor?', 'Neville Longbottom', 'Easy'],
    ],
  },
  {
    category: 'Key Events & Characters', short: 'Legends', accent: '#427c70',
    questions: [
      ['In which order do the Marauders’ names appear on the Marauder’s Map?', 'Moony, Wormtail, Padfoot, and Prongs', 'Hard'],
      ['In Goblet of Fire, who is the Triwizard Tournament champion from Beauxbatons Academy of Magic?', 'Fleur Delacour', 'Medium'],
      ['How old was Nicolas Flamel when he was mentioned in Philosopher’s Stone?', '665', 'Hard'],
      ['What were the last three words Snape spoke?', 'Look... at... me...', 'Medium'],
      ['What is the number of Harry Potter’s vault at Gringotts?', '687', 'Medium'],
      ['In the movies, who does Harry find in the Forbidden Forest and realize is drinking Unicorn blood?', 'Professor Quirrell', 'Medium'],
      ['What is the correct birth order of the Weasley children?', 'Bill, Charlie, Percy, Fred and George, Ron, Ginny', 'Hard'],
      ['What is the name of the couple dining at the Dursleys’ house when Dobby appears to stop Harry returning to Hogwarts?', 'Mr. and Mrs. Mason', 'Medium'],
      ['What is the name of the Knight Bus conductor?', 'Stan Shunpike', 'Medium'],
      ['In Goblet of Fire, what magical object chooses the three (and eventually four) champions for the Triwizard Tournament?', 'Goblet of Fire', 'Easy'],
      ['In Deathly Hallows – Part 1, what position does Xenophilius Lovegood hold at a famous wizarding magazine?', 'Editor of The Quibbler', 'Medium'],
    ],
  },
];

export const HARRY_POTTER_QUESTION_DATA = categories.map((category) => ({
  ...category,
  questions: category.questions
    .map(([question, answer, difficulty], index) => ({ question, answer, difficulty, id: `${category.short}-${index}` }))
    .sort((first, second) => POINT_ORDER[first.difficulty] - POINT_ORDER[second.difficulty]),
}));
