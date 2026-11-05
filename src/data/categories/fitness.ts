import { Myth } from '../../types/myth';

export const fitnessMyths: Myth[] = [
  {
    id: 'spot-reduction-belly-fat',
    claim: 'Doing 100 abdominal crunches every day melts away belly fat specifically.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Targeted spot reduction of fat is a biological impossibility; fat loss occurs systemically throughout the body.',
    origin: 'Late-night infomercials selling ab-rollers, vibrating belts, and waist trainers.',
    scientificTruth: 'When your body oxidizes triglycerides for fuel, hormone-sensitive lipase hydrolyzes fat stored all over the body into free fatty acids circulating in the bloodstream. Where your body sheds fat first is determined by genetics, sex hormones, and receptor density, not which muscle flexes.',
    mechanism: 'Local muscle contractions require ATP, but the adipocytes yielding systemic fatty acids are recruited via bloodstream epinephrine/norepinephrine gradients, not localized muscle proximity.',
    practicalAdvice: 'Crunches strengthen the rectus abdominis muscle, but revealing them requires a sustained overall energy deficit through nutrition and compound training.',
    sources: ['American Council on Exercise (ACE Clinical Trial)', 'Journal of Strength and Conditioning Research', 'Yale Scientific Magazine'],
    believedPercentage: 78,
    quiz: {
      questionText: 'Can performing crunches selectively burn fat stored right over your abdominal muscles?',
      options: [
        { id: 'a', text: 'No, fat oxidation is systemic and governed by genetics and overall caloric deficit.', isCorrect: true, explanation: 'Correct! Spot reduction is a fitness myth; muscles do not burn the fat sitting immediately above them.' },
        { id: 'b', text: 'Yes, if you do at least 200 repetitions per day.', isCorrect: false, explanation: 'High repetition ab exercises build endurance, not localized fat melting.' },
        { id: 'c', text: 'Yes, if you wear a plastic thermal sweat wrap.', isCorrect: false, explanation: 'Thermal wraps only cause local dehydration, not permanent fat loss.' }
      ],
      bobblyHint: 'Does your body draw gas only from the top half of your car’s fuel tank?'
    },
    tags: ['abs', 'fat-loss', 'crunches', 'spot-reduction']
  },
  {
    id: 'no-pain-no-gain',
    claim: '"No pain, no gain" — you must be in agony during and after workouts to make real progress.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Pain is your central nervous system’s warning of tissue damage, not a requirement for hypertrophy or cardiovascular fitness.',
    origin: '1980s aerobics videos (Jane Fonda) and hardcore bodybuilding catchphrases.',
    scientificTruth: 'Muscular effort and temporary fatigue are normal, but acute sharp joint pain, tendon irritation, or extreme debilitating soreness are signs of overtraining, rhabdomyolysis risk, or connective tissue injury.',
    mechanism: 'Muscle hypertrophy is triggered by progressive mechanical tension, metabolic stress, and recruitment of motor units—none of which require debilitating microtrauma.',
    practicalAdvice: 'Aim for manageable muscle fatigue and steady progressive overload. Stop immediately if you feel sharp, shooting, or joint-centric pain.',
    sources: ['American College of Sports Medicine (ACSM)', 'National Strength and Conditioning Association (NSCA)', 'British Journal of Sports Medicine'],
    believedPercentage: 65,
    quiz: {
      questionText: 'What is severe, sharp pain during exercise typically indicating?',
      options: [
        { id: 'a', text: 'Impending ligament, joint, or tissue injury.', isCorrect: true, explanation: 'Exactly. Sharp pain is a protective biological alarm, not a badge of honor.' },
        { id: 'b', text: 'Immediate 50% increase in muscle hypertrophy.', isCorrect: false, explanation: 'Pain signals distress, not optimal growth.' },
        { id: 'c', text: 'Toxins leaving the synovial fluid.', isCorrect: false, explanation: 'Synovial fluid does not discharge toxins in this way.' }
      ],
      bobblyHint: 'Is that sharp needle-twinge in your knee really building muscle, or tearing something?'
    },
    tags: ['exercise', 'injury-prevention', 'bodybuilding', 'safety']
  },
  {
    id: 'lactic-acid-causes-doms',
    claim: 'Lactic acid stays trapped in your muscles for days, causing delayed muscle soreness.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Lactate is cleared from your blood within 30-60 minutes post-workout; delayed soreness is caused by microscopic muscle remodeling.',
    origin: 'Early 20th-century muscle biopsy studies in frogs that linked lactic acid accumulation to instantaneous anaerobic fatigue.',
    scientificTruth: 'Delayed Onset Muscle Soreness (DOMS), peaking 24 to 72 hours post-workout, is caused by microtears in sarcomeres (especially from eccentric contractions) and subsequent immune inflammatory signaling, not lactate. Lactate is actually an energetic fuel recycled by your liver (Cori cycle).',
    mechanism: 'Blood lactate levels return to resting baseline within an hour of completing high-intensity exercise as myocytes and hepatocytes convert it back to pyruvate.',
    practicalAdvice: 'Light active recovery (walking, gentle cycling), sleep, and adequate protein help alleviate DOMS. Don’t blame lactic acid days after your workout.',
    sources: ['American Physiological Society', 'Sports Medicine Journal', 'Harvard Medical School'],
    believedPercentage: 76,
    quiz: {
      questionText: 'How quickly does lactate clear from your bloodstream after strenuous exercise?',
      options: [
        { id: 'a', text: 'Within 30 to 60 minutes after exercise finishes.', isCorrect: true, explanation: 'Correct! Lactate is rapidly processed and recycled as metabolic fuel.' },
        { id: 'b', text: 'It takes 4 to 5 days to drain out of muscle fibers.', isCorrect: false, explanation: 'Myth! Soreness days later has nothing to do with lactate.' },
        { id: 'c', text: 'It crystallizes into permanent calcium deposits.', isCorrect: false, explanation: 'Lactate does not crystallize.' }
      ],
      bobblyHint: 'Does lactate linger for a week, or does your liver turn it into fuel within an hour?'
    },
    tags: ['lactate', 'doms', 'soreness', 'physiology']
  },
  {
    id: 'static-stretching-before-run',
    claim: 'Holding long, static stretches before sprinting or lifting heavy weights prevents sports injuries.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Static stretching before power workouts temporarily weakens force output and does not reduce injury rates.',
    origin: 'Decades of school gym class routines where students touched their toes for 30 seconds before running laps.',
    scientificTruth: 'Extensive systematic reviews show static stretching cold muscles decreases maximum force production, jump height, and sprint speed by relaxing tendon stiffness. Dynamic warm-ups (leg swings, lunges, jogging) increase synovial fluid flow and properly prepare neuromuscular pathways.',
    mechanism: 'Static holds inhibit alpha-motor neuron excitability via Golgi tendon organ autogenic inhibition, reducing acute rate of force development (RFD).',
    practicalAdvice: 'Do dynamic movements and mobility drills to warm up. Save prolonged static stretching for post-workout cool-downs to increase passive flexibility.',
    sources: ['Medicine & Science in Sports & Exercise (ACSM Review)', 'Scandinavian Journal of Medicine & Science in Sports', 'CDC Injury Prevention Guide'],
    believedPercentage: 69,
    quiz: {
      questionText: 'What type of warm-up is scientifically proven to best prepare muscles and reduce injury before sprinting or lifting?',
      options: [
        { id: 'a', text: 'Dynamic warm-ups (active movement, leg swings, bodyweight squats).', isCorrect: true, explanation: 'Yes! Dynamic warmups increase muscle temperature, blood flow, and neuromuscular responsiveness.' },
        { id: 'b', text: 'Holding cold hamstring stretches motionless for 60 seconds.', isCorrect: false, explanation: 'Static stretching cold muscles can decrease force and does not prevent strains.' },
        { id: 'c', text: 'Sitting completely still for 15 minutes.', isCorrect: false, explanation: 'Muscles need temperature elevation.' }
      ],
      bobblyHint: 'Would you rather warm a rubber band by snapping it cold or gently moving it around?'
    },
    tags: ['stretching', 'warmup', 'athletics', 'injuries']
  },
  {
    id: '10000-steps-scientific-requirement',
    claim: 'The human body strictly requires 10,000 steps per day or else your health sharply declines.',
    verdict: 'HALF_TRUTH',
    category: 'Fitness & Exercise',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: '10,000 was a 1965 Japanese pedometer marketing slogan; mortality benefits plateau between 7,000 and 8,000 daily steps.',
    origin: 'The 1965 Japanese clockmaker Yamasa Toki launched the "Manpo-kei" (literally "10,000-steps meter") because the Japanese kanji character for 10,000 (万) looks like a walking person.',
    scientificTruth: 'Walking is incredible for cardiovascular health, insulin sensitivity, and longevity. However, large prospective studies published in The Lancet and JAMA show that health benefits (mortality reduction) level off around 7,000-8,000 steps for older adults and 8,000-9,000 for younger adults.',
    mechanism: 'Physical activity improves nitric oxide endothelial production and mitochondrial density, but the dose-response curve follows a logarithmic curve rather than a sudden step cliff at 10k.',
    practicalAdvice: 'Aim for regular movement. If you currently get 3,000 steps, going to 6,000 or 7,000 yields enormous health improvements. Don’t feel demoralized if you don’t reach arbitrary 10k.',
    sources: ['The Lancet Public Health (Meta-Analysis, 47,000 participants)', 'JAMA Internal Medicine (Lee et al.)', 'Harvard Health'],
    believedPercentage: 71,
    quiz: {
      questionText: 'Where did the famous number "10,000 steps a day" originally come from?',
      options: [
        { id: 'a', text: 'A 1965 marketing campaign for a Japanese pedometer called "Manpo-kei".', isCorrect: true, explanation: 'Correct! It was a brilliant marketing gimmick ahead of the 1964 Tokyo Olympics.' },
        { id: 'b', text: 'A randomized controlled trial conducted by the World Health Organization.', isCorrect: false, explanation: 'WHO guidelines recommend 150-300 mins of moderate activity, not specific step counts.' },
        { id: 'c', text: 'Hippocratic medical scrolls from ancient Greece.', isCorrect: false, explanation: 'Pedometers did not exist in ancient Greece.' }
      ],
      bobblyHint: 'Look back at Japanese marketing for a 1965 pocket pedometer!'
    },
    tags: ['walking', 'steps', 'cardio', 'history']
  },
  {
    id: 'muscle-turns-into-fat',
    claim: 'If you stop lifting weights, all your muscle tissue transforms directly into fat tissue.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Muscle and fat are completely distinct cell types; muscle cannot transmute into fat any more than bone turns into skin.',
    origin: 'Visual observations of former athletes who stopped training, experienced muscle atrophy, and gained adipose tissue from unchanged diets.',
    scientificTruth: 'Myocytes (muscle fibers) and adipocytes (fat cells) are physiologically separate. When you stop training, muscle fibers shrink (atrophy). If calorie intake remains higher than the reduced energy expenditure, existing fat cells expand (hypertrophy).',
    mechanism: 'Muscle is rich in protein filaments (actin, myosin) and water, while adipose tissue stores triglycerides. They cannot biochemically convert into one another.',
    practicalAdvice: 'When reducing workout volume, simply adjust your daily caloric intake downward to match your new baseline energy expenditure.',
    sources: ['American Council on Exercise (ACE)', 'Mayo Clinic Exercise Physiology', 'Tufts University Health & Nutrition'],
    believedPercentage: 62,
    quiz: {
      questionText: 'What actually happens to muscle tissue when you take a long break from lifting?',
      options: [
        { id: 'a', text: 'Muscle fibers shrink in cross-sectional diameter (atrophy).', isCorrect: true, explanation: 'Spot on! Muscles atrophy when unused; they never morph into fat cells.' },
        { id: 'b', text: 'Muscle cells chemically convert into yellow fat droplets.', isCorrect: false, explanation: 'Biochemically impossible.' },
        { id: 'c', text: 'Muscle dissolves into bone marrow.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Can bone turn into blood, or can muscle turn into fat cells?'
    },
    tags: ['muscle', 'fat', 'atrophy', 'anatomy']
  },
  {
    id: 'lifting-weights-stunts-growth',
    claim: 'Teenagers who lift weights will damage their growth plates and stunt their height forever.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Supervised, proper-form resistance training is safe and actually enhances adolescent bone mineral density.',
    origin: 'A 1970s report observing Japanese children who performed heavy manual child labor in rural mountain mines, which conflated malnutrition with weight training.',
    scientificTruth: 'The American Academy of Pediatrics states that age-appropriate strength training with certified supervision carries no more risk of epiphyseal (growth plate) damage than football, soccer, or gymnastics, while boosting bone density and joint stability.',
    mechanism: 'Appropriate axial loading stimulates osteoblast activity and insulin-like growth factor-1 (IGF-1), reinforcing growing epiphyseal matrices.',
    practicalAdvice: 'Young athletes should focus on technique, bodyweight mastery, and moderate weights with full range of motion under qualified supervision.',
    sources: ['American Academy of Pediatrics (Pediatrics Clinical Report)', 'British Journal of Sports Medicine', 'National Strength and Conditioning Association (NSCA Youth Position Statement)'],
    believedPercentage: 67,
    quiz: {
      questionText: 'What does the American Academy of Pediatrics conclude regarding youth strength training with proper supervision?',
      options: [
        { id: 'a', text: 'It is safe, effective, and supports bone density without stunting growth.', isCorrect: true, explanation: 'Correct! Supervised resistance training is beneficial for adolescent athletic development.' },
        { id: 'b', text: 'It instantly closes epiphyseal growth plates permanently.', isCorrect: false, explanation: 'Decades of research debunk this claim.' },
        { id: 'c', text: 'It makes teenagers 4 inches shorter on average.', isCorrect: false, explanation: 'A total urban myth.' }
      ],
      bobblyHint: 'Does pediatric science forbid young athletes from lifting, or encourage supervised training?'
    },
    tags: ['youth', 'growth', 'strength', 'bones']
  },
  {
    id: 'sweat-equals-fat-burned',
    claim: 'The more sweat pouring off your forehead in the gym, the more fat you are burning.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Sweat is purely your body’s evaporative cooling mechanism; you are losing water weight, not oxidized fat.',
    origin: 'Stepping on a scale immediately after a sauna or hot yoga session and seeing a 2-pound drop.',
    scientificTruth: 'Eccrine sweat glands secrete water, sodium, and trace minerals to dissipate thermal heat. Fat oxidation occurs biochemically via cellular respiration, where fat metabolites are actually exhaled through your lungs as carbon dioxide (84%) and water (16%).',
    mechanism: 'Sweat volume is determined by ambient humidity, temperature, genetics, and sweat gland density, completely independent of mitochondrial beta-oxidation.',
    practicalAdvice: 'Drink water to replace sweat immediately. Wearing rubber sweat suits or garbage bags in hot gyms only risks heatstroke and dehydration.',
    sources: ['British Medical Journal (BMJ - Where Does Fat Go?)', 'American College of Sports Medicine', 'Mayo Clinic'],
    believedPercentage: 61,
    quiz: {
      questionText: 'When your body oxidizes and "burns" 10 pounds of fat, where does the majority of that mass leave your body?',
      options: [
        { id: 'a', text: 'Exhaled as carbon dioxide (CO2) through your lungs (~84%).', isCorrect: true, explanation: 'Fascinatingly true! You exhale the carbon atoms of metabolized fat through your lungs!' },
        { id: 'b', text: 'Sweated out through pores in your armpits.', isCorrect: false, explanation: 'Sweat contains zero fat droplets.' },
        { id: 'c', text: 'Converted into urine by the bladder.', isCorrect: false, explanation: 'Only ~16% of fat byproduct becomes water excreted via urine/sweat.' }
      ],
      bobblyHint: 'Every time you breathe out, you are exhaling the atoms of burned fat!'
    },
    tags: ['sweat', 'fat-loss', 'lungs', 'metabolism']
  },
  {
    id: 'fasted-cardio-burns-more-fat',
    claim: 'Fasted morning cardio burns far more net body fat than doing cardio after eating.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'While you may burn slightly more fatty acids during the session, 24-hour total fat oxidation and body composition changes are identical.',
    origin: '1990s bodybuilding routines that measured respiratory exchange ratio (RER) during a single 45-minute morning treadmill walk.',
    scientificTruth: 'When exercise scientists followed subjects over weeks in randomized controlled trials (e.g. Schoenfeld et al.), groups doing fasted cardio and fed cardio lost the exact same amount of body fat when total daily calories and protein were matched.',
    mechanism: 'If you burn slightly more fat during fasted cardio, your body burns slightly more carbohydrates later in the day, equalizing 24-hour energy substrate oxidation.',
    practicalAdvice: 'Do cardio whenever you feel most energetic. If you feel dizzy working out empty, eat a light snack; if you prefer an empty stomach, that is fine too.',
    sources: ['Journal of the International Society of Sports Nutrition (Schoenfeld et al.)', 'American Journal of Clinical Nutrition', 'Sports Medicine'],
    believedPercentage: 59,
    quiz: {
      questionText: 'What did randomized controlled trials discover comparing fasted vs fed cardio over multiple weeks?',
      options: [
        { id: 'a', text: 'Both groups lost the exact same amount of body fat when total calories matched.', isCorrect: true, explanation: 'Correct! 24-hour energy balance dictates fat loss, not whether you had toast beforehand.' },
        { id: 'b', text: 'Fasted cardio melted 400% more abdominal fat.', isCorrect: false, explanation: 'Fasted cardio showed no superior fat loss in long-term trials.' },
        { id: 'c', text: 'Fed cardio caused immediate weight gain.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does your body care about a 45-minute window or your 24-hour calorie balance?'
    },
    tags: ['fasted-cardio', 'metabolism', 'running', 'fat-loss']
  },
  {
    id: 'running-ruins-knees',
    claim: 'Running regularly wears down your knee cartilage and guarantees knee osteoarthritis in old age.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Recreational runners actually have LOWER rates of knee osteoarthritis than sedentary individuals.',
    origin: 'The mechanical intuition comparing human joints to inanimate mechanical car tires that inevitably wear down with mileage.',
    scientificTruth: 'A massive 2017 meta-analysis in the Journal of Orthopaedic & Sports Physical Therapy found that recreational runners had an osteoarthritis rate of only 3.5%, compared to 10.2% in sedentary non-runners. Human cartilage is dynamic living tissue that strengthens under cyclical loading.',
    mechanism: 'Dynamic cyclical loading circulates synovial fluid, infusing nutrients into avascular articular cartilage and increasing proteoglycan density.',
    practicalAdvice: 'Running protects joint cartilage when mileage is increased gradually. Just wear supportive shoes and incorporate cross-training.',
    sources: ['Journal of Orthopaedic & Sports Physical Therapy (JOSPT Systematic Review)', 'Arthritis Foundation', 'Mayo Clinic Orthopedics'],
    believedPercentage: 70,
    quiz: {
      questionText: 'How do knee osteoarthritis rates compare between recreational runners and sedentary non-runners?',
      options: [
        { id: 'a', text: 'Recreational runners have significantly LOWER rates of arthritis than sedentary people.', isCorrect: true, explanation: 'Yes! Cartilage responds positively to cyclical impact, strengthening joints.' },
        { id: 'b', text: 'Runners suffer 5 times more knee replacements.', isCorrect: false, explanation: 'Studies show non-runners have higher rates of joint degradation.' },
        { id: 'c', text: 'All runners lose 100% of meniscus cartilage by age 50.', isCorrect: false, explanation: 'Absurd myth.' }
      ],
      bobblyHint: 'Living biological cartilage is not an old car tire—it adapts when used!'
    },
    tags: ['knees', 'running', 'joints', 'osteoarthritis']
  },
  {
    id: 'anabolic-window-30-minutes',
    claim: 'You must chug a protein shake within exactly 30 minutes of finishing a workout or your gains vanish.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'The muscle protein synthesis window remains elevated for 24-48 hours; total daily protein intake matters far more.',
    origin: 'Early supplement company advertisements in 1990s bodybuilding magazines pushing post-workout powder tubs.',
    scientificTruth: 'While consuming protein within a few hours of training is beneficial, the physiological window is wide open. Meta-analyses by Aragon & Schoenfeld proved that muscle protein synthesis remains heightened for 24 to 48 hours post-exercise.',
    mechanism: 'Ribosomal biogenesis and mTORC1 signaling remain stimulated for over a day following resistance stimulus.',
    practicalAdvice: 'Don’t panic if you don’t have a shaker bottle the second you rack a dumbbell. Focus on hitting your total daily protein goal distributed across your meals.',
    sources: ['Journal of the International Society of Sports Nutrition (Aragon & Schoenfeld Review)', 'Frontiers in Nutrition', 'McMaster University Exercise Metabolism Lab'],
    believedPercentage: 64,
    quiz: {
      questionText: 'How long does muscle protein synthesis typically stay elevated following a resistance workout?',
      options: [
        { id: 'a', text: '24 to 48 hours post-workout.', isCorrect: true, explanation: 'Correct! The window is closer to an entire day or two, not a frantic 30 minutes.' },
        { id: 'b', text: 'Exactly 29 minutes and 59 seconds.', isCorrect: false, explanation: 'Supplement marketing fiction.' },
        { id: 'c', text: 'Only 4 minutes.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Is your body’s muscle building machinery an egg timer or an ongoing 24-48 hour repair process?'
    },
    tags: ['protein', 'supplements', 'bodybuilding', 'recovery']
  },
  {
    id: 'seniors-should-avoid-lifting',
    claim: 'Older adults over 65 are too fragile for strength training and should only sit or do slow walking.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Progressive resistance training is the single most effective intervention to reverse sarcopenia and prevent debilitating falls in seniors.',
    origin: 'Paternalistic medical advice from decades past that treated aging solely as progressive fragility requiring bed rest.',
    scientificTruth: 'Landmark studies in JAMA and the New England Journal of Medicine demonstrated that nonagenarians (people in their 90s) gained substantial muscle mass, functional mobility, and balance through supervised resistance training, dramatically reducing hip fracture risk.',
    mechanism: 'Axial resistance stimulates mechanoreceptors in osteocytes and recruits high-threshold Type II motor units that atrophy with sedentary aging.',
    practicalAdvice: 'Resistance bands, bodyweight sits-to-stands, and light dumbbells help older adults retain independence and vitality.',
    sources: ['New England Journal of Medicine (Fiatarone et al.)', 'World Health Organization (WHO Physical Activity Guidelines)', 'National Institute on Aging'],
    believedPercentage: 56,
    quiz: {
      questionText: 'What is the primary benefit of supervised weight training in adults aged 70 and older?',
      options: [
        { id: 'a', text: 'Reversing age-related muscle loss (sarcopenia) and preventing dangerous falls.', isCorrect: true, explanation: 'Correct! Resistance training keeps seniors strong, mobile, and independent.' },
        { id: 'b', text: 'Speeding up cognitive decline.', isCorrect: false, explanation: 'Exercise actually improves cognitive function.' },
        { id: 'c', text: 'Making bones thinner and more fragile.', isCorrect: false, explanation: 'Lifting stimulates bone mineralization.' }
      ],
      bobblyHint: 'What happens to bones and muscles when we keep using them as we get older?'
    },
    tags: ['seniors', 'aging', 'sarcopenia', 'strength']
  },
  {
    id: 'women-lifting-bulky-overnight',
    claim: 'Women who lift heavy weights will accidentally wake up with massive, bulky physique like male bodybuilders.',
    verdict: 'BUSTED',
    category: 'Fitness & Exercise',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Women have 15-20 times lower resting testosterone than men; building extreme mass requires years of hyper-caloric surplus and specific hormonal protocols.',
    origin: '1980s fitness marketing aimed at women promoting tiny pink 1-lb dumbbells to "tone without bulking."',
    scientificTruth: 'Heavy lifting in women produces lean muscle definition, strong connective tissue, higher metabolic rate, and dense bones. Massive hyper-muscularity requires years of dedicated hypertrophic surplus calories and genetic/hormonal predispositions.',
    mechanism: 'Endogenous testosterone, growth hormone, and androgen receptor expression differ significantly, favoring dense athletic lean tissue over massive sarcoplasmic bloat in females.',
    practicalAdvice: 'Women should feel empowered to lift challenging weights! It builds athletic posture, metabolic resilience, and strong bones against osteoporosis.',
    sources: ['American College of Sports Medicine', 'National Strength and Conditioning Association', 'Mayo Clinic'],
    believedPercentage: 58,
    quiz: {
      questionText: 'Why do women naturally not build massive bodybuilder bulk from regular heavy strength training?',
      options: [
        { id: 'a', text: 'Significantly lower circulating testosterone levels and natural hormonal profiles.', isCorrect: true, explanation: 'Yes! Women produce roughly 1/15th to 1/20th the testosterone of men.' },
        { id: 'b', text: 'Women do not possess muscle fibers.', isCorrect: false, explanation: 'Women have identical anatomical muscle groups.' },
        { id: 'c', text: 'Heavy weights only work on male nervous systems.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Which key androgenic hormone is present at much lower levels in females?'
    },
    tags: ['women-fitness', 'strength', 'bodybuilding', 'hormones']
  }
];
