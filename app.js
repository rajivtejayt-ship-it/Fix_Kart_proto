/* ==========================================================================
   FIXKART DYNAMIC INTERACTION SCRIPTS
   ========================================================================== */

// --- DATA: Mock Worker Profiles Showcase ---
const workersData = {
    electrician: [
        {
            id: "elec-1",
            name: "Rajesh Kumar",
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&auto=format&fit=crop&q=80",
            experience: "8 Years",
            charge: "₹299",
            availability: "Today, 9 AM - 6 PM",
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
        }
    ]
};

// --- DATA: Mock Review Stream ---
const reviewsData = [
    { stars: 5, reviewer: "Rajiv Chandrasekhar", text: "Amit Sharma did an exceptional job hydro-jetting our clogged drain line. Transparent pricing and complete professional equipment. Highly recommended!", date: "15 Mins Ago • Bangalore" },
    { stars: 5, reviewer: "Meera Nair", text: "Rajesh Kumar arrived in 10 minutes flat! Fixed the sparkling distribution board quickly. Having certified experts with background clearance is highly comforting.", date: "1 Hour Ago • Bangalore" },
    { stars: 4, reviewer: "Rohit Deshmukh", text: "Imran Khan tuned my bike's carburetor perfectly. The throttle response feels like a brand-new machine. Docked one star because the payment gateway was lagging.", date: "3 Hours Ago • Bangalore" },
    { stars: 5, reviewer: "Ananya Hegde", text: "Sunita Rao installed our new eco-inverter system. Extremely tidy work, neat cables, and explained the battery maintenance rules clearly. Outstanding experience!", date: "Yesterday • Bangalore" },
    { stars: 3, reviewer: "Suresh Gowda", text: "Karan Johar replaced a tap and water purifier pipeline. The work was decent, but he arrived 20 minutes later than scheduled.", date: "2 Days Ago • Bangalore" },
    { stars: 1, reviewer: "Vikram Sen", text: "Unverified third-party technician who claimed to be helper arrived. Instantly rejected and raised query. FixKart helpline handled refund immediately.", date: "3 Days Ago • Bangalore" }
];

// --- DATA: Dynamic Timeline Steps ---
const timelineStepsData = {
    1: {
        title: "Step 1: Choose Your Service",
        desc: "Pick from a wide list of domestic and commercial repairs like plumbers, carpenters, device technicians, and vehicle mechanics instantly using our category hub.",
        screenHTML: `
            <div class="phone-nav"><i class="fa-solid fa-chevron-left"></i> <span>Find Services</span></div>
            <div class="phone-search-bar"><i class="fa-solid fa-magnifying-glass"></i> Search services...</div>
            <div class="phone-grid">
                <div class="phone-cat-box active"><i class="fa-solid fa-plug"></i><span>Electrical</span></div>
                <div class="phone-cat-box"><i class="fa-solid fa-faucet"></i><span>Plumbing</span></div>
                <div class="phone-cat-box"><i class="fa-solid fa-motorcycle"></i><span>Mechanic</span></div>
                <div class="phone-cat-box"><i class="fa-solid fa-hammer"></i><span>Carpentry</span></div>
            </div>
        `
    },
    2: {
        title: "Step 2: Compare Local Specialists",
        desc: "Instantly see matching workers in your exact proximity. Compare rates, response limits, background clearance details, and certifications on one screen.",
        screenHTML: `
            <div class="phone-nav"><i class="fa-solid fa-chevron-left"></i> <span>Technicians Nearby</span></div>
            <div style="background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:10px; margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong>Amit Sharma</strong> <span style="color:#10B981; font-size:0.65rem;"><i class="fa-solid fa-circle-check"></i> 99%</span>
                </div>
                <div style="font-size:0.65rem; color:#9CA3AF; margin-bottom:4px;">12 Yrs Exp • ₹349/hr</div>
                <div style="font-size:0.65rem; color:#F59E0B;"><i class="fa-solid fa-star"></i> 4.9 (310 reviews)</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:10px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong>Karan Johar</strong> <span style="color:#10B981; font-size:0.65rem;"><i class="fa-solid fa-circle-check"></i> 91%</span>
                </div>
                <div style="font-size:0.65rem; color:#9CA3AF; margin-bottom:4px;">6 Yrs Exp • ₹199/hr</div>
                <div style="font-size:0.65rem; color:#F59E0B;"><i class="fa-solid fa-star"></i> 4.7 (88 reviews)</div>
            </div>
        `
    },
    3: {
        title: "Step 3: Review Verified History",
        desc: "Examine detailed review cards from other home-owners. Read about behavior, cleanliness, and value fairness to build confidence before dispatching.",
        screenHTML: `
            <div class="phone-nav"><i class="fa-solid fa-chevron-left"></i> <span>Amit's Reviews</span></div>
            <div style="background: rgba(255,255,255,0.03); border-radius:8px; padding:8px; margin-bottom:8px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-weight:600;">
                    <span>Rajiv C.</span> <span style="color:#F59E0B;"><i class="fa-solid fa-star"></i> 5.0</span>
                </div>
                <p style="color:#9CA3AF; font-size:0.65rem; line-height:1.3;">Outstanding drainage repair work using proper equipment. Zero damage!</p>
            </div>
        `
    },
    4: {
        title: "Step 4: Book or Schedule Instantly",
        desc: "Schedule according to your personal availability window or request immediate dispatch. Transparent billing calculations are locked down dynamically.",
        screenHTML: `
            <div class="phone-nav"><i class="fa-solid fa-chevron-left"></i> <span>Confirm Booking</span></div>
            <div style="padding: 10px 0;">
                <div style="margin-bottom:8px;"><strong>Date & Time Selection</strong></div>
                <div style="display:flex; gap:6px; margin-bottom:12px;">
                    <div style="border:1px solid #4F46E5; background:rgba(79, 70, 229, 0.1); border-radius:4px; padding:6px; flex-grow:1; text-align:center; font-size:0.65rem;">Instant (9m)</div>
                    <div style="border:1px solid rgba(255,255,255,0.08); border-radius:4px; padding:6px; flex-grow:1; text-align:center; font-size:0.65rem;">Tomorrow</div>
                </div>
                <div style="display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
                    <span>Base Hourly Rate</span><strong>₹349</strong>
                </div>
            </div>
        `
    },
    5: {
        title: "Step 5: Worker Accept & Dispatch",
        desc: "A nearby professional receives the push request and starts journey. You receive tracking notifications, secure credentials validation, and expected arrival codes.",
        screenHTML: `
            <div class="phone-nav"><i class="fa-solid fa-chevron-left"></i> <span>Driver Dispatched</span></div>
            <div style="text-align:center; padding:12px 0;">
                <div style="width:50px; height:50px; border-radius:50%; border:3px solid #10B981; display:flex; align-items:center; justify-content:center; margin:0 auto 10px auto; color:#10B981; font-size:1.5rem;"><i class="fa-solid fa-truck-fast"></i></div>
                <strong>Amit Sharma is on the way</strong>
                <p style="color:#9CA3AF; font-size:0.65rem; margin-top:4px;">ETA: 7 Minutes • Distance: 1.4 km</p>
                <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:6px; padding:6px; display:inline-block; margin-top:8px; font-weight:700;">Secure Pin: 4920</div>
            </div>
        `
    },
    6: {
        title: "Step 6: Executed Safely & Cleanly",
        desc: "The verified professional completes the task, handles surrounding areas with tidiness guidelines, and submits completed job metrics details.",
        screenHTML: `
            <div class="phone-nav"><span>Job Progress</span></div>
            <div style="padding:10px 0;">
                <div style="display:flex; gap:10px; align-items:center; margin-bottom:12px;">
                    <i class="fa-solid fa-spinner fa-spin" style="color:#4F46E5;"></i> <span>Repairs in Progress...</span>
                </div>
                <div style="border-radius:6px; height:6px; background:rgba(255,255,255,0.05); overflow:hidden;">
                    <div style="width:75%; height:100%; background:#4F46E5;"></div>
                </div>
                <p style="font-size:0.65rem; color:#9CA3AF; margin-top:6px;">Standard plumbing line leak validation tests currently active.</p>
            </div>
        `
    },
    7: {
        title: "Step 7: Escrow Release & Review",
        desc: "Verify that work meets standards, unlock direct payment transfers, and rate experience levels across reliability, cleanliness, and value pricing.",
        screenHTML: `
            <div class="phone-nav"><span>Job Completed</span></div>
            <div style="text-align:center; padding:10px 0;">
                <div style="color:#10B981; font-size:2rem; margin-bottom:8px;"><i class="fa-solid fa-circle-check"></i></div>
                <strong>Bill Released: ₹349</strong>
                <div style="display:flex; justify-content:center; gap:4px; margin:8px 0; color:#F59E0B;">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <button style="width:100%; border:none; background:#10B981; color:#fff; font-weight:700; border-radius:6px; padding:8px; font-size:0.75rem; cursor:pointer;">Pay & Close</button>
            </div>
        `
    }
};

// --- DATA: Admin Dashboard Pending Tasks ---
let dbPendingApprovals = [
    { id: "app-101", name: "Ramesh Prasad", trade: "AC Technician", exp: "9 Yrs", docs: "Aadhaar + Govt Tech License Verified", score: "96%" },
    { id: "app-102", name: "Dinesh Patel", trade: "Painter", exp: "4 Yrs", docs: "Aadhaar Verified, License Pending", score: "89%" },
    { id: "app-103", name: "Sheela Devi", trade: "Plumbing Apprentice", exp: "3 Yrs", docs: "Aadhaar + Govt Skills Certified", score: "93%" }
];

// --- EVENT STATE STORAGE ---
let activeCategory = "electrician";
let activeWorkerIndex = 0;
let activeTimelineStep = 1;
let reviewsFilter = "all";

// ==========================================================================
// INITIAL SETUP ON WINDOW LOAD
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
    // 1. Initial renders
    renderWorkersList();
    renderActiveWorkerPage();
    renderReviewsStream();
    renderDashboard("approvals");
    updateTimelineStepDisplay(1);
    
    // 2. Set up event listeners for categories
    document.querySelectorAll(".worker-cat-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".worker-cat-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            activeCategory = e.target.getAttribute("data-category");
            activeWorkerIndex = 0;
            renderWorkersList();
            renderActiveWorkerPage();
        });
    });

    // 3. Set up event listeners for Timeline slider
    document.querySelectorAll(".timeline-step").forEach(step => {
        step.addEventListener("click", (e) => {
            const stepNum = parseInt(e.currentTarget.getAttribute("data-step"));
            activeTimelineStep = stepNum;
            document.querySelectorAll(".timeline-step").forEach(s => s.classList.remove("active"));
            e.currentTarget.classList.add("active");
            updateTimelineStepDisplay(stepNum);
        });
    });

    // 4. Scroll Reveal trigger
    initScrollReveal();

    // 5. Scroll Header behavior
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 6. Mobile menu navigation toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if(navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });
});

// ==========================================================================
// RENDER COMPONENT: WORKER LIST & DETAILS PAGE
// ==========================================================================
function renderWorkersList() {
    const listSide = document.getElementById("workerListSide");
    listSide.innerHTML = "";
    
    const categoryWorkers = workersData[activeCategory] || [];
    
    categoryWorkers.forEach((worker, index) => {
        const item = document.createElement("div");
        item.className = `showcase-worker-item ${index === activeWorkerIndex ? 'active' : ''}`;
        item.onclick = () => selectWorker(index);
        
        item.innerHTML = `
            <img src="${worker.avatar}" alt="${worker.name}" class="showcase-avatar">
            <div class="showcase-worker-info">
                <div class="worker-name-row">
                    <h4>${worker.name}</h4>
                    <span class="badge-verified"><i class="fa-solid fa-circle-check"></i> Verified</span>
                </div>
                <div class="showcase-worker-meta">
                    <span>${worker.experience} Exp</span>
                    <span>•</span>
                    <span>${worker.charge}/hr basis</span>
                </div>
                <div class="showcase-worker-rating">
                    <i class="fa-solid fa-star"></i> <span>${worker.rating} (${worker.reviewsCount} reviews)</span>
                </div>
            </div>
        `;
        listSide.appendChild(item);
    });
}

function selectWorker(index) {
    activeWorkerIndex = index;
    document.querySelectorAll(".showcase-worker-item").forEach((item, idx) => {
        if(idx === index) item.classList.add("active");
        else item.classList.remove("active");
    });
    renderActiveWorkerPage();
}

function renderActiveWorkerPage() {
    const pageWrap = document.getElementById("workerProductPage");
    const categoryWorkers = workersData[activeCategory] || [];
    const worker = categoryWorkers[activeWorkerIndex];
    
    if(!worker) {
        pageWrap.innerHTML = "<p>No active workers found in category.</p>";
        return;
    }
    
    const skillsListHTML = worker.skills.map(skill => `<span class="cat-pill"><i class="fa-solid fa-check"></i> ${skill}</span>`).join("");
    const certsHTML = worker.certifications.map(cert => `<div class="badge-verified" style="margin-top:6px; display:inline-flex;"><i class="fa-solid fa-certificate"></i> ${cert}</div>`).join(" ");
    
    const thumbsHTML = worker.portfolio.map(thumb => `<img src="${thumb}" alt="portfolio" class="portfolio-thumb">`).join("");
    
    pageWrap.innerHTML = `
        <div class="product-header-block">
            <img src="${worker.avatar}" alt="${worker.name}" class="product-avatar-large">
            <div class="product-title-column">
                <div class="product-name-row">
                    <h3>${worker.name}</h3>
                    <span class="badge-verified"><i class="fa-solid fa-circle-check"></i> ML Verified</span>
                </div>
                <div class="product-desc-row">${activeCategory.toUpperCase()} SPECIALIST • ${worker.experience} EXPERT</div>
                <div class="product-badge-row">
                    <span class="badge-trust"><i class="fa-solid fa-shield-halved"></i> Trust Index: ${worker.trustScore}/100</span>
                </div>
            </div>
        </div>

        <div class="product-metrics-grid">
            <div class="prod-metric-box">
                <div class="prod-metric-label">Client Reviews</div>
                <div class="prod-metric-val"><i class="fa-solid fa-star" style="color:var(--accent-amber);"></i> ${worker.rating}</div>
            </div>
            <div class="prod-metric-box">
                <div class="prod-metric-label">Response Time</div>
                <div class="prod-metric-val"><i class="fa-solid fa-bolt" style="color:var(--primary-light);"></i> ${worker.responseRate.split("(")[0]}</div>
            </div>
            <div class="prod-metric-box">
                <div class="prod-metric-label">Availability Today</div>
                <div class="prod-metric-val" style="color:var(--accent-emerald); font-size:0.9rem;"><i class="fa-solid fa-circle-play"></i> Active</div>
            </div>
        </div>

        <div style="margin-bottom: 28px;">
            <h4 style="font-size: 0.95rem; margin-bottom:8px; color:var(--text-secondary);">Expert Bio & Summary</h4>
            <p style="font-size: 0.9rem; line-height: 1.6;">${worker.about}</p>
        </div>

        <div style="margin-bottom: 28px;">
            <h4 style="font-size: 0.95rem; margin-bottom:12px; color:var(--text-secondary);">Core Skills & Focus Areas</h4>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${skillsListHTML}
            </div>
        </div>

        <div style="margin-bottom: 28px;">
            <h4 style="font-size: 0.95rem; margin-bottom:8px; color:var(--text-secondary);">Verified Accreditations</h4>
            <div style="display:flex; flex-direction:column; align-items:flex-start; gap:4px;">
                ${certsHTML}
            </div>
        </div>

        <div class="portfolio-preview-block">
            <h4>Verified Job Portfolios</h4>
            <div class="portfolio-thumbs-row">
                ${thumbsHTML || '<p style="font-size:0.8rem; color:var(--text-muted);">No images uploaded yet.</p>'}
            </div>
        </div>

        <div class="product-booking-block">
            <div class="product-price-label">
                <span>Total Charges (Escrow Secure)</span>
                <span>${worker.charge}<small>/hr base rate</small></span>
            </div>
            <div style="display:flex; gap:12px;">
                <button class="btn btn-secondary btn-md" onclick="openChatMock('${worker.name}')"><i class="fa-solid fa-comments"></i> Chat</button>
                <button class="btn btn-primary btn-md" onclick="openDirectBookModal('${worker.name}', '${worker.charge}')"><i class="fa-solid fa-calendar-check"></i> Book Instantly</button>
            </div>
        </div>
    `;
}

// ==========================================================================
// RENDER COMPONENT: HOW IT WORKS TIMELINE SLIDER
// ==========================================================================
function updateTimelineStepDisplay(stepNum) {
    const data = timelineStepsData[stepNum];
    if(!data) return;

    document.getElementById("timeline-step-title").innerText = data.title;
    document.getElementById("timeline-step-desc").innerText = data.desc;
    document.getElementById("phoneScreenMock").innerHTML = data.screenHTML;

    // Update progress dots
    const dotsContainer = document.getElementById("stepIndicatorDots");
    dotsContainer.innerHTML = "";
    for(let i=1; i<=7; i++) {
        const dot = document.createElement("span");
        dot.className = `dot ${i === stepNum ? 'active' : ''}`;
        dotsContainer.appendChild(dot);
    }
}

// ==========================================================================
// RENDER COMPONENT: LIVE REVIEWS FILTER SYSTEM
// ==========================================================================
function renderReviewsStream() {
    const scroller = document.getElementById("reviewScroller");
    scroller.innerHTML = "";

    const filteredReviews = reviewsData.filter(rev => {
        if(reviewsFilter === "all") return true;
        return rev.stars === parseInt(reviewsFilter);
    });

    if(filteredReviews.length === 0) {
        scroller.innerHTML = "<p style='font-size:0.85rem; color:var(--text-muted); text-align:center; padding: 20px 0;'>No customer reviews found matching this filter.</p>";
        return;
    }

    filteredReviews.forEach(rev => {
        const item = document.createElement("div");
        item.className = "review-post";
        
        let starsHTML = "";
        for(let i=0; i<5; i++) {
            if(i < rev.stars) starsHTML += '<i class="fa-solid fa-star"></i>';
            else starsHTML += '<i class="fa-regular fa-star"></i>';
        }

        item.innerHTML = `
            <div class="review-post-header">
                <span class="reviewer-name">${rev.reviewer}</span>
                <span class="review-post-stars">${starsHTML}</span>
            </div>
            <p class="reviewer-desc">"${rev.text}"</p>
            <div class="review-post-date">${rev.date}</div>
        `;
        scroller.appendChild(item);
    });
}

function filterReviews(stars) {
    reviewsFilter = stars;
    document.getElementById("ratingFilterText").innerText = `(Showing ${stars} Star Reviews)`;
    renderReviewsStream();
}

// ==========================================================================
// RENDER COMPONENT: ADMIN DASHBOARD SIMULATOR
// ==========================================================================
function switchDbTab(tabName) {
    document.querySelectorAll(".db-tab-btn").forEach(btn => {
        if(btn.getAttribute("data-tab") === tabName) btn.classList.add("active");
        else btn.classList.remove("active");
    });
    renderDashboard(tabName);
}

function renderDashboard(tabName) {
    const viewport = document.getElementById("dbViewport");
    
    if(tabName === "approvals") {
        let rowsHTML = "";
        
        if(dbPendingApprovals.length === 0) {
            rowsHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px 0; color:var(--text-muted);">All pending professionals verified! Zero queues.</td></tr>`;
        } else {
            dbPendingApprovals.forEach(app => {
                rowsHTML += `
                    <tr id="row-${app.id}">
                        <td class="db-avatar-col">
                            <div class="db-mini-avatar" style="background-color:var(--primary); font-size:0.75rem; color:#fff; display:flex; align-items:center; justify-content:center;">${app.name[0]}</div>
                            <div>
                                <div>${app.name}</div>
                                <small style="color:var(--text-muted); font-size:0.65rem;">ID: ${app.id}</small>
                            </div>
                        </td>
                        <td><strong>${app.trade}</strong></td>
                        <td>${app.exp}</td>
                        <td style="color:var(--accent-emerald); font-size:0.75rem;"><i class="fa-solid fa-circle-check"></i> ${app.docs}</td>
                        <td>
                            <div class="db-action-btn-row">
                                <button class="btn btn-primary btn-xs" onclick="approveWorker('${app.id}')">Approve & Live</button>
                                <button class="btn btn-secondary btn-xs" onclick="rejectWorker('${app.id}')" style="color:var(--accent-red); border-color:rgba(239, 68, 68, 0.2)">Reject</button>
                            </div>
                        </td>
                    </tr>
                `;
            });
        }

        viewport.innerHTML = `
            <div style="margin-bottom:16px; font-weight:600; display:flex; justify-content:space-between; align-items:center;">
                <span>Pending Technical Approvals Queue</span>
                <span class="badge-premium" style="margin:0; font-size:0.7rem;"><i class="fa-solid fa-user-plus"></i> Verification Gate Active</span>
            </div>
            <div style="overflow-x:auto;">
                <table class="db-data-table">
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Trade Category</th>
                            <th>Experience</th>
                            <th>Credentials Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if(tabName === "analytics") {
        viewport.innerHTML = `
            <div class="db-grid-overview">
                <div class="db-stat-box">
                    <span>Active Dispatches Nearby</span>
                    <h4>142 Pros</h4>
                    <span class="trend-up"><i class="fa-solid fa-arrow-up"></i> +12% vs last hour</span>
                </div>
                <div class="db-stat-box">
                    <span>Daily Transaction Escrow</span>
                    <h4>₹1,84,320</h4>
                    <span class="trend-up"><i class="fa-solid fa-arrow-up"></i> +4.5% vs yesterday</span>
                </div>
                <div class="db-stat-box">
                    <span>Platform Dispute Rate</span>
                    <h4>0.42%</h4>
                    <span class="trend-down" style="color:var(--accent-emerald);"><i class="fa-solid fa-arrow-down"></i> -0.15% decline</span>
                </div>
                <div class="db-stat-box">
                    <span>Average Service ETA</span>
                    <h4>11.8 Mins</h4>
                    <span class="trend-down" style="color:var(--accent-emerald);"><i class="fa-solid fa-clock"></i> Fast matching</span>
                </div>
            </div>
            <div class="glass-panel" style="padding:20px; border-color:var(--border-glass);">
                <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.8rem; font-weight:600;">
                    <span>Live Demand Densities by Micro-Location</span>
                    <span style="color:var(--primary-light);">Realtime Analytics</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:4px;">
                            <span>Indiranagar Sector</span><span>78 Active Bookings (High Demand)</span>
                        </div>
                        <div class="progress-track"><div class="progress-bar" style="width: 85%; background-color:var(--primary-light);"></div></div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:4px;">
                            <span>Koramangala Block</span><span>62 Active Bookings</span>
                        </div>
                        <div class="progress-track"><div class="progress-bar" style="width: 68%; background-color:var(--accent-blue);"></div></div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:4px;">
                            <span>HSR Layout Sector 2</span><span>44 Active Bookings</span>
                        </div>
                        <div class="progress-track"><div class="progress-bar" style="width: 48%; background-color:var(--accent-emerald);"></div></div>
                    </div>
                </div>
            </div>
        `;
    }
    else if(tabName === "disputes") {
        viewport.innerHTML = `
            <table class="db-data-table">
                <thead>
                    <tr>
                        <th>Consumer Dispute Details</th>
                        <th>Worker Assigned</th>
                        <th>Dispute Issue</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Rajiv Shah</strong><br>
                            <small style="color:var(--text-muted)">Indiranagar • Booking Ref #FK-982</small>
                        </td>
                        <td>Amit Sharma</td>
                        <td><span style="color:var(--accent-red); background:rgba(239, 68, 68, 0.1); padding:2px 6px; border-radius:4px; font-size:0.7rem;">Damaged Pipe Claim</span></td>
                        <td>
                            <div class="db-action-btn-row">
                                <button class="btn btn-primary btn-xs" onclick="alert('Dispute Arbitrator Assigned to contact customer.')">Initiate Escrow Refund</button>
                                <button class="btn btn-secondary btn-xs" onclick="alert('Investigation ticket opened with worker.')">Escrow Investigation</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Nikita Sen</strong><br>
                            <small style="color:var(--text-muted)">Jayanagar • Booking Ref #FK-110</small>
                        </td>
                        <td>Sunita Rao</td>
                        <td><span style="color:var(--accent-amber); background:rgba(245, 158, 11, 0.1); padding:2px 6px; border-radius:4px; font-size:0.7rem;">Overcharging Assessment</span></td>
                        <td>
                            <div class="db-action-btn-row">
                                <button class="btn btn-primary btn-xs" onclick="alert('Adjusted bill sent to customer.')">Adjust Bill (₹249)</button>
                                <button class="btn btn-secondary btn-xs" onclick="alert('Arbitrator assigned.')">Call Dispute Arbiter</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}

// Approval actions simulator
function approveWorker(id) {
    dbPendingApprovals = dbPendingApprovals.filter(app => app.id !== id);
    alert(`Applicant ${id} has been fully vetted, certified, and is now active in the FixKart Customer Booking catalog!`);
    
    // Update counters
    const counter = document.querySelector(".db-counter");
    if(counter) {
        const newVal = dbPendingApprovals.length;
        if(newVal > 0) counter.innerText = newVal;
        else counter.style.display = "none";
    }
    renderDashboard("approvals");
}

function rejectWorker(id) {
    dbPendingApprovals = dbPendingApprovals.filter(app => app.id !== id);
    alert(`Applicant ${id} has been rejected due to insufficient credentials validation.`);
    
    const counter = document.querySelector(".db-counter");
    if(counter) {
        const newVal = dbPendingApprovals.length;
        if(newVal > 0) counter.innerText = newVal;
        else counter.style.display = "none";
    }
    renderDashboard("approvals");
}

// ==========================================================================
// SCROLL REVEAL MANAGER
// ==========================================================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// INTERACTIVE BOOKING MODAL
// ==========================================================================
const modal = document.getElementById("bookingModal");
const modalBody = document.getElementById("modalBodyContent");

function openBookingModal(type) {
    modal.classList.add("active");
    
    if(type === "customer") {
        modalBody.innerHTML = `
            <h3 class="form-title">Launch Your Secure Repair</h3>
            <p class="form-subtitle">Direct connections with verified background-cleared nearby specialists in seconds.</p>
            
            <form onsubmit="handleFormSubmit(event, 'customer')">
                <div class="form-group">
                    <label>Select Service Category</label>
                    <select class="form-control" required id="bookCat">
                        <option value="electrician">Electrician & Electrical</option>
                        <option value="plumber">Plumber & Piping</option>
                        <option value="mechanic">Bike Mechanic & Tuning</option>
                        <option value="carpenter">Carpenter & Woodwork</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>What is your location or zip code?</label>
                    <input type="text" class="form-control" placeholder="E.g. Indiranagar, Bangalore" required value="Indiranagar, Bangalore">
                </div>
                <div class="form-row-grid">
                    <div class="form-group">
                        <label>Your Full Name</label>
                        <input type="text" class="form-control" placeholder="E.g. Rajesh Kumar" required>
                    </div>
                    <div class="form-group">
                        <label>Contact Mobile Number</label>
                        <input type="tel" class="form-control" placeholder="+91 XXXXX XXXXX" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Briefly describe the repair issue</label>
                    <textarea class="form-control" style="height:80px; resize:none;" placeholder="E.g. Water leak in kitchen pipe behind sink or ceiling fan spark."></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-md" style="width:100%;"><i class="fa-solid fa-magnifying-glass"></i> Match Nearby Techs</button>
            </form>
        `;
    } 
    else if(type === "worker") {
        modalBody.innerHTML = `
            <h3 class="form-title">Join as Service Partner</h3>
            <p class="form-subtitle">Retain 90% booking value directly. Elevate your local brand digitally.</p>
            
            <form onsubmit="handleFormSubmit(event, 'worker')">
                <div class="form-row-grid">
                    <div class="form-group">
                        <label>Your Full Name</label>
                        <input type="text" class="form-control" placeholder="E.g. Amit Sharma" required>
                    </div>
                    <div class="form-group">
                        <label>Trade Skill / Specialty</label>
                        <select class="form-control" required>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            <option value="mechanic">Bike Mechanic</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="ac">AC/Appliance Repairer</option>
                        </select>
                    </div>
                </div>
                <div class="form-row-grid">
                    <div class="form-group">
                        <label>Total Yrs of Experience</label>
                        <input type="number" class="form-control" min="1" placeholder="E.g. 5" required>
                    </div>
                    <div class="form-group">
                        <label>Target Hourly Base Rate (₹)</label>
                        <input type="number" class="form-control" placeholder="E.g. 299" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Aadhaar Card or ID Registration Number</label>
                    <input type="text" class="form-control" placeholder="XXXX XXXX XXXX" required>
                </div>
                <div class="form-group">
                    <label>Attach Govt Skill Certifications (Optional)</label>
                    <input type="file" class="form-control" style="font-size:0.75rem; padding: 8px;">
                </div>
                <button type="submit" class="btn btn-primary btn-md" style="width:100%;"><i class="fa-solid fa-circle-check"></i> Submit Vetting Application</button>
            </form>
        `;
    }
}

function openDirectBookModal(workerName, rate) {
    modal.classList.add("active");
    modalBody.innerHTML = `
        <h3 class="form-title">Book ${workerName}</h3>
        <p class="form-subtitle">Your secure hourly rate is guaranteed at <strong>${rate}/hr basis</strong>.</p>
        
        <form onsubmit="handleFormSubmit(event, 'direct')">
            <div class="form-group">
                <label>Verification Escrow Locked Amount</label>
                <div style="font-size:1.4rem; font-family:var(--font-head); font-weight:800; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:8px; padding:10px; text-align:center;">
                    ${rate} <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-body); font-weight:500;">(First hour base locked securely in escrow)</span>
                </div>
            </div>
            <div class="form-group">
                <label>Select Booking Mode</label>
                <select class="form-control" id="directMode" onchange="toggleDirectTime()" required>
                    <option value="instant">Instant Dispatch (ETA 12 minutes)</option>
                    <option value="schedule">Schedule for Later Date</option>
                </select>
            </div>
            <div class="form-group" id="directTimeGroup" style="display:none;">
                <label>Appointment Date & Time Selection</label>
                <input type="datetime-local" class="form-control">
            </div>
            <div class="form-row-grid">
                <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" class="form-control" required value="Rajiv S.">
                </div>
                <div class="form-group">
                    <label>Contact Phone</label>
                    <input type="tel" class="form-control" required value="+91 99014 38220">
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-md" style="width:100%;"><i class="fa-solid fa-lock"></i> Secure & Dispatch Technician</button>
        </form>
    `;
}

function toggleDirectTime() {
    const val = document.getElementById("directMode").value;
    const group = document.getElementById("directTimeGroup");
    if(val === "schedule") group.style.display = "block";
    else group.style.display = "none";
}

function openChatMock(workerName) {
    modal.classList.add("active");
    modalBody.innerHTML = `
        <h3 class="form-title" style="margin-bottom:6px;"><i class="fa-solid fa-comments" style="color:var(--primary-light);"></i> Secure Connection</h3>
        <p class="form-subtitle">End-to-end encrypted discussion with <strong>${workerName}</strong></p>
        
        <div style="background:rgba(0,0,0,0.2); border:1px solid var(--border-glass); border-radius:12px; height:240px; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:12px;" id="chatViewport">
            <div style="align-self:flex-start; background:rgba(255,255,255,0.04); border:1px solid var(--border-glass); border-radius:8px; padding:10px; max-width:80%; font-size:0.8rem;">
                Hello there! I am online and available for bookings in your location. Please share photos of your issue!
            </div>
        </div>
        <div style="display:flex; gap:10px; margin-top:16px;">
            <input type="text" class="form-control" id="chatInput" placeholder="Type message..." style="flex-grow:1;">
            <button class="btn btn-primary btn-md" onclick="sendChatMsg()"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
    `;
}

function sendChatMsg() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if(!msg) return;

    const view = document.getElementById("chatViewport");
    
    // User message
    const uMsg = document.createElement("div");
    uMsg.style.cssText = "align-self:flex-end; background:var(--primary); border-radius:8px; padding:10px; max-width:80%; font-size:0.8rem; color:#fff;";
    uMsg.innerText = msg;
    view.appendChild(uMsg);
    input.value = "";
    view.scrollTop = view.scrollHeight;

    // AI automated worker responder mock
    setTimeout(() => {
        const rMsg = document.createElement("div");
        rMsg.style.cssText = "align-self:flex-start; background:rgba(255,255,255,0.04); border:1px solid var(--border-glass); border-radius:8px; padding:10px; max-width:80%; font-size:0.8rem;";
        rMsg.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-emerald);"></i> Got it! Sounds like a straightforward fix. Go ahead and click **Book Instantly** so we can lock the appointment and route details!`;
        view.appendChild(rMsg);
        view.scrollTop = view.scrollHeight;
    }, 1200);
}

function handleFormSubmit(e, type) {
    e.preventDefault();
    closeBookingModal();
    
    if(type === 'customer') {
        const chosenCat = document.getElementById("bookCat").value;
        // Automatically switch worker category showcase
        activeCategory = chosenCat;
        activeWorkerIndex = 0;
        
        // Target button selector matching category
        document.querySelectorAll(".worker-cat-btn").forEach(btn => {
            if(btn.getAttribute("data-category") === chosenCat) btn.classList.add("active");
            else btn.classList.remove("active");
        });
        
        renderWorkersList();
        renderActiveWorkerPage();
        
        // Scroll smoothly to showcases
        document.getElementById("showcase").scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            alert("Matchmaking engine successfully activated. We found active certified technicians ready. Review profiles below!");
        }, 600);
    } 
    else if(type === 'worker') {
        alert("Success! Your service application is received. Our background-clearance team will complete government criminal database and credential checks. Vetting results will be emailed within 48 hours.");
    }
    else if(type === 'direct') {
        alert("Booking Escrow Confirmed! The verified technician has accepted your route request. Tracking telemetry details loaded.");
    }
}

function closeBookingModal() {
    modal.classList.remove("active");
}
