// IRON MIND - Evidence-informed training programs
// Exercise IDs follow the supplied exercises.js order.
// Each session is intentionally curated.

export const programs = [

  // 1. BEGINNER - FULL BODY
  {
    id:'full-beginner',
    name:'Beginner Full Body',
    ar:'الجسم بالكامل للمبتدئين',
    days:3,
    level:'Beginner',
    goal:'General fitness',
    goalAr:'لياقة وتأسيس',
    desc:'Three non-consecutive full-body sessions covering all major muscle groups with manageable volume.',
    descAr:'ثلاث حصص غير متتالية تشمل جميع المجموعات العضلية الأساسية بحجم تدريبي مناسب للمبتدئين.',
    schedule:[
      ['Day A','Full body · foundation',
        ['ex-26','ex-27','ex-31','ex-20','ex-11','ex-13','ex-23']
      ],
      ['Day B','Full body · balanced strength',
        ['ex-30','ex-28','ex-33','ex-15','ex-45','ex-22','ex-25']
      ],
      ['Day C','Full body · technique and balance',
        ['ex-4','ex-5','ex-21','ex-12','ex-16','ex-17','ex-24']
      ]
    ]
  },

  // 2. BEGINNER - UPPER / LOWER
  {
    id:'upper-lower-beginner',
    name:'Upper / Lower Foundation',
    ar:'علوي وسفلي للمبتدئين',
    days:4,
    level:'Beginner',
    goal:'Muscle & skill',
    goalAr:'بناء العضلات وتعلم الأداء',
    desc:'Four sessions with two upper and two lower days. Direct arm, shoulder and calf work is included.',
    descAr:'أربع حصص: يومان للجزء العلوي ويومان للسفلي، مع تمارين مباشرة للذراعين والأكتاف والسمانة.',
    schedule:[
      ['Upper A','Chest, back, shoulders and arms',
        ['ex-30','ex-5','ex-11','ex-12','ex-13','ex-15','ex-9']
      ],
      ['Lower A','Quads, hamstrings, glutes and calves',
        ['ex-27','ex-19','ex-20','ex-21','ex-22','ex-23']
      ],
      ['Upper B','Upper-body balanced development',
        ['ex-2','ex-31','ex-10','ex-32','ex-14','ex-16','ex-17']
      ],
      ['Lower B','Complete lower body',
        ['ex-48','ex-51','ex-52','ex-53','ex-34','ex-35']
      ]
    ]
  },

  // 3. INTERMEDIATE - PUSH / PULL / LEGS
  {
    id:'ppl-intermediate',
    name:'Push / Pull / Legs',
    ar:'دفع / سحب / أرجل',
    days:6,
    level:'Intermediate',
    goal:'Hypertrophy',
    goalAr:'التضخيم العضلي',
    desc:'Classic six-day PPL split. Push trains chest, delts and triceps; Pull trains back, traps, rear delts and biceps; Legs covers the complete lower body.',
    descAr:'تقسيمة الدفع والسحب والأرجل الكلاسيكية. الدفع للصدر والأكتاف والترايسبس، والسحب للظهر والترابيس والكتف الخلفي والبايسبس، والأرجل لكل عضلات الجزء السفلي.',
    schedule:[
      ['Push A','Chest, shoulders and triceps',
        ['ex-1','ex-2','ex-11','ex-10','ex-15','ex-16']
      ],
      ['Pull A','Back, traps, rear delts and biceps',
        ['ex-5','ex-7','ex-9','ex-12','ex-13','ex-17']
      ],
      ['Legs A','Quads, hamstrings, glutes and calves',
        ['ex-18','ex-20','ex-21','ex-19','ex-22','ex-24']
      ],
      ['Push B','Chest and shoulder variations',
        ['ex-36','ex-37','ex-42','ex-43','ex-46','ex-47']
      ],
      ['Pull B','Back thickness, width and arms',
        ['ex-39','ex-58','ex-40','ex-61','ex-44','ex-45','ex-9']
      ],
      ['Legs B','Complete lower-body development',
        ['ex-49','ex-51','ex-33','ex-68','ex-54','ex-55']
      ]
    ]
  },

  // 4. INTERMEDIATE - UPPER / LOWER
  {
    id:'upper-lower-intermediate',
    name:'Upper / Lower Strength & Size',
    ar:'علوي وسفلي للقوة والتضخيم',
    days:4,
    level:'Intermediate',
    goal:'Strength + hypertrophy',
    goalAr:'قوة وتضخيم',
    desc:'Four focused sessions with compound lifts and direct arm, trap, rear-delt and calf work.',
    descAr:'أربع حصص تجمع التمارين المركبة والعزل، مع اهتمام مباشر بالذراعين والترابيس والكتف الخلفي والسمانة.',
    schedule:[
      ['Upper Strength','Chest, back, shoulders and arms',
        ['ex-1','ex-5','ex-10','ex-58','ex-13','ex-15','ex-9']
      ],
      ['Lower Strength','Squat and hip hinge emphasis',
        ['ex-18','ex-29','ex-20','ex-21','ex-22','ex-23']
      ],
      ['Upper Hypertrophy','Complete upper-body development',
        ['ex-2','ex-39','ex-11','ex-12','ex-44','ex-46','ex-17']
      ],
      ['Lower Hypertrophy','Quads, glutes, hamstrings and calves',
        ['ex-48','ex-33','ex-51','ex-53','ex-34','ex-55']
      ]
    ]
  },

  // 5. INTERMEDIATE - BODY PART SPLIT
  {
    id:'bro-intermediate',
    name:'Body-Part Split',
    ar:'تقسيمة العضلة اليومية',
    days:5,
    level:'Intermediate',
    goal:'Hypertrophy',
    goalAr:'التضخيم',
    desc:'Traditional bodybuilding split with dedicated chest, back, shoulders, legs and arms days.',
    descAr:'تقسيمة كمال الأجسام التقليدية: صدر، ظهر، أكتاف، أرجل، وذراعين. تم تخصيص الترابيس والساعد والبطن ضمن الأيام المناسبة.',
    schedule:[
      ['Chest','Upper, middle and lower chest + triceps',
        ['ex-1','ex-2','ex-37','ex-38','ex-77','ex-15','ex-16']
      ],
      ['Back','Lats, upper back, traps, rear delts and biceps',
        ['ex-5','ex-39','ex-58','ex-9','ex-32','ex-13','ex-14']
      ],
      ['Shoulders','Front, side and rear delts + traps',
        ['ex-10','ex-42','ex-11','ex-43','ex-12','ex-61','ex-9']
      ],
      ['Legs','Complete lower body',
        ['ex-18','ex-48','ex-20','ex-51','ex-21','ex-68','ex-22','ex-34']
      ],
      ['Arms & Core','Biceps, triceps, forearms and abs',
        ['ex-13','ex-44','ex-45','ex-63','ex-15','ex-16','ex-46','ex-17','ex-24','ex-25']
      ]
    ]
  },

  // 6. INTERMEDIATE - THREE DAY STRENGTH
  {
    id:'strength-3day',
    name:'3-Day Strength',
    ar:'برنامج القوة 3 أيام',
    days:3,
    level:'Intermediate',
    goal:'Strength',
    goalAr:'القوة',
    desc:'Three full-body strength sessions with balanced pushing, pulling, legs and direct arm work.',
    descAr:'ثلاث حصص قوة للجسم بالكامل، مع توازن الضغط والسحب والأرجل وتمارين مباشرة للذراعين.',
    schedule:[
      ['Day A','Squat, bench, row and arms',
        ['ex-18','ex-1','ex-58','ex-13','ex-15','ex-22']
      ],
      ['Day B','Deadlift, overhead press and pull',
        ['ex-29','ex-10','ex-5','ex-9','ex-45','ex-16','ex-24']
      ],
      ['Day C','Squat variation, incline press and back',
        ['ex-49','ex-36','ex-31','ex-12','ex-14','ex-47','ex-34']
      ]
    ]
  },

  // 7. BEGINNER - HOME
  {
    id:'home-beginner',
    name:'Home Bodyweight',
    ar:'برنامج منزلي بوزن الجسم',
    days:3,
    level:'Beginner',
    goal:'Fitness at home',
    goalAr:'لياقة في المنزل',
    desc:'Three home sessions using bodyweight and optional dumbbells or resistance bands. Includes pushing, pulling alternatives, legs, arms and core.',
    descAr:'ثلاث حصص منزلية بوزن الجسم مع إمكانية استخدام دمبل أو مقاومة. تشمل الدفع والسحب البديل والأرجل والذراعين والبطن.',
    schedule:[
      ['Day A','Push, legs and triceps',
        ['ex-26','ex-27','ex-15','ex-25','ex-22']
      ],
      ['Day B','Back alternatives, biceps and posterior chain',
        ['ex-28','ex-8','ex-45','ex-21','ex-55']
      ],
      ['Day C','Full body, shoulders and arms',
        ['ex-76','ex-50','ex-11','ex-13','ex-66','ex-24']
      ]
    ]
  },

  // 8. ADVANCED - SPECIALIZATION
  {
    id:'advanced-specialization',
    name:'Advanced Specialization',
    ar:'برنامج التخصص للمحترفين',
    days:5,
    level:'Advanced',
    goal:'Targeted hypertrophy',
    goalAr:'تضخيم تخصصي',
    desc:'Advanced bodybuilding split with dedicated chest, back, legs, delts and arms sessions. Manage volume and recovery carefully.',
    descAr:'تقسيمة متقدمة للصدر والظهر والأرجل والأكتاف والذراعين. تتطلب خبرة سابقة ومتابعة دقيقة للحجم التدريبي والاستشفاء.',
    schedule:[
      ['Chest Priority','Complete chest and triceps',
        ['ex-1','ex-36','ex-38','ex-3','ex-77','ex-46','ex-16']
      ],
      ['Back Priority','Back width, thickness, traps and biceps',
        ['ex-6','ex-39','ex-58','ex-40','ex-9','ex-61','ex-63']
      ],
      ['Legs','Complete lower body specialization',
        ['ex-49','ex-48','ex-69','ex-70','ex-71','ex-68','ex-54']
      ],
      ['Delts & Arms','All delt heads, traps, biceps and triceps',
        ['ex-10','ex-11','ex-12','ex-62','ex-9','ex-44','ex-63','ex-46','ex-66','ex-17']
      ],
      ['Posterior Chain & Core','Hamstrings, glutes, lower back and core',
        ['ex-8','ex-20','ex-21','ex-41','ex-55','ex-73','ex-74','ex-75']
      ]
    ]
  }
];
  
