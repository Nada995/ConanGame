const GAME_CONFIG = {
  title: "جريمة في ليلة الزفاف",
  caseNumber: "302",
  victim: "ليان الحربي",
  location: "غرفة تجهيز العروس",
  deathTime: "8:20 مساءً",
  timeLimitMinutes: 45,
  killer: "jood",
  summary:
    "قبل بداية الزفة بدقائق، وُجدت العروس ليان الحربي فاقدة للحياة داخل غرفة التجهيز. بجانبها كأس قهوة مكسور، ورسالة تهديد، وخاتم لا يعود لها. كل الحاضرين يملكون أسرارًا… لكن قاتلًا واحدًا فقط ترك أثره في المكان.",
  facts: [
    { label: "الضحية", value: "ليان الحربي — العروس" },
    { label: "مكان الجريمة", value: "غرفة تجهيز العروس" },
    { label: "وقت الوفاة المتوقع", value: "8:20 مساءً" },
    { label: "حالة القضية", value: "قضية لم تُحل" }
  ],
  suspects: [
    {
      id: "fares",
      name: "فارس",
      role: "العريس",
      motive: "اكتشف أن العروس كانت تخفي عنه سرًا ماليًا.",
      lastSeen: "قرب غرفة العروس الساعة 8:15.",
      note: "ينفي دخوله للغرفة، لكن توقيته مشبوه."
    },
    {
      id: "raneem",
      name: "رنيم",
      role: "أخت العروس",
      motive: "غيرة قديمة بسبب تفضيل العائلة للعروس.",
      lastSeen: "في غرفة المكياج الساعة 8:10.",
      note: "كانت غاضبة، لكنها لم تُشاهد تحمل شيئًا."
    },
    {
      id: "jood",
      name: "جود",
      role: "الصديقة المقربة",
      motive: "خلاف مالي كبير مع العروس ورسالة تهديد قبل الزفاف.",
      lastSeen: "شوهدت تحمل فنجان قهوة للعروس الساعة 8:12.",
      note: "خرجت من الغرفة متوترة قبل اكتشاف الجريمة بدقيقتين."
    },
    {
      id: "noura",
      name: "نورة",
      role: "منسقة الحفل",
      motive: "تعرضت للتهديد من العروس بعد خطأ كبير في التنظيم.",
      lastSeen: "بجانب طاولة الضيافة.",
      note: "كانت قريبة من المشروبات، لكن لا يوجد دليل مباشر ضدها."
    }
  ],
  evidence: [
    { title: "كأس القهوة", detail: "وُجدت آثار مادة مهدئة قوية داخل الكأس." },
    { title: "رسالة تهديد", detail: "مكتوب فيها: إذا لم ترجعي المال قبل الزفاف، سأفضحك أمام الجميع." },
    { title: "خاتم مكسور", detail: "الخاتم يعود للصديقة جود، لكنه وُجد تحت كرسي العروس." },
    { title: "كاميرا القاعة", detail: "أظهرت جود تدخل غرفة العروس الساعة 8:12 وتخرج متوترة الساعة 8:18." }
  ],
  testimonies: [
    { person: "فارس — العريس", text: "كنت أنتظر بداية الزفة ولم أدخل غرفة العروس أبدًا." },
    { person: "رنيم — أخت العروس", text: "جود كانت متوترة جدًا، وكانت تصر أن تدخل على ليان وحدها." },
    { person: "نورة — منسقة الحفل", text: "رأيت جود تحمل قهوة للعروس، وبعدها اختفت لدقائق." }
  ],
  lounge: [
    { title: "القهوة", text: "قهوة عربية، قهوة باردة، أو شاي للمحققات." },
    { title: "الحلا والسناك", text: "ميني دونات، براونيز، كوكيز، فشار، وشوكولاتة." },
    { title: "العقاب", text: "إحضار القهوة للفريق الفائز + قراءة اعتراف: أنا محققة فاشلة وأتهم الأبرياء." },
    { title: "الجائزة", text: "بطاقة أفضل محققة + شوكولاتة فاخرة أو ميدالية بسيطة." }
  ],
  winMessage:
    "✅ تم حل القضية بنجاح! القاتلة هي جود، الصديقة المقربة. الدافع: خلاف مالي ورسالة تهديد. طريقة الجريمة: وضعت مادة مهدئة قوية في قهوة العروس ثم غادرت الغرفة قبل اكتشاف الجريمة.",
  failMessage:
    "❌ الاتهام غير صحيح! لم يتم حل القضية، ويجب تنفيذ العقاب: إحضار القهوة للفريق الفائز + قراءة اعتراف: أنا محققة فاشلة وأتهم الأبرياء."
};

const $ = (selector) => document.querySelector(selector);
const create = (tag, className, html) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html) element.innerHTML = html;
  return element;
};

let timerInterval = null;
let remainingSeconds = GAME_CONFIG.timeLimitMinutes * 60;
let timerStarted = false;

function startInvestigation() {
  $("#hero").classList.add("hidden");
  $("#app").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetGame() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerStarted = false;
  remainingSeconds = GAME_CONFIG.timeLimitMinutes * 60;
  renderTimer();
  $("#timerBtn").textContent = "بدء العداد";
  $("#killerSelect").value = "";
  $("#motiveText").value = "";
  $("#resultBox").className = "result hidden";
  document.querySelectorAll(".open").forEach((card) => card.classList.remove("open"));
  $("#app").classList.add("hidden");
  $("#hero").classList.remove("hidden");
}

function renderGame() {
  $("#caseSummary").textContent = GAME_CONFIG.summary;

  const factsGrid = $("#factsGrid");
  GAME_CONFIG.facts.forEach((fact) => {
    factsGrid.appendChild(create("div", "fact", `<strong>${fact.label}</strong><span>${fact.value}</span>`));
  });

  const suspectsGrid = $("#suspectsGrid");
  const killerSelect = $("#killerSelect");
  GAME_CONFIG.suspects.forEach((suspect) => {
    suspectsGrid.appendChild(create("article", "mystery-card", `
      <span class="tag">${suspect.role}</span>
      <h3>${suspect.name}</h3>
      <p>اضغطي لكشف التفاصيل</p>
      <div class="details">
        <strong>الدافع:</strong> ${suspect.motive}<br>
        <strong>آخر مكان:</strong> ${suspect.lastSeen}<br>
        <strong>ملاحظة:</strong> ${suspect.note}
      </div>
    `));

    const option = create("option");
    option.value = suspect.id;
    option.textContent = `${suspect.name} — ${suspect.role}`;
    killerSelect.appendChild(option);
  });

  const evidenceGrid = $("#evidenceGrid");
  GAME_CONFIG.evidence.forEach((item, index) => {
    evidenceGrid.appendChild(create("article", "mystery-card", `
      <span class="tag">دليل ${index + 1}</span>
      <h3>${item.title}</h3>
      <p>اضغطي لفتح الدليل</p>
      <div class="details">${item.detail}</div>
    `));
  });

  const testimoniesList = $("#testimoniesList");
  GAME_CONFIG.testimonies.forEach((item) => {
    testimoniesList.appendChild(create("article", "testimony", `
      <h3>${item.person}</h3>
      <div class="details">${item.text}</div>
    `));
  });

  const loungeGrid = $("#loungeGrid");
  GAME_CONFIG.lounge.forEach((item) => {
    loungeGrid.appendChild(create("div", "lounge-item", `<strong>${item.title}</strong><span>${item.text}</span>`));
  });
}

function toggleTimer() {
  if (timerStarted) {
    clearInterval(timerInterval);
    timerStarted = false;
    $("#timerBtn").textContent = "استكمال العداد";
    return;
  }

  timerStarted = true;
  $("#timerBtn").textContent = "إيقاف مؤقت";
  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    renderTimer();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerStarted = false;
      $("#timerBtn").textContent = "انتهى الوقت";
      showResult(false, "⏰ انتهى وقت التحقيق! يجب إرسال الاتهام فورًا أو تنفيذ العقاب.");
    }
  }, 1000);
}

function renderTimer() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  $("#timer").textContent = `${minutes}:${seconds}`;
}

function submitCase() {
  const selectedKiller = $("#killerSelect").value;
  const motive = $("#motiveText").value.trim();

  if (!selectedKiller || motive.length < 10) {
    showResult(false, "❌ يجب اختيار القاتل وكتابة تحليل واضح قبل إرسال الاتهام.");
    return;
  }

  if (selectedKiller === GAME_CONFIG.killer) {
    showResult(true, GAME_CONFIG.winMessage);
  } else {
    showResult(false, GAME_CONFIG.failMessage);
  }
}

function showResult(isSuccess, message) {
  const resultBox = $("#resultBox");
  resultBox.className = `result ${isSuccess ? "success" : "fail"}`;
  resultBox.textContent = message;
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".mystery-card, .testimony");
  if (card) card.classList.toggle("open");
});

$("#startBtn").addEventListener("click", startInvestigation);
$("#resetBtn").addEventListener("click", resetGame);
$("#timerBtn").addEventListener("click", toggleTimer);
$("#submitBtn").addEventListener("click", submitCase);

renderGame();
renderTimer();
