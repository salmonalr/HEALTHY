import { Myth } from '../../types/myth';

export const anatomyFirstAidMyths: Myth[] = [
  {
    id: 'nosebleed-tilt-head-back',
    claim: 'When you get a bloody nose, you must tilt your head far back and look at the ceiling.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Tilting your head back directs blood straight down into your throat and airway, causing choking and violent gastric vomiting.',
    origin: 'Generations of intuitive folk advice assuming gravity will keep the blood inside the skull.',
    scientificTruth: 'Tilting backward causes blood to drain down the posterior pharynx into the stomach (causing nausea and hematemesis) or worse, the larynx and trachea (aspiration risk). Proper first aid is to lean slightly FORWARD and pinch the soft part of the nose continuously for 10-15 minutes.',
    mechanism: 'Kiesselbach’s plexus (Little’s area) on the anterior nasal septum is where 90% of epistaxis originates. Direct manual compression tamponades these ruptured mucosal capillaries.',
    practicalAdvice: 'Lean slightly forward over a sink or tissue. Firmly pinch the soft fleshy part of your nose just below the nasal bridge for 10 full minutes without peeking.',
    sources: ['American Red Cross First Aid Guidelines', 'Mayo Clinic Epistaxis Care', 'American Academy of Otolaryngology'],
    believedPercentage: 82,
    quiz: {
      questionText: 'What is the medically correct head position during an active nosebleed?',
      options: [
        { id: 'a', text: 'Lean forward slightly and pinch the soft nostrils.', isCorrect: true, explanation: 'Correct! Leaning forward prevents swallowing or choking on blood while pressure stops the bleed.' },
        { id: 'b', text: 'Tilt head backward completely and swallow the blood.', isCorrect: false, explanation: 'Dangerous! Blood irritates the stomach lining and can trigger vomiting.' },
        { id: 'c', text: 'Hang upside down from a tree branch.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Where does the blood go if you tilt your head all the way back?'
    },
    tags: ['first-aid', 'nosebleed', 'safety', 'epistaxis']
  },
  {
    id: 'butter-or-ice-on-burns',
    claim: 'If you burn your hand on a hot pan, immediately slather it in dairy butter or press ice cubes directly on it.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Butter traps thermal heat and introduces bacterial infection; extreme ice causes vasoconstriction and thermal frostbite.',
    origin: 'An 1844 domestic manual by Prussian surgeon Friedrich von Esmarch mentioning butter for burns, which entered home folklore.',
    scientificTruth: 'Butter is an insulating lipid fat that traps boiling heat inside dermal layers, worsening burn depth, while introducing bacteria into compromised skin. Extreme ice freezes fragile damaged tissue, causing ischemia and secondary cold injury. The gold standard is cool, running tap water (15-25°C) for 10-20 minutes.',
    mechanism: 'Cool running water dissipates residual thermal energy from subcutaneous layers without triggering microvascular spasm.',
    practicalAdvice: 'Hold minor burns under cool running tap water for at least 10-20 minutes. Cover loosely with a sterile non-stick bandage or clean cling wrap. Seek medical attention for blistering burns.',
    sources: ['American Burn Association (Burn First Aid Guidelines)', 'British Red Cross', 'World Health Organization (WHO Burns Management)'],
    believedPercentage: 69,
    quiz: {
      questionText: 'What is the scientifically recommended immediate treatment for a thermal burn?',
      options: [
        { id: 'a', text: 'Cool, running tap water for 10 to 20 minutes.', isCorrect: true, explanation: 'Spot on! Running cool water gently dissipates heat without damaging skin cells.' },
        { id: 'b', text: 'Slathering salted butter and garlic over the blister.', isCorrect: false, explanation: 'Never put butter, mayonnaise, or oil on burns; it traps heat and breeds bacteria.' },
        { id: 'c', text: 'Pressing freezing dry ice directly into the wound.', isCorrect: false, explanation: 'Extreme cold causes secondary tissue death (frostbite).' }
      ],
      bobblyHint: 'What temperature of running water cools heat safely without freezing cells?'
    },
    tags: ['burns', 'first-aid', 'kitchen-safety', 'skin']
  },
  {
    id: 'pee-on-jellyfish-sting',
    claim: 'The best emergency cure for a painful jellyfish sting is to have a beach friend urinate on your leg.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Urine’s low osmotic salinity triggers thousands of unfired nematocyst venom capsules to burst and discharge more venom into your skin.',
    origin: 'An episode of the 1990s TV sitcom Friends (The One with the Jellyfish) and beachside folklore.',
    scientificTruth: 'Jellyfish tentacles deposit millions of microscopic harpoon-like venom capsules called nematocysts onto human skin. Many remain unfired. Because human urine has fluctuating chemical salinity, washing the sting with urine or fresh water causes osmotic shock, causing every remaining capsule to violently discharge its venom. The proven treatment for most stings is rinsing with vinegar (acetic acid) or saltwater, then soaking in hot water.',
    mechanism: 'Dilute hypotonic solutions trigger hydrostatic pressure swelling inside nematocysts, tripping the cnidocil trigger mechanism.',
    practicalAdvice: 'Rinse tentacles away with sea water (never fresh tap water or urine). Apply domestic vinegar for tropical box jellyfish to neutralize nematocysts, and immerse the area in hot water (45°C) for pain relief.',
    sources: ['Toxins Journal (Systematic Review of Jellyfish Envenomation First Aid)', 'American Heart Association First Aid Guidelines', 'Australian Resuscitation Council'],
    believedPercentage: 74,
    quiz: {
      questionText: 'Why can urinating on a jellyfish sting actually intensify the pain and venom injection?',
      options: [
        { id: 'a', text: 'Its osmotic difference causes unfired microscopic venom capsules (nematocysts) to rupture and inject more venom.', isCorrect: true, explanation: 'Correct! The chemical shift triggers all remaining venom harpoons to fire into your flesh.' },
        { id: 'b', text: 'Urine attracts sharks from 50 miles away.', isCorrect: false, explanation: 'Not the mechanism.' },
        { id: 'c', text: 'Jellyfish tentacles are allergic to ammonia.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Think about what happens to delicate microscopic venom harpoons when hit with fresh liquid!'
    },
    tags: ['jellyfish', 'first-aid', 'ocean', 'venom']
  },
  {
    id: 'suck-venom-snake-bite',
    claim: 'If bitten by a venomous rattlesnake or viper, slice an "X" into the bite and suck out the venom with your mouth.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Cutting and sucking accelerates local tissue necrosis, introduces oral pathogens, and extracts less than 0.1% of venom.',
    origin: 'Old Western Hollywood cowboy movies and commercial "snakebite suction kits" sold in the 1970s.',
    scientificTruth: 'Snake venom is injected deep into subcutaneous tissue, muscle, and the lymphatic system under high hydrostatic pressure; it spreads within seconds. Slicing with a knife cuts nerves and blood vessels, and oral suction introduces virulent mouth bacteria (Pseudomonas, anaerobic flora) into deep tissue. Suction kits extract less than 0.04% of venom in clinical trials.',
    mechanism: 'Snake toxins (metalloproteinases, neurotoxins) bind irreversibly to basement membranes and cell receptors within moments of injection.',
    practicalAdvice: 'Keep the victim calm, remove tight jewelry, immobilize the limb at heart level, and immediately call emergency services (911) for antivenom. Never cut, suck, ice, or tourniquet.',
    sources: ['Annals of Emergency Medicine', 'CDC Venomous Snakes Safety', 'American College of Medical Toxicology'],
    believedPercentage: 64,
    quiz: {
      questionText: 'What is the proven most effective treatment for a venomous snakebite?',
      options: [
        { id: 'a', text: 'Immediate transport to an emergency department for antivenom therapy.', isCorrect: true, explanation: 'Yes! Antivenom in an emergency hospital setting is the only proven antidote.' },
        { id: 'b', text: 'Cutting the bite with a rusty pocketknife and sucking with your mouth.', isCorrect: false, explanation: 'Extremely dangerous and damages tissue.' },
        { id: 'c', text: 'Tying a wire tourniquet until the limb turns black.', isCorrect: false, explanation: 'Causes amputation and severe necrosis.' }
      ],
      bobblyHint: 'What specific medical serum created from antibodies can neutralize snake venom?'
    },
    tags: ['snake-bite', 'first-aid', 'emergency', 'venom']
  },
  {
    id: 'blood-in-veins-is-blue',
    claim: 'Deoxygenated human blood circulating inside veins is bright royal blue until it touches oxygen in the room air.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Human blood is always red; optical physics and how different light wavelengths penetrate human skin create the illusion of blue veins.',
    origin: 'Medical textbook anatomical diagrams coloring arteries red and veins blue for visual contrast.',
    scientificTruth: 'Oxygen-rich arterial blood is bright scarlet red; deoxygenated venous blood returning to the heart is dark burgundy red. It is never blue. Veins appear blue through the skin because red light has a longer wavelength and penetrates deep into subcutaneous tissue where it is absorbed by hemoglobin, while shorter blue light reflects back to your eyes from surface tissue.',
    mechanism: 'Differential skin scattering (Rayleigh scattering) and remitted optical reflectance coefficients produce a blue chromatic illusion against adipose tissue.',
    practicalAdvice: 'When a nurse draws blood with a sealed vacuum tube (zero outside air exposure), you will observe it is dark, rich burgundy red.',
    sources: ['Applied Optics Journal (Kienle et al., Why Do Veins Appear Blue?)', 'American Red Cross', 'Scientific American'],
    believedPercentage: 70,
    quiz: {
      questionText: 'Why do veins appear bluish or greenish through your forearm skin if the blood inside is dark red?',
      options: [
        { id: 'a', text: 'Optical light scattering: red light penetrates deep and is absorbed, while blue light reflects back.', isCorrect: true, explanation: 'Spot on! It is an optical skin reflection effect, not blue fluid.' },
        { id: 'b', text: 'Venous blood contains copper instead of iron.', isCorrect: false, explanation: 'Horseshoe crabs use copper (hemocyanin); humans use iron (hemoglobin).' },
        { id: 'c', text: 'Vein walls are painted with blue dye.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Think about how light wavelengths bounce off skin versus how blood is drawn into a sealed tube!'
    },
    tags: ['blood', 'veins', 'optics', 'physics']
  },
  {
    id: 'hair-nails-grow-after-death',
    claim: 'Fingernails and hair continue actively growing on a corpse for weeks after clinical death.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Hair and nails do not grow; post-mortem dehydration causes skin to shrink and retract, creating the illusion of elongation.',
    origin: 'Gothic vampire folklore and funeral directors observing corpses appearing to have longer stubble days after embalming.',
    scientificTruth: 'Cellular growth requires continuous glucose, oxygen, and ATP generated by a beating heart. The moment cardiac arrest halts circulation, myocyte and keratinocyte mitosis stops immediately. As the corpse dehydrates, skin around hair follicles and nail beds dries up and shrinks backward, exposing hair shafts and nail edges that were previously hidden under living skin.',
    mechanism: 'Post-mortem dessication shrinks the stratum corneum and soft subcutaneous tissue by several millimeters.',
    practicalAdvice: 'Rest assured: human hair and nail follicles die when circulation stops. There are no vampire-like growth spurts underground.',
    sources: ['British Medical Journal (BMJ Medical Myths)', 'American Journal of Forensic Medicine and Pathology', 'Mayo Clinic'],
    believedPercentage: 58,
    quiz: {
      questionText: 'What physical process makes hair and fingernails appear longer on a deceased body?',
      options: [
        { id: 'a', text: 'Surrounding skin and soft tissue dehydrates and shrinks backward.', isCorrect: true, explanation: 'Correct! As skin retracts due to water loss, previously subcutaneous hair and nail bases become visible.' },
        { id: 'b', text: 'Keratin cells double their speed without blood flow.', isCorrect: false, explanation: 'Cells cannot divide without oxygen and glucose.' },
        { id: 'c', text: 'Gravity pulls the hair outward.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What happens to a grape when it dries into a raisin? What happens to skin when it dries?'
    },
    tags: ['anatomy', 'forensics', 'hair', 'nails']
  },
  {
    id: 'shaving-makes-hair-grow-thicker',
    claim: 'Shaving your facial or body hair makes it grow back significantly thicker, darker, and faster.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Razor blades cut hair at the skin surface without affecting the subcutaneous hair follicle that dictates color, thickness, and speed.',
    origin: 'Pioneering 1928 dermatological studies debunked this, but the illusion persists because freshly shaved hair has a blunt, un-tapered tip.',
    scientificTruth: 'Unshaven hair tapers naturally to a fine, flexible tip that feels soft and looks lighter due to sun exposure. A razor blade slices across the hair shaft at a 90-degree angle, leaving a sharp, blunt, cross-sectional edge. As it pokes through the skin, the stubble feels stiff and coarse, giving the tactile and optical illusion of greater thickness.',
    mechanism: 'Hair shaft thickness and melanin density are genetically programmed inside dermal papilla follicles millimeters beneath the epidermal surface.',
    practicalAdvice: 'Shave whenever you prefer. It will never alter your genetics or cause new hair follicles to spontaneously sprout.',
    sources: ['Journal of Investigative Dermatology', 'Scientific American', 'American Academy of Dermatology (AAD)'],
    believedPercentage: 77,
    quiz: {
      questionText: 'Why does newly growing facial stubble feel coarser and look darker after shaving?',
      options: [
        { id: 'a', text: 'The razor cuts hair at a blunt edge, making short stubble feel stiff and un-tapered.', isCorrect: true, explanation: 'Correct! The blunt cross-section feels bristly compared to naturally tapered hair tips.' },
        { id: 'b', text: 'Shaving triggers 5 new follicles to sprout from each pore.', isCorrect: false, explanation: 'Follicle count is genetically fixed.' },
        { id: 'c', text: 'Razor steel injects dark pigment into the root.', isCorrect: false, explanation: 'Absurd.' }
      ],
      bobblyHint: 'What happens when you cut a blade of grass straight across instead of letting it taper naturally?'
    },
    tags: ['hair', 'shaving', 'dermatology', 'skin']
  },
  {
    id: 'pores-open-and-close',
    claim: 'Splashing hot water opens your facial pores, and splashing freezing water snaps them shut.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'Skin pores have zero muscle tissue; they are fixed microscopic openings that cannot physically dilate or constrict like doors.',
    origin: 'Cosmetics and skincare commercials advertising pore-tightening astringents and facial steamers.',
    scientificTruth: 'Pores are tiny follicular openings that channel sebum and house hair follicles. They contain no sphincter muscles and cannot open or close. Warm water and steam soften hardened sebum and keratin debris, making manual cleansing easier. Cold water causes temporary dermal vasoconstriction, reducing puffiness, but pore diameter remains unchanged.',
    mechanism: 'Pores lack smooth muscle or autonomic sphincter innervation; their visible diameter is determined by skin elasticity, genetics, and collagen support.',
    practicalAdvice: 'Wash your face with lukewarm water. Maintain pore cleanliness with gentle salicylic acid (BHA) and retinoids to boost collagen around follicular walls.',
    sources: ['American Academy of Dermatology (AAD)', 'Cleveland Clinic Dermatology', 'Dermatologic Surgery Journal'],
    believedPercentage: 79,
    quiz: {
      questionText: 'Can facial pores open and close like miniature elevator doors?',
      options: [
        { id: 'a', text: 'No, pores have no muscular tissue and cannot open or close.', isCorrect: true, explanation: 'Bingo! Pores have no muscles. Warm water merely softens oils.' },
        { id: 'b', text: 'Yes, freezing ice shuts them air-tight in 2 seconds.', isCorrect: false, explanation: 'Cold water temporarily tightens surface skin blood vessels, not pore muscles.' },
        { id: 'c', text: 'Only when you are asleep.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Do skin pores have muscles like your eyelids or lips?'
    },
    tags: ['skincare', 'pores', 'dermatology', 'face']
  },
  {
    id: 'put-spoon-in-mouth-seizure',
    claim: 'If someone is having an epileptic seizure, you must force a metal spoon or wooden stick into their mouth so they don’t swallow their tongue.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'It is anatomically impossible to swallow your tongue; forcing objects into a seizing mouth breaks teeth, lacerates gums, and suffocates the patient.',
    origin: 'Outdated military and school guidelines from the early 20th century.',
    scientificTruth: 'The human tongue is anchored firmly to the floor of the mouth by the lingual frenulum; it physically cannot slide down the esophagus. Forcing objects into a mouth during clonic-tonic muscle spasms fractures teeth, causes severe aspiration of broken fragments, and obstructs the airway. The correct protocol is to protect their head, turn them on their side (recovery position), and time the seizure.',
    mechanism: 'Lingual frenulum connective tissue binds the ventral tongue to the mandible and hyoid apparatus.',
    practicalAdvice: 'Never put ANYTHING in the mouth of a seizing person. Clear the area of sharp furniture, cushion their head with a soft jacket, turn them gently on their side, and call 911 if the seizure exceeds 5 minutes.',
    sources: ['Epilepsy Foundation (Seizure First Aid Guidelines)', 'Centers for Disease Control and Prevention (CDC)', 'American Red Cross'],
    believedPercentage: 66,
    quiz: {
      questionText: 'What is the anatomical reason a human being cannot literally "swallow their tongue" during a seizure?',
      options: [
        { id: 'a', text: 'The lingual frenulum anchors the bottom of the tongue firmly to the floor of the mouth.', isCorrect: true, explanation: 'Correct! Strong connective tissue keeps the tongue firmly attached inside the oral cavity.' },
        { id: 'b', text: 'The tongue is made of solid bone.', isCorrect: false, explanation: 'The tongue is a muscular hydrostat.' },
        { id: 'c', text: 'Tongues dissolve if they touch the throat.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'Look underneath your tongue in the mirror—what tissue tether is holding it down?'
    },
    tags: ['seizure', 'epilepsy', 'first-aid', 'emergency']
  },
  {
    id: 'heart-stops-when-sneezing',
    claim: 'Your heart completely stops beating for a full second every time you sneeze.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Harmless Folklore',
    verdictSummary: 'Sneezing temporarily alters chest intrathoracic pressure, slightly changing rhythm timing, but the heart never stops.',
    origin: 'The traditional polite phrase "Bless you," originating in medieval plagues when sneezing was feared to be the moment death touched the body.',
    scientificTruth: 'Before a violent sneeze, you take a deep breath and close your vocal cords, dramatically spiking intrathoracic pressure (similar to the Valsalva maneuver). This temporarily decreases venous return to the heart, causing your vagus nerve to reflexively slow the next heartbeat. As soon as you exhale the sneeze, blood rushes in, making the following beat feel pronounced.',
    mechanism: 'Baroreceptor reflex and vagal parasympathetic signaling temporarily alter cardiac chronotropy without ceasing SA node pacemaking.',
    practicalAdvice: 'Never forcefully stifle or pinch a sneeze completely shut—that extreme internal pressure can rarely rupture eardrums or pharyngeal tissues. Let it out into your elbow!',
    sources: ['Library of Congress Science Inquiry', 'Johns Hopkins Medicine', 'University of Arkansas for Medical Sciences (UAMS)'],
    believedPercentage: 59,
    quiz: {
      questionText: 'What actually happens to your heart rhythm during a powerful sneeze?',
      options: [
        { id: 'a', text: 'Intrathoracic pressure momentarily alters blood return, causing a minor vagal rhythm delay, but the heart never stops.', isCorrect: true, explanation: 'Spot on! The sinoatrial pacemaker never turns off; it just modulates rhythm slightly.' },
        { id: 'b', text: 'The heart goes completely flatline for 5 seconds.', isCorrect: false, explanation: 'Flatlining for 5 seconds every sneeze would cause fainting spells.' },
        { id: 'c', text: 'The heart pumps backward into the spleen.', isCorrect: false, explanation: 'Nonsense.' }
      ],
      bobblyHint: 'Does your sinoatrial node take a vacation during a sneeze, or does chest pressure just fluctuate?'
    },
    tags: ['heart', 'sneeze', 'cardiology', 'reflex']
  },
  {
    id: 'lose-80-percent-heat-head',
    claim: 'Humans lose 75% to 80% of all their body heat through the top of their head.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Common Misconception',
    verdictSummary: 'You only lose roughly 7-10% of heat through your head, exactly proportional to its surface area on your body.',
    origin: 'A flawed 1950s US Military cold survival experiment where volunteer soldiers wore insulated survival snowsuits with bare heads in sub-zero temperatures.',
    scientificTruth: 'Heat loss is directly proportional to exposed surface area. In the 1950s military trial, soldiers had 90% of their bodies covered in thick thermal gear, leaving only their heads exposed to arctic air—so of course nearly all heat lost came through the only uncovered body part! If you stood outside in freezing weather wearing only a ski hat and a bathing suit, you would lose 90% of heat through your body.',
    mechanism: 'Thermal radiation and convection occur across all vascularized epidermal surfaces in proportion to exposed square meters of skin.',
    practicalAdvice: 'Wear a warm beanie in winter, but make sure your torso, legs, and extremities are bundled up too.',
    sources: ['British Medical Journal (BMJ Medical Myths: Seasonal Edition)', 'Department of Military and Emergency Medicine', 'Harvard Health'],
    believedPercentage: 76,
    quiz: {
      questionText: 'Why did the famous 1950s military study conclude that nearly all body heat escaped through the head?',
      options: [
        { id: 'a', text: 'The soldiers were dressed in warm snowsuits from the neck down, so only their heads were exposed!', isCorrect: true, explanation: 'Correct! When the head is the only bare skin exposed, that is where heat escapes.' },
        { id: 'b', text: 'The human skull is made of copper wire.', isCorrect: false, explanation: 'False.' },
        { id: 'c', text: 'Brains operate at 300 degrees Fahrenheit.', isCorrect: false, explanation: 'Brain temperature is around 98.6°F.' }
      ],
      bobblyHint: 'What happens if you bundle your whole body in a parka and leave only your head uncovered?'
    },
    tags: ['winter', 'heat-loss', 'thermoregulation', 'military']
  },
  {
    id: 'hydrogen-peroxide-cleans-cuts',
    claim: 'Pouring bubbling hydrogen peroxide or rubbing alcohol on an open cut is the best way to speed up wound healing.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'Peroxide and alcohol kill healthy fibroblasts and fragile new skin cells, delaying healing and increasing scar tissue.',
    origin: 'The dramatic visual satisfaction of white foaming bubbles (catalase enzyme reacting) making people feel like "it’s killing germs!"',
    scientificTruth: 'The bubbling foam is simply the enzyme catalase (present in your own red blood cells and tissue) breaking down H2O2 into water and oxygen gas. Hydrogen peroxide is cytotoxic: it destroys delicate fibroblasts and keratinocytes that your body is generating to close the wound, triggering microchemical burns and delaying healing. The medical standard is mild soap and running tap water.',
    mechanism: 'Reactive oxygen species (ROS) from concentrated peroxide non-selectively induce apoptosis and lipid peroxidation in host regenerative tissue.',
    practicalAdvice: 'Wash cuts under cool or lukewarm running tap water with mild soap for 5 minutes. Apply a thin layer of petroleum jelly (Vaseline) or antibacterial ointment and cover with a sterile bandage.',
    sources: ['American Academy of Dermatology (AAD Wound Care)', 'Mayo Clinic First Aid for Minor Wounds', 'Cleveland Clinic'],
    believedPercentage: 81,
    quiz: {
      questionText: 'What actually produces the vigorous white bubbling when you pour hydrogen peroxide on a fresh scrape?',
      options: [
        { id: 'a', text: 'Catalase enzymes inside your own blood and damaged cells breaking down H2O2 into water and oxygen.', isCorrect: true, explanation: 'Spot on! The foam is your own cellular enzymes reacting, while healthy cells get damaged.' },
        { id: 'b', text: 'Ten billion bacteria screaming and boiling away.', isCorrect: false, explanation: 'The foam is caused by human catalase, not exploding bacteria.' },
        { id: 'c', text: 'Acid dissolving your bone marrow.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What enzyme inside human red blood cells breaks down hydrogen peroxide?'
    },
    tags: ['first-aid', 'cuts', 'wound-care', 'dermatology']
  },
  {
    id: 'swallowed-batteries-harmless',
    claim: 'If a toddler or child swallows a shiny coin button battery, it will harmlessly pass through stool with no urgency.',
    verdict: 'BUSTED',
    category: 'First Aid & Anatomy',
    dangerLevel: 'Potentially Risky',
    verdictSummary: 'A button battery lodged in the esophagus creates an electrical circuit that generates caustic sodium hydroxide, burning through arteries in under 2 hours.',
    origin: 'Parents confusing inert swallowed coins (like a penny or nickel) with lithium button batteries.',
    scientificTruth: 'When a button battery lodges against moist esophageal mucosa, electrical current hydrolyzes tissue fluids, generating concentrated alkaline caustic sodium hydroxide (lye) at the negative pole. This causes severe liquefaction necrosis that can perforate the esophagus, aorta, or trachea in as little as 2 hours, resulting in fatal hemorrhage.',
    mechanism: 'Electrochemical hydrolysis generates hydroxide ions (OH-) independent of whether the battery is fresh or "dead."',
    practicalAdvice: 'Swallowed button batteries are life-threatening surgical emergencies! Go straight to the nearest Emergency Room immediately. Give honey (if over age 1) on the way to the hospital to coat the battery and delay caustic burn.',
    sources: ['American Academy of Pediatrics (AAP Button Battery Guidelines)', 'National Capital Poison Center (Poison.org)', 'The Laryngoscope'],
    believedPercentage: 42,
    quiz: {
      questionText: 'Why is a swallowed button battery a critical emergency requiring immediate hospital intervention within 2 hours?',
      options: [
        { id: 'a', text: 'Electrical current generates caustic lye (sodium hydroxide) that can burn through the esophagus and aorta.', isCorrect: true, explanation: 'Crucial fact! Electrical current creates concentrated chemical burns within hours.' },
        { id: 'b', text: 'It instantly emits radioactive gamma rays.', isCorrect: false, explanation: 'Button batteries do not emit gamma radiation.' },
        { id: 'c', text: 'It will turn the child into an electric magnet.', isCorrect: false, explanation: 'False.' }
      ],
      bobblyHint: 'What happens when an electrical current reacts with wet tissue to create caustic alkaline chemicals?'
    },
    tags: ['pediatrics', 'poison-control', 'emergency', 'first-aid']
  }
];
