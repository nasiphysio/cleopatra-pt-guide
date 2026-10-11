const devices = [
  {
    id:"btl-4825", name:"BTL-4825SL Premium", category:"electro", label:"Electrotherapy",
    image:"assets/btl-4825.jpg", credit:"Still from BTL product video",
    units:[
      ["BTL-4825SL Premium","Physiotherapy","B1NE4455",""],
      ["BTL-4825SL Premium","Physiotherapy","B1NE1736","Installed 2025, 5-year warranty (supplier: BTL)."],
      ["BTL-4825SL Premium (listed as high-power laser)","Physiotherapy","B1NE2316","The inventory lists this unit as a high-power laser with the same model number. Verify the model on the rating plate."]
    ],
    videos:[
      ["BTL-4825 Premium ultrasound and stim combo","https://www.youtube.com/watch?v=9uoYBcnOF2c","Device demo"],
      ["BTL-4000 Smart and Premium — electrotherapy, ultrasound, laser, magnet","https://www.youtube.com/watch?v=pWZp30Wyu_U","Device demo · Russian"],
      ["Therapeutic ultrasound — application technique","https://www.youtube.com/watch?v=XP5pQuqTSZE","Educational"]
    ],
    desc:"Combination unit from the BTL-4000 series: two electrotherapy channels, therapeutic ultrasound and a low-level laser output, with optional BTL Vac vacuum electrodes.",
    use:"Used for electrical stimulation, therapeutic ultrasound, or both at once through the ultrasound head (combined therapy), and for low-level laser. Each output has its own screening, technique and settings; the preset library is a starting point, not a prescription.",
    steps:[
      "Inspect leads, electrodes, vacuum cups and the ultrasound head; switch the unit on.",
      "Select the modality on the touch screen: electrotherapy, ultrasound, combination or laser.",
      "Choose the approved protocol or enter the prescribed parameters manually.",
      "Electrotherapy: prepare the skin, fix the electrodes (pads, sponges or vacuum cups) and raise intensity gradually to the patient's reported sensation.",
      "Ultrasound: apply enough coupling gel and keep the head moving slowly over the treatment area for the whole session.",
      "At the end, return output to zero, remove electrodes, check the skin, clean the accessories and document."
    ],
    points:[
      "1 MHz ultrasound reaches deeper tissue; 3 MHz is for superficial tissue.",
      "Never run the ultrasound head without gel or hold it still on one spot.",
      "Do not stimulate over or near implanted electronic devices, pregnancy-related regions, malignancy, active DVT, or damaged or insensate skin.",
      "Laser output: eye protection for patient and therapist."
    ],
    mistakes:[
      "Using a preset without checking it matches the diagnosis and the approved protocol.",
      "Removing electrodes while output is still active.",
      "Raising intensity quickly instead of following the patient's feedback."
    ],
    evidence:"Safety guidance for electrical stimulation and ultrasound comes from the SAFE PAMP consensus and the Canadian evidence-based contraindications review. Device menus and presets are manufacturer content and are not evidence of effectiveness for a given condition.",
    sources:[
      ["BTL-4000 Electrotherapy user's guide (EWH BMET library)","https://bmet.ewh.org/items/cbf4c071-0cfe-4458-926d-c5dca8584345/full"],
      ["BTL Vac user's manual (EWH BMET library)","https://bmet.ewh.org/items/38f32c20-0fa0-4900-baf5-961d9e7de963/full"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"],
      ["Evidence-based EPA contraindications review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"]
    ]
  },
  {
    id:"intelect", name:"Chattanooga Intelect Advanced Combo", category:"electro", label:"Electrotherapy",
    image:"assets/intelect-advanced.jpg", credit:"Still from the linked demonstration video (Phisio Basic)",
    units:[
      ["Chattanooga Intelect Advanced Combo 2762CC","Physiotherapy — Pediatric","BBPE3085",""],
      ["Chattanooga Intelect Advanced Combo 2762CC","Sport Medicine","BGSM4643",""]
    ],
    videos:[
      ["Intelect Advanced Combo — first steps and usage recommendations","https://www.youtube.com/watch?v=3mIYEyg5zV4","Device demo · Spanish"],
      ["Intelect Advanced Combo Color","https://www.youtube.com/watch?v=hWQ9Srh9VJo","Device demo · Spanish"],
      ["Interferential set-up on a Chattanooga Intelect Legend (related model)","https://www.youtube.com/watch?v=DEs_MkkShwA","Educational"],
      ["More: NMES electrode placement","https://www.youtube.com/results?search_query=NMES+electrode+placement+physical+therapy+tutorial","YouTube search"]
    ],
    desc:"Two-channel colour combination unit: electrical stimulation waveforms (including VMS, interferential, Russian, high-volt and TENS) with therapeutic ultrasound and sEMG.",
    use:"Used for pain modulation, muscle re-education and strengthening, therapeutic ultrasound, and combined electro-ultrasound treatment. Electrical stimulation should follow patient screening, correct electrode placement, a validated protocol and continuous monitoring.",
    steps:[
      "Inspect the unit, leads, electrodes and ultrasound head.",
      "Screen for contraindications and precautions and inspect the skin.",
      "From the home screen select electrotherapy, ultrasound or combination, then the waveform or the approved clinical protocol.",
      "Explain the sensation and place the electrodes as shown for the selected protocol.",
      "Set the time, then increase intensity gradually while monitoring patient response and skin.",
      "Turn output to zero before removing electrodes; clean and document."
    ],
    points:[
      "Electrode placement changes the clinical effect.",
      "Do not stimulate over or near implanted electronic devices when it could cause malfunction.",
      "With children, start at the lowest intensity, explain the sensation and do not leave the child unattended.",
      "Avoid ultrasound over growth plates in children."
    ],
    mistakes:[
      "Using a copied intensity or frequency without verifying waveform and pulse width.",
      "Removing electrodes while output is still active.",
      "Ignoring pacemakers, implanted stimulators or damaged skin."
    ],
    evidence:"The 2024 SAFE PAMP consensus supports safety statements for electrical stimulation and stresses clinical assessment. Earlier evidence-based guidance gives specific precautions for implanted electronic devices, pregnancy-related areas, malignancy, DVT and other situations.",
    sources:[
      ["Chattanooga Intelect Advanced user manual (Spanish PDF)","https://cdn2.shopify.com/s/files/1/2285/0379/files/Manual_de_Usuario_-_Intelect_Advanced.pdf"],
      ["Chattanooga Intelect 2762CC manual on ManualsLib","https://www.manualslib.es/products/Chattanooga-Intelect-2762Cc-123281.html"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"],
      ["Leeds Teaching Hospitals — NMES safety information","https://www.leedsth.nhs.uk/patients/resources/neuromuscular-electrical-stimulation-nmes/"]
    ]
  },
  {
    id:"thor", name:"THOR LX2 Laser", category:"physical", label:"Physical Agents",
    image:"assets/thor-lx2.jpg", credit:"Photo: THOR Photomedicine",
    units:[
      ["THOR LX2","Physiotherapy","A1LD0614",""],
      ["THOR LX2","Sport Medicine","BGSM-615",""]
    ],
    videos:[
      ["THOR LX2 — red and near-infrared PBM therapy machine","https://www.youtube.com/watch?v=rItCEFE5VI0","Device demo"],
      ["Training with THOR Photomedicine","https://www.youtube.com/watch?v=cSpdz0S0rNM","Device demo"],
      ["How LLLT works","https://www.youtube.com/watch?v=VzMJUxalkFo","Educational"],
      ["Low-level laser therapy — what it is, how it is applied, research overview","https://www.youtube.com/watch?v=XbjIgccE9F4","Educational"]
    ],
    desc:"Low-level laser / photobiomodulation control unit that drives interchangeable probes: single laser, laser cluster or red and near-infrared LED cluster.",
    use:"Use only within an approved protocol and with appropriate eye protection and safety controls. Do not invent a universal dose: it depends on the probe, wavelength, power and indication.",
    steps:[
      "Connect the probe chosen for the indication, insert the key and switch on.",
      "Screen the patient and treatment area for relevant precautions and contraindications.",
      "Set the dose time from the treatment guidelines supplied with the unit.",
      "Protect eyes as required for laser probes.",
      "Hold the probe in contact with clean skin, still on each point, until the end-of-dose signal; then move to the next point.",
      "End the session, power down, clean the probe head and store it safely."
    ],
    points:[
      "Never aim therapeutic laser at the eyes.",
      "Known or suspected malignancy and certain pregnancy treatment locations require avoidance according to evidence-based safety guidance.",
      "The exact dose depends on wavelength, power, area and protocol.",
      "Sources mention LX2, LX2M and LX2.3 versions — confirm the exact model and probes."
    ],
    mistakes:[
      "Using the same dose for every probe.",
      "Ignoring eye protection or aiming near the eye.",
      "Copying online treatment tables without verifying the device and indication."
    ],
    evidence:"Evidence-based safety guidance identifies important treatment restrictions for low-level laser, including avoiding direct ocular exposure and certain treatment locations. Modern consensus statements also emphasize trained professionals, patient assessment and manufacturer guidance.",
    sources:[
      ["THOR video library","https://thorlaser.com/video"],
      ["THOR training courses","https://www.thorlaser.com/courses/"],
      ["Canadian Physiotherapy Association evidence-based EPA safety review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"]
    ]
  },
  {
    id:"luxwave", name:"Level Luxwave Scanning Laser", category:"physical", label:"Physical Agents",
    image:"assets/level-luxwave.jpg", credit:"Photo: Level Medical",
    units:[["Level Luxwave","Physiotherapy","A1NEl007","S/N lw8l007. Manufacturer pages list different wavelengths (808, 1064 or 970–980 nm) — check the label on the unit."]],
    videos:[
      ["Laser safety — using a medical laser device","https://www.youtube.com/watch?v=2h00F_3DHMQ","Safety"],
      ["More: Level Luxwave scanning laser","https://www.youtube.com/results?search_query=Level+Medical+Luxwave+laser","YouTube search"]
    ],
    desc:"High-power diode laser (up to 10 W per the manufacturer) with a scanning head that sweeps the beam over a set area without manual movement.",
    use:"Used for larger treatment areas where the beam is scanned automatically. High-power lasers carry eye and skin-burn risks that low-level devices do not, so room controls and eyewear are part of the procedure.",
    steps:[
      "Close the room, display the laser warning sign and give wavelength-matched eyewear to everyone inside.",
      "Position the patient comfortably and still; expose the area and remove jewellery, creams and reflective items.",
      "Set the scanning head at the distance given in the manual and define the scan area with the aiming light.",
      "Select the approved programme or the prescribed power, time and frequency.",
      "Start, stay with the patient and ask about heat sensation throughout.",
      "Stop immediately for excessive heat; power down, remove the key and document."
    ],
    points:[
      "Never direct the beam toward the eyes; eyewear must match the wavelength.",
      "Tattoos, dark or insensate skin absorb more energy and burn more easily.",
      "Avoid known or suspected malignancy, the pregnant abdomen, the eyes and the thyroid region.",
      "Dose depends on wavelength, power and scan area — use the device's own tables."
    ],
    mistakes:[
      "Treating with the door open or without eyewear for a bystander.",
      "Leaving the patient unattended because the scan is automatic.",
      "Applying a low-level laser dose table to a high-power device."
    ],
    evidence:"The same evidence-based safety guidance used for low-level laser applies, with stricter controls for high-power devices. Manufacturer claims for this model were not independently verified for this guide.",
    sources:[
      ["Level Medical — Luxwave product page","https://www.level-medical.it/luxwave/"],
      ["Canadian Physiotherapy Association evidence-based EPA safety review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"]
    ]
  },
  {
    id:"tecar", name:"TECAR Therapy (Level GW-100)", category:"physical", label:"Physical Agents",
    image:"assets/placeholder.svg",
    units:[["Level GW-100","Sport Medicine","BGSML055","S/N DCL055. No manufacturer manual was found online for this model — request it from the supplier."]],
    videos:[
      ["TECAR — transfer of energy capacitive and resistive (Harley Street Physiotherapy)","https://www.youtube.com/watch?v=if2Cufpa69A","Educational"],
      ["More: capacitive / resistive application technique","https://www.youtube.com/results?search_query=tecar+therapy+technique+capacitive+resistive+tutorial","YouTube search"]
    ],
    desc:"TECAR (transfer of energy capacitive and resistive) therapy: radiofrequency current that produces heat inside the tissue through a capacitive or a resistive electrode.",
    use:"TECAR uses radiofrequency electrical energy with capacitive/resistive coupling. Evidence for musculoskeletal pain has grown, but reviews note heterogeneity and limitations; device-specific claims should not be presented as established facts.",
    steps:[
      "Verify the exact device, applicator and manufacturer instructions.",
      "Screen the patient and treatment area according to the device manual and hospital protocol.",
      "Place the return plate under the patient close to the treatment area, in full skin contact, and apply the conductive cream.",
      "Start with the capacitive electrode on superficial tissue, then the resistive electrode for deeper structures, keeping the electrode moving.",
      "Raise power gradually to a comfortable warmth and monitor skin sensation continuously.",
      "Document device, mode, settings, area and response."
    ],
    points:[
      "Do not substitute a generic TECAR setting for a model-specific protocol.",
      "Not with pacemakers or implanted electronic devices, pregnancy, malignancy, thrombosis or active infection.",
      "Caution over metal implants and with reduced heat sensation.",
      "Evidence is not the same as a manufacturer's marketing claim."
    ],
    mistakes:[
      "Calling all TECAR devices equivalent.",
      "Holding the electrode still on one spot.",
      "Publishing fixed parameters before the exact model is verified."
    ],
    evidence:"A systematic review/meta-analysis found reductions in musculoskeletal pain but substantial heterogeneity. Another evidence review described the overall literature as sparse and low level. The site therefore avoids universal parameters and strong efficacy claims.",
    sources:[
      ["PubMed — TECAR systematic review/meta-analysis (2023)","https://pubmed.ncbi.nlm.nih.gov/36698689/"],
      ["ScienceDirect — scoping review of TECAR evidence","https://www.sciencedirect.com/science/article/abs/pii/S1779012320300838"]
    ]
  },
  {
    id:"accu-spina", name:"Accu-SPINA Spinal Decompression", category:"mechanical", label:"Mechanical Therapy",
    image:"assets/accu-spina.jpg", credit:"Photo: IDD Therapy UK clinic listing",
    units:[["Accu-SPINA — IDD Therapy","Physiotherapy — Pediatric","BBPE-866","S/N D70858-121-0725-866"]],
    videos:[
      ["Is IDD Therapy and the Accu-SPINA just traction? Stephen Small explains","https://www.youtube.com/watch?v=M9M8DcBha1k","Educational"],
      ["IDD Therapy — Health Journal TV episode","https://www.youtube.com/watch?v=U0KMhBQWkAE","Educational"],
      ["Accommodating an Accu-SPINA in your clinic","https://www.youtube.com/watch?v=WDupf3Dah2c","Device demo"],
      ["Accu-SPINA for IDD Therapy — official channel","https://www.youtube.com/@Accuspina","Channel"]
    ],
    desc:"Computer-controlled spinal decompression table (North American Medical). Applies a distraction force at a calculated angle to target a spinal level, in cycles of pull and partial relaxation.",
    use:"Used for lumbar or cervical decompression in selected disc-related presentations after a clinical assessment. It is not a routine treatment for every low-back-pain presentation. Use in children requires a physician's decision and weight-based force.",
    steps:[
      "Confirm patient identity, referral/plan, diagnosis, imaging and relevant red flags.",
      "Inspect the table, harnesses and emergency stop.",
      "Enter the patient data and target level so the system sets the angle of pull.",
      "Fit the chest and pelvic harnesses firmly with the patient supine and the knees supported.",
      "Enter only the prescribed force; give the patient the stop switch, start and monitor symptoms for the whole session (about 25 minutes).",
      "Release the harnesses slowly, let the patient rest before standing, and document settings and response."
    ],
    points:[
      "A thorough assessment comes before traction.",
      "The patient should have a clear way to stop/alert the therapist.",
      "Not for fracture, severe osteoporosis, tumour, spinal instability, pregnancy or recent spinal fixation.",
      "Force, angle and progression must come from the actual manual/protocol."
    ],
    mistakes:[
      "Loose harnesses, so the force moves the patient instead of the spine.",
      "Quoting manufacturer success rates to patients as established outcomes.",
      "Ignoring new neurological symptoms or worsening pain."
    ],
    evidence:"Success rates around 90% that circulate for IDD Therapy come from the manufacturer and clinics. A randomized trial comparing IDD Therapy with standard physical therapy is registered (NCT00165893); its published results were not confirmed for this guide. The 2021 APTA/JOSPT low-back-pain guideline reports preliminary evidence for traction in a specific subgroup with nerve-root compression signs, and recommends against routine traction for non-radicular or chronic low-back pain.",
    sources:[
      ["ClinicalTrials.gov — IDD Therapy vs non-surgical care (NCT00165893)","https://clinicaltrials.gov/study/NCT00165893"],
      ["JOSPT / APTA Clinical Practice Guideline (2021)","https://doi.org/10.2519/jospt.2021.0304"]
    ]
  },
  {
    id:"artromot", name:"ARTROMOT S3 Shoulder CPM", category:"rehab", label:"Rehabilitation",
    image:"assets/artromot-s3.jpg", credit:"Photo: ORMED / DJO product image",
    units:[["ORMED ARTROMOT S3 Comfort","Physiotherapy","B1NE1070","S/N 31070"]],
    videos:[
      ["Artromot S3 CPM — set-up for the shoulder","https://www.youtube.com/watch?v=5E2zJj8Yv18","Device demo"],
      ["ARTROMOT S3 — product overview","https://www.youtube.com/watch?v=kdbVd9Jl_X0","Device demo"],
      ["Artromot S3 — instructions for the shoulder joint","https://www.youtube.com/watch?v=iBpq4P7_EDk","Device demo · Russian"]
    ],
    desc:"Continuous passive motion chair for the shoulder: elevation, abduction/adduction and rotation, set from a handheld programming unit. The Comfort version adds a headrest and a warm-up programme.",
    use:"CPM passively moves the joint through a programmed range. It should complement, not automatically replace, active rehabilitation when active exercise is appropriate.",
    steps:[
      "Confirm the prescribed movements, postoperative restrictions and protocol.",
      "Set the chair for the affected side and seat the patient with the back against the backrest.",
      "Adjust arm height and the upper-arm and forearm supports so the device axis matches the shoulder axis; fix the straps without pressure.",
      "Set the approved ROM for each movement, then speed, pause and duration on the handheld unit.",
      "Give the patient the handheld unit (stop key), start slowly and watch the first full cycles.",
      "Stop, reposition or escalate if the patient develops concerning symptoms; document ROM, speed, duration and tolerance."
    ],
    points:[
      "Correct anatomical alignment is critical.",
      "Never exceed the surgeon/department-approved ROM.",
      "The device is not a substitute for individualized active rehabilitation.",
      "Not with unstable fractures, acute joint infection or thrombosis."
    ],
    mistakes:[
      "Increasing ROM simply because the patient tolerates the machine.",
      "Poor axis alignment causing unwanted joint loading.",
      "Treating CPM as a universal requirement after surgery."
    ],
    evidence:"Upper-limb evidence is condition-specific. A systematic review after rotator-cuff repair did not support routine CPM as superior to standard rehabilitation. Use should therefore follow the surgical/department protocol rather than a universal recipe.",
    sources:[
      ["ARTROMOT-S3 operating instructions (2012)","https://bioclinicalservices.com.au/chattanooga-group/clinical/artromot-s3-cpm-system-operating-instructions-rev-04-06-march-2012"],
      ["Clin Rehabil systematic review — CPM after rotator cuff repair (2011)","https://pubmed.ncbi.nlm.nih.gov/20943710/"]
    ]
  },
  {
    id:"cpmotion", name:"BTL CPMotion K Elite Knee CPM", category:"rehab", label:"Rehabilitation",
    image:"assets/btl-cpmotion.jpg", credit:"Photo: BTL",
    units:[["BTL CPMotion K Elite","Sport Medicine","BGSM3722","S/N 09300B003722"]],
    videos:[
      ["BTL CPMotion — product video","https://www.youtube.com/watch?v=nbnnstnGg18","Device demo"],
      ["BTL CPMotion — product video (2)","https://www.youtube.com/watch?v=RWIr8BU5CyQ","Device demo"],
      ["Knee CPM machines — what you need to know","https://www.youtube.com/watch?v=UST32Ff9A_E","Educational"],
      ["Using a CPM machine after ACL surgery","https://www.youtube.com/watch?v=Pdfjyfy0v_M","Educational"]
    ],
    desc:"Continuous passive motion for the knee and hip, with a touch-screen remote, preset and user programmes and an optional ankle module. Knee range per the manufacturer: -10° to 123°.",
    use:"CPM can provide standardized passive movement when it is part of an approved rehabilitation plan. Current evidence does not support treating CPM as universally superior to active/standard physiotherapy after knee arthroplasty.",
    steps:[
      "Verify the prescription/protocol and the permitted ROM.",
      "Inspect the machine, padding and straps.",
      "Set the thigh and calf lengths so the device axis matches the knee axis; secure the foot and straps.",
      "Set only the approved extension and flexion limits, speed and duration on the remote.",
      "Monitor pain, swelling, skin and alignment throughout the session; the remote stays with the patient.",
      "Stop safely, remove the limb and document the session."
    ],
    points:[
      "Do not exceed prescribed ROM.",
      "Alignment and patient comfort must be checked continuously.",
      "CPM should be integrated with the overall rehabilitation plan.",
      "Document actual settings, not just 'CPM done'."
    ],
    mistakes:[
      "Assuming more ROM or longer duration is always better.",
      "Skipping axis/alignment checks.",
      "Presenting CPM as proven to improve outcomes for every post-TKA patient."
    ],
    evidence:"Recent systematic reviews/meta-analyses report no clear ROM advantage of CPM over standard physiotherapy after knee arthroplasty, while a 2026 meta-analysis found advantages for continuous active motion in some outcomes. This supports individualized, protocol-based use rather than routine automatic use.",
    sources:[
      ["BTL CPMotion product page","https://www.btlnet.com/cpmotion"],
      ["Journal of Orthopaedic Surgery & Research systematic review/meta-analysis (2024)","https://doi.org/10.1186/s13018-024-04536-y"],
      ["Indian Journal of Orthopaedics systematic review/meta-analysis (2026)","https://doi.org/10.1007/s43465-025-01681-2"]
    ]
  },
  {
    id:"kinevia", name:"Kinetec Kinevia Duo", category:"rehab", label:"Rehabilitation",
    image:"assets/kinevia-duo.jpg", credit:"Photo: Kinetec product image",
    units:[["Kinetec Kinevia Duo","Physiotherapy","A1NE0622","Trains arms and legs; the inventory lists it under leg and ankle exercisers."]],
    videos:[
      ["Kinetec Kinevia Duo — overview and patient set-up","https://www.youtube.com/watch?v=Gjzc63HPs4c","Device demo"],
      ["Kinevia Duo active-passive trainer — overview and patient set-up (2)","https://www.youtube.com/watch?v=wUkQc9lDuuU","Device demo"],
      ["Kinevia and Kinevia Duo","https://www.youtube.com/watch?v=QC1B9wo1q64","Device demo"]
    ],
    desc:"Motorised active-passive trainer with a leg unit and an arm unit, used from a chair or wheelchair. Passive, assisted, active (resistance) and symmetry modes on a 7-inch touch screen.",
    use:"Used for early passive movement and to progress patients to assisted and active cycling, for example after stroke or spinal cord injury, in multiple sclerosis or Parkinson's disease, and for patients with low mobility.",
    steps:[
      "Bring the chair or wheelchair into position and lock the brakes.",
      "Adjust height and distance (tool-free) so the limb is not overstretched at full crank.",
      "Secure the feet in the pedals or the hands on the grips.",
      "Select legs or arms, then the mode or preset programme.",
      "Set time and speed or resistance; start and watch the first cycles.",
      "Review the symmetry and distance feedback, release the limbs and document."
    ],
    points:[
      "Maximum user weight is about 285 lb (129 kg) according to distributors — confirm in the manual.",
      "Spasm detection reverses the movement; do not disable it.",
      "Check skin at the straps, especially with reduced sensation.",
      "Caution with recent fractures, foot ulcers and unstable joints."
    ],
    mistakes:[
      "Unlocked wheelchair brakes.",
      "Crank distance set too far, forcing end-range knee or elbow extension.",
      "Leaving a patient with spasticity unattended in passive mode."
    ],
    evidence:"No device-specific clinical trial was identified for this guide. The description is based on manufacturer and distributor information.",
    sources:[
      ["Performance Health — Kinevia Duo product information","https://www.performancehealth.com/kinevia-duo-active-passive-trainer"],
      ["John Preston — Kinetec Kinevia Duo","https://www.johnpreston.ie/kinetec-kinevia-duo-active-passive-cycle"],
      ["Kinetec official video channel","https://www.youtube.com/c/kinetecsas/videos"]
    ]
  },
  {
    id:"posturomed", name:"Posturomed Balance Platform", category:"balance", label:"Balance & Functional",
    image:"assets/posturomed.jpg", credit:"Photo: HAIDER BIOSWING",
    units:[["MechaTronic Posturomed","Assessment Gym","B1ASU001","In service since 2009. The platform is built by HAIDER BIOSWING."]],
    videos:[
      ["BIOSWING Posturomed — the basic exercises","https://www.youtube.com/watch?v=giwSIGs6wDA","Device demo · German"],
      ["BIOSWING Posturomed — assembly and set-up","https://www.youtube.com/watch?v=nWm655Gi70k","Device demo · German"],
      ["BIOSWING Posturomed — the feedback module","https://www.youtube.com/watch?v=CF7-LbrrV34","Device demo · German"]
    ],
    desc:"Damped, horizontally oscillating unstable platform for sensorimotor assessment and training. Instability is graded with the platform brakes; with the measurement module the platform movement is recorded.",
    use:"Balance systems can provide objective assessment and/or supported training. The protocol should match the patient's ability, diagnosis, goals and fall risk.",
    steps:[
      "Check the platform, brakes, handrail and software.",
      "Perform a fall-risk and functional safety screen before testing.",
      "Start with the brakes locked and the patient holding the handrail; explain the task.",
      "Progress: two-leg stance, stepping in place, single-leg stance; then release one brake, then both.",
      "Stand in the appropriate guarding position and monitor the patient.",
      "Record the test/training conditions (brakes, stance, eyes, time) and response."
    ],
    points:[
      "Use guarding and fall-prevention measures appropriate to the patient.",
      "Test conditions must be reproducible for meaningful comparisons.",
      "Software scores are measurements, not diagnoses by themselves.",
      "Do not use before full weight bearing is permitted."
    ],
    mistakes:[
      "Running challenging balance tasks without an appropriate safety setup.",
      "Comparing scores from different brake or stance conditions as if they were equivalent.",
      "Treating a software score as a stand-alone diagnosis."
    ],
    evidence:"Manufacturer material describes the Posturomed as a sensorimotor prevention, therapy and diagnosis device. Normative values depend on the test condition, so this guide gives no universal cut-offs.",
    sources:[
      ["BIOSWING Posturomed user guide (English PDF)","https://www.fisaude.pt/files/User-guide-BIOSWING-Posturomed-MDR-2017_compressed.pdf"],
      ["HAIDER BIOSWING — Posturomed","https://www.bioswing.de/en/therapy-systems/posturomed/"]
    ]
  }
];

const grid = document.getElementById("equipmentGrid");
const empty = document.getElementById("emptyState");
const input = document.getElementById("searchInput");
const filter = document.getElementById("categoryFilter");

function videoCard(v, sub){
  const yt = v[1].match(/[?&]v=([\w-]{11})/);
  const thumb = yt ? ` style="background-image:url('https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg')"` : "";
  return `
  <a class="video-card" href="${v[1]}" target="_blank" rel="noopener">
    <div class="video-thumb${yt ? " has-thumb" : ""}"${thumb}><span>▶</span></div>
    <span class="video-tag">${v[2]}</span>
    <h3>${v[0]}</h3>
    ${sub ? `<p>${sub}</p>` : ""}
  </a>`;
}

function renderCards(){
  const q = input.value.trim().toLowerCase();
  const cat = filter.value;
  const list = devices.filter(d =>
    (cat === "all" || d.category === cat) &&
    (!q || `${d.name} ${d.label} ${d.desc} ${d.use} ${d.units.map(u=>u[0]+" "+u[2]).join(" ")}`.toLowerCase().includes(q))
  );
  grid.innerHTML = list.map(d => `
    <article class="card">
      <div class="card-image"><img src="${d.image}" alt="${d.name}"></div>
      <div class="card-content">
        <span class="pill">${d.label}</span>
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <button class="view" data-device="${d.id}">View Guide →</button>
      </div>
    </article>
  `).join("");
  empty.style.display = list.length ? "none" : "block";
}

function openDevice(id){
  const d = devices.find(x => x.id === id);
  if(!d) return;
  document.getElementById("modalImage").src = d.image;
  document.getElementById("modalImage").alt = d.name;
  document.getElementById("modalCredit").textContent = d.credit || "";
  document.getElementById("modalCategory").textContent = d.label;
  document.getElementById("modalTitle").textContent = d.name;
  document.getElementById("modalDescription").textContent = d.desc;
  document.getElementById("modalUnits").innerHTML = d.units.map(u=>`<li><strong>${u[0]}</strong> — ${u[1]} · <code>${u[2]}</code>${u[3] ? `<small>${u[3]}</small>` : ""}</li>`).join("");
  document.getElementById("modalVideos").innerHTML = d.videos.map(v=>videoCard(v)).join("");
  document.getElementById("modalUse").textContent = d.use;
  document.getElementById("modalSteps").innerHTML = d.steps.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalPoints").innerHTML = d.points.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalMistakes").innerHTML = d.mistakes.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalEvidence").textContent = d.evidence;
  document.getElementById("modalSources").innerHTML = d.sources.map(s=>`<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join("");
  document.getElementById("deviceModal").classList.add("open");
  document.getElementById("deviceModal").setAttribute("aria-hidden","false");
  document.querySelector(".modal-panel").scrollTop = 0;
  document.body.style.overflow="hidden";
}
function closeModal(){
  document.getElementById("deviceModal").classList.remove("open");
  document.getElementById("deviceModal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
grid.addEventListener("click", e => { const btn=e.target.closest("[data-device]"); if(btn) openDevice(btn.dataset.device); });
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
input.addEventListener("input",renderCards);
filter.addEventListener("change",renderCards);
document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("equipment").scrollIntoView({behavior:"smooth"});renderCards()});
document.getElementById("focusSearch").addEventListener("click",()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"});setTimeout(()=>input.focus(),350)});
document.getElementById("themeToggle").addEventListener("click",()=>document.body.classList.toggle("dark"));

document.getElementById("safetyBtn").addEventListener("click",()=>{
  alert("Safety reminder: this guide is educational. Use the hospital-approved protocol and the manufacturer's instructions for the exact device. Screen the patient, verify contraindications/precautions, use approved parameters, monitor continuously, and document the session.");
});
document.getElementById("referenceBtn").addEventListener("click",()=>{
  document.getElementById("equipment").scrollIntoView({behavior:"smooth"});
});

document.getElementById("videoGrid").innerHTML = devices.flatMap(d => d.videos.map(v => videoCard(v, d.name))).join("");

renderCards();
