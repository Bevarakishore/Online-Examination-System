const examSets = {
    "1. Web Development": {
        duration: 20,
        difficulty: "Advanced",
        questions: [
            {
                question: "Which HTML tag is used to define the largest heading?",
                options: ["<h6>", "<h1>", "<head>", "<header>"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which CSS property changes the space between letters?",
                options: ["letter-spacing", "text-shadow", "line-height", "font-style"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What does the JavaScript method querySelector() return?",
                options: ["A list of all elements", "The first matching element", "A CSS rule", "A string value"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which attribute is used to add a source path to an image?",
                options: ["alt", "href", "src", "class"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "Which CSS property controls the background color of an element?",
                options: ["color", "background-color", "border-color", "padding"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
    "2. Database Concepts": {
        duration: 18,
        difficulty: "Advanced",
        questions: [
            {
                question: "Which SQL command is used to retrieve records from a table?",
                options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which key uniquely identifies a row in a table?",
                options: ["Foreign key", "Unique key", "Primary key", "Index key"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Standard Query Logic", "Simple Query Language", "Sequential Query List"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which clause filters rows in an SQL query?",
                options: ["ORDER BY", "WHERE", "GROUP BY", "JOIN"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which command creates a new table in SQL?",
                options: ["CREATE TABLE", "MAKE TABLE", "SET TABLE", "ADD TABLE"],
                correctAnswer: 0,
                points: 5,
            },
        ],
    },
    "3. Networking Basics": {
        duration: 22,
        difficulty: "Advanced",
        questions: [
            {
                question: "What does IP stand for?",
                options: ["Internet Provider", "Internal Protocol", "Internet Protocol", "Interconnect Port"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "Which device connects multiple devices in a network?",
                options: ["Router", "Monitor", "Keyboard", "CPU"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which protocol is used for secure web communication?",
                options: ["HTTP", "FTP", "HTTPS", "SMTP"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "What is the range of IPv4 addresses typically represented as?",
                options: ["16-bit numbers", "32-bit numbers", "64-bit numbers", "128-bit numbers"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which layer of the OSI model handles routing?",
                options: ["Transport", "Network", "Data Link", "Application"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
    "4. JavaScript Fundamentals": {
        duration: 20,
        difficulty: "Advanced",
        questions: [
            {
                question: "Which keyword creates a block-scoped variable?",
                options: ["var", "let", "function", "return"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "What does the Array.map() method return?",
                options: ["The original array", "A new array", "A boolean", "A number"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which of these is used to declare a function in JavaScript?",
                options: ["function myFunc() {}", "let myFunc = {}", "array myFunc()", "class myFunc"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What is the purpose of JSON.stringify()?",
                options: ["Convert object to JSON text", "Parse a string to object", "Send HTTP request", "Create DOM node"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which event is triggered when an input field loses focus?",
                options: ["onchange", "onblur", "onload", "onclick"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
    "5. Data Structures": {
        duration: 25,
        difficulty: "Advanced",
        questions: [
            {
                question: "Which data structure uses FIFO order?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which operation removes the top element from a stack?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "A binary tree node usually has how many children?",
                options: ["At most 2", "At most 3", "Exactly 2", "Exactly 1"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which data structure is best for quick lookup by key?",
                options: ["Array", "Hash map", "Linked list", "Stack"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which complexity is typically associated with binary search?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
};

const authScreen = document.getElementById("authScreen");
const appShell = document.getElementById("appShell");
const adminDashboard = document.getElementById("adminDashboard");
const adminSlideTabs = document.querySelectorAll(".admin-slide-tab");
const adminSlides = document.querySelectorAll(".admin-slide");
const studentLoginTab = document.getElementById("studentLoginTab");
const adminLoginTab = document.getElementById("adminLoginTab");
const loginForm = document.getElementById("loginForm");
const adminLoginForm = document.getElementById("adminLoginForm");
const subjectGrid = document.getElementById("subjectGrid");
const studentName = document.getElementById("studentName");
const profileInitials = document.getElementById("profileInitials");
const profileAvatarLarge = document.getElementById("profileAvatarLarge");
const profileStudentName = document.getElementById("profileStudentName");
const profileCollege = document.getElementById("profileCollege");
const profileBranch = document.getElementById("profileBranch");
const profileHallTicket = document.getElementById("profileHallTicket");
const selectedSubjectEl = document.getElementById("selectedSubject");
const overviewQuestionCountEl = document.getElementById("overviewQuestionCount");
const examCategoryEl = document.getElementById("examCategory");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("questionNumber");
const questionTextEl = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const totalQuestionsEl = document.getElementById("totalQuestions");
const answeredCountEl = document.getElementById("answeredCount");
const remainingCountEl = document.getElementById("remainingCount");
const questionNavigator = document.getElementById("questionNavigator");
const resultModal = document.getElementById("resultModal");
const resultMessage = document.getElementById("resultMessage");
const finalScoreEl = document.getElementById("finalScore");
const gradeBox = document.getElementById("gradeBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const startExamBtn = document.getElementById("startExamBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const themeToggleText = document.getElementById("themeToggleText");
const leaderboardList = document.getElementById("leaderboardList");
const adminProfileForm = document.getElementById("adminProfileForm");
const adminPasswordForm = document.getElementById("adminPasswordForm");
const studentPasswordForm = document.getElementById("studentPasswordForm");
const adminDisplayName = document.getElementById("adminDisplayName");
const adminSavedUsername = document.getElementById("adminSavedUsername");
const adminSavedPassword = document.getElementById("adminSavedPassword");
const adminUserNameLabel = document.getElementById("adminUserNameLabel");
const adminAccountList = document.getElementById("adminAccountList");
const saveAdminBtn = document.getElementById("saveAdminBtn");
const studentEntryPassword = document.getElementById("studentEntryPassword");
const studentForm = document.getElementById("studentForm");
const adminTotalStudents = document.getElementById("adminTotalStudents");
const adminPassedCount = document.getElementById("adminPassedCount");
const adminPendingCount = document.getElementById("adminPendingCount");
const studentTableBody = document.getElementById("studentTableBody");
const studentResultFilter = document.getElementById("studentResultFilter");
const resetStudentFormBtn = document.getElementById("resetStudentFormBtn");
const oldAdminPassword = document.getElementById("oldAdminPassword");
const newAdminPassword = document.getElementById("newAdminPassword");
const confirmAdminPassword = document.getElementById("confirmAdminPassword");
const oldStudentPassword = document.getElementById("studentOldPassword");
const newStudentPassword = document.getElementById("studentNewPassword");
const confirmStudentPassword = document.getElementById("studentConfirmPassword");

loginForm.addEventListener("submit", handleLogin);
adminLoginForm.addEventListener("submit", handleAdminLogin);
studentForm.addEventListener("submit", handleStudentFormSubmit);
if (resetStudentFormBtn) {
    resetStudentFormBtn.addEventListener("click", resetStudentForm);
}
if (studentResultFilter) {
    studentResultFilter.addEventListener("change", renderStudentTable);
}
studentLoginTab.addEventListener("click", () => setAuthMode("student"));
adminLoginTab.addEventListener("click", () => setAuthMode("admin"));
adminSlideTabs.forEach((tab) => {
    tab.addEventListener("click", () => showAdminSlide(tab));
});
adminLogoutBtn.addEventListener("click", logoutAdmin);
themeToggleBtn.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
});
adminProfileForm.addEventListener("submit", handleAdminProfileSave);
adminPasswordForm.addEventListener("submit", handleAdminPasswordChange);
studentPasswordForm.addEventListener("submit", handleStudentPasswordChange);
document.addEventListener("click", (event) => {
    const toggleButton = event.target.closest(".toggle-password-btn");
    if (!toggleButton) {
        return;
    }

    const input = document.getElementById(toggleButton.dataset.target);
    if (!input) {
        return;
    }

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    toggleButton.textContent = isPassword ? "Hide" : "Show";
});

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("examTheme", theme);
    themeToggleIcon.textContent = isDark ? "☀" : "☾";
    themeToggleText.textContent = isDark ? "Light" : "Dark";
}

function initializeTheme() {
    const savedTheme = localStorage.getItem("examTheme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const selectedTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    applyTheme(selectedTheme);
}

function getDefaultAdminCredentials() {
    return {
        name: "Bevara kishore",
        username: "Bevara kishore",
        password: "kishore@1234",
    };
}

function getAdminAccounts() {
    const legacySaved = JSON.parse(localStorage.getItem("examAdminCredentials") || "null");
    const saved = JSON.parse(localStorage.getItem("examAdminAccounts") || "null");
    const defaults = [getDefaultAdminCredentials()];

    if (saved && Array.isArray(saved) && saved.length) {
        return saved;
    }

    if (legacySaved && legacySaved.username) {
        const migrated = [{
            name: legacySaved.name || legacySaved.username,
            username: legacySaved.username,
            password: legacySaved.password || "",
        }];
        localStorage.setItem("examAdminAccounts", JSON.stringify(migrated));
        localStorage.removeItem("examAdminCredentials");
        return migrated;
    }

    localStorage.setItem("examAdminAccounts", JSON.stringify(defaults));
    return defaults;
}

function getAdminCredentials() {
    const accounts = getAdminAccounts();
    return accounts[0] || getDefaultAdminCredentials();
}

function getCurrentLoggedInAdmin() {
    const rawSession = localStorage.getItem("examAdminSession");
    if (!rawSession) {
        return null;
    }

    try {
        const session = JSON.parse(rawSession);
        if (session && session.username) {
            return session;
        }
    } catch (error) {
        return null;
    }

    return null;
}

function saveAdminAccounts(accounts) {
    localStorage.setItem("examAdminAccounts", JSON.stringify(accounts));
    const primary = accounts[0] || getDefaultAdminCredentials();
    localStorage.setItem("examAdminCredentials", JSON.stringify(primary));
}

function saveAdminCredentials(credentials) {
    const accounts = getAdminAccounts();
    const existingIndex = accounts.findIndex((account) =>
        account.username.toLowerCase() === credentials.username.toLowerCase()
    );

    if (existingIndex >= 0) {
        accounts[existingIndex] = {
            ...accounts[existingIndex],
            ...credentials,
            username: credentials.username,
            password: credentials.password,
            name: credentials.name || credentials.username,
        };
    } else {
        accounts.push({
            name: credentials.name || credentials.username,
            username: credentials.username,
            password: credentials.password,
        });
    }

    saveAdminAccounts(accounts);
}

function resetAdminForm() {
    adminProfileForm.reset();
    adminProfileForm.dataset.editingUsername = "";
    if (saveAdminBtn) {
        saveAdminBtn.textContent = "Save Admin Details";
    }
}

function renderAdminAccountList() {
    const accounts = getAdminAccounts();
    if (!adminAccountList) {
        return;
    }

    adminAccountList.innerHTML = "";

    accounts.forEach((account) => {
        const item = document.createElement("li");
        item.className = "saved-admin-item";
        item.dataset.username = account.username;

        const currentAdmin = getCurrentLoggedInAdmin();
        const isCurrentAdmin = currentAdmin && currentAdmin.username.toLowerCase() === account.username.toLowerCase();

        item.innerHTML = `
            <div class="saved-admin-meta">
                <strong>${account.name || account.username}</strong>
                <span>@${account.username}</span>
                ${isCurrentAdmin ? '<em>Current</em>' : ''}
            </div>
            <div class="saved-admin-actions">
                <button type="button" class="small-btn edit-admin-btn">Edit</button>
                <button type="button" class="small-btn delete-admin-btn danger">Delete</button>
            </div>
        `;

        item.querySelector(".edit-admin-btn").addEventListener("click", () => {
            adminDisplayName.value = account.name || account.username;
            adminSavedUsername.value = account.username;
            adminSavedPassword.value = account.password || "";
            adminProfileForm.dataset.editingUsername = account.username;
            if (saveAdminBtn) {
                saveAdminBtn.textContent = "Update Admin";
            }
            adminDisplayName.scrollIntoView({ behavior: "smooth", block: "center" });
        });

        item.querySelector(".delete-admin-btn").addEventListener("click", () => {
            const currentUser = getCurrentLoggedInAdmin();
            if (currentUser && currentUser.username.toLowerCase() === account.username.toLowerCase()) {
                alert("You cannot delete the admin currently logged in.");
                return;
            }

            if (!window.confirm(`Delete admin ${account.name || account.username}?`)) {
                return;
            }

            const updatedAccounts = getAdminAccounts().filter((entry) =>
                entry.username.toLowerCase() !== account.username.toLowerCase()
            );

            if (!updatedAccounts.length) {
                saveAdminAccounts([getDefaultAdminCredentials()]);
            } else {
                saveAdminAccounts(updatedAccounts);
            }

            resetAdminForm();
            populateAdminProfile();
        });

        adminAccountList.appendChild(item);
    });
}

function populateAdminProfile() {
    const adminCredentials = getAdminCredentials();
    const adminName = adminCredentials.name || adminCredentials.username || "Bevara kishore";
    adminDisplayName.value = adminName;
    adminSavedUsername.value = adminCredentials.username || adminName;
    if (adminSavedPassword) {
        adminSavedPassword.value = adminCredentials.password || "";
    }

    if (adminUserNameLabel) {
        adminUserNameLabel.textContent = adminName;
    }

    renderAdminAccountList();
}

function handleAdminProfileSave(event) {
    event.preventDefault();

    const nextName = adminDisplayName.value.trim();
    const nextUsername = adminSavedUsername.value.trim();
    const nextPassword = adminSavedPassword.value.trim();
    const editingUsername = (adminProfileForm.dataset.editingUsername || "").trim();

    if (!nextName || !nextUsername || !nextPassword) {
        alert("Please enter the admin name, username, and password.");
        return;
    }

    const accounts = getAdminAccounts();
    const duplicateAccount = accounts.find((account) =>
        account.username.toLowerCase() === nextUsername.toLowerCase() &&
        (!editingUsername || account.username.toLowerCase() !== editingUsername.toLowerCase())
    );

    if (duplicateAccount) {
        alert("This admin username already exists. Please choose a different username.");
        return;
    }

    const credentials = {
        name: nextName,
        username: nextUsername,
        password: nextPassword,
    };

    if (editingUsername) {
        const existingIndex = accounts.findIndex((account) => account.username.toLowerCase() === editingUsername.toLowerCase());
        if (existingIndex >= 0) {
            accounts[existingIndex] = {
                ...accounts[existingIndex],
                ...credentials,
            };
            saveAdminAccounts(accounts);

            const currentSession = getCurrentLoggedInAdmin();
            if (currentSession && currentSession.username.toLowerCase() === editingUsername.toLowerCase()) {
                localStorage.setItem("examAdminSession", JSON.stringify({
                    name: nextName,
                    username: nextUsername,
                }));
            }
        }
    } else {
        saveAdminCredentials(credentials);
    }

    resetAdminForm();
    populateAdminProfile();
    alert(editingUsername ? "Admin account updated successfully." : "Admin account saved successfully.");
}

function handleAdminPasswordChange(event) {
    event.preventDefault();

    const currentSession = getCurrentLoggedInAdmin();
    if (!currentSession || !currentSession.username) {
        alert("Please log in again to change the password.");
        return;
    }

    const accounts = getAdminAccounts();
    const credentials = accounts.find((account) =>
        account.username.toLowerCase() === currentSession.username.toLowerCase()
    );

    if (!credentials) {
        alert("Current admin account was not found.");
        return;
    }

    const oldPassword = oldAdminPassword.value;
    const newPassword = newAdminPassword.value;
    const confirmPassword = confirmAdminPassword.value;

    if (oldPassword !== credentials.password) {
        alert("Old password is incorrect.");
        return;
    }

    if (!newPassword || newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    credentials.password = newPassword;
    saveAdminAccounts(accounts);
    adminPasswordForm.reset();
    alert("Password changed successfully.");
}

function handleStudentPasswordChange(event) {
    event.preventDefault();

    const studentProfile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
    if (!studentProfile || !studentProfile.hallTicket) {
        alert("Please log in again to change the password.");
        return;
    }

    const students = getStudentAccounts();
    const studentIndex = students.findIndex((student) =>
        student.hallTicket?.toLowerCase() === studentProfile.hallTicket.toLowerCase()
    );
    if (studentIndex < 0) {
        alert("Student account was not found.");
        return;
    }

    const currentStudent = students[studentIndex];
    const oldPassword = oldStudentPassword.value;
    const newPassword = newStudentPassword.value;
    const confirmPassword = confirmStudentPassword.value;

    if (oldPassword !== currentStudent.password) {
        alert("Old password is incorrect.");
        return;
    }

    if (!newPassword || newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    currentStudent.password = newPassword;
    saveStudentAccounts(students);
    studentProfile.password = newPassword;
    localStorage.setItem("examStudentProfile", JSON.stringify(studentProfile));
    studentPasswordForm.reset();
    alert("Password changed successfully.");
}

function getStudentAccounts() {
    const students = JSON.parse(localStorage.getItem("examStudents") || "[]");
    return Array.isArray(students) ? students : [];
}

function getStudentStats() {
    const students = getStudentAccounts();
    const passed = students.filter((student) => Number(student.score || 0) >= 40).length;
    const pending = students.length - passed;

    return { total: students.length, passed, pending };
}

function updateAdminStudentStats() {
    const stats = getStudentStats();

    if (adminTotalStudents) {
        adminTotalStudents.textContent = String(stats.total);
    }

    if (adminPassedCount) {
        adminPassedCount.textContent = String(stats.passed);
    }

    if (adminPendingCount) {
        adminPendingCount.textContent = String(stats.pending);
    }
}

function saveStudentAccounts(students) {
    localStorage.setItem("examStudents", JSON.stringify(students));
    updateAdminStudentStats();
}

function getStudentStatus(student) {
    return Number(student.score || 0) >= 40 ? "passed" : "pending";
}

function resetStudentForm() {
    studentForm.reset();
    if (studentEntryPassword) {
        studentEntryPassword.value = "";
    }
    if (document.getElementById("studentEditId")) {
        document.getElementById("studentEditId").value = "";
    }
}

function populateStudentForm(student) {
    document.getElementById("studentEntryName").value = student.name || "";
    document.getElementById("studentEntryHallTicket").value = student.hallTicket || "";
    document.getElementById("studentEntryBranch").value = student.branch || "";
    document.getElementById("studentEntryCollege").value = student.college || "";
    studentEntryPassword.value = student.password || "";
    document.getElementById("studentEntryScore").value = student.score ?? 0;
    document.getElementById("studentEntryHallTicket").focus();
}

function renderStudentTable() {
    if (!studentTableBody) {
        return;
    }

    const students = getStudentAccounts();
    const activeFilter = studentResultFilter ? studentResultFilter.value : "all";
    const filteredStudents = students.filter((student) => {
        if (activeFilter === "all") {
            return true;
        }
        return getStudentStatus(student) === activeFilter;
    });

    studentTableBody.innerHTML = "";

    if (!filteredStudents.length) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="6">No students found for this filter.</td>
            </tr>
        `;
        return;
    }

    filteredStudents.forEach((student) => {
        const row = document.createElement("tr");
        const status = getStudentStatus(student);
        const statusLabel = status === "passed" ? "Passed" : "Pending";

        row.innerHTML = `
            <td>${student.name || "-"}</td>
            <td>${student.hallTicket || "-"}</td>
            <td>${student.branch || "-"}</td>
            <td>${student.college || "-"}</td>
            <td>
                <div class="result-tag ${status}">${statusLabel}</div>
                <small>${student.score ?? 0}/100</small>
            </td>
            <td>
                <button type="button" class="small-btn edit-student-btn">Edit</button>
                <button type="button" class="small-btn delete-student-btn danger">Delete</button>
            </td>
        `;

        row.addEventListener("click", (event) => {
            if (event.target.closest("button")) {
                return;
            }
            populateStudentForm(student);
        });

        row.querySelector(".edit-student-btn").addEventListener("click", () => {
            populateStudentForm(student);
        });

        row.querySelector(".delete-student-btn").addEventListener("click", () => {
            const filtered = getStudentAccounts().filter((entry) =>
                entry.hallTicket?.toLowerCase() !== student.hallTicket?.toLowerCase()
            );
            saveStudentAccounts(filtered);
            renderStudentTable();
        });

        studentTableBody.appendChild(row);
    });
}

function getStudentByHallTicket(hallTicket) {
    return getStudentAccounts().find((student) =>
        student.hallTicket && student.hallTicket.toLowerCase() === hallTicket.toLowerCase()
    );
}

function handleStudentFormSubmit(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentEntryName").value.trim();
    const hallTicket = document.getElementById("studentEntryHallTicket").value.trim();
    const branch = document.getElementById("studentEntryBranch").value.trim();
    const college = document.getElementById("studentEntryCollege").value.trim();
    const score = document.getElementById("studentEntryScore").value.trim();
    const password = studentEntryPassword.value.trim();

    if (!studentName || !hallTicket || !branch || !college || !score || !password) {
        alert("Please fill in all student fields, including password.");
        return;
    }

    const students = getStudentAccounts();
    const existingStudent = getStudentByHallTicket(hallTicket);
    const payload = {
        name: studentName,
        hallTicket,
        branch,
        college,
        score: Number(score),
        password,
    };

    if (existingStudent) {
        const index = students.findIndex((student) =>
            student.hallTicket && student.hallTicket.toLowerCase() === hallTicket.toLowerCase()
        );
        students[index] = { ...existingStudent, ...payload };
    } else {
        students.push(payload);
    }

    saveStudentAccounts(students);
    renderStudentTable();
    resetStudentForm();
    alert("Student account saved successfully.");
}

function getLeaderboard() {
    const defaultBoard = [
        { name: "Bevara Kishore", score: 92 },
        { name: "Aisha Khan", score: 88 },
        { name: "Srinivas", score: 83 },
        { name: "Meera", score: 79 }
    ];

    const storedBoard = JSON.parse(localStorage.getItem("examLeaderboard") || "null");
    if (storedBoard && storedBoard.length) {
        return storedBoard;
    }

    localStorage.setItem("examLeaderboard", JSON.stringify(defaultBoard));
    return defaultBoard;
}

function renderLeaderboard() {
    const board = [...getLeaderboard()].sort((a, b) => b.score - a.score).slice(0, 5);
    leaderboardList.innerHTML = "";

    board.forEach((entry, index) => {
        const item = document.createElement("li");
        item.className = "leaderboard-item";
        item.innerHTML = `
            <div class="leaderboard-rank">#${index + 1}</div>
            <div class="leaderboard-meta">
                <strong>${entry.name}</strong>
                <small>${entry.score}%</small>
            </div>
        `;
        leaderboardList.appendChild(item);
    });
}

const subjectIcons = {
    "1. Web Development": "1",
    "2. Database Concepts": "2",
    "3. Networking Basics": "3",
    "4. JavaScript Fundamentals": "4",
    "5. Data Structures": "5",
};

let currentSubject = "1. Web Development";
let currentQuestionIndex = 0;
let selectedAnswers = [];
let timeLeft = 15 * 60;
let timerInterval = null;

function getInitials(fullName) {
    return fullName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("") || "ST";
}

function setStudentProfile(studentData) {
    const name = studentData.name.trim() || "Student";
    const college = studentData.college.trim() || "College";
    const branch = studentData.branch.trim() || "Branch";
    const hallTicket = studentData.hallTicket.trim() || "Hall Ticket";

    studentName.textContent = name;
    profileInitials.textContent = getInitials(name);
    profileAvatarLarge.textContent = getInitials(name);
    profileStudentName.textContent = name;
    profileCollege.textContent = college;
    profileBranch.textContent = branch;
    profileHallTicket.textContent = `Hall Ticket: ${hallTicket}`;
}

function setAuthMode(mode) {
    const isStudentMode = mode === "student";

    if (isStudentMode) {
        adminLoginForm.reset();
    } else {
        loginForm.reset();
    }

    studentLoginTab.classList.toggle("active", isStudentMode);
    adminLoginTab.classList.toggle("active", !isStudentMode);

    loginForm.classList.toggle("hidden", !isStudentMode);
    adminLoginForm.classList.toggle("hidden", isStudentMode);
}

function showAdminSlide(selectedTab) {
    const selectedSlideId = selectedTab.getAttribute("aria-controls");

    adminSlideTabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        tab.classList.toggle("active", isSelected);
        tab.setAttribute("aria-selected", String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
    });

    adminSlides.forEach((slide) => {
        const isSelected = slide.id === selectedSlideId;
        slide.classList.toggle("hidden", !isSelected);
        slide.hidden = !isSelected;
    });
}

function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const studentData = {
        name: formData.get("studentName").toString().trim(),
        college: formData.get("collegeName").toString().trim(),
        branch: formData.get("branch").toString().trim(),
        hallTicket: formData.get("hallTicket").toString().trim(),
        password: formData.get("studentPassword").toString().trim(),
    };

    const hasEmptyField = Object.values(studentData).some((value) => value === "");
    if (hasEmptyField) {
        alert("Please fill in all student details and password before logging in.");
        return;
    }

    const storedStudents = JSON.parse(localStorage.getItem("examStudents") || "[]");
    const existingStudentIndex = storedStudents.findIndex((entry) =>
        entry.hallTicket.toLowerCase() === studentData.hallTicket.toLowerCase()
    );

    if (existingStudentIndex >= 0) {
        const existingStudent = storedStudents[existingStudentIndex];
        if (existingStudent.password !== studentData.password) {
            alert("Incorrect student password. Please use the correct password for this hall ticket.");
            return;
        }

        storedStudents[existingStudentIndex] = {
            ...existingStudent,
            ...studentData,
        };
    } else {
        storedStudents.push({ ...studentData });
    }

    localStorage.setItem("examStudents", JSON.stringify(storedStudents));
    localStorage.setItem("examStudentProfile", JSON.stringify(studentData));
    localStorage.removeItem("examAdminSession");
    setStudentProfile(studentData);
    authScreen.classList.add("hidden");
    appShell.classList.remove("hidden");
    adminDashboard.classList.add("hidden");
}

function handleAdminLogin(event) {
    event.preventDefault();

    const formData = new FormData(adminLoginForm);
    const username = formData.get("adminUsername").toString().trim();
    const password = formData.get("adminPassword").toString();
    const adminAccounts = getAdminAccounts();
    const matchedAdmin = adminAccounts.find((account) => {
        const normalizedUsername = (account.username || "").trim().toLowerCase();
        const normalizedInput = username.trim().toLowerCase();
        return normalizedUsername === normalizedInput && account.password === password;
    });

    if (!matchedAdmin) {
        alert("Invalid admin credentials. Use one of the saved admin usernames and passwords.");
        return;
    }

    localStorage.setItem("examAdminSession", JSON.stringify({
        name: matchedAdmin.name || matchedAdmin.username,
        username: matchedAdmin.username,
    }));
    localStorage.removeItem("examStudentProfile");
    authScreen.classList.add("hidden");
    appShell.classList.add("hidden");
    adminDashboard.classList.remove("hidden");
    if (adminUserNameLabel) {
        adminUserNameLabel.textContent = matchedAdmin.name || matchedAdmin.username;
    }
    populateAdminProfile();
}

function logoutAdmin() {
    localStorage.removeItem("examAdminSession");
    if (adminUserNameLabel) {
        adminUserNameLabel.textContent = "Admin";
    }
    adminDashboard.classList.add("hidden");
    authScreen.classList.remove("hidden");
    setAuthMode("student");
}

function buildSubjectCards() {
    subjectGrid.innerHTML = "";

    Object.keys(examSets).forEach((subject) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "subject-card";
        if (subject === currentSubject) {
            card.classList.add("active");
        }

        card.innerHTML = `
            <div class="subject-icon">${subjectIcons[subject]}</div>
            <div>
                <h4>${subject}</h4>
            </div>
            <div class="subject-meta">
                <span>${examSets[subject].questions.length} questions</span>
                <span>${examSets[subject].difficulty}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            loadSubject(subject);
        });

        subjectGrid.appendChild(card);
    });
}

function getCurrentQuestions() {
    return examSets[currentSubject].questions;
}

function updateSelectedSubject() {
    selectedSubjectEl.textContent = currentSubject;
    overviewQuestionCountEl.textContent = getCurrentQuestions().length;
    examCategoryEl.textContent = currentSubject;
}

function resetExamState() {
    currentQuestionIndex = 0;
    selectedAnswers = Array(getCurrentQuestions().length).fill(null);
    timeLeft = examSets[currentSubject].duration * 60;
    clearInterval(timerInterval);
}

function loadSubject(subject) {
    currentSubject = subject;
    resetExamState();
    buildSubjectCards();
    updateSelectedSubject();
    renderQuestion();
    updateNavigator();
    renderTimer();
    startTimer();
}

function renderQuestion() {
    const questions = getCurrentQuestions();
    const currentQuestion = questions[currentQuestionIndex];

    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1}`;
    questionTextEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        if (selectedAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            selectedAnswers[currentQuestionIndex] = index;
            renderQuestion();
            updateNavigator();
        });

        optionsContainer.appendChild(button);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
    updateProgress();
}

function renderTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
            return;
        }

        timeLeft -= 1;
        renderTimer();
    }, 1000);
}

function updateProgress() {
    const questions = getCurrentQuestions();
    const answered = selectedAnswers.filter((answer) => answer !== null).length;
    const progress = (answered / questions.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% complete`;
    answeredCountEl.textContent = answered;
    remainingCountEl.textContent = questions.length - answered;
    totalQuestionsEl.textContent = questions.length;
}

function updateNavigator() {
    const questions = getCurrentQuestions();
    questionNavigator.innerHTML = "";

    questions.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "nav-btn";

        if (index === currentQuestionIndex) {
            btn.classList.add("active");
        }

        if (selectedAnswers[index] !== null) {
            btn.classList.add("answered");
        }

        btn.textContent = index + 1;
        btn.addEventListener("click", () => {
            currentQuestionIndex = index;
            renderQuestion();
            updateNavigator();
        });

        questionNavigator.appendChild(btn);
    });

    updateProgress();
}

function calculateGrade(score, total) {
    const percentage = (score / total) * 100;

    if (percentage >= 85) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 55) return "C";
    if (percentage >= 40) return "D";
    return "F";
}

function submitExam() {
    clearInterval(timerInterval);

    const questions = getCurrentQuestions();
    let score = 0;

    questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
            score += question.points;
        }
    });

    const totalMarks = questions.reduce((sum, question) => sum + question.points, 0);
    const percentage = Math.round((score / totalMarks) * 100);
    const grade = calculateGrade(score, totalMarks);

    const studentProfile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
    const leaderboard = [...getLeaderboard()];
    const currentStudentName = studentProfile?.name || "Student";

    const updatedBoard = leaderboard.filter((entry) => entry.name !== currentStudentName);
    updatedBoard.push({ name: currentStudentName, score: percentage });
    localStorage.setItem("examLeaderboard", JSON.stringify(updatedBoard.sort((a, b) => b.score - a.score).slice(0, 6)));
    renderLeaderboard();

    resultMessage.textContent = `You scored ${score} out of ${totalMarks} marks (${percentage}%).`;
    finalScoreEl.textContent = `${score}/${totalMarks}`;
    gradeBox.textContent = `Grade: ${grade}`;
    resultModal.classList.remove("hidden");
}

function restartExam() {
    resetExamState();
    renderQuestion();
    updateNavigator();
    renderTimer();
    startTimer();
    resultModal.classList.add("hidden");
}

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        renderQuestion();
        updateNavigator();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < getCurrentQuestions().length - 1) {
        currentQuestionIndex += 1;
        renderQuestion();
        updateNavigator();
    } else {
        submitExam();
    }
});

submitBtn.addEventListener("click", submitExam);
restartBtn.addEventListener("click", restartExam);
startExamBtn.addEventListener("click", () => {
    document.getElementById("examPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

initializeTheme();
populateAdminProfile();
updateAdminStudentStats();
renderStudentTable();

const savedProfile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
const savedAdminSession = localStorage.getItem("examAdminSession");

if (savedAdminSession) {
    authScreen.classList.add("hidden");
    appShell.classList.add("hidden");
    adminDashboard.classList.remove("hidden");
} else if (savedProfile) {
    setStudentProfile(savedProfile);
    authScreen.classList.add("hidden");
    appShell.classList.remove("hidden");
    adminDashboard.classList.add("hidden");
} else {
    appShell.classList.add("hidden");
    adminDashboard.classList.add("hidden");
    setAuthMode("student");
}

buildSubjectCards();
updateSelectedSubject();
resetExamState();
renderQuestion();
updateNavigator();
renderTimer();
renderLeaderboard();
startTimer();
