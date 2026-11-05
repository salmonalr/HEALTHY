import { Myth } from '../../types/myth';

export const brainSleepMyths: Myth[] = [
  {
    id: 'brain-10-percent-capacity',
    claim: 'Humans only use 10% of their brain; 90% lies dormant waiting to be unlocked.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Functional neuroimaging confirms you use virtually every part of your brain throughout the day, even while asleep.',
    origin: 'Misattributed quotes from 1890s psychologist William James ("we use only a small part of our mental resources") amplified by self-help books and Hollywood sci-fi films like Lucy.',
    scientificTruth: 'fMRI and PET scans demonstrate that even during simple tasks or resting states, widely distributed neural networks across both hemispheres are buzzing with activity. From an evolutionary standpoint, the brain consumes 20% of your body’s oxygen and glucose despite representing only 2% of body mass; natural selection would never preserve 90% useless deadweight.',
    mechanism: 'Action potentials, synaptic transmission, and glial support function occur across cortical columns, subcortical basal ganglia, and cerebellum continuously.',
    practicalAdvice: 'You are already using 100% of your brain! Cultivate neuroplasticity through lifelong learning, cardiovascular exercise, quality sleep, and novelty.',
    sources: ['Scientific American Mind', 'Brain Facts (Society for Neuroscience)', 'Harvard Health Publishing'],
    believedPercentage: 68,
    quiz: {
      questionText: 'What evolutionary and metabolic fact conclusively refutes the "10% brain usage" myth?',
      options: [
        { id: 'a', text: 'The brain uses 20% of the body’s total metabolic energy; evolution would never sustain 90% useless tissue.', isCorrect: true, explanation: 'Bingo! An organ taking 20% of calories would never evolve to be 90% inactive.' },
        { id: 'b', text: 'Only dolphins use 100% of their brain.', isCorrect: false, explanation: 'Humans use 100% of their brain as well.' },
        { id: 'c', text: 'The brain weighs 25 pounds.', isCorrect: false, explanation: 'The human brain weighs only about 3 pounds.' }
      ],
      bobblyHint: 'Why would Mother Nature spend 20% of your daily calories feeding an organ you only use 10% of?'
    },
    tags: ['neuroscience', 'brain', 'evolution', 'fMRI']
  },
  {
    id: 'weekend-sleep-catchup',
    claim: 'Sleeping for 12 hours on Sunday erases the damage of sleeping 4 hours a night all week.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Weekend binge-sleeping disrupts your circadian clock and fails to reverse the metabolic and cognitive deficits of chronic sleep debt.',
    origin: 'The intuitive banking concept of "sleep debt" where hours lost can be repaid like a credit card balance.',
    scientificTruth: 'Studies at the University of Colorado Boulder found that weekend catch-up sleep did not prevent insulin sensitivity drops, weight gain, or midnight snacking rebounds when returning to work on Monday. Worse, it causes "social jetlag," delaying Sunday melatonin release and making Monday morning brutal.',
    mechanism: 'Circadian pacemaker suprachiasmatic nucleus (SCN) transcription-translation feedback loops (CLOCK/BMAL1) desynchronize when sleep timing shifts erratically by multiple hours.',
    practicalAdvice: 'Keep sleep and wake times consistent within 60 minutes across weekends and weekdays. Aim for 7-9 hours of nightly restorative sleep.',
    sources: ['Current Biology (Depner et al., Weekend Catch-Up Sleep)', 'Sleep Foundation', 'CDC Sleep and Sleep Disorders'],
    believedPercentage: 73,
    quiz: {
      questionText: 'What physiological issue does erratic weekend catch-up sleeping create for Monday mornings?',
      options: [
        { id: 'a', text: '"Social jetlag" that desynchronizes the circadian suprachiasmatic clock.', isCorrect: true, explanation: 'Correct! Shifting sleep by 3-4 hours on weekends misaligns your biological clock with your work week.' },
        { id: 'b', text: 'Permanent damage to inner ear canals.', isCorrect: false, explanation: 'Inner ear canals are not damaged by sleep timing.' },
        { id: 'c', text: 'Instant memory wipe of the previous week.', isCorrect: false, explanation: 'Sleep consolidates memory; it does not erase it.' }
      ],
      bobblyHint: 'What happens to your internal biological clock when you sleep in till 1:00 PM on Sunday?'
    },
    tags: ['sleep', 'circadian', 'recovery', 'insomnia']
  },
  {
    id: 'waking-sleepwalkers-fatal',
    claim: 'Waking a sleepwalker triggers a lethal heart attack or drives them into instant madness.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Waking a sleepwalker is safe, though they will be startled; letting them wander near stairs or stoves is the real life-threatening danger.',
    origin: 'Ancient European superstitions believing that the soul leaves the human body during sleep and waking them leaves the body empty.',
    scientificTruth: 'Somnambulism occurs during slow-wave Stage 3 NREM sleep. Sleepwalkers are in a state of autonomic arousal with cortical dissociation. If awakened, they may be confused, groggy, or disoriented for several seconds, but their cardiovascular system is fine. Falling down stairs or leaving the house is the true hazard.',
    mechanism: 'Sleepwalking is an arousal disorder where the thalamocortical network fails to completely inhibit motor locomotion circuits during deep NREM sleep.',
    practicalAdvice: 'Gently guide the person by the elbow back to their bed with soft, calm words. If they are walking toward danger (stairs, balconies, stoves), wake them up firmly without hesitation.',
    sources: ['National Sleep Foundation', 'Mayo Clinic Somnambulism Review', 'American Academy of Sleep Medicine'],
    believedPercentage: 62,
    quiz: {
      questionText: 'What is the safest action if you encounter someone sleepwalking near a flight of stairs?',
      options: [
        { id: 'a', text: 'Gently guide them away from danger or wake them; falling down stairs is the real danger.', isCorrect: true, explanation: 'Correct! Trauma from falls or accidents is the genuine hazard, not waking them.' },
        { id: 'b', text: 'Never touch them because their heart will stop beating.', isCorrect: false, explanation: 'A dangerous myth that leaves sleepwalkers vulnerable to injury.' },
        { id: 'c', text: 'Throw a bucket of ice water onto their face.', isCorrect: false, explanation: 'Unnecessary and aggressive.' }
      ],
      bobblyHint: 'Is falling down stairs more dangerous than a few seconds of sleepy confusion?'
    },
    tags: ['sleepwalking', 'first-aid', 'neurology', 'safety']
  },
  {
    id: 'reading-dim-light-ruins-eyes',
    claim: 'Reading a book in dim light permanently ruins your optical eyesight and causes blindness.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Dim light causes temporary eye strain and fatigue, but produces zero permanent structural or refractive damage to the eyes.',
    origin: 'Generations of concerned parents telling children under bedsheets with flashlights to "go to sleep or you’ll go blind!"',
    scientificTruth: 'In dim light, your pupils dilate and ciliary muscles work harder to focus, causing ocular fatigue, dry eyes (from reduced blinking), and mild headaches. However, these symptoms disappear completely once you rest your eyes. Longitudinal studies show no link to permanent myopia or retinal damage.',
    mechanism: 'Asthenopia (eye strain) results from sustained accommodation of the ciliary bodies and extraocular convergence muscles without anatomical pathology.',
    practicalAdvice: 'Use comfortable, well-directed task lighting to prevent squinting and dry eye discomfort, but don’t panic if you read under cozy lighting.',
    sources: ['American Academy of Ophthalmology (AAO)', 'Harvard Health Publishing', 'British Medical Journal (BMJ Medical Myths)'],
    believedPercentage: 75,
    quiz: {
      questionText: 'What actually happens to your eyes when reading in low light?',
      options: [
        { id: 'a', text: 'Temporary muscle fatigue (eye strain) that resolves with rest, with zero permanent damage.', isCorrect: true, explanation: 'Correct! Just like using your legs tires them out temporarily, eyes recover with rest.' },
        { id: 'b', text: 'Irreversible thinning of the optic nerve.', isCorrect: false, explanation: 'Optic nerves are unaffected.' },
        { id: 'c', text: 'The retina permanently detaches from the sclera.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does reading in the twilight break your eyes forever, or just make them feel tired?'
    },
    tags: ['eyesight', 'reading', 'vision', 'ophthalmology']
  },
  {
    id: 'alcohol-improves-sleep',
    claim: 'Having a nightcap of whisky or wine before bed is an excellent way to get deep, restorative sleep.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Alcohol acts as a sedative that knocks you unconscious while decimating REM sleep and fragmenting your sleep architecture.',
    origin: 'The immediate hypnotic sensation of drowsiness induced by central nervous system depression after a drink.',
    scientificTruth: 'While ethanol helps you fall unconscious faster (sedation is not sleep), as your liver metabolizes it into acetaldehyde overnight, it triggers severe autonomic arousal, frequent micro-awakenings, night sweats, worsens sleep apnea, and suppresses crucial REM dream sleep necessary for emotional regulation and memory consolidation.',
    mechanism: 'Alcohol enhances GABAergic inhibition initially, but during clearance triggers a glutamate rebound effect in the second half of the night.',
    practicalAdvice: 'Finish alcoholic beverages at least 3-4 hours before bedtime to allow your liver to metabolize the ethanol before your sleep cycles begin.',
    sources: ['Alcoholism: Clinical and Experimental Research (Ebrahim et al.)', 'Sleep Medicine Reviews', 'Matthew Walker, PhD (Why We Sleep)'],
    believedPercentage: 66,
    quiz: {
      questionText: 'Why does alcohol cause people to wake up exhausted even if they slept for 8 hours?',
      options: [
        { id: 'a', text: 'It suppresses REM sleep and triggers a glutamate rebound that fragments sleep cycles.', isCorrect: true, explanation: 'Correct! Alcohol acts as a sedative, not a natural sleep inducer, destroying deep architecture.' },
        { id: 'b', text: 'It turns blood into hydrochloric acid.', isCorrect: false, explanation: 'Biochemically absurd.' },
        { id: 'c', text: 'It completely stops all heartbeats during dreams.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Is being chemically sedated the same as experiencing natural, restorative REM sleep?'
    },
    tags: ['alcohol', 'sleep', 'rem-sleep', 'nightcap']
  },
  {
    id: 'blue-light-glasses-save-eyes',
    claim: 'Non-prescription blue-light blocking glasses are essential to prevent permanent retinal degeneration from laptop screens.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'A 2023 Cochrane systematic review of 17 clinical trials found blue-blocking lenses provide no measurable benefit for eye strain or retinal health.',
    origin: 'Aggressive direct-to-consumer eyewear marketing campaigns profiting from widespread digital eye fatigue.',
    scientificTruth: 'The American Academy of Ophthalmology emphasizes that consumer computer screens do not emit enough light energy to cause retinal damage. Digital eye strain is caused by staring without blinking (humans blink 50% less at screens), causing tear-film evaporation. Blue light does influence melatonin before bed, but ordinary screen dimmers handle this for free.',
    mechanism: 'Phototoxicity requires irradiance orders of magnitude higher than LED computer monitors. Asthenopia is driven by decreased blink rate and uncorrected refractive error.',
    practicalAdvice: 'Practice the 20-20-20 rule: every 20 minutes, look at an object 20 feet away for 20 seconds to relax your focusing muscles and remember to blink.',
    sources: ['Cochrane Database of Systematic Reviews (Singh et al., 2023)', 'American Academy of Ophthalmology (AAO)', 'College of Optometrists'],
    believedPercentage: 69,
    quiz: {
      questionText: 'What is the genuine primary cause of dry, tired eyes after working on a computer for 8 hours?',
      options: [
        { id: 'a', text: 'Blinking 50% less frequently, which dries out the corneal tear film.', isCorrect: true, explanation: 'Spot on! Staring intently drops blink rate from ~15 times a minute to just 5-7.' },
        { id: 'b', text: 'Blue lasers burning tiny holes in the macula.', isCorrect: false, explanation: 'Screen LEDs do not emit damaging blue lasers.' },
        { id: 'c', text: 'Eyeballs swelling to twice their size.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Count how many times you blink when staring intensely at your phone screen!'
    },
    tags: ['blue-light', 'screens', 'eyes', 'optometry']
  },
  {
    id: 'mozart-effect-genius-babies',
    claim: 'Playing Mozart classical music to infants or unborn fetuses permanently increases their IQ.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'A brief 1993 study in college students showed a tiny 10-minute spatial test bump due to mood arousal; it does not turn babies into geniuses.',
    origin: 'A 1993 Nature paper by Rauscher et al. on 36 college students, exaggerated by the media and capitalized on by "Baby Mozart" video franchises.',
    scientificTruth: 'Extensive replication studies failed to demonstrate long-term cognitive enhancements. The small temporary improvement in spatial reasoning was found to be an "arousal effect"—any pleasant music or engaging audiobook produced the identical temporary boost by perking up listener attention.',
    mechanism: 'Auditory cortex stimulation and dopamine release temporarily elevate alertness; no structural neurogenesis or permanent synaptic rewiring occurs.',
    practicalAdvice: 'Play music for your children because it is joyful, emotionally bonding, and culturally enriching, not as an intellectual performance steroid.',
    sources: ['Nature (Rauscher original 1993 paper)', 'American Psychological Association (APA)', 'Journal of the Royal Society of Medicine'],
    believedPercentage: 59,
    quiz: {
      questionText: 'Why did college students in the original 1993 "Mozart effect" study score slightly better on paper-folding tests?',
      options: [
        { id: 'a', text: 'Temporary mood arousal and alertness, which any enjoyable music or story replicates.', isCorrect: true, explanation: 'Correct! It was a transient mood/alertness effect, not genetic IQ expansion.' },
        { id: 'b', text: 'Their brains grew 10 billion brand new neurons.', isCorrect: false, explanation: 'No neural growth occurred.' },
        { id: 'c', text: 'Mozart’s ghost mathematically guided their pens.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does listening to an upbeat song simply wake your mind up for a few minutes?'
    },
    tags: ['mozart', 'iq', 'parenting', 'psychology']
  },
  {
    id: 'left-brain-right-brain-personalities',
    claim: 'Logical analytical people are "left-brained," while artistic creative people are "right-brained."',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Brain imaging across thousands of individuals confirms both cerebral hemispheres work synchronously in all complex cognitive tasks.',
    origin: 'Misinterpretations of Roger Sperry’s 1960s Nobel-winning split-brain studies in severe epilepsy patients whose corpus callosum had been severed.',
    scientificTruth: 'A two-year University of Utah brain imaging study of over 1,000 individuals found no evidence that people preferentially utilize their left or right network. While some language processing is lateralized in most people, math, art, creativity, and reasoning recruit vast inter-hemispheric networks communicating across the corpus callosum.',
    mechanism: 'The corpus callosum contains over 200 million axonal projections continuously synchronizing electrical activity between left and right cortices.',
    practicalAdvice: 'Don’t pigeonhole yourself or your colleagues with pseudoscientific binary labels. Creativity and analytical logic are deeply intertwined human abilities.',
    sources: ['PLOS ONE (Nielsen et al., Two-Year Brain Lateralization Study)', 'Harvard Medical School Health Beat', 'Scientific American'],
    believedPercentage: 71,
    quiz: {
      questionText: 'What did brain scans of over 1,000 people at the University of Utah reveal about left vs right brain dominance?',
      options: [
        { id: 'a', text: 'Individuals do not have a dominant left or right brain hemisphere.', isCorrect: true, explanation: 'Correct! Both hemispheres collaborate closely across complex thinking, art, and logic.' },
        { id: 'b', text: 'Accountants only activate their left temple.', isCorrect: false, explanation: 'Math and creativity use widespread bilateral networks.' },
        { id: 'c', text: 'Musicians have no left hemisphere.', isCorrect: false, explanation: 'Absurd.' }
      ],
      bobblyHint: 'What structure with 200 million nerve fibers connects your two hemispheres?'
    },
    tags: ['neuroscience', 'personality', 'psychology', 'creativity']
  },
  {
    id: 'seniors-need-barely-any-sleep',
    claim: 'Older adults naturally only need 4 or 5 hours of sleep each night as they age.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Seniors still require 7-8 hours of sleep for physical and neurological health; they just have harder times generating deep sleep.',
    origin: 'Observing elderly grandparents waking up at 4:30 AM or dozing intermittently throughout the afternoon.',
    scientificTruth: 'The National Sleep Foundation and American Academy of Sleep Medicine confirm healthy seniors still need 7 to 8 hours of sleep. Age-related calcification of the pineal gland and loss of galanin neurons in the preoptic nucleus make maintaining continuous sleep harder, causing daytime fatigue.',
    mechanism: 'Degradation of slow-wave sleep generator circuits in the ventrolateral preoptic nucleus (VLPO) reduces non-REM Stage 3 amplitude without diminishing cellular biological need.',
    practicalAdvice: 'If an older adult is chronically fatigued or sleeping only 4 hours, evaluate for sleep apnea, medications, joint pain, or daytime light exposure rather than assuming "they don’t need it."',
    sources: ['American Academy of Sleep Medicine (AASM Consensus Statement)', 'National Institute on Aging', 'Sleep Medicine Clinics'],
    believedPercentage: 60,
    quiz: {
      questionText: 'Do adults aged 65 and older have a biologically reduced need for sleep compared to younger adults?',
      options: [
        { id: 'a', text: 'No, they still need 7-8 hours; their ability to generate continuous deep sleep declines.', isCorrect: true, explanation: 'Correct! The physiological need remains, but sleep architecture becomes more fragile.' },
        { id: 'b', text: 'Yes, seniors require only 2 hours because their brain cells don’t sleep.', isCorrect: false, explanation: 'False; lack of sleep increases Alzheimer’s risk and cognitive decline.' },
        { id: 'c', text: 'Seniors should never sleep in a bed.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'Does your body lose its need for cellular repair as you get older?'
    },
    tags: ['seniors', 'sleep', 'aging', 'health']
  },
  {
    id: 'adult-brain-never-makes-new-neurons',
    claim: 'You are born with all the brain cells you will ever have; adults can never grow new neurons.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Adult neurogenesis is proven in the subgranular zone of the hippocampus, continually creating new neurons throughout life.',
    origin: 'Santiago Ramón y Cajal’s famous 1913 doctrine: "In the adult centers, the nerve paths are something fixed, ended, and immutable."',
    scientificTruth: 'Pioneering work in the late 1990s (Eriksson et al., Gage lab) using BrdU staining demonstrated that the human hippocampus continues to generate thousands of functional new neurons (neurogenesis) well into advanced old age, playing a key role in memory formation and mood.',
    mechanism: 'Neural stem cells in the subgranular zone of the dentate gyrus differentiate into functional granule cells that integrate into existing hippocampal trisynaptic circuits.',
    practicalAdvice: 'Aerobic exercise, learning novel skills, and adequate sleep are potent stimulators of Brain-Derived Neurotrophic Factor (BDNF) which fuels adult neurogenesis.',
    sources: ['Nature Medicine (Adult Human Neurogenesis, Eriksson et al.)', 'Cell Stem Cell (Boldrini et al.)', 'National Institute of Neurological Disorders and Stroke'],
    believedPercentage: 55,
    quiz: {
      questionText: 'In which brain region has adult neurogenesis (growth of new neurons) been conclusively documented?',
      options: [
        { id: 'a', text: 'The hippocampus (specifically the dentate gyrus).', isCorrect: true, explanation: 'Spot on! The hippocampus continues generating new neurons involved in learning and memory.' },
        { id: 'b', text: 'Only in the fingernail bed.', isCorrect: false, explanation: 'Fingernails are not brain tissue.' },
        { id: 'c', text: 'Nowhere; all adult brains are completely immutable.', isCorrect: false, explanation: 'Outdated 1913 dogma that was disproven decades ago.' }
      ],
      bobblyHint: 'Which seahorse-shaped brain structure is the epicenter of learning and memory?'
    },
    tags: ['neurogenesis', 'brain', 'bdnf', 'learning']
  },
  {
    id: 'learning-styles-visual-auditory',
    claim: 'Teaching tailored strictly to a student’s "learning style" (Visual vs Auditory vs Kinesthetic) dramatically improves academic performance.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Extensive psychological reviews show no evidence that matching instructional method to self-reported style improves learning outcomes.',
    origin: 'The 1970s VARK questionnaire and commercial educational workshop franchises.',
    scientificTruth: 'While people certainly have subjective learning preferences, extensive systematic testing (Pashler et al.) showed the "meshing hypothesis" fails: visual learners don’t retain information better when presented visually versus verbally. What actually improves learning is presenting material through multiple multi-modal representations tailored to the content itself.',
    mechanism: 'Semantic information is encoded conceptually in associative multimodal cortical hubs, not confined to sensory entry modalities.',
    practicalAdvice: 'Don’t label yourself "just a visual learner." Combine sketches, explanations, active problem-solving, and testing for the deepest comprehension.',
    sources: ['Psychological Science in the Public Interest (Pashler et al., Learning Styles Review)', 'Nature Reviews Neuroscience', 'American Psychological Association'],
    believedPercentage: 82,
    quiz: {
      questionText: 'What did comprehensive meta-analyses discover regarding the "learning styles" (VARK) hypothesis?',
      options: [
        { id: 'a', text: 'There is virtually no evidence that tailoring teaching to self-reported styles boosts test performance.', isCorrect: true, explanation: 'Correct! Multi-modal teaching matched to the subject matter works best for everyone.' },
        { id: 'b', text: 'Auditory learners go deaf if shown a diagram.', isCorrect: false, explanation: 'Nonsense.' },
        { id: 'c', text: 'Visual learners possess four eyes.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does empirical psychology validate VARK, or does multi-modal learning beat rigid labels?'
    },
    tags: ['education', 'learning-styles', 'psychology', 'pedagogy']
  },
  {
    id: 'snoring-harmless-quirk',
    claim: 'Loud chronic snoring is just a funny, harmless bedroom habit with no health consequences.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Chronic loud snoring is frequently the hallmark of obstructive sleep apnea (OSA), which doubles stroke and hypertension risks.',
    origin: 'Decades of cartoon depictions showing sleeping characters peacefully sawing wood with "Zzz" bubbles.',
    scientificTruth: 'Obstructive sleep apnea causes repeated airway collapse, starving the brain and heart of oxygen dozens of times per hour. This triggers surges of adrenaline, spiking blood pressure and dramatically increasing the risk of arrhythmias, type 2 diabetes, stroke, and motor vehicle accidents.',
    mechanism: 'Intermittent nocturnal hypoxia activates systemic endothelial inflammation and sympathetic vasoconstriction.',
    practicalAdvice: 'If you or your partner snore loudly, wake up choking, or feel exhausted despite 8 hours in bed, request an overnight sleep study. CPAP therapy or oral devices are life-changing.',
    sources: ['American Heart Association (Scientific Statement on Sleep Apnea & Cardio Risk)', 'Mayo Clinic', 'Chest Journal'],
    believedPercentage: 52,
    quiz: {
      questionText: 'What underlying medical condition is loud, gasping chronic snoring often an indicator of?',
      options: [
        { id: 'a', text: 'Obstructive Sleep Apnea (OSA).', isCorrect: true, explanation: 'Yes! Sleep apnea starves the brain of oxygen and strains the cardiovascular system.' },
        { id: 'b', text: 'Excessively powerful throat muscles.', isCorrect: false, explanation: 'Snoring is caused by airway collapse and soft tissue vibration, not strength.' },
        { id: 'c', text: 'Too much cerebral fluid in the ears.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What four-letter abbreviation describes nocturnal airway obstruction?'
    },
    tags: ['sleep-apnea', 'snoring', 'cardiovascular', 'health']
  },
  {
    id: 'knuckle-cracking-arthritis',
    claim: 'Cracking your knuckles pops the bones and gives you crippling arthritis in your hands.',
    verdict: 'BUSTED',
    category: 'Brain & Sleep',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'The popping sound is harmless cavitation of nitrogen bubbles in synovial fluid; studies show zero link to osteoarthritis.',
    origin: 'Parents and teachers who were deeply annoyed by the loud popping sounds made by kids cracking their joints in quiet rooms.',
    scientificTruth: 'Dr. Donald Unger famously cracked the knuckles of his left hand every day for over 60 years while leaving his right hand un-cracked as a control. After six decades, X-rays showed zero arthritis in either hand (winning the 2009 Ig Nobel Prize). Larger epidemiological studies fully confirmed this finding.',
    mechanism: 'Rapid joint distraction creates negative pressure that causes dissolved nitrogen gas in the synovial fluid to form a rapid microscopic cavitation bubble that collapses.',
    practicalAdvice: 'Cracking your knuckles will not give you arthritis. However, if joint cracking is accompanied by pain, swelling, or reduced mobility, get it checked by a physician.',
    sources: ['Arthritis & Rheumatism (Donald Unger 60-Year Self-Study)', 'American College of Rheumatology', 'Harvard Health Publishing'],
    believedPercentage: 72,
    quiz: {
      questionText: 'What physical phenomenon creates the popping sound when you crack your knuckles?',
      options: [
        { id: 'a', text: 'Cavitation of dissolving nitrogen gas bubbles inside synovial fluid.', isCorrect: true, explanation: 'Bingo! It is gas bubble formation and collapse in joint fluid, not bones grinding.' },
        { id: 'b', text: 'Cartilage shattering into microscopic fragments.', isCorrect: false, explanation: 'Cartilage does not shatter.' },
        { id: 'c', text: 'Ligaments snapping like broken guitar strings.', isCorrect: false, explanation: 'Ligaments do not snap during normal cracking.' }
      ],
      bobblyHint: 'What gas dissolved in liquid forms a sudden bubble when pressure drops?'
    },
    tags: ['joints', 'knuckles', 'arthritis', 'anatomy']
  }
];
