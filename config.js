// Admin Configuration Data
// Update these values to change the website content without touching the main HTML/CSS

const siteData = {
    companyName: "Sangeetha Tax Consultancy",
    contactDetails: {
        phone: "+91-9500001755",
        whatsapp: ["9360190776", "9500001755", "9344931755"],
        email: "sangeethataxconsultancy@gmail.com",
        address: "41, Lake View Rd, KK Nagar West, Nesapakkam, Chennai, Tamil Nadu - 600078",
        googleMapEmbedUrl: "https://maps.google.com/maps?q=41,+Lake+View+Rd,+KK+Nagar+West,+Nesapakkam,+Chennai,+Tamil+Nadu+-+600078&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    counters: [
        { id: "clients", count: 1000, suffix: "+", label: "Happy Clients", icon: "fa-solid fa-users-viewfinder" },
        { id: "returns", count: 500, suffix: "+", label: "Returns Filed", icon: "fa-solid fa-file-invoice-dollar" },
        { id: "experience", count: 10, suffix: "+", label: "Years Experience", icon: "fa-solid fa-calendar-check" },
        { id: "satisfaction", count: 99, suffix: "%", label: "Client Satisfaction", icon: "fa-solid fa-ranking-star" }
    ],
    reviews: [
        { name: "Rahul S.", rating: 5, text: "Excellent service and quick response for GST filing!" },
        { name: "Priya M.", rating: 5, text: "Highly professional team, very reliable." },
        { name: "Arun K.", rating: 5, text: "Best tax consultant for startups." }
    ],
    team: [
        { name: "SAKTHI", role: "CEO AND DIRECTOR", photo: "team_sakthi_young.png", description: "Expert in corporate taxation with 10+ years experience." },
        { name: "SANGEETHA", role: "CEO AND DIRECTOR", photo: "team_sangeetha_young.png", description: "Specializes in individual tax and auditing." },
        { name: "SOWMYA SHREE", role: "DIGITAL MARKETING MANAGER", photo: "team_sowmya.png", description: "Driving strategy and outreach to new clients." }
    ],
    services: [
        { 
            title: "Business Registration", 
            icon: "fa-solid fa-building", 
            desc: "Pvt Ltd, LLP, OPC, Partnership, and Sole Proprietorship registrations.",
            subServices: [
                { name: "Pvt Ltd Company Registration", docs: ["PAN & Aadhaar of Directors", "Digital Signature (DSC)", "Memorandum & Articles (MOA/AOA)", "Office EB Bill/NOC", "Director's Proofs"] },
                { name: "LLP Registration Online", docs: ["Partners PAN/Aadhaar", "LLP Agreement Copy", "Address Proof of Office", "NOC from Owner", "Partnership Contribution Detail"] },
                { name: "OPC Registration Online", docs: ["Single Director PAN/Aadhaar", "Nominee Consent (INC-3)", "Digital Signature", "Office Proofs", "Company Name Approval"] },
                { name: "Partnership Firm Registration", docs: ["Partnership Deed (Notarized)", "PAN Cards of Partners", "Aadhaar of Partners", "Address Proof of Business", "Stamp Duty Proof"] },
                { name: "Sole Proprietorship Registration", docs: ["Personal PAN Card", "Aadhaar Card", "Bank Account Details", "Business Address Proof", "MSME/Udyam Registration"] },
                { name: "Indian Subsidiary Company", docs: ["Parent Company Docs", "Director's Passport (Foreign)", "Indian Director proof", "Office EB Bill/NOC", "Apostilled Member List"] }
            ]
        },
        { 
            title: "Statutory Registrations", 
            icon: "fa-solid fa-certificate", 
            desc: "ISO, MSME, IEC, FSSAI, Shop & Establishment, and Digital Signatures.",
            subServices: [
                { name: "ISO Registration Online", docs: ["Company Profile", "Business Scope Document", "Registration Certificate", "Last Audit Report", "Management Details"] },
                { name: "MSME Registration", docs: ["Aadhaar of Promoter", "PAN of Business", "Bank Account Details", "Nature of Business", "Investment/Turnover figures"] },
                { name: "IEC Registration", docs: ["Self-attested PAN", "Cancelled Cheque", "Digital Signature (Class 3)", "Voter ID/Aadhaar", "Authority Letter"] },
                { name: "FSSAI Registration", docs: ["Identity Proof (Aadhaar/PAN)", "Rent Agreement/EB Bill", "Passport Photo", "Food Category Details", "Blueprints of Premises"] },
                { name: "Shop & Establishment License", docs: ["Aadhaar of Proprietor", "Photo of Shop/Office", "Rental Agreement", "Employee Details", "ID Proof for Owner"] },
                { name: "Digital Signature Certificate (DSC)", docs: ["Aadhaar Card", "PAN Card", "Mobile Number & Email", "Live Video/OTP Verification"] }
            ]
        },
        { 
            title: "GST Services", 
            icon: "fa-solid fa-file-invoice", 
            desc: "Online Registration, Monthly/Annual Return Filing, and Advisory support.",
            subServices: [
                { name: "GST Registration Online", docs: ["PAN of Business", "Authorised Signatory Aadhar/Photo", "Bank Statement/Page 1", "EB Bill (Latest)", "NOC/Rent Agreement"] },
                { name: "GST Return Filing", docs: ["Sales Invoices (GSTR-1)", "Purchase Invoices (GSTR-3B)", "Input Tax Credit info", "GST Login Credentials", "Bank Statement"] },
                { name: "GST LUT Filing", docs: ["GST Registration copy", "Letter of Authorization", "Witness Details (Two)", "Bank FD/BG details (if required)"] },
                { name: "GST Advisory Services", docs: ["Current GST details", "Nature of Business queries", "Specific Issue description", "Past filing records"] }
            ]
        },
        { 
            title: "Income Tax Filing", 
            icon: "fa-solid fa-indian-rupee-sign", 
            desc: "ITR Form filings, TDS, PF, and ESI return management.",
            subServices: [
                { name: "ITR-1 (Salaried Individual)", docs: ["Form-16", "PAN & Aadhaar", "Bank Account Details", "Investment Proofs (LIC/PPF)", "Rent Receipts"] },
                { name: "ITR-2/3 (Business/Capital Gains)", docs: ["Profit & Loss Statement", "Bank Statements (1 Year)", "Stock Statement (if any)", "Broker Statement (Capital Gains)", "PAN & Aadhaar"] },
                { name: "TDS Return Filing", docs: ["Deductee Details (PAN/Amount)", "Challan Copies", "Digital Signature", "TAN Details", "Quarterly Transaction record"] }
            ]
        },
        { 
            title: "Accounting & Book Keeping", 
            icon: "fa-solid fa-calculator", 
            desc: "Secretarial Audit, Virtual CFO, Payable/Receivable services, and Tax audits.",
            subServices: [
                { name: "Accounting Services", docs: ["Purchase Bills", "Sales Bills", "Bank Statements", "Petty Cash details", "Journal Entries"] },
                { name: "Tax Audit", docs: ["Trial Balance", "Balance Sheet & P&L", "Fixed Asset Schedule", "GST Returns (1 Year)", "Internal Audit report"] },
                { name: "Virtual CFO Services", docs: ["Current Finance Structure", "Management Goals", "Cash Flow statements", "Budgeting requirements"] }
            ]
        },
        { 
            title: "Company Compliances", 
            icon: "fa-solid fa-scale-balanced", 
            desc: "Annual and Event-based ROC filings, Director changes, and KYC.",
            subServices: [
                { name: "Annual Compliance For Pvt Ltd", docs: ["Audited Financials", "AOC-4 & MGT-7 forms", "Board Resolution copy", "Director's Report", "Attendance Register"] },
                { name: "Director Appointment/Resignation", docs: ["DIR-12 Form info", "DIR-2 Consent", "Affidavit / ID Proof", "Board Resolution", "Resignation Letter"] },
                { name: "Company Name Change", docs: ["New Name Approval (RUN)", "MGT-14 Form", "INC-24 Form", "Articles of Association (Revised)"] }
            ]
        },
        { 
            title: "Intellectual Property", 
            icon: "fa-solid fa-copyright", 
            desc: "Trademark, Patent, Copyright, and Design registrations & renewals.",
            subServices: [
                { name: "Trademark Registration", docs: ["Logo Image (High Res)", "TM-A Form", "Authorisation Letter", "User Affidavit", "Business Category (Class)"] },
                { name: "Copyright Registration", docs: ["Copy of Work (Digital)", "NOC from Creator", "Power of Attorney", "Identity Proof", "Description of Work"] },
                { name: "Patent Registration", docs: ["Technical Specification", "Detailed Drawings", "Claims Document", "Abstract of Innovation", "Authorised Agent details"] }
            ]
        },
        { 
            title: "NGO Registration", 
            icon: "fa-solid fa-hand-holding-heart", 
            desc: "Trust, Society, Section 8, FCRA, and 80G/12A registrations.",
            subServices: [
                { name: "Trust Registration", docs: ["PAN & Aadhaar of Trustees", "Address Proof of Office", "Trust Deed (Draft)", "NOC from Owner", "Rental Agreement"] },
                { name: "80G and 12A Registration", docs: ["NGO Registration copy", "PAN of NGO", "Last 3 Years Audit", "Activity Report", "List of Donors (if any)"] }
            ]
        },
        { 
            title: "RBI & Regulatory", 
            icon: "fa-solid fa-landmark", 
            desc: "NBFC Registration, Micro Finance, Payment Gateways, and LMPC certificates.",
            subServices: [
                { name: "NBFC Registration & Takeover", docs: ["Promoter KYC", "Net Worth Certificate", "Credit Report", "Business Plan", "Experience Certificate"] },
                { name: "Payment Gateway License", docs: ["Company Incorporation", "Technical Infrastructure details", "Net worth proof", "Audit Report", "Director Qualifications"] }
            ]
        },
        { 
            title: "Loan Services", 
            icon: "fa-solid fa-hand-holding-dollar", 
            desc: "End-to-end guidance and processing for Housing Loans, Personal Loans, and Business Mortgages.",
            subServices: [
                { 
                    name: "Housing Loan", 
                    docs: [
                        "Applicant & Co-Applicant PAN and Aadhaar Card",
                        "Last 6 Months Bank Statement",
                        "Last 3 Months Salary Slips & Form 16 (for Salaried)",
                        "Last 2-3 Years ITR with Computation & Financials (for Self-Employed)",
                        "Property Sale Agreement & Parent Deed Documents",
                        "Approved Building Plan & Patta / Chitta / EC"
                    ] 
                },
                { 
                    name: "Personal Loan", 
                    docs: [
                        "PAN Card & Aadhaar Card",
                        "Current Address Proof (Rental Agreement / EB Bill)",
                        "Last 3 Months Salary Slips / Income Proof",
                        "Last 6 Months Bank Statement",
                        "Passport Size Photographs & Company ID"
                    ] 
                },
                { 
                    name: "Mortgage & Business Loan", 
                    docs: [
                        "Business PAN, Registration Certificate & MSME Udyam",
                        "Proprietor / Director PAN & Aadhaar Cards",
                        "Last 2-3 Years Audited Financials & ITR",
                        "Last 12 Months Bank Account Statement",
                        "Property Title Deed, Parent Documents & Valuation Report"
                    ] 
                }
            ]
        },
        { 
            title: "Website, Logo & Digital Marketing", 
            icon: "fa-solid fa-laptop-code", 
            desc: "Professional website development, logo designing, digital marketing & Google Business Profile setup.",
            subServices: [
                { 
                    name: "Website Development", 
                    docs: [
                        "Business Overview & Services/Products Description",
                        "Preferred Domain Name (.com / .in / .org)",
                        "Company Logo & Brand Content/Images",
                        "Official Contact Details & Location Map Info",
                        "Reference Websites or Layout Preferences"
                    ] 
                },
                { 
                    name: "Logo Design & Branding", 
                    docs: [
                        "Company Name & Tagline",
                        "Business Concept & Target Audience",
                        "Preferred Brand Colors & Typography Style",
                        "Reference Design Samples / Inspirations"
                    ] 
                },
                { 
                    name: "Digital Marketing & SEO", 
                    docs: [
                        "Marketing Goals (Lead Generation, Sales, Awareness)",
                        "Target Audience Demographics & Locations",
                        "Existing Social Media Handles (Instagram, Facebook, LinkedIn)",
                        "Monthly Advertising Budget Plan"
                    ] 
                },
                { 
                    name: "Google Business Profile", 
                    docs: [
                        "Exact Business Name & Physical Store/Office Address",
                        "Contact Number & Daily Operating Hours",
                        "Storefront / Signboard & Interior Photos",
                        "Categories & Detailed Services List"
                    ] 
                }
            ]
        },
        { 
            title: "MSTC E-Buyer & Seller Registration", 
            icon: "fa-solid fa-gavel", 
            desc: "Official portal registration, documentation, and profile verification for MSTC E-Buyer and E-Seller accounts.",
            subServices: [
                { 
                    name: "MSTC E-Buyer and Seller Registration", 
                    docs: [
                        "PAN Card of Business / Proprietor",
                        "Aadhaar Card of Authorised Signatory / Partners / Directors",
                        "GST Registration Certificate",
                        "Class-3 Digital Signature Certificate (DSC - Signing & Encryption)",
                        "Cancelled Cheque / Bank Statement",
                        "Board Resolution / Authorisation Letter & Mandate Form"
                    ] 
                }
            ]
        }
    ]
};
