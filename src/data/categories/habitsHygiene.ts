import { Myth } from '../../types/myth';

export const habitsHygieneMyths: Myth[] = [
  {
    id: 'five-second-rule-food',
    claim: 'If food drops on the floor, it is 100% safe from bacteria as long as you pick it up within 5 seconds.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Bacteria like Salmonella and E. coli transfer instantaneously in less than a millisecond upon surface contact.',
    origin: 'Schoolyard cafeteria folklore, perhaps loosely tied to Genghis Khan’s "Khan rule" that food on the ground was safe for the banquet host.',
    scientificTruth: 'Rutgers University food scientist Donald Schaffner tested 2,560 measurements across carpet, tile, wood, and stainless steel with watermelon, bread, and gummy candies. In all tests, bacterial transfer began immediately upon contact (<0.1 seconds). Moisture content of the food was the biggest factor; wet food absorbed hundreds of thousands of bacteria in a split second.',
    mechanism: 'Adhesion of bacterial biofilms occurs via electrostatic forces and capillary liquid bridge forces instantaneously.',
    practicalAdvice: 'If food drops on a clean kitchen counter or clean dry hardwood, dry items (like a cracker) have lower bacterial load, but any moist food dropped on high-traffic floors should simply be tossed in the compost.',
    sources: ['Applied and Environmental Microbiology (Rutgers University Study)', 'Journal of Applied Microbiology', 'American Society for Microbiology'],
    believedPercentage: 70,
    quiz: {
      questionText: 'What did food science laboratory testing at Rutgers University reveal about the "five-second rule"?',
      options: [
        { id: 'a', text: 'Bacterial transfer happens instantaneously in under a fraction of a second.', isCorrect: true, explanation: 'Correct! Bacteria do not wait for a 5-second stopwatch; moist food picks them up in milliseconds.' },
        { id: 'b', text: 'Bacteria require 5 full minutes to crawl onto food.', isCorrect: false, explanation: 'Bacteria do not crawl like insects; they transfer instantly via surface tension.' },
        { id: 'c', text: 'Floor bacteria only like vegetables, not cookies.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Do bacteria need to wait for a count of five before sticking to a dropped piece of watermelon?'
    },
    tags: ['hygiene', 'food-safety', 'bacteria', 'kitchen']
  },
  {
    id: 'toilet-seat-dirtiest-object',
    claim: 'The toilet seat is the absolute dirtiest, most bacteria-infested surface in your entire house.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Kitchen sponges, smartphone screens, kitchen cutting boards, and TV remotes carry hundreds of times more microbes than toilet seats.',
    origin: 'Natural psychological disgust regarding bodily excretion.',
    scientificTruth: 'Toilet seats are non-porous, smooth, cool surfaces that are cleaned regularly with bleach or household detergents, making them hostile environments for bacterial colonies. Microbiologist Dr. Charles Gerba discovered that the average kitchen sponge harbors 200,000 times more bacteria per square inch than a toilet seat, and smartphone screens carry 10 times more microbes.',
    mechanism: 'Kitchen sponges provide optimal bacterial conditions: moisture, warmth, and organic food debris, allowing exponential binary fission.',
    practicalAdvice: 'Disinfect your kitchen sponge frequently (or replace it weekly), wipe down your smartphone with an alcohol wipe, and wash cutting boards with hot soapy water.',
    sources: ['Scientific Reports (Microbiome Analysis of Used Kitchen Sponges)', 'University of Arizona Environmental Microbiology', 'Journal of Applied Microbiology'],
    believedPercentage: 78,
    quiz: {
      questionText: 'Which household item typically harbors over 100,000 times more bacteria than a toilet seat?',
      options: [
        { id: 'a', text: 'The kitchen sink dish sponge.', isCorrect: true, explanation: 'Correct! Warm, moist kitchen sponges full of food particles are bacterial paradises.' },
        { id: 'b', text: 'The porcelain bathtub rim.', isCorrect: false, explanation: 'Bathtubs are relatively clean compared to sponges.' },
        { id: 'c', text: 'A clean wine glass in a cabinet.', isCorrect: false, explanation: 'Clean glasses have very low microbial counts.' }
      ],
      bobblyHint: 'What warm, damp, crumb-filled item sitting in your kitchen sink do you clean dishes with?'
    },
    tags: ['hygiene', 'microbiology', 'home-cleanliness', 'germs']
  },
  {
    id: 'swallow-spiders-in-sleep',
    claim: 'The average human swallows 8 spiders per year in their sleep without ever knowing it.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Spiders actively avoid huge, breathing, vibrating humans; swallowing a spider in sleep is virtually unheard of.',
    origin: 'A 1993 column by Lisa Holst demonstrating how gullible internet users were to fabricated "facts" circulated on early web forums.',
    scientificTruth: 'To a spider, a sleeping human is a giant, noisy, vibrating mountain. With regular breathing, snoring, and a beating pulse radiating vibrations through the mattress, spiders perceive us as terrifying predators and steer clear. Furthermore, if an insect crawled across your lips or tongue, your reflexive swallow/cough mechanism would wake you immediately.',
    mechanism: 'Spiders use lyriform organs and slit sensilla on their legs to detect acoustic and mechanical vibrations, fleeing large mammalian vibrations.',
    practicalAdvice: 'Sleep peacefully! You are not eating spiders in your sleep.',
    sources: ['Scientific American', 'Burke Museum of Natural History and Culture (Spider Myths)', 'British Arachnological Society'],
    believedPercentage: 63,
    quiz: {
      questionText: 'Why do spiders avoid crawling anywhere near the face of a sleeping human?',
      options: [
        { id: 'a', text: 'The vibrations of human breathing, heartbeat, and snoring signal a giant living predator.', isCorrect: true, explanation: 'Spot on! To sensitive spider leg sensors, a breathing human feels like an earthquake of danger.' },
        { id: 'b', text: 'Human breath emits spider-toxic venom.', isCorrect: false, explanation: 'Human breath is not venomous.' },
        { id: 'c', text: 'Spiders only sleep during the day.', isCorrect: false, explanation: 'Arachnid behavior varies, but all avoid huge vibrating mammals.' }
      ],
      bobblyHint: 'How does a giant snorting human feel to a tiny eight-legged creature sensitive to vibrations?'
    },
    tags: ['spiders', 'urban-legend', 'sleep', 'zoology']
  },
  {
    id: 'brush-teeth-after-vomiting-or-acid',
    claim: 'If you vomit or drink pure lemon juice, you should immediately scrub your teeth with a hard toothbrush.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Stomach acid and citric acid soften tooth enamel; immediate brushing abrasively scours off your enamel layer.',
    origin: 'The natural urge to scrub away bad tastes and morning sickness nausea immediately.',
    scientificTruth: 'Gastric acid has a pH of 1.5 to 2.0. This intense acidity temporarily demineralizes and softens the hydroxyapatite matrix of tooth enamel. If you take a nylon bristled toothbrush and abrasive toothpaste to it immediately, you scrub away microscopic layers of softened enamel, causing irreversible tooth wear and extreme sensitivity.',
    mechanism: 'Acid-induced enamel dissolution reduces surface microhardness; remineralization requires 30-60 minutes of saliva calcium/phosphate buffering.',
    practicalAdvice: 'Rinse your mouth with water or a baking soda solution (1 tsp baking soda in water) to neutralize the acid immediately. Wait at least 30 to 45 minutes before brushing with fluoride toothpaste.',
    sources: ['American Dental Association (ADA)', 'British Dental Journal', 'Mayo Clinic Dental Health'],
    believedPercentage: 67,
    quiz: {
      questionText: 'What should you do immediately after vomiting or drinking acidic lemon water to protect your teeth?',
      options: [
        { id: 'a', text: 'Rinse with plain water or baking soda solution, and wait 30 minutes before brushing.', isCorrect: true, explanation: 'Correct! Rinsing neutralizes the acid while waiting allows saliva to re-harden softened enamel.' },
        { id: 'b', text: 'Vigorously scrub teeth with an electric toothbrush and bleach.', isCorrect: false, explanation: 'Vigorous scrubbing scrubs away softened enamel forever.' },
        { id: 'c', text: 'Chew on aluminum foil.', isCorrect: false, explanation: 'Painful and bad for teeth.' }
      ],
      bobblyHint: 'What happens if you aggressively scrub enamel when it has just been softened by acid?'
    },
    tags: ['dental', 'teeth', 'enamel', 'acid']
  },
  {
    id: 'antiperspirants-cause-breast-cancer',
    claim: 'Aluminum in underarm antiperspirants blocks lymph nodes and directly causes breast cancer and Alzheimer’s.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Massive epidemiological studies by the National Cancer Institute confirm no causal link between antiperspirants and breast cancer.',
    origin: 'A viral chain email from the late 1990s asserting that preventing armpit sweating prevents the body from purging toxins.',
    scientificTruth: 'Toxins are eliminated by your liver and kidneys, not armpit sweat glands (which only cool the body). Aluminum salts in antiperspirants form temporary gel plugs in sweat ducts to reduce moisture; they are barely absorbed across intact skin (less than 0.01%). Large case-control studies in the Journal of the National Cancer Institute showed zero increase in cancer risk.',
    mechanism: 'Dermal absorption of aluminum chlorohydrate is negligible compared to normal dietary aluminum present naturally in drinking water and vegetables.',
    practicalAdvice: 'Use whichever deodorant or antiperspirant you prefer. If you experience skin irritation or allergic contact dermatitis, choose a fragrance-free or aluminum-free formulation for comfort.',
    sources: ['National Cancer Institute (Antiperspirants/Deodorants and Breast Cancer)', 'American Cancer Society', 'Alzheimer’s Association'],
    believedPercentage: 61,
    quiz: {
      questionText: 'How do antiperspirants work to reduce armpit wetness?',
      options: [
        { id: 'a', text: 'Aluminum salts temporarily form harmless superficial plugs in sweat ducts.', isCorrect: true, explanation: 'Correct! They create temporary surface plugs in sweat ducts that wash away naturally.' },
        { id: 'b', text: 'They poison the body’s lymphatic lymph nodes.', isCorrect: false, explanation: 'A 1990s internet hoax.' },
        { id: 'c', text: 'They surgically remove sweat glands.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Do antiperspirants plug sweat pores temporarily or damage lymph nodes?'
    },
    tags: ['cancer', 'deodorant', 'toxicology', 'health']
  },
  {
    id: 'tv-close-causes-blindness',
    claim: 'Sitting too close to the television or computer monitor will permanently destroy your eyesight.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Modern LCD, OLED, and LED screens emit no harmful radiation; children sit close because their eyes focus up close effortlessly.',
    origin: 'A 1967 General Electric color TV manufacturing defect where 90,000 units emitted small amounts of X-rays, leading to government warnings to sit back.',
    scientificTruth: 'GE resolved the cathode tube issue over 50 years ago, and modern digital flat screens emit zero ionizing radiation. Children have a much shorter focal distance than adults and can focus up close without experiencing eye strain. However, if a child persistently sits inches from the TV, they may already be nearsighted and need an optometrist checkup.',
    mechanism: 'Children’s crystalline lenses have exceptional accommodative amplitude (up to 14 diopters), allowing effortless close-range convergence.',
    practicalAdvice: 'Sitting close will not harm your eyes. If you or your child find yourself squinting or inching closer, schedule a routine vision exam to check for myopia.',
    sources: ['American Academy of Ophthalmology (AAO)', 'Mayo Clinic Family Health', 'Scientific American'],
    believedPercentage: 74,
    quiz: {
      questionText: 'Where did the historic warning about sitting too close to the TV originally originate in 1967?',
      options: [
        { id: 'a', text: 'A brief manufacturing recall of faulty General Electric color TVs that emitted low-level X-rays.', isCorrect: true, explanation: 'Yes! GE recalled those cathode tube sets in the late 1960s, but the folklore persisted for modern screens.' },
        { id: 'b', text: 'A medical discovery that pixels shoot tiny needles into the retina.', isCorrect: false, explanation: 'Absurd.' },
        { id: 'c', text: 'A government program to conserve sofa space.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Think about vintage 1960s cathode-ray tube TV sets manufactured by General Electric!'
    },
    tags: ['television', 'screens', 'vision', 'history']
  },
  {
    id: 'q-tips-clean-ear-canals',
    claim: 'Cotton swabs (Q-tips) are the recommended tool to push deep inside your ear canal to dig out earwax.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Pushing cotton swabs into ear canals rams earwax deep against the eardrum like a piston, risking impaction and tympanic perforation.',
    origin: 'The original 1923 packaging idea for baby care, despite every modern box explicitly warning: "Do not insert into ear canal."',
    scientificTruth: 'Earwax (cerumen) is not dirt; it is a specialized antimicrobial and moisturizing barrier. The ear canal is self-cleaning: jaw movements from chewing and talking naturally migrate old wax outward toward the pinna. Inserting swabs pushes wax deep into the bony canal, causing impacted wax blockages, tinnitus, hearing loss, and ruptured eardrums.',
    mechanism: 'Epithelial migration carries cerumen laterally away from the tympanic membrane; blind instrumentation disrupts this conveyor-belt mechanism.',
    practicalAdvice: 'Clean only the outside of your ears with a washcloth. If you have impacted earwax, use mineral oil drops or visit a clinician for gentle warm-water irrigation.',
    sources: ['American Academy of Otolaryngology - Head and Neck Surgery (AAO-HNS)', 'Mayo Clinic Ear Care', 'Harvard Health Publishing'],
    believedPercentage: 80,
    quiz: {
      questionText: 'What warning is printed on virtually every commercial box of cotton swabs (Q-tips)?',
      options: [
        { id: 'a', text: '"Do not insert swab into the ear canal."', isCorrect: true, explanation: 'Yes! The manufacturer explicitly states not to push them into ear canals due to eardrum perforation risks.' },
        { id: 'b', text: '"Push as deeply as possible until you hear a pop."', isCorrect: false, explanation: 'Extremely dangerous.' },
        { id: 'c', text: '"Only use under a full moon."', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Check the back of a real Q-tips box—what does the manufacturer warning say?'
    },
    tags: ['ears', 'q-tips', 'earwax', 'first-aid']
  },
  {
    id: 'wait-30-minutes-swimming',
    claim: 'You must strictly wait 30 to 60 minutes after eating before swimming, or you will get severe stomach cramps and drown.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Digestion does not redirect enough blood flow to cause paralyzing muscle cramps; no drowning was ever attributed to post-meal swimming.',
    origin: 'A 1908 Boy Scout handbook warning that swimming immediately after eating causes deadly cramp seizures.',
    scientificTruth: 'While blood flow to the digestive tract (splanchnic circulation) increases slightly after eating, your body has ample cardiac reserve to supply exercising skeletal muscles. A heavy meal before vigorous swimming might cause mild nausea or acid reflux, but there is zero documented evidence of paralyzing cramps causing drownings.',
    mechanism: 'Splanchnic hyperemia requires only ~10-15% of cardiac output increase, which normal compensatory autonomic vascular tone easily accommodates.',
    practicalAdvice: 'Casual splashing or swimming after eating is completely safe. For intense competitive swim workouts, wait an hour simply to avoid indigestion and reflux.',
    sources: ['American Red Cross Scientific Advisory Council', 'International Life Saving Federation', 'Duke University Health System'],
    believedPercentage: 73,
    quiz: {
      questionText: 'Has any medical study or drowning registry ever documented a drowning caused by swimming after eating?',
      options: [
        { id: 'a', text: 'No, there are zero documented cases of drowning caused by post-meal digestion cramps.', isCorrect: true, explanation: 'Correct! The American Red Cross confirms this is purely a persistent cultural myth.' },
        { id: 'b', text: 'Yes, 40,000 swimmers drown every summer from eating a sandwich.', isCorrect: false, explanation: 'Completely false.' },
        { id: 'c', text: 'Only if they ate cheese pizza.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Did the Boy Scouts in 1908 have clinical trials or just cautionary folklore?'
    },
    tags: ['swimming', 'cramps', 'summer', 'digestion']
  },
  {
    id: 'hand-dryers-more-hygienic',
    claim: 'High-speed jet air hand dryers in public restrooms are far cleaner and more sanitary than paper towels.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Jet air hand dryers blow aerosolized bacteria and toilet plume droplets across hands and up to 3 meters across the room.',
    origin: 'Commercial marketing by hand dryer manufacturers emphasizing waste reduction and "touchless" sensors.',
    scientificTruth: 'Studies published in the Journal of Hospital Infection and Mayo Clinic Proceedings revealed that high-velocity jet dryers aerosolize microbes from poorly washed hands and contaminated air, spreading 60 times more bacteria than traditional warm dryers and 1,300 times more than paper towels. Friction from paper towels physically strips bacteria away.',
    mechanism: 'High-velocity 400-mph air shear forces disperse droplet nuclei and bacterial bio-aerosols into the surrounding room air.',
    practicalAdvice: 'Whenever available, use disposable paper towels to dry hands: the mechanical wiping action removes bacteria, and you can use the towel to turn off the faucet and open door handles.',
    sources: ['Journal of Hospital Infection (Best et al.)', 'Mayo Clinic Proceedings (Hand Drying Efficacy Review)', 'University of Leeds Medical Microbiology'],
    believedPercentage: 57,
    quiz: {
      questionText: 'Why do hospital infection control guidelines frequently recommend paper towels over jet air hand dryers?',
      options: [
        { id: 'a', text: 'Paper towels use mechanical friction to wipe away bacteria without blowing aerosols across the room.', isCorrect: true, explanation: 'Correct! Paper towel wiping physically removes pathogens; air blowers spread aerosols.' },
        { id: 'b', text: 'Paper towels emit ultraviolet gamma rays.', isCorrect: false, explanation: 'False.' },
        { id: 'c', text: 'Air dryers blow electricity into finger bones.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'What happens to drops of water on your hands when hit with a 400-mph blast of air?'
    },
    tags: ['hygiene', 'restrooms', 'hand-washing', 'bacteria']
  },
  {
    id: 'daily-shampoo-mandatory',
    claim: 'You must wash your scalp with foaming shampoo every single day or your hair will become unhygienic and fall out.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Daily surfactant shampooing strips natural sebum, triggering scalp irritation and rebound overproduction of oil.',
    origin: 'Mid-20th-century cosmetic marketing slogans by shampoo companies inventing the "Lather, Rinse, Repeat" daily routine.',
    scientificTruth: 'Sebum produced by sebaceous glands lubricates the hair shaft and protects against dryness. Frequency of washing depends entirely on hair texture, scalp oiliness, and physical activity. People with curly, coarse, or dry hair often benefit from washing once or twice a week, while straight oily hair may need washing every 2-3 days.',
    mechanism: 'Aggressive sulfate detergents strip natural lipid barriers, disrupting the stratum corneum of the scalp and encouraging epidermal moisture loss.',
    practicalAdvice: 'Wash your hair based on your scalp type, not an arbitrary daily mandate. If your scalp is itchy and dry, wash less frequently with milder shampoos.',
    sources: ['American Academy of Dermatology (Tips for Healthy Hair)', 'Cleveland Clinic Dermatology', 'International Journal of Trichology'],
    believedPercentage: 62,
    quiz: {
      questionText: 'Who popularized the famous phrase "Lather, Rinse, Repeat" encouraging daily shampooing?',
      options: [
        { id: 'a', text: 'Shampoo marketing companies to double product consumption.', isCorrect: true, explanation: 'Correct! Repeating the cycle used twice as much shampoo, doubling sales.' },
        { id: 'b', text: 'The Centers for Disease Control.', isCorrect: false, explanation: 'CDC does not write shampoo instructions.' },
        { id: 'c', text: 'Medieval monks in France.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Who benefits financially if you use twice as much shampoo every single shower?'
    },
    tags: ['haircare', 'shampoo', 'dermatology', 'hygiene']
  },
  {
    id: 'holding-sneezes-harmless',
    claim: 'Pinching your nose and clamping your mouth completely shut to stifle a loud sneeze is totally harmless.',
    verdict: 'BUSTED',
    category: 'Daily Habits & Hygiene',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Clamping a sneeze multiplies airway pressure by up to 38 times, risking ruptured eardrums, torn throat tissue, and vascular damage.',
    origin: 'Desire to be polite and avoid making loud explosive noises in quiet libraries or business meetings.',
    scientificTruth: 'A study in BMJ Case Reports documented a healthy adult who ruptured their hypopharynx (tearing a hole in their throat) by pinching their nose and keeping their mouth shut during a sneeze. Air forced into the tissues caused subcutaneous emphysema. The trapped pressure can also rupture tympanic membranes (eardrums) and trigger sudden ocular capillary bursts.',
    mechanism: 'Peak expiratory sneeze pressure normally dissipates safely into room air; closing exits spikes pharyngeal pressure to over 24 times normal.',
    practicalAdvice: 'Never clamp your nose and mouth shut during a sneeze! Sneeze freely into a tissue or into the crook of your elbow.',
    sources: ['BMJ Case Reports (Snap, Crackle and Pop: Pharyngeal Perforation from Sneezing)', 'American Journal of Rhinology & Allergy', 'Mayo Clinic'],
    believedPercentage: 65,
    quiz: {
      questionText: 'What medical injury has been documented in peer-reviewed medical journals from pinching a sneeze shut?',
      options: [
        { id: 'a', text: 'Ruptured eardrums and tearing of throat tissue from extreme trapped pressure.', isCorrect: true, explanation: 'Correct! Trapped sneeze pressure can rupture delicate eardrums and tear the pharynx.' },
        { id: 'b', text: 'Turning inside out like a sock.', isCorrect: false, explanation: 'Absurd.' },
        { id: 'c', text: 'Spontaneous combustion of nasal hair.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Where does that tremendous blast of compressed sneeze air go if both exits are pinched shut?'
    },
    tags: ['sneeze', 'safety', 'first-aid', 'ent']
  }
];
