export const workflowSteps = [
  {
    step: "01",
    title: "Instant Patient Registration",
    subtitle: "Takes under 60 seconds",
    description: "Front desk inputs demographic details or scans returning patient UHID. Referring doctor, sample collection type, and diagnostic tests are selected with auto-pricing.",
    badges: ["Unique UHID", "Smart Auto-Suggest", "Past History"],
    icon: "UserPlus",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    title: "Smart Billing & QR UPI Collection",
    subtitle: "Eliminate payment queues",
    description: "Generate professional GST or non-GST bills. Display dynamic on-screen UPI QR code for direct scanning via Google Pay, PhonePe, or Paytm.",
    badges: ["Dynamic UPI QR", "Due Balance Tracker", "Thermal Print"],
    icon: "CreditCard",
    color: "from-cyan-500 to-teal-500"
  },
  {
    step: "03",
    title: "Instant WhatsApp Status Alert",
    subtitle: "Keep patients reassured",
    description: "Patient instantly receives a personalized WhatsApp receipt with a live link to track real-time test progress without calling the lab.",
    badges: ["WhatsApp Confirmation", "Live Tracking Link", "Zero SMS Fee"],
    icon: "MessageSquare",
    color: "from-emerald-500 to-green-600"
  },
  {
    step: "04",
    title: "Sample Barcoding & Routing",
    subtitle: "Zero sample mix-ups",
    description: "Print standard barcode labels for sample tubes (EDTA, Serum, Fluoride). Automatically route specimens to Biochemistry, Hematology, or Microbiology benches.",
    badges: ["Barcode Generation", "Tube Color Indicators", "Department Logs"],
    icon: "Barcode",
    color: "from-indigo-500 to-purple-600"
  },
  {
    step: "05",
    title: "Intelligent Result Entry & Formulas",
    subtitle: "Automated calculations",
    description: "Technicians enter test values. Automated calculation formulas compute differential counts, lipid ratios, and eGFR. Panic values highlight in red.",
    badges: ["Formula Engine", "Abnormal Highlighters", "Preset Normal Ranges"],
    icon: "Calculator",
    color: "from-amber-500 to-orange-500"
  },
  {
    step: "06",
    title: "Digital Sign & Pathologist Approval",
    subtitle: "Approve from lab or mobile",
    description: "Pathologists review results against historical trends, apply digital signatures with one tap, and append secure QR verification seals.",
    badges: ["Digital Signatures", "Anti-Tamper QR", "Multi-Level Signoff"],
    icon: "FileCheck",
    color: "from-teal-500 to-blue-600"
  },
  {
    step: "07",
    title: "Instant WhatsApp Delivery & Dues Gate",
    subtitle: "Effortless report dispatch",
    description: "The moment reports are approved, a branded PDF is dispatched to the patient and doctor's WhatsApp. If dues exist, patients pay online to unlock the PDF.",
    badges: ["Branded WhatsApp PDF", "Auto-Collect Dues", "24/7 Portal Access"],
    icon: "SendCheck",
    color: "from-emerald-600 to-teal-700"
  }
];

export const comparisonData = {
  traditional: [
    { title: "Local Desktop Software Crashes", desc: "Data stored on a single hard disk. If Windows corrupts or PC breaks down, all patient reports are lost." },
    { title: "Manual Paper Report Distribution", desc: "Patients wait hours in crowded waiting rooms or staff spend hours sending manual emails and WhatsApps." },
    { title: "Messy Doctor Commission Ledgers", desc: "Manual notebooks and Excel sheets lead to frequent calculation disputes and delayed payouts with referring doctors." },
    { title: "Zero Real-Time Multi-Branch Visibility", desc: "Branch data stays isolated. Lab owners must call each branch every evening to reconcile cash collections." },
    { title: "Expensive Hardware & Annual AMC", desc: "Demands dedicated in-house servers, expensive local IT maintenance, and paid AMC upgrade fees." }
  ],
  labexpert: [
    { title: "100% Encrypted Cloud High Availability", desc: "Automatic daily AWS snapshots with AES-256 encryption. Access securely from laptop, tablet, or phone anytime." },
    { title: "Automated WhatsApp & Email Report Dispatch", desc: "Reports are dispatched immediately upon pathologist sign-off, saving 90% front-desk call burden." },
    { title: "Automated Doctor Commission Engine", desc: "Pre-set percentage or test-wise commissions. Instant payout statements and ledger transparency." },
    { title: "Centralized Real-Time HQ Control", desc: "Monitor daily revenues, pending tests, and staff productivity across all branches on one screen." },
    { title: "Zero In-House Servers or AMC Headaches", desc: "Works straight in your web browser. Free continuous software upgrades and priority customer support." }
  ]
};

