// Four structured training programs.
// Exercise IDs are explicit and match exercises.js.
export const programs = [
  {
    id: 'full-beginner',
    name: 'Full Body',
    ar: 'الجسم بالكامل',
    days: 3,
    level: 'Beginner',
    goal: 'General fitness',
    goalAr: 'لياقة عامة',
    desc: 'Three different full-body sessions with balanced exercise selection and recovery days between sessions.',
    descAr: 'ثلاث حصص مختلفة للجسم بالكامل، مع توزيع متوازن للتمارين وأيام راحة بين الحصص.',
    schedule: [
      [
        'Day A',
        'Chest, back, legs, shoulders, arms and core',
        ['ex-1', 'ex-5', 'ex-18', 'ex-11', 'ex-13', 'ex-22', 'ex-23']
      ],
      [
        'Day B',
        'Chest, back, posterior legs, triceps and abs',
        ['ex-2', 'ex-31', 'ex-8', 'ex-19', 'ex-15', 'ex-12', 'ex-24']
      ],
      [
        'Day C',
        'Chest, back, legs, glutes, arms and calves',
        ['ex-30', 'ex-28', 'ex-27', 'ex-20', 'ex-21', 'ex-45', 'ex-16', 'ex-34']
      ]
    ]
  },

  {
    id: 'upper-lower-intermediate',
    name: 'Upper / Lower',
    ar: 'الجزء العلوي والسفلي',
    days: 4,
    level: 'Intermediate',
    goal: 'General fitness',
    goalAr: 'لياقة عامة',
    desc: 'Four weekly sessions divided between upper and lower body, with different exercise variations across the week.',
    descAr: 'أربع حصص أسبوعيًا مقسمة بين الجزء العلوي والسفلي، مع تنويع التمارين خلال الأسبوع.',
    schedule: [
      [
        'Upper A',
        'Chest, back, shoulders, biceps and triceps',
        ['ex-1', 'ex-5', 'ex-7', 'ex-10', 'ex-11', 'ex-13', 'ex-15', 'ex-9']
      ],
      [
        'Lower A',
        'Quads, hamstrings, glutes, calves and abs',
        ['ex-18', 'ex-20', 'ex-21', 'ex-19', 'ex-22', 'ex-23', 'ex-24']
      ],
      [
        'Upper B',
        'Chest, back, rear delts, arms and forearms',
        ['ex-36', 'ex-39', 'ex-59', 'ex-12', 'ex-43', 'ex-44', 'ex-46', 'ex-17']
      ],
      [
        'Lower B',
        'Quads, hamstrings, glutes, adductors, calves and core',
        ['ex-49', 'ex-33', 'ex-51', 'ex-52', 'ex-68', 'ex-54', 'ex-55', 'ex-73']
      ]
    ]
  },

  {
    id: 'ppl-intermediate',
    name: 'Push / Pull / Legs',
    ar: 'دفع / سحب / أرجل',
    days: 6,
    level: 'Intermediate',
    goal: 'General fitness',
    goalAr: 'لياقة عامة',
    desc: 'Six different sessions: Push A, Pull A, Legs A, then Push B, Pull B and Legs B. Take a rest day after the first three sessions and after the second cycle.',
    descAr: 'ست حصص مختلفة: دفع A وسحب A وأرجل A، ثم دفع B وسحب B وأرجل B. خذ يوم راحة بعد أول ثلاث حصص وبعد انتهاء الدورة.',
    schedule: [
      [
        'Push A',
        'Chest, front and side delts, triceps',
        ['ex-1', 'ex-2', 'ex-10', 'ex-11', 'ex-15', 'ex-16']
      ],
      [
        'Pull A',
        'Lats, upper back, rear delts, biceps and traps',
        ['ex-5', 'ex-7', 'ex-40', 'ex-12', 'ex-13', 'ex-9', 'ex-17']
      ],
      [
        'Legs A',
        'Quads, hamstrings, glutes, calves and abs',
        ['ex-18', 'ex-20', 'ex-21', 'ex-33', 'ex-22', 'ex-24']
      ],
      [
        'Push B',
        'Chest, shoulders and triceps',
        ['ex-36', 'ex-37', 'ex-38', 'ex-43', 'ex-42', 'ex-46']
      ],
      [
        'Pull B',
        'Back thickness, lats, rear delts, biceps and forearms',
        ['ex-58', 'ex-59', 'ex-60', 'ex-61', 'ex-45', 'ex-63', 'ex-32']
      ],
      [
        'Legs B',
        'Quads, hamstrings, glutes, calves and core',
        ['ex-48', 'ex-50', 'ex-69', 'ex-70', 'ex-53', 'ex-34', 'ex-35', 'ex-74']
      ]
    ]
  },

  {
    id: 'arnold-split',
    name: 'Arnold Split',
    ar: 'تقسيمة أرنولد',
    days: 6,
    level: 'Intermediate',
    goal: 'General fitness',
    goalAr: 'لياقة عامة',
    desc: 'Six sessions divided into chest and back, shoulders and arms, and legs, repeated with different exercise variations. Take a rest day after every three sessions.',
    descAr: 'ست حصص مقسمة إلى صدر وظهر، أكتاف وذراعين، وأرجل، ثم تكرار التقسيمة بتمارين مختلفة. خذ يوم راحة بعد كل ثلاث حصص.',
    schedule: [
      [
        'Chest & Back A',
        'Chest and back',
        ['ex-1', 'ex-5', 'ex-2', 'ex-7', 'ex-3', 'ex-40']
      ],
      [
        'Shoulders & Arms A',
        'All shoulder heads, biceps, triceps and forearms',
        ['ex-10', 'ex-11', 'ex-12', 'ex-13', 'ex-15', 'ex-17', 'ex-9']
      ],
      [
        'Legs A',
        'Quads, hamstrings, glutes, calves and abs',
        ['ex-18', 'ex-20', 'ex-21', 'ex-19', 'ex-22', 'ex-23']
      ],
      [
        'Chest & Back B',
        'Chest and back variations',
        ['ex-36', 'ex-39', 'ex-37', 'ex-59', 'ex-38', 'ex-41']
      ],
      [
        'Shoulders & Arms B',
        'Shoulders, biceps, triceps and traps',
        ['ex-42', 'ex-43', 'ex-32', 'ex-44', 'ex-45', 'ex-46', 'ex-66', 'ex-9']
      ],
      [
        'Legs B',
        'Quads, hamstrings, glutes, calves and core',
        ['ex-49', 'ex-33', 'ex-51', 'ex-52', 'ex-68', 'ex-54', 'ex-35', 'ex-56']
      ]
    ]
  }
];
