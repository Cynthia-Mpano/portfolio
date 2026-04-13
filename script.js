const revealItems = document.querySelectorAll(".reveal");
const languageButtons = document.querySelectorAll(".lang-btn");
const translatedElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "hero.eyebrow": "Portfolio / Rwanda",
    "hero.title": "Full Stack Developer & IT Student",
    "hero.text": "I build thoughtful digital experiences with a strong focus on clarity, problem solving, and practical impact. I am currently a student of A2SV at the University of Rwanda in Rwanda.",
    "hero.ctaPrimary": "View Experience",
    "hero.ctaSecondary": "See Projects",
    "hero.focusLabel": "Current Focus",
    "hero.metric1Label": "Student",
    "hero.metric1Value": "University of Rwanda",
    "hero.metric2Label": "Program",
    "hero.metric2Value": "Bachelor in Information Technology",
    "hero.metric3Label": "Specialty",
    "hero.metric3Value": "Web Development & Software Solutions",
    "hero.metric4Label": "Base",
    "hero.metric4Value": "Kigali, Rwanda",
    "about.eyebrow": "About",
    "about.heading": "Professional, curious, and driven by useful work.",
    "about.p1": "I am a passionate and dedicated programmer who enjoys solving complex problems through code. My work spans both front-end and back-end development, and I enjoy creating applications and websites that are efficient, user-friendly, and reliable.",
    "about.p2": "Alongside my development work, I am continuing my academic journey as an Information Technology student and an A2SV student at the University of Rwanda. I bring a learner's mindset, strong communication, and a practical approach to building digital products that create real value.",
    "experience.eyebrow": "Experience",
    "experience.heading": "Timeline of growth, teaching, and product building.",
    "experience.ta.date": "2024 - Present",
    "experience.ta.title": "Teaching Assistant (TA)",
    "experience.ta.place": "G.S Byumba Inyange / Inspire, Educate and Empower Rwanda",
    "experience.ta.text": "Working in the Teaching Assistantship Project, supporting students in mathematics and computer science. This role strengthened my leadership, communication, and ability to break down complex concepts clearly.",
    "experience.dev.date": "Ongoing",
    "experience.dev.title": "Full Stack Developer",
    "experience.dev.place": "Independent Projects",
    "experience.dev.text": "Building websites and software solutions across front-end and back-end workflows using HTML, CSS, JavaScript, Django, and C#. I focus on creating practical products that improve workflows and user experience.",
    "experience.edu.date": "2024 - Present",
    "experience.edu.title": "Bachelor in Information Technology",
    "experience.edu.place": "University of Rwanda",
    "experience.edu.text": "Continuing formal training in information technology while sharpening software engineering, collaboration, and problem-solving skills.",
    "experience.a2sv.date": "Current",
    "experience.a2sv.title": "A2SV Student",
    "experience.a2sv.place": "African to Silicon Valley",
    "experience.a2sv.text": "Strengthening advanced problem solving, software engineering, and interview readiness through the A2SV learning community while studying in Rwanda.",
    "skills.eyebrow": "Skills",
    "skills.heading": "Technical ability backed by communication and leadership.",
    "skills.core": "Core Stack",
    "skills.webdev": "Web Development",
    "skills.software": "Software Solutions",
    "skills.strengths": "Strengths",
    "skills.problem": "Problem Solving",
    "skills.critical": "Critical Thinking",
    "skills.leadership": "Leadership",
    "skills.speaking": "Public Speaking",
    "skills.creativity": "Creativity",
    "skills.ict": "ICT Skills",
    "skills.languages": "Languages",
    "skills.english": "English",
    "skills.kinyarwanda": "Kinyarwanda",
    "skills.french": "French (Basic)",
    "contact.eyebrow": "Contact",
    "contact.heading": "Open to meaningful collaboration and professional opportunities.",
    "contact.text": "If you want to work together on websites, software solutions, or educational technology projects, I would be glad to connect.",
    "contact.projects": "Portfolio Projects",
    "counter.label": "visitors"
  },
  fr: {
    "nav.about": "A propos",
    "nav.experience": "Experience",
    "nav.skills": "Competences",
    "nav.contact": "Contact",
    "nav.cta": "Parlons",
    "hero.eyebrow": "Portfolio / Rwanda",
    "hero.title": "Developpeuse Full Stack et etudiante en informatique",
    "hero.text": "Je cree des experiences numeriques soignees avec un fort accent sur la clarte, la resolution de problemes et l'impact concret. Je suis actuellement etudiante a A2SV et a l'Universite du Rwanda au Rwanda.",
    "hero.ctaPrimary": "Voir l'experience",
    "hero.ctaSecondary": "Voir les projets",
    "hero.focusLabel": "Priorites actuelles",
    "hero.metric1Label": "Etudiante",
    "hero.metric1Value": "Universite du Rwanda",
    "hero.metric2Label": "Programme",
    "hero.metric2Value": "Licence en technologie de l'information",
    "hero.metric3Label": "Specialite",
    "hero.metric3Value": "Developpement web et solutions logicielles",
    "hero.metric4Label": "Base",
    "hero.metric4Value": "Kigali, Rwanda",
    "about.eyebrow": "A propos",
    "about.heading": "Professionnelle, curieuse et orientee vers un travail utile.",
    "about.p1": "Je suis une programmeuse passionnee et engagee qui aime resoudre des problemes complexes grace au code. Mon travail couvre le front-end et le back-end, et j'aime creer des applications et des sites web efficaces, fiables et faciles a utiliser.",
    "about.p2": "En parallele de mon travail de developpement, je poursuis mon parcours academique en tant qu'etudiante en technologie de l'information et etudiante A2SV a l'Universite du Rwanda. J'apporte un etat d'esprit d'apprentissage, une bonne communication et une approche pratique pour creer des produits numeriques utiles.",
    "experience.eyebrow": "Experience",
    "experience.heading": "Parcours de progression, d'enseignement et de creation de produits.",
    "experience.ta.date": "2024 - Aujourd'hui",
    "experience.ta.title": "Assistante d'enseignement",
    "experience.ta.place": "G.S Byumba Inyange / Inspire, Educate and Empower Rwanda",
    "experience.ta.text": "Je travaille dans le projet Teaching Assistantship en accompagnant les eleves en mathematiques et en informatique. Ce role a renforce mon leadership, ma communication et ma capacite a expliquer clairement des notions complexes.",
    "experience.dev.date": "En cours",
    "experience.dev.title": "Developpeuse Full Stack",
    "experience.dev.place": "Projets independants",
    "experience.dev.text": "Je developpe des sites web et des solutions logicielles sur les parties front-end et back-end avec HTML, CSS, JavaScript, Django et C#. Je me concentre sur des produits pratiques qui ameliorent les flux de travail et l'experience utilisateur.",
    "experience.edu.date": "2024 - Aujourd'hui",
    "experience.edu.title": "Licence en technologie de l'information",
    "experience.edu.place": "Universite du Rwanda",
    "experience.edu.text": "Je poursuis une formation formelle en technologie de l'information tout en renforcant mes competences en ingenierie logicielle, collaboration et resolution de problemes.",
    "experience.a2sv.date": "Actuel",
    "experience.a2sv.title": "Etudiante A2SV",
    "experience.a2sv.place": "African to Silicon Valley",
    "experience.a2sv.text": "Je renforce mes competences avancees en resolution de problemes, ingenierie logicielle et preparation aux entretiens grace a la communaute d'apprentissage A2SV tout en etudiant au Rwanda.",
    "skills.eyebrow": "Competences",
    "skills.heading": "Des competences techniques soutenues par la communication et le leadership.",
    "skills.core": "Stack principal",
    "skills.webdev": "Developpement web",
    "skills.software": "Solutions logicielles",
    "skills.strengths": "Forces",
    "skills.problem": "Resolution de problemes",
    "skills.critical": "Esprit critique",
    "skills.leadership": "Leadership",
    "skills.speaking": "Prise de parole en public",
    "skills.creativity": "Creativite",
    "skills.ict": "Competences TIC",
    "skills.languages": "Langues",
    "skills.english": "Anglais",
    "skills.kinyarwanda": "Kinyarwanda",
    "skills.french": "Francais (de base)",
    "contact.eyebrow": "Contact",
    "contact.heading": "Ouverte a une collaboration utile et a des opportunites professionnelles.",
    "contact.text": "Si vous souhaitez collaborer avec moi sur des sites web, des solutions logicielles ou des projets de technologie educative, je serai ravie d'echanger avec vous.",
    "contact.projects": "Projets du portfolio",
    "counter.label": "visiteurs"
  },
  rw: {
    "nav.about": "Ibyanjye",
    "nav.experience": "Uburambe",
    "nav.skills": "Ubumenyi",
    "nav.contact": "Twandikire",
    "nav.cta": "Vugana nanjye",
    "hero.eyebrow": "Porotifolio / Rwanda",
    "hero.title": "Full Stack Developer n'Umunyeshuri wa IT",
    "hero.text": "Nubaka ibikorwa bya digital byatekerejwe neza, nibanda ku busobanuro, gukemura ibibazo no gutanga umusaruro ugaragara. Ubu ndi umunyeshuri wa A2SV muri Kaminuza y'u Rwanda mu Rwanda.",
    "hero.ctaPrimary": "Reba uburambe",
    "hero.ctaSecondary": "Reba imishinga",
    "hero.focusLabel": "Ibyo ndi kwibandaho ubu",
    "hero.metric1Label": "Umunyeshuri",
    "hero.metric1Value": "Kaminuza y'u Rwanda",
    "hero.metric2Label": "Porogaramu",
    "hero.metric2Value": "Bachelor in Information Technology",
    "hero.metric3Label": "Icyerekezo",
    "hero.metric3Value": "Gukora imbuga na software solutions",
    "hero.metric4Label": "Aho ndi",
    "hero.metric4Value": "Kigali, Rwanda",
    "about.eyebrow": "Ibyanjye",
    "about.heading": "Umwuga wanjye ushingiye ku matsiko no gukora ibintu bifite umumaro.",
    "about.p1": "Ndi programmer ukunda ibyo akora kandi wishimira gukemura ibibazo bikomeye ukoresheje code. Akazi kanjye karimo front-end na back-end, kandi nkunda gukora applications na websites zikora neza, zorohereza abazikoresha kandi zizewe.",
    "about.p2": "Mu gihe nkora development, ndi no gukomeza urugendo rwanjye rw'amasomo nk'umunyeshuri wa Information Technology ndetse n'umunyeshuri wa A2SV muri Kaminuza y'u Rwanda. Nzana mindset yo kwiga, itumanaho ryiza n'uburyo bwo gukora ibisubizo bifatika bifite agaciro nyako.",
    "experience.eyebrow": "Uburambe",
    "experience.heading": "Urugendo rwo gukura, kwigisha no kubaka ibisubizo.",
    "experience.ta.date": "2024 - Ubu",
    "experience.ta.title": "Umufasha mu kwigisha",
    "experience.ta.place": "G.S Byumba Inyange / Inspire, Educate and Empower Rwanda",
    "experience.ta.text": "Nakoraga mu mushinga wa Teaching Assistantship mfasha abanyeshuri mu mibare na computer science. Uru ruhare rwakomeje kuntera leadership, communication no gusobanura neza concepts zikomeye.",
    "experience.dev.date": "Birakomeje",
    "experience.dev.title": "Full Stack Developer",
    "experience.dev.place": "Imishinga yigenga",
    "experience.dev.text": "Nubaka websites na software solutions ku ruhande rwa front-end na back-end nkoresheje HTML, CSS, JavaScript, Django na C#. Nibanda ku gukora products zifasha abantu gukora neza kandi zinoza user experience.",
    "experience.edu.date": "2024 - Ubu",
    "experience.edu.title": "Bachelor in Information Technology",
    "experience.edu.place": "Kaminuza y'u Rwanda",
    "experience.edu.text": "Ndi gukomeza amasomo ya information technology mu gihe nkiri no gukaza ubumenyi mu software engineering, gukorana n'abandi no gukemura ibibazo.",
    "experience.a2sv.date": "Ubu",
    "experience.a2sv.title": "Umunyeshuri wa A2SV",
    "experience.a2sv.place": "African to Silicon Valley",
    "experience.a2sv.text": "Ndi kongera ubumenyi buhanitse mu gukemura ibibazo, software engineering no kwitegura interviews binyuze mu muryango wa A2SV nkiri kwiga mu Rwanda.",
    "skills.eyebrow": "Ubumenyi",
    "skills.heading": "Ubumenyi bwa tekiniki bushyigikiwe n'itumanaho na leadership.",
    "skills.core": "Core Stack",
    "skills.webdev": "Gukora imbuga",
    "skills.software": "Software Solutions",
    "skills.strengths": "Imbaraga",
    "skills.problem": "Gukemura ibibazo",
    "skills.critical": "Gutekereza cyane",
    "skills.leadership": "Leadership",
    "skills.speaking": "Kuvugira mu ruhame",
    "skills.creativity": "Guhanga",
    "skills.ict": "Ubumenyi bwa ICT",
    "skills.languages": "Indimi",
    "skills.english": "Icyongereza",
    "skills.kinyarwanda": "Ikinyarwanda",
    "skills.french": "Igifaransa (shingiro)",
    "contact.eyebrow": "Twandikire",
    "contact.heading": "Niteguye ubufatanye bufite umumaro n'amahirwe y'umwuga.",
    "contact.text": "Niba ushaka ko dukorana ku mbuga, software solutions cyangwa imishinga ya educational technology, nzishimira kuvugana nawe.",
    "contact.projects": "Imishinga ya portfolio",
    "counter.label": "abasura"
  }
};

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;
  observer.observe(item);
});

// Language switcher
function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : "en";

  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[selectedLanguage][key];
    if (value) element.textContent = value;
  });

  document.documentElement.lang = selectedLanguage;

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selectedLanguage);
  });

  window.localStorage.setItem("portfolio-language", selectedLanguage);
}

const savedLanguage = window.localStorage.getItem("portfolio-language");
setLanguage(savedLanguage || "en");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Visitor counter (localStorage-based)
function updateVisitorCount() {
  const countEl = document.getElementById("visit-count");
  if (!countEl) return;

  let count = parseInt(window.localStorage.getItem("portfolio-visit-count") || "0", 10);

  // Only increment once per session
  if (!window.sessionStorage.getItem("portfolio-visited")) {
    count += 1;
    window.localStorage.setItem("portfolio-visit-count", count);
    window.sessionStorage.setItem("portfolio-visited", "1");
  }

  // Animate count up
  let current = 0;
  const step = Math.ceil(count / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, count);
    countEl.textContent = current.toLocaleString();
    if (current >= count) clearInterval(timer);
  }, 30);
}

updateVisitorCount();
