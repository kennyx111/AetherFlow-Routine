// --- CONSTANTS & CONFIGURATION ---
const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// --- CS & TECH SVG ICON LIBRARY ---
const SVGS = {
    linux: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9.5 2 8 3.5 8 6v4c0 .8-.5 2-2 3-1.2.8-2 2-2 3.5C4 18.5 6 20 9 20h6c3 0 5-1.5 5-3.5 0-1.5-.8-2.7-2-3.5-1.5-1-2-2.2-2-3V6c0-2.5-1.5-4-4-4z"/><circle cx="10" cy="6" r="1" fill="currentColor"/><circle cx="14" cy="6" r="1" fill="currentColor"/><path d="M10 10s1 1 2 1 2-1 2-1"/><path d="M8 20c-1.5 1-3 1.5-4 1.5M16 20c1.5 1 3 1.5 4 1.5"/></svg>`,
    html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 3 1.8 16.2L12 21l6.2-1.8L20 3H4z"/><path d="M16 7.5H8.5l.4 4h7l-.5 5-3.4 1-3.4-1-.2-2.5"/></svg>`,
    js: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M10 16c0 1.1-.9 2-2 2s-2-.9-2-2v-3"/><path d="M14 17.5c.8.6 1.8.6 2.5 0 .5-.4.5-1.2 0-1.6-.6-.4-1.8-.6-2.5-1s-.5-1.4 0-1.8c.7-.6 1.7-.6 2.5 0"/></svg>`,
    php: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M7 10h2a1.5 1.5 0 0 1 0 3H7v2"/><path d="M11 10v5M11 12.5h2M15 10v5M15 12.5h2"/><path d="M17 10a1.5 1.5 0 0 1 0 3h-2"/></svg>`,
    cybersecurity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M10 11V9a2 2 0 1 1 4 0v2"/></svg>`,
    backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="6" rx="2"/><rect x="2" y="15" width="20" height="6" rx="2"/><path d="M6 6h.01M6 18h.01M12 9v6M9 12l3 3 3-3"/></svg>`,
    api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM9 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9V9"/><path d="M17 9v8M15 11h4"/></svg>`,
    ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="12" r="1.5" fill="currentColor"/><circle cx="15" cy="12" r="1.5" fill="currentColor"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M8 16c1 1 2.5 1.5 4 1.5s3-.5 4-1.5"/></svg>`,
    ml: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M10 8.5 7.5 15.5M14 8.5l2.5 7M9 18h6"/></svg>`,
    python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-3.3 0-5 1.5-5 4v2h5v1H6c-2.5 0-4 1.5-4 4s1.5 4 4 4h2v-2c0-1.7 1.3-3 3-3h5c1.7 0 3-1.3 3-3V6c0-2.5-1.7-4-5-4zm-2 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/><path d="M12 22c3.3 0 5-1.5 5-4v-2h-5v-1h6c2.5 0 4-1.5 4-4s-1.5-4-4-4h-2v2c0 1.7-1.3 3-3 3h-5c-1.7 0-3 1.3-3 3v4c0 2.5 1.7 4 5 4zm2-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>`,
    git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="6" cy="6" r="2.5"/><path d="M6 8.5v7M8.5 6h7M8.2 16.2l7.6-7.6"/></svg>`,
    database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19C19.98 19 22 16.98 22 14.5c0-2.24-1.64-4.09-3.78-4.43C17.75 6.61 14.67 4 11 4 7.56 4 4.67 6.36 3.73 9.61 1.6 10.25 0 12.2 0 14.5 0 17.54 2.46 20 5.5 20h12z"/></svg>`,
    docker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/><rect x="5" y="7" width="3" height="3" rx="0.5"/><rect x="10" y="7" width="3" height="3" rx="0.5"/><rect x="15" y="7" width="3" height="3" rx="0.5"/><rect x="10" y="3" width="3" height="3" rx="0.5"/></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m7 9 4 3-4 3M13 15h4"/></svg>`,
    css: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 3 1.8 16.2L12 21l6.2-1.8L20 3H4z"/><path d="M7 7.5h10l-.5 5H8l.3 3 3.7 1 3.7-1 .3-3.5"/></svg>`
};

const GALLERY_ICONS = [
    { id: 'linux', name: 'Linux', tags: 'linux os kernel cs tech' },
    { id: 'html', name: 'HTML5', tags: 'html web frontend cs markup' },
    { id: 'js', name: 'JavaScript', tags: 'js javascript frontend backend cs script' },
    { id: 'php', name: 'PHP', tags: 'php backend server web cs' },
    { id: 'cybersecurity', name: 'Cybersecurity', tags: 'security cyber lock shield hacker cs' },
    { id: 'backend', name: 'Backend', tags: 'backend server api node database cs' },
    { id: 'api', name: 'API', tags: 'api rest graphql service backend cs' },
    { id: 'ai', name: 'AI', tags: 'ai artificial intelligence bot brain cs' },
    { id: 'ml', name: 'Machine Learning', tags: 'ml machine learning data ai cs' },
    { id: 'python', name: 'Python', tags: 'python django code script ml ai cs' },
    { id: 'git', name: 'Git', tags: 'git github version control code cs' },
    { id: 'database', name: 'Database', tags: 'database sql nosql storage backend cs' },
    { id: 'cloud', name: 'Cloud', tags: 'cloud aws devops server hosting cs' },
    { id: 'docker', name: 'Docker', tags: 'docker container devops backend cs' },
    { id: 'terminal', name: 'Terminal', tags: 'terminal bash cli shell command cs' },
    { id: 'css', name: 'CSS3', tags: 'css styling design frontend web cs' },
    { id: 'ph-fork-knife', name: 'Food', tags: 'dinner breakfast lunch food eat' },
    { id: 'ph-book-open', name: 'Study', tags: 'study reading book homework' },
    { id: 'ph-barbell', name: 'Fitness', tags: 'gym exercise fitness workout' },
    { id: 'ph-moon', name: 'Rest', tags: 'rest sleep night bed' },
    { id: 'ph-sun', name: 'Morning', tags: 'morning wake routine sun' },
    { id: 'ph-coffee', name: 'Coffee', tags: 'coffee break drink tea' }
];

const DEFAULT_TASKS = [
    { id: '1', order: 0, start: '07:00', end: '07:30', name: 'Morning Routine & Coffee', notes: 'Hydrate and review today targets', iconType: 'preset', icon: 'ph-sun', days: [0,1,2,3,4,5,6] },
    { id: '2', order: 1, start: '08:30', end: '11:30', name: 'Full-Stack & Backend Dev', notes: 'API endpoints, Linux server config & Database schema', iconType: 'preset', icon: 'backend', days: [0,1,2,3,4,5,6] },
    { id: '3', order: 2, start: '13:00', end: '15:00', name: 'AI & ML Model Training', notes: 'Data preprocessing and testing models', iconType: 'preset', icon: 'ai', days: [0,1,2,3,4,5,6] },
    { id: '4', order: 3, start: '16:00', end: '17:30', name: 'Cybersecurity Audit & Study', notes: 'Network security & vulnerability review', iconType: 'preset', icon: 'cybersecurity', days: [0,1,2,3,4,5,6] }
];

let state = {
    tasks: [],
    completions: {},
    selectedDayIdx: new Date().getDay(),
    user: { name: 'Developer', quote: 'Discipline today, freedom tomorrow.' },
    settings: { accent: '#7C5CFC', fontSize: '16px', calendarType: 'english', sidebarCollapsed: false },
    currentTab: 'today',
    calendarDate: new Date(),
    focusedTaskId: null,
    editingDayIdx: null
};

let hasTriggeredVictoryToday = false;

document.addEventListener('DOMContentLoaded', () => {
    loadAppState();
    applySettingsToUI();
    renderDaySelector();
    renderTimeline();
    renderCalendar();
    renderWeekOverview();
    renderIconGallery();
    renderModalDaysSelector();

    setInterval(updateLiveClockAndGreetings, 1000);
    updateLiveClockAndGreetings();
});

// --- DATA PERSISTENCE ---
function loadAppState() {
    const saved = localStorage.getItem('aetherflow_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.tasks = parsed.tasks || DEFAULT_TASKS;
            state.completions = parsed.completions || {};
            state.user = parsed.user || { name: 'Developer', quote: 'Discipline today, freedom tomorrow.' };
            state.settings = Object.assign({}, state.settings, parsed.settings || {});
        } catch (e) {
            state.tasks = DEFAULT_TASKS;
        }
    } else {
        state.tasks = DEFAULT_TASKS;
    }
}

function saveAppState() {
    localStorage.setItem('aetherflow_state', JSON.stringify({
        tasks: state.tasks,
        completions: state.completions,
        user: state.user,
        settings: state.settings
    }));
    renderTimeline();
    renderWeekOverview();
    renderCalendar();
    updateRightPanelWidget();
}

// --- NAVIGATION & VIEWS ---
function switchTab(tabName) {
    state.currentTab = tabName;
    ['today', 'week', 'settings'].forEach(t => {
        const view = document.getElementById(`view-${t}`);
        const nav = document.getElementById(`nav-${t}`);
        if (t === tabName) {
            view.classList.remove('hidden');
            view.classList.add('flex');
            nav.className = "w-full px-3.5 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all glass-card-active";
        } else {
            view.classList.add('hidden');
            view.classList.remove('flex');
            nav.className = "w-full px-3.5 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all text-neutral-400 hover:text-white hover:bg-white/5";
        }
    });

    if (tabName === 'week') renderWeekOverview();
}

function toggleSidebar() {
    state.settings.sidebarCollapsed = !state.settings.sidebarCollapsed;
    applySidebarState();
    saveAppState();
}

function applySidebarState() {
    const sidebar = document.getElementById('main-sidebar');
    if (state.settings.sidebarCollapsed) {
        sidebar.classList.add('sidebar-collapsed');
    } else {
        sidebar.classList.remove('sidebar-collapsed');
    }
}

// --- CLOCK & PROFILE INFO ---
function updateLiveClockAndGreetings() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    const timeStr = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    const clockElem = document.getElementById('header-time');
    if (clockElem) clockElem.textContent = timeStr;

    const userName = state.user.name ? escapeHtml(state.user.name) : 'Developer';

    // Set Sidebar User Name
    const sidebarUser = document.getElementById('sidebar-username');
    if (sidebarUser) sidebarUser.textContent = userName;

    // Set Centered Subtitle Quote
    const subElem = document.getElementById('user-subtitle-heading');
    if (subElem) subElem.textContent = `"${state.user.quote || 'Discipline today, freedom tomorrow.'}"`;
}

// --- HELPER FUNCTIONS ---
function timeToMins(tStr) {
    if (!tStr) return 0;
    const [h, m] = tStr.split(':').map(Number);
    return h * 60 + m;
}

function getTasksForDay(dayIdx) {
    return state.tasks
        .filter(t => t.days && t.days.includes(dayIdx))
        .sort((a, b) => {
            if (a.order !== undefined && b.order !== undefined) {
                return a.order - b.order;
            }
            return timeToMins(a.start) - timeToMins(b.start);
        });
}

function renderIconHTML(iconType, iconValue) {
    if (iconType === 'custom_svg' && iconValue) {
        return `<div class="w-full h-full flex items-center justify-center svg-icon-render">${iconValue}</div>`;
    }
    if (SVGS[iconValue]) {
        return `<div class="w-5 h-5 flex items-center justify-center svg-icon-render">${SVGS[iconValue]}</div>`;
    }
    return `<i class="ph ${iconValue || 'ph-code'} text-lg"></i>`;
}

// --- REORDERING LOGIC ---
function reorderTask(taskId, direction) {
    const dayTasks = getTasksForDay(state.selectedDayIdx);
    const index = dayTasks.findIndex(t => t.id === taskId);
    if (index === -1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= dayTasks.length) return;

    // Swap positions in order array
    const temp = dayTasks[index];
    dayTasks[index] = dayTasks[targetIndex];
    dayTasks[targetIndex] = temp;

    // Apply orders back to tasks
    dayTasks.forEach((t, i) => {
        const originalTask = state.tasks.find(st => st.id === t.id);
        if (originalTask) originalTask.order = i;
    });

    saveAppState();
    renderTimeline();
}

// --- DAY SELECTOR & ENLARGED TIMELINE ---
function renderDaySelector() {
    const container = document.getElementById('day-selector');
    if (!container) return;
    container.innerHTML = '';
    const realToday = new Date().getDay();

    DAYS_SHORT.forEach((day, idx) => {
        const isSelected = state.selectedDayIdx === idx;
        const isRealToday = idx === realToday;

        const btn = document.createElement('button');
        btn.onclick = () => {
            state.selectedDayIdx = idx;
            state.focusedTaskId = null;
            hasTriggeredVictoryToday = false;
            renderDaySelector();
            renderTimeline();
            updateRightPanelWidget();
        };

        let classes = "px-3 py-1.5 rounded-xl text-xs font-black transition-all relative ";
        if (isSelected) {
            classes += "glass-pill-active ";
        } else {
            classes += "text-neutral-400 hover:text-white hover:bg-white/5 ";
        }

        if (isRealToday) {
            classes += "ring-2 ring-offset-1 ring-[var(--brand-accent)] ";
        }

        btn.className = classes;
        btn.innerHTML = `${day} ${isRealToday ? '<span class="w-1.5 h-1.5 rounded-full accent-bg inline-block ml-1 mb-0.5"></span>' : ''}`;
        container.appendChild(btn);
    });
}

function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container) return;
    container.innerHTML = '';

    const dayTasks = getTasksForDay(state.selectedDayIdx);
    const dateKey = getTodayDateKey();
    let completedCount = 0;

    if (dayTasks.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16 text-neutral-500 text-sm">
                <i class="ph ph-calendar-x text-4xl mb-3 opacity-40 block mx-auto"></i>
                No tasks scheduled for ${DAYS_FULL[state.selectedDayIdx]}. Click "+ Add Task" to set up your routine.
            </div>
        `;
    } else {
        dayTasks.forEach((task, idx) => {
            const status = state.completions[`${dateKey}-${task.id}`];
            if (status === 'tick') completedCount++;

            const isFocused = task.id === state.focusedTaskId;
            const row = document.createElement('div');
            row.onclick = () => { 
                state.focusedTaskId = task.id; 
                renderTimeline(); 
                updateRightPanelWidget(); 
            };

            let cardClasses = "relative flex items-center justify-between pl-8 pr-4 py-3.5 rounded-2xl transition-all cursor-pointer group shadow-md ";
            if (isFocused) {
                cardClasses += "glass-card-active scale-[1.015] ring-1 ring-[var(--brand-accent)] ";
            } else {
                cardClasses += "glass-card hover:bg-white/10 hover:scale-[1.008] ";
            }

            if (status === 'tick') {
                cardClasses += "border-l-4 border-l-emerald-500 ";
            } else if (status === 'cross') {
                cardClasses += "border-l-4 border-l-red-500 ";
            }

            row.className = cardClasses;

            const iconMarkup = renderIconHTML(task.iconType, task.icon);

            row.innerHTML = `
                <div class="flex items-center gap-4 min-w-0">
                    <!-- REORDER BUTTONS -->
                    <div class="flex flex-col gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
                        <button onclick="reorderTask('${task.id}', 'up')" title="Move Up" class="text-neutral-400 hover:text-white ${idx === 0 ? 'invisible' : ''}">
                            <i class="ph ph-caret-up font-bold text-xs"></i>
                        </button>
                        <button onclick="reorderTask('${task.id}', 'down')" title="Move Down" class="text-neutral-400 hover:text-white ${idx === dayTasks.length - 1 ? 'invisible' : ''}">
                            <i class="ph ph-caret-down font-bold text-xs"></i>
                        </button>
                    </div>

                    <div class="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-base shrink-0 accent-text border border-white/15 shadow-inner">
                        ${iconMarkup}
                    </div>
                    <span class="text-xs sm:text-sm font-mono font-extrabold text-neutral-200 shrink-0 tracking-wider">${format12Hour(task.start)}</span>
                    <div class="min-w-0">
                        <h3 class="text-sm sm:text-base font-extrabold text-white truncate tracking-tight ${status === 'tick' ? 'line-through text-emerald-300 opacity-60' : ''}">${escapeHtml(task.name)}</h3>
                        ${task.notes ? `<p class="text-xs text-neutral-400 truncate font-normal mt-0.5">${escapeHtml(task.notes)}</p>` : ''}
                    </div>
                </div>

                <div class="flex items-center gap-2 shrink-0 ml-3" onclick="event.stopPropagation()">
                    <button onclick="editTaskFromId('${task.id}')" title="Edit Task" class="w-8 h-8 rounded-xl flex items-center justify-center text-sm text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                        <i class="ph ph-pencil-simple text-base"></i>
                    </button>
                    <button onclick="setTaskStatus('${task.id}', 'tick')" title="Mark Completed" class="w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-white/15 ${status === 'tick' ? 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)] scale-105' : 'text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10'} transition-all">
                        <i class="ph ph-check font-black text-lg"></i>
                    </button>
                    <button onclick="setTaskStatus('${task.id}', 'cross')" title="Mark Incomplete" class="w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-white/15 ${status === 'cross' ? 'bg-red-500 text-white border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.5)] scale-105' : 'text-neutral-400 hover:text-red-400 hover:bg-red-500/10'} transition-all">
                        <i class="ph ph-x font-black text-lg"></i>
                    </button>
                </div>
            `;
            container.appendChild(row);
        });
    }

    const compText = document.getElementById('completion-text');
    if (compText) compText.textContent = `${completedCount} / ${dayTasks.length} completed`;
    const pct = dayTasks.length > 0 ? (completedCount / dayTasks.length) * 100 : 0;
    const progBar = document.getElementById('progress-bar');
    if (progBar) progBar.style.width = `${pct}%`;

    if (!state.focusedTaskId && dayTasks.length > 0) {
        state.focusedTaskId = dayTasks[0].id;
    }

    if (dayTasks.length > 0 && completedCount === dayTasks.length && !hasTriggeredVictoryToday) {
        hasTriggeredVictoryToday = true;
        triggerVictoryCelebration();
    }

    updateRightPanelWidget();
}

function setTaskStatus(taskId, status) {
    const dateKey = getTodayDateKey();
    if (state.completions[`${dateKey}-${taskId}`] === status) {
        delete state.completions[`${dateKey}-${taskId}`];
    } else {
        state.completions[`${dateKey}-${taskId}`] = status;
    }
    saveAppState();
}

// --- VICTORY TROPHY & CONFETTI ENGINE ---
function triggerVictoryCelebration() {
    startConfettiAnimation();
    const modal = document.getElementById('victory-modal');
    const card = document.getElementById('victory-modal-card');

    if (modal && card) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        card.classList.remove('scale-90');
        card.classList.add('scale-100');
    }
}

function closeVictoryModal() {
    const modal = document.getElementById('victory-modal');
    const card = document.getElementById('victory-modal-card');

    if (modal && card) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        card.classList.remove('scale-100');
        card.classList.add('scale-90');
    }
    stopConfettiAnimation();
}

let confettiInterval = null;
let confettiParticles = [];

function startConfettiAnimation() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confettiParticles = [];
    const colors = ['#facc15', '#7c5cfc', '#10b981', '#3b82f6', '#ec4899', '#f97316'];

    for (let i = 0; i < 120; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiParticles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
    }

    clearInterval(confettiInterval);
    confettiInterval = setInterval(draw, 1000 / 60);
}

function stopConfettiAnimation() {
    clearInterval(confettiInterval);
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// --- RIGHT WIDGET PANEL ---
function updateRightPanelWidget() {
    const titleElem = document.getElementById('widget-now-title');
    const timeElem = document.getElementById('widget-now-time');
    const iconWrap = document.getElementById('widget-now-icon-wrapper');
    const notesInput = document.getElementById('widget-now-notes-input');

    if (!titleElem || !notesInput) return;

    const task = state.tasks.find(t => t.id === state.focusedTaskId);
    if (task) {
        titleElem.textContent = task.name;
        timeElem.textContent = `${format12Hour(task.start)} - ${format12Hour(task.end)}`;
        iconWrap.innerHTML = renderIconHTML(task.iconType, task.icon);
        notesInput.value = task.notes || '';
        notesInput.disabled = false;
    } else {
        titleElem.textContent = "No Task Selected";
        timeElem.textContent = "--:--";
        iconWrap.innerHTML = `<i class="ph ph-clock text-3xl"></i>`;
        notesInput.value = "";
        notesInput.disabled = true;
    }
}

function saveRightPanelNote() {
    const task = state.tasks.find(t => t.id === state.focusedTaskId);
    if (!task) return;
    const notesInput = document.getElementById('widget-now-notes-input');
    task.notes = notesInput.value;
    saveAppState();

    const indicator = document.getElementById('note-saved-indicator');
    if (indicator) {
        indicator.classList.remove('opacity-0');
        setTimeout(() => indicator.classList.add('opacity-0'), 1200);
    }
}

// --- WEEK VIEW (CLEANER SVG APPLY TO ALL BUTTON) ---
function renderWeekOverview() {
    const grid = document.getElementById('week-grid');
    if (!grid) return;
    grid.innerHTML = '';

    DAYS_FULL.forEach((dayName, dayIdx) => {
        const tasks = getTasksForDay(dayIdx);
        const card = document.createElement('div');
        card.className = "glass-card rounded-2xl p-4 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all shadow-md";

        let tasksListHTML = '';
        if (tasks.length === 0) {
            tasksListHTML = `<p class="text-xs text-neutral-500 italic py-4 text-center">No schedule set</p>`;
        } else {
            tasksListHTML = tasks.map(t => `
                <div onclick="openTaskModal('${t.id}')" class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 accent-text">
                            ${renderIconHTML(t.iconType, t.icon)}
                        </div>
                        <span class="text-xs font-bold text-neutral-200 truncate group-hover:text-white">${escapeHtml(t.name)}</span>
                    </div>
                    <span class="text-[10px] font-mono font-bold text-neutral-400 shrink-0 ml-2">${format12Hour(t.start)}</span>
                </div>
            `).join('');
        }

        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                    <div class="flex items-center gap-2">
                        <h3 class="text-xs font-black tracking-wider text-neutral-200 uppercase">${dayName}</h3>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full glass-input text-neutral-400 font-bold">${tasks.length} tasks</span>
                    </div>
                    <!-- CLEANER SVG APPLY TO ALL BUTTON WITH TITLE HOVER -->
                    <button onclick="applyRoutineToAllDays(${dayIdx})" title="Apply to all" class="w-7 h-7 rounded-lg flex items-center justify-center accent-bg text-white hover:brightness-110 active:scale-95 transition-all shadow-sm">
                        <i class="ph ph-copy text-sm"></i>
                    </button>
                </div>
                <div class="space-y-2">
                    ${tasksListHTML}
                </div>
            </div>
            <button onclick="openTaskModalForDay(${dayIdx})" class="mt-4 w-full py-2 rounded-xl border border-dashed border-white/15 hover:border-[var(--brand-accent)] text-xs font-bold text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 transition-all">
                <i class="ph ph-plus text-xs accent-text"></i>
                <span>Add Task to ${DAYS_SHORT[dayIdx]}</span>
            </button>
        `;
        grid.appendChild(card);
    });
}

function applyRoutineToAllDays(sourceDayIdx) {
    const dayName = DAYS_FULL[sourceDayIdx];
    const sourceTasks = getTasksForDay(sourceDayIdx);

    if (sourceTasks.length === 0) {
        alert(`${dayName} has no tasks to copy to other days.`);
        return;
    }

    if (!confirm(`Are you sure you want to duplicate ${dayName}'s routine across all 7 days of the week? All days will mirror this day's routine.`)) {
        return;
    }

    state.tasks.forEach(task => {
        const belongsToSource = task.days && task.days.includes(sourceDayIdx);
        if (belongsToSource) {
            task.days = [0, 1, 2, 3, 4, 5, 6];
        } else {
            task.days = task.days.filter(d => d === sourceDayIdx);
        }
    });

    state.tasks = state.tasks.filter(t => t.days && t.days.length > 0);

    saveAppState();
    renderWeekOverview();
    renderTimeline();
}

// --- ENGLISH CALENDAR ENGINE ---
function renderCalendar() {
    const grid = document.getElementById('calendar-days-grid');
    const headerLabel = document.getElementById('calendar-month-year');
    if (!grid || !headerLabel) return;

    grid.innerHTML = '';
    const current = state.calendarDate;
    const year = current.getFullYear();
    const month = current.getMonth();

    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    headerLabel.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month;

    for (let i = 0; i < firstDayIndex; i++) {
        grid.innerHTML += `<span class="text-neutral-700 py-1"></span>`;
    }

    for (let day = 1; day <= totalDays; day++) {
        const isToday = isCurrentMonthYear && today.getDate() === day;
        let dayClass = "py-1 rounded-lg text-xs font-bold transition-all cursor-default select-none ";
        if (isToday) {
            dayClass += "accent-bg text-white shadow-[0_0_10px_var(--brand-accent)]";
        } else {
            dayClass += "text-neutral-400 hover:text-white hover:bg-white/5";
        }
        grid.innerHTML += `<span class="${dayClass}">${day}</span>`;
    }
}

function navigateMonth(delta) {
    state.calendarDate.setMonth(state.calendarDate.getMonth() + delta);
    renderCalendar();
}

// --- TASK EDIT MODAL ENGINE ---
function renderModalDaysSelector() {
    const container = document.getElementById('modal-days-selector');
    if (!container) return;
    container.innerHTML = '';

    DAYS_SHORT.forEach((day, idx) => {
        const label = document.createElement('label');
        label.className = "cursor-pointer flex-1 text-center";
        label.innerHTML = `
            <input type="checkbox" name="task-days" value="${idx}" class="hidden peer">
            <span class="block py-2 rounded-xl text-xs font-bold border border-white/10 peer-checked:accent-bg peer-checked:text-white peer-checked:border-[var(--brand-accent)] text-neutral-400 hover:text-white transition-all">
                ${day[0]}
            </span>
        `;
        container.appendChild(label);
    });
}

function renderIconGallery(filter = '') {
    const grid = document.getElementById('icon-gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const selectedPreset = document.getElementById('selected-icon-preset').value;

    GALLERY_ICONS.filter(item => item.tags.toLowerCase().includes(filter.toLowerCase()) || item.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const btn = document.createElement('div');
            btn.onclick = () => selectPresetIcon(item.id);
            const isSelected = selectedPreset === item.id;
            btn.className = `p-2 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${isSelected ? 'accent-bg text-white border-[var(--brand-accent)] shadow-md' : 'glass-input text-neutral-400 hover:text-white hover:bg-white/10 border-white/5'}`;
            btn.title = item.name;
            btn.innerHTML = `<div class="w-5 h-5 flex items-center justify-center shrink-0">${renderIconHTML('preset', item.id)}</div>`;
            grid.appendChild(btn);
        });
}

function filterIconGallery() {
    const val = document.getElementById('icon-search-input').value;
    renderIconGallery(val);
}

function selectPresetIcon(id) {
    document.getElementById('selected-icon-preset').value = id;
    renderIconGallery(document.getElementById('icon-search-input').value || '');
}

function toggleIconInputType() {
    const type = document.getElementById('task-icon-type').value;
    const presetBox = document.getElementById('preset-icon-container');
    const customBox = document.getElementById('custom-svg-container');

    if (type === 'custom_svg') {
        presetBox.classList.add('hidden');
        customBox.classList.remove('hidden');
    } else {
        presetBox.classList.remove('hidden');
        customBox.classList.add('hidden');
    }
}

function openTaskModal(taskId = null) {
    const modal = document.getElementById('task-modal');
    const form = document.getElementById('task-form');
    const deleteBtn = document.getElementById('delete-task-btn');
    const title = document.getElementById('modal-title');

    form.reset();

    if (taskId) {
        const task = state.tasks.find(t => t.id === taskId);
        if (task) {
            title.textContent = "Edit Task";
            document.getElementById('task-id').value = task.id;
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-start').value = task.start;
            document.getElementById('task-end').value = task.end || '';
            document.getElementById('task-notes').value = task.notes || '';
            document.getElementById('task-icon-type').value = task.iconType || 'preset';

            if (task.iconType === 'custom_svg') {
                document.getElementById('task-custom-svg').value = task.icon || '';
            } else {
                document.getElementById('selected-icon-preset').value = task.icon || 'linux';
            }

            const checkboxes = form.querySelectorAll('input[name="task-days"]');
            checkboxes.forEach(cb => {
                cb.checked = task.days && task.days.includes(parseInt(cb.value));
            });

            deleteBtn.classList.remove('hidden');
        }
    } else {
        title.textContent = "New Task";
        document.getElementById('task-id').value = '';
        deleteBtn.classList.add('hidden');

        const targetDay = state.editingDayIdx !== null ? state.editingDayIdx : state.selectedDayIdx;
        const checkboxes = form.querySelectorAll('input[name="task-days"]');
        checkboxes.forEach(cb => {
            cb.checked = parseInt(cb.value) === targetDay;
        });
    }

    toggleIconInputType();
    renderIconGallery();

    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('modal-content').classList.remove('scale-95');
}

function openTaskModalForDay(dayIdx) {
    state.editingDayIdx = dayIdx;
    openTaskModal();
}

function closeTaskModal() {
    const modal = document.getElementById('task-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('modal-content').classList.add('scale-95');
    state.editingDayIdx = null;
}

function saveTask(event) {
    event.preventDefault();

    const id = document.getElementById('task-id').value || Date.now().toString();
    const name = document.getElementById('task-name').value.trim();
    const start = document.getElementById('task-start').value;
    const end = document.getElementById('task-end').value;
    const notes = document.getElementById('task-notes').value.trim();
    const iconType = document.getElementById('task-icon-type').value;

    let icon = 'linux';
    if (iconType === 'custom_svg') {
        icon = document.getElementById('task-custom-svg').value.trim();
    } else {
        icon = document.getElementById('selected-icon-preset').value;
    }

    const checkboxes = document.querySelectorAll('input[name="task-days"]:checked');
    const days = Array.from(checkboxes).map(cb => parseInt(cb.value));

    if (days.length === 0) {
        alert("Please select at least one assigned day for this task.");
        return;
    }

    const existingIndex = state.tasks.findIndex(t => t.id === id);
    const order = existingIndex >= 0 ? state.tasks[existingIndex].order : state.tasks.length;
    const newTaskObj = { id, order, name, start, end, notes, iconType, icon, days };

    if (existingIndex >= 0) {
        state.tasks[existingIndex] = newTaskObj;
    } else {
        state.tasks.push(newTaskObj);
    }

    state.focusedTaskId = id;
    hasTriggeredVictoryToday = false;
    saveAppState();
    closeTaskModal();
}

function editTaskFromId(taskId) {
    openTaskModal(taskId);
}

function deleteCurrentTask() {
    const id = document.getElementById('task-id').value;
    if (!id) return;
    state.tasks = state.tasks.filter(t => t.id !== id);
    if (state.focusedTaskId === id) state.focusedTaskId = null;
    saveAppState();
    closeTaskModal();
}

// --- SETTINGS ---
function applySettingsToUI() {
    document.documentElement.style.setProperty('--brand-accent', state.settings.accent || '#7C5CFC');
    document.documentElement.style.setProperty('--app-font-size', state.settings.fontSize || '16px');

    applySidebarState();

    const nameIn = document.getElementById('setting-username');
    const quoteIn = document.getElementById('setting-subtitle');
    const colorIn = document.getElementById('setting-accent-color');
    const fontIn = document.getElementById('setting-font-size');

    if (nameIn) nameIn.value = state.user.name || 'Developer';
    if (quoteIn) quoteIn.value = state.user.quote || '';
    if (colorIn) colorIn.value = state.settings.accent || '#7C5CFC';
    if (fontIn) fontIn.value = state.settings.fontSize || '16px';

    updateLiveClockAndGreetings();
}

function updateProfileSettings() {
    state.user.name = document.getElementById('setting-username').value;
    state.user.quote = document.getElementById('setting-subtitle').value;
    saveAppState();
    updateLiveClockAndGreetings();
}

function updateThemeSettings() {
    state.settings.accent = document.getElementById('setting-accent-color').value;
    state.settings.fontSize = document.getElementById('setting-font-size').value;
    applySettingsToUI();
    saveAppState();
}

// --- DATA MANAGEMENT ---
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `routine_backup_${getTodayDateKey()}.json`);
    dlAnchorElem.click();
}

function triggerImport() {
    document.getElementById('import-file-input').click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed.tasks) state.tasks = parsed.tasks;
            if (parsed.completions) state.completions = parsed.completions;
            if (parsed.user) state.user = parsed.user;
            if (parsed.settings) state.settings = parsed.settings;
            saveAppState();
            applySettingsToUI();
            alert("Routine imported successfully!");
        } catch (err) {
            alert("Invalid backup JSON file.");
        }
    };
    reader.readAsText(file);
}

function openConfirmModal(action) {
    const modal = document.getElementById('confirm-modal');
    const actionBtn = document.getElementById('confirm-modal-action-btn');
    actionBtn.onclick = () => {
        if (action === 'resetAll') {
            localStorage.removeItem('aetherflow_state');
            location.reload();
        }
    };
    modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
}

function format12Hour(tStr) {
    if (!tStr) return '--:--';
    let [h, m] = tStr.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function getTodayDateKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}