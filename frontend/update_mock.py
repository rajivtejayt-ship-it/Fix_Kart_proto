import re

with open('c:/Users/RAJIV/.gemini/antigravity-ide/scratch/fixkart-landing/frontend/src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_mock_data = '''const workersData = {
    electrician: [
        {
            id: "elec-1",
            name: "Rajesh Kumar",
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&auto=format&fit=crop&q=80",
            experience: "8 Years",
            charge: "₹299",
            availability: "Today, 9 AM - 6 PM",
            location: "Indiranagar, Bangalore",
            responseRate: "98% (under 12 mins)",
            rating: "4.9",
            reviewsCount: 184,
            trustScore: "98",
            skills: ["Appliance Wiring", "Short Circuit Repair", "Smart Home Automation Setup", "Distribution Board Overhauls"],
            certifications: ["State Electricity Board License A", "ISO Wiring Safety Assured"],
            portfolio: [
                "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1558223180-113b85368a53?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Specialized in high-risk residential electrical repairs and modern smart home configurations. Known for ultra-punctuality and strict adherence to IS-732 safety codes."
        },
        {
            id: "elec-2",
            name: "Sunita Rao",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
            experience: "5 Years",
            charge: "₹249",
            availability: "Mon - Sat, 10 AM - 5 PM",
            location: "Koramangala, Bangalore",
            responseRate: "95% (under 15 mins)",
            rating: "4.8",
            reviewsCount: 112,
            trustScore: "94",
            skills: ["Inverter Backups", "Ceiling Fan Repair", "Commercial Lighting Systems", "Phase Fault Rectification"],
            certifications: ["National Skill Development Council (NSDC) Level-4 Certified"],
            portfolio: [
                "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=150&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Experienced electrical engineer focusing on eco-friendly power backups, complex multi-phase lighting matrices, and rapid domestic fault detections."
        },
        {
            id: "elec-3",
            name: "Syed Ali",
            avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&auto=format&fit=crop&q=80",
            experience: "12 Years",
            charge: "₹399",
            availability: "24/7 Emergency",
            location: "Whitefield, Bangalore",
            responseRate: "99% (under 5 mins)",
            rating: "5.0",
            reviewsCount: 305,
            trustScore: "99",
            skills: ["Industrial Wiring", "Panel Boards", "Transformer Maintenance", "High Voltage Setup"],
            certifications: ["Master Electrician License", "Safety First Verified"],
            portfolio: [
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Top-rated electrician for emergency high voltage issues and complex panel board installations in the Whitefield area."
        },
        {
            id: "elec-4",
            name: "Priya Sharma",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
            experience: "3 Years",
            charge: "₹199",
            availability: "Weekends, 9 AM - 8 PM",
            location: "HSR Layout, Bangalore",
            responseRate: "92% (under 25 mins)",
            rating: "4.6",
            reviewsCount: 45,
            trustScore: "90",
            skills: ["Fan Replacement", "Switch Upgrades", "LED Installations", "Basic Repairs"],
            certifications: ["Vocational Training Certificate"],
            portfolio: [],
            about: "Quick and affordable electrical fixes for apartments. I handle everyday electrical needs with a friendly approach."
        }
    ],
    plumber: [
        {
            id: "plumb-1",
            name: "Amit Sharma",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
            experience: "12 Years",
            charge: "₹349",
            availability: "Emergency Only, 24/7",
            location: "Jayanagar, Bangalore",
            responseRate: "99% (under 9 mins)",
            rating: "4.95",
            reviewsCount: 310,
            trustScore: "99",
            skills: ["Hydro-Jetting", "CCTV Pipe Inspections", "Leakage Sonar Audits", "Bathroom Fitting Installation"],
            certifications: ["Indian Plumbing Association Elite Practitioner Badge", "Advanced Pipeline Welder License"],
            portfolio: [
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1542013936693-8848e5740a7a?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Veteran technician specializing in emergency heavy-duty drain cleaning, zero-damage water leak tracing, and premium European sanitary installations."
        },
        {
            id: "plumb-2",
            name: "Karan Johar",
            avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=200&auto=format&fit=crop&q=80",
            experience: "6 Years",
            charge: "₹199",
            availability: "Today, 12 PM - 8 PM",
            location: "Bellandur, Bangalore",
            responseRate: "91% (under 20 mins)",
            rating: "4.7",
            reviewsCount: 88,
            trustScore: "91",
            skills: ["Water Purifier Mounting", "Taps & Mixer Replacements", "Gutter Maintenance", "Geyser Pipeline Clamping"],
            certifications: ["Skill India Plumbing Level 3 Certificate"],
            portfolio: [
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Quick, efficient, and cost-effective home plumbing fixes. Specialized in tap installations, RO filters assembly, and general drainage maintenance."
        },
        {
            id: "plumb-3",
            name: "Nisha Patel",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
            experience: "9 Years",
            charge: "₹289",
            availability: "Mon-Fri, 8 AM - 4 PM",
            location: "Indiranagar, Bangalore",
            responseRate: "96% (under 15 mins)",
            rating: "4.85",
            reviewsCount: 156,
            trustScore: "96",
            skills: ["Water Heaters", "Pipe Fitting", "Leak Repair", "Toilet Installations"],
            certifications: ["Certified Master Plumber"],
            portfolio: [],
            about: "Thorough and reliable plumbing services. Known for leaving the workspace spotless after jobs."
        }
    ],
    mechanic: [
        {
            id: "mech-1",
            name: "Imran Khan",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
            experience: "10 Years",
            charge: "₹399",
            availability: "Today, 8 AM - 8 PM",
            location: "Marathahalli, Bangalore",
            responseRate: "97% (under 15 mins)",
            rating: "4.9",
            reviewsCount: 220,
            trustScore: "97",
            skills: ["Superbike Carburetor Tuning", "Engine Overhaul", "ECU Remapping Diagnostics", "Hydraulic Brake Bleeding"],
            certifications: ["Yamaha Motors Certified Technician", "Automotive Skill Council Level 5 Spec"],
            portfolio: [
                "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=150&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Master technician for single-cylinder to multi-cylinder superbikes. Specializes in performance diagnostics, brake calibration, and engine tuning."
        },
        {
            id: "mech-2",
            name: "David Fernandez",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
            experience: "15 Years",
            charge: "₹499",
            availability: "Mon-Sat, 9 AM - 7 PM",
            location: "Koramangala, Bangalore",
            responseRate: "94% (under 18 mins)",
            rating: "4.95",
            reviewsCount: 412,
            trustScore: "98",
            skills: ["Car Engine Repair", "Transmission Specialist", "AC Servicing", "Dent & Paint"],
            certifications: ["ASE Master Mechanic"],
            portfolio: [],
            about: "Complete car care specialist. From regular servicing to complex engine rebuilds, I ensure your vehicle runs smoothly."
        }
    ],
    carpenter: [
        {
            id: "carp-1",
            name: "Harpreet Singh",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
            experience: "15 Years",
            charge: "₹450",
            availability: "Mon - Fri, 9 AM - 6 PM",
            location: "Whitefield, Bangalore",
            responseRate: "93% (under 18 mins)",
            rating: "4.88",
            reviewsCount: 165,
            trustScore: "96",
            skills: ["Modular Kitchen Assembly", "Custom Hardwood Furniture", "Sofa Re-Upholstery", "Lock and Latch Installations"],
            certifications: ["L&T Construction Woodworking Diploma", "Skill India Master Craftsmenship"],
            portfolio: [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=150&auto=format&fit=crop&q=80"
            ],
            about: "Artisan woodwork practitioner. Specializes in luxury modular setups, custom-designed storage, and high-security smart lock configurations."
        },
        {
            id: "carp-2",
            name: "Lakshmi Narayanan",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
            experience: "7 Years",
            charge: "₹250",
            availability: "All Week, 10 AM - 6 PM",
            location: "Indiranagar, Bangalore",
            responseRate: "97% (under 10 mins)",
            rating: "4.75",
            reviewsCount: 92,
            trustScore: "95",
            skills: ["Door Alignment", "Cabinet Hinge Repair", "Small Wood Crafts", "IKEA Assembly"],
            certifications: ["Vocational Woodwork Trained"],
            portfolio: [],
            about: "Expert at fixing creaky doors, misaligned cabinets, and assembling flat-pack furniture swiftly."
        }
    ]
};

const reviewsData = [
    { stars: 5, reviewer: "Rajiv Chandrasekhar", text: "Amit Sharma did an exceptional job hydro-jetting our clogged drain line. Transparent pricing and complete professional equipment. Highly recommended!", date: "15 Mins Ago • Jayanagar" },
    { stars: 5, reviewer: "Meera Nair", text: "Rajesh Kumar arrived in 10 minutes flat! Fixed the sparkling distribution board quickly. Having certified experts with background clearance is highly comforting.", date: "1 Hour Ago • Indiranagar" },
    { stars: 4, reviewer: "Rohit Deshmukh", text: "Imran Khan tuned my bike's carburetor perfectly. The throttle response feels like a brand-new machine. Docked one star because the payment gateway was lagging.", date: "3 Hours Ago • Marathahalli" },
    { stars: 5, reviewer: "Ananya Hegde", text: "Sunita Rao installed our new eco-inverter system. Extremely tidy work, neat cables, and explained the battery maintenance rules clearly. Outstanding experience!", date: "Yesterday • Koramangala" },
    { stars: 3, reviewer: "Suresh Gowda", text: "Karan Johar replaced a tap and water purifier pipeline. The work was decent, but he arrived 20 minutes later than scheduled.", date: "2 Days Ago • Bellandur" },
    { stars: 1, reviewer: "Vikram Sen", text: "Unverified third-party technician who claimed to be helper arrived. Instantly rejected and raised query. FixKart helpline handled refund immediately.", date: "3 Days Ago • Whitefield" },
    { stars: 5, reviewer: "Sneha Reddy", text: "Syed Ali came in at 2 AM to fix our main panel short circuit. Absolute lifesaver! Very professional.", date: "1 Week Ago • Whitefield" },
    { stars: 4, reviewer: "Karthik M", text: "David fixed my car's AC issue in an hour. Fair pricing compared to the dealership.", date: "2 Weeks Ago • Koramangala" },
    { stars: 5, reviewer: "Anita Paul", text: "Lakshmi put together my entire IKEA bedroom set. She was fast and precise. Totally worth it.", date: "1 Month Ago • Indiranagar" }
];'''

pattern = re.compile(r'const workersData = \{.*?const reviewsData = \[.*?\];', re.DOTALL)
new_content = pattern.sub(new_mock_data, content)

with open('c:/Users/RAJIV/.gemini/antigravity-ide/scratch/fixkart-landing/frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
