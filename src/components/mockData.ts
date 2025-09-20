import { type Scheme } from "./SchemeCard";
import { type UserData } from "./UserInputForm";

export const mockSchemes: Scheme[] = [
  {
    id: "1",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    nameHi: "प्रधानमंत्री किसान सम्मान निधि योजना",
    description: "Financial support to small and marginal farmers across the country. Provides ₹6,000 per year in three equal installments.",
    descriptionHi: "देश भर के छोटे और सीमांत किसानों को वित्तीय सहायता। तीन समान किस्तों में प्रति वर्ष ₹6,000 प्रदान करता है।",
    department: "Ministry of Agriculture & Farmers Welfare",
    eligibilityMatch: 95,
    benefits: [
      "₹6,000 per year direct cash transfer",
      "Paid in three installments of ₹2,000 each",
      "No application fee required",
      "Direct bank transfer"
    ],
    benefitsHi: [
      "प्रति वर्ष ₹6,000 प्रत्यक्ष नकद हस्तांतरण",
      "₹2,000 की तीन किस्तों में भुगतान",
      "कोई आवेदन शुल्क आवश्यक नहीं",
      "प्रत्यक्ष बैंक हस्तांतरण"
    ],
    category: "Financial Assistance",
    targetGroup: ["Farmers", "Small Farmers", "Marginal Farmers"],
    maxIncome: 200000,
    minAge: 18,
    applicationSteps: [
      "Visit the PM-KISAN official website or nearest Common Service Center",
      "Fill the registration form with accurate details",
      "Upload required documents including Aadhaar, Bank details, Land records",
      "Submit the application and note down the reference number",
      "Track application status online using reference number"
    ],
    applicationStepsHi: [
      "PM-KISAN आधिकारिक वेबसाइट या निकटतम कॉमन सर्विस सेंटर पर जाएं",
      "सटीक विवरण के साथ पंजीकरण फॉर्म भरें",
      "आधार, बैंक विवरण, भूमि रिकॉर्ड सहित आवश्यक दस्तावेज अपलोड करें",
      "आवेदन जमा करें और संदर्भ संख्या नोट करें",
      "संदर्भ संख्या का उपयोग करके ऑनलाइन आवेदन स्थिति को ट्रैक करें"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "Bank Account Details",
      "Land Ownership Documents",
      "Mobile Number",
      "Passport Size Photo"
    ],
    applicationUrl: "https://pmkisan.gov.in/"
  },
  {
    id: "2",
    name: "Ayushman Bharat - PM-JAY",
    nameHi: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
    description: "World's largest health insurance scheme providing coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    descriptionHi: "द्वितीयक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का कवरेज प्रदान करने वाली दुनिया की सबसे बड़ी स्वास्थ्य बीमा योजना।",
    department: "Ministry of Health and Family Welfare",
    eligibilityMatch: 88,
    benefits: [
      "₹5 lakh per family per year coverage",
      "Cashless treatment at empanelled hospitals",
      "Coverage for pre and post-hospitalization",
      "No restrictions on family size and age",
      "Coverage across India"
    ],
    benefitsHi: [
      "प्रति परिवार प्रति वर्ष ₹5 लाख का कवरेज",
      "सूचीबद्ध अस्पतालों में कैशलेस उपचार",
      "अस्पताल में भर्ती से पहले और बाद का कवरेज",
      "परिवार के आकार और उम्र पर कोई प्रतिबंध नहीं",
      "पूरे भारत में कवरेज"
    ],
    category: "Healthcare",
    targetGroup: ["Low Income Families", "Rural Population", "Urban Poor"],
    maxIncome: 120000,
    applicationSteps: [
      "Check eligibility on the official PM-JAY website",
      "Visit nearest Common Service Center with required documents",
      "Get your family verified for SECC database inclusion",
      "Receive your Ayushman Bharat Golden Card",
      "Use the card at any empanelled hospital for cashless treatment"
    ],
    applicationStepsHi: [
      "आधिकारिक PM-JAY वेबसाइट पर पात्रता जांचें",
      "आवश्यक दस्तावेजों के साथ निकटतम कॉमन सर्विस सेंटर पर जाएं",
      "SECC डेटाबेस में शामिल करने के लिए अपने परिवार का सत्यापन कराएं",
      "अपना आयुष्मान भारत गोल्डन कार्ड प्राप्त करें",
      "कैशलेस उपचार के लिए किसी भी सूचीबद्ध अस्पताल में कार्ड का उपयोग करें"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "Ration Card",
      "Mobile Number",
      "SECC Family ID",
      "Bank Account Details"
    ],
    applicationUrl: "https://pmjay.gov.in/"
  },
  {
    id: "3",
    name: "Mahatma Gandhi NREGA",
    nameHi: "महात्मा गांधी नरेगा योजना",
    description: "Guaranteed 100 days of wage employment in rural areas to enhance livelihood security and create durable assets.",
    descriptionHi: "आजीविका सुरक्षा बढ़ाने और टिकाऊ संपत्ति बनाने के लिए ग्रामीण क्षेत्रों में 100 दिनों के मजदूरी रोजगार की गारंटी।",
    department: "Ministry of Rural Development",
    eligibilityMatch: 92,
    benefits: [
      "Guaranteed 100 days of employment per household",
      "Minimum wage as per state norms",
      "Work within 5km radius of village",
      "Direct wage payment to bank account",
      "Unemployment allowance if work not provided"
    ],
    benefitsHi: [
      "प्रति परिवार 100 दिन के रोजगार की गारंटी",
      "राज्य के मानदंडों के अनुसार न्यूनतम मजदूरी",
      "गांव के 5 किमी के दायरे में काम",
      "बैंक खाते में प्रत्यक्ष मजदूरी भुगतान",
      "काम नहीं मिलने पर बेरोजगारी भत्ता"
    ],
    category: "Employment",
    targetGroup: ["Rural Households", "Unskilled Workers", "Daily Wage Laborers"],
    minAge: 18,
    applicationSteps: [
      "Apply for Job Card at Gram Panchayat office",
      "Submit application with required documents",
      "Get Job Card issued within 15 days",
      "Apply for work at least 14 days in advance",
      "Receive work allocation within 15 days of application"
    ],
    applicationStepsHi: [
      "ग्राम पंचायत कार्यालय में जॉब कार्ड के लिए आवेदन करें",
      "आवश्यक दस्तावेजों के साथ आवेदन जमा करें",
      "15 दिनों के भीतर जॉब कार्ड जारी कराएं",
      "कम से कम 14 दिन पहले काम के लिए आवेदन करें",
      "आवेदन के 15 दिनों के भीतर कार्य आवंटन प्राप्त करें"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "Bank Account Details",
      "Passport Size Photo",
      "Address Proof",
      "Age Proof"
    ],
    applicationUrl: "https://nrega.nic.in/"
  },
  {
    id: "4",
    name: "Pradhan Mantri Ujjwala Yojana",
    nameHi: "प्रधानमंत्री उज्ज्वला योजना",
    description: "Provides LPG connections to women from Below Poverty Line (BPL) households to ensure clean cooking fuel and reduce health hazards.",
    descriptionHi: "स्वच्छ खाना पकाने का ईंधन सुनिश्चित करने और स्वास्थ्य खतरों को कम करने के लिए गरीबी रेखा से नीचे (BPL) परिवारों की महिलाओं को LPG कनेक्शन प्रदान करता है।",
    department: "Ministry of Petroleum and Natural Gas",
    eligibilityMatch: 78,
    benefits: [
      "Free LPG connection worth ₹1,600",
      "EMI facility for purchase of stove and refill",
      "Priority to SC/ST, PMAY beneficiaries",
      "Clean cooking fuel for better health",
      "Subsidized refill cylinders"
    ],
    benefitsHi: [
      "₹1,600 मूल्य का मुफ्त LPG कनेक्शन",
      "स्टोव और रिफिल खरीदने के लिए EMI सुविधा",
      "SC/ST, PMAY लाभार्थियों को प्राथमिकता",
      "बेहतर स्वास्थ्य के लिए स्वच्छ खाना पकाने का ईंधन",
      "सब्सिडी युक्त रिफिल सिलेंडर"
    ],
    category: "Social Welfare",
    targetGroup: ["BPL Women", "Rural Women", "SC/ST Women"],
    maxIncome: 100000,
    minAge: 18,
    applicationSteps: [
      "Visit nearest LPG distributor with required documents",
      "Fill the Ujjwala application form (KYC form)",
      "Submit documents for verification",
      "Get connection installed at your home",
      "Start using clean cooking fuel with subsidized rates"
    ],
    applicationStepsHi: [
      "आवश्यक दस्तावेजों के साथ निकटतम LPG वितरक पर जाएं",
      "उज्ज्वला आवेदन फॉर्म (KYC फॉर्म) भरें",
      "सत्यापन के लिए दस्तावेज जमा करें",
      "अपने घर में कनेक्शन लगवाएं",
      "सब्सिडी दरों के साथ स्वच्छ खाना पकाने के ईंधन का उपयोग शुरू करें"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "BPL Certificate",
      "Bank Account Details",
      "Passport Size Photo",
      "Address Proof"
    ],
    applicationUrl: "https://www.pmuy.gov.in/"
  },
  {
    id: "5",
    name: "Pradhan Mantri Matru Vandana Yojana",
    nameHi: "प्रधानमंत्री मातृ वंदना योजना",
    description: "Maternity benefit program providing financial assistance to pregnant and lactating mothers for better nutrition and healthcare.",
    descriptionHi: "बेहतर पोषण और स्वास्थ्य देखभाल के लिए गर्भवती और स्तनपान कराने वाली माताओं को वित्तीय सहायता प्रदान करने वाला मातृत्व लाभ कार्यक्रम।",
    department: "Ministry of Women and Child Development",
    eligibilityMatch: 85,
    benefits: [
      "₹5,000 cash incentive for first live birth",
      "Conditional cash transfer in three installments",
      "Promotes institutional delivery",
      "Nutrition support during pregnancy",
      "Direct bank transfer"
    ],
    benefitsHi: [
      "पहले जीवित जन्म के लिए ₹5,000 नकद प्रोत्साहन",
      "तीन किस्तों में सशर्त नकद हस्तांतरण",
      "संस्थागत प्रसव को बढ़ावा देता है",
      "गर्भावस्था के दौरान पोषण सहायता",
      "प्रत्यक्ष बैंक हस्तांतरण"
    ],
    category: "Maternity",
    targetGroup: ["Pregnant Women", "Lactating Mothers", "First Time Mothers"],
    maxIncome: 800000,
    minAge: 18,
    maxAge: 45,
    applicationSteps: [
      "Register at nearest Anganwadi Center or Health Sub-center",
      "Complete ANC registration within first trimester",
      "Submit required documents and application form",
      "Receive first installment after ANC registration",
      "Get subsequent installments after delivery and child immunization"
    ],
    applicationStepsHi: [
      "निकटतम आंगनवाड़ी केंद्र या स्वास्थ्य उप-केंद्र में पंजीकरण कराएं",
      "पहली तिमाही के भीतर ANC पंजीकरण पूरा करें",
      "आवश्यक दस्तावेज और आवेदन फॉर्म जमा करें",
      "ANC पंजीकरण के बाद पहली किस्त प्राप्त करें",
      "प्रसव और बच्चे के टीकाकरण के बाद अगली किस्तें प्राप्त करें"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "Bank Account Details",
      "Mother and Child Protection Card",
      "Medical Certificate",
      "Income Certificate"
    ],
    applicationUrl: "https://pmmvy.nic.in/"
  }
];

export function getRecommendedSchemes(userData: UserData): Scheme[] {
  // Simple AI recommendation logic based on user profile
  const schemes = [...mockSchemes];
  
  schemes.forEach(scheme => {
    let matchScore = 0;
    
    // Age matching
    if (scheme.minAge && userData.age >= scheme.minAge) matchScore += 20;
    if (scheme.maxAge && userData.age <= scheme.maxAge) matchScore += 20;
    if (!scheme.minAge && !scheme.maxAge) matchScore += 15;
    
    // Income matching
    if (scheme.maxIncome && userData.monthlyIncome <= scheme.maxIncome) {
      matchScore += 30;
    } else if (!scheme.maxIncome) {
      matchScore += 10;
    }
    
    // Occupation matching
    const occupationMatches = {
      'farmer': ['PM-KISAN', 'Mahatma Gandhi NREGA'],
      'unemployed': ['Mahatma Gandhi NREGA', 'Ayushman Bharat'],
      'daily_wage_worker': ['Mahatma Gandhi NREGA', 'Ayushman Bharat'],
      'homemaker': ['Pradhan Mantri Ujjwala Yojana', 'Pradhan Mantri Matru Vandana Yojana'],
      'student': ['Ayushman Bharat'],
    };
    
    const relevantSchemes = occupationMatches[userData.occupation as keyof typeof occupationMatches] || [];
    if (relevantSchemes.some(s => scheme.name.includes(s))) {
      matchScore += 25;
    }
    
    // Gender-specific schemes
    if (userData.gender === 'female' && 
        (scheme.name.includes('Ujjwala') || scheme.name.includes('Matru Vandana'))) {
      matchScore += 15;
    }
    
    // Ensure minimum score and cap at 100
    scheme.eligibilityMatch = Math.min(Math.max(matchScore, 45), 100);
  });
  
  // Sort by eligibility match descending
  return schemes.sort((a, b) => b.eligibilityMatch - a.eligibilityMatch);
}