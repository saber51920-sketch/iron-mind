// Exercise IDs are explicit: each session is curated rather than randomly sampled.
export const programs = [
  {id:'full-beginner',name:'Beginner Full Body',ar:'الجسم بالكامل للمبتدئين',days:3,level:'Beginner',goal:'General fitness',goalAr:'لياقة وتأسيس',desc:'Three non-consecutive full-body sessions. Learn the main movement patterns, leave 2–3 reps in reserve and progress gradually.',descAr:'ثلاث حصص للجسم بالكامل في أيام غير متتالية. تعلم الحركات الأساسية واترك 2–3 تكرارات احتياطية وزد الحمل تدريجيًا.',schedule:[
    ['Day A','Full body · technique',['ex-26','ex-27','ex-30','ex-31','ex-36','ex-22']],
    ['Day B','Full body · controlled strength',['ex-4','ex-5','ex-53','ex-19','ex-35','ex-23']],
    ['Day C','Full body · balanced practice',['ex-2','ex-28','ex-51','ex-20','ex-56','ex-34']]
  ]},
  {id:'upper-lower-beginner',name:'Upper / Lower Foundation',ar:'علوي وسفلي للمبتدئين',days:4,level:'Beginner',goal:'Muscle & skill',goalAr:'بناء العضلات وتعلم الأداء',desc:'A manageable four-day split with two upper and two lower sessions. Keep technique consistent and recover between sessions.',descAr:'تقسيمة أربعة أيام بحصتين علوي وحصتين سفلي. حافظ على الأداء الصحيح واترك وقتًا كافيًا للاستشفاء.',schedule:[
    ['Upper A','Chest, back, shoulders, arms',['ex-30','ex-31','ex-11','ex-15','ex-13']],
    ['Lower A','Quads, hamstrings, glutes, calves',['ex-27','ex-19','ex-20','ex-21','ex-22']],
    ['Upper B','Upper-body variations',['ex-2','ex-5','ex-32','ex-46','ex-16']],
    ['Lower B','Lower-body variations',['ex-49','ex-51','ex-52','ex-54','ex-34']]
  ]},
  {id:'ppl-intermediate',name:'Push / Pull / Legs',ar:'دفع / سحب / أرجل',days:6,level:'Intermediate',goal:'Hypertrophy',goalAr:'التضخيم العضلي',desc:'A six-session rotation for intermediate trainees. Run Push, Pull, Legs, rest, then repeat; reduce sets if recovery suffers.',descAr:'دورة من ست حصص للمتوسط: دفع وسحب وأرجل ثم راحة وإعادة الدورة. قلل المجموعات إذا تأثر الاستشفاء.',schedule:[
    ['Push A','Chest, front/side delts, triceps',['ex-1','ex-2','ex-3','ex-10','ex-11','ex-15']],
    ['Pull A','Lats, upper back, rear delts, biceps',['ex-5','ex-7','ex-40','ex-12','ex-13','ex-46']],
    ['Legs A','Quads, hamstrings, glutes, calves',['ex-18','ex-20','ex-21','ex-33','ex-22']],
    ['Push B','Chest and shoulder variations',['ex-37','ex-39','ex-44','ex-43','ex-16','ex-48']],
    ['Pull B','Back thickness, lats and arms',['ex-6','ex-41','ex-8','ex-32','ex-45','ex-17']],
    ['Legs B','Lower-body variations',['ex-50','ex-52','ex-53','ex-54','ex-55','ex-35']]
  ]},
  {id:'upper-lower-intermediate',name:'Upper / Lower Strength & Size',ar:'علوي وسفلي للقوة والتضخيم',days:4,level:'Intermediate',goal:'Strength + hypertrophy',goalAr:'قوة وتضخيم',desc:'Four focused sessions balancing compound lifts and accessory work. Use heavier controlled sets on the first movement and moderate reps afterward.',descAr:'أربع حصص تجمع التمارين المركبة وتمارين العزل. استخدم أوزانًا أثقل بتحكم في أول تمرين ثم تكرارات متوسطة في الباقي.',schedule:[
    ['Upper Strength','Horizontal and vertical presses and pulls',['ex-1','ex-5','ex-40','ex-10','ex-48']],
    ['Lower Strength','Squat and hinge emphasis',['ex-18','ex-29','ex-52','ex-22','ex-24']],
    ['Upper Hypertrophy','Chest, back, delts and arms',['ex-2','ex-38','ex-31','ex-44','ex-45','ex-47']],
    ['Lower Hypertrophy','Quads, glutes, hamstrings, calves',['ex-49','ex-33','ex-21','ex-55','ex-57']]
  ]},
  {id:'bro-intermediate',name:'Body-Part Split',ar:'تقسيمة العضلة اليومية',days:5,level:'Intermediate',goal:'Hypertrophy',goalAr:'التضخيم',desc:'A five-day body-part structure. Weekly volume matters more than the split itself; avoid taking every set to failure.',descAr:'تقسيمة خمسة أيام حسب العضلات. حجم التدريب الأسبوعي أهم من اسم التقسيمة، ولا تصل للفشل العضلي في كل المجموعات.',schedule:[
    ['Chest','Chest from multiple angles',['ex-1','ex-2','ex-37','ex-38','ex-39','ex-3']],
    ['Back','Lats and upper/lower back',['ex-6','ex-5','ex-40','ex-41','ex-42','ex-9']],
    ['Shoulders','Front, side and rear delts',['ex-10','ex-43','ex-11','ex-44','ex-12','ex-32']],
    ['Legs','Complete lower body',['ex-18','ex-49','ex-20','ex-52','ex-21','ex-22']],
    ['Arms & Core','Biceps, triceps, forearms and trunk',['ex-13','ex-45','ex-46','ex-15','ex-16','ex-47','ex-24','ex-25']]
  ]},
  {id:'strength-3day',name:'3-Day Strength',ar:'برنامج القوة 3 أيام',days:3,level:'Intermediate',goal:'Strength',goalAr:'القوة',desc:'Three full-body strength sessions built around squat, press, hinge and row patterns. Keep 1–3 reps in reserve on main lifts.',descAr:'ثلاث حصص قوة للجسم بالكامل تعتمد على السكوات والضغط ومفصل الورك والسحب. اترك 1–3 تكرارات احتياطية في التمارين الرئيسية.',schedule:[
    ['Day A','Squat, bench and row',['ex-18','ex-1','ex-40','ex-10','ex-23']],
    ['Day B','Hinge, overhead press and pull',['ex-29','ex-10','ex-6','ex-33','ex-24']],
    ['Day C','Squat variation, incline press and row',['ex-50','ex-37','ex-31','ex-51','ex-56']]
  ]},
  {id:'home-beginner',name:'Home Bodyweight',ar:'برنامج منزلي بوزن الجسم',days:3,level:'Beginner',goal:'Fitness at home',goalAr:'لياقة في المنزل',desc:'A simple home plan using bodyweight and a stable chair or bench. Choose easier variations whenever form breaks down.',descAr:'برنامج منزلي بسيط بوزن الجسم وكرسي أو سطح ثابت. اختر نسخة أسهل من الحركة إذا اختل الأداء.',schedule:[
    ['Day A','Push, squat and trunk',['ex-26','ex-27','ex-23','ex-36','ex-58']],
    ['Day B','Single-leg, hips and upper body',['ex-51','ex-53','ex-4','ex-28','ex-56']],
    ['Day C','Full-body conditioning',['ex-4','ex-27','ex-58','ex-35','ex-25']]
  ]},
  {id:'advanced-specialization',name:'Advanced Specialization',ar:'برنامج التخصص للمحترفين',days:5,level:'Advanced',goal:'Targeted hypertrophy',goalAr:'تضخيم تخصصي',desc:'An advanced template for experienced lifters who already tolerate substantial training volume. Specialize one or two lagging areas and manage fatigue carefully.',descAr:'قالب متقدم لمن لديهم خبرة وقدرة على تحمل حجم تدريبي مرتفع. ركز على عضلة أو عضلتين متأخرتين وراقب الإجهاد والاستشفاء.',schedule:[
    ['Chest Priority','Chest priority with triceps',['ex-1','ex-37','ex-39','ex-3','ex-48','ex-16']],
    ['Back Priority','Back thickness and width',['ex-6','ex-40','ex-41','ex-7','ex-42','ex-9']],
    ['Legs','Complete lower body',['ex-50','ex-33','ex-52','ex-21','ex-55','ex-54']],
    ['Delts & Arms','All delt heads and arms',['ex-10','ex-44','ex-12','ex-45','ex-47','ex-17']],
    ['Posterior Chain & Core','Hamstrings, glutes and trunk',['ex-8','ex-20','ex-53','ex-55','ex-57','ex-24']]
  ]}
];
