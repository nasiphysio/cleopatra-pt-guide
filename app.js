const devices = [
  {
    id:"traction", name:"Traction (ISIS)", category:"mechanical", label:"Mechanical Therapy",
    image:"assets/traction.jpg",
    units:[],
    videos:[["Mechanical lumbar traction — applying the belts (demonstration)", "https://www.youtube.com/watch?v=3pGR_5sCBB0", "Educational"], ["More: mechanical cervical/lumbar traction set-up", "https://www.youtube.com/results?search_query=mechanical+cervical+lumbar+traction+physical+therapy+setup", "YouTube search"]],
    desc:"Mechanical cervical/lumbar traction. The exact ISIS model and its manufacturer manual should be verified before publishing device-specific settings.",
    use:"Use only after a clinical assessment and when traction is appropriate to the patient's presentation. It is not a routine treatment for every low-back-pain presentation.",
    steps:[
      "Confirm patient identity, referral/plan, diagnosis and relevant red flags.",
      "Inspect the machine, straps/halter and emergency stop.",
      "Position and align the patient according to the verified device manual and the approved department protocol.",
      "Enter only the prescribed/approved parameters; do not copy settings from another patient.",
      "Monitor symptoms and stop if the patient develops concerning or unacceptable symptoms.",
      "Document the device, position, settings, duration and patient response."
    ],
    points:[
      "A thorough assessment comes before traction.",
      "The patient should have a clear way to stop/alert the therapist.",
      "Device-specific force, mode and timing must come from the actual manual/protocol.",
      "For low back pain, evidence is condition-specific rather than universal."
    ],
    mistakes:[
      "Using a generic force/time recipe without confirming diagnosis and protocol.",
      "Treating non-radicular low back pain as if traction were routinely indicated.",
      "Ignoring new neurological symptoms or worsening pain."
    ],
    evidence:"The 2021 APTA/JOSPT low-back-pain guideline reports preliminary evidence for a specific subgroup with nerve-root compression signs and peripheralization/positive crossed SLR, while recommending against routine intermittent/static traction for acute/subacute non-radicular or chronic low-back pain.",
    sources:[
      ["JOSPT / APTA Clinical Practice Guideline (2021)","https://doi.org/10.2519/jospt.2021.0304"],
      ["South Tees NHS — What is traction?","https://www.southtees.nhs.uk/services/physiotherapy/community-outpatient-physiotherapy-middlesbrough-redcar-and-cleveland/what-treatments-are-available/what-is-traction/"]
    ]
  },
  {
    id:"isokinetic", name:"Iso-Kinetic", category:"rehab", label:"Rehabilitation",
    image:"assets/isokinetic.jpg",
    units:[],
    videos:[["Isokinetic dynamometer — knee test set-up and alignment", "https://www.youtube.com/results?search_query=isokinetic+dynamometer+knee+test+setup+alignment+tutorial", "YouTube search"]],
    desc:"Isokinetic dynamometry for objective muscle-performance assessment and controlled exercise.",
    use:"Useful for standardized muscle-strength/performance assessment and, when appropriate, rehabilitation exercise. Reliable results depend on consistent positioning, stabilization, calibration and protocol.",
    steps:[
      "Check calibration, accessories, seat/axis alignment and safety stops.",
      "Explain the test/exercise and demonstrate the required effort.",
      "Position and stabilize the patient consistently; align the joint axis with the dynamometer axis.",
      "Use a standardized warm-up and the department's validated protocol.",
      "Run the test or exercise while monitoring pain, fatigue and technique.",
      "Save/label results consistently and document protocol details."
    ],
    points:[
      "Protocol consistency is essential for meaningful comparisons.",
      "Calibration and stabilization affect measurement quality.",
      "Pain, effusion, instability, acute injury and healing restrictions may require modification or postponement.",
      "Reference values are population- and protocol-dependent."
    ],
    mistakes:[
      "Comparing results obtained with different speeds, ROM or stabilization.",
      "Skipping calibration or alignment checks.",
      "Testing through significant pain or ignoring healing restrictions."
    ],
    evidence:"Recent systematic reviews support the measurement role of isokinetic dynamometry, while also highlighting heterogeneity in protocols and reference populations. Clinical testing should therefore use a consistent, documented protocol.",
    sources:[
      ["Physical Therapy in Sport systematic review (2025)","https://doi.org/10.1016/j.ptsp.2025.07.011"],
      ["PTJ systematic review on reliability in neuromuscular disease (2022)","https://pubmed.ncbi.nlm.nih.gov/35899532/"]
    ]
  },
  {
    id:"tcar", name:"TCAR / TECAR", category:"physical", label:"Physical Agents",
    image:"assets/tcar.jpg",
    units:[["Level GW-100", "Sport Medicine", "BGSML055", "No manufacturer manual was found online for this model — request it from the supplier."]],
    videos:[["TECAR — transfer of energy capacitive and resistive (Harley Street Physiotherapy)", "https://www.youtube.com/watch?v=if2Cufpa69A", "Educational"], ["More: capacitive / resistive application technique", "https://www.youtube.com/results?search_query=tecar+therapy+technique+capacitive+resistive+tutorial", "YouTube search"]],
    desc:"The department's 'TCAR' entry is treated here as TECAR/transfer-energy capacitive-resistive therapy pending confirmation of the exact device and model.",
    use:"TECAR uses radiofrequency electrical energy with capacitive/resistive coupling. Evidence for musculoskeletal pain has grown, but reviews note heterogeneity and limitations; device-specific claims should not be presented as established facts.",
    steps:[
      "Verify the exact device, applicator and manufacturer instructions.",
      "Screen the patient and treatment area according to the device manual and hospital protocol.",
      "Prepare the patient and electrode/return plate as required by the specific system.",
      "Select only settings authorized by the department protocol and device manual.",
      "Monitor skin sensation, comfort and treatment response continuously.",
      "Document device, mode, settings, area and response."
    ],
    points:[
      "Do not substitute a generic TECAR setting for a model-specific protocol.",
      "Evidence is not the same as a manufacturer's marketing claim.",
      "Thermal sensation and tissue response should be monitored.",
      "Exact safety restrictions depend on the device and patient context."
    ],
    mistakes:[
      "Calling all TECAR devices equivalent.",
      "Using marketing claims as evidence of clinical effectiveness.",
      "Publishing fixed parameters before the exact model is verified."
    ],
    evidence:"A systematic review/meta-analysis found reductions in musculoskeletal pain but substantial heterogeneity. Another evidence review described the overall literature as sparse and low level. The site therefore avoids universal parameters and strong efficacy claims.",
    sources:[
      ["PubMed — TECAR systematic review/meta-analysis (2023)","https://pubmed.ncbi.nlm.nih.gov/36698689/"],
      ["ScienceDirect — scoping review of TECAR evidence","https://www.sciencedirect.com/science/article/abs/pii/S1779012320300838"]
    ]
  },
  {
    id:"cpm-upper", name:"CPM Upper Limb", category:"rehab", label:"Rehabilitation",
    image:"assets/cpm-upper.jpg",
    units:[["ORMED ARTROMOT S3 Comfort (shoulder CPM)", "Physiotherapy", "B1NE1070", ""]],
    videos:[["Artromot S3 CPM — set-up for the shoulder", "https://www.youtube.com/watch?v=5E2zJj8Yv18", "Device demo"], ["ARTROMOT S3 — product overview", "https://www.youtube.com/watch?v=kdbVd9Jl_X0", "Device demo"], ["Artromot S3 — instructions for the shoulder joint", "https://www.youtube.com/watch?v=iBpq4P7_EDk", "Device demo · Russian"]],
    desc:"Continuous passive motion for selected upper-limb joints. The joint, device and postoperative protocol determine the appropriate ROM and speed.",
    use:"CPM passively moves a joint through a programmed range. It should complement, not automatically replace, active rehabilitation when active exercise is appropriate.",
    steps:[
      "Confirm the prescribed joint, postoperative restrictions and protocol.",
      "Inspect the device and prepare padding/straps.",
      "Align the device axis with the patient's joint axis before starting.",
      "Set the approved ROM, speed and duration for that patient.",
      "Start slowly and monitor comfort, swelling, skin and mechanical alignment.",
      "Stop, reposition or escalate if the patient develops concerning symptoms."
    ],
    points:[
      "Correct anatomical alignment is critical.",
      "Never exceed the surgeon/department-approved ROM.",
      "The device is not a substitute for individualized active rehabilitation.",
      "Document ROM, speed, duration and tolerance."
    ],
    mistakes:[
      "Increasing ROM simply because the patient tolerates the machine.",
      "Poor axis alignment causing unwanted joint loading.",
      "Treating CPM as a universal requirement after surgery."
    ],
    evidence:"Upper-limb evidence is condition-specific. A systematic review after rotator-cuff repair did not support routine CPM as superior to standard rehabilitation. Use should therefore follow the surgical/department protocol rather than a universal recipe.",
    sources:[
      ["Clin Rehabil systematic review — rotator cuff repair (2011)","https://pubmed.ncbi.nlm.nih.gov/20943710/"],
      ["PubMed — systematic review of CPM after rotator cuff repair","https://pubmed.ncbi.nlm.nih.gov/20943710/"]
    ]
  },
  {
    id:"cpm-lower", name:"CPM Lower Limb", category:"rehab", label:"Rehabilitation",
    image:"assets/cpm-lower.jpg",
    units:[["BTL CPMotion K Elite (knee CPM)", "Sport Medicine", "BGSM3722", ""]],
    videos:[["BTL CPMotion — product video", "https://www.youtube.com/watch?v=nbnnstnGg18", "Device demo"], ["BTL CPMotion — product video (2)", "https://www.youtube.com/watch?v=RWIr8BU5CyQ", "Device demo"], ["Knee CPM machines — what you need to know", "https://www.youtube.com/watch?v=UST32Ff9A_E", "Educational"], ["Using a CPM machine after ACL surgery", "https://www.youtube.com/watch?v=Pdfjyfy0v_M", "Educational"]],
    desc:"Continuous passive motion for lower-limb joints, commonly used in selected postoperative pathways.",
    use:"CPM can provide standardized passive movement when it is part of an approved rehabilitation plan. Current evidence does not support treating CPM as universally superior to active/standard physiotherapy after knee arthroplasty.",
    steps:[
      "Verify the prescription/protocol and the permitted ROM.",
      "Inspect the machine, padding and straps.",
      "Align the device with the hip/knee/ankle according to the actual model.",
      "Set only the approved ROM, speed and duration.",
      "Monitor pain, swelling, skin and alignment throughout the session.",
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
      ["Journal of Orthopaedic Surgery & Research systematic review/meta-analysis (2024)","https://doi.org/10.1186/s13018-024-04536-y"],
      ["Indian Journal of Orthopaedics systematic review/meta-analysis (2026)","https://doi.org/10.1007/s43465-025-01681-2"]
    ]
  },
  {
    id:"laser", name:"Laser", category:"physical", label:"Physical Agents",
    image:"assets/laser.jpg",
    units:[["THOR LX2", "Physiotherapy", "A1LD0614", ""], ["THOR LX2", "Sport Medicine", "BGSM-615", ""], ["ASA laser (model not recorded)", "Physiotherapy — Pediatric", "BBPE1302", "Read the model from the rating plate; class and dose tables differ between ASA models."]],
    videos:[["THOR LX2 — red and near-infrared PBM therapy machine", "https://www.youtube.com/watch?v=rItCEFE5VI0", "Device demo"], ["Training with THOR Photomedicine", "https://www.youtube.com/watch?v=cSpdz0S0rNM", "Device demo"], ["How LLLT works", "https://www.youtube.com/watch?v=VzMJUxalkFo", "Educational"], ["Low-level laser therapy — what it is, how it is applied, research overview", "https://www.youtube.com/watch?v=XbjIgccE9F4", "Educational"], ["What is MLS laser therapy? (ASA technology)", "https://www.youtube.com/watch?v=O-dCzh3dkdk", "Educational"], ["Laser safety — using a medical laser device", "https://www.youtube.com/watch?v=2h00F_3DHMQ", "Safety"]],
    desc:"Low-level laser/light therapy. Exact wavelength, power, dose and application method are device- and protocol-specific.",
    use:"Use only within an approved protocol and with appropriate eye protection/safety controls. Do not invent a universal dose because device classes and clinical indications differ.",
    steps:[
      "Verify device class, wavelength/output and approved protocol.",
      "Screen the patient and treatment area for relevant precautions/contraindications.",
      "Protect eyes as required by the device and treatment protocol.",
      "Prepare the treatment area and select the prescribed dose/settings.",
      "Apply the laser to the intended area while monitoring the patient.",
      "End the session, power down and store the applicator safely."
    ],
    points:[
      "Never aim therapeutic laser at the eyes.",
      "Known/suspected malignancy and certain pregnancy treatment locations require avoidance according to evidence-based safety guidance.",
      "The exact dose depends on wavelength, power, area and protocol.",
      "Follow the device manual and laser-safety policy."
    ],
    mistakes:[
      "Using the same dose for every laser device.",
      "Ignoring eye protection or aiming near the eye.",
      "Copying online treatment tables without verifying the device and indication."
    ],
    evidence:"Evidence-based safety guidance identifies important treatment restrictions for low-level laser, including avoiding direct ocular exposure and certain treatment locations. Modern consensus statements also emphasize trained professionals, patient assessment and device/manufacturer guidance.",
    sources:[
      ["Canadian Physiotherapy Association evidence-based EPA safety review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"]
    ]
  },
  {
    id:"faradic-vms", name:"Faradic & VMS", category:"electro", label:"Electrotherapy",
    image:"assets/faradic-vms.jpg",
    units:[["Chattanooga Intelect Advanced Combo 2762CC", "Physiotherapy — Pediatric", "BBPE3085", "VMS is one of the waveforms on Chattanooga Intelect units."], ["Chattanooga Intelect Advanced Combo 2762CC", "Sport Medicine", "BGSM4643", ""], ["BTL-4825SL Premium", "Physiotherapy", "B1NE4455", ""], ["BTL-4825SL Premium", "Physiotherapy", "B1NE1736", ""]],
    videos:[["Intelect Advanced Combo — first steps and usage recommendations", "https://www.youtube.com/watch?v=3mIYEyg5zV4", "Device demo · Spanish"], ["BTL-4825 Premium ultrasound and stim combo", "https://www.youtube.com/watch?v=9uoYBcnOF2c", "Device demo"], ["Interferential set-up on a Chattanooga Intelect Legend (related model)", "https://www.youtube.com/watch?v=DEs_MkkShwA", "Educational"], ["More: NMES electrode placement", "https://www.youtube.com/results?search_query=NMES+electrode+placement+physical+therapy+tutorial", "YouTube search"]],
    desc:"Electrical stimulation modes used for selected muscle re-education and rehabilitation applications. Exact waveform/settings are device-specific.",
    use:"Electrical stimulation should follow patient screening, correct electrode placement, a validated protocol and continuous monitoring. Do not copy generic parameters between machines.",
    steps:[
      "Inspect the unit, leads and electrodes.",
      "Screen for contraindications/precautions and inspect skin.",
      "Explain the sensation and place electrodes according to the approved protocol.",
      "Select the correct waveform/mode and prescribed settings.",
      "Increase intensity gradually while monitoring patient response and skin.",
      "Turn output to zero before removing electrodes; clean and document."
    ],
    points:[
      "Do not stimulate over/near implanted electronic devices when it could cause malfunction.",
      "Avoid inappropriate application over pregnancy-related regions, active DVT/thrombophlebitis, active bleeding or infected tissue according to safety guidance.",
      "Electrode placement changes the clinical effect.",
      "Patient feedback and skin checks are essential."
    ],
    mistakes:[
      "Removing electrodes while output is still active.",
      "Using a copied intensity/frequency without verifying waveform and pulse width.",
      "Ignoring pacemakers/implanted stimulators or damaged skin."
    ],
    evidence:"The 2024 SAFE PAMP consensus supports safety statements for electrical stimulation and stresses clinical assessment. Earlier evidence-based guidance provides specific precautions concerning implanted electronic devices, pregnancy-related areas, malignancy, DVT/thrombophlebitis and other situations.",
    sources:[
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"],
      ["Evidence-based EPA contraindications review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"],
      ["Leeds Teaching Hospitals — NMES safety information","https://www.leedsth.nhs.uk/patients/resources/neuromuscular-electrical-stimulation-nmes/"]
    ]
  },
  {
    id:"balance", name:"Balance", category:"balance", label:"Balance & Functional",
    image:"assets/balance.jpg",
    units:[["BIOSWING Posturomed (with MechaTronic measurement)", "Assessment Gym", "B1ASU001", ""]],
    videos:[["BIOSWING Posturomed — the basic exercises", "https://www.youtube.com/watch?v=giwSIGs6wDA", "Device demo · German"], ["BIOSWING Posturomed — assembly and set-up", "https://www.youtube.com/watch?v=nWm655Gi70k", "Device demo · German"], ["BIOSWING Posturomed — the feedback module", "https://www.youtube.com/watch?v=CF7-LbrrV34", "Device demo · German"]],
    desc:"Balance assessment/training equipment. The exact platform and software should be identified before adding device-specific test instructions.",
    use:"Balance systems can provide objective assessment and/or supported training. The protocol should match the patient's ability, diagnosis, goals and fall risk.",
    steps:[
      "Check the platform, handles, harness/safety equipment and software.",
      "Perform a fall-risk and functional safety screen before testing.",
      "Explain the task and establish the safest starting position.",
      "Select the validated test/training protocol.",
      "Stand in the appropriate guarding position and monitor the patient.",
      "Record the test/training conditions and response."
    ],
    points:[
      "Use guarding and fall-prevention measures appropriate to the patient.",
      "Test conditions must be reproducible for meaningful comparisons.",
      "Software scores are measurements, not diagnoses by themselves.",
      "Identify the exact system before publishing device-specific normative values."
    ],
    mistakes:[
      "Running challenging balance tasks without an appropriate safety setup.",
      "Comparing scores from different protocols as if they were equivalent.",
      "Treating a software score as a stand-alone diagnosis."
    ],
    evidence:"Commercial clinical balance systems provide structured assessment and rehabilitation workflows, but exact tests and normative data depend on the system. The website intentionally avoids universal cutoffs until the department's exact model is confirmed.",
    sources:[
      ["Bertec Balance Advantage Static System manual listing","https://manuals.plus/m/43b4939b77ba1a60e6228140527fe78f5994fd82829631e8adea08824a928f18"],
      ["HUMAC / Balance System SD manuals and product information","https://smti.co/products/balance-system-sd"]
    ]
  },
  {
    id:"shockwave", name:"Shockwave", category:"physical", label:"Physical Agents",
    image:"assets/shockwave.jpg",
    units:[],
    videos:[["Radial shockwave therapy for Achilles tendinopathy", "https://www.youtube.com/watch?v=MlB0Wf3o9TQ", "Educational"], ["More: radial vs focused shockwave technique", "https://www.youtube.com/results?search_query=radial+focused+shockwave+therapy+technique+physiotherapy", "YouTube search"]],
    desc:"Extracorporeal shockwave therapy (radial or focused). Treatment parameters and indications differ by device type and target condition.",
    use:"Use only after clinical assessment and appropriate diagnosis. Focused and radial devices are not interchangeable, and high-energy focused treatment has additional anatomical restrictions.",
    steps:[
      "Confirm diagnosis, treatment target and whether the device is radial or focused.",
      "Screen for contraindications and relevant precautions.",
      "Identify the target tissue and position the patient appropriately.",
      "Use only the approved device-specific protocol and trained technique.",
      "Monitor pain, skin response and patient tolerance.",
      "Document device type, applicator, settings, treatment site and response."
    ],
    points:[
      "Active malignancy at the treatment field is a contraindication in current consensus guidance.",
      "Pregnancy/fetus in the treatment field is a contraindication.",
      "High-energy focused treatment has additional restrictions involving lung, brain/CNS, certain bones and significant coagulation disorders.",
      "Training and competency matter; do not use generic internet settings as a protocol."
    ],
    mistakes:[
      "Confusing radial pressure waves with focused ESWT.",
      "Treating over restricted anatomy because the target is 'nearby'.",
      "Using a copied energy/frequency recipe without verifying device type and indication."
    ],
    evidence:"International and recent expert guidance distinguishes radial and focused shockwave. Contraindications and anatomical restrictions depend on energy type and treatment field. Current literature also emphasizes the need for proper training and individualized application.",
    sources:[
      ["ISMST recommendations / consensus","https://shockwavetherapy.org/ismst-recommendations/"],
      ["ISMST consensus PDF","https://shockwavetherapy.org/wp-content/uploads/2023/11/ISMST-consensus-statement-on-indications-and-contraindications-20161012-final.pdf"],
      ["BJSM international Delphi recommendations (2024)","https://doi.org/10.1136/bjsports-2024-109082"],
      ["APTA practice advisory announcement (2025)","https://www.apta.org/article/2025/08/18/now-available-apta-practice-advisory-on-extracorporeal-shockwave-therapy"]
    ]
  },
  {
    id:"combo", name:"Combination Therapy (Electro + Ultrasound)", category:"electro", label:"Electrotherapy",
    image:"assets/placeholder.svg",
    units:[
      ["BTL-4825SL Premium","Physiotherapy","B1NE4455","2 electrotherapy channels + ultrasound + low-level laser output; works with the BTL Vac unit."],
      ["BTL-4825SL Premium","Physiotherapy","B1NE1736",""],
      ["Chattanooga Intelect Advanced Combo 2762CC","Physiotherapy — Pediatric","BBPE3085","2-channel colour combination unit with sEMG."],
      ["Chattanooga Intelect Advanced Combo 2762CC","Sport Medicine","BGSM4643",""]
    ],
    videos:[
      ["BTL-4825 Premium ultrasound and stim combo","https://www.youtube.com/watch?v=9uoYBcnOF2c","Device demo"],
      ["BTL-4000 Smart and Premium — electrotherapy, ultrasound, laser, magnet","https://www.youtube.com/watch?v=pWZp30Wyu_U","Device demo · Russian"],
      ["Intelect Advanced Combo Color","https://www.youtube.com/watch?v=hWQ9Srh9VJo","Device demo · Spanish"],
      ["Therapeutic ultrasound — application technique","https://www.youtube.com/watch?v=XP5pQuqTSZE","Educational"]
    ],
    desc:"Combination units that deliver electrical stimulation and therapeutic ultrasound from one console, separately or together, with optional vacuum electrodes.",
    use:"Used for electrical stimulation, therapeutic ultrasound, or both at once through the ultrasound head (combined therapy). Each output has its own screening, technique and settings; the preset library is a starting point, not a prescription.",
    steps:[
      "Inspect leads, electrodes, vacuum cups and the ultrasound head; switch the unit on.",
      "Select the modality on the screen: electrotherapy, ultrasound or combination.",
      "Choose the approved protocol or enter the prescribed parameters manually.",
      "Electrotherapy: prepare the skin, fix the electrodes (pads, sponges or vacuum cups) and raise intensity gradually to the patient's reported sensation.",
      "Ultrasound: apply enough coupling gel and keep the head moving slowly over the treatment area for the whole session.",
      "At the end, return output to zero, remove electrodes, check the skin, clean the accessories and document."
    ],
    points:[
      "1 MHz ultrasound reaches deeper tissue; 3 MHz is for superficial tissue.",
      "Never run the ultrasound head without gel or hold it still on one spot.",
      "Electrical-stimulation precautions apply: implanted electronic devices, pregnancy-related regions, malignancy, DVT, damaged or insensate skin.",
      "In children, avoid ultrasound over growth plates and start stimulation at the lowest intensity."
    ],
    mistakes:[
      "Using a preset without checking it matches the diagnosis and the approved protocol.",
      "Too little gel or a stationary ultrasound head.",
      "Raising intensity quickly instead of following the patient's feedback."
    ],
    evidence:"Safety guidance for electrical stimulation and ultrasound comes from the SAFE PAMP consensus and the Canadian evidence-based contraindications review. Device menus and presets are manufacturer content and are not evidence of effectiveness for a given condition.",
    sources:[
      ["BTL-4000 Electrotherapy user's guide (EWH BMET library)","https://bmet.ewh.org/items/cbf4c071-0cfe-4458-926d-c5dca8584345/full"],
      ["BTL Vac user's manual (EWH BMET library)","https://bmet.ewh.org/items/38f32c20-0fa0-4900-baf5-961d9e7de963/full"],
      ["Chattanooga Intelect Advanced user manual (Spanish PDF)","https://cdn2.shopify.com/s/files/1/2285/0379/files/Manual_de_Usuario_-_Intelect_Advanced.pdf"],
      ["SAFE PAMP consensus (BMJ Open, 2024)","https://doi.org/10.1136/bmjopen-2023-075348"],
      ["Evidence-based EPA contraindications review","https://pmc.ncbi.nlm.nih.gov/articles/PMC3031347/"]
    ]
  },
  {
    id:"hp-laser", name:"High-Power Scanning Laser", category:"physical", label:"Physical Agents",
    image:"assets/placeholder.svg",
    units:[
      ["Level Luxwave (scanning laser)","Physiotherapy","A1NEl007","Manufacturer pages list different wavelengths (808, 1064 or 970–980 nm) — check the label on the unit."],
      ["BTL high-power laser — model to be verified","Physiotherapy","B1NE2316","The inventory lists model 4825SL Premium for this unit, which is the combination unit. Verify the rating plate."]
    ],
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
    id:"accu-spina", name:"Spinal Decompression (Accu-SPINA)", category:"mechanical", label:"Mechanical Therapy",
    image:"assets/placeholder.svg",
    units:[["Accu-SPINA — IDD Therapy","Physiotherapy — Pediatric","BBPE-866","S/N D70858-121-0725-866"]],
    videos:[
      ["Is IDD Therapy and the Accu-SPINA just traction? Stephen Small explains","https://www.youtube.com/watch?v=M9M8DcBha1k","Educational"],
      ["IDD Therapy — Health Journal TV episode","https://www.youtube.com/watch?v=U0KMhBQWkAE","Educational"],
      ["Accu-SPINA for IDD Therapy — official channel","https://www.youtube.com/@Accuspina","Channel"]
    ],
    desc:"Computer-controlled spinal decompression table (North American Medical). Applies a distraction force at a calculated angle to target a spinal level, in cycles of pull and partial relaxation.",
    use:"Used for lumbar or cervical decompression in selected disc-related presentations after clinical assessment. The same assessment-first rule as mechanical traction applies. Use in children requires a physician's decision and weight-based force.",
    steps:[
      "Confirm identity, referral, diagnosis, imaging and red flags.",
      "Enter the patient data and target level so the system sets the angle of pull.",
      "Fit the chest and pelvic harnesses firmly with the patient supine and the knees supported.",
      "Enter only the prescribed maximum force; early sessions start low.",
      "Give the patient the stop switch, start, and monitor symptoms for the whole session (about 25 minutes).",
      "Release the harnesses slowly, let the patient rest before standing, and document."
    ],
    points:[
      "The patient must hold the emergency stop.",
      "Not for fracture, severe osteoporosis, tumour, spinal instability, pregnancy or recent spinal fixation.",
      "New or worsening neurological symptoms end the session.",
      "Force, angle and progression come from the manual and the approved protocol."
    ],
    mistakes:[
      "Loose harnesses, so the force moves the patient instead of the spine.",
      "Quoting manufacturer success rates to patients as established outcomes.",
      "Using adult force settings for a child."
    ],
    evidence:"Success rates around 90% that circulate for IDD Therapy come from the manufacturer and clinics. A randomized trial comparing IDD Therapy with standard physical therapy is registered (NCT00165893); its published results were not confirmed for this guide. The APTA/JOSPT guidance on traction quoted in the Traction entry is the relevant independent reference.",
    sources:[
      ["ClinicalTrials.gov — IDD Therapy vs non-surgical care (NCT00165893)","https://clinicaltrials.gov/study/NCT00165893"],
      ["JOSPT / APTA Clinical Practice Guideline (2021)","https://doi.org/10.2519/jospt.2021.0304"]
    ]
  },
  {
    id:"kinevia", name:"Active-Passive Trainer (Kinevia Duo)", category:"rehab", label:"Rehabilitation",
    image:"assets/placeholder.svg",
    units:[["Kinetec Kinevia Duo","Physiotherapy","A1NE0622","Trains arms and legs; the inventory lists it under leg and ankle exercisers."]],
    videos:[
      ["Kinetec Kinevia Duo — overview and patient set-up","https://www.youtube.com/watch?v=Gjzc63HPs4c","Device demo"],
      ["Kinevia Duo active-passive trainer — overview and patient set-up (2)","https://www.youtube.com/watch?v=wUkQc9lDuuU","Device demo"],
      ["Kinevia and Kinevia Duo","https://www.youtube.com/watch?v=QC1B9wo1q64","Device demo"],
      ["Kinetec official channel","https://www.youtube.com/c/kinetecsas/videos","Channel"]
    ],
    desc:"Motorised cycle with a leg unit and an arm unit, used from a chair or wheelchair. Passive, assisted, active (resistance) and symmetry modes on a 7-inch touch screen.",
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
      ["John Preston — Kinetec Kinevia Duo","https://www.johnpreston.ie/kinetec-kinevia-duo-active-passive-cycle"]
    ]
  },
  {
    id:"digimax", name:"Isometric Strength Test (Digimax)", category:"balance", label:"Balance & Functional",
    image:"assets/placeholder.svg",
    units:[["MechaTronic Digimax","Assessment Gym","B1AS0001","Listed in the inventory as an electronic balance; published sources describe Digimax as isometric force measurement. Confirm on the unit."]],
    videos:[
      ["More: Digimax isometric strength test","https://www.youtube.com/results?search_query=Digimax+isometric+strength+test+mechatronic","YouTube search"]
    ],
    desc:"Force sensor linked to a computer that records maximal isometric (no movement) force of a muscle group and compares sides.",
    use:"Used for objective strength assessment before and after rehabilitation and for side-to-side comparison. Results are only comparable when position, joint angle and instructions are identical.",
    steps:[
      "Warm the patient up for about 10 minutes.",
      "Fix the force unit securely and connect the sensor to the computer.",
      "Open the software, choose the isometric test and select or register the patient.",
      "Set the test position and measure the joint angle with a goniometer; record it.",
      "Start the measurement and ask for a maximal contraction of about 6 seconds; rest between trials.",
      "Save the results and document position and angle."
    ],
    points:[
      "Same position and joint angle every time.",
      "Tell the patient to breathe and not hold their breath.",
      "Postpone maximal testing with acute injury, recent surgery or uncontrolled blood pressure.",
      "A number is a measurement, not a diagnosis."
    ],
    mistakes:[
      "Testing without a warm-up.",
      "Comparing results taken at different joint angles.",
      "A force unit that is not fixed and moves during the effort."
    ],
    evidence:"The steps follow a published standard operating procedure for Digimax force measurement from Ruhr-Universität Bochum (2012, German). No manufacturer manual was found online.",
    sources:[
      ["Ruhr-Universität Bochum — SOP Kraftmessung Digimax (German PDF, may require login)","https://moodle.ruhr-uni-bochum.de/pluginfile.php/4443595/mod_resource/content/0/SOP%20Kraftmessung%20Digimax.pdf"]
    ]
  },
  {
    id:"tmg", name:"Tensiomyography (TMG)", category:"balance", label:"Balance & Functional",
    image:"assets/placeholder.svg",
    units:[["TMG S1","Assessment Gym","B1AS5209",""]],
    videos:[
      ["More: tensiomyography measurement demonstration","https://www.youtube.com/results?search_query=TMG+tensiomyography+measurement+demonstration","YouTube search"]
    ],
    desc:"Non-invasive muscle assessment: a 1 ms electrical pulse makes the muscle contract and a displacement sensor on the muscle belly records its radial movement.",
    use:"Used to measure contraction time (Tc), maximal displacement (Dm), delay, sustain and relaxation times, and to compare sides or agonist and antagonist. It needs no voluntary effort from the patient.",
    steps:[
      "Position the patient relaxed on the plinth with the joint supported at a fixed angle.",
      "Find and mark the thickest point of the muscle belly.",
      "Place the sensor perpendicular to the mark with its initial pressure, using the tripod.",
      "Stick the two electrodes either side, with the sensor midway between them.",
      "Select the muscle in the software; start low and raise the current stepwise with short rests until Dm stops increasing.",
      "Save the best curve and repeat on the other side in the identical position."
    ],
    points:[
      "Sensor position changes the result — record it.",
      "Dm is read as an indicator of muscle tone or stiffness; Tc relates to contraction speed.",
      "Electrodes are single-patient use.",
      "Electrical-stimulation precautions apply."
    ],
    mistakes:[
      "Measuring a muscle that is not fully relaxed.",
      "Comparing sides with different sensor positions or joint angles.",
      "Stopping the intensity ramp before maximal displacement is reached."
    ],
    evidence:"Reported reliability is high (ICC 0.92–0.97), but sensor location and stimulation intensity significantly affect the parameters, and much of the literature comes from sport populations with small samples.",
    sources:[
      ["Tensiomyography method for neuromuscular assessment (PMC3713716)","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3713716/"],
      ["Sensor location affects TMG parameters (PMC9910630)","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9910630/"],
      ["TMG — Getting to know tensiomyography (manufacturer, with measurement video)","https://www.tmg-bodyevolution.com/?p=2307"]
    ]
  }
];

const grid = document.getElementById("equipmentGrid");
const empty = document.getElementById("emptyState");
const input = document.getElementById("searchInput");
const filter = document.getElementById("categoryFilter");

function renderCards(){
  const q = input.value.trim().toLowerCase();
  const cat = filter.value;
  const list = devices.filter(d =>
    (cat === "all" || d.category === cat) &&
    (!q || `${d.name} ${d.label} ${d.desc} ${d.use} ${(d.units||[]).map(u=>u[0]+" "+u[2]).join(" ")}`.toLowerCase().includes(q))
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
  document.getElementById("modalCategory").textContent = d.label;
  document.getElementById("modalTitle").textContent = d.name;
  document.getElementById("modalDescription").textContent = d.desc;
  document.getElementById("modalUse").textContent = d.use;
  document.getElementById("modalSteps").innerHTML = d.steps.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalPoints").innerHTML = d.points.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalMistakes").innerHTML = d.mistakes.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("modalEvidence").textContent = d.evidence;
  document.getElementById("modalSources").innerHTML = d.sources.map(s=>`<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join("");
  const units = d.units || [], vids = d.videos || [];
  document.getElementById("modalUnitsSection").style.display = units.length ? "" : "none";
  document.getElementById("modalUnits").innerHTML = units.map(u=>`<li><strong>${u[0]}</strong> — ${u[1]} · <code>${u[2]}</code>${u[3] ? `<small>${u[3]}</small>` : ""}</li>`).join("");
  document.getElementById("modalVideosSection").style.display = vids.length ? "" : "none";
  document.getElementById("modalVideos").innerHTML = vids.map(v=>`<li><a href="${v[1]}" target="_blank" rel="noopener">▶ ${v[0]}</a> <span class="video-tag">${v[2]}</span></li>`).join("");
  document.getElementById("deviceModal").classList.add("open");
  document.getElementById("deviceModal").setAttribute("aria-hidden","false");
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

const videoGrid = document.getElementById("videoGrid");
const seenVideos = new Set();
videoGrid.innerHTML = devices.flatMap(d => (d.videos||[]).map(v => ({d, v})))
  .filter(({v}) => !seenVideos.has(v[1]) && seenVideos.add(v[1]))
  .map(({d, v}) => {
    const yt = v[1].match(/[?&]v=([\w-]{11})/);
    const thumb = yt ? ` style="background-image:url('https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg')"` : "";
    return `
  <a class="video-card" href="${v[1]}" target="_blank" rel="noopener">
    <div class="video-thumb${yt ? " has-thumb" : ""}"${thumb}><span>▶</span></div>
    <span class="video-tag">${v[2]}</span>
    <h3>${v[0]}</h3>
    <p>${d.name}</p>
  </a>`;
  }).join("");

renderCards();
