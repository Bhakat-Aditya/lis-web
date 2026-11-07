export const pricingPlans = {
  lis: [
    {
      id: "starter",
      name: "Starter",
      badge: "Best for New Labs",
      popular: false,
      firstYearPrice: 5999,
      renewalPrice: 2999,
      monthlyEquivalent: "₹250",
      description: "Designed for newly established pathology labs launching their modern digital workflow.",
      patientLimit: "Up to 3,000 Patient Entries",
      usersIncluded: "1 User License Included",
      features: [
        "Patient Registration & UHID Generation",
        "Unlimited Pathology Test Master Setup",
        "Sample Collection & Basic Barcoding",
        "Formula Engine & Normal Reference Ranges",
        "Standard PDF Report Generation",
        "Cash & Digital Billing Summary",
        "Daily Financial Collections Dashboard",
        "Secure Automated Cloud Backups",
        "Free System Upgrades & Patches",
        "Standard Email & Phone Support"
      ],
      notIncluded: [
        "Automated WhatsApp Report Delivery",
        "Doctor & Agent Commission Management",
        "Patient Online Verification Portal",
        "Multi-Branch Central Control"
      ],
      addUserCost: "₹2,000 First Yr (Renewal ₹1,000)",
      ctaText: "Get Started Now",
      ctaVariant: "outline"
    },
    {
      id: "growth",
      name: "Growth",
      badge: "⭐ Most Popular Choice",
      popular: true,
      firstYearPrice: 9999,
      renewalPrice: 4999,
      monthlyEquivalent: "₹416",
      description: "Ideal for growing diagnostic centres requiring high-speed WhatsApp reporting, doctor commissions, and QR payments.",
      patientLimit: "Up to 15,000 Patient Entries",
      usersIncluded: "2 User Licenses Included",
      features: [
        "Everything in Starter, PLUS:",
        "Automated WhatsApp Report Delivery (PDF)",
        "Instant Email Report Dispatch",
        "Dynamic UPI QR Code Payment Collection",
        "Auto-Lock Download on Unpaid Dues",
        "Doctor & Collection Agent Commission Engine",
        "Doctor Commission Payout Statements",
        "Branded Patient Online Verification Portal",
        "Real-Time Executive Analytics Dashboard",
        "Custom Pathology Header & Digital Signatures",
        "Priority 24/7 WhatsApp & Phone Support"
      ],
      notIncluded: [
        "Multi-Branch Central Hub",
        "Franchise & B2B Rate Lists"
      ],
      addUserCost: "₹2,499 First Yr (Renewal ₹1,249)",
      ctaText: "Claim Growth Plan",
      ctaVariant: "primary"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Chains & Franchises",
      popular: false,
      firstYearPrice: 11999,
      renewalPrice: 5999,
      monthlyEquivalent: "₹500",
      description: "Engineered for diagnostic chains, high-volume laboratories, and franchise collection center networks.",
      patientLimit: "Unlimited Patient Entries",
      usersIncluded: "3 Users Included (1+2 Free)",
      features: [
        "Everything in Growth, PLUS:",
        "Unlimited Patient Registration & Entries",
        "Multi-Branch Central HQ Control Dashboard",
        "B2B Franchise & Collection Center Module",
        "Franchise-Wise Custom Price Lists",
        "Franchise Credit Limit & Due Tracking",
        "Department-Wise Role & Permission Security",
        "Complete System Audit & Activity Logs",
        "Dedicated Account Manager & Rapid Onboarding",
        "Custom Report Format Tailoring",
        "VIP Priority Support with 1-hr SLA"
      ],
      notIncluded: [],
      addUserCost: "₹3,000 First Yr (Renewal ₹1,500)",
      ctaText: "Contact Enterprise Sales",
      ctaVariant: "secondary"
    }
  ],
  opd: [
    {
      id: "opd-standalone",
      name: "OPD Clinic",
      badge: "Clinics & Polyclinics",
      popular: false,
      firstYearPrice: 6999,
      renewalPrice: 3499,
      monthlyEquivalent: "₹291",
      description: "Complete cloud-based outpatient clinic and doctor consultation management system.",
      patientLimit: "Unlimited Patient Registrations",
      usersIncluded: "Unlimited Doctors & Staff",
      features: [
        "Unlimited Patient Registrations & UHID",
        "Unlimited Doctor Profiles & Consultation Fees",
        "Doctor Weekly/Monthly Scheduling",
        "Live Doctor-Wise Token Queue Screen",
        "Structured Digital Prescription (Rx) Generator",
        "Chief Complaints, Vitals & Dosage Templates",
        "OPD Consultation Billing & Digital Receipts",
        "Doctor Fee Share Split & Settlement Ledger",
        "Patient Consultation History & Follow-ups",
        "Automated Cloud Backup & Updates"
      ],
      notIncluded: [
        "Integrated Pathology Laboratory Workflow",
        "Direct One-Click Diagnostic Orders"
      ],
      addUserCost: "Included (Unlimited staff accounts)",
      ctaText: "Get OPD System",
      ctaVariant: "outline"
    },
    {
      id: "opd-lab-combo",
      name: "Enterprise OPD + Lab",
      badge: "⭐ Complete Healthcare Suite",
      popular: true,
      firstYearPrice: 8499,
      renewalPrice: 4499,
      monthlyEquivalent: "₹374",
      description: "The complete unified suite uniting OPD Clinic Consultations and Pathology Laboratory under one patient UHID.",
      patientLimit: "Unlimited Patients & Consultations",
      usersIncluded: "All-Inclusive Staff & Doctors",
      features: [
        "Complete OPD Management + Complete Pathology LIS",
        "Single Unified Patient History (Rx + Lab Reports)",
        "Shareable Online Patient Booking Link (No App Required)",
        "Instant Slot Confirmation for Patients via Web",
        "Doctor Prescribes -> One-Click Lab Sample Generation",
        "QR Payment Collection & Dynamic Receipts",
        "WhatsApp Prescriptions & Lab Report Delivery",
        "Doctor Referral & Consultation Earnings Ledger",
        "Multi-Department Access & Audit Security",
        "Priority VIP Technical Onboarding"
      ],
      notIncluded: [],
      addUserCost: "Included",
      ctaText: "Get Complete Suite",
      ctaVariant: "primary"
    }
  ]
};

export const comparisonTable = [
  {
    category: "Patient Registration & Workflow",
    items: [
      { feature: "Patient Entries Included", starter: "3,000", growth: "15,000", enterprise: "Unlimited" },
      { feature: "Unique UHID Generation", starter: true, growth: true, enterprise: true },
      { feature: "Smart Patient History Lookup", starter: true, growth: true, enterprise: true },
      { feature: "Thermal & Laser Receipt Printing", starter: true, growth: true, enterprise: true },
      { feature: "Patient Online Verification Portal", starter: false, growth: true, enterprise: true }
    ]
  },
  {
    category: "Pathology Tests & Reporting",
    items: [
      { feature: "Unlimited Test Master Setup", starter: true, growth: true, enterprise: true },
      { feature: "Formula Calculation Engine (CBC/Lipid/eGFR)", starter: true, growth: true, enterprise: true },
      { feature: "Custom Biological Reference Ranges", starter: true, growth: true, enterprise: true },
      { feature: "Digital Pathologist Signatures", starter: true, growth: true, enterprise: true },
      { feature: "QR Code Authenticity Verification", starter: true, growth: true, enterprise: true },
      { feature: "NABL Ready Report Formats", starter: true, growth: true, enterprise: true }
    ]
  },
  {
    category: "Communication & Delivery",
    items: [
      { feature: "Automated WhatsApp PDF Report Delivery", starter: false, growth: true, enterprise: true },
      { feature: "Direct Email Report Dispatch", starter: false, growth: true, enterprise: true },
      { feature: "Auto-Lock Report on Pending Dues", starter: false, growth: true, enterprise: true },
      { feature: "SMS Notification Integration", starter: true, growth: true, enterprise: true }
    ]
  },
  {
    category: "Billing, Doctors & Business",
    items: [
      { feature: "Integrated Cash/Card/UPI Billing", starter: true, growth: true, enterprise: true },
      { feature: "On-the-Spot UPI QR Generation", starter: false, growth: true, enterprise: true },
      { feature: "Doctor & Agent Commission Engine", starter: false, growth: true, enterprise: true },
      { feature: "Doctor Payout Ledgers & Settlement", starter: false, growth: true, enterprise: true },
      { feature: "Executive Revenue Analytics Dashboard", starter: true, growth: true, enterprise: true },
      { feature: "Multi-Branch Management", starter: false, starterText: "Add-on", growth: false, growthText: "Add-on", enterprise: true }
    ]
  },
  {
    category: "Security & Cloud Infrastructure",
    items: [
      { feature: "Automatic Daily Cloud Backup", starter: true, growth: true, enterprise: true },
      { feature: "AES-256 Military Encryption", starter: true, growth: true, enterprise: true },
      { feature: "Role-Based Access Control", starter: "Basic", growth: "Standard", enterprise: "Advanced Granular" },
      { feature: "Multi-Device Sync (PC/Tablet/Mobile)", starter: true, growth: true, enterprise: true },
      { feature: "Dedicated Support Response", starter: "Within 4 Hours", growth: "Priority (1 Hour)", enterprise: "VIP Dedicated Manager" }
    ]
  }
];

export const pricingFaqs = [
  {
    q: "Is there any hidden installation or server setup cost?",
    a: "None at all! LabExpert is 100% cloud-based. You do not need to buy expensive in-house servers, maintain local network infrastructure, or pay installation fees. Just log in from your browser on any computer, laptop, tablet, or phone."
  },
  {
    q: "What happens if I exceed my patient entry limit during the year?",
    a: "You can seamlessly top-up additional patient entries at just ₹2 per entry (minimum pack of 1,000 entries) or upgrade to the next tier at any time by paying just the prorated difference."
  },
  {
    q: "How does the annual renewal work? Are prices fixed?",
    a: "Our renewal fees are clearly displayed on every plan upfront (e.g. only ₹2,999/year for Starter, ₹4,999/year for Growth). There are never any surprise price hikes. Your renewal covers secure cloud hosting, daily automated backups, 99.99% uptime, and continuous feature updates."
  },
  {
    q: "Can I add more staff or doctor logins later?",
    a: "Yes! You can add extra user logins at any time. For Starter it is ₹2,000 (renewal ₹1,000), for Growth it is ₹2,499 (renewal ₹1,249), and Enterprise includes 3 logins with additional users at ₹3,000."
  },
  {
    q: "Can I migrate my existing patient and test rate list from desktop software?",
    a: "Yes! Our technical team provides free guided data migration. We can import your existing doctor master, test rate lists, and past patient data via Excel/CSV during your onboarding."
  }
];

