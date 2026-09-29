const devices = [
  {
    id:"traction", name:"Traction (ISIS)", category:"mechanical", label:"Mechanical Therapy",
    image:"assets/traction.jpg",
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
    (!q || `${d.name} ${d.label} ${d.desc} ${d.use}`.toLowerCase().includes(q))
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
videoGrid.innerHTML = devices.slice(0,6).map(d=>`
  <article class="video-card">
    <div class="video-thumb">▶</div>
    <h3>${d.name} — Training Video</h3>
    <p>Video link placeholder. Add the department-approved YouTube link later.</p>
  </article>
`).join("");

renderCards();
