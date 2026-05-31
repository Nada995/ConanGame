const GAME_CONFIG = {
  title: "الزفاف الأخير",
  caseNumber: "302",
  victim: "ليان الحربي",
  location: "غرفة تجهيز العروس - قاعة الورد",
  deathTime: "بين 8:16 و 8:22 مساءً",
  timeLimitMinutes: 45,
  killer: "jood",
  correctRedHerring: "perfume",
  summary:
    "قبل دقائق من الزفة، وُجدت العروس ليان الحربي داخل غرفة التجهيز. الباب لم يكن مكسورًا، ولا توجد علامات مقاومة واضحة. على الطاولة كأس قهوة بارد، وبالقرب من الكرسي خاتم مكسور ورسالة تهديد. القاعة مليئة بالشهود… لكن معظمهم يخفون شيئًا.",
  missions: ["بيانات القضية", "المشتبه بهم", "الأدلة", "الشهادات", "كشف التمويه", "الاتهام النهائي"],
  facts: [
    { label: "الضحية", value: "ليان الحربي — العروس" },
    { label: "مكان الجريمة", value: "غرفة تجهيز العروس، خلف المسرح الرئيسي" },
    { label: "الوقت المتوقع", value: "بين 8:16 و 8:22 مساءً" },
    { label: "ملاحظة الطب الشرعي", value: "لا توجد إصابة ظاهرة؛ يرجّح وجود مادة مخدرة أو سامة في مشروب." },
    { label: "حالة الباب", value: "لم يُكسر. القاتل دخل لأن العروس سمحت له أو كانت تعرفه." },
    { label: "حالة القضية", value: "قضية لم تُحل — كل معلومة قد تكون فخًا." }
  ],
  suspects: [
    {
      id: "fares",
      name: "فارس",
      role: "العريس",
      motive: "اكتشف قبل أسبوع أن العروس كانت تؤجل قرارًا ماليًا متعلقًا بالزواج.",
      lastSeen: "شوهد قرب الممر المؤدي لغرفة العروس الساعة 8:14.",
      note: "يدّعي أنه كان ينتظر المصور، لكن لا يوجد شاهد يؤكد ذلك بدقة."
    },
    {
      id: "raneem",
      name: "رنيم",
      role: "أخت العروس",
      motive: "غيرة قديمة بسبب شعورها أن العائلة تفضل ليان عليها.",
      lastSeen: "كانت في غرفة المكياج الساعة 8:10 ثم خرجت غاضبة.",
      note: "صوتها سُمع وهي تقول: اليوم بتعرفون حقيقتها."
    },
    {
      id: "jood",
      name: "جود",
      role: "الصديقة المقربة",
      motive: "خلاف مالي مع العروس ورسالة تهديد مرتبطة بمبلغ كبير لم يُعد.",
      lastSeen: "دخلت غرفة العروس الساعة 8:12 وهي تحمل قهوة، وخرجت الساعة 8:18 مرتبكة.",
      note: "تقول إن العروس طلبت القهوة بنفسها، لكن لا توجد رسالة تثبت الطلب."
    },
    {
      id: "noura",
      name: "نورة",
      role: "منسقة الحفل",
      motive: "كانت تخشى أن تفسخ العروس العقد بعد خطأ كبير في تنسيق القاعة.",
      lastSeen: "بجانب طاولة الضيافة والمشروبات الساعة 8:05.",
      note: "لديها وصول للمشروبات، لكن لم تدخل غرفة العروس في وقت الوفاة."
    },
    {
      id: "sara",
      name: "سارة",
      role: "خبيرة المكياج",
      motive: "تشاجرت مع العروس بسبب نشر تقييم سيئ عنها قبل الحفل.",
      lastSeen: "غادرت غرفة التجهيز الساعة 8:08 ومعها حقيبة أدواتها.",
      note: "حقيبتها احتوت على عطر قوي الرائحة، لكنه لا يفسر الوفاة."
    }
  ],
  evidence: [
    { title: "كأس القهوة", detail: "تقرير أولي: بقايا مادة مهدئة قوية داخل الكأس. المادة لا تظهر رائحة واضحة ولا تغيّر لون القهوة." },
    { title: "رسالة تهديد", detail: "الرسالة: إذا لم ترجعي المال قبل الزفاف، سأفضحك أمام الجميع. الورقة بلا توقيع، لكن أسلوبها قريب من رسائل جود السابقة." },
    { title: "الخاتم المكسور", detail: "الخاتم يعود لجود، لكنه كان مكسورًا منذ يومين بحسب صورة قديمة في هاتفها. وجوده في الغرفة قد يكون تمويهًا أو سقط أثناء الدخول." },
    { title: "كاميرا القاعة", detail: "الكاميرا أظهرت جود تدخل الساعة 8:12 وتخرج 8:18. بعدها لم يدخل أحد حتى صرخة رنيم الساعة 8:26." },
    { title: "منديل بعطر قوي", detail: "منديل يحمل رائحة عطر سارة. الطب الشرعي يؤكد أن العطر لا يحتوي مادة قاتلة؛ وجوده مشتت فقط." },
    { title: "سجل الضيافة", detail: "نورة جهزت القهوة العامة الساعة 8:00، لكن الكأس الموجود في الغرفة كان من كوب خاص مختلف عن أكواب الضيافة." }
  ],
  testimonies: [
    { person: "فارس — العريس", text: "كنت أنتظر المصور. اقتربت من الممر، لكني لم أدخل غرفة ليان. آخر مرة رأيتها كانت قبل المغرب." },
    { person: "رنيم — أخت العروس", text: "جود كانت متوترة وتصر تدخل لوحدها. سمعت ليان تقول لها: مو الليلة يا جود." },
    { person: "نورة — منسقة الحفل", text: "أنا جهزت قهوة للضيوف فقط. الكوب الموجود عند العروس ليس من طاولتي." },
    { person: "سارة — خبيرة المكياج", text: "طلعت من الغرفة بدري. تركت منديلي هناك، وهذا طبيعي لأني كنت أشتغل على مكياج العروس." },
    { person: "عاملة القاعة", text: "بعد خروج جود، كانت تمسح يدها بفستانها وكأن شيئًا انسكب عليها." }
  ],
  redHerrings: [
    { id: "perfume", title: "منديل العطر", text: "وجود عطر سارة يوحي بأنها متورطة، لكن التقرير يستبعد العطر كسبب للوفاة." },
    { id: "groom", title: "قرب العريس من الممر", text: "فارس كان قريبًا من المكان، لكن الكاميرا لم تسجل دخوله للغرفة." },
    { id: "sister", title: "غضب الأخت", text: "رنيم كانت غاضبة فعلًا، لكن الغضب وحده لا يربطها بالكأس." },
    { id: "planner", title: "وصول نورة للمشروبات", text: "نورة لها وصول للمشروبات العامة، لكن كأس العروس كان كوبًا خاصًا." }
  ],
  lounge: [
    { title: "القهوة", text: "قهوة عربية، قهوة باردة، أو شاي للمحققات أثناء التحقيق." },
    { title: "الحلا والسناك", text: "ميني دونات، براونيز، كوكيز، فشار، وشوكولاتة." },
    { title: "العقاب", text: "إحضار القهوة للفريق الفائز + قراءة اعتراف: أنا محققة فاشلة وأتهم الأبرياء." },
    { title: "الجائزة", text: "بطاقة أفضل محققة + شوكولاتة فاخرة أو ميدالية بسيطة." }
  ],
  winMessage:
    "✅ تم حل القضية بنجاح! القاتلة هي جود، الصديقة المقربة. الدافع: خلاف مالي ورسالة التهديد. طريقة الجريمة: وضعت المادة المهدئة/السامة في قهوة خاصة حملتها للعروس، ثم خرجت قبل اكتشاف الجريمة. أقوى دليل: الكاميرا + الكأس الخاص + رسالة المال + شهادة العاملة.",
  failMessage:
    "❌ الاتهام غير صحيح. يبدو أن الحقائق التمويهية نجحت في خداع الفريق. العقاب: إحضار القهوة للفريق الفائز + قراءة اعتراف التحقيق الفاشل."
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const create = (tag, className, html = "") => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.innerHTML = html;
  return element;
};

let timerInterval = null;
let remainingSeconds = GAME_CONFIG.timeLimitMinutes * 60;
let timerStarted = false;
let currentMission = 0;
const opened = { suspects: new Set(), evidence: new Set(), testimonies: new Set() };

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
  currentMission = 0;
  opened.suspects.clear();
  opened.evidence.clear();
  opened.testimonies.clear();
  renderTimer();
  $("#timerBtn").textContent = "بدء العداد";
  $("#killerSelect").value = "";
  $("#motiveText").value = "";
  $("#redHerringSelect").value = "";
  $("#redHerringFeedback").textContent = "";
  $("#resultBox").className = "result hidden";
  $$(".open").forEach((card) => card.classList.remove("open"));
  $$(".complete-btn").forEach((btn) => {
    const mission = Number(btn.dataset.complete);
    btn.disabled = mission !== 0;
  });
  updateMissions();
  $("#app").classList.add("hidden");
  $("#hero").classList.remove("hidden");
}

function renderGame() {
  $("#caseSummary").textContent = GAME_CONFIG.summary;
  renderMissionSteps();

  GAME_CONFIG.facts.forEach((fact) => {
    $("#factsGrid").appendChild(create("div", "fact", `<strong>${fact.label}</strong><span>${fact.value}</span>`));
  });

  GAME_CONFIG.suspects.forEach((suspect) => {
    const card = create("article", "mystery-card", `
      <span class="tag">${suspect.role}</span>
      <h3>${suspect.name}</h3>
      <p>اضغطي لكشف ملف المشتبه به</p>
      <div class="details">
        <strong>الدافع المحتمل:</strong> ${suspect.motive}<br>
        <strong>آخر ظهور:</strong> ${suspect.lastSeen}<br>
        <strong>ملاحظة:</strong> ${suspect.note}
      </div>
    `);
    card.dataset.type = "suspects";
    card.dataset.id = suspect.id;
    $("#suspectsGrid").appendChild(card);

    const option = create("option");
    option.value = suspect.id;
    option.textContent = `${suspect.name} — ${suspect.role}`;
    $("#killerSelect").appendChild(option);
  });

  GAME_CONFIG.evidence.forEach((item, index) => {
    const card = create("article", "mystery-card evidence-card", `
      <span class="tag">دليل ${index + 1}</span>
      <h3>${item.title}</h3>
      <p>اضغطي لفتح الدليل</p>
      <div class="details">${item.detail}</div>
    `);
    card.dataset.type = "evidence";
    card.dataset.id = `evidence-${index}`;
    $("#evidenceGrid").appendChild(card);
  });

  GAME_CONFIG.testimonies.forEach((item, index) => {
    const testimony = create("article", "testimony", `
      <h3>${item.person}</h3>
      <div class="details">${item.text}</div>
    `);
    testimony.dataset.type = "testimonies";
    testimony.dataset.id = `testimony-${index}`;
    $("#testimoniesList").appendChild(testimony);
  });

  GAME_CONFIG.redHerrings.forEach((item) => {
    $("#redHerringsGrid").appendChild(create("div", "red-herring", `<strong>${item.title}</strong><span>${item.text}</span>`));
    const option = create("option");
    option.value = item.id;
    option.textContent = item.title;
    $("#redHerringSelect").appendChild(option);
  });

  GAME_CONFIG.lounge.forEach((item) => {
    $("#loungeGrid").appendChild(create("div", "lounge-item", `<strong>${item.title}</strong><span>${item.text}</span>`));
  });
}

function renderMissionSteps() {
  GAME_CONFIG.missions.forEach((mission, index) => {
    $("#missionSteps").appendChild(create("div", "mission-step", `<span>${index + 1}</span><strong>${mission}</strong>`));
  });
  updateMissions();
}

function updateMissions() {
  $$(".mission").forEach((mission) => {
    const index = Number(mission.dataset.mission);
    mission.classList.toggle("locked", index > currentMission);
    mission.classList.toggle("active", index === currentMission);
    mission.classList.toggle("done", index < currentMission);
  });

  $$(".mission-step").forEach((step, index) => {
    step.classList.toggle("locked", index > currentMission);
    step.classList.toggle("active", index === currentMission);
    step.classList.toggle("done", index < currentMission);
  });

  $("#progressPill").textContent = `المهمة ${Math.min(currentMission + 1, GAME_CONFIG.missions.length)} من ${GAME_CONFIG.missions.length}`;
}

function completeMission(index) {
  if (index !== currentMission) return;
  currentMission = Math.min(currentMission + 1, GAME_CONFIG.missions.length - 1);
  updateMissions();
  const next = document.querySelector(`[data-mission="${currentMission}"]`);
  if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
}

function checkAutoCompletion(type) {
  const total = GAME_CONFIG[type].length;
  const done = opened[type].size;
  const missionIndex = type === "suspects" ? 1 : type === "evidence" ? 2 : 3;
  const btn = document.querySelector(`[data-complete="${missionIndex}"]`);
  if (btn && done >= total) {
    btn.disabled = false;
    btn.textContent = "اكتملت المهمة — افتحي المهمة التالية";
  }
}

function checkRedHerring() {
  const selected = $("#redHerringSelect").value;
  const feedback = $("#redHerringFeedback");
  const btn = document.querySelector('[data-complete="4"]');

  if (!selected) {
    feedback.textContent = "اختاري حقيقة أولاً.";
    feedback.className = "feedback warn";
    return;
  }

  if (selected === GAME_CONFIG.correctRedHerring) {
    feedback.textContent = "صحيح. منديل العطر يوحي بتورط سارة لكنه لا يفسر سبب الوفاة، لذلك هو تمويه واضح.";
    feedback.className = "feedback good";
    btn.disabled = false;
  } else {
    feedback.textContent = "قريبة، لكن هذا ليس أوضح تمويه. ارجعي للأدلة: ما الشيء الذي ثبت التقرير أنه غير قاتل؟";
    feedback.className = "feedback warn";
  }
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
      showResult(false, "⏰ انتهى وقت التحقيق! أرسلي الاتهام فورًا أو طبقي العقاب.");
    }
  }, 1000);
}

function renderTimer() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  $("#timer").textContent = `${minutes}:${seconds}`;
}

function submitCase() {
  if (currentMission < 5) {
    showResult(false, "🔒 لا يمكن إرسال الاتهام قبل إكمال كل المهام السابقة.");
    return;
  }

  const selectedKiller = $("#killerSelect").value;
  const motive = $("#motiveText").value.trim();

  if (!selectedKiller || motive.length < 20) {
    showResult(false, "❌ يجب اختيار القاتل وكتابة تحليل واضح لا يقل عن 20 حرفًا.");
    return;
  }

  showResult(selectedKiller === GAME_CONFIG.killer, selectedKiller === GAME_CONFIG.killer ? GAME_CONFIG.winMessage : GAME_CONFIG.failMessage);
}

function showResult(isSuccess, message) {
  const resultBox = $("#resultBox");
  resultBox.className = `result ${isSuccess ? "success" : "fail"}`;
  resultBox.textContent = message;
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.addEventListener("click", (event) => {
  const lockedParent = event.target.closest(".mission.locked");
  if (lockedParent) return;

  const card = event.target.closest(".mystery-card, .testimony");
  if (card) {
    card.classList.toggle("open");
    if (card.dataset.type && card.classList.contains("open")) {
      opened[card.dataset.type].add(card.dataset.id);
      checkAutoCompletion(card.dataset.type);
    }
  }

  const completeBtn = event.target.closest(".complete-btn");
  if (completeBtn && !completeBtn.disabled) {
    completeMission(Number(completeBtn.dataset.complete));
  }
});

$("#startBtn").addEventListener("click", startInvestigation);
$("#resetBtn").addEventListener("click", resetGame);
$("#timerBtn").addEventListener("click", toggleTimer);
$("#submitBtn").addEventListener("click", submitCase);
$("#checkRedHerringBtn").addEventListener("click", checkRedHerring);

renderGame();
renderTimer();
