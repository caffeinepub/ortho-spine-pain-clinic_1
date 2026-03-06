export interface ServiceDetail {
  fullDescription: string;
  benefits: [string, string, string];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  Chiropractic: {
    fullDescription:
      "Chiropractic care at Ortho-Spine Pain Clinic focuses on diagnosing and treating mechanical disorders of the musculoskeletal system, especially the spine. Through precise spinal manipulation and adjustment techniques, Dr. Arbaz Shaikh restores proper alignment, relieves nerve pressure, and enhances the body's natural healing ability. This non-invasive approach addresses root causes rather than just symptoms, providing lasting pain relief and improved mobility.",
    benefits: [
      "Immediate relief from acute back and neck pain through targeted spinal adjustments",
      "Restoration of joint mobility and correction of vertebral misalignments",
      "Drug-free, non-surgical approach with no recovery downtime",
    ],
  },
  Osteopathy: {
    fullDescription:
      "Osteopathic treatment takes a holistic approach to health, recognizing the interconnection between the body's structure and its function. At Ortho-Spine Pain Clinic, osteopathic techniques include soft tissue manipulation, joint mobilization, and myofascial release to improve circulation, restore structural balance, and support the body's self-healing mechanisms. It is highly effective for musculoskeletal pain, postural imbalances, and chronic tension patterns.",
    benefits: [
      "Whole-body structural assessment to identify and correct dysfunction at its root",
      "Gentle yet effective treatment suitable for all ages including elderly and post-surgical patients",
      "Improved circulation and lymphatic drainage, reducing inflammation and accelerating recovery",
    ],
  },
  "Back Pain Treatment": {
    fullDescription:
      "Back pain is one of the most common conditions treated at Ortho-Spine Pain Clinic. Our evidence-based back pain program combines manual therapy, targeted exercises, electrotherapy, and postural re-education to eliminate pain, restore functional movement, and prevent recurrence. Dr. Arbaz Shaikh conducts a thorough assessment to identify the underlying cause — whether muscular, disc-related, facet joint, or postural — and designs a personalized treatment plan.",
    benefits: [
      "Comprehensive diagnosis to differentiate between disc, joint, muscular, and postural causes",
      "Progressive exercise rehabilitation to strengthen core and stabilizing muscles",
      "Long-term prevention strategies including ergonomic advice and lifestyle modification",
    ],
  },
  "Knee Pain Management": {
    fullDescription:
      "Knee pain can arise from ligament injuries, meniscal tears, osteoarthritis, patellofemoral syndrome, or overuse. Our knee pain management program uses a combination of manual therapy, therapeutic exercises, taping techniques, electrotherapy, and gait analysis to reduce pain, restore knee function, and prevent further degeneration. Whether you're an athlete or an elderly patient with arthritis, our tailored approach delivers measurable results.",
    benefits: [
      "Accurate biomechanical analysis to identify contributing factors to knee pain",
      "Strengthening of quadriceps, hamstrings, and hip stabilizers to offload the joint",
      "Evidence-based rehabilitation reducing need for surgery in many conditions",
    ],
  },
  "Shoulder Disorders": {
    fullDescription:
      "Shoulder disorders including rotator cuff tears, frozen shoulder (adhesive capsulitis), impingement syndrome, and shoulder instability require specialized rehabilitation. Our shoulder treatment program restores full range of motion, eliminates pain, and rebuilds strength through targeted manual therapy, joint mobilization, progressive resistance exercises, and ultrasound therapy. We treat both acute injuries and chronic shoulder conditions with precision.",
    benefits: [
      "Restoration of full shoulder range of motion through joint mobilization and stretching",
      "Rotator cuff strengthening to stabilize the shoulder and prevent re-injury",
      "Tailored programs for frozen shoulder achieving 90%+ success without surgery",
    ],
  },
  "Neck Pain & Cervical": {
    fullDescription:
      "Cervical spine disorders — including cervical spondylosis, disc herniation, torticollis, and tension-related neck pain — are treated with a multi-modal approach at our clinic. Treatment includes cervical traction, manual therapy, therapeutic exercises, postural correction, dry needling, and electrotherapy. We address both the immediate pain and the underlying biomechanical factors contributing to cervical dysfunction.",
    benefits: [
      "Cervical traction and mobilization to relieve disc pressure and nerve root compression",
      "Deep neck flexor strengthening to restore cervical stability and reduce recurrence",
      "Ergonomic assessment and correction for work-related neck pain",
    ],
  },
  "Sports Injury Rehab": {
    fullDescription:
      "Sports injury rehabilitation at Ortho-Spine Pain Clinic follows a structured return-to-sport protocol designed to heal the injury, restore full function, and prevent re-injury. We treat sprains, strains, ligament injuries, muscle tears, and overuse syndromes using manual therapy, sports-specific exercises, proprioception training, and performance optimization techniques. Dr. Shaikh's sports rehab background ensures athletes return stronger than before.",
    benefits: [
      "Sport-specific rehabilitation protocols designed to accelerate return to performance",
      "Proprioception and neuromuscular training to prevent recurrence and improve agility",
      "Pre-injury baseline assessment and post-injury performance monitoring",
    ],
  },
  "Post-Surgical Rehab": {
    fullDescription:
      "Post-surgical rehabilitation is critical for optimal recovery following orthopedic surgeries including knee replacement, hip replacement, spinal surgery, ACL reconstruction, and rotator cuff repair. Our structured post-operative physiotherapy begins early — often within 24–72 hours — to minimize stiffness, prevent complications, restore mobility, and rebuild strength. Each protocol is coordinated with your surgical team for safe and effective recovery.",
    benefits: [
      "Early mobilization to prevent stiffness, DVT, and post-operative complications",
      "Progressive strength and functional rehabilitation aligned with surgical protocol timelines",
      "Significantly improved long-term outcomes compared to non-guided recovery",
    ],
  },
  "Sciatica & Disc Problems": {
    fullDescription:
      "Sciatica and intervertebral disc problems (disc bulge, herniation, degeneration) cause radiating pain, numbness, and weakness in the legs that can be severely debilitating. Our conservative physiotherapy approach includes neural mobilization, McKenzie exercises, lumbar traction, core stabilization, and postural correction. The majority of patients achieve significant improvement without surgery when treated with structured physiotherapy.",
    benefits: [
      "Neural mobilization and traction to reduce disc pressure and relieve nerve root pain",
      "McKenzie method exercises for centralization of symptoms and disc repositioning",
      "Core stabilization training to protect the disc and prevent future recurrence",
    ],
  },
  Electrotherapy: {
    fullDescription:
      "Electrotherapy uses controlled electrical currents to promote healing, reduce pain, decrease inflammation, and stimulate muscle function. At Ortho-Spine Pain Clinic, we utilize TENS (Transcutaneous Electrical Nerve Stimulation), IFT (Interferential Therapy), ultrasound therapy, and NMES (Neuromuscular Electrical Stimulation). These modalities are used as adjuncts to manual therapy and exercise for superior pain control and tissue healing.",
    benefits: [
      "TENS and IFT provide immediate, drug-free pain relief for acute and chronic conditions",
      "Ultrasound therapy accelerates soft tissue healing and reduces scar tissue formation",
      "NMES re-educates muscle activation patterns after surgery or nerve injury",
    ],
  },
  "Dry Needling": {
    fullDescription:
      "Dry needling is an evidence-based physiotherapy technique that involves inserting fine, sterile needles into myofascial trigger points — hyperirritable knots in muscle tissue — to release tension, restore blood flow, reduce pain, and improve function. It is distinct from acupuncture in its scientific basis and targets specific musculoskeletal dysfunction. Dr. Shaikh uses dry needling as part of a comprehensive treatment plan for superior outcomes.",
    benefits: [
      "Immediate release of painful trigger points and chronic muscle tension patterns",
      "Effective for neck pain, back pain, tennis elbow, plantar fasciitis, and fibromyalgia",
      "Stimulates natural healing response, improving circulation and reducing inflammation",
    ],
  },
  "Neurological Physiotherapy": {
    fullDescription:
      "Neurological physiotherapy addresses movement and function impairments resulting from conditions affecting the brain, spinal cord, and peripheral nervous system. We provide rehabilitation for stroke survivors, Parkinson's disease, multiple sclerosis, Guillain-Barré syndrome, and spinal cord injuries. Using neuroplasticity principles, task-specific training, gait rehabilitation, and balance retraining, we help patients regain independence and maximize functional recovery.",
    benefits: [
      "Neuroplasticity-based training to rewire the brain and restore motor function",
      "Gait rehabilitation and balance retraining to reduce fall risk and improve mobility",
      "Functional independence training tailored to each patient's neurological condition",
    ],
  },
  "Postural Correction": {
    fullDescription:
      "Poor posture is a root cause of chronic neck pain, back pain, headaches, and fatigue in today's sedentary workforce. Our postural correction program involves thorough posture analysis, identification of muscle imbalances, targeted stretching and strengthening, ergonomic assessment, and habit retraining. Whether you're dealing with forward head posture, kyphosis, scoliosis, or tech neck, we design a practical correction program that delivers lasting improvements.",
    benefits: [
      "Comprehensive postural analysis using clinical assessment and biomechanical observation",
      "Targeted exercise program to correct muscle imbalances causing poor posture",
      "Ergonomic and lifestyle advice to maintain postural corrections at work and home",
    ],
  },
  "Pediatric Physiotherapy": {
    fullDescription:
      "Pediatric physiotherapy addresses developmental, neurological, and musculoskeletal conditions in infants, children, and adolescents. We treat conditions including cerebral palsy, developmental delays, torticollis, flat feet, scoliosis, and sports injuries in young athletes. Our child-friendly, play-based approach makes therapy engaging and effective, with family education to ensure progress continues at home.",
    benefits: [
      "Child-friendly treatment approach that makes therapy positive and engaging",
      "Early intervention for developmental delays improving long-term outcomes significantly",
      "Family education and home exercise programs to maximize therapeutic progress",
    ],
  },
  "Geriatric Physiotherapy": {
    fullDescription:
      "Geriatric physiotherapy is specialized care for elderly patients managing the physical challenges of aging including osteoporosis, arthritis, balance disorders, post-fracture rehabilitation, and age-related muscle weakness (sarcopenia). Our senior-focused programs improve strength, balance, flexibility, and functional independence while reducing fall risk. We adapt every treatment to each patient's capacity and comfort with patience and compassion.",
    benefits: [
      "Fall prevention programs with proven 40-60% reduction in fall risk",
      "Gentle strength and flexibility training adapted to age-related physical limitations",
      "Improved functional independence for daily activities like walking, climbing stairs, and dressing",
    ],
  },
  "Manual Therapy": {
    fullDescription:
      "Manual therapy is a hands-on physiotherapy approach using skilled joint mobilization, manipulation, soft tissue techniques, and neural mobilization to restore movement, reduce pain, and normalize tissue function. Dr. Arbaz Shaikh is a certified manual therapist who uses evidence-based Maitland, Mulligan, and Kaltenborn techniques to address joint stiffness, muscle tightness, and restricted motion throughout the body.",
    benefits: [
      "Direct joint mobilization to restore full range of motion and reduce articular stiffness",
      "Soft tissue techniques to release fascial restrictions, trigger points, and scar tissue",
      "Immediate and measurable improvement in mobility and pain levels within each session",
    ],
  },
  "Cupping Therapy": {
    fullDescription:
      "Cupping therapy is an ancient therapeutic technique modernized with evidence-based application at Ortho-Spine Pain Clinic. By creating negative pressure through specially designed cups placed on the skin, cupping promotes blood flow, releases myofascial tension, reduces pain, and enhances recovery. It is particularly effective for chronic muscle tightness, back pain, shoulder tension, and athletes seeking faster recovery between training sessions.",
    benefits: [
      "Rapidly decompresses fascial layers, releasing deep muscle tension not reachable by pressure",
      "Increases local blood circulation, delivering oxygen and nutrients to healing tissues",
      "Effective adjunct to physiotherapy for chronic pain, sports recovery, and fibromyalgia",
    ],
  },
  "Home Visit Physiotherapy": {
    fullDescription:
      "Home visit physiotherapy brings professional physiotherapy care directly to your doorstep in Surat. This service is designed for patients who are unable to travel due to severe pain, post-surgical immobility, neurological conditions, elderly care needs, or logistical constraints. Dr. Arbaz Shaikh or our trained therapist conducts a complete assessment and provides all necessary treatments at your home with portable professional equipment.",
    benefits: [
      "Professional physiotherapy care delivered at your home for maximum comfort and convenience",
      "Full assessment and treatment available including manual therapy, exercises, and portable electrotherapy",
      "Ideal for post-operative patients, elderly individuals, and those with severe mobility limitations",
    ],
  },
  "Migraine & Headache Relief": {
    fullDescription:
      "Migraine, sinus headache, tension headache, and cervicogenic headache respond exceptionally well to physiotherapy. At Ortho-Spine Pain Clinic, Dr. Arbaz Shaikh uses a combination of cervical spine mobilization, trigger point release, suboccipital muscle therapy, postural correction, and biofeedback-based relaxation techniques to reduce headache frequency, intensity, and duration. This drug-complementary approach addresses the root musculoskeletal causes contributing to chronic headache syndromes.",
    benefits: [
      "Cervical mobilization and suboccipital release to reduce tension headache and cervicogenic migraine triggers",
      "Sinus headache relief through facial pressure point therapy and drainage facilitation techniques",
      "Long-term reduction in headache frequency through postural correction and lifestyle guidance",
    ],
  },
  "Flexion Distraction Therapy": {
    fullDescription:
      "Flexion distraction therapy is a highly specialized, non-surgical spinal decompression technique performed on a purpose-built motorized table that gently distracts and flexes the spine. This technique is among the most effective conservative treatments for disc herniation, sciatica, spinal stenosis, and lumbar facet syndrome. The rhythmic pumping motion reduces intradiscal pressure, draws herniated disc material away from nerve roots, and restores normal spinal mechanics — all without pain or force.",
    benefits: [
      "Reduces intradiscal pressure to relieve nerve root compression causing sciatica and radiating pain",
      "Effective for disc herniation, spinal stenosis, and failed back surgery syndrome",
      "Gentle, zero-force technique safe for all ages including elderly and post-surgical patients",
    ],
  },
  "Spine Adjustor Tool": {
    fullDescription:
      "The Spine Adjustor is a computerized, instrument-assisted spinal adjustment device that delivers precise, controlled impulses to specific spinal segments. Unlike manual adjustment, the Spine Adjustor provides measurable, reproducible force with real-time feedback, making it exceptionally safe and effective for patients of all ages. It is particularly suited for patients with osteoporosis, post-surgical spines, anxiety around manual manipulation, or those requiring very targeted segmental adjustments.",
    benefits: [
      "Precisely controlled spinal adjustments without the cracking sound of traditional manipulation",
      "Safe for osteoporotic, post-surgical, and pediatric/elderly spines requiring gentle care",
      "Computer-assisted feedback ensures accurate vertebral targeting and optimal treatment force",
    ],
  },
  "Air Compression Therapy": {
    fullDescription:
      "Air compression therapy (pneumatic compression) uses inflatable sleeves or boots that apply sequential, graduated pressure to the limbs to improve venous and lymphatic circulation. At Ortho-Spine Pain Clinic, this therapy is used for post-injury swelling, lymphedema, deep vein thrombosis prevention, peripheral artery disease rehabilitation, and sports recovery. The rhythmic compression mimics the natural muscle pump, dramatically reducing edema and accelerating tissue healing.",
    benefits: [
      "Rapid reduction of limb edema and post-traumatic swelling within initial treatment sessions",
      "Lymphedema management and post-surgical swelling control for upper and lower limbs",
      "Accelerates sports recovery by flushing metabolic waste products and improving nutrient delivery",
    ],
  },
};
