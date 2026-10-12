let examSets = {
    "1. JavaScript Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which keyword declares a block-scoped variable that can be reassigned?",
                options: ["const", "let", "static", "final"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "What does Array.prototype.map() return?",
                options: ["A new transformed array", "The first matching value", "A boolean", "The original array only"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which value represents an intentional absence of an object value?",
                options: ["0", "false", "null", "NaN"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "Which method converts a JSON string into a JavaScript value?",
                options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.decode()"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which operator compares both value and type?",
                options: ["==", "=", "===", "!=="],
                correctAnswer: 2,
                points: 5,
            },
        ],
    },
    "2. DBMS Essentials": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which key uniquely identifies each row in a relational table?",
                options: ["Foreign key", "Primary key", "Composite index", "View key"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which SQL command retrieves data from a table?",
                options: ["SELECT", "INSERT", "UPDATE", "ALTER"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What does a foreign key reference?",
                options: ["A row in a related table", "A database password", "A stored procedure", "A column alias"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which normal form removes partial dependency on a composite key?",
                options: ["First normal form", "Second normal form", "Third normal form", "Boyce-Codd normal form"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which clause filters rows before grouping?",
                options: ["HAVING", "ORDER BY", "WHERE", "GROUP BY"],
                correctAnswer: 2,
                points: 5,
            },
        ],
    },
    "3. AI Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "What is the primary goal of an artificial intelligence system?",
                options: ["Perform tasks that normally require human intelligence", "Store files without processing them", "Replace every computer network", "Convert all data into images"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which AI field helps computers understand and generate human language?",
                options: ["Computer vision", "Natural language processing", "Database normalization", "Robotics hardware"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which AI field focuses on interpreting images and video?",
                options: ["Computer vision", "Speech synthesis", "Scheduling", "Data compression"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What is an expert system designed to do?",
                options: ["Apply encoded domain knowledge to make recommendations or decisions", "Increase a computer's physical memory", "Render three-dimensional graphics", "Replace an operating system"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What does the Turing test evaluate?",
                options: ["Whether a machine's conversational behavior can appear human", "How quickly a processor executes arithmetic", "Whether a database is encrypted", "How much memory a robot uses"],
                correctAnswer: 0,
                points: 5,
            },
        ],
    },
    "4. Machine Learning Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which type of learning uses labeled examples?",
                options: ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Transfer only"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "What is a feature in a machine-learning dataset?",
                options: ["An input variable used by a model", "The model's final accuracy", "A training algorithm", "A predicted label only"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which task predicts a continuous numeric value?",
                options: ["Classification", "Clustering", "Regression", "Tokenization"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "What is overfitting?",
                options: ["A model performs well on training data but poorly on new data", "A model has too few features", "A dataset contains no labels", "Training stops before it begins"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which learning approach improves behavior using rewards and penalties?",
                options: ["Supervised learning", "Reinforcement learning", "Dimensionality reduction", "Regression"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
    "5. HTML Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which element represents the main content of an HTML document?",
                options: ["<main>", "<head>", "<aside>", "<footer>"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which attribute provides alternative text for an image?",
                options: ["title", "alt", "caption", "src"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which element associates a text caption with a form control?",
                options: ["<legend>", "<label>", "<caption>", "<summary>"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which element is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<nav>"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "What does the HTML lang attribute on the <html> element identify?",
                options: ["The page's programming language", "The document's human language", "The browser's locale", "The page's character encoding"],
                correctAnswer: 1,
                points: 5,
            },
        ],
    },
    "6. CSS Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which CSS property changes the text color?",
                options: ["font-style", "text-color", "color", "foreground"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "Which selector targets an element with id=\"header\"?",
                options: [".header", "#header", "header*", "@header"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which declaration creates a flex formatting context?",
                options: ["position: flex", "display: flex", "layout: flex", "flex: display"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "In the CSS box model, what does padding add?",
                options: ["Space inside the border around content", "Space outside the margin", "A shadow around the element", "Space between sibling elements only"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "Which at-rule is commonly used to apply styles at a specific viewport width?",
                options: ["@supports", "@keyframes", "@media", "@layer"],
                correctAnswer: 2,
                points: 5,
            },
        ],
    },
    "7. Python Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which Python type represents an ordered, mutable collection?",
                options: ["tuple", "list", "frozenset", "str"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which keyword defines a function in Python?",
                options: ["function", "define", "def", "func"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "What does len([4, 7, 9]) return?",
                options: ["2", "3", "4", "20"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which block handles an exception raised in a try block?",
                options: ["except", "rescue", "catch", "finally"],
                correctAnswer: 0,
                points: 5,
            },
            {
                question: "What is the result of 7 // 2 in Python?",
                options: ["3", "3.5", "4", "1"],
                correctAnswer: 0,
                points: 5,
            },
        ],
    },
    "8. C Fundamentals": {
        duration: 10,
        difficulty: "Core",
        questions: [
            {
                question: "Which header declares the standard input/output functions such as printf?",
                options: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],
                correctAnswer: 2,
                points: 5,
            },
            {
                question: "Which format specifier is used to print an int with printf?",
                options: ["%c", "%d", "%f", "%s"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "What is the index of the first element in a C array?",
                options: ["-1", "0", "1", "It depends on the array size"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which operator obtains the address of a variable?",
                options: ["*", "&", "->", "%"],
                correctAnswer: 1,
                points: 5,
            },
            {
                question: "Which statement immediately exits the nearest loop?",
                options: ["skip", "return", "break", "continue"],
                correctAnswer: 2,
                points: 5,
            },
        ],
    },
};

const additionalExamQuestions = {
    "1. JavaScript Fundamentals": [
        { question: "Which value is a JavaScript primitive?", options: ["Array", "Function", "Symbol", "Date"], correctAnswer: 2, points: 5 },
        { question: "What does typeof [] return?", options: ["\"array\"", "\"object\"", "\"list\"", "\"undefined\""], correctAnswer: 1, points: 5 },
        { question: "Which array method adds an item to the end of an array?", options: ["push()", "shift()", "unshift()", "slice()"], correctAnswer: 0, points: 5 },
        { question: "Which keyword prevents a binding from being reassigned?", options: ["let", "var", "const", "static"], correctAnswer: 2, points: 5 },
        { question: "What does Promise.all() do when all supplied promises fulfill?", options: ["Returns their results in an array", "Runs only the first promise", "Converts them to callbacks", "Cancels the promises"], correctAnswer: 0, points: 5 },
        { question: "Which operator provides a fallback only when the left side is null or undefined?", options: ["||", "&&", "??", "=="], correctAnswer: 2, points: 5 },
        { question: "What is the result of Boolean(0)?", options: ["true", "\"false\"", "false", "null"], correctAnswer: 2, points: 5 },
        { question: "Which method creates a shallow copy of part of an array without changing the original?", options: ["splice()", "slice()", "pop()", "sort()"], correctAnswer: 1, points: 5 },
        { question: "In an arrow function, what does this normally refer to?", options: ["A new function-specific object", "The enclosing lexical context", "The global object in every case", "The function's arguments array"], correctAnswer: 1, points: 5 },
        { question: "Which statement skips the current loop iteration and continues with the next one?", options: ["break", "return", "continue", "exit"], correctAnswer: 2, points: 5 },
        { question: "Which string method tests whether a string contains a substring?", options: ["includes()", "containsText()", "has()", "matchAt()"], correctAnswer: 0, points: 5 },
        { question: "What does the spread syntax [...items] create when items is an array?", options: ["A shallow array copy", "A deep copy of every nested value", "A string", "A frozen array"], correctAnswer: 0, points: 5 },
        { question: "Which event fires when a user submits a form?", options: ["send", "submit", "forminput", "commit"], correctAnswer: 1, points: 5 },
        { question: "What does Array.isArray(value) check?", options: ["Whether value is an array", "Whether value is iterable", "Whether value is empty", "Whether value contains numbers"], correctAnswer: 0, points: 5 },
        { question: "Which method converts an object to a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.encodeObject()"], correctAnswer: 1, points: 5 },
    ],
    "2. DBMS Essentials": [
        { question: "Which ACID property means a transaction is completed entirely or not at all?", options: ["Consistency", "Isolation", "Atomicity", "Durability"], correctAnswer: 2, points: 5 },
        { question: "Which SQL clause sorts a query result?", options: ["ORDER BY", "GROUP BY", "SORT", "ARRANGE"], correctAnswer: 0, points: 5 },
        { question: "Which join returns rows with matching values in both tables?", options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "FULL OUTER JOIN"], correctAnswer: 0, points: 5 },
        { question: "What is the primary purpose of a database index?", options: ["Speed up data lookups", "Encrypt every row", "Replace primary keys", "Remove duplicate tables"], correctAnswer: 0, points: 5 },
        { question: "Which SQL command removes selected rows from a table?", options: ["DROP", "DELETE", "REMOVE TABLE", "ERASE"], correctAnswer: 1, points: 5 },
        { question: "Which constraint prevents a column from containing NULL values?", options: ["UNIQUE", "NOT NULL", "DEFAULT", "CHECK"], correctAnswer: 1, points: 5 },
        { question: "Which clause filters grouped results after aggregation?", options: ["WHERE", "HAVING", "LIMIT", "JOIN"], correctAnswer: 1, points: 5 },
        { question: "What does COMMIT do to a transaction?", options: ["Permanently applies its changes", "Reverses all its changes", "Creates a backup", "Locks the database permanently"], correctAnswer: 0, points: 5 },
        { question: "Which normal form requires every non-key attribute to depend on the key, the whole key, and nothing but the key?", options: ["First normal form", "Second normal form", "Third normal form", "Unnormalized form"], correctAnswer: 2, points: 5 },
        { question: "What does a UNIQUE constraint enforce?", options: ["No repeated values in the constrained column(s)", "Every value must be numeric", "Every row must be deleted together", "The column must be a foreign key"], correctAnswer: 0, points: 5 },
        { question: "Which aggregate function counts rows?", options: ["SUM()", "COUNT()", "TOTALROWS()", "SIZE()"], correctAnswer: 1, points: 5 },
        { question: "What is a database view?", options: ["A stored query presented like a virtual table", "A physical copy of every database file", "A type of index only", "A transaction log"], correctAnswer: 0, points: 5 },
        { question: "Which command changes the structure of an existing table?", options: ["ALTER TABLE", "UPDATE TABLE", "MODIFY ROW", "CHANGE DATABASE"], correctAnswer: 0, points: 5 },
        { question: "What does ROLLBACK do before a transaction is committed?", options: ["Undoes the transaction's uncommitted changes", "Sorts the affected rows", "Creates a new table", "Makes changes permanent"], correctAnswer: 0, points: 5 },
        { question: "What is a composite key?", options: ["A key made from more than one column", "A key that stores encrypted data", "A key shared by every database", "A key that can contain only NULL"], correctAnswer: 0, points: 5 },
    ],
    "3. AI Fundamentals": [
        { question: "What is a heuristic in an AI search algorithm?", options: ["A rule of thumb that estimates which path is promising", "A guaranteed list of every possible solution", "A database backup", "A type of computer memory"], correctAnswer: 0, points: 5 },
        { question: "What does a knowledge base store in an expert system?", options: ["Facts and domain rules", "Only user passwords", "Images without labels", "Processor instructions"], correctAnswer: 0, points: 5 },
        { question: "What does an inference engine do?", options: ["Applies rules to known facts to derive conclusions", "Compresses audio files", "Draws user-interface buttons", "Schedules operating-system updates"], correctAnswer: 0, points: 5 },
        { question: "What is speech recognition used for?", options: ["Converting spoken language into text or commands", "Turning source code into images", "Finding duplicate database rows", "Measuring screen brightness"], correctAnswer: 0, points: 5 },
        { question: "What does a chatbot primarily do?", options: ["Interact with users through conversation", "Repair computer hardware", "Encrypt every file on a device", "Control only database storage"], correctAnswer: 0, points: 5 },
        { question: "What is a common use of generative AI?", options: ["Creating new text, images, audio, or other content", "Only sorting existing numbers", "Replacing network cables", "Measuring processor temperature"], correctAnswer: 0, points: 5 },
        { question: "Which capability lets a robot identify objects in its surroundings?", options: ["Perception", "Normalization", "Compilation", "Indexing"], correctAnswer: 0, points: 5 },
        { question: "What is AI planning?", options: ["Choosing a sequence of actions to reach a goal", "Backing up a hard drive", "Formatting a spreadsheet", "Rendering a static webpage"], correctAnswer: 0, points: 5 },
        { question: "What does explainable AI aim to provide?", options: ["Understandable reasons for an AI system's outputs", "A guarantee that a model never makes errors", "Unlimited training data", "Faster network hardware"], correctAnswer: 0, points: 5 },
        { question: "What is algorithmic bias?", options: ["A systematic unfair outcome for certain groups", "A model that uses no input data", "A computer's physical tilt", "A method for compressing files"], correctAnswer: 0, points: 5 },
        { question: "Which AI application helps a self-driving car recognize pedestrians?", options: ["Computer vision", "Text formatting", "Database sharding", "Audio mixing"], correctAnswer: 0, points: 5 },
        { question: "What does a virtual assistant commonly use to understand spoken requests?", options: ["Speech recognition and language processing", "Image compression only", "Relational joins", "Manual memory allocation"], correctAnswer: 0, points: 5 },
        { question: "What is a rule-based AI system primarily built from?", options: ["Explicit if-then rules", "Randomly selected screen colors", "Unrelated data backups", "Only hardware sensors"], correctAnswer: 0, points: 5 },
        { question: "What does an AI agent do?", options: ["Perceives its environment and takes actions", "Stores only static documents", "Compiles every programming language", "Displays data without responding"], correctAnswer: 0, points: 5 },
        { question: "Why is human oversight important for high-impact AI decisions?", options: ["It helps identify errors, risks, and unfair outcomes", "It guarantees the system needs no testing", "It removes the need for privacy controls", "It makes every result automatically correct"], correctAnswer: 0, points: 5 },
    ],
    "4. Machine Learning Fundamentals": [
        { question: "Which learning approach discovers structure in data without labeled targets?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Rule-based parsing"], correctAnswer: 1, points: 5 },
        { question: "Which task assigns an input to one of several categories?", options: ["Regression", "Classification", "Dimensionality reduction", "Sorting"], correctAnswer: 1, points: 5 },
        { question: "What is a model's label in a supervised dataset?", options: ["The target value the model should predict", "A random row number", "The name of an input file", "A feature scaling method"], correctAnswer: 0, points: 5 },
        { question: "Why is a dataset commonly split into training and test sets?", options: ["To evaluate performance on unseen examples", "To make every feature categorical", "To remove the need for a model", "To guarantee perfect accuracy"], correctAnswer: 0, points: 5 },
        { question: "What is a common symptom of underfitting?", options: ["Poor performance on both training and test data", "Perfect training accuracy only", "Too many labels", "Identical predictions for every dataset by design"], correctAnswer: 0, points: 5 },
        { question: "Which metric is the fraction of predictions that are correct?", options: ["Accuracy", "Recall", "Latency", "Variance"], correctAnswer: 0, points: 5 },
        { question: "What does a neural network typically learn during training?", options: ["Weights that help map inputs to outputs", "The physical layout of the computer", "A fixed list of all future inputs", "Only the names of its features"], correctAnswer: 0, points: 5 },
        { question: "What is the purpose of a validation set?", options: ["Help tune model choices during development", "Replace all training examples", "Store the final user interface", "Guarantee no model errors"], correctAnswer: 0, points: 5 },
        { question: "Which algorithm is commonly used to group similar data points?", options: ["K-means", "Linear search", "Merge sort", "Breadth-first search"], correctAnswer: 0, points: 5 },
        { question: "In reinforcement learning, what does an agent receive as feedback?", options: ["Rewards or penalties", "Only fixed class labels", "Database indexes", "HTML elements"], correctAnswer: 0, points: 5 },
        { question: "What is a true positive in binary classification?", options: ["A positive case correctly predicted as positive", "A negative case incorrectly predicted as positive", "A positive case missed by the model", "A negative case correctly predicted as negative"], correctAnswer: 0, points: 5 },
        { question: "What does feature scaling do?", options: ["Puts numeric features on comparable scales", "Deletes the target variable", "Turns a model into a database", "Guarantees a larger training set"], correctAnswer: 0, points: 5 },
        { question: "What is an epoch in model training?", options: ["One pass through the training dataset", "One individual feature", "The model's final accuracy", "A type of label encoding"], correctAnswer: 0, points: 5 },
        { question: "Which problem can data leakage cause?", options: ["Unrealistically high evaluation results", "Guaranteed better real-world generalization", "Removal of all training data", "A model that cannot have inputs"], correctAnswer: 0, points: 5 },
        { question: "What does precision measure?", options: ["The fraction of predicted positives that are actually positive", "The fraction of actual positives that were found", "The number of features in a dataset", "The average training time"], correctAnswer: 0, points: 5 },
    ],
    "5. HTML Fundamentals": [
        { question: "Which declaration tells the browser to use modern HTML parsing rules?", options: ["<!DOCTYPE html>", "<html mode=\"modern\">", "<meta html=\"5\">", "<!HTML5>"], correctAnswer: 0, points: 5 },
        { question: "Which element contains metadata and links to stylesheets?", options: ["<head>", "<main>", "<section>", "<footer>"], correctAnswer: 0, points: 5 },
        { question: "Which element is best suited for a self-contained article or post?", options: ["<article>", "<span>", "<label>", "<br>"], correctAnswer: 0, points: 5 },
        { question: "Which attribute connects a label to an input by its id?", options: ["for", "name", "target", "value"], correctAnswer: 0, points: 5 },
        { question: "Which input type provides built-in email format validation?", options: ["type=\"mailbox\"", "type=\"email\"", "type=\"text-email\"", "type=\"validate\""], correctAnswer: 1, points: 5 },
        { question: "Which element creates a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<li>"], correctAnswer: 1, points: 5 },
        { question: "Which attribute makes a form control mandatory before submission?", options: ["required", "validate", "mustfill", "checked"], correctAnswer: 0, points: 5 },
        { question: "Which element is used to embed a video with browser controls?", options: ["<media>", "<movie>", "<video controls>", "<source controls>"], correctAnswer: 2, points: 5 },
        { question: "What does the defer attribute on a classic script element do?", options: ["Runs the script after HTML parsing, in document order", "Runs the script before parsing starts", "Disables the script", "Embeds the script as CSS"], correctAnswer: 0, points: 5 },
        { question: "Which element represents a table header cell?", options: ["<td>", "<th>", "<thead-cell>", "<header>"], correctAnswer: 1, points: 5 },
        { question: "What is the purpose of the viewport meta tag on mobile pages?", options: ["Control the layout viewport and scaling", "Load external fonts", "Set the page's language", "Create a navigation menu"], correctAnswer: 0, points: 5 },
        { question: "Which attribute opens a link in a new browsing context?", options: ["target=\"_blank\"", "new=\"tab\"", "open=\"new\"", "rel=\"external-tab\""], correctAnswer: 0, points: 5 },
        { question: "Which element provides a caption for a figure?", options: ["<figcaption>", "<caption>", "<legend>", "<summary>"], correctAnswer: 0, points: 5 },
        { question: "Which semantic element is intended for primary site navigation links?", options: ["<nav>", "<menuitem>", "<navigate>", "<links>"], correctAnswer: 0, points: 5 },
        { question: "Which attribute supplies a machine-readable value for a time element?", options: ["datetime", "timestamp", "value", "date"], correctAnswer: 0, points: 5 },
    ],
    "6. CSS Fundamentals": [
        { question: "Which selector has the highest specificity?", options: [".panel", "#panel", "section", "*"], correctAnswer: 1, points: 5 },
        { question: "Which property controls the space outside an element's border?", options: ["padding", "margin", "outline", "gap"], correctAnswer: 1, points: 5 },
        { question: "Which declaration makes an element a CSS grid container?", options: ["display: grid", "position: grid", "layout: grid", "grid: enabled"], correctAnswer: 0, points: 5 },
        { question: "What does box-sizing: border-box do to a declared width?", options: ["Includes content, padding, and border in the width", "Includes only the margin", "Ignores the content width", "Makes the element fixed-position"], correctAnswer: 0, points: 5 },
        { question: "Which pseudo-class applies styles while a pointer is over an element?", options: [":focus", ":hover", ":visited", ":checked"], correctAnswer: 1, points: 5 },
        { question: "Which unit is relative to the root element's font size?", options: ["em", "rem", "vh", "px"], correctAnswer: 1, points: 5 },
        { question: "Which property sets the stacking order of positioned elements?", options: ["layer", "z-index", "stack-order", "depth"], correctAnswer: 1, points: 5 },
        { question: "Which value hides an element and removes its layout space?", options: ["visibility: hidden", "opacity: 0", "display: none", "filter: hidden"], correctAnswer: 2, points: 5 },
        { question: "What does flex-wrap: wrap allow in a flex container?", options: ["Items to move onto additional lines", "Items to overlap", "The container to become a grid", "Text to wrap only inside buttons"], correctAnswer: 0, points: 5 },
        { question: "Which CSS function is commonly used to define a gradient background?", options: ["linear-gradient()", "color-mix-only()", "paint-gradient()", "background-gradient()"], correctAnswer: 0, points: 5 },
        { question: "Which property rounds an element's corners?", options: ["corner-radius", "border-radius", "rounding", "shape-radius"], correctAnswer: 1, points: 5 },
        { question: "Which position value places an element relative to the viewport?", options: ["static", "relative", "absolute", "fixed"], correctAnswer: 3, points: 5 },
        { question: "What does :root commonly select in an HTML document?", options: ["The document's html element", "The body element only", "Every root-level class", "The first child of body"], correctAnswer: 0, points: 5 },
        { question: "Which property changes the duration of a CSS transition?", options: ["transition-duration", "animation-count", "transform-time", "transition-delay-only"], correctAnswer: 0, points: 5 },
        { question: "Which media feature can detect a user's reduced-motion preference?", options: ["prefers-reduced-motion", "motion-level", "animation-setting", "reduce-transitions"], correctAnswer: 0, points: 5 },
    ],
    "7. Python Fundamentals": [
        { question: "Which Python collection stores unique values?", options: ["list", "set", "tuple", "str"], correctAnswer: 1, points: 5 },
        { question: "Which keyword starts a conditional branch?", options: ["when", "if", "case", "choose"], correctAnswer: 1, points: 5 },
        { question: "What does range(3) produce when iterated?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3, 2, 1"], correctAnswer: 0, points: 5 },
        { question: "Which syntax begins a single-line comment in Python?", options: ["//", "#", "/*", "--"], correctAnswer: 1, points: 5 },
        { question: "Which built-in function converts a numeric string such as \"12\" to an integer?", options: ["str()", "float()", "int()", "ord()"], correctAnswer: 2, points: 5 },
        { question: "What does dict.get(\"key\") return when the key is missing and no default is provided?", options: ["None", "KeyError", "False", "An empty dictionary"], correctAnswer: 0, points: 5 },
        { question: "Which keyword is used to create a class?", options: ["object", "struct", "class", "typeclass"], correctAnswer: 2, points: 5 },
        { question: "What does the in operator test for in a list?", options: ["Membership of a value", "Whether the list is sorted", "Whether the list is immutable", "The list's memory address"], correctAnswer: 0, points: 5 },
        { question: "Which syntax creates a list containing the squares of numbers from 0 through 3?", options: ["[x * x for x in range(4)]", "{x * x while x < 4}", "(x * x in range(4))", "list(x ** 2)"], correctAnswer: 0, points: 5 },
        { question: "What does the finally block do in a try/except structure?", options: ["Runs whether or not an exception occurred", "Runs only when there is no exception", "Handles only syntax errors", "Restarts the program"], correctAnswer: 0, points: 5 },
        { question: "Which keyword can be used to import the math module?", options: ["include math", "using math", "import math", "require(math)"], correctAnswer: 2, points: 5 },
        { question: "What does a function return if it reaches the end without a return statement?", options: ["0", "False", "None", "An empty string"], correctAnswer: 2, points: 5 },
        { question: "Which built-in function returns the largest item in an iterable?", options: ["top()", "max()", "largest()", "upper()"], correctAnswer: 1, points: 5 },
        { question: "Which file mode opens a file for appending text?", options: ["\"r\"", "\"w\"", "\"a\"", "\"x\""], correctAnswer: 2, points: 5 },
        { question: "What does self conventionally refer to in an instance method?", options: ["The current instance", "The parent module", "The class documentation", "The global namespace"], correctAnswer: 0, points: 5 },
    ],
    "8. C Fundamentals": [
        { question: "Which function is the conventional entry point of a hosted C program?", options: ["start()", "main()", "begin()", "program()"], correctAnswer: 1, points: 5 },
        { question: "Which symbol ends most C statements?", options: [":", ";", ".", ","], correctAnswer: 1, points: 5 },
        { question: "Which operator accesses the value stored at a pointer address?", options: ["&", "*", "->", "%"], correctAnswer: 1, points: 5 },
        { question: "Which loop checks its condition before each iteration?", options: ["while", "do-while only", "switch", "case"], correctAnswer: 0, points: 5 },
        { question: "Which function reads formatted input from standard input?", options: ["printf()", "scanf()", "puts()", "strlen()"], correctAnswer: 1, points: 5 },
        { question: "Which standard library function compares two null-terminated strings?", options: ["strcpy()", "strcmp()", "strcat()", "strlen()"], correctAnswer: 1, points: 5 },
        { question: "What is the value of sizeof(char) in C?", options: ["Always 1 byte", "Always 2 bytes", "Always 4 bytes", "It is undefined"], correctAnswer: 0, points: 5 },
        { question: "Which keyword makes a local variable retain its value between function calls?", options: ["extern", "static", "volatile", "register"], correctAnswer: 1, points: 5 },
        { question: "Which operator accesses a structure member through a structure pointer?", options: [".", "->", "::", "&"], correctAnswer: 1, points: 5 },
        { question: "Which function releases memory allocated by malloc?", options: ["delete()", "remove()", "free()", "clear()"], correctAnswer: 2, points: 5 },
        { question: "What does the continue statement do inside a loop?", options: ["Skips to the next iteration", "Exits the program", "Exits the loop permanently", "Repeats the previous statement only"], correctAnswer: 0, points: 5 },
        { question: "Which preprocessor directive includes a header file?", options: ["#include", "#importfile", "using", "package"], correctAnswer: 0, points: 5 },
        { question: "Which format specifier is used with printf for a null-terminated string?", options: ["%d", "%c", "%s", "%p"], correctAnswer: 2, points: 5 },
        { question: "What does NULL commonly represent for a pointer?", options: ["A pointer that refers to no valid object", "The first element of every array", "An integer overflow", "A pointer to the stack"], correctAnswer: 0, points: 5 },
        { question: "Which statement selects one branch from multiple constant cases?", options: ["switch", "typedef", "sizeof", "extern"], correctAnswer: 0, points: 5 },
    ],
};

Object.entries(examSets).forEach(([subject, exam]) => {
    exam.duration = 20;
    exam.questions.push(...additionalExamQuestions[subject]);
});

const authScreen = document.getElementById("authScreen");
const appShell = document.getElementById("appShell");
const adminDashboard = document.getElementById("adminDashboard");
const adminSlideTabs = document.querySelectorAll(".admin-slide-tab");
const adminSlides = document.querySelectorAll(".admin-slide");
const landingHeading = document.getElementById("landingHeading");
const landingCopy = document.getElementById("landingCopy");
const landingCardTitle = document.getElementById("landingCardTitle");
const landingCardCopy = document.getElementById("landingCardCopy");
const landingScoreTitle = document.getElementById("landingScoreTitle");
const landingScoreCopy = document.getElementById("landingScoreCopy");
const landingFeatureOne = document.getElementById("landingFeatureOne");
const landingFeatureTwo = document.getElementById("landingFeatureTwo");
const landingFeatureThree = document.getElementById("landingFeatureThree");
const studentLoginTab = document.getElementById("studentLoginTab");
const adminLoginTab = document.getElementById("adminLoginTab");
const loginForm = document.getElementById("loginForm");
const adminLoginForm = document.getElementById("adminLoginForm");
const studentAuthFeedback = document.getElementById("studentAuthFeedback");
const adminAuthFeedback = document.getElementById("adminAuthFeedback");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
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
const overviewDurationEl = document.getElementById("overviewDuration");
const overviewDifficultyEl = document.getElementById("overviewDifficulty");
const examCategoryEl = document.getElementById("examCategory");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("questionNumber");
const questionPointsEl = document.getElementById("questionPoints");
const questionTextEl = document.getElementById("questionText");
const codingProblemDetails = document.getElementById("codingProblemDetails");
const optionsContainer = document.getElementById("optionsContainer");
const codeAnswerPanel = document.getElementById("codeAnswerPanel");
const codeLanguageSelect = document.getElementById("codeLanguageSelect");
const codeAnswerInput = document.getElementById("codeAnswerInput");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const totalQuestionsEl = document.getElementById("totalQuestions");
const answeredCountEl = document.getElementById("answeredCount");
const remainingCountEl = document.getElementById("remainingCount");
const reviewCountEl = document.getElementById("reviewCount");
const reviewToggleBtn = document.getElementById("reviewToggleBtn");
const questionNavigator = document.getElementById("questionNavigator");
const singleQuestionView = document.getElementById("singleQuestionView");
const mcqExamView = document.getElementById("mcqExamView");
const mcqSubmitRow = document.getElementById("mcqSubmitRow");
const submitMcqsBtn = document.getElementById("submitMcqsBtn");
const examActionRow = document.querySelector(".exam-panel .action-row");
const resultModal = document.getElementById("resultModal");
const resultMessage = document.getElementById("resultMessage");
const finalScoreEl = document.getElementById("finalScore");
const gradeBox = document.getElementById("gradeBox");
const correctAnswersCountEl = document.getElementById("correctAnswersCount");
const incorrectAnswersCountEl = document.getElementById("incorrectAnswersCount");
const unansweredAnswersCountEl = document.getElementById("unansweredAnswersCount");
const resultFeedbackEl = document.getElementById("resultFeedback");
const resultHeading = document.getElementById("resultHeading");
const resultScoreLabel = document.getElementById("resultScoreLabel");
const pendingReviewNote = document.getElementById("pendingReviewNote");
const answerReview = document.getElementById("answerReview");
const answerReviewList = document.getElementById("answerReviewList");
const closeResultBtn = document.getElementById("closeResultBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const startExamBtn = document.getElementById("startExamBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const studentLogoutBtn = document.getElementById("studentLogoutBtn");
const themeToggleBtns = document.querySelectorAll(".theme-toggle");
const leaderboardList = document.getElementById("leaderboardList");
const leaderboardStudentCount = document.getElementById("leaderboardStudentCount");
const dashboardGreeting = document.getElementById("dashboardGreeting");
const dashboardDate = document.getElementById("dashboardDate");
const testsTakenStat = document.getElementById("testsTakenStat");
const averageScoreStat = document.getElementById("averageScoreStat");
const latestScoreStat = document.getElementById("latestScoreStat");
const availableExamsStat = document.getElementById("availableExamsStat");
const studentResultsList = document.getElementById("studentResultsList");
const studentResultScore = document.getElementById("studentResultScore");
const examUploadForm = document.getElementById("examUploadForm");
const examDateInput = document.getElementById("examDateInput");
const examTimeInput = document.getElementById("examTimeInput");
const scheduledDatePreview = document.getElementById("scheduledDatePreview");
const calendarMonthSelect = document.getElementById("calendarMonthSelect");
const calendarYearSelect = document.getElementById("calendarYearSelect");
const calendarDays = document.getElementById("calendarDays");
const calendarPreviousMonth = document.getElementById("calendarPreviousMonth");
const calendarNextMonth = document.getElementById("calendarNextMonth");
const timePresetButtons = document.querySelectorAll(".time-preset");
const examDurationInput = document.getElementById("examDurationInput");
const durationPresetButtons = document.querySelectorAll(".duration-preset");
const questionDocumentInput = document.getElementById("questionDocumentInput");
const documentImportStatus = document.getElementById("documentImportStatus");
const examUploadList = document.getElementById("examUploadList");
const upcomingExamList = document.getElementById("upcomingExamList");
const adminResultsBody = document.getElementById("adminResultsBody");
const adminResultStudentCount = document.getElementById("adminResultStudentCount");
const adminActiveExams = document.getElementById("adminActiveExams");
const examSearchInput = document.getElementById("examSearchInput");
const examStatusFilter = document.getElementById("examStatusFilter");
const managedExamTotal = document.getElementById("managedExamTotal");
const managedExamUpcoming = document.getElementById("managedExamUpcoming");
const managedExamAvailable = document.getElementById("managedExamAvailable");
const managedExamClosed = document.getElementById("managedExamClosed");
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mainNavigation = document.getElementById("mainNavigation");
const navBackdrop = document.getElementById("navBackdrop");
const adminProfileForm = document.getElementById("adminProfileForm");
const adminPasswordForm = document.getElementById("adminPasswordForm");
const adminDisplayName = document.getElementById("adminDisplayName");
const adminSavedUsername = document.getElementById("adminSavedUsername");
const adminSavedPassword = document.getElementById("adminSavedPassword");
const adminUserNameLabel = document.getElementById("adminUserNameLabel");
const adminAccountList = document.getElementById("adminAccountList");
const saveAdminBtn = document.getElementById("saveAdminBtn");
const studentEntryPassword = document.getElementById("studentEntryPassword");
const studentForm = document.getElementById("studentForm");
const adminStudentPasswordForm = document.getElementById("adminStudentPasswordForm");
const adminStudentScoreForm = document.getElementById("adminStudentScoreForm");
const adminPasswordStudentSelect = document.getElementById("adminPasswordStudentSelect");
const adminStudentNewPassword = document.getElementById("adminStudentNewPassword");
const adminStudentConfirmPassword = document.getElementById("adminStudentConfirmPassword");
const adminStudentScoreInput = document.getElementById("adminStudentScoreInput");
const adminStudentScoreSubmitButton = adminStudentScoreForm.querySelector('button[type="submit"]');
const adminTotalStudents = document.getElementById("adminTotalStudents");
const adminPassedCount = document.getElementById("adminPassedCount");
const adminPendingCount = document.getElementById("adminPendingCount");
const studentTableBody = document.getElementById("studentTableBody");
const studentListCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const studentResultFilter = document.getElementById("studentResultFilter");
const resetStudentFormBtn = document.getElementById("resetStudentFormBtn");
const oldAdminPassword = document.getElementById("oldAdminPassword");
const newAdminPassword = document.getElementById("newAdminPassword");
const confirmAdminPassword = document.getElementById("confirmAdminPassword");
let calendarViewDate = new Date();
let isCustomTimeSelected = false;

loginForm.addEventListener("submit", handleLogin);
adminLoginForm.addEventListener("submit", handleAdminLogin);
codeLanguageSelect.addEventListener("change", () => {
    const answer = selectedAnswers[currentQuestionIndex] || { codeByLanguage: {} };
    const codeByLanguage = { ...answer.codeByLanguage };
    if (answer.language) {
        codeByLanguage[answer.language] = codeAnswerInput.value;
    }
    selectedAnswers[currentQuestionIndex] = {
        language: codeLanguageSelect.value,
        codeByLanguage,
    };
    renderQuestion();
    updateNavigator();
    saveExamDraft();
});
codeAnswerInput.addEventListener("input", () => {
    const answer = selectedAnswers[currentQuestionIndex] || { codeByLanguage: {} };
    selectedAnswers[currentQuestionIndex] = {
        language: codeLanguageSelect.value,
        codeByLanguage: {
            ...answer.codeByLanguage,
            [codeLanguageSelect.value]: codeAnswerInput.value,
        },
    };
    updateNavigator();
    saveExamDraft();
});
loginForm.addEventListener("input", () => clearAuthFeedback(studentAuthFeedback));
adminLoginForm.addEventListener("input", () => clearAuthFeedback(adminAuthFeedback));
forgotPasswordBtn.addEventListener("click", () => {
    showAuthFeedback(
        studentAuthFeedback,
        "For this demo, contact your administrator to reset your password in Student Management. Secure self-service recovery requires a verified backend email or phone flow.",
        "info"
    );
});
studentForm.addEventListener("submit", handleStudentFormSubmit);
adminStudentPasswordForm.addEventListener("submit", handleAdminStudentPasswordChange);
adminStudentScoreForm.addEventListener("submit", handleAdminStudentScoreUpdate);
adminPasswordStudentSelect.addEventListener("change", updateAdminStudentScoreField);
examUploadForm.addEventListener("submit", handleExamCreation);
document.addEventListener("input", animateExamFormTyping);
calendarPreviousMonth.addEventListener("click", () => changeCalendarMonth(-1));
calendarNextMonth.addEventListener("click", () => changeCalendarMonth(1));
calendarMonthSelect.addEventListener("change", updateCalendarFromSelects);
calendarYearSelect.addEventListener("change", updateCalendarFromSelects);
calendarDays.addEventListener("click", handleCalendarDaySelection);
examTimeInput.addEventListener("input", updateScheduledDatePreview);
examTimeInput.addEventListener("input", () => {
    isCustomTimeSelected = Boolean(examTimeInput.value) &&
        ![...timePresetButtons].some((preset) =>
            preset.dataset.time !== "custom" && preset.dataset.time === examTimeInput.value
        );
    updateTimePresetSelection();
});
timePresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.time === "custom") {
            isCustomTimeSelected = true;
            const matchesPreset = [...timePresetButtons].some((preset) =>
                preset.dataset.time !== "custom" && preset.dataset.time === examTimeInput.value
            );
            if (matchesPreset) examTimeInput.value = "";
            examTimeInput.focus();
        } else {
            isCustomTimeSelected = false;
            examTimeInput.value = button.dataset.time;
        }
        updateTimePresetSelection();
        updateScheduledDatePreview();
    });
});
initializeInteractiveCalendar();
durationPresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.duration === "custom") {
            const matchesPreset = [...durationPresetButtons].some((preset) =>
                preset.dataset.duration !== "custom" &&
                Number(preset.dataset.duration) === Number(examDurationInput.value)
            );
            if (matchesPreset) {
                examDurationInput.value = "";
            }
            examDurationInput.focus();
        } else {
            examDurationInput.value = button.dataset.duration;
        }
        updateDurationPresetSelection();
    });
});
examDurationInput.addEventListener("input", updateDurationPresetSelection);
if (questionDocumentInput) {
    questionDocumentInput.addEventListener("change", handleQuestionDocumentImport);
}
if (examSearchInput) {
    examSearchInput.addEventListener("input", renderScheduledExams);
}
if (examStatusFilter) {
    examStatusFilter.addEventListener("change", renderScheduledExams);
}
if (resetStudentFormBtn) {
    resetStudentFormBtn.addEventListener("click", resetStudentForm);
}
if (studentResultFilter) {
    studentResultFilter.addEventListener("change", renderStudentTable);
}
studentLoginTab.addEventListener("click", () => setAuthMode("student"));
adminLoginTab.addEventListener("click", () => setAuthMode("admin"));
adminDashboard.addEventListener("pointermove", (event) => {
    const dashboardCard = adminDashboard.querySelector(".admin-card");
    const isInteractingWithForm = event.target instanceof Element &&
        Boolean(event.target.closest(".admin-form"));
    dashboardCard.classList.toggle("admin-form-interacting", isInteractingWithForm);
    if (isInteractingWithForm) {
        dashboardCard.style.removeProperty("--dashboard-tilt-x");
        dashboardCard.style.removeProperty("--dashboard-tilt-y");
        return;
    }
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const bounds = dashboardCard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    dashboardCard.style.setProperty("--dashboard-tilt-x", `${(0.5 - y) * 1.4}deg`);
    dashboardCard.style.setProperty("--dashboard-tilt-y", `${(x - 0.5) * 2}deg`);
});
adminDashboard.addEventListener("pointerdown", (event) => {
    if (!(event.target instanceof Element) || !event.target.closest(".admin-form")) {
        return;
    }

    const dashboardCard = adminDashboard.querySelector(".admin-card");
    dashboardCard.classList.add("admin-form-interacting");
    dashboardCard.style.removeProperty("--dashboard-tilt-x");
    dashboardCard.style.removeProperty("--dashboard-tilt-y");
});
adminDashboard.addEventListener("pointerleave", () => {
    const dashboardCard = adminDashboard.querySelector(".admin-card");
    dashboardCard.classList.remove("admin-form-interacting");
    dashboardCard.style.removeProperty("--dashboard-tilt-x");
    dashboardCard.style.removeProperty("--dashboard-tilt-y");
});
authScreen.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const bounds = authScreen.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    authScreen.style.setProperty("--scene-tilt-x", `${(0.5 - y) * 2.4}deg`);
    authScreen.style.setProperty("--scene-tilt-y", `${(x - 0.5) * 3.2}deg`);
    authScreen.style.setProperty("--scene-pointer-x", `${x * 100}%`);
    authScreen.style.setProperty("--scene-pointer-y", `${y * 100}%`);
});
authScreen.addEventListener("pointerleave", () => {
    authScreen.style.removeProperty("--scene-tilt-x");
    authScreen.style.removeProperty("--scene-tilt-y");
    authScreen.style.removeProperty("--scene-pointer-x");
    authScreen.style.removeProperty("--scene-pointer-y");
});
const depthSurfaceSelector = [
    ".student-depth-card",
    ".exam-panel",
    ".question-card",
    ".mcq-question",
    ".summary-panel > .panel",
    ".result-card",
].join(", ");

document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    if (!(event.target instanceof Element)) {
        return;
    }

    const card = event.target.closest(depthSurfaceSelector);
    if (!card) {
        return;
    }

    const bounds = card.getBoundingClientRect();
    if (!bounds.width || !bounds.height) {
        return;
    }
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.classList.add("pointer-depth-active");
    card.style.setProperty("--tilt-x", `${(x - 0.5) * 5}deg`);
    card.style.setProperty("--tilt-y", `${(0.5 - y) * 5}deg`);
    card.style.setProperty("--spotlight-x", `${x * 100}%`);
    card.style.setProperty("--spotlight-y", `${y * 100}%`);
});
document.addEventListener("pointerout", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const card = event.target.closest(depthSurfaceSelector);
    if (!card || (event.relatedTarget instanceof Node && card.contains(event.relatedTarget))) {
        return;
    }

    card.classList.remove("pointer-depth-active");
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
    card.style.removeProperty("--spotlight-x");
    card.style.removeProperty("--spotlight-y");
});
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const target = document.getElementById(link.dataset.target);
        if (!target) {
            return;
        }

        document.querySelectorAll(".nav-link").forEach((navLink) => {
            navLink.classList.toggle("active", navLink === link);
            if (navLink === link) {
                navLink.setAttribute("aria-current", "page");
            } else {
                navLink.removeAttribute("aria-current");
            }
        });
        closeMobileNavigation();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
mobileNavToggle.addEventListener("click", () => {
    const shouldOpen = mobileNavToggle.getAttribute("aria-expanded") !== "true";
    setMobileNavigationOpen(shouldOpen);
});
navBackdrop.addEventListener("click", () => setMobileNavigationOpen(false));
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileNavigation();
        if (!resultModal.classList.contains("hidden")) {
            resultModal.classList.add("hidden");
        }
    }
});
document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const root = document.documentElement;
    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
    root.dataset.pointerActive = "true";
});
document.addEventListener("pointerleave", () => {
    delete document.documentElement.dataset.pointerActive;
});
adminSlideTabs.forEach((tab) => {
    tab.addEventListener("click", () => showAdminSlide(tab));
});
adminLogoutBtn.addEventListener("click", logoutAdmin);
studentLogoutBtn.addEventListener("click", logoutStudent);
themeToggleBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });
});
adminProfileForm.addEventListener("submit", handleAdminProfileSave);
adminPasswordForm.addEventListener("submit", handleAdminPasswordChange);
document.addEventListener("click", (event) => {
    const toggleButton = event.target instanceof Element
        ? event.target.closest(".toggle-password-btn")
        : null;
    if (!toggleButton) {
        return;
    }

    const input = document.getElementById(toggleButton.dataset.target);
    if (!input) {
        return;
    }

    const showPassword = input.type === "password";
    input.type = showPassword ? "text" : "password";
    toggleButton.textContent = showPassword ? "Hide" : "Show";
    toggleButton.setAttribute("aria-label", `${showPassword ? "Hide" : "Show"} password`);
    toggleButton.setAttribute("aria-pressed", String(showPassword));
});

function showAuthFeedback(element, message, type = "error") {
    element.textContent = message;
    element.classList.remove("hidden", "auth-feedback-error", "auth-feedback-info");
    element.classList.add(type === "info" ? "auth-feedback-info" : "auth-feedback-error");
}

function clearAuthFeedback(element) {
    element.textContent = "";
    element.classList.add("hidden");
    element.classList.remove("auth-feedback-error", "auth-feedback-info");
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("examTheme", theme);
    themeToggleBtns.forEach((button) => {
        button.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
        button.querySelector(".theme-toggle-text").textContent = isDark ? "Light" : "Dark";
        button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    });
}

function setMobileNavigationOpen(isOpen) {
    mainNavigation.classList.toggle("is-open", isOpen);
    navBackdrop.classList.toggle("hidden", !isOpen);
    mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
    mobileNavToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("navigation-open", isOpen);
}

function closeMobileNavigation() {
    setMobileNavigationOpen(false);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem("examTheme");
    const selectedTheme = savedTheme === "dark" ? "dark" : "light";
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
    const credentialsVersion = "2";

    if (saved && Array.isArray(saved) && saved.length) {
        if (localStorage.getItem("examAdminCredentialsVersion") !== credentialsVersion) {
            saved[0] = {
                ...saved[0],
                ...getDefaultAdminCredentials(),
            };
            saveAdminAccounts(saved);
            localStorage.setItem("examAdminCredentialsVersion", credentialsVersion);
        }
        return saved;
    }

    if (legacySaved && legacySaved.username) {
        const migrated = [{
            ...legacySaved,
            ...getDefaultAdminCredentials(),
        }];
        saveAdminAccounts(migrated);
        localStorage.setItem("examAdminCredentialsVersion", credentialsVersion);
        localStorage.removeItem("examAdminCredentials");
        return migrated;
    }

    localStorage.setItem("examAdminAccounts", JSON.stringify(defaults));
    localStorage.setItem("examAdminCredentialsVersion", credentialsVersion);
    return defaults;
}

function getAdminCredentials() {
    const accounts = getAdminAccounts();
    return accounts[0] || getDefaultAdminCredentials();
}

function getCurrentLoggedInAdmin() {
    const rawSession = sessionStorage.getItem("examAdminSession");
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
                sessionStorage.setItem("examAdminSession", JSON.stringify({
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

function getScheduledExams() {
    const exams = JSON.parse(localStorage.getItem("examSchedules") || "[]");
    return Array.isArray(exams) ? exams : [];
}

function saveScheduledExams(exams) {
    localStorage.setItem("examSchedules", JSON.stringify(exams));
}

const supportedCodeLanguages = ["Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript"];
const randomizedCodingCount = 6;
const randomizedMcqCount = 4;

function updateDurationPresetSelection() {
    const selectedDuration = examDurationInput.value;
    durationPresetButtons.forEach((button) => {
        const isCustom = button.dataset.duration === "custom";
        const hasPresetMatch = [...durationPresetButtons].some((preset) =>
            preset.dataset.duration !== "custom" && preset.dataset.duration === selectedDuration
        );
        const isSelected = isCustom
            ? !hasPresetMatch
            : button.dataset.duration === selectedDuration;
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

function updateTimePresetSelection() {
    const selectedTime = examTimeInput.value;
    const hasPresetMatch = [...timePresetButtons].some((preset) =>
        preset.dataset.time !== "custom" && preset.dataset.time === selectedTime
    );
    timePresetButtons.forEach((button) => {
        const isCustom = button.dataset.time === "custom";
        button.setAttribute(
            "aria-pressed",
            String(isCustom ? isCustomTimeSelected && !hasPresetMatch : button.dataset.time === selectedTime),
        );
    });
}

function initializeInteractiveCalendar() {
    const currentYear = new Date().getFullYear();
    calendarMonthSelect.replaceChildren();
    for (let month = 0; month < 12; month += 1) {
        const option = document.createElement("option");
        option.value = String(month);
        option.textContent = new Intl.DateTimeFormat(undefined, { month: "long" })
            .format(new Date(2020, month, 1));
        calendarMonthSelect.appendChild(option);
    }
    calendarYearSelect.replaceChildren();
    for (let year = currentYear - 1; year <= currentYear + 15; year += 1) {
        const option = document.createElement("option");
        option.value = String(year);
        option.textContent = String(year);
        calendarYearSelect.appendChild(option);
    }
    renderInteractiveCalendar(false);
}

function renderInteractiveCalendar(animate = true) {
    const year = calendarViewDate.getFullYear();
    const month = calendarViewDate.getMonth();
    calendarMonthSelect.value = String(month);
    calendarYearSelect.value = String(year);
    const selectedValue = examDateInput.value;
    const today = new Date();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    calendarDays.replaceChildren();

    for (let blank = 0; blank < firstWeekday; blank += 1) {
        const spacer = document.createElement("span");
        spacer.className = "calendar-day-spacer";
        spacer.setAttribute("aria-hidden", "true");
        calendarDays.appendChild(spacer);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        const dateValue = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dateButton = document.createElement("button");
        dateButton.type = "button";
        dateButton.className = "calendar-day";
        dateButton.dataset.date = dateValue;
        dateButton.textContent = String(day);
        dateButton.setAttribute("aria-label", new Intl.DateTimeFormat(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(new Date(year, month, day)));
        dateButton.setAttribute("aria-pressed", String(dateValue === selectedValue));
        if (dateValue === selectedValue) dateButton.classList.add("is-selected");
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dateButton.classList.add("is-today");
        }
        calendarDays.appendChild(dateButton);
    }

    calendarDays.classList.remove("calendar-page-turn");
    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        requestAnimationFrame(() => calendarDays.classList.add("calendar-page-turn"));
    }
}

function changeCalendarMonth(offset) {
    calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + offset, 1);
    renderInteractiveCalendar();
}

function updateCalendarFromSelects() {
    calendarViewDate = new Date(
        Number(calendarYearSelect.value),
        Number(calendarMonthSelect.value),
        1,
    );
    renderInteractiveCalendar();
}

function handleCalendarDaySelection(event) {
    if (!(event.target instanceof Element)) return;
    const dayButton = event.target.closest(".calendar-day");
    if (!dayButton) return;
    examDateInput.value = dayButton.dataset.date;
    renderInteractiveCalendar();
    updateScheduledDatePreview();
}

function updateScheduledDatePreview() {
    if (!examDateInput.value) {
        scheduledDatePreview.textContent = "Choose a date and start time";
        return;
    }
    const [year, month, day] = examDateInput.value.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const formattedDate = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(selectedDate);
    const time = examTimeInput.value
        ? new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" })
            .format(new Date(`${examDateInput.value}T${examTimeInput.value}`))
        : "";
    scheduledDatePreview.textContent = time ? `${formattedDate} · ${time}` : `${formattedDate} · Select a start time`;
}

function animateExamFormTyping(event) {
    const target = event.target;
    const isTextEntry = target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLInputElement &&
            ["text", "search", "email", "password", "number", "tel", "url"].includes(target.type));
    if (!isTextEntry ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }
    target.classList.remove("is-typing");
    void target.offsetWidth;
    target.classList.add("is-typing");
}

function isCodingQuestion(question) {
    return question?.type === "coding";
}

function getQuestionType(question) {
    return isCodingQuestion(question) ? "coding" : "mcq";
}

function getQuestionSetPreview(questions) {
    const codingQuestions = questions.filter(isCodingQuestion);
    const mcqQuestions = questions.filter((question) => !isCodingQuestion(question));
    return [
        ...codingQuestions.slice(0, randomizedCodingCount),
        ...mcqQuestions.slice(0, randomizedMcqCount),
    ];
}

function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function selectRandomQuestionSet(questions) {
    const pickRandom = (pool, count) => shuffleQuestions(pool).slice(0, count);
    const selected = [
        ...pickRandom(questions.filter(isCodingQuestion), randomizedCodingCount),
        ...pickRandom(questions.filter((question) => !isCodingQuestion(question)), randomizedMcqCount),
    ];
    return shuffleQuestions(selected);
}

function loadScheduledExams() {
    const schedules = getScheduledExams();
    schedules.forEach((exam) => {
        if (exam?.key && Array.isArray(exam.questions)) {
            examSets[exam.key] = {
                duration: Number(exam.duration),
                difficulty: "Scheduled",
                questions: exam.questions,
                scheduledAt: exam.scheduledAt,
                scheduleId: exam.id,
                randomized: exam.randomized === true,
            };
            subjectIcons[exam.key] = "✦";
        }
    });
}

let pdfJsImportPromise;
let mammothImportPromise;

function loadImportLibrary(globalName, url, cachedPromise) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    if (cachedPromise) return cachedPromise;

    const loading = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => {
            if (window[globalName]) {
                resolve(window[globalName]);
            } else {
                reject(new Error(`The document reader loaded without ${globalName}.`));
            }
        };
        script.onerror = () => reject(new Error("Could not load the document reader. Check your internet connection and try again."));
        document.head.appendChild(script);
    });
    if (globalName === "pdfjsLib") pdfJsImportPromise = loading;
    if (globalName === "mammoth") mammothImportPromise = loading;
    return loading;
}

function setDocumentImportStatus(message, isError = false) {
    if (!documentImportStatus) return;
    documentImportStatus.textContent = message;
    documentImportStatus.classList.toggle("error", isError);
    documentImportStatus.classList.toggle("success", !isError && Boolean(message));
}

async function extractQuestionDocumentText(file) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (extension === "docx") {
        const mammoth = await loadImportLibrary(
            "mammoth",
            "https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js",
            mammothImportPromise,
        );
        const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
        return result.value;
    }
    if (extension === "pdf") {
        const pdfjs = await loadImportLibrary(
            "pdfjsLib",
            "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js",
            pdfJsImportPromise,
        );
        pdfjs.GlobalWorkerOptions.workerSrc =
            "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
        const documentData = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
        const pages = [];
        for (let pageNumber = 1; pageNumber <= documentData.numPages; pageNumber += 1) {
            const page = await documentData.getPage(pageNumber);
            const content = await page.getTextContent();
            const linesByPosition = new Map();
            content.items.forEach((item) => {
                if (!item.str.trim()) return;
                const position = Math.round(item.transform?.[5] || 0);
                if (!linesByPosition.has(position)) linesByPosition.set(position, []);
                linesByPosition.get(position).push({
                    x: item.transform?.[4] || 0,
                    text: item.str,
                });
            });
            const pageLines = [...linesByPosition.entries()]
                .sort(([firstY], [secondY]) => secondY - firstY)
                .map(([, lineItems]) => lineItems
                    .sort((first, second) => first.x - second.x)
                    .map((item) => item.text)
                    .join(" "));
            pages.push(pageLines.join("\n"));
        }
        return pages.join("\n");
    }
    throw new Error("Choose a .json, .pdf, or .docx file.");
}

function parseStructuredQuestionDocument(documentText) {
    const lines = documentText.replace(/\r\n?/g, "\n").split("\n");
    const questionStarts = [];
    lines.forEach((line, index) => {
        const match = line.trim().match(/^Question\s+\d+\s*(?:\[(coding|mcq)\])?\s*:?\s*$/i);
        if (match) questionStarts.push({ index, type: match[1]?.toLowerCase() });
    });
    if (!questionStarts.length) {
        throw new Error("No question sections found. Use headings such as “Question 1 [coding]” or “Question 2 [mcq]”.");
    }

    const questions = [];
    questionStarts.forEach((start, questionIndex) => {
        const nextStart = questionStarts[questionIndex + 1]?.index ?? lines.length;
        const fields = new Map();
        let currentField = "";
        for (const line of lines.slice(start.index + 1, nextStart)) {
            const fieldMatch = line.match(/^\s*(Question|Input Format|Output Format|Constraints|Languages|Sample Input|Sample Output|Explanation|Points|A|B|C|D|Correct Answer)\s*:\s*(.*)$/i);
            if (fieldMatch) {
                currentField = fieldMatch[1].toLowerCase();
                fields.set(currentField, fieldMatch[2].trim());
            } else if (currentField) {
                const currentValue = fields.get(currentField);
                fields.set(currentField, `${currentValue}${currentValue ? "\n" : ""}${line.trimEnd()}`);
            }
        }

        const question = (fields.get("question") || "").trim();
        if (!question) {
            throw new Error(`Question ${questionIndex + 1} is missing its “Question:” text.`);
        }
        const type = start.type || (fields.has("a") || fields.has("correct answer") ? "mcq" : "coding");
        const points = Number(fields.get("points") || (type === "mcq" ? 2 : 10));
        if (!Number.isFinite(points) || points <= 0) {
            throw new Error(`Question ${questionIndex + 1} needs positive points.`);
        }

        if (type === "mcq") {
            const options = ["a", "b", "c", "d"].map((label) => (fields.get(label) || "").trim());
            const answer = (fields.get("correct answer") || "").trim().toUpperCase();
            const correctAnswer = /^[A-D]$/.test(answer) ? answer.charCodeAt(0) - 65 : Number(answer);
            if (options.some((option) => !option) || !Number.isInteger(correctAnswer) ||
                correctAnswer < 0 || correctAnswer > 3) {
                throw new Error(`MCQ ${questionIndex + 1} needs options A–D and a Correct Answer from A to D.`);
            }
            questions.push({ type, question, options, correctAnswer, points });
            return;
        }

        const input = fields.get("sample input");
        const output = fields.get("sample output");
        const explanation = (fields.get("explanation") || "").trim();
        if (!fields.get("input format") || !fields.get("output format") || input === undefined ||
            output === undefined || !explanation) {
            throw new Error(`Coding question ${questionIndex + 1} needs Input Format, Output Format, Sample Input, Sample Output, and Explanation.`);
        }
        const requestedLanguages = (fields.get("languages") || supportedCodeLanguages.join(","))
            .split(",").map((language) => language.trim()).filter(Boolean);
        const languages = [...new Set(requestedLanguages)];
        if (!languages.length || languages.some((language) => !supportedCodeLanguages.includes(language))) {
            throw new Error(`Coding question ${questionIndex + 1} has an unsupported language. Use: ${supportedCodeLanguages.join(", ")}.`);
        }
        questions.push({
            type: "coding",
            question,
            inputFormat: fields.get("input format").trim(),
            outputFormat: fields.get("output format").trim(),
            constraints: (fields.get("constraints") || "").trim(),
            testCases: [{ input, output, explanation }],
            languages,
            points,
        });
    });
    return questions;
}

async function handleQuestionDocumentImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const extension = file.name.split(".").pop().toLowerCase();
    const questionBankInput = document.getElementById("examQuestionsInput");
    const action = extension === "json" ? "Reading" : "Loading the document reader and reading";
    setDocumentImportStatus(`${action} ${file.name}…`);
    try {
        if (extension === "json") {
            const parsed = JSON.parse(await file.text());
            const questions = Array.isArray(parsed) ? parsed : parsed?.questions;
            if (!Array.isArray(questions)) {
                throw new Error("The JSON file must contain a question array or an object with a questions array.");
            }
            questionBankInput.value = JSON.stringify(questions, null, 2);
            setDocumentImportStatus(`Imported ${questions.length} questions from ${file.name}. Review the JSON before scheduling.`);
            questionBankInput.focus();
            return;
        }

        const extractedText = await extractQuestionDocumentText(file);
        const importedQuestions = parseStructuredQuestionDocument(extractedText);
        questionBankInput.value = JSON.stringify(importedQuestions, null, 2);
        setDocumentImportStatus(
            `Extracted ${importedQuestions.length} editable questions from ${file.name}. Review the JSON before scheduling.`,
        );
        questionBankInput.focus();
    } catch (error) {
        setDocumentImportStatus(error instanceof Error ? error.message : "Could not import this document.", true);
    } finally {
        event.target.value = "";
    }
}

function handleExamCreation(event) {
    event.preventDefault();
    const title = document.getElementById("examTitleInput").value.trim();
    const category = document.getElementById("examTypeInput").value.trim();
    const scheduledAt = new Date(`${examDateInput.value}T${examTimeInput.value}`);
    const duration = Number(document.getElementById("examDurationInput").value);
    let questions;

    try {
        questions = JSON.parse(document.getElementById("examQuestionsInput").value);
    } catch {
        alert("Questions must be valid JSON. Check the example and try again.");
        return;
    }

    if (!title || !category || !examDateInput.value || !examTimeInput.value ||
        Number.isNaN(scheduledAt.getTime())) {
        alert("Enter an examination title, category, scheduled date, and valid start time.");
        return;
    }
    if (scheduledAt.getTime() <= Date.now()) {
        alert("The examination start time must be in the future.");
        return;
    }
    if (!Number.isInteger(duration) || duration < 1 || duration > 300) {
        alert("Examination duration must be between 1 and 300 minutes.");
        return;
    }
    if (!Array.isArray(questions) || !questions.length) {
        alert("Add a question bank containing at least 6 coding problems and 4 MCQs.");
        return;
    }
    const normalizedQuestions = [];
    for (const question of questions) {
        if (!question || typeof question.question !== "string" || !question.question.trim() ||
            !Number.isFinite(Number(question.points)) || Number(question.points) <= 0) {
            alert("Every question needs non-empty question text and positive points.");
            return;
        }

        const type = question.type || "mcq";
        if (type === "mcq") {
            if (!Array.isArray(question.options) || question.options.length !== 4 ||
                question.options.some((option) => typeof option !== "string" || !option.trim()) ||
                !Number.isInteger(question.correctAnswer) || question.correctAnswer < 0 ||
                question.correctAnswer >= question.options.length) {
                alert("Each MCQ needs four non-empty options and a correctAnswer index from 0 to 3.");
                return;
            }
            normalizedQuestions.push({
                type,
                question: question.question.trim(),
                options: question.options.map((option) => option.trim()),
                correctAnswer: question.correctAnswer,
                points: Number(question.points),
            });
            continue;
        }

        if (type !== "coding" || !Array.isArray(question.languages) || !question.languages.length ||
            question.languages.some((language) => !supportedCodeLanguages.includes(language))) {
            alert(`Each coding problem needs one or more supported languages: ${supportedCodeLanguages.join(", ")}.`);
            return;
        }
        if (typeof question.inputFormat !== "string" || !question.inputFormat.trim() ||
            typeof question.outputFormat !== "string" || !question.outputFormat.trim() ||
            !Array.isArray(question.testCases) || !question.testCases.length ||
            question.testCases.some((testCase) =>
                !testCase ||
                typeof testCase.input !== "string" ||
                typeof testCase.output !== "string" ||
                typeof testCase.explanation !== "string" ||
                !testCase.explanation.trim()
            )) {
            alert("Each coding problem needs input and output formats, plus at least one sample test case with input, expected output, and explanation.");
            return;
        }
        const starterCode = {};
        if (question.starterCode !== undefined &&
            (!question.starterCode || typeof question.starterCode !== "object" || Array.isArray(question.starterCode))) {
            alert("starterCode must be an object keyed by supported language names.");
            return;
        }
        for (const [language, code] of Object.entries(question.starterCode || {})) {
            if (!question.languages.includes(language) || typeof code !== "string") {
                alert("Each starterCode entry must use a language listed for that problem and a string value.");
                return;
            }
            starterCode[language] = code;
        }
        normalizedQuestions.push({
            type,
            question: question.question.trim(),
            inputFormat: question.inputFormat.trim(),
            outputFormat: question.outputFormat.trim(),
            constraints: typeof question.constraints === "string" ? question.constraints.trim() : "",
            testCases: question.testCases.map((testCase) => ({
                input: testCase.input,
                output: testCase.output,
                explanation: testCase.explanation.trim(),
            })),
            languages: [...new Set(question.languages)],
            starterCode,
            points: Number(question.points),
        });
    }
    const codingCount = normalizedQuestions.filter(isCodingQuestion).length;
    const mcqCount = normalizedQuestions.filter((question) => !isCodingQuestion(question)).length;
    if (codingCount < randomizedCodingCount || mcqCount < randomizedMcqCount) {
        alert("The subject bank must contain at least 6 coding problems and 4 MCQs.");
        return;
    }

    const id = `exam-${Date.now()}`;
    const key = `${id}. ${title}`;
    const exam = {
        id,
        key,
        title,
        category,
        scheduledAt: scheduledAt.toISOString(),
        duration,
        randomized: true,
        questions: normalizedQuestions,
    };
    const schedules = getScheduledExams();
    schedules.push(exam);
    saveScheduledExams(schedules);
    examSets[key] = {
        duration,
        difficulty: "Scheduled",
        questions: exam.questions,
        scheduledAt: exam.scheduledAt,
        scheduleId: id,
        randomized: true,
    };
    subjectIcons[key] = "✦";
    examUploadForm.reset();
    examDateInput.value = "";
    examTimeInput.value = "";
    isCustomTimeSelected = false;
    updateTimePresetSelection();
    calendarViewDate = new Date();
    renderInteractiveCalendar(false);
    updateScheduledDatePreview();
    examDurationInput.value = "30";
    updateDurationPresetSelection();
    renderScheduledExams();
    renderUpcomingExams();
    renderStudentDashboard();
    buildSubjectCards();
    updateAdminExamStats();
    alert("Examination scheduled successfully.");
}

function getScheduleState(exam) {
    const start = new Date(exam.scheduledAt).getTime();
    const end = start + Number(exam.duration) * 60 * 1000;
    if (Date.now() < start) return "upcoming";
    if (Date.now() >= end) return "expired";
    return "available";
}

function formatExamDate(date) {
    return new Date(date).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

function renderScheduledExams() {
    if (!examUploadList) return;
    const exams = getScheduledExams();
    const counts = { upcoming: 0, available: 0, expired: 0 };
    exams.forEach((exam) => {
        counts[getScheduleState(exam)] += 1;
    });
    if (managedExamTotal) managedExamTotal.textContent = String(exams.length);
    if (managedExamUpcoming) managedExamUpcoming.textContent = String(counts.upcoming);
    if (managedExamAvailable) managedExamAvailable.textContent = String(counts.available);
    if (managedExamClosed) managedExamClosed.textContent = String(counts.expired);

    examUploadList.replaceChildren();
    if (!exams.length) {
        const empty = document.createElement("li");
        empty.className = "exam-list-empty";
        empty.textContent = "No examinations scheduled yet.";
        examUploadList.appendChild(empty);
        updateAdminExamStats();
        return;
    }

    const searchTerm = examSearchInput?.value.trim().toLowerCase() || "";
    const selectedStatus = examStatusFilter?.value || "all";
    const filteredExams = exams.filter((exam) => {
        const matchesSearch = `${exam.title} ${exam.category}`.toLowerCase().includes(searchTerm);
        const matchesStatus = selectedStatus === "all" || getScheduleState(exam) === selectedStatus;
        return matchesSearch && matchesStatus;
    }).sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt));

    if (!filteredExams.length) {
        const empty = document.createElement("li");
        empty.className = "exam-list-empty";
        empty.textContent = searchTerm || selectedStatus !== "all"
            ? "No examinations match these filters."
            : "No examinations scheduled yet.";
        examUploadList.appendChild(empty);
        updateAdminExamStats();
        return;
    }

    filteredExams.forEach((exam, index) => {
        const item = document.createElement("li");
        item.className = "managed-exam-item";
        item.style.setProperty("--exam-row-index", String(Math.min(index, 8)));
        const meta = document.createElement("div");
        meta.className = "upload-exam-meta";
        const title = document.createElement("strong");
        title.textContent = exam.title;
        const details = document.createElement("small");
        const questionCount = exam.randomized
            ? `${exam.questions.length} in bank · ${randomizedCodingCount + randomizedMcqCount} per attempt (6 coding + 4 MCQ)`
            : `${exam.questions.length} questions`;
        details.textContent = `${exam.category} · ${questionCount} · ${exam.duration} min · ${formatExamDate(exam.scheduledAt)}`;
        meta.append(title, details);
        const state = getScheduleState(exam);
        const badge = document.createElement("span");
        badge.className = `exam-status ${state}`;
        badge.textContent = state === "upcoming" ? "Upcoming" : state === "available" ? "Available now" : "Closed";

        const actions = document.createElement("div");
        actions.className = "managed-exam-actions";
        if (state === "upcoming") {
            const rescheduleButton = document.createElement("button");
            rescheduleButton.type = "button";
            rescheduleButton.className = "small-btn";
            rescheduleButton.textContent = "Reschedule";
            rescheduleButton.addEventListener("click", () => renderExamRescheduleForm(item, exam));
            actions.appendChild(rescheduleButton);
        }
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "small-btn danger";
        removeButton.textContent = "Cancel";
        removeButton.setAttribute("aria-label", `Cancel ${exam.title}`);
        removeButton.addEventListener("click", () => {
            if (!window.confirm(`Cancel and remove "${exam.title}"? Students will no longer be able to take this exam.`)) {
                return;
            }
            const remainingExams = getScheduledExams().filter((entry) => entry.id !== exam.id);
            saveScheduledExams(remainingExams);
            delete examSets[exam.key];
            delete subjectIcons[exam.key];
            if (currentSubject === exam.key) {
                currentSubject = Object.keys(examSets)[0];
                resetExamState();
                updateSelectedSubject();
                renderQuestion();
                updateNavigator();
                renderTimer();
            }
            renderScheduledExams();
            renderUpcomingExams();
            renderStudentDashboard();
            buildSubjectCards();
            updateAdminExamStats();
        });
        actions.appendChild(removeButton);
        item.append(meta, badge, actions);
        examUploadList.appendChild(item);
    });
    updateAdminExamStats();
}

function renderExamRescheduleForm(item, exam) {
    item.classList.add("is-editing");
    const editor = document.createElement("form");
    editor.className = "exam-reschedule-form";
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "New start time";
    const dateInput = document.createElement("input");
    dateInput.type = "datetime-local";
    dateInput.required = true;
    const scheduledDate = new Date(exam.scheduledAt);
    const localDate = new Date(scheduledDate.getTime() - scheduledDate.getTimezoneOffset() * 60000);
    dateInput.value = localDate.toISOString().slice(0, 16);
    dateLabel.appendChild(dateInput);

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.className = "small-btn";
    saveButton.textContent = "Save time";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "small-btn danger";
    cancelButton.textContent = "Keep current time";
    cancelButton.addEventListener("click", renderScheduledExams);
    editor.append(dateLabel, saveButton, cancelButton);
    item.appendChild(editor);

    editor.addEventListener("submit", (event) => {
        event.preventDefault();
        const nextDate = new Date(dateInput.value);
        if (Number.isNaN(nextDate.getTime()) || nextDate.getTime() <= Date.now()) {
            alert("Choose a valid start time in the future.");
            return;
        }
        const schedules = getScheduledExams();
        const scheduledExam = schedules.find((entry) => entry.id === exam.id);
        if (!scheduledExam) {
            alert("This examination is no longer scheduled. Refresh the list and try again.");
            renderScheduledExams();
            return;
        }
        scheduledExam.scheduledAt = nextDate.toISOString();
        saveScheduledExams(schedules);
        if (examSets[exam.key]) {
            examSets[exam.key].scheduledAt = scheduledExam.scheduledAt;
        }
        renderScheduledExams();
        renderUpcomingExams();
        renderStudentDashboard();
        buildSubjectCards();
    });
}

function updateAdminExamStats() {
    if (adminActiveExams) {
        adminActiveExams.textContent = String(
            getScheduledExams().filter((exam) => getScheduleState(exam) !== "expired").length,
        );
    }
}

function renderUpcomingExams() {
    if (!upcomingExamList) return;
    const exams = getScheduledExams().sort((a, b) =>
        new Date(a.scheduledAt) - new Date(b.scheduledAt)
    ).filter((exam) => getScheduleState(exam) !== "expired");
    upcomingExamList.replaceChildren();
    if (!exams.length) {
        const empty = document.createElement("li");
        empty.className = "results-empty";
        empty.textContent = "No upcoming scheduled examinations. Check the available assessments below.";
        upcomingExamList.appendChild(empty);
        return;
    }

    exams.forEach((exam) => {
        const item = document.createElement("li");
        item.className = "upcoming-item";
        const meta = document.createElement("div");
        meta.className = "upcoming-item-meta";
        const title = document.createElement("strong");
        title.textContent = exam.title;
        const detail = document.createElement("small");
        detail.textContent = `${exam.category} · ${formatExamDate(exam.scheduledAt)} · ${exam.duration} min`;
        meta.append(title, detail);
        const state = getScheduleState(exam);
        const badge = document.createElement("span");
        badge.className = `exam-status ${state}`;
        badge.textContent = state === "upcoming" ? "Upcoming" : state === "available" ? "Available now" : "Closed";
        item.append(meta);
        if (state === "available") {
            const startButton = document.createElement("button");
            startButton.type = "button";
            startButton.className = "btn btn-primary upcoming-start-btn";
            startButton.textContent = "Start Exam";
            startButton.addEventListener("click", () => {
                if (getScheduleState(exam) !== "available") {
                    renderUpcomingExams();
                    return;
                }
                if (loadSubject(exam.key)) {
                    beginCurrentExam();
                }
            });
            item.append(startButton);
        } else {
            item.append(badge);
        }
        upcomingExamList.appendChild(item);
    });
}

function renderAdminResults() {
    if (!adminResultsBody) return;
    const results = getStudentResults();
    const participatingHallTickets = new Set(
        results
            .map((result) => result.hallTicket?.trim().toLowerCase())
            .filter(Boolean)
    );
    const students = getStudentAccounts();
    const participatingStudents = students.filter((student) =>
        participatingHallTickets.has(student.hallTicket?.trim().toLowerCase())
    ).length;
    if (adminResultStudentCount) {
        adminResultStudentCount.textContent =
            `${students.length} total students · ${participatingStudents} participated`;
    }
    adminResultsBody.replaceChildren();
    if (!results.length) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 7;
        cell.textContent = "No examination results yet.";
        row.appendChild(cell);
        adminResultsBody.appendChild(row);
        return;
    }
    results.forEach((result) => {
        const row = document.createElement("tr");
        [
            result.studentName || "-",
            result.hallTicket || "-",
            result.subject || "-",
            `${result.pendingReview ? "MCQ " : ""}${result.score}/${result.totalMarks} (${result.percentage}%)`,
            result.pendingReview ? "Pending code review" : result.grade || "-",
            formatExamDate(result.completedAt),
        ].forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        const answersCell = document.createElement("td");
        const reviewButton = document.createElement("button");
        reviewButton.type = "button";
        reviewButton.className = "small-btn";
        reviewButton.textContent = "View answers";
        reviewButton.addEventListener("click", () => showResult(result, false));
        answersCell.appendChild(reviewButton);
        row.appendChild(answersCell);
        adminResultsBody.appendChild(row);
    });
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
    renderAdminResults();
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
    document.getElementById("studentEntryHallTicket").focus();
}

function renderStudentTable() {
    if (!studentTableBody) {
        return;
    }

    const students = getStudentAccounts();
    renderAdminPasswordStudentOptions(students);
    const activeFilter = studentResultFilter ? studentResultFilter.value : "all";
    const filteredStudents = students.filter((student) => {
        if (activeFilter === "all") {
            return true;
        }
        return getStudentStatus(student) === activeFilter;
    }).sort((first, second) =>
        studentListCollator.compare(first.hallTicket || "", second.hallTicket || "")
    );

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
            renderLeaderboard();
        });

        studentTableBody.appendChild(row);
    });
}

function renderAdminPasswordStudentOptions(students) {
    const selectedHallTicket = adminPasswordStudentSelect.value;
    adminPasswordStudentSelect.replaceChildren(new Option("Select a student", ""));

    students.forEach((student) => {
        const option = new Option(
            `${student.name || "Unnamed student"} — ${student.hallTicket || "No hall ticket"}`,
            student.hallTicket || ""
        );
        adminPasswordStudentSelect.add(option);
    });

    if (students.some((student) => student.hallTicket === selectedHallTicket)) {
        adminPasswordStudentSelect.value = selectedHallTicket;
    }
    updateAdminStudentScoreField();
}

function updateAdminStudentScoreField() {
    const hallTicket = adminPasswordStudentSelect.value.trim();
    const student = getStudentByHallTicket(hallTicket);
    const hasSelectedStudent = Boolean(student);
    adminStudentScoreInput.disabled = !hasSelectedStudent;
    adminStudentScoreSubmitButton.disabled = !hasSelectedStudent;
    adminStudentScoreInput.value = student ? String(student.score ?? 0) : "";
    adminStudentScoreInput.placeholder = hasSelectedStudent ? "Enter result score" : "Select a student first";
}

function handleAdminStudentScoreUpdate(event) {
    event.preventDefault();

    const hallTicket = adminPasswordStudentSelect.value.trim();
    const scoreValue = adminStudentScoreInput.value.trim();
    const score = Number(scoreValue);
    if (!hallTicket) {
        alert("Select a student account before updating the result score.");
        return;
    }
    if (!scoreValue || !Number.isFinite(score) || score < 0 || score > 100) {
        alert("Enter a result score between 0 and 100.");
        return;
    }

    const students = getStudentAccounts();
    const selectedStudent = students.find((student) =>
        student.hallTicket?.toLowerCase() === hallTicket.toLowerCase()
    );
    if (!selectedStudent) {
        alert("Student account was not found. Refresh the student list and try again.");
        renderStudentTable();
        return;
    }

    selectedStudent.score = score;
    saveStudentAccounts(students);
    renderStudentTable();
    alert(`Result score updated for ${selectedStudent.name || selectedStudent.hallTicket}.`);
}

function handleAdminStudentPasswordChange(event) {
    event.preventDefault();

    const hallTicket = adminPasswordStudentSelect.value.trim();
    const newPassword = adminStudentNewPassword.value;
    const confirmPassword = adminStudentConfirmPassword.value;

    if (!hallTicket) {
        alert("Select a student account to change its password.");
        return;
    }

    if (newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    const students = getStudentAccounts();
    const selectedStudent = students.find((student) =>
        student.hallTicket?.toLowerCase() === hallTicket.toLowerCase()
    );
    if (!selectedStudent) {
        alert("Student account was not found. Refresh the student list and try again.");
        renderStudentTable();
        return;
    }

    selectedStudent.password = newPassword;
    saveStudentAccounts(students);
    adminStudentPasswordForm.reset();
    renderStudentTable();
    adminPasswordStudentSelect.value = "";
    updateAdminStudentScoreField();
    alert(`Password changed successfully for ${selectedStudent.name || selectedStudent.hallTicket}.`);
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
    const password = studentEntryPassword.value.trim();

    if (!studentName || !hallTicket || !branch || !college || !password) {
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
        password,
    };

    if (existingStudent) {
        const index = students.findIndex((student) =>
            student.hallTicket && student.hallTicket.toLowerCase() === hallTicket.toLowerCase()
        );
        students[index] = { ...existingStudent, ...payload };
    } else {
        students.push({ ...payload, score: 0 });
    }

    saveStudentAccounts(students);
    renderStudentTable();
    renderLeaderboard();
    resetStudentForm();
    alert("Student account saved successfully.");
}

function getLeaderboard() {
    const participantScores = new Map(
        getLeaderboardParticipants().map((entry) => [entry.hallTicket.toLowerCase(), entry])
    );
    return getStudentAccounts()
        .filter((student) => typeof student.hallTicket === "string" && student.hallTicket.trim())
        .map((student) => {
            const participation = participantScores.get(student.hallTicket.toLowerCase());
            return {
                hallTicket: student.hallTicket,
                name: student.name || "Student",
                points: participation ? participation.points : null,
                attempts: participation ? participation.attempts : 0,
                participated: Boolean(participation),
            };
        });
}

function getLeaderboardParticipants() {
    saveLeaderboardFromResults();
    const storedBoard = JSON.parse(localStorage.getItem("examLeaderboard") || "null");
    const participants = Array.isArray(storedBoard)
        ? storedBoard.filter((entry) =>
            typeof entry?.hallTicket === "string" &&
            entry.hallTicket.trim() &&
            typeof entry.name === "string" &&
            Number.isFinite(Number(entry.points)) &&
            Number(entry.points) >= 0 &&
            Number.isInteger(Number(entry.attempts)) &&
            Number(entry.attempts) > 0
        ).map((entry) => ({
            hallTicket: entry.hallTicket.trim(),
            name: entry.name,
            points: Number(entry.points),
            attempts: Number(entry.attempts),
        }))
        : [];
    if (JSON.stringify(participants) !== JSON.stringify(storedBoard)) {
        localStorage.setItem("examLeaderboard", JSON.stringify(participants));
    }
    return participants;
}

function saveLeaderboardFromResults(results = getStudentResults()) {
    const participants = new Map();
    results.forEach((result) => {
        const hallTicket = typeof result.hallTicket === "string" ? result.hallTicket.trim() : "";
        const score = Number(result.score);
        if (!hallTicket || !Number.isFinite(score) || score < 0) return;
        const key = hallTicket.toLowerCase();
        const participant = participants.get(key) || {
            hallTicket,
            name: result.studentName || "Student",
            points: 0,
            attempts: 0,
        };
        participant.points += score;
        participant.attempts += 1;
        participants.set(key, participant);
    });
    localStorage.setItem("examLeaderboard", JSON.stringify([...participants.values()]));
}

function getStudentResults() {
    const storedResults = JSON.parse(localStorage.getItem("examResults") || "[]");
    return Array.isArray(storedResults)
        ? storedResults.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
        : [];
}

function renderStudentDashboard() {
    const profile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
    const studentAccount = profile?.hallTicket
        ? getStudentByHallTicket(profile.hallTicket)
        : null;
    const now = new Date();
    const hour = now.getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    const studentResults = profile?.hallTicket
        ? getStudentResults().filter((result) =>
            result.hallTicket.toLowerCase() === profile.hallTicket.toLowerCase()
        )
        : [];
    const gradedResults = studentResults.filter((result) => !result.pendingReview);
    const scores = gradedResults.map((result) => Number(result.percentage) || 0);

    dashboardGreeting.textContent = `${greeting}, ${profile?.name || "Student"}!`;
    dashboardDate.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    testsTakenStat.textContent = studentResults.length;
    averageScoreStat.textContent = scores.length
        ? `${Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)}%`
        : "—";
    latestScoreStat.textContent = studentResults.length
        ? studentResults[0].pendingReview
            ? "Review pending"
            : `${Number(studentResults[0].percentage) || 0}%`
        : "—";
    studentResultScore.textContent = Number.isFinite(Number(studentAccount?.score))
        ? `${Number(studentAccount.score)}/100`
        : "—";
    availableExamsStat.textContent = Object.keys(examSets).length;
    renderLeaderboard();
    studentResultsList.replaceChildren();

    if (!studentResults.length) {
        const emptyState = document.createElement("li");
        emptyState.className = "results-empty";
        emptyState.textContent = "No results yet. Complete an assessment and your score will appear here.";
        studentResultsList.appendChild(emptyState);
        return;
    }

    studentResults.slice(0, 5).forEach((result) => {
        const item = document.createElement("li");
        item.className = "result-item";

        const details = document.createElement("div");
        details.className = "result-details";
        const title = document.createElement("strong");
        title.textContent = result.subject;
        const date = document.createElement("small");
        date.textContent = new Date(result.completedAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
        });
        details.append(title, date);

        const score = document.createElement("div");
        score.className = "result-score";
        const percentage = document.createElement("strong");
        percentage.textContent = result.pendingReview
            ? `MCQ ${result.percentage}%`
            : `${result.percentage}%`;
        const grade = document.createElement("small");
        grade.textContent = result.pendingReview ? "Coding review pending" : `Grade ${result.grade}`;
        score.append(percentage, grade);

        const actions = document.createElement("div");
        actions.className = "result-item-actions";
        const reviewButton = document.createElement("button");
        reviewButton.type = "button";
        reviewButton.className = "small-btn result-review-btn";
        reviewButton.textContent = "Review answers";
        reviewButton.disabled = !Array.isArray(result.review);
        reviewButton.title = reviewButton.disabled
            ? "Answer review is only available for exams submitted after this feature was added."
            : "Review answers for this exam";
        reviewButton.addEventListener("click", () => showResult(result, false));

        const subjectKey = Object.keys(examSets).find((subject) => {
            const exam = examSets[subject];
            const scheduled = exam.scheduleId
                ? getScheduledExams().find((entry) => entry.id === exam.scheduleId)
                : null;
            return (scheduled?.title || subject.replace(/^\d+\.\s*/, "")) === result.subject;
        });
        const subjectExam = subjectKey ? examSets[subjectKey] : null;
        const scheduledExam = subjectExam?.scheduleId
            ? getScheduledExams().find((entry) => entry.id === subjectExam.scheduleId)
            : null;
        const canStartAgain = Boolean(subjectKey) &&
            (!scheduledExam || getScheduleState(scheduledExam) === "available");
        const attemptButton = document.createElement("button");
        attemptButton.type = "button";
        attemptButton.className = "small-btn result-attempt-btn";
        attemptButton.textContent = "Start new attempt";
        attemptButton.disabled = !canStartAgain;
        attemptButton.title = canStartAgain
            ? `Start a new attempt for ${result.subject}`
            : "The assessment is not currently available";
        attemptButton.addEventListener("click", () => {
            if (!canStartAgain || !subjectKey) return;
            const profile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
            if (profile?.hallTicket) {
                localStorage.removeItem(
                    `examDraft:${profile.hallTicket.toLowerCase()}:${subjectKey}`,
                );
            }
            if (loadSubject(subjectKey)) {
                beginCurrentExam();
            }
        });
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "small-btn danger result-remove-btn";
        removeButton.textContent = "Remove";
        removeButton.setAttribute("aria-label", `Remove ${result.subject} result from ${date.textContent}`);
        removeButton.addEventListener("click", () => {
            if (!window.confirm(`Remove the saved result for "${result.subject}"?`)) return;
            const results = getStudentResults();
            const resultIndex = results.findIndex((entry) =>
                entry.hallTicket?.toLowerCase() === result.hallTicket?.toLowerCase() &&
                entry.completedAt === result.completedAt &&
                entry.subject === result.subject
            );
            if (resultIndex < 0) {
                alert("This result record could not be found.");
                return;
            }
            results.splice(resultIndex, 1);
            localStorage.setItem("examResults", JSON.stringify(results));
            saveLeaderboardFromResults(results);
            renderStudentDashboard();
            renderAdminResults();
        });
        actions.append(reviewButton, attemptButton, removeButton);
        item.append(details, score, actions);
        studentResultsList.appendChild(item);
    });
}

function renderLeaderboard() {
    const board = [...getLeaderboard()].sort((a, b) =>
        (b.points ?? -1) - (a.points ?? -1) || a.name.localeCompare(b.name)
    );
    leaderboardList.replaceChildren();
    leaderboardStudentCount.textContent =
        `${board.length} ${board.length === 1 ? "student" : "students"}`;

    if (!board.length) {
        const emptyState = document.createElement("li");
        emptyState.className = "results-empty";
        emptyState.textContent = "No student accounts are available yet.";
        leaderboardList.appendChild(emptyState);
        return;
    }

    board.forEach((entry, index) => {
        const item = document.createElement("li");
        item.className = "leaderboard-item";
        const rank = document.createElement("div");
        rank.className = "leaderboard-rank";
        rank.textContent = `#${index + 1}`;
        const meta = document.createElement("div");
        meta.className = "leaderboard-meta";
        const name = document.createElement("strong");
        name.textContent = entry.name;
        const score = document.createElement("small");
        score.textContent = entry.participated
            ? `${entry.points} points · ${entry.attempts} ${entry.attempts === 1 ? "attempt" : "attempts"}`
            : "Not participated";
        meta.append(name, score);
        item.append(rank, meta);
        leaderboardList.appendChild(item);
    });
}

const subjectIcons = {
    "1. JavaScript Fundamentals": "JS",
    "2. DBMS Essentials": "DB",
    "3. AI Fundamentals": "AI",
    "4. Machine Learning Fundamentals": "ML",
    "5. HTML Fundamentals": "HTML",
    "6. CSS Fundamentals": "CSS",
    "7. Python Fundamentals": "PY",
    "8. C Fundamentals": "C",
};

let currentSubject = "1. JavaScript Fundamentals";
let currentQuestionIndex = 0;
let activeQuestions = null;
let selectedAnswers = [];
let reviewedQuestions = [];
let timeLeft = 10 * 60;
let examEndsAt = null;
let timerInterval = null;
let isExamSubmitted = false;

function getCurrentQuestions() {
    const exam = examSets[currentSubject];
    if (activeQuestions) return activeQuestions;
    return exam.randomized ? getQuestionSetPreview(exam.questions) : exam.questions;
}

function isScrollableMcqExam() {
    const questions = getCurrentQuestions();
    return questions.length > 1 && questions.every((question) => !isCodingQuestion(question));
}

function isQuestionAnswered(question, answer) {
    if (answer === null || answer === undefined) return false;
    if (!isCodingQuestion(question)) return Number.isInteger(answer);
    return Object.values(answer.codeByLanguage || {}).some((code) =>
        typeof code === "string" && code.trim().length > 0
    );
}

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

    landingHeading.textContent = isStudentMode ? "STUDENT LOGIN" : "ADMIN LOGIN";
    landingCopy.textContent = isStudentMode
        ? "Sign in to take your exams and keep track of your progress."
        : "Manage students, examinations, schedules, and results from one clear dashboard.";
    landingCardTitle.textContent = isStudentMode ? "Take your exams" : "Manage students";
    landingCardCopy.textContent = isStudentMode ? "A focused test experience" : "Keep records in one place";
    landingScoreTitle.textContent = isStudentMode ? "Review your results" : "Review exam results";
    landingScoreCopy.textContent = isStudentMode ? "See how far you’ve come" : "Track every attempt";
    landingFeatureOne.textContent = isStudentMode ? "My exams" : "Students";
    landingFeatureTwo.textContent = isStudentMode ? "Scores" : "Examinations";
    landingFeatureThree.textContent = isStudentMode ? "Progress" : "Results";

    if (isStudentMode) {
        adminLoginForm.reset();
        clearAuthFeedback(adminAuthFeedback);
    } else {
        loginForm.reset();
        clearAuthFeedback(studentAuthFeedback);
    }

    studentLoginTab.classList.toggle("active", isStudentMode);
    adminLoginTab.classList.toggle("active", !isStudentMode);
    studentLoginTab.setAttribute("aria-pressed", String(isStudentMode));
    adminLoginTab.setAttribute("aria-pressed", String(!isStudentMode));

    loginForm.classList.toggle("hidden", !isStudentMode);
    adminLoginForm.classList.toggle("hidden", isStudentMode);
}

function transitionToAuthenticatedView(view) {
    const finishEntry = (event) => {
        if (event && (event.target !== view || event.animationName !== "authenticated-view-enter")) {
            return;
        }

        view.removeEventListener("animationend", finishEntry);
        window.clearTimeout(entryFallback);
        view.classList.remove("app-entering");
    };
    const showView = (event) => {
        if (event && (event.target !== authScreen || event.animationName !== "auth-screen-exit")) {
            return;
        }

        authScreen.removeEventListener("animationend", showView);
        window.clearTimeout(exitFallback);
        authScreen.classList.add("hidden");
        authScreen.classList.remove("auth-exiting");
        view.classList.remove("hidden");
        view.classList.add("app-entering");
        view.addEventListener("animationend", finishEntry);
        entryFallback = window.setTimeout(() => finishEntry(), 800);
    };
    let entryFallback;
    authScreen.addEventListener("animationend", showView);
    authScreen.classList.add("auth-exiting");
    const exitFallback = window.setTimeout(() => showView(), 700);
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
        showAuthFeedback(studentAuthFeedback, "Fill in all student details and password to continue.");
        return;
    }
    if (studentData.password.length < 6) {
        showAuthFeedback(studentAuthFeedback, "Student password must be at least 6 characters long.");
        return;
    }

    const storedStudents = JSON.parse(localStorage.getItem("examStudents") || "[]");
    const existingStudentIndex = storedStudents.findIndex((entry) =>
        entry.hallTicket.toLowerCase() === studentData.hallTicket.toLowerCase()
    );

    if (existingStudentIndex >= 0) {
        const existingStudent = storedStudents[existingStudentIndex];
        if (existingStudent.password !== studentData.password) {
            showAuthFeedback(studentAuthFeedback, "Invalid hall ticket or password. Check your credentials and try again.");
            return;
        }

        Object.assign(studentData, existingStudent);
    } else {
        storedStudents.push({ ...studentData });
    }

    localStorage.setItem("examStudents", JSON.stringify(storedStudents));
    localStorage.setItem("examStudentProfile", JSON.stringify(studentData));
    sessionStorage.setItem("examStudentSession", JSON.stringify({
        hallTicket: studentData.hallTicket,
    }));
    sessionStorage.removeItem("examAdminSession");
    setStudentProfile(studentData);
    resetExamState();
    restoreExamDraft();
    renderQuestion();
    updateNavigator();
    renderTimer();
    renderStudentDashboard();
    adminDashboard.classList.add("hidden");
    clearAuthFeedback(studentAuthFeedback);
    transitionToAuthenticatedView(appShell);
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
        showAuthFeedback(adminAuthFeedback, "Invalid username or password. Check your credentials and try again.");
        return;
    }

    sessionStorage.setItem("examAdminSession", JSON.stringify({
        name: matchedAdmin.name || matchedAdmin.username,
        username: matchedAdmin.username,
    }));
    sessionStorage.removeItem("examStudentSession");
    appShell.classList.add("hidden");
    clearAuthFeedback(adminAuthFeedback);
    if (adminUserNameLabel) {
        adminUserNameLabel.textContent = matchedAdmin.name || matchedAdmin.username;
    }
    populateAdminProfile();
    transitionToAuthenticatedView(adminDashboard);
}

function logoutAdmin() {
    window.scrollTo(0, 0);
    sessionStorage.removeItem("examAdminSession");
    if (adminUserNameLabel) {
        adminUserNameLabel.textContent = "Admin";
    }
    adminDashboard.classList.add("hidden");
    authScreen.classList.remove("hidden");
    setAuthMode("student");
}

function logoutStudent() {
    window.scrollTo(0, 0);
    sessionStorage.removeItem("examStudentSession");
    clearInterval(timerInterval);
    activeQuestions = null;
    resultModal.classList.add("hidden");
    document.getElementById("examPanel").classList.add("hidden");
    appShell.classList.add("hidden");
    authScreen.classList.remove("hidden");
    setAuthMode("student");
}

function buildSubjectCards() {
    subjectGrid.innerHTML = "";

    Object.keys(examSets).forEach((subject) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "subject-card student-depth-card";
        if (subject === currentSubject) {
            card.classList.add("active");
        }

        const icon = document.createElement("div");
        icon.className = "subject-icon subject-file-icon";
        icon.setAttribute("aria-hidden", "true");
        const fileCode = document.createElement("span");
        fileCode.className = "subject-file-code";
        fileCode.textContent = subjectIcons[subject] || "EX";
        icon.appendChild(fileCode);
        const title = document.createElement("h4");
        const scheduledExam = examSets[subject].scheduleId
            ? getScheduledExams().find((exam) => exam.id === examSets[subject].scheduleId)
            : null;
        title.textContent = scheduledExam?.title || subject.replace(/^\d+\.\s*/, "");
        const meta = document.createElement("div");
        meta.className = "subject-meta";
        const count = document.createElement("span");
        count.textContent = examSets[subject].randomized
            ? `${randomizedCodingCount + randomizedMcqCount} questions · ${randomizedCodingCount} coding · ${randomizedMcqCount} MCQ`
            : `${examSets[subject].questions.length} questions`;
        const difficulty = document.createElement("span");
        difficulty.textContent = `${examSets[subject].duration} min · ${scheduledExam ? scheduledExam.category : examSets[subject].difficulty}`;
        meta.append(count, difficulty);
        card.append(icon, title, meta);

        card.addEventListener("click", () => {
            if (loadSubject(subject)) {
                beginCurrentExam();
            }
        });

        subjectGrid.appendChild(card);
    });
}

function updateSelectedSubject() {
    const scheduledExam = examSets[currentSubject].scheduleId
        ? getScheduledExams().find((exam) => exam.id === examSets[currentSubject].scheduleId)
        : null;
    const displayName = scheduledExam?.title || currentSubject;
    selectedSubjectEl.textContent = displayName;
    overviewQuestionCountEl.textContent = getCurrentQuestions().length;
    examCategoryEl.textContent = displayName;
    overviewDurationEl.textContent = `${examSets[currentSubject].duration} min`;
    overviewDifficultyEl.textContent = scheduledExam ? "Scheduled" : examSets[currentSubject].difficulty;
}

function resetExamState() {
    activeQuestions = null;
    currentQuestionIndex = 0;
    selectedAnswers = Array(getCurrentQuestions().length).fill(null);
    reviewedQuestions = Array(getCurrentQuestions().length).fill(false);
    timeLeft = examSets[currentSubject].duration * 60;
    examEndsAt = null;
    isExamSubmitted = false;
    clearInterval(timerInterval);
}

function loadSubject(subject) {
    if (timerInterval && !isExamSubmitted) {
        alert("Submit your current examination before opening another test.");
        return false;
    }
    currentSubject = subject;
    resetExamState();
    restoreExamDraft();
    buildSubjectCards();
    updateSelectedSubject();
    renderQuestion();
    updateNavigator();
    renderTimer();
    return true;
}

function renderCodingProblemDetails(question) {
    codingProblemDetails.replaceChildren();
    const addTextSection = (label, value, className = "") => {
        if (!value) return;
        const section = document.createElement("section");
        section.className = `problem-detail-section ${className}`.trim();
        const heading = document.createElement("h4");
        heading.textContent = label;
        const content = document.createElement("p");
        content.textContent = value;
        section.append(heading, content);
        codingProblemDetails.appendChild(section);
    };

    addTextSection("Input format", question.inputFormat);
    addTextSection("Output format", question.outputFormat);
    addTextSection("Constraints", question.constraints, "problem-constraints");

    if (question.testCases?.length) {
        const testCasesHeading = document.createElement("h4");
        testCasesHeading.className = "sample-test-cases-heading";
        testCasesHeading.textContent = "Sample test cases";
        codingProblemDetails.appendChild(testCasesHeading);
        question.testCases.forEach((testCase, index) => {
            const card = document.createElement("section");
            card.className = "sample-test-case";
            const heading = document.createElement("h5");
            heading.textContent = `Example ${index + 1}`;
            const inputLabel = document.createElement("strong");
            inputLabel.textContent = "Input";
            const input = document.createElement("pre");
            input.textContent = testCase.input;
            const outputLabel = document.createElement("strong");
            outputLabel.textContent = "Expected output";
            const output = document.createElement("pre");
            output.textContent = testCase.output;
            const explanation = document.createElement("p");
            explanation.textContent = testCase.explanation;
            card.append(heading, inputLabel, input, outputLabel, output, explanation);
            codingProblemDetails.appendChild(card);
        });
    }
}

function renderQuestion() {
    const questions = getCurrentQuestions();
    const scrollableMcqExam = isScrollableMcqExam();
    singleQuestionView.classList.toggle("hidden", scrollableMcqExam);
    mcqExamView.classList.toggle("hidden", !scrollableMcqExam);
    mcqSubmitRow.classList.toggle("hidden", !scrollableMcqExam);
    examActionRow.classList.toggle("hidden", scrollableMcqExam);
    if (scrollableMcqExam) {
        renderMcqQuestions(questions);
        updateReviewToggle();
        updateProgress();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} · ${
        getQuestionType(currentQuestion) === "coding" ? "Coding problem" : "MCQ"
    }`;
    questionPointsEl.textContent = `${currentQuestion.points} ${currentQuestion.points === 1 ? "point" : "points"}`;
    questionTextEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    const isCoding = isCodingQuestion(currentQuestion);
    optionsContainer.classList.toggle("hidden", isCoding);
    codeAnswerPanel.classList.toggle("hidden", !isCoding);
    codingProblemDetails.classList.toggle("hidden", !isCoding);

    if (isCoding) {
        renderCodingProblemDetails(currentQuestion);
        const languages = currentQuestion.languages || [];
        codeLanguageSelect.replaceChildren(...languages.map((language) => new Option(language, language)));
        const savedAnswer = selectedAnswers[currentQuestionIndex];
        const selectedLanguage = languages.includes(savedAnswer?.language)
            ? savedAnswer.language
            : languages[0];
        codeLanguageSelect.value = selectedLanguage;
        codeAnswerInput.value = savedAnswer?.codeByLanguage?.[selectedLanguage] ??
            currentQuestion.starterCode?.[selectedLanguage] ??
            "";
    } else {
        (currentQuestion.options || []).forEach((option, index) => {
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
                saveExamDraft();
            });

            optionsContainer.appendChild(button);
        });
    }

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
    updateReviewToggle();
    updateProgress();
}

function renderMcqQuestions(questions) {
    mcqExamView.replaceChildren();
    questions.forEach((question, questionIndex) => {
        const card = document.createElement("section");
        card.className = "mcq-question";
        card.id = `mcqQuestion-${questionIndex}`;
        card.dataset.questionIndex = String(questionIndex);
        if (questionIndex === currentQuestionIndex) {
            card.classList.add("current");
        }

        const topbar = document.createElement("div");
        topbar.className = "question-topbar";
        const number = document.createElement("span");
        number.className = "question-number";
        number.textContent = `Question ${questionIndex + 1}`;
        const points = document.createElement("span");
        points.className = "question-points";
        points.textContent = `${question.points} ${question.points === 1 ? "point" : "points"}`;
        const reviewButton = document.createElement("button");
        reviewButton.type = "button";
        reviewButton.className = "small-btn review-toggle";
        reviewButton.setAttribute("aria-pressed", String(Boolean(reviewedQuestions[questionIndex])));
        reviewButton.textContent = reviewedQuestions[questionIndex] ? "Marked for review" : "Mark for review";
        reviewButton.addEventListener("click", () => {
            reviewedQuestions[questionIndex] = !reviewedQuestions[questionIndex];
            reviewButton.setAttribute("aria-pressed", String(reviewedQuestions[questionIndex]));
            reviewButton.textContent = reviewedQuestions[questionIndex] ? "Marked for review" : "Mark for review";
            currentQuestionIndex = questionIndex;
            card.classList.add("current");
            updateNavigator();
            updateProgress();
            saveExamDraft();
        });
        topbar.append(number, points, reviewButton);

        const prompt = document.createElement("h3");
        prompt.textContent = question.question;
        const options = document.createElement("div");
        options.className = "options";
        question.options.forEach((option, optionIndex) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "option";
            button.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}`;
            button.setAttribute("aria-pressed", String(selectedAnswers[questionIndex] === optionIndex));
            if (selectedAnswers[questionIndex] === optionIndex) button.classList.add("selected");
            button.addEventListener("click", () => {
                selectedAnswers[questionIndex] = optionIndex;
                options.querySelectorAll(".option").forEach((optionButton, index) => {
                    const selected = index === optionIndex;
                    optionButton.classList.toggle("selected", selected);
                    optionButton.setAttribute("aria-pressed", String(selected));
                });
                currentQuestionIndex = questionIndex;
                mcqExamView.querySelectorAll(".mcq-question").forEach((questionCard, index) => {
                    questionCard.classList.toggle("current", index === questionIndex);
                });
                updateNavigator();
                updateProgress();
                saveExamDraft();
            });
            options.appendChild(button);
        });
        card.append(topbar, prompt, options);
        mcqExamView.appendChild(card);
    });
}

function renderTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timerInterval);
    if (!examEndsAt) {
        examEndsAt = Date.now() + timeLeft * 1000;
    }
    timerInterval = setInterval(() => {
        timeLeft = Math.max(0, Math.ceil((examEndsAt - Date.now()) / 1000));
        renderTimer();
        saveExamDraft();
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateProgress() {
    const questions = getCurrentQuestions();
    const answered = questions.filter((question, index) =>
        isQuestionAnswered(question, selectedAnswers[index])
    ).length;
    const progress = (answered / questions.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% complete`;
    answeredCountEl.textContent = answered;
    remainingCountEl.textContent = questions.length - answered;
    totalQuestionsEl.textContent = questions.length;
    reviewCountEl.textContent = reviewedQuestions.filter(Boolean).length;
}

function updateReviewToggle() {
    const isReviewed = Boolean(reviewedQuestions[currentQuestionIndex]);
    reviewToggleBtn.setAttribute("aria-pressed", String(isReviewed));
    reviewToggleBtn.textContent = isReviewed ? "Marked for review" : "Mark for review";
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

        if (isQuestionAnswered(getCurrentQuestions()[index], selectedAnswers[index])) {
            btn.classList.add("answered");
        }
        if (reviewedQuestions[index]) {
            btn.classList.add("reviewed");
        }

        btn.textContent = index + 1;
        btn.addEventListener("click", () => {
            currentQuestionIndex = index;
            if (isScrollableMcqExam()) {
                mcqExamView.querySelectorAll(".mcq-question").forEach((questionCard, questionIndex) => {
                    questionCard.classList.toggle("current", questionIndex === index);
                });
                updateNavigator();
                document.getElementById(`mcqQuestion-${index}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                return;
            }
            renderQuestion();
            updateNavigator();
            saveExamDraft();
        });

        questionNavigator.appendChild(btn);
    });

    updateProgress();
}

function getExamDraftKey() {
    const student = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
    return student?.hallTicket
        ? `examDraft:${student.hallTicket.toLowerCase()}:${currentSubject}`
        : null;
}

function saveExamDraft() {
    const key = getExamDraftKey();
    if (!key || isExamSubmitted) return;
    localStorage.setItem(key, JSON.stringify({
        answers: selectedAnswers,
        reviewed: reviewedQuestions,
        questions: activeQuestions,
        questionIndex: currentQuestionIndex,
        expiresAt: examEndsAt || Date.now() + timeLeft * 1000,
    }));
}

function restoreExamDraft() {
    const key = getExamDraftKey();
    if (!key) return;
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    if (!saved || !Array.isArray(saved.answers)) return;
    const exam = examSets[currentSubject];
    if (exam.randomized && Array.isArray(saved.questions) &&
        saved.questions.filter(isCodingQuestion).length === randomizedCodingCount &&
        saved.questions.filter((question) => !isCodingQuestion(question)).length === randomizedMcqCount) {
        activeQuestions = saved.questions;
    } else if (!exam.randomized && Array.isArray(saved.questions) &&
        saved.questions.length === exam.questions.length &&
        saved.questions.every((question) =>
            exam.questions.some((bankQuestion) => bankQuestion.question === question.question)
        )) {
        const questionsByPrompt = new Map(exam.questions.map((question) =>
            [question.question, question]
        ));
        activeQuestions = saved.questions.map((question) => questionsByPrompt.get(question.question));
    }
    const count = getCurrentQuestions().length;
    selectedAnswers = Array.from({ length: count }, (_, index) => {
        const answer = saved.answers[index];
        const question = getCurrentQuestions()[index];
        if (isCodingQuestion(question) && answer && typeof answer === "object") {
            const codeByLanguage = answer.codeByLanguage && typeof answer.codeByLanguage === "object" &&
                !Array.isArray(answer.codeByLanguage)
                ? Object.fromEntries(Object.entries(answer.codeByLanguage).filter(([language, code]) =>
                    question.languages?.includes(language) && typeof code === "string"
                ))
                : {};
            return {
                language: question.languages?.includes(answer.language) ? answer.language : question.languages?.[0],
                codeByLanguage,
            };
        }
        return Number.isInteger(answer) ? answer : null;
    });
    reviewedQuestions = Array.from({ length: count }, (_, index) =>
        Boolean(saved.reviewed?.[index])
    );
    currentQuestionIndex = Math.max(0, Math.min(Number(saved.questionIndex) || 0, count - 1));
    examEndsAt = Number(saved.expiresAt);
    const secondsRemaining = examEndsAt - Date.now();
    timeLeft = Number.isFinite(secondsRemaining) ? Math.max(0, Math.ceil(secondsRemaining / 1000)) : examSets[currentSubject].duration * 60;
    if (!Number.isFinite(examEndsAt)) examEndsAt = null;
}

function beginCurrentExam() {
    const exam = examSets[currentSubject];
    if (exam.scheduleId) {
        const schedule = getScheduledExams().find((entry) => entry.id === exam.scheduleId);
        if (!schedule) {
            alert("This examination is no longer available.");
            return;
        }
        const state = getScheduleState(schedule);
        if (state === "upcoming") {
            alert(`This examination opens ${formatExamDate(schedule.scheduledAt)}.`);
            return;
        }
        if (state === "expired") {
            alert("The scheduled examination window has closed.");
            return;
        }
        timeLeft = Math.min(
            timeLeft,
            Math.ceil((new Date(schedule.scheduledAt).getTime() + schedule.duration * 60 * 1000 - Date.now()) / 1000),
        );
        const scheduledEnd = new Date(schedule.scheduledAt).getTime() + schedule.duration * 60 * 1000;
        examEndsAt = examEndsAt ? Math.min(examEndsAt, scheduledEnd) : Math.min(Date.now() + timeLeft * 1000, scheduledEnd);
        if (timeLeft <= 0) {
            submitExam();
            return;
        }
    }

    if (!activeQuestions && !exam.randomized && exam.questions.length > 1 &&
        exam.questions.every((question) => !isCodingQuestion(question))) {
        activeQuestions = shuffleQuestions(exam.questions);
        selectedAnswers = Array(activeQuestions.length).fill(null);
        reviewedQuestions = Array(activeQuestions.length).fill(false);
        currentQuestionIndex = 0;
        renderQuestion();
        updateNavigator();
        saveExamDraft();
    }

    if (exam.randomized && !activeQuestions) {
        activeQuestions = selectRandomQuestionSet(exam.questions);
        if (activeQuestions.length !== randomizedCodingCount + randomizedMcqCount ||
            activeQuestions.filter(isCodingQuestion).length !== randomizedCodingCount ||
            activeQuestions.filter((question) => !isCodingQuestion(question)).length !== randomizedMcqCount) {
            activeQuestions = null;
            alert("This subject does not have enough coding problems and MCQs to start the examination.");
            return;
        }
        selectedAnswers = Array(activeQuestions.length).fill(null);
        reviewedQuestions = Array(activeQuestions.length).fill(false);
        currentQuestionIndex = 0;
        renderQuestion();
        updateNavigator();
        saveExamDraft();
    }

    document.getElementById("examPanel").classList.remove("hidden");
    document.getElementById("examPanel").scrollIntoView({ behavior: "smooth", block: "start" });
    if (timeLeft <= 0) {
        submitExam();
        return;
    }
    startTimer();
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
    if (isExamSubmitted) {
        return;
    }
    isExamSubmitted = true;
    clearInterval(timerInterval);

    const questions = getCurrentQuestions();
    let score = 0;

    const mcqQuestions = questions.filter((question) => !isCodingQuestion(question));
    mcqQuestions.forEach((question) => {
        const questionIndex = questions.indexOf(question);
        if (selectedAnswers[questionIndex] === question.correctAnswer) {
            score += question.points;
        }
    });

    const totalMarks = mcqQuestions.reduce((sum, question) => sum + question.points, 0);
    const percentage = Math.round((score / totalMarks) * 100);
    const review = questions.map((question, index) => {
        const selectedAnswer = selectedAnswers[index];
        if (isCodingQuestion(question)) {
            return {
                type: "coding",
                question: question.question,
                inputFormat: question.inputFormat || "",
                outputFormat: question.outputFormat || "",
                constraints: question.constraints || "",
                testCases: question.testCases || [],
                points: question.points,
                language: selectedAnswer?.language || "",
                codeByLanguage: selectedAnswer?.codeByLanguage || {},
                answered: isQuestionAnswered(question, selectedAnswer),
            };
        }
        return {
            type: "mcq",
            question: question.question,
            options: [...question.options],
            selectedAnswer,
            correctAnswer: question.correctAnswer,
            points: question.points,
            isCorrect: selectedAnswer === question.correctAnswer,
        };
    });
    const codingSubmittedCount = review.filter((answer) =>
        answer.type === "coding" && answer.answered
    ).length;
    const pendingReview = questions.some(isCodingQuestion);
    const correctCount = review.filter((answer) => answer.type === "mcq" && answer.isCorrect).length;
    const unansweredCount = questions.filter((question, index) =>
        !isQuestionAnswered(question, selectedAnswers[index])
    ).length;
    const mcqAnsweredCount = mcqQuestions.filter((question) =>
        isQuestionAnswered(question, selectedAnswers[questions.indexOf(question)])
    ).length;
    const incorrectCount = mcqAnsweredCount - correctCount;

    const studentProfile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
    const currentStudentName = studentProfile?.name || "Student";
    const result = {
        hallTicket: studentProfile?.hallTicket || "",
        studentName: currentStudentName,
        subject: examSets[currentSubject].scheduleId
            ? getScheduledExams().find((exam) => exam.id === examSets[currentSubject].scheduleId)?.title || currentSubject
            : currentSubject.replace(/^\d+\.\s*/, ""),
        score,
        totalMarks,
        percentage,
        grade: pendingReview ? "Pending review" : calculateGrade(score, totalMarks),
        pendingReview,
        codingSubmittedCount,
        codingQuestionCount: questions.filter(isCodingQuestion).length,
        correctCount,
        incorrectCount,
        unansweredCount,
        review,
        completedAt: new Date().toISOString(),
    };

    if (studentProfile?.hallTicket) {
        const results = getStudentResults();
        results.unshift(result);
        localStorage.setItem("examResults", JSON.stringify(results));
        const students = getStudentAccounts();
        const student = students.find((entry) =>
            entry.hallTicket?.toLowerCase() === studentProfile.hallTicket.toLowerCase()
        );
        if (student && !pendingReview) {
            student.score = percentage;
            saveStudentAccounts(students);
        }
        renderStudentDashboard();
        renderAdminResults();
    }
    const draftKey = getExamDraftKey();
    if (draftKey) localStorage.removeItem(draftKey);

    if (studentProfile?.hallTicket) {
        saveLeaderboardFromResults(getStudentResults());
        renderLeaderboard();
    }

    showResult(result, true);
}

function showResult(result, isNewSubmission) {
    const correctCount = Number(result.correctCount) || 0;
    const incorrectCount = Number(result.incorrectCount) || 0;
    const unansweredCount = Number(result.unansweredCount) || 0;
    const pendingReview = result.pendingReview === true;
    resultHeading.textContent = isNewSubmission ? "Exam Submitted" : "Examination Review";
    resultMessage.textContent = pendingReview
        ? `Your coding solutions are awaiting manual review. Your MCQ score is ${result.score} out of ${result.totalMarks} marks (${result.percentage}%).`
        : `You scored ${result.score} out of ${result.totalMarks} marks (${result.percentage}%).`;
    resultScoreLabel.textContent = pendingReview ? "MCQ score" : "Score";
    pendingReviewNote.classList.toggle("hidden", !pendingReview);
    finalScoreEl.textContent = `${result.score}/${result.totalMarks}`;
    gradeBox.textContent = pendingReview ? "Coding answers pending manual review" : `Grade: ${result.grade}`;
    correctAnswersCountEl.textContent = String(correctCount);
    incorrectAnswersCountEl.textContent = String(incorrectCount);
    unansweredAnswersCountEl.textContent = String(unansweredCount);
    resultFeedbackEl.textContent = pendingReview
        ? "Your MCQ score is provisional until your coding solutions are reviewed."
        : getPerformanceFeedback(Number(result.percentage) || 0);
    restartBtn.hidden = !isNewSubmission;
    answerReviewList.replaceChildren();
    answerReview.hidden = !Array.isArray(result.review);
    if (Array.isArray(result.review)) {
        result.review.forEach((answer, index) => {
            const item = document.createElement("li");
            const question = document.createElement("p");
            question.textContent = `${index + 1}. ${answer.question}`;
            if (answer.type === "coding") {
                const details = document.createElement("div");
                [answer.inputFormat, answer.outputFormat, answer.constraints]
                    .filter(Boolean)
                    .forEach((detail) => {
                        const paragraph = document.createElement("p");
                        paragraph.textContent = detail;
                        details.appendChild(paragraph);
                    });
                (answer.testCases || []).forEach((testCase, testIndex) => {
                    const example = document.createElement("section");
                    const heading = document.createElement("strong");
                    heading.textContent = `Sample ${testIndex + 1}`;
                    const testInput = document.createElement("pre");
                    testInput.textContent = `Input:\n${testCase.input}`;
                    const testOutput = document.createElement("pre");
                    testOutput.textContent = `Expected output:\n${testCase.output}`;
                    const explanation = document.createElement("p");
                    explanation.textContent = testCase.explanation;
                    example.append(heading, testInput, testOutput, explanation);
                    details.appendChild(example);
                });
                const codeLanguages = Object.entries(answer.codeByLanguage || {})
                    .filter(([, code]) => typeof code === "string" && code.trim());
                const answerContent = document.createElement("div");
                if (codeLanguages.length) {
                    codeLanguages.forEach(([language, code]) => {
                        const languageLabel = document.createElement("strong");
                        languageLabel.textContent = language;
                        const codeBlock = document.createElement("pre");
                        codeBlock.textContent = code;
                        answerContent.append(languageLabel, codeBlock);
                    });
                } else {
                    answerContent.textContent = "No code submitted.";
                }
                const status = document.createElement("small");
                status.className = "answer-unanswered";
                status.textContent = answer.answered
                    ? `Pending manual review · ${answer.points} marks`
                    : "Unanswered · 0 marks";
                item.append(question, details, answerContent, status);
            } else {
                const options = document.createElement("ul");
                (answer.options || []).forEach((option, optionIndex) => {
                    const optionItem = document.createElement("li");
                    const isCorrect = optionIndex === answer.correctAnswer;
                    const isSelected = optionIndex === answer.selectedAnswer;
                    optionItem.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}${isCorrect ? " — Correct answer" : ""}${isSelected ? " — Your answer" : ""}`;
                    if (isCorrect) {
                        optionItem.className = "answer-correct";
                    } else if (isSelected) {
                        optionItem.className = "answer-incorrect";
                    }
                    options.appendChild(optionItem);
                });
                const status = document.createElement("small");
                status.className = answer.isCorrect
                    ? "answer-correct"
                    : answer.selectedAnswer === null
                        ? "answer-unanswered"
                        : "answer-incorrect";
                status.textContent = answer.isCorrect
                    ? `Correct · ${answer.points} marks`
                    : answer.selectedAnswer === null
                        ? "Unanswered · 0 marks"
                        : "Incorrect · 0 marks";
                item.append(question, options, status);
            }
            answerReviewList.appendChild(item);
        });
    }
    answerReview.open = true;
    resultModal.classList.remove("hidden");
}

function getPerformanceFeedback(percentage) {
    if (percentage >= 90) return "Outstanding work! You have a strong command of this subject.";
    if (percentage >= 75) return "Great result! Review the missed questions to strengthen your understanding.";
    if (percentage >= 50) return "Good progress. A focused review of the incorrect answers can lift your next score.";
    return "Keep practicing. Review each answer and revisit the core concepts before your next attempt.";
}

function restartExam() {
    const draftKey = getExamDraftKey();
    if (draftKey) localStorage.removeItem(draftKey);
    resetExamState();
    renderQuestion();
    updateNavigator();
    renderTimer();
    resultModal.classList.add("hidden");
    beginCurrentExam();
}

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        renderQuestion();
        updateNavigator();
        saveExamDraft();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < getCurrentQuestions().length - 1) {
        currentQuestionIndex += 1;
        renderQuestion();
        updateNavigator();
        saveExamDraft();
    } else {
        submitExam();
    }
});

submitBtn.addEventListener("click", submitExam);
submitMcqsBtn.addEventListener("click", submitExam);
restartBtn.addEventListener("click", restartExam);
closeResultBtn.addEventListener("click", () => resultModal.classList.add("hidden"));
reviewToggleBtn.addEventListener("click", () => {
    reviewedQuestions[currentQuestionIndex] = !reviewedQuestions[currentQuestionIndex];
    updateReviewToggle();
    updateNavigator();
    saveExamDraft();
});
startExamBtn.addEventListener("click", beginCurrentExam);

initializeTheme();
loadScheduledExams();
renderStudentDashboard();
populateAdminProfile();
updateAdminStudentStats();
renderStudentTable();
renderScheduledExams();
renderUpcomingExams();
renderAdminResults();
window.setInterval(() => {
    renderUpcomingExams();
    updateAdminExamStats();
}, 30000);

const savedProfile = JSON.parse(localStorage.getItem("examStudentProfile") || "null");
const savedStudentSession = JSON.parse(sessionStorage.getItem("examStudentSession") || "null");
const savedAdminSession = sessionStorage.getItem("examAdminSession");
localStorage.removeItem("examAdminSession");

if (savedAdminSession && getCurrentLoggedInAdmin() &&
    getAdminAccounts().some((account) =>
        account.username.toLowerCase() === getCurrentLoggedInAdmin().username.toLowerCase()
    )) {
    authScreen.classList.add("hidden");
    appShell.classList.add("hidden");
    adminDashboard.classList.remove("hidden");
} else if (savedProfile && savedStudentSession &&
    savedProfile.hallTicket?.toLowerCase() === savedStudentSession.hallTicket?.toLowerCase()) {
    setStudentProfile(savedProfile);
    authScreen.classList.add("hidden");
    appShell.classList.remove("hidden");
    adminDashboard.classList.add("hidden");
} else {
    sessionStorage.removeItem("examStudentSession");
    appShell.classList.add("hidden");
    adminDashboard.classList.add("hidden");
    setAuthMode("student");
}

buildSubjectCards();
updateSelectedSubject();
resetExamState();
restoreExamDraft();
renderQuestion();
updateNavigator();
renderTimer();
renderLeaderboard();
