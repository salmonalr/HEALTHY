import { Myth } from '../../types/myth';

export const immunityMyths: Myth[] = [
  {
    id: 'cold-weather-causes-colds',
    claim: 'Going outside into the winter cold without a jacket directly infects you with the common cold.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Colds are caused exclusively by viral pathogens (rhinoviruses, coronaviruses), not ambient temperatures alone.',
    origin: 'The linguistic association between the temperature sensation "cold" and the upper respiratory illness name "the common cold."',
    scientificTruth: 'You cannot catch a viral infection without exposure to an actual virus. Cold winter weather drives people indoors into crowded, poorly ventilated rooms where airborne aerosols linger. However, dry cold air does slightly dry nasal mucosa, making viral entry easier if the pathogen is present.',
    mechanism: 'Infection requires cellular entry via ICAM-1 receptors on respiratory epithelial cells; ambient temperature alone cannot spontaneously generate viral capsids.',
    practicalAdvice: 'Dress warmly for thermal comfort and hypothermia protection, but wash your hands, ventilate indoor spaces, and avoid touching your face to prevent winter colds.',
    sources: ['Centers for Disease Control and Prevention (CDC)', 'National Institute of Allergy and Infectious Diseases (NIAID)', 'Mayo Clinic'],
    believedPercentage: 79,
    quiz: {
      questionText: 'What is the biological prerequisite to developing the common cold?',
      options: [
        { id: 'a', text: 'Exposure to a respiratory virus (such as a rhinovirus).', isCorrect: true, explanation: 'Correct! You cannot get a cold without an infectious viral pathogen.' },
        { id: 'b', text: 'Stepping outside with wet hair into a 40°F breeze.', isCorrect: false, explanation: 'Chilly air alone cannot create viral particles out of nothing.' },
        { id: 'c', text: 'Eating ice cubes on a Tuesday.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What microscopic particle actually invades your nasal cells?'
    },
    tags: ['cold', 'virus', 'winter', 'immunity']
  },
  {
    id: 'vitamin-c-cures-cold',
    claim: 'Megadosing Vitamin C tablets instantly cures or halts the common cold once symptoms begin.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Extensive Cochrane reviews show therapeutic Vitamin C taken after symptoms start does not reduce cold duration or severity.',
    origin: 'Linus Pauling’s 1970 bestseller "Vitamin C and the Common Cold," where the Nobel chemist made sweeping unsubstantiated health claims.',
    scientificTruth: 'A landmark Cochrane meta-analysis spanning 29 clinical trials and over 11,000 participants found that taking Vitamin C after catching a cold had no statistically significant impact on duration. Routine daily supplementation only reduced cold duration by an imperceptible 8% in adults (about half a day over a week).',
    mechanism: 'Human renal excretion thresholds saturate at approximately 200-400 mg/day of ascorbic acid; excess megadoses (2,000 mg+) are simply excreted in urine or cause osmotic diarrhea and kidney stones.',
    practicalAdvice: 'Get your Vitamin C from bell peppers, citrus fruits, and broccoli. Megadosing expensive supplement packets will not cure your cold.',
    sources: ['Cochrane Database of Systematic Reviews (Hemilä & Chalker)', 'Harvard T.H. Chan School of Public Health', 'Mayo Clinic'],
    believedPercentage: 84,
    quiz: {
      questionText: 'What happens to your body when you take 2,000 mg of Vitamin C from an effervescent packet?',
      options: [
        { id: 'a', text: 'Your kidneys filter and excrete the vast majority into your urine.', isCorrect: true, explanation: 'Spot on! Ascorbic acid is water-soluble; kidneys rapidly flush out excess unneeded doses.' },
        { id: 'b', text: 'It creates a forcefield that repels all viruses.', isCorrect: false, explanation: 'A marketing fantasy.' },
        { id: 'c', text: 'It instantly converts into penicillin.', isCorrect: false, explanation: 'Vitamin C is not an antibiotic.' }
      ],
      bobblyHint: 'Because Vitamin C is water-soluble, where does the excess go when your tissues are full?'
    },
    tags: ['vitamin-c', 'supplements', 'common-cold', 'cochrane']
  },
  {
    id: 'starve-a-fever-feed-a-cold',
    claim: '"Feed a cold, starve a fever" — you should stop eating food whenever you run a fever.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'A fever spikes your basal metabolic rate by 10-12% per °C; starving your body deprives white blood cells of vital fuel and fluids.',
    origin: 'A 1574 dictionary entry by John Withals suggesting that fasting cools the body’s internal furnace.',
    scientificTruth: 'Your immune system mounts fever as a protective pyrogenic response to inhibit pathogen replication and stimulate leukocyte motility. This immune hyperactivity consumes massive amounts of glucose, protein, and water. Starving yourself weakens antibody production and accelerates dehydration.',
    mechanism: 'Endogenous pyrogens (IL-1, IL-6, TNF-alpha) reset hypothalamic set-point, driving up gluconeogenesis, cellular respiration, and insensible fluid losses.',
    practicalAdvice: 'Drink plenty of water and clear broths to prevent dehydration. Eat small, nutrient-dense, easily digestible meals whenever you feel an appetite.',
    sources: ['American Academy of Family Physicians (AAFP)', 'Scientific American Health', 'Mayo Clinic'],
    believedPercentage: 63,
    quiz: {
      questionText: 'Why is "starving a fever" medically counterproductive?',
      options: [
        { id: 'a', text: 'Fever increases metabolic rate and fluid loss, requiring calories and hydration for immune defense.', isCorrect: true, explanation: 'Correct! The immune system needs energy and hydration to combat infections.' },
        { id: 'b', text: 'Fever turns your stomach into an incinerator.', isCorrect: false, explanation: 'False.' },
        { id: 'c', text: 'Food directly kills bacteria inside the bloodstream.', isCorrect: false, explanation: 'Food provides metabolic substrate, not direct antimicrobial action.' }
      ],
      bobblyHint: 'Does your body need more energy or zero energy when fighting off an invader at 101°F?'
    },
    tags: ['fever', 'immunity', 'nutrition', 'old-wives-tales']
  },
  {
    id: 'antibiotics-cure-flu-and-colds',
    claim: 'You should demand an antibiotic prescription from your doctor whenever you get a bad flu or cold.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Antibiotics kill bacteria only; they are completely powerless against viruses and drive dangerous global antimicrobial resistance.',
    origin: 'Patients expecting a tangible pill prescription whenever feeling miserable with respiratory symptoms.',
    scientificTruth: 'The common cold, influenza, acute bronchitis, and COVID-19 are all caused by viruses. Antibiotics target bacterial peptidoglycan cell walls, 70S ribosomes, or bacterial enzymes—none of which exist in viruses. Taking antibiotics for viral bugs kills beneficial gut flora and breeds deadly drug-resistant superbugs.',
    mechanism: 'Beta-lactams and macrolides have zero biochemical target on viral capsids or viral RNA/DNA polymerases.',
    practicalAdvice: 'Rest, hydrate, and treat viral symptoms with over-the-counter pain relievers. Never demand or pressure healthcare providers for antibiotics for viral illnesses.',
    sources: ['World Health Organization (WHO Antimicrobial Resistance)', 'Centers for Disease Control and Prevention (CDC)', 'FDA Antibiotic Awareness'],
    believedPercentage: 58,
    quiz: {
      questionText: 'What happens when you take an antibiotic for a viral illness like the flu?',
      options: [
        { id: 'a', text: 'It has zero effect on the virus, while wiping out healthy gut bacteria and fostering resistance.', isCorrect: true, explanation: 'Precisely! Antibiotics do not work on viruses and harm your beneficial microbiome.' },
        { id: 'b', text: 'It destroys 99% of flu viruses within 10 minutes.', isCorrect: false, explanation: 'Antibiotics have zero biological effect on viruses.' },
        { id: 'c', text: 'It turns the flu into a mild toothache.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'What type of microbe do antibiotics target: bacteria or viruses?'
    },
    tags: ['antibiotics', 'superbugs', 'flu', 'pharmacology']
  },
  {
    id: 'green-snot-means-antibiotics',
    claim: 'If your nasal mucus turns green or yellow, you definitely have a bacterial infection requiring antibiotics.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Green mucus is caused by myeloperoxidase enzymes in dead white blood cells fighting a normal viral infection, not bacteria.',
    origin: 'A simplistic diagnostic assumption that clear mucus = allergy, green mucus = bacterial disease.',
    scientificTruth: 'When neutrophils rush to your nasal passages to fight a common viral cold, they release the green-pigmented enzyme myeloperoxidase (an iron-containing enzyme). As cellular debris concentrates over several days, mucus naturally shifts from clear to white, yellow, and vibrant green during standard viral progression.',
    mechanism: 'Heme-containing myeloperoxidase produces green hypochlorous acid during respiratory oxidative bursts, coloring normal phlegm.',
    practicalAdvice: 'Do not rush for antibiotics just because snot is green. Only suspect bacterial sinusitis if symptoms worsen after 10 days, or if you develop high fever and severe facial pain.',
    sources: ['Centers for Disease Control and Prevention (CDC Get Smart)', 'American Academy of Otolaryngology', 'Journal of the American Board of Family Medicine'],
    believedPercentage: 71,
    quiz: {
      questionText: 'What gives mucus its green or yellow color during the middle of a common viral cold?',
      options: [
        { id: 'a', text: 'Green enzymes (myeloperoxidase) inside your own white blood cells doing their job.', isCorrect: true, explanation: 'Correct! Your own immune cells contain iron-rich enzymes that turn phlegm green.' },
        { id: 'b', text: 'Billions of live green moss spores growing in the sinuses.', isCorrect: false, explanation: 'Moss does not grow in human sinuses.' },
        { id: 'c', text: 'Pure liquefied brain matter.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What iron-containing enzyme in neutrophils produces that telltale green color?'
    },
    tags: ['mucus', 'snot', 'immunity', 'antibiotics']
  },
  {
    id: 'sweat-out-a-cold-sauna',
    claim: 'You can sweat out a cold or flu by sitting in a 190°F sauna or doing intense cardio.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'You cannot excrete viruses through sweat glands; intense heat and exercise while ill only causes dangerous dehydration and cardiac strain.',
    origin: 'Folk medicine beliefs that sweating purges toxic humors from the flesh.',
    scientificTruth: 'Sweat glands secrete 99% water and electrolytes to regulate skin temperature. Viruses replicate intracellularly in mucosal lining and lymphoid tissue. Subjecting a feverish body to sauna heat or heavy cardio diverts vital blood flow away from immune organs and risks heat exhaustion and severe dehydration.',
    mechanism: 'Thermal stress elevates resting heart rate and sympathetic tone, competing with leukocyte mobilization and pyrogenic regulation.',
    practicalAdvice: 'When sick with a systemic viral infection, rest, sleep, and drink liquids. Warm showers or inhaling steam can soothe nasal passages safely without extreme heat stress.',
    sources: ['American College of Sports Medicine (Exercise & Illness Guidelines)', 'Mayo Clinic', 'Harvard Health Publishing'],
    believedPercentage: 62,
    quiz: {
      questionText: 'Can human sweat glands excrete viral pathogens to "sweat out" an infection?',
      options: [
        { id: 'a', text: 'No, sweat glands only secrete water and salt; sweating while feverish causes dehydration.', isCorrect: true, explanation: 'Spot on! Sweat glands do not filter or eliminate viruses from your system.' },
        { id: 'b', text: 'Yes, viruses are melted into liquid wax and sweat out.', isCorrect: false, explanation: 'Biochemically impossible.' },
        { id: 'c', text: 'Only if you do 50 pushups in a sauna.', isCorrect: false, explanation: 'Exercising with a fever is medically dangerous.' }
      ],
      bobblyHint: 'Do viruses come out of your pores like water droplets?'
    },
    tags: ['sweat', 'sauna', 'illness', 'safety']
  },
  {
    id: 'swallowed-gum-seven-years',
    claim: 'If you accidentally swallow chewing gum, it sits undigested inside your stomach for 7 whole years.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Your digestive tract passes swallowed gum out in your stool within 24 to 72 hours just like any insoluble fiber.',
    origin: 'Parents trying to stop kids from swallowing sticky gum and making choking messes.',
    scientificTruth: 'While the synthetic rubber/gum base is resistant to gastric acid and pancreatic amylase, your stomach’s muscular peristaltic contractions push it through the pylorus into the small and large intestines. It exits your body in normal bowel movements within a couple of days.',
    mechanism: 'Migrating motor complex (MMC) phase III contractions sweep non-digestible solid objects through the gastrointestinal tract.',
    practicalAdvice: 'Swallowing an occasional piece of gum is harmless. However, swallowing dozens of pieces in a short period (especially in toddlers) can rarely form a mass (bezoar). Spit it in the trash.',
    sources: ['American Chemical Society (Reactions Series)', 'Mayo Clinic Gastroenterology', 'Duke University Medical Center'],
    believedPercentage: 68,
    quiz: {
      questionText: 'How long does swallowed chewing gum actually take to pass through the human digestive tract?',
      options: [
        { id: 'a', text: 'About 1 to 3 days, exiting naturally in stool.', isCorrect: true, explanation: 'Correct! Normal intestinal peristalsis moves it along just like raw vegetable seeds.' },
        { id: 'b', text: 'Exactly 7 full calendar years.', isCorrect: false, explanation: 'A classic schoolyard myth told by parents.' },
        { id: 'c', text: 'It binds forever to your ribcage.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'Think about how long it takes a piece of corn or roughage to pass through your gut!'
    },
    tags: ['digestive', 'gum', 'stomach', 'mythology']
  },
  {
    id: 'dairy-produces-excess-phlegm',
    claim: 'Drinking milk or eating ice cream when sick causes your respiratory tract to manufacture copious phlegm.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Blinded studies show milk does not increase mucus volume or congestion; emulsion texture temporarily coats the throat.',
    origin: 'A 12th-century text by physician Moses Maimonides warning that milk produces "stuffiness in the head."',
    scientificTruth: 'Multiple clinical trials where participants were challenged with cows’ milk vs soy milk placebos found no difference in nasal secretions, throat swab weights, or rhinovirus symptom scores. The sensory perception occurs because milk is a natural lipid-in-water emulsion that mixes with saliva, creating a transient coating on oral mucous membranes.',
    mechanism: 'Salivary mucin aggregates with milk fat globules and calcium ions, increasing fluid viscosity in the mouth without stimulating goblet cells in the trachea.',
    practicalAdvice: 'If you enjoy milk, yogurt, or ice cream when feeling under the weather, it provides valuable calories, fluid, and soothing throat relief. Eat whatever brings you comfort.',
    sources: ['American Review of Respiratory Disease (Pinnock et al.)', 'Journal of the American College of Nutrition', 'Australasian Society of Clinical Immunology and Allergy'],
    believedPercentage: 73,
    quiz: {
      questionText: 'Why does milk feel like it creates phlegm even though clinical trials show mucus volume does not increase?',
      options: [
        { id: 'a', text: 'Milk fat emulsion temporarily mixes with saliva, creating a thick coating in the mouth.', isCorrect: true, explanation: 'Yes! It is a harmless physical sensory texture in the mouth, not respiratory phlegm.' },
        { id: 'b', text: 'Dairy immediately turns into green pulmonary glue.', isCorrect: false, explanation: 'Biologically false.' },
        { id: 'c', text: 'Milk enters your lungs directly through the windpipe.', isCorrect: false, explanation: 'If milk entered your lungs you would choke violently.' }
      ],
      bobblyHint: 'Is it real bronchial mucus, or the creamy texture of milk coating your tongue and throat?'
    },
    tags: ['dairy', 'milk', 'mucus', 'respiratory']
  },
  {
    id: 'hand-sanitizer-creates-superbugs',
    claim: 'Using alcohol-based hand sanitizers creates invincible antibiotic-resistant bacterial superbugs.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Alcohol kills microbes physically by dissolving lipid membranes and coagulating proteins, making resistance biologically implausible.',
    origin: 'Confusing biological antibiotic resistance (targeted molecular mutations) with physical chemical antiseptics.',
    scientificTruth: 'Antibiotics target specific bacterial enzymes or ribosomes, where a single genetic point mutation can confer resistance. Alcohol hand sanitizer (60-80% ethanol or isopropanol) operates like a physical chemical wrecking ball: it dissolves cell membranes and denatures proteins instantaneously in seconds. Bacteria cannot mutate around physical membrane destruction.',
    mechanism: 'Aliphatic alcohols denature tertiary protein structures and solubilize lipid bilayers via membrane lysis; no specific enzymatic receptor is involved.',
    practicalAdvice: 'Use alcohol-based hand rub with at least 60% alcohol when soap and running water are not readily available. Soap and water is still superior for dirt, chemicals, and norovirus.',
    sources: ['Centers for Disease Control and Prevention (CDC Hand Hygiene)', 'World Health Organization (WHO Hand Hygiene Guidelines)', 'Infection Control & Hospital Epidemiology'],
    believedPercentage: 53,
    quiz: {
      questionText: 'Why can bacteria not easily mutate resistance to 70% alcohol hand sanitizer the way they resist antibiotics?',
      options: [
        { id: 'a', text: 'Alcohol physically dissolves the lipid cell membranes and curdles bacterial proteins.', isCorrect: true, explanation: 'Correct! It is a mechanical/physical destruction, like a sledgehammer destroying a wall.' },
        { id: 'b', text: 'Bacteria enjoy drinking cocktails and fall asleep.', isCorrect: false, explanation: 'Humorous, but false.' },
        { id: 'c', text: 'Sanitizers contain miniature silver lasers.', isCorrect: false, explanation: 'No.' }
      ],
      bobblyHint: 'Can a brick wall mutate to become immune to a wrecking ball?'
    },
    tags: ['sanitizer', 'hygiene', 'microbiology', 'superbugs']
  },
  {
    id: 'chicken-soup-pure-placebo',
    claim: 'Chicken noodle soup is 100% emotional folklore with zero physiological benefits for upper respiratory illness.',
    verdict: 'HALF_TRUTH',
    category: 'Immunity & Sickness',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Chicken soup actually provides mild anti-inflammatory benefits, clears nasal cilia, and provides crucial electrolytes and fluid.',
    origin: '12th-century physician Maimonides famously prescribed chicken soup for respiratory ailments; modern cynics assumed it was pure placebo.',
    scientificTruth: 'Laboratory research by Dr. Stephen Rennard (published in Chest) found that chicken soup inhibited neutrophil chemotaxis, reducing upper respiratory inflammatory response. Furthermore, hot broth steam accelerates nasal mucus clearance (mucociliary transport) and supplies sodium and potassium electrolytes.',
    mechanism: 'Carnosine, gelatin, and steam promote mucociliary clearance velocity and attenuate leukocyte cytokine cascades.',
    practicalAdvice: 'Grandma was right! Enjoy warm chicken soup when sick for hydration, easy protein, electrolyte replenishment, and comfort.',
    sources: ['Chest Journal (Rennard et al., Chicken Soup Inhibits Neutrophil Chemotaxis)', 'Mount Sinai Pulmonary Division (Mucociliary Velocity Study)', 'Harvard Health'],
    believedPercentage: 45,
    quiz: {
      questionText: 'What did pulmonology experiments demonstrate regarding hot chicken soup when sick?',
      options: [
        { id: 'a', text: 'It mildly inhibits neutrophil inflammation and accelerates nasal mucus velocity.', isCorrect: true, explanation: 'Yes! Science confirmed that hot chicken broth has mild anti-inflammatory and decongestant effects.' },
        { id: 'b', text: 'It is toxic to human red blood cells.', isCorrect: false, explanation: 'False.' },
        { id: 'c', text: 'It replaces all standard vaccines.', isCorrect: false, explanation: 'Chicken soup does not replace vaccines.' }
      ],
      bobblyHint: 'What did pulmonologists in Nebraska discover about chicken soup and inflammation?'
    },
    tags: ['chicken-soup', 'home-remedies', 'flu', 'nutrition']
  },
  {
    id: 'vaccines-overload-immune-system',
    claim: 'Childhood vaccines given according to the standard schedule overload and overwhelm an infant’s immune system.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'An infant’s immune system safely encounters trillions of antigens daily; all childhood vaccines combined contain just ~160 antigens.',
    origin: 'Anti-vaccine pamphlets from the 1990s suggesting that combining shots creates an "immune traffic jam."',
    scientificTruth: 'From the moment of vaginal or cesarean birth, a newborn’s gut and skin are colonized by trillions of bacteria, each with thousands of distinct surface antigens. Due to modern purification, the entire 14-vaccine childhood schedule today contains only about 160 total antigens, compared to over 3,000 antigens in the older 1980s whole-cell vaccines.',
    mechanism: 'Infant B-cells and T-cells generate billions of antibody-binding receptor variations daily. Vaccinations utilize less than 0.1% of an infant’s circulating immunological capacity.',
    practicalAdvice: 'Following the recommended pediatric vaccination schedule protects babies when they are most vulnerable to deadly infectious diseases like whooping cough and measles.',
    sources: ['Pediatrics (Offit et al., Addressing Parents’ Concerns: Do Vaccines Overwhelm the Immune System?)', 'World Health Organization (WHO)', 'American Academy of Pediatrics (AAP)'],
    believedPercentage: 44,
    quiz: {
      questionText: 'How many antigens does the entire modern routine childhood vaccine schedule contain compared to daily environmental exposures?',
      options: [
        { id: 'a', text: 'Only ~160 antigens, compared to billions of environmental antigens a baby encounters daily.', isCorrect: true, explanation: 'Correct! Modern vaccines are extraordinarily purified and represent a tiny fraction of daily immune exposure.' },
        { id: 'b', text: 'Over 500,000 synthetic toxic antigens.', isCorrect: false, explanation: 'False anti-vaccine misinformation.' },
        { id: 'c', text: 'Zero antigens.', isCorrect: false, explanation: 'Vaccines contain antigens to stimulate protective antibodies.' }
      ],
      bobblyHint: 'Does an infant encounter more antigens playing on the living room floor or in a purified vaccine shot?'
    },
    tags: ['vaccines', 'pediatrics', 'antigens', 'immunology']
  },
  {
    id: 'once-fever-breaks-non-contagious',
    claim: 'The exact moment your fever drops back to 98.6°F, you are completely non-contagious and cannot infect others.',
    verdict: 'BUSTED',
    category: 'Immunity & Sickness',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Viral shedding frequently continues for days after fever resolves; CDC guidelines advise staying home until 24 hours fever-free without medication.',
    origin: 'Workplace policies allowing employees to return to work the morning after popping fever-reducing acetaminophen.',
    scientificTruth: 'For influenza, RSV, COVID-19, and common colds, viral replication and respiratory aerosol shedding can persist for 5 to 7 days after fever resolves. Masking fever with antipyretic drugs (Tylenol, ibuprofen) artificially hides body temperature while viral shedding remains high.',
    mechanism: 'Viral shedding curves peak around symptom onset and decline gradually; thermal hypothalamic regulation resets faster than mucosal clearance.',
    practicalAdvice: 'Wait at least 24 full hours after your fever has ended WITHOUT using fever-reducing medications, and ensure overall symptoms are improving before returning to crowded public settings.',
    sources: ['Centers for Disease Control and Prevention (CDC Respiratory Virus Guidance)', 'Journal of Infectious Diseases', 'Mayo Clinic'],
    believedPercentage: 65,
    quiz: {
      questionText: 'Can you still transmit a respiratory virus to coworkers if your fever just dropped because you took ibuprofen?',
      options: [
        { id: 'a', text: 'Yes, medication lowers your temperature while viral shedding continues out of your airways.', isCorrect: true, explanation: 'Correct! Fever reducers treat the thermal symptom, not the underlying viral shedding.' },
        { id: 'b', text: 'No, antipyretics electrocute all viruses instantly.', isCorrect: false, explanation: 'False.' },
        { id: 'c', text: 'Only if you sneeze on a mirror.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does taking an Advil eliminate the virus in your lungs or just lower your thermometer reading?'
    },
    tags: ['contagious', 'fever', 'workplace', 'flu']
  }
];
