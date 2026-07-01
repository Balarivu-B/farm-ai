document.addEventListener("DOMContentLoaded", () => {
  // --- Crop Database ---
  const CROP_DATA = {
    wheat: {
      title: "Wheat Details",
      subtitle: "Triticum aestivum",
      water: "Moderate (4-6 times during lifecycle)",
      temp: "15°C – 24°C",
      soil: "Well-drained Loamy Soil",
      harvest: "110 – 140 days after sowing",
      description: "Wheat is a major global cereal grain. It requires cool weather during the early growth stage followed by warm, sunny conditions for ripening. It is highly sensitive to waterlogging, making loamy soil with good drainage essential."
    },
    rice: {
      title: "Rice Details",
      subtitle: "Oryza sativa",
      water: "High (Flooded conditions, 120-150 cm)",
      temp: "20°C – 37°C",
      soil: "Clayey or Clayey Loam (retains water)",
      harvest: "120 – 150 days after sowing",
      description: "Rice is the primary staple food for a large part of the world's population. It is tropical and requires high temperatures, abundant moisture, and prolonged flooding of paddies to grow successfully."
    },
    maize: {
      title: "Maize Details",
      subtitle: "Zea mays",
      water: "Moderate (needs regular watering at tasseling/silking)",
      temp: "18°C – 27°C",
      soil: "Deep, fertile, well-drained soils rich in organic matter",
      harvest: "90 – 120 days after sowing",
      description: "Maize, also known as corn, is a versatile crop grown globally. It requires plenty of sunlight and warm conditions. Proper drainage is crucial as maize roots are sensitive to waterlogged soils."
    },
    barley: {
      title: "Barley Details",
      subtitle: "Hordeum vulgare",
      water: "Low to Moderate (sensitive to waterlogging)",
      temp: "15°C – 20°C",
      soil: "Well-drained, fertile loam",
      harvest: "90 – 120 days after sowing",
      description: "Barley is a highly adaptable cereal grain. It is relatively drought-tolerant but needs good drainage to prevent root infections."
    },
    oats: {
      title: "Oats Details",
      subtitle: "Avena sativa",
      water: "Moderate (requires consistent moisture during growth)",
      temp: "10°C – 20°C",
      soil: "Silty loam to clay loam",
      harvest: "100 – 120 days after sowing",
      description: "Oats thrive in cool, moist climates. They require steady watering during germination and heading phases."
    },
    millet: {
      title: "Millet Details",
      subtitle: "Pennisetum glaucum",
      water: "Low (extremely drought-tolerant)",
      temp: "25°C – 35°C",
      soil: "Sandy loam or poor marginal soils",
      harvest: "70 – 90 days after sowing",
      description: "Millet is a smart climate-resilient crop that grows well in dry regions with minimal rainfall and fertilizer inputs."
    },
    sorghum: {
      title: "Sorghum Details",
      subtitle: "Sorghum bicolor",
      water: "Low to Moderate (drought-resistant)",
      temp: "26°C – 32°C",
      soil: "Clayey loam to sandy clay",
      harvest: "100 – 120 days after sowing",
      description: "Sorghum is widely cultivated for food and animal fodder. It tolerates heat and drought exceptionally well."
    },
    cotton: {
      title: "Cotton Details",
      subtitle: "Gossypium hirsutum",
      water: "Moderate to High (frequent irrigation during flowering)",
      temp: "21°C – 30°C",
      soil: "Deep, fertile black clayey soil (Regur)",
      harvest: "150 – 180 days after sowing",
      description: "Cotton is a major cash crop. It requires a long, frost-free growing period, high temperatures, and plenty of sunshine."
    },
    sugarcane: {
      title: "Sugarcane Details",
      subtitle: "Saccharum officinarum",
      water: "High (requires continuous hydration)",
      temp: "20°C – 35°C",
      soil: "Deep rich loamy or alluvial soils",
      harvest: "10 – 18 months after planting",
      description: "Sugarcane is a long-duration tropical crop. It needs heavy irrigation, high temperatures, and fertile soil to produce high sucrose levels."
    },
    soybean: {
      title: "Soybean Details",
      subtitle: "Glycine max",
      water: "Moderate (critical watering at flowering/pod-fill)",
      temp: "20°C – 30°C",
      soil: "Well-drained loam rich in organic matter",
      harvest: "90 – 120 days after sowing",
      description: "Soybean is a major source of vegetable oil and protein. It benefits from crop rotation and nitrogen-fixing soil bacteria."
    },
    groundnut: {
      title: "Groundnut Details",
      subtitle: "Arachis hypogaea",
      water: "Moderate (avoid waterlogging during pegging)",
      temp: "22°C – 30°C",
      soil: "Sandy loam or loose gravelly soil (helps pegging)",
      harvest: "110 – 130 days after sowing",
      description: "Groundnut or peanut is a legume that matures its seedpods underground. Loose, sandy soil is essential so the pegs can penetrate easily."
    },
    mustard: {
      title: "Mustard Details",
      subtitle: "Brassica juncea",
      water: "Low to Moderate (prefers dry conditions during maturity)",
      temp: "10°C – 25°C",
      soil: "Sandy loam to clay loam",
      harvest: "100 – 115 days after sowing",
      description: "Mustard is a cool-season oilseed crop. It requires cool temperatures during early growth and dry weather for seed development."
    },
    potato: {
      title: "Potato Details",
      subtitle: "Solanum tuberosum",
      water: "Moderate (frequent shallow watering)",
      temp: "15°C – 20°C",
      soil: "Loose, well-drained, sandy loam",
      harvest: "90 – 120 days after planting",
      description: "Potato is a major tuber crop. It requires loose, aerated soil to allow tubers to swell, and consistent, moderate moisture."
    },
    tomato: {
      title: "Tomato Details",
      subtitle: "Solanum lycopersicum",
      water: "Moderate to High (avoid overhead watering)",
      temp: "20°C – 25°C",
      soil: "Fertile, well-drained loam",
      harvest: "70 – 85 days after transplanting",
      description: "Tomatoes need warm climates, direct sunlight, and support stakes. Adequate calcium in soil prevents blossom end rot."
    },
    onion: {
      title: "Onion Details",
      subtitle: "Allium cepa",
      water: "Moderate (shallow root system needs frequent irrigation)",
      temp: "13°C – 24°C",
      soil: "Loose sandy loam rich in compost",
      harvest: "100 – 120 days after transplanting",
      description: "Onion is a bulb crop. It requires frequent, shallow watering and dry weather during bulb harvesting and curing stages."
    },
    garlic: {
      title: "Garlic Details",
      subtitle: "Allium sativum",
      water: "Moderate (keep soil moist but not soggy)",
      temp: "12°C – 24°C",
      soil: "Rich, well-drained, sandy loam",
      harvest: "130 – 150 days after planting",
      description: "Garlic grows from planted cloves during cool winter seasons. It needs plenty of organic compost and a long period of mild weather."
    }
  };

  // --- Crop-Specific Alerts and Events Database ---
  const CROP_ALERTS = {
    wheat: {
      alerts: [
        { title: "Yellow Rust Warning", type: "high-risk", desc: "High atmospheric humidity in the region increases the risk of yellow rust. Inspect Wheat fields daily and apply recommended propiconazole fungicide if symptoms appear." },
        { title: "Watering Schedule Advisory", type: "warning", desc: "Wheat is entering the Crown Root Initiation (CRI) stage. This is a critical watering phase; ensure fields are adequately hydrated within 20-25 days of sowing." },
        { title: "Market Price Alert", type: "info", desc: "Wholesale rates for Wheat (Sharbati) have climbed 4% in local mandis due to high demand. Good opportunity to sell excess yield." }
      ],
      events: [
        { title: "Fertilizer Top-Dressing (Urea)", date: "July 12, 2026", desc: "Apply second dose of nitrogenous fertilizer before watering." },
        { title: "Pest & Disease Field Survey", date: "July 18, 2026", desc: "Weekly inspection of plant stems and under-leaves for aphids." },
        { title: "Regional Farmer Cooperative Meet", date: "July 24, 2026", desc: "Monthly discussion on crop insurance and collective grain pricing." }
      ]
    },
    rice: {
      alerts: [
        { title: "Paddy Flooding Forecast", type: "warning", desc: "Heavy rains forecasted next week may lead to excess submergence. Check drainage channels in your paddy field to prevent lodging." },
        { title: "Blast Disease Warning", type: "high-risk", desc: "Warm day temperatures and nighttime dew favor rice blast infestation. Spray blasticides if spot lesions appear on leaves." },
        { title: "Electricity Subsidy Update", type: "info", desc: "Free farming power hours extended to 8 hours daily for paddy irrigation pumps." }
      ],
      events: [
        { title: "Weed Control Treatment", date: "July 10, 2026", desc: "Apply pre-emergence herbicide to control broadleaf weeds." },
        { title: "Irrigation Inspection", date: "July 15, 2026", desc: "Verify standing water levels of 5cm are maintained across paddies." },
        { title: "Soil Health Sampling", date: "July 28, 2026", desc: "Collect soil samples post-tillering for nitrogen analysis." }
      ]
    },
    maize: {
      alerts: [
        { title: "Fall Armyworm Alert", type: "high-risk", desc: "Active armyworm infestation reported in nearby maize fields. Check whorls of maize stalks immediately for caterpillar damage." },
        { title: "Zinc Deficiency Warning", type: "warning", desc: "White striping noticed on upper leaves. Spray zinc sulfate mixture as directed by extension officers." },
        { title: "Moisture Monitoring", type: "info", desc: "Tasseling phase is approaching. Maize requires steady watering; dry spells now can drop yields by up to 25%." }
      ],
      events: [
        { title: "Nitrogen Side-Dressing", date: "July 14, 2026", desc: "Apply nitrogenous fertilizer alongside row channels when maize is knee-high." },
        { title: "Whorl Inspection Walk", date: "July 20, 2026", desc: "Examine crop growth rate and check for early borer symptoms." },
        { title: "Yield Estimation Assessment", date: "August 02, 2026", desc: "Measure ear density and kernel rows per ear for harvest forecast." }
      ]
    },
    default: {
      alerts: [
        { title: "General Weather Advisory", type: "warning", desc: "Unseasonal showers predicted in parts of the district. Cover harvested produce or move it to dry storage sheds." },
        { title: "Organic Fertilizer Promotion", type: "info", desc: "Get 50% discount on organic compost and bio-fertilizers at the block agricultural headquarters." }
      ],
      events: [
        { title: "Soil Moisture Check", date: "July 12, 2026", desc: "Routine testing of root zone moisture before next irrigation cycle." },
        { title: "Farm Maintenance Day", date: "July 20, 2026", desc: "Clean irrigation canals and repair boundary fences." }
      ]
    }
  };

  const crops = ["wheat", "rice", "maize"];
  let currentCropIndex = 0;

  // In-memory reference for the active user state
  let currentUser = null;

  // --- Cookie Helper Functions ---
  function setCookie(name, value, days = 7) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
  }

  // --- Session & Registered Users Cookie Managers ---
  function getRegisteredUsersFromCookies() {
    const cookieVal = getCookie("registeredFarmers");
    if (cookieVal) {
      try {
        return JSON.parse(decodeURIComponent(cookieVal));
      } catch (e) {
        return [];
      }
    }
    return [];
  }

  function saveRegisteredUsersToCookies(users) {
    setCookie("registeredFarmers", encodeURIComponent(JSON.stringify(users)), 7); // Store for 7 days
  }

  // --- DOM Elements ---
  // Header Navigation & Greetings
  const userGreeting = document.getElementById("user-greeting");
  const btnLoginRegister = document.getElementById("btn-login-register");
  const btnResetSession = document.getElementById("btn-reset-session");
  const navHome = document.getElementById("nav-home");
  const navAbout = document.getElementById("nav-about");
  const navFeatures = document.getElementById("nav-features");
  const navContact = document.getElementById("nav-contact");
  const navDashboard = document.getElementById("nav-dashboard");

  // Views
  const landingView = document.getElementById("landing-view");
  const dashboardView = document.getElementById("dashboard-view");

  // Crop Slider elements
  const cropSlider = document.getElementById("crop-slider");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const cropCards = document.querySelectorAll(".crop-card");
  
  // Details Panel elements
  const detailTitle = document.getElementById("detail-title");
  const detailSubtitle = document.getElementById("detail-subtitle");
  const detailWater = document.getElementById("detail-water");
  const detailTemp = document.getElementById("detail-temp");
  const detailSoil = document.getElementById("detail-soil");
  const detailHarvest = document.getElementById("detail-harvest");
  const detailDescription = document.getElementById("detail-description");

  // Registration & Login Form Tab elements
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const loginForm = document.getElementById("login-form");
  const farmingForm = document.getElementById("farming-form");

  // Form Inputs & Error Spans
  const loginName = document.getElementById("login-name");
  const loginEmail = document.getElementById("login-email");
  const errLoginName = document.getElementById("err-login-name");
  const errLoginEmail = document.getElementById("err-login-email");

  const regId = document.getElementById("reg-id");
  const regName = document.getElementById("reg-name");
  const regEmail = document.getElementById("reg-email");
  const regPhone = document.getElementById("reg-phone");
  const regCrop = document.getElementById("reg-crop");
  const regAgree = document.getElementById("reg-agree");
  
  const errName = document.getElementById("err-name");
  const errEmail = document.getElementById("err-email");
  const errPhone = document.getElementById("err-phone");
  const errCrop = document.getElementById("err-crop");
  const errAgree = document.getElementById("err-agree");

  // Dashboard Sidebar & Panels
  const sideUsername = document.getElementById("side-username");
  const profileDisplayName = document.getElementById("profile-display-name");
  const profileDisplayId = document.getElementById("profile-display-id");
  const profileDisplayCrop = document.getElementById("profile-display-crop");
  const btnSideLogout = document.getElementById("btn-side-logout");
  const btnProfileLogout = document.getElementById("btn-profile-logout");
  const btnDownloadGuide = document.getElementById("btn-download-guide");

  // Toast & Alerts elements
  const toastContainer = document.getElementById("toast-container");
  const btnSideAlerts = document.getElementById("btn-side-alerts");
  const alertsList = document.getElementById("alerts-list");
  const eventsList = document.getElementById("events-list");

  // --- Toast Notification System ---
  function showToast(message, type = "success", duration = 4000) {
    if (!toastContainer) return;

    // Create toast card
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    // Choose icon based on type
    let icon = "ℹ️";
    if (type === "success") icon = "✔️";
    else if (type === "error") icon = "❌";
    else if (type === "warning") icon = "⚠️";

    // Set structure
    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-message">${message}</div>
      <button class="toast-close" aria-label="Close notification">&times;</button>
      <div class="toast-progress"></div>
    `;

    // Style the progress bar duration dynamically
    const progressBar = toast.querySelector(".toast-progress");
    if (progressBar) {
      progressBar.style.animationDuration = `${duration}ms`;
    }

    // Append to container
    toastContainer.appendChild(toast);

    // Setup close button click
    const closeBtn = toast.querySelector(".toast-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        dismissToast(toast);
      });
    }

    // Auto dismiss
    const autoDismissTimeout = setTimeout(() => {
      dismissToast(toast);
    }, duration);

    // Helper to dismiss with slide-out animation
    function dismissToast(toastEl) {
      if (toastEl.classList.contains("fade-out")) return;
      clearTimeout(autoDismissTimeout);
      toastEl.classList.add("fade-out");
      toastEl.addEventListener("animationend", (e) => {
        if (e.animationName === "toastFadeOut") {
          toastEl.remove();
        }
      });
    }
  }

  // --- Dynamic Dashboard Alerts population ---
  function updateDashboardAlerts(crop) {
    if (!alertsList || !eventsList) return;

    const cropKey = crop ? crop.toLowerCase().trim() : "default";
    const data = CROP_ALERTS[cropKey] || CROP_ALERTS["default"];

    // Populate Alerts
    alertsList.innerHTML = "";
    if (!data.alerts || data.alerts.length === 0) {
      alertsList.innerHTML = `
        <div class="alert-item">
          <p class="alert-desc">No active alerts at this time.</p>
        </div>
      `;
    } else {
      data.alerts.forEach(alert => {
        const item = document.createElement("div");
        item.className = "alert-item";
        item.innerHTML = `
          <div class="alert-header">
            <span class="alert-title">${alert.title}</span>
            <span class="alert-tag ${alert.type}">${alert.type.replace("-", " ")}</span>
          </div>
          <p class="alert-desc">${alert.desc}</p>
        `;
        alertsList.appendChild(item);
      });
    }

    // Populate Events
    eventsList.innerHTML = "";
    if (!data.events || data.events.length === 0) {
      eventsList.innerHTML = `
        <div class="event-item">
          <p class="event-desc">No upcoming events scheduled.</p>
        </div>
      `;
    } else {
      data.events.forEach(event => {
        const item = document.createElement("div");
        item.className = "event-item";
        item.innerHTML = `
          <div class="event-header">
            <span class="event-title">${event.title}</span>
            <span class="event-date">${event.date}</span>
          </div>
          <p class="event-desc">${event.desc}</p>
        `;
        eventsList.appendChild(item);
      });
    }
  }

  // --- Session Management ---
  function generateRegId() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    regId.value = `REG-${randomNum}`;
    return `REG-${randomNum}`;
  }

  function login(user, showGreetingToast = false) {
    currentUser = user;
    
    // Update Greeting and Header buttons
    userGreeting.textContent = `Welcome, ${user.name}!`;
    btnLoginRegister.style.display = "none";
    btnResetSession.style.display = "inline-flex";
    navDashboard.style.display = "inline-block";

    // Switch View
    landingView.classList.add("hidden-view");
    dashboardView.classList.remove("hidden-view");

    // Reset navbar active highlight
    setActiveNavLink(navDashboard);

    // Populate profile details
    sideUsername.textContent = user.name;
    profileDisplayName.textContent = user.name;
    profileDisplayId.textContent = user.regId;
    profileDisplayCrop.textContent = user.crop.charAt(0).toUpperCase() + user.crop.slice(1);

    // Load dynamic alerts
    updateDashboardAlerts(user.crop);

    // Show alert dot warning indicator when logging in
    const alertDot = document.querySelector("#btn-side-alerts .badge-dot");
    if (alertDot) {
      alertDot.style.display = "inline-block";
    }

    // Reset sidebar selection to My Profile
    const sidebarMenuItems = document.querySelectorAll(".sidebar-menu .menu-item");
    const dashboardPanels = document.querySelectorAll(".dashboard-panel");
    sidebarMenuItems.forEach(i => i.classList.remove("active"));
    dashboardPanels.forEach(p => p.classList.remove("active"));
    
    const profileMenuBtn = document.querySelector('.sidebar-menu button[data-panel="panel-overview"]');
    if (profileMenuBtn) profileMenuBtn.classList.add("active");
    const profilePanel = document.getElementById("panel-overview");
    if (profilePanel) profilePanel.classList.add("active");

    if (showGreetingToast) {
      showToast(`Welcome back, ${user.name}!`, "success");
    }
  }

  function logout(showToastFlag = false) {
    currentUser = null;
    deleteCookie("currentUser");

    // Update Greeting and Header buttons
    userGreeting.textContent = "Welcome, Guest";
    btnLoginRegister.style.display = "inline-flex";
    btnResetSession.style.display = "none";
    navDashboard.style.display = "none";

    // Switch View
    landingView.classList.remove("hidden-view");
    dashboardView.classList.add("hidden-view");

    // Reset navbar active highlight
    setActiveNavLink(navHome);

    // Generate new registration code for future signups
    generateRegId();

    if (showToastFlag) {
      showToast("Signed out of session successfully.", "info");
    }
  }

  function initSession() {
    generateRegId();
    const userCookie = getCookie("currentUser");
    if (userCookie) {
      try {
        const user = JSON.parse(decodeURIComponent(userCookie));
        login(user, false);
      } catch (e) {
        logout(false);
      }
    } else {
      logout(false);
    }
  }

  // --- Nav Highlight Helper ---
  function setActiveNavLink(activeEl) {
    const navItems = document.querySelectorAll(".nav-links .nav-item");
    navItems.forEach(item => item.classList.remove("active"));
    if (activeEl) {
      activeEl.classList.add("active");
    }
  }

  // Handle header nav items clicks
  const navLinksList = [
    { el: navHome, target: "#hero" },
    { el: navAbout, target: "#about" },
    { el: navFeatures, target: "#features" },
    { el: navContact, target: "#contact" }
  ];

  navLinksList.forEach(item => {
    if (item.el) {
      item.el.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveNavLink(item.el);
        
        // If in dashboard, return to public view
        landingView.classList.remove("hidden-view");
        dashboardView.classList.add("hidden-view");

        // Scroll to target
        const targetSection = document.querySelector(item.target);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  if (navDashboard) {
    navDashboard.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentUser) {
        login(currentUser);
      } else {
        // Scroll to registration
        setActiveNavLink(null);
        document.getElementById("registration-section").scrollIntoView({ behavior: "smooth" });
        switchFormTab("login");
        loginName.focus();
      }
    });
  }

  if (btnLoginRegister) {
    btnLoginRegister.addEventListener("click", () => {
      document.getElementById("registration-section").scrollIntoView({ behavior: "smooth" });
      switchFormTab("login");
      loginName.focus();
    });
  }

  if (btnResetSession) {
    btnResetSession.addEventListener("click", () => logout(true));
  }

  // --- Crop Directory Slider & Details ---
  let autoPlayInterval = null;

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
      // Only advance slide if the landing view is currently visible
      if (landingView && !landingView.classList.contains("hidden-view")) {
        let nextIndex = (currentCropIndex + 1) % crops.length;
        updateCropSlider(nextIndex, false);
      }
    }, 4500);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function updateCropSlider(index, showToastFlag = false) {
    currentCropIndex = index;
    const cropKey = crops[index];
    
    // Shift Slider dynamically based on the percentage of total cards
    cropSlider.style.transform = `translateX(-${index * (100 / crops.length)}%)`;

    // Toggle active card
    cropCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // Update details card
    const cropInfo = CROP_DATA[cropKey];
    if (cropInfo) {
      detailTitle.textContent = cropInfo.title;
      detailSubtitle.textContent = cropInfo.subtitle;
      detailWater.textContent = cropInfo.water;
      detailTemp.textContent = cropInfo.temp;
      detailSoil.textContent = cropInfo.soil;
      detailHarvest.textContent = cropInfo.harvest;
      detailDescription.textContent = cropInfo.description;

      if (showToastFlag) {
        showToast(`Loaded details for ${cropKey.charAt(0).toUpperCase() + cropKey.slice(1)}`, "info");
      }
    }
  }

  btnNext.addEventListener("click", () => {
    let nextIndex = (currentCropIndex + 1) % crops.length;
    updateCropSlider(nextIndex, true);
    startAutoPlay(); // Reset timer on interaction
  });

  btnPrev.addEventListener("click", () => {
    let prevIndex = (currentCropIndex - 1 + crops.length) % crops.length;
    updateCropSlider(prevIndex, true);
    startAutoPlay(); // Reset timer on interaction
  });

  cropCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      updateCropSlider(idx, true);
      startAutoPlay(); // Reset timer on interaction
    });
  });

  // Pause autoplay on mouse hover over the slider container
  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoPlay);
    sliderContainer.addEventListener("mouseleave", startAutoPlay);
  }

  // Start the autoplay cycle initially
  startAutoPlay();

  // --- Form Switch Tabs ---
  function switchFormTab(tab) {
    if (tab === "login") {
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");
      loginForm.classList.remove("hidden-form");
      farmingForm.classList.add("hidden-form");
    } else {
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");
      farmingForm.classList.remove("hidden-form");
      loginForm.classList.add("hidden-form");
    }
  }

  tabLogin.addEventListener("click", () => switchFormTab("login"));
  tabRegister.addEventListener("click", () => switchFormTab("register"));

  // --- Form Validation & Submission ---
  // Helper to clear error logs
  function clearErrors() {
    errLoginName.style.display = "none";
    errLoginEmail.style.display = "none";
    errName.style.display = "none";
    errEmail.style.display = "none";
    errPhone.style.display = "none";
    errCrop.style.display = "none";
    errAgree.style.display = "none";
  }

  // Register Form
  farmingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let hasErrors = false;
    const nameVal = regName.value.trim();
    const emailVal = regEmail.value.trim();
    const phoneVal = regPhone.value.trim();
    const cropVal = regCrop.value.trim();
    const agreeChecked = regAgree.checked;

    // Validate Name
    if (!nameVal) {
      errName.textContent = "Full name is required.";
      errName.style.display = "block";
      hasErrors = true;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      errEmail.textContent = "Email address is required.";
      errEmail.style.display = "block";
      hasErrors = true;
    } else if (!emailRegex.test(emailVal)) {
      errEmail.textContent = "Please enter a valid email address.";
      errEmail.style.display = "block";
      hasErrors = true;
    }

    // Validate Phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneVal) {
      errPhone.textContent = "Phone number is required.";
      errPhone.style.display = "block";
      hasErrors = true;
    } else if (!phoneRegex.test(phoneVal)) {
      errPhone.textContent = "Phone number must be exactly 10 digits.";
      errPhone.style.display = "block";
      hasErrors = true;
    }

    // Validate Preferred Crop
    if (!cropVal) {
      errCrop.textContent = "Please enter a preferred crop.";
      errCrop.style.display = "block";
      hasErrors = true;
    }

    // Validate Checkbox Terms
    if (!agreeChecked) {
      errAgree.textContent = "You must agree to the guidelines & terms.";
      errAgree.style.display = "block";
      hasErrors = true;
    }

    if (hasErrors) {
      showToast("Please check the form for validation errors.", "warning");
      return;
    }

    // Retrieve registered list from cookies
    const registeredUsers = getRegisteredUsersFromCookies();
    
    // Check if email already registered
    const userExists = registeredUsers.some(u => u.email === emailVal.toLowerCase());
    if (userExists) {
      errEmail.textContent = "This email is already registered.";
      errEmail.style.display = "block";
      showToast("This email is already registered.", "error");
      return;
    }

    // Create user object
    const newUser = {
      name: nameVal,
      email: emailVal.toLowerCase(),
      phone: phoneVal,
      crop: cropVal,
      regId: regId.value
    };

    // Add to registered list and save to cookie
    registeredUsers.push(newUser);
    saveRegisteredUsersToCookies(registeredUsers);

    // Save active session to cookie
    setCookie("currentUser", encodeURIComponent(JSON.stringify(newUser)), 7); // Persist for 7 days

    // Clear registration fields
    regName.value = "";
    regEmail.value = "";
    regPhone.value = "";
    regCrop.value = "";
    regAgree.checked = false;

    // Log in
    login(newUser, false);
    showToast(`Registration successful! Welcome, ${newUser.name}.`, "success");
  });

  // Login Form
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let hasErrors = false;
    const nameVal = loginName.value.trim();
    const emailVal = loginEmail.value.trim();

    if (!nameVal) {
      errLoginName.textContent = "Name is required to log in.";
      errLoginName.style.display = "block";
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      errLoginEmail.textContent = "Email is required to log in.";
      errLoginEmail.style.display = "block";
      hasErrors = true;
    } else if (!emailRegex.test(emailVal)) {
      errLoginEmail.textContent = "Please enter a valid email address.";
      errLoginEmail.style.display = "block";
      hasErrors = true;
    }

    if (hasErrors) {
      showToast("Please enter a valid name and email to log in.", "warning");
      return;
    }

    // Look up user in registered list stored in cookies
    const registeredUsers = getRegisteredUsersFromCookies();
    const matchedUser = registeredUsers.find(
      u => u.name.toLowerCase() === nameVal.toLowerCase() && u.email === emailVal.toLowerCase()
    );

    if (matchedUser) {
      // Save active session to cookie
      setCookie("currentUser", encodeURIComponent(JSON.stringify(matchedUser)), 7); // Persist for 7 days
      
      loginName.value = "";
      loginEmail.value = "";
      login(matchedUser, true);
    } else {
      errLoginEmail.textContent = "No registered farmer account found with these details. Please register first.";
      errLoginEmail.style.display = "block";
      showToast("Account not found. Please register first.", "error");
    }
  });

  // --- Dashboard Actions ---
  btnSideLogout.addEventListener("click", () => logout(true));
  btnProfileLogout.addEventListener("click", () => logout(true));

  // --- Sidebar panel switching ---
  const sidebarMenuItems = document.querySelectorAll(".sidebar-menu .menu-item");
  const dashboardPanels = document.querySelectorAll(".dashboard-panel");

  sidebarMenuItems.forEach(item => {
    if (item.classList.contains("logout-btn")) return;

    item.addEventListener("click", () => {
      sidebarMenuItems.forEach(i => i.classList.remove("active"));
      dashboardPanels.forEach(p => p.classList.remove("active"));

      item.classList.add("active");
      const panelId = item.getAttribute("data-panel");
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }

      // Hide the alert dot once user views the Crop Alerts page
      if (panelId === "panel-alerts") {
        const dot = item.querySelector(".badge-dot");
        if (dot) {
          dot.style.display = "none";
        }
      }
    });
  });

  // --- Personal Guide Document Downloader ---
  btnDownloadGuide.addEventListener("click", () => {
    if (!currentUser) return;

    const cropKey = currentUser.crop.toLowerCase().trim();
    const cropInfo = CROP_DATA[cropKey] || {
      title: `${currentUser.crop.charAt(0).toUpperCase() + currentUser.crop.slice(1)} Details`,
      subtitle: "Custom Guidelines",
      water: "Regular irrigation based on soil moisture monitoring",
      temp: "Standard seasonal cultivation temperatures",
      soil: "Well-drained fertile loam rich in organic nutrients",
      harvest: "Observe crop maturity cycle to harvest at peak yield",
      description: `Agronomic details and cultivation guide for growing healthy organic ${currentUser.crop} crops.`
    };

    const fileContent = `===================================================
FARMEASE AI - PERSONALIZED SOWING & HARVEST GUIDE
===================================================
Farmer Details:
---------------------------------------------------
Farmer Name       : ${currentUser.name}
Registration Code : ${currentUser.regId}
Email Address     : ${currentUser.email}
Phone Number      : ${currentUser.phone}
Preferred Crop    : ${cropInfo.title.replace(" Details", "")} (${cropInfo.subtitle})

Ideal Cultivation Guidelines:
---------------------------------------------------
Watering Schedule : ${cropInfo.water}
Ideal Temperature : ${cropInfo.temp}
Preferred Soil Type: ${cropInfo.soil}
Harvesting Period : ${cropInfo.harvest}

Botanical Description & Agronomy Tips:
---------------------------------------------------
${cropInfo.description}

General Recommendations for Organic Yield:
---------------------------------------------------
1. Use organic compost and bio-fertilizers. Check with
   local extension centers for soil nitrogen values.
2. Adopt drip irrigation to optimize water consumption
   and protect roots from waterlogging.
3. Regularly scan leaves for pests like rust and aphids
   using the FarmEase AI leaf diagnosis tool.

Government Subsidies You May Qualify For:
---------------------------------------------------
- PM-KISAN Samman Nidhi (₹6,000 / year direct benefit)
- Pradhan Mantri Fasal Bima Yojana (Premium Protection)
- Organic Compost and bio-pesticides 50% subsidy scheme

---------------------------------------------------
support@farmease.ai | Emergency Line: +1 (800) 555-FARM
Green Valley Tech Park, Suite 402, India
===================================================`;

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `FarmEase_Sowing_Guide_${currentUser.crop}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    showToast(`Farming guide downloaded successfully!`, "success");
  });

  // --- Initialize App ---
  initSession();
});
