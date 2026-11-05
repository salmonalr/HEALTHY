import { Myth } from '../../types/myth';

export const wellnessTrendsMyths: Myth[] = [
  {
    id: 'alkaline-water-cures-cancer',
    claim: 'Drinking expensive alkaline water balances your blood pH, prevents diseases, and starves cancer cells.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Stomach acid (pH 1.5-2.0) instantly neutralizes alkaline water; human blood pH is strictly locked between 7.35-7.45 by kidneys and lungs.',
    origin: 'Pseudoscience guru Robert O. Young’s "pH Miracle" book (Young was later convicted of practicing medicine without a license).',
    scientificTruth: 'Your blood pH is among the most tightly regulated homeostatic variables in biology, maintained precisely between 7.35 and 7.45 by bicarbonate buffer systems, pulmonary respiration of CO2, and renal excretion of hydrogen ions. If your blood pH shifted significantly from drinking water, you would be in an intensive care unit with fatal acidosis or alkalosis.',
    mechanism: 'Gastric parietal cells secrete hydrochloric acid (HCl), immediately buffering any ingested basic liquid into neutral salt and water.',
    practicalAdvice: 'Drink ordinary, clean tap or filtered water. Alkaline water is a costly marketing gimmick that only changes the pH of your urine, not your blood or cells.',
    sources: ['BMJ Open (Systematic Review of Systematic Reviews on Alkaline Water)', 'American Institute for Cancer Research', 'Mayo Clinic'],
    believedPercentage: 62,
    quiz: {
      questionText: 'What happens the moment alkaline water (pH 9.0) enters the human stomach?',
      options: [
        { id: 'a', text: 'Hydrochloric stomach acid (pH 1.5-2.0) instantly neutralizes it.', isCorrect: true, explanation: 'Correct! Strong gastric acid immediately neutralizes any mild alkaline liquid.' },
        { id: 'b', text: 'It turns the entire bloodstream into pure alkaline bleach.', isCorrect: false, explanation: 'That would be immediately fatal.' },
        { id: 'c', text: 'It converts into liquid gold.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What strong acid already lives inside your stomach waiting for food and drinks?'
    },
    tags: ['alkaline-water', 'wellness-fads', 'cancer', 'biochemistry']
  },
  {
    id: 'collagen-drinks-direct-to-wrinkles',
    claim: 'Drinking liquid collagen peptide shots sends whole collagen fibers straight to your forehead wrinkles to plump them.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Digestive enzymes break collagen into individual amino acids (glycine, proline); your body uses them wherever protein is needed.',
    origin: 'Influencer marketing campaigns by multi-million-dollar beauty supplement brands.',
    scientificTruth: 'Collagen is a large fibrous triple-helix protein. Your stomach and small intestine cannot absorb intact collagen molecules: gastric pepsin and pancreatic proteases dismantle them into oligopeptides and single amino acids. Once absorbed into the bloodstream, your body distributes those amino acids systemically—to healing wounds, organ tissues, bone, or muscle.',
    mechanism: 'Enzymatic hydrolysis in the gut lumen cleaves peptide bonds into free amino acids and di/tripeptides via PepT1 transporters.',
    practicalAdvice: 'Eating adequate dietary protein (eggs, poultry, fish, legumes, tofu) alongside Vitamin C (essential for endogenous collagen synthesis) provides all the building blocks your body needs.',
    sources: ['Harvard Health Publishing (The Collagen Craze)', 'Dermatology Practical & Conceptual', 'British Journal of Dermatology'],
    believedPercentage: 69,
    quiz: {
      questionText: 'What happens to swallowed collagen peptides inside the gastrointestinal tract?',
      options: [
        { id: 'a', text: 'Digestive enzymes break them down into basic amino acids just like any dietary protein.', isCorrect: true, explanation: 'Bingo! The stomach dismantles collagen into basic protein building blocks.' },
        { id: 'b', text: 'The liquid travels through a special straw directly to facial skin.', isCorrect: false, explanation: 'Anatomy does not have direct facial beverage straws.' },
        { id: 'c', text: 'It crystallizes into diamonds.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Does your digestive system absorb giant unbroken proteins or break them down into amino acids?'
    },
    tags: ['collagen', 'skincare', 'supplements', 'beauty']
  },
  {
    id: 'apple-cider-vinegar-melts-fat',
    claim: 'Drinking shots of raw apple cider vinegar burns away visceral belly fat with zero diet or exercise changes.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'ACV cannot dissolve fat; drinking undiluted vinegar burns the esophagus and dissolves dental enamel.',
    origin: 'Decades of folk medicine books claiming fermented cider vinegar is a universal cure for every chronic disease.',
    scientificTruth: 'Acetic acid may slightly delay gastric emptying, which can induce mild satiety or nausea, but rigorous human clinical trials demonstrate trivial to negligible weight loss differences (~1-2 lbs over 12 weeks, likely due to nausea). Undiluted vinegar shots pose serious risks of severe tooth enamel erosion and chemical pharyngitis.',
    mechanism: 'Free acetic acid (5% concentration) has a pH around 2.5-3.0, corrosive to hydroxyapatite crystals in teeth.',
    practicalAdvice: 'Use apple cider vinegar in tasty olive oil salad dressings! Avoid drinking straight undiluted shots that corrode your teeth and throat.',
    sources: ['Journal of the Academy of Nutrition and Dietetics', 'American Dental Association', 'Mayo Clinic'],
    believedPercentage: 66,
    quiz: {
      questionText: 'What is a well-documented risk of drinking straight, undiluted apple cider vinegar shots daily?',
      options: [
        { id: 'a', text: 'Permanent erosion of tooth enamel and throat irritation.', isCorrect: true, explanation: 'Correct! Strong acetic acid chemically dissolves protective tooth enamel.' },
        { id: 'b', text: 'Losing 40 pounds of pure fat in 24 hours.', isCorrect: false, explanation: 'Fad diet fantasy.' },
        { id: 'c', text: 'Growing apple trees in the liver.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'What happens when acid comes into direct contact with tooth enamel every morning?'
    },
    tags: ['apple-cider-vinegar', 'diet-fads', 'teeth', 'safety']
  },
  {
    id: 'activated-charcoal-daily-detox',
    claim: 'Drinking trendy black activated charcoal lattes and pills cleanses your daily diet of harmful chemicals.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Charcoal indiscriminately binds to life-saving prescription drugs (birth control, antidepressants) and nutrients, causing malnutrition and medication failure.',
    origin: 'Hospitals using medical activated charcoal in emergency overdoses within 1 hour of poison ingestion.',
    scientificTruth: 'Activated charcoal has massive porous surface area, making it an effective emergency gastrointestinal adsorbent for acute toxin overdoses in hospital ERs. However, when consumed casually in lattes or wellness snacks, charcoal is non-specific: it binds to prescription medications (birth control, thyroid drugs, cardiac pills, antidepressants), rendering them inactive, and binds to dietary vitamins.',
    mechanism: 'Van der Waals non-specific adsorption binds polar and non-polar organic molecules indiscriminately in the gut lumen.',
    practicalAdvice: 'Never consume activated charcoal products within 4-6 hours of taking prescription medications. Let your liver and kidneys handle detox.',
    sources: ['American Journal of Health-System Pharmacy', 'National Capital Poison Center (Poison.org)', 'Mayo Clinic Toxicology'],
    believedPercentage: 54,
    quiz: {
      questionText: 'Why can drinking "activated charcoal detox lattes" be dangerous for someone taking daily medications?',
      options: [
        { id: 'a', text: 'Charcoal indiscriminately binds to prescription drugs (like birth control or heart pills), preventing absorption.', isCorrect: true, explanation: 'Crucial fact! Charcoal binds to medications and renders them completely ineffective.' },
        { id: 'b', text: 'Charcoal makes blood turn into dark tar.', isCorrect: false, explanation: 'Charcoal stays in the gut lumen; it is not absorbed.' },
        { id: 'c', text: 'It creates tiny lightning storms in the intestine.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'If charcoal absorbs everything in your stomach, what happens to your daily morning pills?'
    },
    tags: ['charcoal', 'detox', 'medication-safety', 'fads']
  },
  {
    id: 'essential-oils-100-percent-safe',
    claim: 'Essential oils are completely natural plant extracts, so they are 100% non-toxic and can be swallowed freely.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Essential oils are hyper-concentrated volatile organic compounds; ingesting them causes mucosal burns, seizures, and liver toxicity.',
    origin: 'Multi-level marketing (MLM) distributors encouraging customers to drop essential oils into drinking water for "cellular health."',
    scientificTruth: 'It takes roughly 250 pounds of peppermint leaves to make just one small bottle of essential oil. Consuming drops of undiluted oil exposes the esophageal mucosa and stomach to massive concentrations of terpenes and phenols. Poison control centers handle thousands of toxic essential oil poisonings annually (especially oil of wintergreen, tea tree, and eucalyptus).',
    mechanism: 'Lipophilic volatile terpenes easily cross blood-brain and cellular barriers, causing central nervous system depression, seizures, and hepatocellular injury.',
    practicalAdvice: 'Enjoy essential oils for aromatherapy via ambient diffusers. Never ingest essential oils, and always dilute with carrier oil (like jojoba) before applying to skin.',
    sources: ['Pediatrics Journal (Toxic Ingestions of Essential Oils)', 'American Association of Poison Control Centers', 'National Institutes of Health (NIH)'],
    believedPercentage: 57,
    quiz: {
      questionText: 'What do poison control centers warn regarding the oral ingestion of concentrated essential oils?',
      options: [
        { id: 'a', text: 'They are hyper-concentrated chemicals that can cause chemical burns, seizures, and organ toxicity.', isCorrect: true, explanation: 'Correct! "Natural" does not mean safe to swallow; essential oils are industrial-strength plant extracts.' },
        { id: 'b', text: 'They cure every known human illness in 5 seconds.', isCorrect: false, explanation: 'A dangerous marketing lie.' },
        { id: 'c', text: 'They turn your vocal cords into flower petals.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Just because something comes from a plant, does that mean it’s safe to swallow in ultra-concentrated form?'
    },
    tags: ['essential-oils', 'toxicology', 'poison-control', 'safety']
  },
  {
    id: 'more-vitamins-always-better',
    claim: 'If one multivitamin is healthy, taking 10 times the recommended dose of vitamins is 10 times healthier.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Fat-soluble vitamins (A, D, E, K) accumulate in liver and adipose tissues to toxic levels, causing hypercalcemia, organ damage, and birth defects.',
    origin: 'The classic "if some is good, more must be better" cognitive fallacy promoted by supplement megadose proponents.',
    scientificTruth: 'Fat-soluble vitamins are not easily excreted in urine. Excessive Vitamin A (retinol) causes intracranial hypertension and birth defects; excess Vitamin D causes severe hypercalcemia, metastatic calcium deposits in arteries, and kidney failure; megadoses of zinc block copper absorption, inducing severe neuro-anemia.',
    mechanism: 'Hypervitaminosis overwhelms hepatic transport globulin binding, releasing free active vitamer metabolites that disrupt membrane permeability and calcium homeostasis.',
    practicalAdvice: 'Stick to the Recommended Dietary Allowance (RDA) unless a healthcare provider diagnoses a specific deficiency through a blood panel.',
    sources: ['New England Journal of Medicine (Vitamin Toxicities)', 'Harvard T.H. Chan School of Public Health', 'FDA Dietary Supplement Guidance'],
    believedPercentage: 61,
    quiz: {
      questionText: 'Which vitamins are fat-soluble and can accumulate to toxic, life-threatening levels in the liver?',
      options: [
        { id: 'a', text: 'Vitamins A, D, E, and K.', isCorrect: true, explanation: 'Correct! ADEK vitamins are fat-soluble and stored in the body, making megadosing hazardous.' },
        { id: 'b', text: 'Only vitamin B12.', isCorrect: false, explanation: 'B vitamins are water-soluble.' },
        { id: 'c', text: 'Zero vitamins can ever become toxic.', isCorrect: false, explanation: 'Severe toxicity is well-documented in clinical medicine.' }
      ],
      bobblyHint: 'Remember the acronym: "ADEK" for fat-soluble vitamins!'
    },
    tags: ['vitamins', 'toxicology', 'supplements', 'hypervitaminosis']
  },
  {
    id: 'colloidal-silver-miracle-cure',
    claim: 'Ingesting liquid colloidal silver is a miraculous natural antibiotic that cures infections with zero side effects.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Silver has no known physiological function; taking it causes irreversible argyria—permanently turning skin slate-blue or gray—and kidney failure.',
    origin: 'Pre-antibiotic 19th-century medicine when silver salts were used as topical antiseptics before modern antibiotics existed.',
    scientificTruth: 'Silver is not an essential mineral and has zero dietary requirement. When ingested, ionic silver deposits into deep dermal layers, kidneys, liver, and brain. Exposure to ambient sunlight photo-reduces the deposited silver compounds into metallic silver, turning the patient’s skin permanently, irreversibly slate-gray or blue (argyria). It also causes renal failure and peripheral neuropathies.',
    mechanism: 'Photoreduction of deposited tissue silver selenide and silver sulfide creates permanent dendritic metallic granules in the basement membrane.',
    practicalAdvice: 'Never swallow colloidal silver products! The FDA has warned that colloidal silver is neither safe nor effective for any medical condition.',
    sources: ['US Food and Drug Administration (FDA Consumer Advisory on Silver)', 'National Center for Complementary and Integrative Health (NCCIH)', 'Mayo Clinic'],
    believedPercentage: 41,
    quiz: {
      questionText: 'What permanent, irreversible condition can occur from drinking colloidal silver liquids?',
      options: [
        { id: 'a', text: 'Argyria: skin, eyes, and internal organs turn permanently blue-gray.', isCorrect: true, explanation: 'True! Silver deposits in skin and reacts with light, permanently staining tissue blue-gray forever.' },
        { id: 'b', text: 'Immunity to all known diseases on Earth.', isCorrect: false, explanation: 'Silver has no internal medical benefit.' },
        { id: 'c', text: 'X-ray vision.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What happens when silver compounds in skin react with sunlight like old photographic film?'
    },
    tags: ['colloidal-silver', 'argyria', 'fads', 'poisoning']
  },
  {
    id: 'sunscreen-causes-more-cancer-than-sun',
    claim: 'Commercial sunscreens are filled with toxins that cause more melanoma than ultraviolet sunlight does.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'UV radiation is an established World Health Organization Group 1 carcinogen; daily broad-spectrum sunscreen reduces melanoma risk by 50%.',
    origin: 'Social media wellness influencers promoting unprotected "sun staring" and "seed oil sunburn" conspiracy theories.',
    scientificTruth: 'Ultraviolet photons directly damage DNA, causing cyclobutane pyrimidine dimers (CPDs) that lead to mutations in the TP53 tumor suppressor gene. Randomized controlled trials in Australia (Green et al.) demonstrated that regular daily sunscreen use cut invasive melanoma incidence in half and reduced squamous cell carcinoma by 40%.',
    mechanism: 'Organic and inorganic UV filters absorb or reflect photons before they can form mutagenic covalent thymine dimers in epidermal keratinocyte DNA.',
    practicalAdvice: 'Wear broad-spectrum SPF 30+ sunscreen daily when outdoors. If concerned about specific chemical filters, mineral sunscreens with zinc oxide and titanium dioxide are inert and effective.',
    sources: ['Journal of Clinical Oncology (Green et al., Australian Nambour Skin Cancer Trial)', 'World Health Organization (WHO Carcinogen Classification)', 'American Academy of Dermatology'],
    believedPercentage: 48,
    quiz: {
      questionText: 'What did the landmark Australian Nambour randomized trial prove about daily sunscreen use?',
      options: [
        { id: 'a', text: 'Regular sunscreen application reduced the incidence of melanoma by roughly 50%.', isCorrect: true, explanation: 'Correct! Daily broad-spectrum sunscreen significantly prevents lethal skin cancer.' },
        { id: 'b', text: 'Sunscreen turned all participants into lizards.', isCorrect: false, explanation: 'Nonsense.' },
        { id: 'c', text: 'Sunscreen had zero effect on skin.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Did the Australian clinical trial prove sunscreen protects against melanoma or causes it?'
    },
    tags: ['sunscreen', 'melanoma', 'cancer', 'dermatology']
  },
  {
    id: 'tanning-beds-safe-base-tan',
    claim: 'Getting a "base tan" in an indoor tanning bed protects your skin from sunburns during summer vacation.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'A base tan provides a measly SPF of ~2-3 while increasing your lifetime risk of melanoma by up to 75%.',
    origin: 'Indoor tanning salon promotional packages before prom, spring break, and summer holidays.',
    scientificTruth: 'Indoor tanning beds emit concentrated UVA radiation at levels up to 12 times higher than the midday Mediterranean sun. A tan is not a sign of vitality; it is an emergency cellular SOS response indicating that your melanocytes have sustained severe DNA mutation. The minimal pigment darkening offers an SPF equivalent of roughly 2 to 3—negligible protection against vacation sun.',
    mechanism: 'UVA triggers reactive oxygen species and breaks in cellular DNA, accelerating photoaging and melanomagenesis without producing protective thickening of the stratum corneum.',
    practicalAdvice: 'Avoid indoor tanning beds completely. If you want a golden glow, use self-tanning lotion (DHA), which safely stains the outer dead stratum corneum without radiation.',
    sources: ['International Agency for Research on Cancer (IARC Monograph on Tanning Beds)', 'American Academy of Dermatology (AAD)', 'The Lancet Oncology'],
    believedPercentage: 63,
    quiz: {
      questionText: 'What effective SPF protection does a typical "base tan" provide against sunburn?',
      options: [
        { id: 'a', text: 'A trivial SPF of roughly 2 to 3, providing virtually no meaningful protection.', isCorrect: true, explanation: 'Spot on! A base tan does not protect you from sunburns and spikes cancer risk.' },
        { id: 'b', text: 'An impenetrable SPF 100 shield.', isCorrect: false, explanation: 'Tanning salon marketing fiction.' },
        { id: 'c', text: 'SPF 50 with waterproof resistance.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Is that tan an SPF 50 shield or a tiny SPF 2 that barely does anything?'
    },
    tags: ['tanning', 'melanoma', 'skincare', 'cancer']
  },
  {
    id: 'coffee-enemas-colon-cleansing',
    claim: 'Pumping brewed coffee into your rectum through an enema cleans decades of impacted toxins from your colon.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Coffee enemas risk rectosigmoid perforation, rectal third-degree burns, systemic sepsis, and fatal electrolyte collapse.',
    origin: 'Max Gerson’s 1930s "Gerson Therapy" alternative cancer protocol.',
    scientificTruth: 'The human colon is not a clogged sewage pipe; mucosal epithelial cells naturally slough off and regenerate every 3 to 5 days. There is zero evidence of "compacted toxic sludge." Medical literature records multiple deaths and bowel resections from coffee enemas due to acute proctocolitis, severe septic shock, and lethal hypokalemia (potassium depletion).',
    mechanism: 'Hot caustic fluids introduce thermal injury, mechanical barotrauma, and fluid absorption shifts that disrupt cardiac electrolytes.',
    practicalAdvice: 'Never administer coffee enemas! Drink your morning coffee by mouth and let your intestinal mucosa shed itself naturally.',
    sources: ['American Journal of Gastroenterology (Coffee Enema-Related Perforation)', 'Journal of Clinical Gastroenterology', 'National Cancer Institute'],
    believedPercentage: 35,
    quiz: {
      questionText: 'What severe medical complications have been documented from alternative "coffee enemas"?',
      options: [
        { id: 'a', text: 'Intestinal bowel perforation, severe septic shock, and fatal electrolyte collapse.', isCorrect: true, explanation: 'Correct! Coffee enemas have caused bowel tears and documented deaths.' },
        { id: 'b', text: 'Instant enlightenment and 100% cancer cure.', isCorrect: false, explanation: 'Pseudoscience.' },
        { id: 'c', text: 'Growing coffee beans in the stomach.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What happens when hot, non-sterile liquid is pumped into delicate rectal tissue?'
    },
    tags: ['coffee-enema', 'colon-cleanse', 'gastroenterology', 'danger']
  },
  {
    id: 'homeopathy-herbal-medicine',
    claim: 'Homeopathy is simply natural herbal plant medicine with gentle organic herbal extracts.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Homeopathic remedies are diluted past Avogadro’s limit (30C); mathematically, not one single molecule of active substance remains in the sugar pill.',
    origin: 'Samuel Hahnemann’s 1796 doctrine of "like cures like" (Law of Similars) and the "Law of Infinitesimals."',
    scientificTruth: 'Unlike phytotherapy or herbal medicine (which contains real, measurable chemical phytochemicals), standard homeopathic preparations (e.g. 30C dilution) dilute the starting substance by 1:100 thirty consecutive times. This dilution ratio (1 in 10^60) exceeds the total number of atoms in our entire solar system! You are purchasing pure water dropped onto lactose sugar spheres.',
    mechanism: 'Claimed "water memory" violates fundamental thermodynamics and molecular chemistry; liquid water hydrogen bonds randomize every 50 femtoseconds.',
    practicalAdvice: 'Do not rely on homeopathic remedies for serious or infectious diseases. If you want herbal medicine, consult evidence-based pharmacognosy with measurable active ingredients.',
    sources: ['The Lancet (Are the Clinical Effects of Homoeopathy Placebo Effects?)', 'National Health and Medical Research Council (NHMRC Comprehensive Review)', 'UK Science and Technology Committee'],
    believedPercentage: 68,
    quiz: {
      questionText: 'In a standard 30C homeopathic dilution, how many molecules of the original active ingredient are left in the bottle?',
      options: [
        { id: 'a', text: 'Statistically zero molecules; it is pure water or sugar.', isCorrect: true, explanation: 'Mathematical fact! 30C dilution (1 in 10^60) is diluted past the number of atoms in the solar system.' },
        { id: 'b', text: 'Exactly 50% active herbal medicine.', isCorrect: false, explanation: 'That is herbal phytotherapy, not homeopathy.' },
        { id: 'c', text: 'Tens of millions of molecules.', isCorrect: false, explanation: 'Not in 30C dilutions.' }
      ],
      bobblyHint: 'Think about Avogadro’s number (6.02 x 10^23) versus a 1 in 10^60 dilution!'
    },
    tags: ['homeopathy', 'pharmacology', 'placebo', 'dilution']
  },
  {
    id: 'celery-juice-autoimmune-miracle',
    claim: 'Drinking 16 ounces of pure celery juice on an empty stomach every morning cures all autoimmune conditions.',
    verdict: 'BUSTED',
    category: 'Wellness Fads & Trends',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Celery juice is mostly water, sodium, and potassium; it has zero unique clinical properties that cure autoimmune diseases.',
    origin: 'The "Medical Medium" Anthony William, who claims his medical knowledge is channeled to him by a supernatural spirit.',
    scientificTruth: 'While celery is a healthy, low-calorie vegetable containing water, dietary nitrates, and luteolin, juicing strips out the beneficial prebiotic insoluble fiber that feeds your gut microbiome. There are zero peer-reviewed clinical trials demonstrating that celery juice cures rheumatoid arthritis, Hashimoto’s, or lupus.',
    mechanism: 'Nutrient absorption from celery juice is identical to eating whole celery and drinking a glass of water, minus the gut-motility benefits of fiber.',
    practicalAdvice: 'If you enjoy celery juice as a refreshing morning beverage, enjoy it! Just don’t replace your medically prescribed therapies, and consider eating whole crunchy celery to keep the fiber.',
    sources: ['American Autoimmune Related Diseases Association (AARDA)', 'Academy of Nutrition and Dietetics', 'Mayo Clinic'],
    believedPercentage: 50,
    quiz: {
      questionText: 'What key nutritional component is stripped away when whole celery is turned into celery juice?',
      options: [
        { id: 'a', text: 'Insoluble prebiotic fiber, which feeds beneficial gut bacteria.', isCorrect: true, explanation: 'Yes! Juicing extracts the water and sugars while throwing away the healthy plant fiber.' },
        { id: 'b', text: 'All the water molecules.', isCorrect: false, explanation: 'Juice is over 95% water.' },
        { id: 'c', text: 'All the green color.', isCorrect: false, explanation: 'Celery juice is bright green.' }
      ],
      bobblyHint: 'What beneficial dietary component remains in the juicer pulp bin?'
    },
    tags: ['celery-juice', 'autoimmune', 'fiber', 'wellness-trends']
  }
];
