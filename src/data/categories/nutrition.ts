import { Myth } from '../../types/myth';

export const nutritionMyths: Myth[] = [
  {
    id: 'water-8-glasses',
    claim: 'You must drink exactly 8 glasses of pure water every single day.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Hydration needs vary wildly by body weight, climate, and diet, and food provides ~20% of your daily water.',
    origin: 'Traced to a 1945 US Food and Nutrition Board recommendation that stated adults need roughly 2.5 liters of water daily—but everyone ignored the very next sentence: "Most of this quantity is contained in prepared foods."',
    scientificTruth: 'Your body gets fluid from fruits, vegetables, tea, coffee, and soups. Healthy adults regulate hydration via thirst and urine color (pale straw is ideal). Forcing 8 glasses has no proven clinical benefit.',
    mechanism: 'The hypothalamus continuously senses blood osmolality; when fluid dips even 1%, anti-diuretic hormone (vasopressin) triggers thirst and kidney concentration.',
    practicalAdvice: 'Drink when you feel thirsty or when your urine is dark amber. Water, tea, fruits, and soups all count toward your daily fluid intake.',
    sources: ['National Academies of Sciences, Engineering, and Medicine (2004)', 'Harvard T.H. Chan School of Public Health', 'British Medical Journal (BMJ)'],
    believedPercentage: 74,
    quiz: {
      questionText: 'Do humans truly need to drink 8 glasses (64 oz) of pure plain water every day?',
      options: [
        { id: 'a', text: 'Yes, any less causes chronic dehydration.', isCorrect: false, explanation: 'False! Food, coffee, tea, and fruits all contribute significantly to fluid intake.' },
        { id: 'b', text: 'No, total hydration needs vary and include moisture from food and other beverages.', isCorrect: true, explanation: 'Correct! There is no universal 8-glass rule. Your kidneys and thirst mechanism guide you.' },
        { id: 'c', text: 'Yes, but only if you exercise intensely.', isCorrect: false, explanation: 'Athletes need more fluid, but 8 glasses remains an arbitrary figure.' }
      ],
      bobblyHint: 'Think about that juicy watermelon or bowl of soup you had today—did that hydrate you?'
    },
    tags: ['hydration', 'water', 'kidneys', 'daily habits']
  },
  {
    id: 'carrots-night-vision',
    claim: 'Eating lots of carrots gives you superpowers to see in pitch-black darkness.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Carrots have Vitamin A for standard retinal function, but eating more will not give you night vision.',
    origin: 'A British World War II propaganda campaign by the Ministry of Information in 1940 to conceal that the Royal Air Force had secretly developed airborne radar to shoot down German bombers at night.',
    scientificTruth: 'Beta-carotene converts to retinal (Vitamin A), essential for rhodopsin synthesis in rod cells. Severe deficiency causes night blindness, but once your levels are adequate, extra carrots just turn your skin slightly orange (carotenemia).',
    mechanism: 'Rhodopsin saturation has an enzymatic ceiling; excess beta-carotene cannot accelerate photoreceptor response beyond normal biological limits.',
    practicalAdvice: 'Eat carrots for general eye health and fiber, but don’t expect night-vision goggles without an actual flashlight.',
    sources: ['Smithsonian Magazine (WWII RAF Deception)', 'American Academy of Ophthalmology', 'Mayo Clinic'],
    believedPercentage: 62,
    quiz: {
      questionText: 'Why did the myth that carrots grant superhuman night vision become famous worldwide?',
      options: [
        { id: 'a', text: 'A WW2 British military deception to hide secret radar technology.', isCorrect: true, explanation: 'Bingo! The RAF claimed pilot John "Cats’ Eyes" Cunningham ate mounds of carrots to hide airborne radar.' },
        { id: 'b', text: 'An ancient Greek medical text written by Hippocrates.', isCorrect: false, explanation: 'Hippocrates did not write about RAF night vision.' },
        { id: 'c', text: 'A major supermarket ad campaign from the 1980s.', isCorrect: false, explanation: 'It predates modern supermarket ads by decades.' }
      ],
      bobblyHint: 'Look back at British radar pilots in 1940!'
    },
    tags: ['eyes', 'vitamins', 'ww2', 'history']
  },
  {
    id: 'sugar-hyperactivity-kids',
    claim: 'Eating sugar causes acute hyperactivity and ADHD in children.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Dozens of double-blind clinical trials show sugar does not cause behavioral hyperactivity in children.',
    origin: 'Dr. Benjamin Feingold’s 1970s dietary hypotheses and parental expectation bias at chaotic events like birthday parties and Halloween.',
    scientificTruth: 'Multiple meta-analyses in JAMA confirmed sugar has no measurable effect on behavior or cognitive performance. In blinded trials where parents thought kids were given sugar (but received aspartame), parents still rated kids as "hyperactive" purely due to expectation bias.',
    mechanism: 'Adrenaline and excitement at social gatherings (parties, playgrounds) trigger hyperactive play, not serum glucose spikes.',
    practicalAdvice: 'Limit refined sugars for dental and metabolic health, but stop blaming a slice of birthday cake for normal childhood excitement.',
    sources: ['Journal of the American Medical Association (JAMA Meta-Analysis)', 'American Academy of Pediatrics', 'National Institute of Mental Health'],
    believedPercentage: 81,
    quiz: {
      questionText: 'What did blinded clinical trials discover when testing sugar on children’s behavior?',
      options: [
        { id: 'a', text: 'Sugar caused an immediate 300% spike in motor restlessness.', isCorrect: false, explanation: 'Double-blind studies found zero difference in motor activity between sugar and placebo.' },
        { id: 'b', text: 'No behavioral differences occurred; parents’ perception was driven by expectation bias.', isCorrect: true, explanation: 'Spot on! Parents who believed their kids had sugar rated them more hyperactive even when given placebo.' },
        { id: 'c', text: 'Sugar only caused hyperactivity in boys under age 6.', isCorrect: false, explanation: 'No gender or age-specific hyperactivity was confirmed in controlled trials.' }
      ],
      bobblyHint: 'Ever notice that kids get wild at parties even before the cake is served?'
    },
    tags: ['sugar', 'pediatrics', 'behavior', 'psychology']
  },
  {
    id: 'eating-late-causes-fat',
    claim: 'Eating carbohydrates or calories after 8:00 PM automatically turns directly into body fat.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Total 24-hour energy balance dictates weight gain or loss, not the clock on your kitchen wall.',
    origin: 'Correlations observed in observational diets where late-night eaters tended to consume high-calorie snacks mindlessly in front of screens.',
    scientificTruth: 'A calorie at 9:00 PM requires the same thermal oxidation as a calorie at 9:00 AM. While late eating can affect acid reflux or sleep latency, your basal metabolic rate does not shut off when you sleep.',
    mechanism: 'Basal metabolic rate during sleep is only ~10-15% lower than waking resting rate, primarily driven by cellular repair and protein synthesis.',
    practicalAdvice: 'Focus on total daily caloric quality and nutrient density. Avoid heavy spicy meals right before bed for sleep quality, not because of metabolic time bombs.',
    sources: ['American Journal of Clinical Nutrition', 'International Journal of Obesity', 'Harvard Health Publishing'],
    believedPercentage: 68,
    quiz: {
      questionText: 'Why do late-night eaters sometimes gain weight if the clock itself does not cause fat storage?',
      options: [
        { id: 'a', text: 'Digestive enzymes turn completely dormant after 8 PM.', isCorrect: false, explanation: 'Digestive enzymes remain fully functional 24 hours a day.' },
        { id: 'b', text: 'Late-night eating often involves surplus mindless snacking in front of screens.', isCorrect: true, explanation: 'Exactly. People often consume surplus ultra-processed snacks while relaxing at night.' },
        { id: 'c', text: 'Insulin sensitivity doubles after sunset.', isCorrect: false, explanation: 'Incorrect.' }
      ],
      bobblyHint: 'Is it the clock, or what we tend to munch on the sofa at 10 PM?'
    },
    tags: ['metabolism', 'calories', 'weight', 'nutrition']
  },
  {
    id: 'msg-toxic-syndrome',
    claim: 'Monosodium glutamate (MSG) is a dangerous nerve toxin that causes headaches and numbness.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Decades of scientific scrutiny show MSG is safe; glutamate is an amino acid naturally abundant in tomatoes and aged cheese.',
    origin: 'A 1968 speculative letter in the New England Journal of Medicine by Dr. Robert Ho Man Kwok describing anecdotal post-meal symptoms, leading to xenophobic media hysteria labeled "Chinese Restaurant Syndrome."',
    scientificTruth: 'Double-blind, placebo-controlled trials have consistently failed to reproduce adverse reactions to MSG when participants don’t know whether they are consuming MSG or placebo salt. Glutamate is naturally present in breast milk, parmesan, mushrooms, and soy sauce.',
    mechanism: 'The human intestine metabolizes almost 95% of ingested dietary glutamate as local cellular fuel before it ever enters systemic circulation.',
    practicalAdvice: 'MSG contains 60% less sodium than regular table salt while enhancing savory umami flavor—it can actually help reduce sodium intake.',
    sources: ['US Food and Drug Administration (FDA)', 'World Health Organization (WHO)', 'European Food Safety Authority (EFSA)'],
    believedPercentage: 59,
    quiz: {
      questionText: 'Which everyday foods naturally contain high amounts of free glutamate (the active component of MSG)?',
      options: [
        { id: 'a', text: 'Parmesan cheese, ripe tomatoes, and mushrooms.', isCorrect: true, explanation: 'Yes! Aged cheeses, cured meats, and tomatoes naturally contain huge amounts of savory glutamate.' },
        { id: 'b', text: 'Only synthetic laboratory food colorings.', isCorrect: false, explanation: 'Glutamate is one of the most abundant naturally occurring amino acids on Earth.' },
        { id: 'c', text: 'Only fast food fried chicken.', isCorrect: false, explanation: 'Natural whole foods are packed with glutamate.' }
      ],
      bobblyHint: 'Think about what makes Italian tomato sauce and parmesan taste so rich and savory!'
    },
    tags: ['msg', 'food-safety', 'umami', 'biochemistry']
  },
  {
    id: 'detox-cleanses-essential',
    claim: 'Juice cleanses and commercial detox teas are required to purge built-up toxic sludge from your body.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Healthy bodies possess phenomenal detox organs: your liver, kidneys, lungs, and gut do the job 24/7 for free.',
    origin: 'Alternative wellness marketing appropriating legitimate medical terms used for acute heavy-metal poisoning or substance withdrawal.',
    scientificTruth: 'No juice, tea, or foot pad has ever been proven to extract unnamed "toxins." In fact, extreme juice cleanses risk electrolyte imbalances, muscle loss, and kidney stone formation from excessive oxalates.',
    mechanism: 'The liver converts lipophilic toxins into water-soluble metabolites via Cytochrome P450 Phase I & II pathways, which are then excreted via bile or kidney filtration.',
    practicalAdvice: 'Support your liver and kidneys with adequate hydration, leafy greens, adequate dietary protein, and limiting alcohol. Save your money on detox teas.',
    sources: ['Harvard Medical School', 'Mayo Clinic', 'British Dietetic Association'],
    believedPercentage: 66,
    quiz: {
      questionText: 'What organs perform true detoxification in the human body?',
      options: [
        { id: 'a', text: 'Liver, kidneys, lungs, intestines, and skin.', isCorrect: true, explanation: 'Correct! Your liver and kidneys are world-class chemical filtration facilities.' },
        { id: 'b', text: 'Only commercial charcoal lattes and celery cleanses.', isCorrect: false, explanation: 'Commercial cleanses are marketing fictions.' },
        { id: 'c', text: 'The appendix and gallbladder only.', isCorrect: false, explanation: 'The liver and kidneys handle detox.' }
      ],
      bobblyHint: 'You were born with two amazing bean-shaped filters and a reddish-brown chemical master!'
    },
    tags: ['detox', 'liver', 'kidneys', 'fads']
  },
  {
    id: 'eggs-cholesterol-heart-attack',
    claim: 'Eating eggs daily clogs your arteries because of their high dietary cholesterol.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'For the vast majority of people, dietary cholesterol in eggs has minimal impact on blood cholesterol or cardiovascular risk.',
    origin: '1970s dietary guidelines that conflated dietary cholesterol directly with serum LDL cholesterol without clinical trial evidence.',
    scientificTruth: 'Your liver synthesizes ~75-80% of your body’s cholesterol daily. When you eat more cholesterol, your liver downregulates internal production. Saturated and trans fats, not dietary cholesterol, are the primary drivers of elevated LDL.',
    mechanism: 'HMG-CoA reductase enzyme responds to dietary influx by reducing endogenous hepatic synthesis in hyper- and hypo-responders alike.',
    practicalAdvice: 'Eggs are nutrient powerhouses containing choline, lutein, and high-quality bioavailable protein. Enjoy whole eggs in a balanced diet.',
    sources: ['American Heart Association (AHA)', 'Circulation Journal', 'Harvard T.H. Chan School of Public Health'],
    believedPercentage: 54,
    quiz: {
      questionText: 'Where does most of the cholesterol circulating in your bloodstream come from?',
      options: [
        { id: 'a', text: 'Your own liver, which manufactures roughly 75-80% of it.', isCorrect: true, explanation: 'Correct! The liver synthesizes the majority of cholesterol your body needs for cell membranes and hormones.' },
        { id: 'b', text: '100% from breakfast eggs and butter.', isCorrect: false, explanation: 'Dietary cholesterol only accounts for a fraction of circulating levels.' },
        { id: 'c', text: 'Your adrenal glands and stomach lining.', isCorrect: false, explanation: 'The liver is the master regulator.' }
      ],
      bobblyHint: 'Which organ is the master biochemical factory of your body?'
    },
    tags: ['cholesterol', 'eggs', 'heart-health', 'lipids']
  },
  {
    id: 'brown-sugar-healthier',
    claim: 'Brown sugar is a healthy, unrefined natural superfood compared to white sugar.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Brown sugar is simply refined white sugar mixed with a tiny trace of molasses; nutritionally they are virtually identical.',
    origin: 'The "unbleached = wholesome" visual heuristic where brown color denotes natural whole grains.',
    scientificTruth: 'A teaspoon of brown sugar has 17 calories; white sugar has 16 calories. The trace minerals in molasses (calcium, iron) exist in such microscopic quantities you would need to consume lethal amounts of sugar to meet daily nutrient requirements.',
    mechanism: 'Both are composed of ~95-99% sucrose (a disaccharide of glucose and fructose) metabolized identically by digestive invertases.',
    practicalAdvice: 'Treat brown sugar, white sugar, turbinado, and agave as simple free sugars. Use whichever flavor profile fits your cooking, but keep intake moderate.',
    sources: ['USDA FoodData Central', 'American Heart Association', 'NHS UK'],
    believedPercentage: 47,
    quiz: {
      questionText: 'What is commercial brown sugar primarily made of?',
      options: [
        { id: 'a', text: 'Refined white sucrose crystals coated with a thin film of molasses.', isCorrect: true, explanation: 'Spot on! Most commercial brown sugar is white sugar with 5-10% molasses added back.' },
        { id: 'b', text: '100% raw unrefined sap with 40 vitamins.', isCorrect: false, explanation: 'It is not a vitamin superfood.' },
        { id: 'c', text: 'Caramelized honey crystals.', isCorrect: false, explanation: 'Honey is not used.' }
      ],
      bobblyHint: 'Look closely at how food manufacturers produce brown baking sugar!'
    },
    tags: ['sugar', 'baking', 'nutrition-facts']
  },
  {
    id: 'gluten-evil-for-all',
    claim: 'Gluten is inherently inflammatory and toxic for every human being.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Gluten is only harmful for individuals with Celiac disease (~1%) or diagnosed wheat allergy / non-celiac gluten sensitivity.',
    origin: 'Best-selling wellness books in the 2010s that generalized autoimmune celiac disease pathology to the entire healthy population.',
    scientificTruth: 'For non-celiac individuals, whole grains containing gluten (such as whole wheat, barley, and rye) are rich in prebiotic dietary fiber, B-complex vitamins, and antioxidants linked to lower cardiovascular disease risk.',
    mechanism: 'In celiac disease, HLA-DQ2/DQ8 triggers an inappropriate T-cell autoimmune attack against tissue transglutaminase. Healthy guts digest gluten without inflammatory cascades.',
    practicalAdvice: 'If you have unexplained GI distress or anemia, get tested for celiac disease BEFORE cutting out gluten. For the rest of us, whole grains are health-protective.',
    sources: ['American Gastroenterological Association', 'Celiac Disease Foundation', 'The Lancet'],
    believedPercentage: 58,
    quiz: {
      questionText: 'What percentage of the population actually has biopsy-confirmed Celiac Disease?',
      options: [
        { id: 'a', text: 'Approximately 1% of the global population.', isCorrect: true, explanation: 'Correct! Celiac disease affects about 1 in 100 people worldwide.' },
        { id: 'b', text: 'Roughly 45-50% of adults.', isCorrect: false, explanation: 'A massive overestimate popularized by fad diets.' },
        { id: 'c', text: 'Everyone who experiences bloating.', isCorrect: false, explanation: 'Bloating has dozens of non-celiac causes including FODMAPs, stress, and fiber changes.' }
      ],
      bobblyHint: 'Is it nearly half the world or a specific autoimmune 1% minority?'
    },
    tags: ['gluten', 'celiac', 'gut-health', 'grains']
  },
  {
    id: 'microwaves-destroy-nutrients',
    claim: 'Microwaving food radiates and destroys all its vitamins and enzymes.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Microwaving actually preserves more heat-sensitive vitamins (like Vitamin C) than boiling because of faster cooking and less water exposure.',
    origin: 'Fear of non-ionizing electromagnetic radiation and rumors of "dead radiated food."',
    scientificTruth: 'Nutrient degradation in cooking is driven by heat duration and water leaching. Because microwaves heat food rapidly with minimal added water, delicate water-soluble vitamins (B and C) remain far more intact than in boiling pots.',
    mechanism: 'Microwaves oscillate polar water molecules at 2.45 GHz via dielectric heating; they do not alter chemical bonds or emit ionizing radioactive particles.',
    practicalAdvice: 'Microwaving vegetables with a splash of water in a glass dish is one of the best ways to retain vibrant color, crispness, and nutrient content.',
    sources: ['Harvard Health Publishing', 'Journal of Agricultural and Food Chemistry', 'FDA Radiation-Emitting Products'],
    believedPercentage: 51,
    quiz: {
      questionText: 'Why does microwaving often retain MORE vitamin C in broccoli than boiling it on the stove?',
      options: [
        { id: 'a', text: 'Shorter cooking time and minimal water leaching.', isCorrect: true, explanation: 'Yes! Vitamin C dissolves into boiling water; microwaves cook quickly with almost no water.' },
        { id: 'b', text: 'Microwaves generate new vitamins out of thin air.', isCorrect: false, explanation: 'Microwaves cannot create matter or vitamins.' },
        { id: 'c', text: 'Microwaves freeze food molecules during cooking.', isCorrect: false, explanation: 'They heat food through molecular friction.' }
      ],
      bobblyHint: 'Where does water-soluble vitamin C escape when submerged in a pot of boiling water?'
    },
    tags: ['kitchen', 'cooking', 'vitamins', 'physics']
  },
  {
    id: 'coffee-dehydrates-you',
    claim: 'Drinking a cup of coffee causes net dehydration and drains your body of fluid.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'While caffeine has a mild diuretic effect, the water in a cup of coffee easily outweighs it, providing net positive hydration.',
    origin: 'A 1928 physiological study that tested massive doses of pure caffeine in fasting subjects and observed increased urination.',
    scientificTruth: 'Modern clinical trials (including University of Birmingham hydration tests) show coffee drinkers exhibit hydration markers, urine osmolality, and blood volume identical to people drinking pure water.',
    mechanism: 'Caffeine weakly inhibits adenosine A1 receptors in the kidney proximal tubule, but regular caffeine consumers develop rapid tolerance to this diuretic response within days.',
    practicalAdvice: 'Your morning cup of coffee or afternoon tea counts toward your daily fluid intake. Just beware of excessive sugar syrups.',
    sources: ['PLOS ONE (Killer et al., Hydration Status & Coffee)', 'Mayo Clinic', 'American College of Sports Medicine'],
    believedPercentage: 63,
    quiz: {
      questionText: 'Does a standard 8-ounce cup of coffee provide net hydration to a regular coffee drinker?',
      options: [
        { id: 'a', text: 'Yes, the fluid volume of the coffee far exceeds the mild diuretic effect.', isCorrect: true, explanation: 'Correct! The water in the cup easily replenishes any tiny caffeine-induced fluid loss.' },
        { id: 'b', text: 'No, every cup removes 2 cups of water from your bloodstream.', isCorrect: false, explanation: 'A total exaggeration; coffee is over 98% water.' },
        { id: 'c', text: 'Only if it is decaffeinated.', isCorrect: false, explanation: 'Even regular caffeinated coffee hydrates regular consumers.' }
      ],
      bobblyHint: 'How much water is actually in that mug of brewed coffee?'
    },
    tags: ['coffee', 'caffeine', 'hydration', 'drinks']
  },
  {
    id: 'fresh-veggies-always-superior',
    claim: 'Frozen vegetables are stripped of nutrients and far inferior to fresh produce.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Frozen vegetables are flash-frozen at peak ripeness and often have higher vitamin levels than "fresh" produce shipped across continents for weeks.',
    origin: 'Historical association of frozen TV dinners with low culinary quality.',
    scientificTruth: 'Fresh produce often spends 7-14 days in transit, storage, and grocery display cases where light, heat, and air degrade sensitive vitamins like Vitamin C and folate. Flash-freezing immediately locks nutrients in place.',
    mechanism: 'Blanching deactivates oxidative polyphenol oxidases, and rapid liquid nitrogen/IQF freezing prevents large ice crystal formation that ruptures plant cell walls.',
    practicalAdvice: 'Frozen peas, berries, spinach, and broccoli are economical, reduce food waste, and are just as nutritious (or more so) than fresh counterparts.',
    sources: ['University of California Davis Produce Research', 'Journal of Food Composition and Analysis', 'American Heart Association'],
    believedPercentage: 55,
    quiz: {
      questionText: 'Why can frozen vegetables sometimes be MORE nutrient-dense than fresh grocery store produce?',
      options: [
        { id: 'a', text: 'They are flash-frozen hours after harvest, while "fresh" greens lose vitamins during multi-day shipping.', isCorrect: true, explanation: 'Exactly. Fresh vegetables lose up to 50% of vitamin C during long truck transit and shelf storage.' },
        { id: 'b', text: 'Frozen veggies are sprayed with liquid multivitamins.', isCorrect: false, explanation: 'No artificial vitamin sprays are used.' },
        { id: 'c', text: 'Ice crystals convert starch into vitamin D.', isCorrect: false, explanation: 'Ice crystals do not synthesize vitamins.' }
      ],
      bobblyHint: 'Think about how long "fresh" berries travel in refrigerated trucks before you buy them!'
    },
    tags: ['vegetables', 'freezer', 'vitamins', 'smart-shopping']
  },
  {
    id: 'organic-food-pesticide-free',
    claim: 'Organic produce is 100% free of all pesticides and automatically more nutritious.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Organic farming uses natural pesticides (copper sulfate, spinosad), and nutritional differences are minimal across hundreds of studies.',
    origin: 'Aggressive lifestyle marketing framing organic as an untouched pristine Eden.',
    scientificTruth: 'USDA and EU organic regulations permit dozens of naturally derived chemical pesticides. Extensive Stanford University meta-analyses found no consistent evidence that organic foods are significantly more nutritious in macronutrients or vitamins than conventional produce.',
    mechanism: 'Pesticide toxicity is determined by dosage and chemical properties, not whether the source is synthetic or derived from natural mineral/botanical extracts.',
    practicalAdvice: 'Eating enough fruits and vegetables (organic or conventional) is overwhelmingly what matters for chronic disease prevention. Always wash produce with running water.',
    sources: ['Annals of Internal Medicine (Stanford University Systematic Review)', 'USDA Agricultural Marketing Service', 'American Academy of Pediatrics'],
    believedPercentage: 64,
    quiz: {
      questionText: 'Do certified organic farms use pesticides?',
      options: [
        { id: 'a', text: 'Yes, they use approved naturally derived pesticides (e.g. copper sulfate, pyrethrins).', isCorrect: true, explanation: 'Correct! Organic agriculture permits natural chemical and mineral pest controls.' },
        { id: 'b', text: 'No, organic law forbids any pest control chemical whatsoever.', isCorrect: false, explanation: 'Farms must control pests; organic standards approve natural formulations.' },
        { id: 'c', text: 'Only in greenhouse tomatoes.', isCorrect: false, explanation: 'Applies across all organic crops.' }
      ],
      bobblyHint: 'Does the organic label mean "zero sprays" or "naturally derived sprays"?'
    },
    tags: ['organic', 'pesticides', 'agriculture', 'groceries']
  },
  {
    id: 'raw-milk-super-immunity',
    claim: 'Drinking unpasteurized raw milk cures asthma and allergies with zero bacterial danger.',
    verdict: 'BUSTED',
    category: 'Nutrition & Diet',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Pasteurization saves lives; raw milk carries significant risks of Campylobacter, Salmonella, Listeria, and E. coli.',
    origin: '19th-century pastoral nostalgia and recent social media wellness trends claiming pasteurization "kills healthy live enzymes."',
    scientificTruth: 'Pasteurization simply heats milk briefly (72°C for 15 seconds) to kill deadly pathogens. Milk enzymes would be denatured by stomach acid anyway. CDC data shows unpasteurized dairy causes 840 times more illnesses than pasteurized dairy.',
    mechanism: 'Cow milk udder flora frequently harbors pathogenic enterobacteria that multiply rapidly at ambient temperatures without thermal pasteurization.',
    practicalAdvice: 'Always choose pasteurized dairy products, especially for pregnant women, young children, and older adults.',
    sources: ['Centers for Disease Control and Prevention (CDC)', 'US Food and Drug Administration (FDA)', 'American Academy of Pediatrics'],
    believedPercentage: 38,
    quiz: {
      questionText: 'What is the primary public health purpose of milk pasteurization invented by Louis Pasteur?',
      options: [
        { id: 'a', text: 'To eliminate deadly bacterial pathogens like Listeria, E. coli, and Salmonella.', isCorrect: true, explanation: 'Yes! Pasteurization revolutionized public health by stopping milk-borne epidemics.' },
        { id: 'b', text: 'To strip away all natural protein and calcium.', isCorrect: false, explanation: 'Protein and calcium remain intact.' },
        { id: 'c', text: 'To change the color of milk from yellow to white.', isCorrect: false, explanation: 'It is a microbiological safety process.' }
      ],
      bobblyHint: 'Think about Louis Pasteur and preventing tuberculosis and bacterial epidemics!'
    },
    tags: ['milk', 'safety', 'pasteurization', 'bacteria']
  }
];
