import React, { useState, useEffect, useRef } from 'react';
import { firebaseAuthService } from './services/firebase';

// ==========================================================================
// MOCK DATABASES
// ==========================================================================
const workersData = {
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
];

const timelineSteps = [
    {
        stepNum: 1,
        label: "Search Category",
        title: "Step 1: Choose Your Service",
        desc: "Pick from a wide list of domestic and commercial repairs like plumbers, carpenters, device technicians, and vehicle mechanics instantly using our category hub.",
        mockType: "categories"
    },
    {
        stepNum: 2,
        label: "Select Worker",
        title: "Step 2: Compare Local Specialists",
        desc: "Instantly see matching workers in your exact proximity. Compare rates, response limits, background clearance details, and certifications on one screen.",
        mockType: "list"
    },
    {
        stepNum: 3,
        label: "Check Reviews",
        title: "Step 3: Review Verified History",
        desc: "Examine detailed review cards from other home-owners. Read about behavior, cleanliness, and value fairness to build confidence before dispatching.",
        mockType: "reviews"
    },
    {
        stepNum: 4,
        label: "Book Appointment",
        title: "Step 4: Book or Schedule Instantly",
        desc: "Schedule according to your personal availability window or request immediate dispatch. Transparent billing calculations are locked down dynamically.",
        mockType: "book"
    },
    {
        stepNum: 5,
        label: "Accept & Dispatch",
        title: "Step 5: Worker Accept & Dispatch",
        desc: "A nearby professional receives the push request and starts journey. You receive tracking notifications, secure credentials validation, and expected arrival codes.",
        mockType: "dispatch"
    },
    {
        stepNum: 6,
        label: "Service Execution",
        title: "Step 6: Executed Safely & Cleanly",
        desc: "The verified professional completes the task, handles surrounding areas with tidiness guidelines, and submits completed job metrics details.",
        mockType: "progress"
    },
    {
        stepNum: 7,
        label: "Secure Payment",
        title: "Step 7: Escrow Release & Review",
        desc: "Verify that work meets standards, unlock direct payment transfers, and rate experience levels across reliability, cleanliness, and value pricing.",
        mockType: "payment"
    }
];

// ==========================================================================
// CORE APPLICATION CONTAINER
// ==========================================================================
export default function App() {
    // Global User State
    const [currentUser, setCurrentUser] = useState(firebaseAuthService.getCurrentUser());
    
    // UI Interaction States
    const [activeCat, setActiveCat] = useState("electrician");
    const [activeWorkerIdx, setActiveWorkerIdx] = useState(0);
    const [timelineStep, setTimelineStep] = useState(1);
    const [reviewFilter, setReviewFilter] = useState("all");
    const [navActive, setNavActive] = useState(false);
    
    // Live Data States
    const [workersList, setWorkersList] = useState([]);
    const [isLoadingWorkers, setIsLoadingWorkers] = useState(false);

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Fetch Workers from API whenever activeCat changes
    useEffect(() => {
        setIsLoadingWorkers(true);
        fetch(`${API_BASE_URL}/api/Workers?category=${activeCat}`)
            .then(res => res.json())
            .then(data => {
                // Deserialize JSON strings back to arrays
                const parsedData = data.map(w => ({
                    ...w,
                    avatar: w.avatarUrl,
                    charge: "₹" + w.hourlyCharge,
                    experience: w.experience,
                    skills: JSON.parse(w.skillsJson || "[]"),
                    certifications: JSON.parse(w.certificationsJson || "[]"),
                    portfolio: JSON.parse(w.portfolioJson || "[]")
                }));
                setWorkersList(parsedData);
                setActiveWorkerIdx(0);
                setIsLoadingWorkers(false);
            })
            .catch(err => {
                console.error("Failed to fetch workers:", err);
                setIsLoadingWorkers(false);
                setWorkersList(workersData[activeCat] || []);
            });
    }, [activeCat]);
    
    // Admin Dashboard Simulator States
    const [dbTab, setDbTab] = useState("approvals");
    const [pendingApprovals, setPendingApprovals] = useState([]);

    // Fetch pending approvals when dashboard is on 'approvals' tab
    useEffect(() => {
        if(dbTab === "approvals") {
            fetch(`${API_BASE_URL}/api/Admin/pending-approvals`)
                .then(res => res.json())
                .then(data => {
                    // Map backend model to dashboard schema
                    setPendingApprovals(data.map(w => ({
                        id: w.id,
                        name: w.name,
                        trade: w.category,
                        exp: w.experience,
                        docs: "Uploaded",
                        score: w.trustScore + "%"
                    })));
                })
                .catch(err => console.error(err));
        }
    }, [dbTab]);

    // Modal Control States
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // customer, worker, direct, chat, auth
    const [activeTargetWorker, setActiveTargetWorker] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [chatInput, setChatInput] = useState("");

    // Form states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authName, setAuthName] = useState("");
    const [authRole, setAuthRole] = useState("customer");
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Scroll reveal hooks simulation
    const scrollRevealRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, { threshold: 0.1 });

        scrollRevealRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Scroll header effect
    const [headerScrolled, setHeaderScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setHeaderScrolled(true);
            else setHeaderScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- Interactive Action Handlers ---
    const handleAuth = async (e, mode) => {
        e.preventDefault();
        setIsLoading(true);
        setAuthError("");
        try {
            if (mode === "login") {
                const res = await firebaseAuthService.loginWithEmail(email, password);
                setCurrentUser(res.user);
                setModalOpen(false);
            } else {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                if (!passwordRegex.test(password)) {
                    setAuthError("Password must be at least 8 chars with upper and lower case letters.");
                    setIsLoading(false);
                    return;
                }
                const res = await firebaseAuthService.registerWithEmail(email, password, authName, authRole);
                setCurrentUser(res.user);
                setModalOpen(false);
            }
            setEmail("");
            setPassword("");
            setAuthName("");
        } catch (err) {
            setAuthError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        await firebaseAuthService.signOutUser();
        setCurrentUser(null);
    };

    const triggerCategorySearch = (cat) => {
        setActiveCat(cat);
        setActiveWorkerIdx(0);
        const section = document.getElementById("showcase");
        if(section) section.scrollIntoView({ behavior: "smooth" });
    };

    const approveApplicant = (id) => {
        fetch(`${API_BASE_URL}/api/Admin/approve/${id}`, { method: 'POST' })
            .then(res => {
                if (res.ok) {
                    setPendingApprovals(prev => prev.filter(app => app.id !== id));
                    alert(`Applicant ${id} verified and added to live pool.`);
                }
            })
            .catch(err => console.error(err));
    };

    const rejectApplicant = (id) => {
        fetch(`${API_BASE_URL}/api/Admin/reject/${id}`, { method: 'POST' })
            .then(res => {
                if (res.ok) {
                    setPendingApprovals(prev => prev.filter(app => app.id !== id));
                    alert(`Applicant ${id} verification rejected.`);
                }
            })
            .catch(err => console.error(err));
    };

    const triggerEscrowDispatch = (e) => {
        e.preventDefault();
        
        const bookingData = {
            customerId: currentUser ? currentUser.uid : "anon-user",
            customerName: "Rajiv S.",
            customerPhone: "+91 99014 38220",
            location: "Indiranagar, Bangalore",
            description: "Direct Escrow Booking",
            workerId: activeTargetWorker ? activeTargetWorker.id : "",
            category: activeCat,
            baseRate: activeTargetWorker ? parseFloat(activeTargetWorker.charge.replace(/[^0-9.]/g, '')) : 0
        };

        fetch(`${API_BASE_URL}/api/Bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            setModalOpen(false);
            alert(`Escrow funds secured! Booking Ref: ${data.id}. Dispatching local specialist telemetry GPS coordinates. Security PIN: ${data.securityPin}`);
        })
        .catch(err => {
            console.error(err);
            alert("Booking failed. Is the backend running?");
        });
    };

    const sendChatMessage = () => {
        if (!chatInput.trim()) return;
        const userMsg = { sender: "user", text: chatInput };
        setChatMessages(prev => [...prev, userMsg]);
        setChatInput("");
        
        setTimeout(() => {
            const botMsg = { sender: "worker", text: "Got it! Sounds like a straightforward fix. Go ahead and click **Book Instantly** so we can lock the appointment!" };
            setChatMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="relative min-h-screen bg-brand-deep text-gray-100 overflow-hidden font-body">
            {/* Ambient Ambient Background elements */}
            <div className="ambient-glow glow-1"></div>
            <div className="ambient-glow glow-2"></div>
            <div className="ambient-glow glow-3"></div>

            {/* NAVBAR */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerScrolled ? "py-3 bg-gray-950/95 shadow-md border-b border-brand-borderGlass" : "py-5 bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3">
                        <span className="w-10 h-10 bg-gradient-to-br from-brand-indigo to-brand-blue rounded-xl flex items-center justify-center text-white text-lg"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                        <span className="font-head font-extrabold text-2xl text-white">Fix<span className="text-brand-indigoLight">Kart</span></span>
                    </a>
                    
                    <nav className={`fixed lg:relative top-[72px] lg:top-0 left-0 lg:left-auto w-full lg:w-auto h-[calc(100vh-72px)] lg:h-auto bg-brand-deep lg:bg-transparent flex flex-col lg:flex-row gap-8 items-center justify-center lg:justify-start transition-all duration-300 ${navActive ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                        <a href="#about" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">About</a>
                        <a href="#features" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">Features</a>
                        <a href="#how-it-works" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">How It Works</a>
                        <a href="#showcase" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">Find Workers</a>
                        <a href="#trust" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">Trust</a>
                        <a href="#dashboard" onClick={() => setNavActive(false)} className="text-gray-400 hover:text-white font-medium text-lg lg:text-sm">Dashboard</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <div className="flex items-center gap-3">
                                <span className="hidden sm:inline-block text-sm text-gray-400">Hi, <strong className="text-white">{currentUser.displayName}</strong></span>
                                <button className="btn btn-secondary border border-white/10 text-xs px-4 py-2" onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                            </div>
                        ) : (
                            <button className="btn btn-secondary border border-white/10 text-xs px-4 py-2" onClick={() => { setModalType("auth"); setModalOpen(true); }}><i className="fa-solid fa-user-lock"></i> Auth Portal</button>
                        )}
                        <button className="hidden sm:inline-flex bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-brand-indigo/35 hover:-translate-y-0.5 transition-all" onClick={() => { setModalType("customer"); setModalOpen(true); }}>Book Now</button>
                        <button className="lg:hidden text-white text-2xl" onClick={() => setNavActive(!navActive)}><i className={navActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></button>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <div ref={el => scrollRevealRefs.current[0] = el} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-brand-indigoLight px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"><i className="fa-solid fa-bolt-lightning"></i> Smart Local Services Marketplace</div>
                    <h1 className="text-5xl sm:text-6xl font-head font-extrabold text-white leading-tight mb-6">
                        Your Local Service Experts, Connected <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Instantly</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                        Tired of unverified, expensive, and delayed repairs? FixKart matches you with verified local plumbers, electricians, mechanics, and technicians within minutes with transparent pricing.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                        <button className="bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-500/20 hover:-translate-y-0.5 transition-all" onClick={() => { setModalType("customer"); setModalOpen(true); }}><i className="fa-solid fa-calendar-check mr-2"></i> Book a Service</button>
                        <button className="bg-white/5 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all" onClick={() => { setModalType("worker"); setModalOpen(true); }}><i className="fa-solid fa-briefcase mr-2"></i> Join as Partner</button>
                    </div>
                    <div className="flex gap-10 border-t border-white/5 pt-8">
                        <div>
                            <div className="text-3xl font-extrabold text-white">15k+</div>
                            <div className="text-xs text-gray-500 mt-1">Verified Pros</div>
                        </div>
                        <div className="w-px h-10 bg-white/10 self-center"></div>
                        <div>
                            <div className="text-3xl font-extrabold text-white">250k+</div>
                            <div className="text-xs text-gray-500 mt-1">Jobs Completed</div>
                        </div>
                        <div className="w-px h-10 bg-white/10 self-center"></div>
                        <div>
                            <div className="text-3xl font-extrabold text-white">4.9/5</div>
                            <div className="text-xs text-gray-500 mt-1">Avg Trust Rating</div>
                        </div>
                    </div>
                </div>

                <div ref={el => scrollRevealRefs.current[1] = el} className="opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out">
                    <div className="bg-[#0D1222] border border-white/10 rounded-3xl p-3 shadow-2xl relative max-w-md mx-auto">
                        <div className="flex justify-between items-center border-b border-white/5 pb-3 px-2 mb-3">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                                <span className="w-2 h-2 rounded-full bg-brand-amber"></span>
                                <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
                            </div>
                            <span className="text-[10px] text-gray-500 tracking-wider">FIXKART LIVE PROXIMITY ENGINE</span>
                        </div>
                        <div className="bg-[#080B11] rounded-2xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-semibold flex items-center gap-1.5"><i className="fa-solid fa-location-dot text-brand-red"></i> Indiranagar, Bangalore</span>
                                <span className="w-7 h-7 bg-brand-indigo rounded-full flex items-center justify-center text-[10px] font-bold">R</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 mb-4 text-gray-500 text-xs flex items-center gap-2"><i className="fa-solid fa-magnifying-glass"></i> Search for electrician, plumber...</div>
                            <div className="flex gap-2 mb-4 overflow-x-auto">
                                <span className="bg-brand-indigoGlow border border-brand-indigoLight/30 text-brand-indigoLight text-[10px] font-semibold px-3 py-1 rounded-full"><i className="fa-solid fa-plug mr-1"></i> Electrician</span>
                                <span className="bg-white/5 text-gray-400 text-[10px] px-3 py-1 rounded-full"><i className="fa-solid fa-faucet mr-1"></i> Plumber</span>
                                <span className="bg-white/5 text-gray-400 text-[10px] px-3 py-1 rounded-full"><i className="fa-solid fa-motorcycle mr-1"></i> Mechanic</span>
                            </div>
                            <div className="flex items-center gap-2 mb-4 text-[10px] text-gray-400">
                                <span className="w-2 h-2 bg-brand-emerald rounded-full animate-ping"></span>
                                <span>32 Electricians online in your location</span>
                            </div>
                            {/* Proximity Floating Card */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4 shadow-lg hover:border-brand-indigoLight transition-all">
                                <div className="flex gap-3 mb-2.5">
                                    <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=100&auto=format&fit=crop&q=80" alt="Specialist Rajesh" className="w-11 h-11 rounded-lg object-cover" />
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <h4 className="text-xs font-bold text-white">Rajesh Kumar</h4>
                                            <span className="bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[9px] px-1.5 py-0.5 rounded-full"><i className="fa-solid fa-circle-check"></i> Verified</span>
                                        </div>
                                        <div className="text-[10px] text-gray-500">Senior Electrician • 8 Yrs Exp</div>
                                        <div className="flex items-center gap-2 text-[10px] text-brand-amber mt-0.5">
                                            <span><i className="fa-solid fa-star"></i> 4.9</span>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-brand-emerald font-bold">99% Match</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                                    <span className="text-xs font-bold">₹299<small className="text-gray-500 font-medium">/hr basis</small></span>
                                    <button className="bg-brand-indigo text-white text-[10px] font-bold px-3 py-1 rounded-md hover:bg-brand-indigoLight transition-all" onClick={() => openDirectBookModal(workersData.electrician[0].name, workersData.electrician[0].charge)}>Book Now</button>
                                </div>
                            </div>
                            {/* Vector Map Overlay */}
                            <div className="bg-white/5 border border-white/10 rounded-xl h-24 overflow-hidden relative">
                                <svg viewBox="0 0 400 160" className="w-full h-full opacity-60">
                                    <path d="M 0 40 L 400 40" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                                    <path d="M 0 120 L 400 120" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                                    <path d="M 120 0 L 120 160" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                                    <circle cx="120" cy="40" r="12" fill="rgba(79, 70, 229, 0.2)" />
                                    <circle cx="120" cy="40" r="4" fill="#4F46E5" />
                                    <circle cx="280" cy="120" r="12" fill="rgba(16, 185, 129, 0.2)" className="animate-pulse" />
                                    <circle cx="280" cy="120" r="4" fill="#10B981" />
                                    <path d="M 120 40 Q 200 80 280 120" stroke="#4F46E5" strokeWidth="2" strokeDasharray="5 5" fill="none" className="stroke-[2] stroke-brand-indigo animate-[dash_10s_linear_infinite]" />
                                </svg>
                                <span className="absolute bottom-2 left-2 bg-gray-950/80 border border-white/5 px-2 py-0.5 rounded text-[8px] text-gray-500">Realtime Proximity Radar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM-SOLUTION SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
                <div ref={el => scrollRevealRefs.current[2] = el} className="opacity-0 translate-y-8 transition-all duration-700 text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">The local service industry is broken. <br/>We are here to <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Fix It</span>.</h2>
                    <p className="text-gray-400 text-base">Finding a reliable technician shouldn't feel like a gamble. Here is how we bridge the gap between customers and service providers.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* The Pain */}
                    <div className="glass-panel p-8 relative overflow-hidden group">
                        <span className="absolute top-4 right-4 bg-brand-red/10 border border-brand-red/25 text-brand-red font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider"><i className="fa-solid fa-triangle-exclamation mr-1"></i> The Broken Way</span>
                        <h3 className="text-2xl font-bold mb-6 mt-4">Unorganized & Hazardous</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center text-brand-red text-xs shrink-0"><i className="fa-solid fa-xmark"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">Blind Pricing</strong>
                                    <span className="text-gray-400 text-sm">No upfront rates; hidden charges and unfair post-service price inflation.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center text-brand-red text-xs shrink-0"><i className="fa-solid fa-xmark"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">No Safety Check</strong>
                                    <span className="text-gray-400 text-sm">Allowing unverified workers into your home with zero background screening.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center text-brand-red text-xs shrink-0"><i className="fa-solid fa-xmark"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">Frustrating Delays</strong>
                                    <span className="text-gray-400 text-sm">Spending hours calling, haggling, and waiting for callbacks that never arrive.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="glass-panel-glow p-8 relative overflow-hidden">
                        <span className="absolute top-4 right-4 bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider"><i className="fa-solid fa-circle-check mr-1"></i> The FixKart Solution</span>
                        <h3 className="text-2xl font-bold mb-6 mt-4">Safe, Direct & Seamless</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center justify-center text-brand-emerald text-xs shrink-0"><i className="fa-solid fa-check"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">Hourly & Fixed Rates</strong>
                                    <span className="text-gray-400 text-sm">Clear pricing with estimates provided before booking. Zero hidden markups.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center justify-center text-brand-emerald text-xs shrink-0"><i className="fa-solid fa-check"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">Double-Verified Pros</strong>
                                    <span className="text-gray-400 text-sm">Criminal records check, skill certification verification, and facial recognition checks.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center justify-center text-brand-emerald text-xs shrink-0"><i className="fa-solid fa-check"></i></span>
                                <div>
                                    <strong className="text-white block mb-1">Instant Proximity Match</strong>
                                    <span className="text-gray-400 text-sm">Instantly discover professionals within a 5km radius ready for immediate dispatch.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="features">
                <div ref={el => scrollRevealRefs.current[3] = el} className="opacity-0 translate-y-8 transition-all duration-700 text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">Packed with <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Superpowers</span></h2>
                    <p className="text-gray-400 text-base">Designed with industry-first features that ensure transparency, reliability, and security for both sides of the marketplace.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-magnifying-glass-location"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Proximity Search</h4>
                        <p className="text-gray-400 text-sm">Search workers by micro-location and service categories with real-time availability filters.</p>
                    </div>
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-address-card"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Worker E-Commerce Pages</h4>
                        <p className="text-gray-400 text-sm">Detailed worker portfolios displaying charges, certifications, availability calendar, and ratings.</p>
                    </div>
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-ranking-stars"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Granular Rating Matrix</h4>
                        <p className="text-gray-400 text-sm">Multi-dimensional review scores for reliability, cleanliness, behavior, and cost fairness.</p>
                    </div>
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-clock"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Instant or Scheduled</h4>
                        <p className="text-gray-400 text-sm">Book emergency repairs instantly or schedule appointments in advance around your timeline.</p>
                    </div>
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-comments"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Encrypted Live Chat</h4>
                        <p className="text-gray-400 text-sm">Discuss job requirements, share photos of repair tasks, and share locations directly inside the app.</p>
                    </div>
                    <div className="glass-panel p-6">
                        <span className="w-12 h-12 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight rounded-xl flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-shield-halved"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Trust Score Badge</h4>
                        <p className="text-gray-400 text-sm">A dynamic, machine-learning based Trust Index scoring worker safety, completion rate, and quality.</p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION (TIMELINE SLIDER) */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="how-it-works">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">Simplicity in <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Action</span></h2>
                    <p className="text-gray-400 text-base">Seven intuitive steps connecting a customer needing assistance to a local expert executing the task perfectly.</p>
                </div>

                <div className="flex flex-col gap-10">
                    {/* Stepper Navigation */}
                    <div className="flex justify-between border-b border-white/5 pb-4 overflow-x-auto gap-8">
                        {timelineSteps.map(step => (
                            <button key={step.stepNum} onClick={() => setTimelineStep(step.stepNum)} className={`flex flex-col items-center gap-2 cursor-pointer pb-2 shrink-0 border-b-2 transition-all ${timelineStep === step.stepNum ? "border-brand-indigoLight text-white" : "border-transparent text-gray-500"}`}>
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${timelineStep === step.stepNum ? "bg-brand-indigo text-white shadow-lg shadow-indigo-500/20" : "bg-white/5 text-gray-500"}`}>{step.stepNum}</span>
                                <span className="text-xs font-semibold">{step.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Step Card Content */}
                    <div className="glass-panel-glow p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">{timelineSteps[timelineStep - 1].title}</h3>
                                <p className="text-gray-400 text-base mb-6 leading-relaxed">{timelineSteps[timelineStep - 1].desc}</p>
                                <div className="flex gap-2">
                                    {timelineSteps.map(step => (
                                        <span key={step.stepNum} className={`h-1.5 rounded-full transition-all duration-300 ${timelineStep === step.stepNum ? "w-8 bg-brand-indigoLight" : "w-2 bg-white/10"}`}></span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                {/* Simulated Phone screen */}
                                <div className="w-[260px] h-[480px] bg-[#0b0f19] border-[10px] border-gray-800 rounded-[36px] shadow-2xl relative overflow-hidden shrink-0">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 height-[18px] bg-gray-800 rounded-b-xl z-20"></div>
                                    <div className="w-full h-full pt-6 px-3 pb-3 text-[10px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: timelineSteps[timelineStep - 1].screenHTML }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKER PROFILE SHOWCASE (E-COMMERCE STYLED) */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="showcase">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">E-Commerce style <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Worker Profiles</span></h2>
                    <p className="text-gray-400 text-base">No more anonymous technicians. Review certifications, past portfolios, rates, and verified trust scores before making your hire decision.</p>
                </div>

                <div className="flex justify-center gap-3 mb-10 overflow-x-auto">
                    <button className={`px-6 py-2 rounded-full font-head font-semibold text-sm transition-all shrink-0 ${activeCat === 'electrician' ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 border border-white/10 text-gray-400'}`} onClick={() => { setActiveCat("electrician"); setActiveWorkerIdx(0); }}>Electricians</button>
                    <button className={`px-6 py-2 rounded-full font-head font-semibold text-sm transition-all shrink-0 ${activeCat === 'plumber' ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 border border-white/10 text-gray-400'}`} onClick={() => { setActiveCat("plumber"); setActiveWorkerIdx(0); }}>Plumbers</button>
                    <button className={`px-6 py-2 rounded-full font-head font-semibold text-sm transition-all shrink-0 ${activeCat === 'mechanic' ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 border border-white/10 text-gray-400'}`} onClick={() => { setActiveCat("mechanic"); setActiveWorkerIdx(0); }}>Mechanics</button>
                    <button className={`px-6 py-2 rounded-full font-head font-semibold text-sm transition-all shrink-0 ${activeCat === 'carpenter' ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 border border-white/10 text-gray-400'}`} onClick={() => { setActiveCat("carpenter"); setActiveWorkerIdx(0); }}>Carpenters</button>
                </div>

                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
                    {/* List Side */}
                    <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2">
                        {isLoadingWorkers ? <p className="text-gray-400 p-4">Loading verified workers from FixKart servers...</p> : null}
                        {workersList.map((worker, index) => (
                            <div key={worker.id} onClick={() => setActiveWorkerIdx(index)} className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all ${index === activeWorkerIdx ? "border-brand-indigoLight bg-indigo-500/5" : "border-white/10 bg-white/5"}`}>
                                <img src={worker.avatar} alt={worker.name} className="w-14 h-14 rounded-lg object-cover" />
                                <div className="grow">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-base font-bold text-white">{worker.name}</h4>
                                        <span className="bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[9px] px-2 py-0.5 rounded-full"><i className="fa-solid fa-circle-check"></i> Verified</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">{worker.experience} Exp • {worker.charge}/hr basis • <i className="fa-solid fa-location-dot"></i> {worker.location || "Bangalore"}</div>
                                    <div className="text-xs text-brand-amber font-semibold mt-2 flex items-center gap-1.5"><i className="fa-solid fa-star"></i> {worker.rating} ({worker.reviewsCount} reviews)</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Product Page Detail side */}
                    <div className="glass-panel-glow p-8 md:p-10">
                        {(() => {
                            if (isLoadingWorkers) return <p>Loading specialist details...</p>;
                            const worker = workersList[activeWorkerIdx];
                            if(!worker) return <p>No specialists active in this location.</p>;
                            return (
                                <div>
                                    <div className="flex flex-col md:flex-row gap-6 border-b border-white/5 pb-6 mb-6">
                                        <img src={worker.avatar} alt={worker.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-indigo/35" />
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <h3 className="text-2xl font-bold">{worker.name}</h3>
                                                <span className="bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[10px] px-2.5 py-0.5 rounded-full font-bold"><i className="fa-solid fa-circle-check"></i> ML Verified</span>
                                            </div>
                                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{activeCat} specialist • {worker.experience} expert • <i className="fa-solid fa-location-dot text-brand-red"></i> {worker.location || "Bangalore"}</div>
                                            <div className="mt-2.5">
                                                <span className="bg-brand-amber/10 text-brand-amber border border-brand-amber/25 text-[10px] px-2.5 py-0.5 rounded-full font-bold"><i className="fa-solid fa-shield-halved"></i> Trust Score: {worker.trustScore}/100</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                                            <div className="text-[10px] text-gray-500">Client Stars</div>
                                            <div className="text-lg font-bold text-white mt-1"><i className="fa-solid fa-star text-brand-amber mr-1"></i>{worker.rating}</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                                            <div className="text-[10px] text-gray-500">Response Speed</div>
                                            <div className="text-lg font-bold text-white mt-1"><i className="fa-solid fa-bolt text-brand-indigoLight mr-1"></i>{worker.responseRate.split("(")[0]}</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                                            <div className="text-[10px] text-gray-500">Status</div>
                                            <div className="text-lg font-bold text-brand-emerald mt-1"><i className="fa-solid fa-circle-play mr-1"></i>Active</div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xs text-gray-500 mb-2">Technician Biography</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{worker.about}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xs text-gray-500 mb-3">Modular Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {worker.skills.map((skill, idx) => (
                                                <span key={idx} className="bg-white/5 border border-white/5 px-3 py-1 rounded-lg text-xs text-gray-300 flex items-center gap-1.5"><i className="fa-solid fa-check text-brand-emerald"></i> {skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-white/5 pt-6 flex justify-between items-center">
                                        <div>
                                            <div className="text-[10px] text-gray-500">Guaranteed Escrow Rate</div>
                                            <div className="text-2xl font-extrabold text-white">{worker.charge}<small className="text-xs text-gray-500 font-normal">/hr basis</small></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="bg-white/5 border border-white/10 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-white/10 transition-all" onClick={() => { setActiveTargetWorker(worker); setChatMessages([{ sender: "worker", text: "Hello! Please upload photos or describe your repair complaints." }]); setModalType("chat"); setModalOpen(true); }}><i className="fa-solid fa-comments mr-1.5"></i> Chat</button>
                                            <button className="bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg" onClick={() => openDirectBookModal(worker.name, worker.charge)}><i className="fa-solid fa-calendar-check mr-1.5"></i> Book Instantly</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* REVIEW & TRUST SYSTEM */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="trust">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">The Gold Standard of <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Trust & Reviews</span></h2>
                    <p className="text-gray-400 text-base">Our multi-dimensional scoring ensures total security and premium quality ratings. No fake reviews, only verified customer submissions.</p>
                </div>

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
                    {/* ML Trust Score Meter */}
                    <div className="glass-panel-glow p-8 text-center flex flex-col justify-between">
                        <div className="flex justify-between items-center text-xs text-gray-500 font-bold mb-6">
                            <span>ALGORITHMIC TRUST SCORE</span>
                            <span className="text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded uppercase"><i className="fa-solid fa-shield-halved"></i> ML Moderated</span>
                        </div>
                        <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                            {/* SVG Circle Progress */}
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="72" cy="72" r="60" className="stroke-white/5 fill-none stroke-[8]" />
                                <circle cx="72" cy="72" r="60" className="stroke-brand-emerald fill-none stroke-[8] stroke-linecap-round" strokeDasharray="376.99" strokeDashoffset="37.69" />
                            </svg>
                            <div className="absolute text-center">
                                <div className="text-4xl font-extrabold text-white">95.8</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">Excellent</div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Calculated based on background clearance, licensing validations, dispute rate counters, and active rating trends.</p>
                        <div className="border-t border-white/5 pt-4 space-y-3">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Background Clear Rate</span>
                                <strong className="text-white">100%</strong>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Job Completion Rate</span>
                                <strong className="text-white">98.2%</strong>
                            </div>
                        </div>
                    </div>

                    {/* Verified Customer Feedback stream */}
                    <div className="glass-panel p-8">
                        <div className="flex gap-6 items-center border-b border-white/5 pb-6 mb-6">
                            <div className="text-5xl font-extrabold text-white">4.8</div>
                            <div>
                                <div className="text-brand-amber flex gap-1"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                <div className="text-[10px] text-gray-500 mt-1">Based on 145,200 verified customer bookings</div>
                            </div>
                        </div>

                        {/* Star progress bars filter click triggers */}
                        <div className="space-y-2.5 border-b border-white/5 pb-6 mb-6">
                            {[5, 4, 3, 2, 1].map(stars => (
                                <div key={stars} onClick={() => setReviewFilter(stars)} className="flex items-center gap-3 text-xs text-gray-500 cursor-pointer hover:text-white group">
                                    <span className="w-10 text-right">{stars} Star</span>
                                    <div className="grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-amber rounded-full" style={{ width: stars === 5 ? "82%" : stars === 4 ? "12%" : "4%" }}></div>
                                    </div>
                                    <span className="w-8">{stars === 5 ? "82%" : stars === 4 ? "12%" : "4%"}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stream scroller */}
                        <div>
                            <div className="flex justify-between items-center text-xs font-semibold mb-4">
                                <span className="text-gray-500 uppercase">Live Review Stream</span>
                                <span className="text-brand-indigoLight uppercase cursor-pointer" onClick={() => setReviewFilter("all")}>Show All</span>
                            </div>
                            <div className="space-y-4 max-h-[180px] overflow-y-auto pr-2">
                                {reviewsData.filter(rev => reviewFilter === "all" || rev.stars === reviewFilter).map((rev, idx) => (
                                    <div key={idx} className="border-b border-white/5 pb-3">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <strong className="text-xs text-white">{rev.reviewer}</strong>
                                            <span className="text-brand-amber text-[9px] flex gap-0.5">{Array.from({ length: rev.stars }).map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">"{rev.text}"</p>
                                        <div className="text-[9px] text-gray-600 mt-1">{rev.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="benefits">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="glass-panel p-8">
                        <div className="flex items-center gap-4 text-brand-blue mb-8">
                            <span className="text-3xl"><i className="fa-solid fa-house-chimney-user"></i></span>
                            <h3 className="text-2xl font-bold">For Customers</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-brand-blue text-lg shrink-0 mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">Fast Emergency Booking</h4>
                                    <p className="text-sm text-gray-500">Find nearby professionals and see dispatch confirmations in under 90 seconds flat.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-brand-blue text-lg shrink-0 mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">Transparent Pricing & Billing</h4>
                                    <p className="text-sm text-gray-500">No unexpected bills. Pay exactly what was quoted dynamically in the profile upfront.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-panel-glow p-8">
                        <div className="flex items-center gap-4 text-brand-emerald mb-8">
                            <span className="text-3xl"><i className="fa-solid fa-user-gear"></i></span>
                            <h3 className="text-2xl font-bold">For Local Workers</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-brand-emerald text-lg shrink-0 mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">Zero Middlemen & High Revenue</h4>
                                    <p className="text-sm text-gray-500">Retain 90% of service booking values directly. Say goodbye to exploitative job agents.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-brand-emerald text-lg shrink-0 mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">Escrow Secured Payouts</h4>
                                    <p className="text-sm text-gray-500">Receive earnings directly to your UPI bank account immediately within hours of job sign-off.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FUTURE SCOPE / ADVANCED FEATURES */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">Advanced Scope & <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Future Frontiers</span></h2>
                    <p className="text-gray-400 text-base">FixKart is designed for scalable longevity. Our blueprint incorporates advanced integrations and AI modules setting the next paradigm.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-4 right-4 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight text-[9px] px-2 py-0.5 rounded-full font-bold">PHASE 2</span>
                        <span className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center text-lg mb-5"><i className="fa-solid fa-robot"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">AI Voice Assistant</h4>
                        <p className="text-gray-400 text-sm">Natural language voice-activated booking matching complex verbal complaints directly to specialized expert cards.</p>
                    </div>
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-4 right-4 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight text-[9px] px-2 py-0.5 rounded-full font-bold">PHASE 2</span>
                        <span className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center text-lg mb-5"><i className="fa-solid fa-map-location-dot"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Live GPS Tracking</h4>
                        <p className="text-gray-400 text-sm">Uber-like real-time maps transit notifications detailing accurate expert route ETAs and dispatch locations.</p>
                    </div>
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-4 right-4 bg-brand-indigoGlow border border-brand-indigoLight/20 text-brand-indigoLight text-[9px] px-2 py-0.5 rounded-full font-bold">PHASE 3</span>
                        <span className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center text-lg mb-5"><i className="fa-solid fa-vr-cardboard"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">AR Troubleshooting</h4>
                        <p className="text-gray-400 text-sm">Augmented Reality overlays matching domestic circuits, diagnostics, and pipes schemas using smart glass lens.</p>
                    </div>
                </div>
            </section>

            {/* ADMIN DASHBOARD PREVIEW SIMULATOR */}
            <section className="py-20 px-6 max-w-7xl mx-auto" id="dashboard">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">FixKart <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Command Center</span></h2>
                    <p className="text-gray-400 text-base">A deep analytics and operational cockpit for trust verification, customer disputes, active dispatch supervision, and category growth metrics.</p>
                </div>

                <div className="glass-panel-glow overflow-hidden p-0">
                    {/* Dashboard Header tab switches */}
                    <div className="bg-gray-950/50 border-b border-white/5 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
                            <strong className="text-white">FixKart Operations Portal</strong>
                            <span className="bg-white/5 text-[9px] px-2 py-0.5 rounded text-gray-500">v1.2 Live</span>
                        </div>
                        <div className="flex gap-2">
                            <button className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${dbTab === "approvals" ? "bg-white/5 border border-white/10 text-white" : "text-gray-500"}`} onClick={() => setDbTab("approvals")}>Worker Approvals {pendingApprovals.length > 0 && <span className="ml-1 bg-brand-red text-white text-[9px] px-1.5 py-0.5 rounded-full">{pendingApprovals.length}</span>}</button>
                            <button className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${dbTab === "analytics" ? "bg-white/5 border border-white/10 text-white" : "text-gray-500"}`} onClick={() => setDbTab("analytics")}>Live Metrics</button>
                            <button className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${dbTab === "disputes" ? "bg-white/5 border border-white/10 text-white" : "text-gray-500"}`} onClick={() => setDbTab("disputes")}>Moderation Log</button>
                        </div>
                    </div>

                    {/* Dashboard Tab contents rendering */}
                    <div className="p-6 md:p-8 min-h-[300px]">
                        {dbTab === "approvals" && (
                            <div>
                                <h4 className="text-sm font-bold text-white mb-4">Pending Accreditations Approvals Queue</h4>
                                {pendingApprovals.length === 0 ? (
                                    <p className="text-xs text-gray-500 text-center py-10">Applicant vetting queue clear! All active technicians verified.</p>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs border-collapse">
                                            <thead>
                                                <tr className="border-b border-white/5">
                                                    <th className="pb-3 text-gray-500">Applicant Name</th>
                                                    <th className="pb-3 text-gray-500">Trade Skill</th>
                                                    <th className="pb-3 text-gray-500">Experience</th>
                                                    <th className="pb-3 text-gray-500">Credentials Uploaded</th>
                                                    <th className="pb-3 text-gray-500">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {pendingApprovals.map(app => (
                                                    <tr key={app.id}>
                                                        <td className="py-4 font-semibold text-white">{app.name}</td>
                                                        <td className="py-4 font-bold text-brand-indigoLight">{app.trade}</td>
                                                        <td className="py-4">{app.exp}</td>
                                                        <td className="py-4 text-brand-emerald"><i className="fa-solid fa-circle-check mr-1"></i>{app.docs}</td>
                                                        <td className="py-4">
                                                            <div className="flex gap-2">
                                                                <button className="bg-brand-indigo text-white text-[10px] font-semibold px-2.5 py-1 rounded" onClick={() => approveApplicant(app.id)}>Approve</button>
                                                                <button className="bg-white/5 border border-white/10 text-brand-red text-[10px] px-2.5 py-1 rounded" onClick={() => rejectApplicant(app.id)}>Reject</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {dbTab === "analytics" && (
                            <div>
                                <div className="grid md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                        <div className="text-[10px] text-gray-500 uppercase">Active Dispatches</div>
                                        <div className="text-2xl font-bold text-white mt-1">142 Pros</div>
                                        <span className="text-brand-emerald text-[9px] mt-1 block"><i className="fa-solid fa-arrow-up mr-1"></i>+12% vs last hour</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                        <div className="text-[10px] text-gray-500 uppercase">Daily Transactions</div>
                                        <div className="text-2xl font-bold text-white mt-1">₹1,84,320</div>
                                        <span className="text-brand-emerald text-[9px] mt-1 block"><i className="fa-solid fa-arrow-up mr-1"></i>+4.5% daily flow</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                        <div className="text-[10px] text-gray-500 uppercase">Escrow Dispute Index</div>
                                        <div className="text-2xl font-bold text-white mt-1">0.42%</div>
                                        <span className="text-brand-emerald text-[9px] mt-1 block"><i className="fa-solid fa-arrow-down mr-1"></i>-0.15% decline</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                        <div className="text-[10px] text-gray-500 uppercase">Proximity Match ETA</div>
                                        <div className="text-2xl font-bold text-white mt-1">11.8 Mins</div>
                                        <span className="text-brand-emerald text-[9px] mt-1 block"><i className="fa-solid fa-bolt mr-1"></i>Stable dispatcher</span>
                                    </div>
                                </div>
                                
                                <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                                    <h4 className="text-xs font-bold text-gray-400 mb-4">Proximity Heat Demand Ratios</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs text-gray-400 mb-1"><span>Indiranagar sector</span><span>85% Density</span></div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-brand-indigoLight rounded-full" style={{ width: "85%" }}></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs text-gray-400 mb-1"><span>Koramangala Block</span><span>68% Density</span></div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-brand-blue rounded-full" style={{ width: "68%" }}></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {dbTab === "disputes" && (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="pb-3 text-gray-500">Booking Reference</th>
                                            <th className="pb-3 text-gray-500">Specialist Name</th>
                                            <th className="pb-3 text-gray-500">Escalation Issue</th>
                                            <th className="pb-3 text-gray-500">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="py-4 font-semibold text-white">#FK-982 (Rajiv Shah)</td>
                                            <td className="py-4">Amit Sharma</td>
                                            <td className="py-4"><span className="bg-brand-red/10 text-brand-red border border-brand-red/20 px-2 py-0.5 rounded">Damaged Pipe Claim</span></td>
                                            <td className="py-4"><button className="bg-brand-indigo text-white text-[10px] px-3 py-1 rounded" onClick={() => alert("Escrow refund released to customer Rajiv Shah.")}>Resolve & Refund</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-head font-extrabold mb-4">Built with <span className="bg-gradient-to-r from-brand-indigoLight to-brand-blue bg-clip-text text-transparent">Enterprise Grade Tech</span></h2>
                    <p className="text-gray-400 text-base">Designed with modern, secure, and infinitely scalable technologies to ensure lightning-fast operations, solid uptime, and bulletproof security.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-5 right-5 text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Web Client</span>
                        <span className="w-11 h-11 rounded-lg bg-indigo-500/10 text-brand-indigoLight flex items-center justify-center text-xl mb-5"><i className="fa-brands fa-react"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">React & Tailwind</h4>
                        <p className="text-gray-400 text-sm">Lightning fast rendering speeds using custom optimized components grids and styling layouts.</p>
                    </div>
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-5 right-5 text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Authentication</span>
                        <span className="w-11 h-11 rounded-lg bg-indigo-500/10 text-brand-indigoLight flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-key"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">Firebase Auth</h4>
                        <p className="text-gray-400 text-sm">Pragmatic logins using OTP tokens authentication layers securing user credential gates.</p>
                    </div>
                    <div className="glass-panel p-6 relative">
                        <span className="absolute top-5 right-5 text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Database Schema</span>
                        <span className="w-11 h-11 rounded-lg bg-indigo-500/10 text-brand-indigoLight flex items-center justify-center text-xl mb-5"><i className="fa-solid fa-database"></i></span>
                        <h4 className="text-lg font-bold text-white mb-2">.NET Core & SQL</h4>
                        <p className="text-gray-400 text-sm">Solid enterprise microservices backbones backed by Entity Framework Core transactional schemas.</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-950 border-t border-brand-borderGlass pt-20 pb-8 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <span className="w-9 h-9 bg-gradient-to-br from-brand-indigo to-brand-blue rounded-xl flex items-center justify-center text-white text-base"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                            <span className="font-head font-extrabold text-xl text-white">Fix<span className="text-brand-indigoLight">Kart</span></span>
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">Empowering local service technicians with digital growth and bringing trusted solutions direct to your doorstep.</p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Platform Quicklinks</h4>
                        <ul className="space-y-3.5 text-xs text-gray-500">
                            <li><a href="#about" className="hover:text-white transition-all">About Concept</a></li>
                            <li><a href="#features" className="hover:text-white transition-all">Platform Gaps</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-all">Platform Stepper</a></li>
                            <li><a href="#showcase" className="hover:text-white transition-all">Worker Showcase</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Join Ecosystem</h4>
                        <ul className="space-y-3.5 text-xs text-gray-500">
                            <li><a href="javascript:void(0)" onClick={() => { setModalType("worker"); setModalOpen(true); }} className="hover:text-white transition-all">Apply as Technician</a></li>
                            <li><a href="javascript:void(0)" onClick={() => { setModalType("customer"); setModalOpen(true); }} className="hover:text-white transition-all">Register Account</a></li>
                            <li><a href="#" className="hover:text-white transition-all">Ecosystem Warranties</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Contact Details</h4>
                        <ul className="space-y-4 text-xs text-gray-500">
                            <li className="flex items-start gap-2.5"><i className="fa-solid fa-location-dot text-brand-indigoLight text-sm shrink-0"></i><span>PES University Campus, Indiranagar Road, Bangalore, KA</span></li>
                            <li className="flex items-center gap-2.5"><i className="fa-solid fa-envelope text-brand-indigoLight text-sm shrink-0"></i><span>sandbox@fixkart.in</span></li>
                            <li className="flex items-center gap-2.5"><i className="fa-solid fa-phone text-brand-indigoLight text-sm shrink-0"></i><span>+91 80 4991 3822</span></li>
                        </ul>
                        <div className="inline-block bg-brand-amber/10 border border-brand-amber/25 text-brand-amber font-bold text-[9px] px-3 py-1 rounded mt-5 tracking-wider uppercase">College Presentation Sandbox</div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; 2026 FixKart Local Services Ecosystem. Designed for final-year project demonstration. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy Charter</a>
                        <span>•</span>
                        <a href="#" className="hover:text-white">Rules of Engagement</a>
                    </div>
                </div>
            </footer>

            {/* INTERACTIVE MODALS */}
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-brand-deep/85 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
                    <div className="glass-panel-glow w-full max-w-md p-8 md:p-10 relative animate-slide-up">
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl" onClick={() => setModalOpen(false)}>&times;</button>
                        
                        {modalType === "customer" && (
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-1">Launch Secure Repair</h3>
                                <p className="text-xs text-gray-500 text-center mb-6">Direct connections with verified background-cleared specialists in seconds.</p>
                                <form onSubmit={(e) => handleFormSubmit(e, 'customer')}>
                                    <div className="mb-4">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Select Service Category</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" id="bookCat">
                                            <option value="electrician" className="text-gray-900">Electrician & Electrical</option>
                                            <option value="plumber" className="text-gray-900">Plumber & Piping</option>
                                            <option value="mechanic" className="text-gray-900">Bike Mechanic & Tuning</option>
                                            <option value="carpenter" className="text-gray-900">Carpenter & Woodwork</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Region</label>
                                            <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" id="bookRegion" required>
                                                <option value="" className="text-gray-900">Select Region</option>
                                                <option value="indiranagar" className="text-gray-900">Indiranagar</option>
                                                <option value="koramangala" className="text-gray-900">Koramangala</option>
                                                <option value="hsr" className="text-gray-900">HSR Layout</option>
                                                <option value="whitefield" className="text-gray-900">Whitefield</option>
                                                <option value="jayanagar" className="text-gray-900">Jayanagar</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Detailed Address</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="Flat No / Street" required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Your Full Name</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="Rajesh" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Contact Phone</label>
                                            <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="+91" required />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Repair Complaint Description</label>
                                        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white h-20 resize-none" placeholder="Explain leakage details..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-bold text-xs py-3 rounded-lg shadow-lg"><i className="fa-solid fa-magnifying-glass mr-1.5"></i> Match Nearby Techs</button>
                                </form>
                            </div>
                        )}

                        {modalType === "worker" && (
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-1">Join as Service Partner</h3>
                                <p className="text-xs text-gray-500 text-center mb-6">Retain 90% booking value directly. Elevate your local brand digitally.</p>
                                <form onSubmit={(e) => handleFormSubmit(e, 'worker')}>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Your Full Name</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="Amit Sharma" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Specialty Category</label>
                                            <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white">
                                                <option value="electrician" className="text-gray-900">Electrician</option>
                                                <option value="plumber" className="text-gray-900">Plumber</option>
                                                <option value="mechanic" className="text-gray-900">Bike Mechanic</option>
                                                <option value="carpenter" className="text-gray-900">Carpenter</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Years Exp</label>
                                            <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" defaultValue="5" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Hourly Rate Requested</label>
                                            <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" defaultValue="299" required />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Govt Aadhaar ID Number</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="XXXX XXXX XXXX" required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Attach Technical Certifications (Optional)</label>
                                        <input type="file" className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-gray-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-brand-indigo/10 file:text-brand-indigoLight hover:file:bg-brand-indigo/20" />
                                    </div>
                                    <button type="submit" className="w-full bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-bold text-xs py-3 rounded-lg"><i className="fa-solid fa-circle-check mr-1.5"></i> Submit Application</button>
                                </form>
                            </div>
                        )}

                        {modalType === "direct" && activeTargetWorker && (
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-1">Confirm Proximity Escrow</h3>
                                <p className="text-xs text-gray-500 text-center mb-6">Securing specialist <strong>{activeTargetWorker.name}</strong></p>
                                <form onSubmit={triggerEscrowDispatch}>
                                    <div className="mb-4">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1">Escrow Base Secure Lock Amount</label>
                                        <div className="text-xl font-extrabold text-white bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                                            {activeTargetWorker.charge} <small className="text-[10px] text-gray-500 font-normal">(Secured in local escrow gateway)</small>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1">Escrow Payment Gateway</label>
                                        <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex gap-3 text-xs text-gray-300 items-center"><i className="fa-solid fa-wallet text-brand-emerald text-lg"></i><span>Escrow Secured Wallet / Post Pay UPI</span></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Customer Name</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" defaultValue="Rajiv S." required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Target Phone</label>
                                            <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" defaultValue="+91 99014 38220" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-brand-emerald text-white font-bold text-xs py-3 rounded-lg"><i className="fa-solid fa-lock mr-1.5"></i> Lock Escrow & Dispatch</button>
                                </form>
                            </div>
                        )}

                        {modalType === "chat" && activeTargetWorker && (
                            <div>
                                <h3 className="text-xl font-bold mb-1"><i className="fa-solid fa-comments text-brand-indigoLight mr-1.5"></i> Chat with Pro</h3>
                                <p className="text-xs text-gray-500 mb-4">Direct Connection: <strong>{activeTargetWorker.name}</strong></p>
                                
                                <div className="bg-gray-950/50 border border-white/5 rounded-xl h-60 overflow-y-auto p-4 mb-4 flex flex-col gap-3">
                                    {chatMessages.map((msg, i) => (
                                        <div key={i} className={`p-2.5 rounded-lg text-xs max-w-[80%] ${msg.sender === "user" ? "bg-brand-indigo text-white align-self-end self-end" : "bg-white/5 border border-white/5 text-gray-300 self-start"}`}>
                                            {msg.text}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex gap-2">
                                    <input type="text" className="grow bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="Type messages..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()} />
                                    <button className="bg-brand-indigo text-white text-xs font-bold px-4 rounded-lg" onClick={sendChatMessage}><i className="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </div>
                        )}

                        {modalType === "auth" && (
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-1">Firebase Authentication</h3>
                                <p className="text-xs text-gray-500 text-center mb-6">Secure Sandbox Sign In Gate</p>
                                
                                {authError && <div className="bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs p-2.5 rounded-lg mb-4 text-center">{authError}</div>}
                                
                                <form onSubmit={(e) => handleAuth(e, 'login')}>
                                    <div className="mb-4">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Password</label>
                                        <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="w-full bg-gradient-to-r from-brand-indigo to-brand-indigoLight text-white font-bold text-xs py-3 rounded-lg shadow-lg mb-3 flex justify-center items-center gap-2">
                                        {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-right-to-bracket"></i>} Log In
                                    </button>
                                    <button type="button" className="w-full bg-white/5 border border-white/10 text-xs text-gray-400 py-3 rounded-lg" onClick={(e) => handleAuth(e, 'signup')}>Create Mock Account</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    function openDirectBookModal(workerName, charge) {
        setActiveTargetWorker({ name: workerName, charge });
        setModalType("direct");
        setModalOpen(true);
    }

    function handleFormSubmit(e, type) {
        e.preventDefault();
        setModalOpen(false);
        if(type === 'customer') {
            const chosen = document.getElementById("bookCat").value;
            setActiveCat(chosen);
            setActiveWorkerIdx(0);
            document.getElementById("showcase").scrollIntoView({ behavior: 'smooth' });
            alert("Matchmaking engine successfully activated. We found active certified technicians ready. Review profiles below!");
        } else if(type === 'worker') {
            alert("Success! Application is received. Criminal check vetting will execute shortly.");
        }
    }
}
