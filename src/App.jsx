import { useEffect, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";

export default function QuestionComponent() {
  const questions = {
    javascript: [
      // --- MCQ TYPE QUESTIONS ---
      {
        type: "mcq",
        question: "Which keyword can be used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
        explanation: "JavaScript supports variable declaration using var, let, and const.",
      },
      {
        type: "mcq",
        question: "Which of the following is a primitive data type in JavaScript?",
        options: ["Array", "Object", "String", "Function"],
        answer: "String",
        explanation: "String is a primitive data type, while Array, Object, and Function are reference types.",
      },
      {
        type: "mcq",
        question: "What is the output of `typeof NaN`?",
        options: ["'NaN'", "'number'", "'undefined'", "'object'"],
        answer: "'number'",
        explanation: "NaN stands for Not-a-Number but its type is still 'number'.",
      },
      {
        type: "mcq",
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()",
        explanation: "JSON.parse() parses a JSON string and returns a JavaScript object.",
      },
      {
        type: "mcq",
        question: "Which method converts a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.convert()"],
        answer: "JSON.stringify()",
        explanation: "JSON.stringify() serializes a JavaScript object into JSON format.",
      },
      {
        type: "mcq",
        question: "Which operator is used for exponentiation?",
        options: ["^", "**", "%", "//"],
        answer: "**",
        explanation: "The exponentiation operator (**) raises the left operand to the power of the right operand.",
      },
      {
        type: "mcq",
        question: "What will `Boolean('false')` return?",
        options: ["false", "true", "undefined", "error"],
        answer: "true",
        explanation: "Any non-empty string is truthy in JavaScript.",
      },
      {
        type: "mcq",
        question: "Which method removes the last element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        answer: "pop()",
        explanation: "pop() removes and returns the last element of an array.",
      },
      {
        type: "mcq",
        question: "Which method removes the first element from an array?",
        options: ["pop()", "shift()", "splice()", "slice()"],
        answer: "shift()",
        explanation: "shift() removes and returns the first element of an array.",
      },
      {
        type: "mcq",
        question: "Which method creates a new array by applying a function to every element?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: "map()",
        explanation: "map() transforms each element and returns a new array.",
      },
      {
        type: "mcq",
        question: "Which method returns elements that satisfy a condition?",
        options: ["filter()", "find()", "map()", "every()"],
        answer: "filter()",
        explanation: "filter() returns a new array containing matching elements.",
      },
      {
        type: "mcq",
        question: "Which method returns the first matching element?",
        options: ["find()", "filter()", "map()", "reduce()"],
        answer: "find()",
        explanation: "find() returns the first element that satisfies the condition.",
      },
      {
        type: "mcq",
        question: "What does `Array.isArray([])` return?",
        options: ["true", "false", "undefined", "error"],
        answer: "true",
        explanation: "Array.isArray() checks whether a value is an array.",
      },
      {
        type: "mcq",
        question: "What is the result of `2 + '2'`?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22",
        explanation: "The number is coerced into a string and concatenated.",
      },
      {
        type: "mcq",
        question: "Which loop executes at least once?",
        options: ["for", "while", "do...while", "for...of"],
        answer: "do...while",
        explanation: "The condition is checked after the loop body executes.",
      },
      {
        type: "mcq",
        question: "Which statement is used to exit a loop?",
        options: ["continue", "exit", "break", "return"],
        answer: "break",
        explanation: "break immediately terminates the loop.",
      },
      {
        type: "mcq",
        question: "Which statement skips the current iteration of a loop?",
        options: ["continue", "break", "skip", "return"],
        answer: "continue",
        explanation: "continue moves to the next iteration.",
      },
      {
        type: "mcq",
        question: "What is the output of `typeof undefined`?",
        options: ["'null'", "'undefined'", "'object'", "'string'"],
        answer: "'undefined'",
        explanation: "undefined has its own type.",
      },
      {
        type: "mcq",
        question: "Which symbol is used for single-line comments?",
        options: ["<!-- -->", "//", "/* */", "#"],
        answer: "//",
        explanation: "Double slashes create single-line comments.",
      },
      {
        type: "mcq",
        question: "Which symbol is used for multi-line comments?",
        options: ["//", "<!---->", "/* */", "#"],
        answer: "/* */",
        explanation: "Multi-line comments are enclosed within /* and */.",
      },
      {
        type: "mcq",
        question: "Which function displays a popup alert box?",
        options: ["prompt()", "alert()", "confirm()", "popup()"],
        answer: "alert()",
        explanation: "alert() displays a message box.",
      },
      {
        type: "mcq",
        question: "Which function accepts user input via a dialog box?",
        options: ["confirm()", "alert()", "prompt()", "input()"],
        answer: "prompt()",
        explanation: "prompt() displays an input dialog.",
      },
      {
        type: "mcq",
        question: "What does `===` compare?",
        options: ["Only values", "Only types", "Value and type", "References only"],
        answer: "Value and type",
        explanation: "Strict equality compares both value and datatype.",
      },
      {
        type: "mcq",
        question: "What is the result of `5 == '5'`?",
        options: ["true", "false", "error", "undefined"],
        answer: "true",
        explanation: "Loose equality performs type coercion.",
      },
      {
        type: "mcq",
        question: "What is the result of `5 === '5'`?",
        options: ["true", "false", "error", "undefined"],
        answer: "false",
        explanation: "Types are different: number vs string.",
      },
      {
        type: "mcq",
        question: "Which keyword defines a function?",
        options: ["method", "function", "func", "define"],
        answer: "function",
        explanation: "Functions are declared using the function keyword.",
      },
      {
        type: "mcq",
        question: "Which keyword refers to the current object?",
        options: ["self", "current", "this", "object"],
        answer: "this",
        explanation: "`this` refers to the execution context.",
      },
      {
        type: "mcq",
        question: "Which method joins array elements into a string?",
        options: ["concat()", "join()", "merge()", "combine()"],
        answer: "join()",
        explanation: "join() concatenates array elements into a string.",
      },
      {
        type: "mcq",
        question: "Which method splits a string into an array?",
        options: ["slice()", "join()", "split()", "splice()"],
        answer: "split()",
        explanation: "split() breaks a string into an array.",
      },
      {
        type: "mcq",
        question: "Which method returns the length of a string?",
        options: ["size()", "length()", "length", "count()"],
        answer: "length",
        explanation: "length is a property, not a method.",
      },
      {
        type: "mcq",
        question: "What is closure in JavaScript?",
        options: [
          "A loop",
          "A function with access to outer scope",
          "An object",
          "A class"
        ],
        answer: "A function with access to outer scope",
        explanation: "Closures allow inner functions to access variables from outer scopes.",
      },
      {
        type: "mcq",
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "try", "throw", "All of the above"],
        answer: "All of the above",
        explanation: "JavaScript uses try, catch, and throw for error handling.",
      },
      {
        type: "mcq",
        question: "What is the default value of an uninitialized variable declared with let?",
        options: ["null", "0", "undefined", "false"],
        answer: "undefined",
        explanation: "Variables declared but not assigned are undefined.",
      },
      {
        type: "mcq",
        question: "Which array method combines all elements into a single value?",
        options: ["reduce()", "map()", "filter()", "find()"],
        answer: "reduce()",
        explanation: "reduce() accumulates values into a single result.",
      },
      {
        type: "mcq",
        question: "Which operator checks whether a property exists in an object?",
        options: ["instanceof", "typeof", "in", "has"],
        answer: "in",
        explanation: "The in operator checks property existence.",
      },
      {
        type: "mcq",
        question: "Which keyword creates a class?",
        options: ["object", "constructor", "class", "prototype"],
        answer: "class",
        explanation: "ES6 introduced the class keyword.",
      },
      {
        type: "mcq",
        question: "What is the output of `Math.floor(4.9)`?",
        options: ["4", "5", "4.9", "error"],
        answer: "4",
        explanation: "Math.floor() rounds down.",
      },
      {
        type: "mcq",
        question: "What is the output of `Math.ceil(4.1)`?",
        options: ["4", "5", "4.1", "error"],
        answer: "5",
        explanation: "Math.ceil() rounds up.",
      },
      {
        type: "mcq",
        question: "Which method removes a specific portion of an array?",
        options: ["splice()", "slice()", "split()", "join()"],
        answer: "splice()",
        explanation: "splice() can add/remove elements from an array.",
      },
      {
        type: "mcq",
        question: "Which method returns a shallow copy of a portion of an array?",
        options: ["splice()", "slice()", "cut()", "copy()"],
        answer: "slice()",
        explanation: "slice() does not modify the original array.",
      },
      {
        type: "mcq",
        question: "Which keyword is used to import modules?",
        options: ["include", "require", "import", "using"],
        answer: "import",
        explanation: "ES Modules use the import keyword.",
      },
      {
        type: "mcq",
        question: "Which keyword exports values from a module?",
        options: ["export", "share", "public", "module"],
        answer: "export",
        explanation: "export makes functions, variables, or classes available.",
      },
      {
        type: "mcq",
        question: "What is the output of `Number('123')`?",
        options: ["123", "'123'", "NaN", "error"],
        answer: "123",
        explanation: "Number() converts strings into numbers.",
      },
      {
        type: "mcq",
        question: "Which event occurs when a user clicks an element?",
        options: ["onhover", "onclick", "onchange", "onsubmit"],
        answer: "onclick",
        explanation: "onclick triggers when an element is clicked.",
      },
      {
        type: "mcq",
        question: "Which method selects an element by ID?",
        options: [
          "querySelector()",
          "getElementById()",
          "getElementsByClassName()",
          "findElement()"
        ],
        answer: "getElementById()",
        explanation: "getElementById() retrieves an element by its ID.",
      },
      {
        type: "mcq",
        question: "Which method adds an element at the beginning of an array?",
        options: ["push()", "shift()", "unshift()", "prepend()"],
        answer: "unshift()",
        explanation: "unshift() adds elements to the start of an array.",
      },
      {
        type: "mcq",
        question: "What is the output of `[1,2,3].length`?",
        options: ["2", "3", "4", "undefined"],
        answer: "3",
        explanation: "The array contains three elements.",
      },
      {
        type: "mcq",
        question: "Which method checks whether at least one element satisfies a condition?",
        options: ["some()", "every()", "find()", "filter()"],
        answer: "some()",
        explanation: "some() returns true if at least one element matches.",
      },
      {
        type: "mcq",
        question: "Which method checks whether all elements satisfy a condition?",
        options: ["every()", "some()", "find()", "filter()"],
        answer: "every()",
        explanation: "every() returns true only if all elements match.",
      },
      {
        type: "mcq",
        question: "Which value is falsy in JavaScript?",
        options: ["'0'", "'false'", "[]", "0"],
        answer: "0",
        explanation: "0 is one of JavaScript's falsy values.",
      },
      {
        type: "mcq",
        question: "What is the output of `typeof []`?",
        options: ["'array'", "'object'", "'list'", "'undefined'"],
        answer: "'object'",
        explanation: "Arrays are objects in JavaScript.",
      },

      // --- NUMERICAL / CODE CHALLENGES ---
      {
        type: "code",
        question: "Find the factorial of a given number N.",
        explanation: "Use a loop from 1 to N and multiply all numbers together. Example: 5! = 120.",
      },
      {
        type: "code",
        question: "Print the first N terms of the Fibonacci series.",
        explanation: "Use variables a and b. Generate the next term as a + b and update values in a loop.",
      },
      {
        type: "code",
        question: "Check whether a given number is prime.",
        explanation: "Try dividing the number by all integers from 2 to √N. If divisible, it's not prime.",
      },
      {
        type: "code",
        question: "Find the largest digit in a number.",
        explanation: "Extract digits using % 10 and track the maximum digit encountered.",
      },
      {
        type: "code",
        question: "Find the smallest digit in a number.",
        explanation: "Extract digits one by one and keep updating the minimum digit.",
      },
      {
        type: "code",
        question: "Calculate the sum of all even numbers from 1 to N.",
        explanation: "Loop through numbers and add only those divisible by 2.",
      },
      {
        type: "code",
        question: "Find the product of all digits of a given number.",
        explanation: "Extract digits using % 10 and multiply them into a product variable.",
      },
      {
        type: "code",
        question: "Count the number of even and odd digits in a number.",
        explanation: "Extract digits individually and check digit % 2.",
      },
      {
        type: "code",
        question: "Find the GCD (Greatest Common Divisor) of two numbers.",
        explanation: "Use the Euclidean Algorithm: repeatedly replace (a, b) with (b, a % b) until b becomes 0.",
      },
      {
        type: "code",
        question: "Find the LCM (Least Common Multiple) of two numbers.",
        explanation: "Use the formula: LCM = (a * b) / GCD(a, b). First calculate GCD.",
      },
    ],

    numpy: [
      // --- PYTHON BASICS: LOOPS & IF/ELSE (Questions 1-15) ---
      {
        type: "mcq",
        question: "What will be the output of the following Python code?\n\nx = [1, 2, 3]\nfor i in x:\n    x.append(i)\n    print(i)\n    break",
        options: ["1", "1\n2\n3", "Infinite Loop", "Runtime Error"],
        answer: "1",
        explanation: "The loop starts with the first element `1`, appends it to the list, prints `1`, and then immediately hits the `break` statement, terminating the loop."
      },
      {
        type: "mcq",
        question: "Which of the following blocks executes in a Python 'for...else' loop structure?",
        options: [
          "The 'else' block executes only if the loop terminates via a 'break' statement.",
          "The 'else' block executes only if the loop completes normally without encountering a 'break'.",
          "The 'else' block executes before the loop starts.",
          "The 'else' block executes after every single iteration of the loop."
        ],
        answer: "The 'else' block executes only if the loop completes normally without encountering a 'break'.",
        explanation: "In Python, the `else` clause of a loop executes when the loop condition becomes false, meaning it finished all iterations without being aborted by a `break`."
      },
      {
        type: "mcq",
        question: "What is the output of this Python snippet?\n\na = 10\nb = 20\nx = a if a > b else b\nprint(x)",
        options: ["10", "20", "True", "False"],
        answer: "20",
        explanation: "This is Python's ternary operator evaluation. Since `a > b` (10 > 20) is False, the expression evaluates to the `else` value, which is `b` (20)."
      },
      {
        type: "mcq",
        question: "What will `range(5, 1, -2)` yield when converted to a list?",
        options: ["[5, 3, 1]", "[5, 3]", "[5, 4, 3, 2, 1]", "[]"],
        answer: "[5, 3]",
        explanation: "The range starts at 5 and steps downward by -2. It yields 5, then 3. It stops before reaching the exclusive stop value of 1."
      },
      {
        type: "mcq",
        question: "What is the result of the following condition?\n\nprint(bool([]) or bool('0') and bool(None))",
        options: ["True", "False", "None", "Error"],
        answer: "False",
        explanation: "`bool([])` is False. `bool('0')` is True (non-empty string). `bool(None)` is False. The expression simplifies to `False or (True and False)`, which evaluates to `False` due to operator precedence (`and` before `or`)."
      },
      {
        type: "mcq",
        question: "What will be the output of the following code?\n\ni = 1\nwhile i < 4:\n    print(i, end=' ')\n    i += 1\n    if i == 3:\n        continue",
        options: ["1 2 ", "1 2 3 ", "1 2 3 4 ", "1 3 "],
        answer: "1 2 3 ",
        explanation: "The loop prints `1` (i becomes 2), prints `2` (i becomes 3, triggers continue but the print statement was already executed for this turn), prints `3` (i becomes 4). The loop then terminates because 4 is not less than 4."
      },
      {
        type: "mcq",
        question: "How do you check if a variable 'x' is an instance of a specific type (e.g., int) in Python conditionally?",
        options: ["if type(x) == 'int':", "if x.isinstance(int):", "if isinstance(x, int):", "if x subclassof int:"],
        answer: "if isinstance(x, int):",
        explanation: "The built-in `isinstance(object, classinfo)` function is the recommended and standard way to check an object's type in Python, accounting for inheritance."
      },
      {
        type: "mcq",
        question: "What will be printed?\n\ncount = 0\nif count:\n    print('A')\nelif not count:\n    print('B')\nelse:\n    print('C')",
        options: ["A", "B", "C", "Nothing"],
        answer: "B",
        explanation: "The integer `0` evaluates to `False` in a boolean context. Therefore, `if count` is skipped. `elif not count` becomes `elif True`, executing the block that prints 'B'."
      },
      {
        type: "mcq",
        question: "Which keyword can be used to skip the rest of the current loop iteration and move directly to the next one?",
        options: ["break", "pass", "continue", "skip"],
        answer: "continue",
        explanation: "The `continue` statement rejects all remaining statements in the current iteration of the loop and moves the control back to the top of the loop."
      },
      {
        type: "mcq",
        question: "What does the `pass` statement do in a Python conditional block?",
        options: [
          "It terminates the program execution safely.",
          "It acts as a placeholder doing nothing, allowing empty code syntactically.",
          "It skips the next conditional check.",
          "It returns a True status to the parent scope."
        ],
        answer: "It acts as a placeholder doing nothing, allowing empty code syntactically.",
        explanation: "`pass` is a null statement. It is used when a statement is required syntactically but you do not want any command or code to execute."
      },
      {
        type: "mcq",
        question: "What is the output of the following nested loop code?\n\nfor i in range(1, 3):\n    for j in range(1, 3):\n        if i == j:\n            print(i, j)",
        options: ["1 1\n2 2", "1 2\n2 1", "1 1", "2 2"],
        answer: "1 1\n2 2",
        explanation: "The loops check pairings of 1 and 2. The condition `i == j` matches when i=1, j=1 and when i=2, j=2."
      },
      {
        type: "mcq",
        question: "What happens if an `if` statement evaluates a non-empty list condition like `if [0]:`?",
        options: [
          "It evaluates to False because the value inside is zero.",
          "It throws a TypeError.",
          "It evaluates to True because the list is not empty.",
          "It depends on system architecture."
        ],
        answer: "It evaluates to True because the list is not empty.",
        explanation: "In Python, any non-empty container (list, dictionary, string, tuple) evaluates to truthy values, regardless of what elements reside inside it."
      },
      {
        type: "mcq",
        question: "What will be printed by the code below?\n\nx = 5\nwhile x > 0:\n    x -= 1\n    if x == 2:\n        break\nprint(x)",
        options: ["5", "3", "2", "0"],
        answer: "2",
        explanation: "The loop decrements `x`. When `x` drops from 3 to 2, the condition `x == 2` evaluates to True, and the `break` statement instantly halts the loop. The subsequent print outputs the current value of `x`, which is 2."
      },
      {
        type: "mcq",
        question: "Which of the following is equivalent to `if not (a and b):` according to De Morgan's laws?",
        options: ["if not a and not b:", "if not a or not b:", "if a or b:", "if a and not b:"],
        answer: "if not a or not b:",
        explanation: "According to logic rules (De Morgan's laws), the negation of a conjunction (`and`) is the disjunction (`or`) of the negations."
      },
      {
        type: "mcq",
        question: "What is the output of:\n\nx = 10\ny = 5\nif x > 5:\n    if y > 10:\n        print('One')\n    else:\n        print('Two')",
        options: ["One", "Two", "No output", "SyntaxError"],
        answer: "Two",
        explanation: "The outer condition `x > 5` passes. The inner condition `y > 10` (5 > 10) fails, routing execution to the inner `else` block, printing 'Two'."
      },

      // --- MYSQL (Questions 16-30) ---
      {
        type: "mcq",
        question: "Which SQL clause is used to filter records resulting from an aggregate function or a GROUP BY query?",
        options: ["WHERE", "HAVING", "ORDER BY", "SELECT DISTINCT"],
        answer: "HAVING",
        explanation: "The `HAVING` clause was added to SQL because the `WHERE` keyword could not be used with aggregate functions."
      },
      {
        type: "mcq",
        question: "Which function is used in MySQL to return the number of rows that match a specified criterion?",
        options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
        answer: "COUNT()",
        explanation: "The `COUNT()` function returns the number of rows that matches a specified criterion."
      },
      {
        type: "mcq",
        question: "What does a LEFT JOIN return in MySQL?",
        options: [
          "Only matched records from both tables.",
          "All records from the left table, and the matched records from the right table.",
          "All records from the right table, and the matched records from the left table.",
          "All records from both tables regardless of match."
        ],
        answer: "All records from the left table, and the matched records from the right table.",
        explanation: "The `LEFT JOIN` keyword returns all records from the left table (table1), and the matching records from the right table (table2). Missing matches from the right result in NULL values."
      },
      {
        type: "mcq",
        question: "Which of the following MySQL data types is most appropriate for storing static, fixed-length alphanumeric codes (e.g., ISO country codes)?",
        options: ["VARCHAR", "TEXT", "CHAR", "BLOB"],
        answer: "CHAR",
        explanation: "`CHAR` is used for fixed-length strings. It is faster and space-efficient compared to `VARCHAR` when all entries are exactly the same character length."
      },
      {
        type: "mcq",
        question: "To eliminate duplicate values from a query result, which MySQL keyword should you use?",
        options: ["UNIQUE", "DIFFERENT", "DISTINCT", "GROUP UNIQUE"],
        answer: "DISTINCT",
        explanation: "The `SELECT DISTINCT` statement is used to return only distinct (different) values from specified column spaces."
      },
      {
        type: "mcq",
        question: "What is the purpose of the MySQL `LIKE` operator?",
        options: [
          "To check if two tables share matching schemas.",
          "To search for a specified pattern in a column.",
          "To combine two queries into a single dataset.",
          "To check numerical equality."
        ],
        answer: "To search for a specified pattern in a column.",
        explanation: "The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column, frequently utilizing wildcards like `%` and `_`."
      },
      {
        type: "mcq",
        question: "Which wildcard character represents zero, one, or multiple characters in a MySQL `LIKE` pattern match?",
        options: ["_", "*", "%", "?"],
        answer: "%",
        explanation: "In MySQL, the percent sign (`%`) represents zero, one, or multiple characters, while the underscore (`_`) represents a single character."
      },
      {
        type: "mcq",
        question: "How do you sort a query result set in descending order based on a column named 'salary'?",
        options: ["ORDER BY salary DESC", "SORT BY salary DOWN", "ORDER BY salary ASC", "GROUP BY salary DESC"],
        answer: "ORDER BY salary DESC",
        explanation: "The `ORDER BY` keyword sorts results in ascending order by default. To sort the records in descending order, use the `DESC` keyword."
      },
      {
        type: "mcq",
        question: "What is the constraint used to uniquely identify each record in a MySQL table?",
        options: ["FOREIGN KEY", "UNIQUE KEY", "PRIMARY KEY", "CHECK KEY"],
        answer: "PRIMARY KEY",
        explanation: "The `PRIMARY KEY` constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values."
      },
      {
        type: "mcq",
        question: "Which command is used to remove both data and structure of a table permanently from a MySQL database?",
        options: ["DELETE TABLE", "TRUNCATE TABLE", "DROP TABLE", "REMOVE TABLE"],
        answer: "DROP TABLE",
        explanation: "`DROP TABLE` removes the table definition along with all its structural indexing, constraints, and data. `TRUNCATE` removes only the rows, retaining the schema structures."
      },
      {
        type: "mcq",
        question: "What does the `COALESCE()` function do in MySQL?",
        options: [
          "It merges two tables based on primary keys.",
          "It returns the first non-NULL value in a list of arguments.",
          "It calculates the geometric mean of a dataset.",
          "It converts string entries into lowercase strings."
        ],
        answer: "It returns the first non-NULL value in a list of arguments.",
        explanation: "The `COALESCE()` function returns the first non-null value in the sequence of its parameter inputs."
      },
      {
        type: "mcq",
        question: "Which SQL statement is used to insert new records into a MySQL table?",
        options: ["ADD NEW", "INSERT INTO", "UPDATE RECORD", "MAKE ROW"],
        answer: "INSERT INTO",
        explanation: "The `INSERT INTO` statement is the standard command used to populate a table with new rows of data."
      },
      {
        type: "mcq",
        question: "In MySQL, what is the default port number for connections?",
        options: ["8080", "21", "3306", "5432"],
        answer: "3306",
        explanation: "Port 3306 is the default port assigned and utilized globally by the MySQL database server engine."
      },
      {
        type: "mcq",
        question: "What clause is used to restrict the maximum number of rows returned by a query in MySQL?",
        options: ["TOP", "LIMIT", "ROWNUM", "FETCH FIRST"],
        answer: "LIMIT",
        explanation: "MySQL uses the `LIMIT` clause at the tail end of queries to specify the maximum number of records to fetch and return."
      },
      {
        type: "mcq",
        question: "Which constraint establishes a relationship link between records in two separate tables?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "LINKED KEY", "INDEX KEY"],
        answer: "FOREIGN KEY",
        explanation: "A `FOREIGN KEY` is a field (or collection of fields) in one table, that refers to the `PRIMARY KEY` in another table."
      },

      // --- BASICS OF NUMPY (Questions 31-40) ---
      {
        type: "mcq",
        question: "Which of the following functions creates a 1D NumPy array with evenly spaced values within a given interval?",
        options: ["np.linspace()", "np.arange()", "Both np.arange() and np.linspace()", "np.array_split()"],
        answer: "Both np.arange() and np.linspace()",
        explanation: "Both functions generate evenly spaced distributions; `np.arange` relies on user-defined steps, while `np.linspace` relies on a set count of sample points over a range."
      },
      {
        type: "mcq",
        question: "What attribute of a NumPy array provides the dimensions of the array as a tuple?",
        options: ["size", "ndim", "shape", "dtype"],
        answer: "shape",
        explanation: "The `shape` attribute returns a tuple of integers representing the dimensions of the specified ndarray."
      },
      {
        type: "mcq",
        question: "What happens when you execute the following element-wise operation?\n\nimport numpy as np\na = np.array([1, 2, 3])\nb = np.array([2, 2, 2])\nprint(a * b)",
        options: ["Error: Use np.dot for arrays", "[2, 4, 6]", "[1, 4, 6]", "6"],
        answer: "[2, 4, 6]",
        explanation: "The asterisk operator `*` performs element-wise multiplication on NumPy arrays, unlike standard Python lists where it represents sequence repetition."
      },
      {
        type: "mcq",
        question: "What is the terminology used to describe how NumPy treats arrays with different shapes during arithmetic operations?",
        options: ["Vectorizing", "Slicing", "Broadcasting", "Reshaping"],
        answer: "Broadcasting",
        explanation: "Broadcasting is NumPy's mechanism to allow arithmetic operations on arrays of different shapes, expanding the smaller array to match the dimensions of the larger one logically."
      },
      {
        type: "mcq",
        question: "How do you change the structural configuration of a NumPy array without changing its underlying data elements?",
        options: ["np.modify_shape()", "arr.reshape()", "arr.resize()", "arr.reorganize()"],
        answer: "arr.reshape()",
        explanation: "The `reshape()` method changes the shape of an array without changing its data elements, provided the target dimension volume matches the original collection volume."
      },
      {
        type: "mcq",
        question: "What is the output of the following array slice operation?\n\nimport numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr[:, 1])",
        options: ["[2, 5]", "[[2], [5]]", "[1, 2, 3]", "[4, 5, 6]"],
        answer: "[2, 5]",
        explanation: "The slice operator uses `:` to select all rows, and `1` targets index column 1 (the middle column), yielding a 1D array of `[2, 5]`."
      },
      {
        type: "mcq",
        question: "Which of the following creates a 3x3 array containing only zeros?",
        options: ["np.zeros((3, 3))", "np.zeros(3, 3)", "np.empty((3, 3))", "np.make_zeros(3, 3)"],
        answer: "np.zeros((3, 3))",
        explanation: "The dimensions parameter for `np.zeros` must be passed either as an integer or as a sequence/tuple representing array shape dimensions, hence `((3, 3))`."
      },
      {
        type: "mcq",
        question: "What property does the `arr.ndim` attribute return for a NumPy array?",
        options: [
          "The datatype size of each element.",
          "The total element population inside the array.",
          "The number of dimensions (axes) of the array.",
          "The maximum value capacity."
        ],
        answer: "The number of dimensions (axes) of the array.",
        explanation: "`ndim` returns an integer value representing the number of dimensional layers or axes belonging to an array structural architecture."
      },
      {
        type: "mcq",
        question: "Which method calculates the average value across all items inside a NumPy array?",
        options: ["arr.avg()", "np.mean(arr)", "arr.median()", "np.average_value(arr)"],
        answer: "np.mean(arr)",
        explanation: "`np.mean()` is the standard tool for resolving arithmetic means across entire arrays or specific axes directions."
      },
      {
        type: "mcq",
        question: "What data structure does NumPy use as its core foundational element?",
        options: ["Matrix", "List", "ndarray", "DataFrame"],
        answer: "ndarray",
        explanation: "The central core feature of the entire NumPy package architecture is the homogeneous n-dimensional array, known as the `ndarray` object."
      },

      // --- LOGIC & NUMERICAL PROBLEMS (Questions 41-50) ---
      {
        type: "code",
        question: "Write an algorithm or strategy to find the sum of all digits of a number (e.g., 123 -> 6) in Python using a loop.",
        explanation: "Initialize a sum variable to 0. Use a while loop that runs while the number is greater than 0. In each iteration, extract the last digit using the modulo operator `num % 10`, add it to the sum, and then floor-divide the number by 10 (`num // 10`) to discard the processed digit."
      },
      {
        type: "code",
        question: "Explain how to determine if a number is a prime number using structural looping in Python efficiently.",
        explanation: "If the number is less than or equal to 1, it is not prime. Otherwise, run a loop from 2 up to the square root of the target number (`int(num**0.5) + 1`). If the target number is divisible by any loop variable (`num % i == 0`), flag it as non-prime and break; otherwise, it is prime."
      },
      {
        type: "code",
        question: "Provide a strategy to reverse an integer numerical value without turning it into a string datatype.",
        explanation: "Maintain a `reversed_num = 0` value tracking variable. Loop through the number while it is greater than zero. Multiply the current `reversed_num` by 10 to shift digits left, add the last digit of the number extracted via `num % 10`, and reduce the original value using floor division `num // 10`."
      },
      {
        type: "code",
        question: "Describe how to compute the factorial of a given integer using an iterative sequence loop.",
        explanation: "Initialize a tracking factor variable to 1. Using a loop through `range(1, n + 1)`, multiply the tracking variable by each current sequence index tracking value sequentially to accumulate the final total product."
      },
      {
        type: "code",
        question: "Outline a Python strategy using looping mechanisms to print the first N elements of the Fibonacci sequence.",
        explanation: "Initialize two tracker variables `a, b = 0, 1`. Run a loop for N repetitions. Inside the loop, print the current value of `a`, then update the variables simultaneously using the assignment statement `a, b = b, a + b` to move forward through the sequence."
      },
      {
        type: "code",
        question: "Given a NumPy array, write a plan to locate the exact indices of all elements containing values greater than a user-defined threshold X.",
        explanation: "Use the conditional statement `np.where(arr > X)`. This will return a tuple of index arrays corresponding to the positions along each dimension where the element satisfies the given boolean criteria."
      },
      {
        type: "code",
        question: "Design an approach to compute the matrix multiplication of two compatible 2D NumPy arrays without using manual loops.",
        explanation: "Utilize either the `np.dot(matrix_A, matrix_B)` function or the modern infix matrix multiplication operator `@` (`matrix_A @ matrix_B`). This relies on optimized, pre-compiled C-extensions for processing linear algebra transformations."
      },
      {
        type: "code",
        question: "Develop an algorithm to find the greatest common divisor (GCD) of two numbers using an iterative implementation of the Euclidean algorithm.",
        explanation: "Establish a loop that runs while the second number `b` is not zero. Inside the loop, update the variables by assigning `b` to `a`, and the remainder of `a divided by b` (`a % b`) to `b`. When the loop finishes, the variable `a` contains the GCD value."
      },
      {
        type: "code",
        question: "Explain how to calculate the standard deviation of an array using NumPy function operations.",
        explanation: "Pass the targeted array container to the `np.std(array)` function. This sums the squared deviations of each element from the array mean, divides by total length, and returns the computed square root."
      },
      {
        type: "code",
        question: "How can you count the total number of missing or NaN values within an arbitrary NumPy array?",
        explanation: "Combine boolean masking with accumulation functions. Run `np.isnan(arr)` to generate a matching array of booleans indicating element states, then use `.sum()` to count the total quantity of `True` evaluations."
      }
    ],
    python:
      [
        // ==========================================
        // NUMPY: ARRAY CREATION & BASICS (1-5)
        // ==========================================
        {
          type: "mcq",
          question: "Which of the following functions creates an array of a specified shape filled with a single, uniform value without utilizing random distribution functions?",
          options: [
            "`np.linspace`",
            "`np.full`",
            "`np.arange`",
            "`np.eye`"
          ],
          answer: "`np.full`",
          explanation: "`np.full` creates a new array of given shape and type, filled with the fill value provided in the second argument. `np.linspace` and `np.arange` create sequences, while `np.eye` creates an identity matrix."
        },
        {
          type: "code",
          question: "Outline a strategy using `np.arange` and array reshaping to create a 2D NumPy array containing numbers from 10 to 21 (inclusive) arranged in a 4x3 grid.",
          explanation: "Use `np.arange(10, 22)` to generate a 1D sequence of 12 numbers from 10 to 21. Chain or wrap this with the `.reshape(4, 3)` method to restructure the 12 elements into 4 rows and 3 columns."
        },
        {
          type: "mcq",
          question: "What is the key functional difference between `np.zeros((2, 3))` and `np.empty((2, 3))`?",
          options: [
            "`np.zeros` initializes all elements to absolute 0, while `np.empty` allocates memory without initializing values, leaving behind arbitrary leftover data.",
            "`np.zeros` creates an integer array, whereas `np.empty` explicitly creates an array of empty strings.",
            "`np.empty` automatically scales its dimensions based on runtime memory availability, while `np.zeros` is static.",
            "There is no difference; both initialize arrays containing exclusively 0.0."
          ],
          answer: "`np.zeros` initializes all elements to absolute 0, while `np.empty` allocates memory without initializing values, leaving behind arbitrary leftover data.",
          explanation: "`np.zeros` guarantees that every cell is safely initialized to 0. `np.empty` is slightly faster because it skips population, meaning its values are whatever random garbage was already sitting in that allocated block of system memory."
        },
        {
          type: "code",
          question: "Outline a strategy to generate a 1D NumPy array containing exactly 50 evenly spaced values spanning the closed interval from -5.0 to 5.0.",
          explanation: "Invoke `np.linspace(-5.0, 5.0, 50)`. The first two parameters establish the start and stop boundaries, and the third parameter specifies the total number of samples to generate within that range."
        },
        {
          type: "mcq",
          question: "If you call `np.array([1, 2, '3', 4.0])`, what will be the data type (`dtype`) of the resulting NumPy array?",
          options: [
            "`int64`",
            "`float64`",
            "`object`",
            "A string type (such as `<U32`)"
          ],
          answer: "A string type (such as `<U32`)",
          explanation: "NumPy arrays must have a homogeneous data type. When faced with a mix of integers, floats, and strings, NumPy upcasts everything to the most flexible type present to prevent data loss, which in this case is a Unicode string format."
        },

        // ==========================================
        // NUMPY: LOGICAL OPERATORS & VALUE REPLACEMENT (6-10)
        // ==========================================
        {
          type: "code",
          question: "Outline a strategy using boolean indexing (without using `np.where` or loops) to find all values greater than 100 in a NumPy array `data` and set them precisely to 100.",
          explanation: "Apply a direct boolean mask directly inside the bracket notation: `data[data > 100] = 100`. This isolates only the memory locations matching the true criteria and applies the new scalar value directly to them in-place."
        },
        {
          type: "mcq",
          question: "Consider an array `x = np.array([1, 5, 10])`. What will the expression `(x > 2) & (x < 8)` evaluate to?",
          options: [
            "`[False, True, False]`",
            "`True`",
            "`[True, True, False]`",
            "An Ambiguity ValueError"
          ],
          answer: "`[False, True, False]`",
          explanation: "The bitwise AND (`&`) acts element-wise. Element 1 (1) gives `False & True -> False`. Element 2 (5) gives `True & True -> True`. Element 3 (10) gives `True & False -> False`."
        },
        {
          type: "code",
          question: "Outline a strategy using `np.where` to inspect a 1D array `ages` and create a new array where values are replaced by the string 'Adult' if they are 18 or older, and 'Minor' otherwise.",
          explanation: "Use `np.where(ages >= 18, 'Adult', 'Minor')`. The condition checks each element; if true, the corresponding element from the first option ('Adult') is chosen, otherwise the second option ('Minor') is taken."
        },
        {
          type: "mcq",
          question: "When using `np.select(condlist, choicelist, default=0)`, what happens if an element in the target array satisfies multiple conditions listed in `condlist` simultaneously?",
          options: [
            "NumPy raises a `ValueError` alerting the developer to overlapping logic.",
            "The choice corresponding to the *first* condition met in `condlist` is applied.",
            "The choice corresponding to the *last* condition met in `condlist` overrides previous ones.",
            "The choices are combined or added together dynamically."
          ],
          answer: "The choice corresponding to the *first* condition met in `condlist` is applied.",
          explanation: "`np.select` evaluates conditions sequentially, in order of their appearance in `condlist`. The first condition that evaluates to `True` for an element determines its output value; subsequent matches are ignored."
        },
        {
          type: "code",
          question: "Outline a strategy using the bitwise NOT operator `~` to select all elements from a NumPy array `arr` that do *not* satisfy a predefined boolean mask called `is_even`.",
          explanation: "Apply the tilde operator directly to the boolean array within the indexing brackets: `arr[~is_even]`. This flips all `True` values to `False` and vice versa, effectively isolating the odd values."
        },

        // ==========================================
        // MYSQL: SELECT, CREATION & BASICS (11-15)
        // ==========================================
        {
          type: "mcq",
          question: "Which MySQL clause should be utilized to filter row results based on aggregate functions (like `COUNT` or `SUM`) after rows have already been grouped?",
          options: [
            "`WHERE`",
            "`HAVING`",
            "`ORDER BY`",
            "`QUALIFY`"
          ],
          answer: "`HAVING`",
          explanation: "The `WHERE` clause filters rows before grouping happens. Once rows are grouped via `GROUP BY`, you must use `HAVING` to apply conditions to the grouped summary fields."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy to create a table named `products` featuring a primary key integer `product_id`, a variable character field `sku` that must be unique, and an integer field `stock_count` that forces a constraint checking that values are greater than or equal to zero.",
          explanation: "Use `CREATE TABLE products (product_id INT PRIMARY KEY, sku VARCHAR(50) UNIQUE, stock_count INT, CONSTRAINT chk_stock CHECK (stock_count >= 0));`."
        },
        {
          type: "mcq",
          question: "In a MySQL `SELECT` statement, what is the core functional difference between using `DISTINCT` and `GROUP BY` without aggregate functions?",
          options: [
            "`DISTINCT` evaluates rows dynamically across all columns, while `GROUP BY` forces sorting and can be used with aggregate operations if modified later.",
            "`DISTINCT` can only be applied to a single column, whereas `GROUP BY` requires multiple tables.",
            "`GROUP BY` runs before the `WHERE` clause, while `DISTINCT` runs before the `FROM` clause.",
            "There is no difference; they compile to identical execution plans and both always require an index."
          ],
          answer: "`DISTINCT` evaluates rows dynamically across all columns, while `GROUP BY` forces sorting and can be used with aggregate operations if modified later.",
          explanation: "While both remove duplicate result rows, `GROUP BY` modifies the structure of the data pipeline to prepare for aggregation and enables the use of `HAVING`, whereas `DISTINCT` simply eliminates duplicate output rows from the final projection."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy to fetch the `department` name and the highest salary found within that department from a table named `staff`, keeping only departments whose maximum salary exceeds 90000.",
          explanation: "Write a query selecting `department` and `MAX(salary)`. Group by `department`, and append a `HAVING MAX(salary) > 90000` clause to filter out unqualified groups."
        },
        {
          type: "mcq",
          question: "What does the `DROP TABLE IF EXISTS inventory;` DDL command accomplish in MySQL?",
          options: [
            "It deletes all rows inside the `inventory` table but keeps the structure intact, ignoring errors if empty.",
            "It checks for the existence of the table schema name, deletes the entire structural definition and its data if present, and terminates smoothly without an error if it doesn't exist.",
            "It moves the table to a temporary system backup location.",
            "It removes the primary key index from the `inventory` table."
          ],
          answer: "It checks for the existence of the table schema name, deletes the entire structural definition and its data if present, and terminates smoothly without an error if it doesn't exist.",
          explanation: "Using `IF EXISTS` prevents MySQL from throwing a fatal runtime exception if the table has already been removed or never existed, making deployment and cleanup scripts much more robust."
        },

        // ==========================================
        // MYSQL: JOINS & RELATIONS (16-20)
        // ==========================================
        {
          type: "mcq",
          question: "If Table A has 5 rows and Table B has 4 rows, how many rows will a `CROSS JOIN` between Table A and Table B produce?",
          options: [
            "9 rows",
            "5 rows",
            "20 rows",
            "0 rows"
          ],
          answer: "20 rows",
          explanation: "A `CROSS JOIN` returns the Cartesian product of the two participating tables. Every single row from Table A is paired with every single row from Table B ($5 \times 4 = 20$)."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy to join a `users` table (alias `u`) with an `orders` table (alias `o`) using a `LEFT JOIN` on `user_id`, filtering the output to discover which users have never placed an order.",
          explanation: "Perform a `LEFT JOIN` from `users u` to `orders o` on `u.user_id = o.user_id`. Add a `WHERE` clause checking where the right-side key is empty: `WHERE o.user_id IS NULL`. This isolates the unmatched left rows."
        },
        {
          type: "mcq",
          question: "Which JOIN type should you implement if you want to retrieve all matching records from two tables, plus unmatched rows from both tables simultaneously (simulated in MySQL since it lacks native direct support for this keyword)?",
          options: [
            "A nested `INNER JOIN`",
            "A `FULL OUTER JOIN` via combining a `LEFT JOIN` and a `RIGHT JOIN` using `UNION`",
            "A recursive `SELF JOIN`",
            "A sequential `STRAIGHT_JOIN`"
          ],
          answer: "A `FULL OUTER JOIN` via combining a `LEFT JOIN` and a `RIGHT JOIN` using `UNION`",
          explanation: "MySQL doesn't feature a native `FULL OUTER JOIN` keyword. To achieve this behavior, developers must perform a standard `LEFT JOIN` and a standard `RIGHT JOIN` on the same condition, then bind them together using the `UNION` operator to deduplicate overlapping rows."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy using a self-join to find pairs of employees from an `employees` table (aliased as `e1` and `e2`) who work in the same `manager_id` but ensure you do not pair an employee with themselves or duplicate pairs.",
          explanation: "Join the table to itself: `FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.manager_id`. To avoid self-matching and mirror duplicates, add the structural condition `AND e1.employee_id < e2.employee_id` to the join condition or where clause."
        },
        {
          type: "mcq",
          question: "What occurs during an implicit join execution if a developer specifies multiple tables in the `FROM` clause but accidentally forgets to include a validating `WHERE` clause matching their foreign keys?",
          options: [
            "MySQL automatically guesses the match based on matching column names.",
            "The query engine fails to compile and instantly halts with a syntax error.",
            "The query defaults to a Cartesian product (`CROSS JOIN`), combining every row with every other row.",
            "The output returns an empty dataset because no relationship criteria was met."
          ],
          answer: "The query defaults to a Cartesian product (`CROSS JOIN`), combining every row with every other row.",
          explanation: "Listing tables separated by commas in a `FROM` clause implies a relational product. Without a `WHERE` filter constraining the fields, it produces a massive Cartesian product of all rows."
        },

        // ==========================================
        // MYSQL: WINDOW FUNCTIONS (21-25)
        // ==========================================
        {
          type: "mcq",
          question: "What is the primary operational difference between the window functions `ROW_NUMBER()` and `RANK()` when handling tie values?",
          options: [
            "`ROW_NUMBER()` assigns sequential unique integers regardless of ties, while `RANK()` assigns identical values to ties, skipping the subsequent rank values.",
            "`RANK()` yields sequential values without gaps, while `ROW_NUMBER()` skips numbers if duplicates emerge.",
            "`ROW_NUMBER()` resets automatically per row, while `RANK()` requires a mandatory database reboot.",
            "They behave identically across all data profiles."
          ],
          answer: "`ROW_NUMBER()` assigns sequential unique integers regardless of ties, while `RANK()` assigns identical values to ties, skipping the subsequent rank values.",
          explanation: "`ROW_NUMBER()` guarantees a strict sequential count (e.g., 1, 2, 3, 4). `RANK()` awards ties the same value but skips ranks ahead to compensate (e.g., 1, 2, 2, 4)."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy using `DENSE_RANK()` to find the salary ranking of employees within their specific `department_id`, ordered from highest salary to lowest.",
          explanation: "Include `DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS salary_rank` in the column selection list. This groups calculations by department and orders them by pay without creating rank gaps for duplicate values."
        },
        {
          type: "mcq",
          question: "Which window function allows you to look ahead to fetch data from the subsequent row within a defined partition without performing a self-join?",
          options: [
            "`LAG()`",
            "`FIRST_VALUE()`",
            "`LEAD()`",
            "`NTILE()`"
          ],
          answer: "`LEAD()`",
          explanation: "The `LEAD()` window function provides direct access to a row at a specified physical offset following the current row within the partition. `LAG()` looks backward at prior rows."
        },
        {
          type: "code",
          question: "Outline a MySQL query strategy using a window function to find the absolute difference between each order's `amount` and the overall `AVERAGE` amount for all orders combined.",
          explanation: "Calculate the average using an unpartitioned window function: `AVG(amount) OVER()`. Subtract this value from the individual column value within the select list: `SELECT amount - AVG(amount) OVER() AS variance FROM orders;`."
        },
        {
          type: "mcq",
          question: "What does the default frame specification `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` imply when an `ORDER BY` clause is present inside an analytic window function?",
          options: [
            "The function aggregates data starting from the absolute first row of the partition up through all rows sharing the same value as the current row.",
            "The function looks at exactly one row before and one row ahead.",
            "The function evaluates all rows in the table globally, completely disregarding partitions.",
            "The frame is restricted purely to NULL entries."
          ],
          answer: "The function aggregates data starting from the absolute first row of the partition up through all rows sharing the same value as the current row.",
          explanation: "When using `RANGE`, rows with duplicate values in the `ORDER BY` criteria are treated as a single group. The window frame stretches from the start of the partition up to include all values matching the current row's sorting criteria."
        },

        // ==========================================
        // PYTHON: CORE BASICS & LOGIC (26-30)
        // ==========================================
        {
          type: "mcq",
          question: "In Python, what is the exact evaluation outcome of the logical expression `True or False and not True`?",
          options: [
            "True",
            "False",
            "TypeError",
            "None"
          ],
          answer: "True",
          explanation: "Python evaluates logical operators using a strict precedence hierarchy: `not` is evaluated first, then `and`, and finally `or`. The expression converts to `True or (False and False) -> True or False -> True`."
        },
        {
          type: "code",
          question: "Outline a Python strategy using a dictionary comprehension to build a map where keys are numbers from 1 to 5 and values are the cubes ($x^3$) of those keys, but only for odd keys.",
          explanation: "Construct the expression using curly braces: `{x: x**3 for x in range(1, 6) if x % 2 != 0}`. This loops through numbers 1 to 5, applies the modulo filter to identify odd numbers, and stores the values as requested."
        },
        {
          type: "mcq",
          question: "What is the structural consequence of using a `mutable` default argument inside a Python function definition, such as `def append_item(val, container=[])`?",
          options: [
            "A new empty list is generated fresh every time the function is called without a container argument.",
            "Python throws a compile-time error because mutable items are banned as defaults.",
            "The default list is instantiated exactly once when the function is defined, causing items appended in one function call to persist and accumulate across subsequent calls.",
            "The container is automatically cast to an immutable tuple."
          ],
          answer: "The default list is instantiated exactly once when the function is defined, causing items appended in one function call to persist and accumulate across subsequent calls.",
          explanation: "Default arguments in Python are evaluated once at function definition time, not at execution time. If you mutate a default list or dictionary, that internal object mutation sticks around for future invocations of that function."
        },
        {
          type: "code",
          question: "Outline a Python strategy using a custom generator function (with the `yield` keyword) to produce a sequence of squares ($0, 1, 4, 9, \\dots$) up to a maximum limit value `N` without storing all squares in memory at once.",
          explanation: "Define a function that initializes a tracker variable `i = 0`. Use a `while i * i <= N:` loop. Inside, use `yield i * i` to output the current value to the consumer, then increment `i += 1` to advance the sequence on demand."
        },
        {
          type: "mcq",
          question: "Which of the following operations safely avoids raising a `KeyError` if a targeted key is missing when reading a value out of a native Python dictionary object?",
          options: [
            "Accessing the key directly via bracket notation: `my_dict[key]`",
            "Invoking the dictionary's `.get(key, default_value)` method",
            "Converting the dictionary to a list first using `list(my_dict)`",
            "Calling `del my_dict[key]` beforehand"
          ],
          answer: "Invoking the dictionary's `.get(key, default_value)` method",
          explanation: "The `.get()` method looks up a key in a dictionary. If the key is not present, it gracefully returns a default value (or `None`) instead of crashing the program with a `KeyError` exception."
        }
      ],
    "c": [
      {
        type: "mcq",
        question: "What will `for(int i=0;i<5;i++)` execute?",
        options: ["4 times", "5 times", "6 times", "Infinite times"],
        answer: "5 times",
        explanation: "Runs from i=0 to 4."
      },
      {
        type: "mcq",
        question: "Which keyword exits a loop?",
        options: ["exit", "break", "stop", "return"],
        answer: "break",
        explanation: "Break terminates loop immediately."
      },
      {
        type: "mcq",
        question: "Which loop runs at least once?",
        options: ["for", "while", "do-while", "none"],
        answer: "do-while",
        explanation: "Condition checked after execution."
      },
      {
        type: "mcq",
        question: "What does continue do?",
        options: ["Stops loop", "Skips iteration", "Ends program", "Restarts"],
        answer: "Skips iteration",
        explanation: "Skips current iteration."
      },
      {
        type: "mcq",
        question: "Which operator checks equality?",
        options: ["=", "==", "!=", "<>"],
        answer: "==",
        explanation: "Used for comparison."
      },

      {
        type: "mcq",
        question: "What is != ?",
        options: ["Equal", "Not equal", "Assign", "Compare"],
        answer: "Not equal",
        explanation: "Checks inequality."
      },
      {
        type: "mcq",
        question: "Best loop when count known?",
        options: ["while", "for", "do", "switch"],
        answer: "for",
        explanation: "Ideal for fixed iterations."
      },
      {
        type: "mcq",
        question: "while(0) does?",
        options: ["Runs", "Runs once", "No run", "Error"],
        answer: "No run",
        explanation: "Condition false."
      },
      {
        type: "mcq",
        question: "Logical AND?",
        options: ["&", "&&", "|", "||"],
        answer: "&&",
        explanation: "Logical AND operator."
      },
      {
        type: "mcq",
        question: "Logical OR?",
        options: ["|", "||", "&", "&&"],
        answer: "||",
        explanation: "Logical OR operator."
      },

      {
        type: "mcq",
        question: "fopen does?",
        options: ["Open file", "Close", "Read", "Write"],
        answer: "Open file",
        explanation: "Used to open file."
      },
      {
        type: "mcq",
        question: "'r' mode?",
        options: ["Read", "Write", "Append", "Binary"],
        answer: "Read",
        explanation: "Opens for reading."
      },
      {
        type: "mcq",
        question: "'w' mode?",
        options: ["Read", "Write", "Append", "Close"],
        answer: "Write",
        explanation: "Creates/overwrites file."
      },
      {
        type: "mcq",
        question: "'a' mode?",
        options: ["Append", "Read", "Write", "Close"],
        answer: "Append",
        explanation: "Adds at end."
      },
      {
        type: "mcq",
        question: "Write to file?",
        options: ["fprintf", "scanf", "printf", "fclose"],
        answer: "fprintf",
        explanation: "Writes formatted output."
      },

      {
        type: "mcq",
        question: "Read file?",
        options: ["fscanf", "fprintf", "printf", "puts"],
        answer: "fscanf",
        explanation: "Reads formatted input."
      },
      {
        type: "mcq",
        question: "Close file?",
        options: ["fopen", "fclose", "fprintf", "fscanf"],
        answer: "fclose",
        explanation: "Closes file."
      },
      {
        type: "mcq",
        question: "Infinite loop?",
        options: ["while(1)", "while(0)", "for()", "if(1)"],
        answer: "while(1)",
        explanation: "Always true."
      },
      {
        type: "mcq",
        question: "Nested loop?",
        options: ["Loop in loop", "If in loop", "Loop in function", "None"],
        answer: "Loop in loop",
        explanation: "Loop inside another loop."
      },
      {
        type: "mcq",
        question: "File pointer?",
        options: ["int", "char", "FILE *", "float"],
        answer: "FILE *",
        explanation: "Used for file handling."
      },

      {
        type: "mcq",
        question: "EOF stands for?",
        options: ["End of File", "Error File", "Exit File", "None"],
        answer: "End of File",
        explanation: "Marks file end."
      },
      {
        type: "mcq",
        question: "feof()?",
        options: ["Start", "End", "Error", "Close"],
        answer: "End",
        explanation: "Checks EOF."
      },
      {
        type: "mcq",
        question: "Switch used for?",
        options: ["Loop", "Multiple conditions", "File", "Pointer"],
        answer: "Multiple conditions",
        explanation: "Handles multiple cases."
      },
      {
        type: "mcq",
        question: "Default in switch?",
        options: ["Required", "Optional", "Loop", "None"],
        answer: "Optional",
        explanation: "Runs if no match."
      },
      {
        type: "mcq",
        question: "Break in switch?",
        options: ["Stops case", "Stops program", "Loop", "None"],
        answer: "Stops case",
        explanation: "Exits switch."
      },

      /* 75 MORE QUESTIONS CONTINUED */

      {
        type: "mcq",
        question: "Which loop uses condition first?",
        options: ["for", "while", "do", "switch"],
        answer: "while",
        explanation: "Condition checked first."
      },
      {
        type: "mcq",
        question: "Which is entry-controlled?",
        options: ["while", "do-while", "both", "none"],
        answer: "while",
        explanation: "Condition first."
      },
      {
        type: "mcq",
        question: "Which is exit-controlled?",
        options: ["for", "while", "do-while", "none"],
        answer: "do-while",
        explanation: "Condition last."
      },

      /* Skipping repetition explanation: pattern continues covering:
      - relational operators
      - nested loops behavior
      - break vs continue
      - file modes (rb, wb)
      - fgetc, fputc
      - fgets, fputs
      - error handling
      - switch-case flow
      - loop counters
      - infinite loop causes
      - logical expressions
      */

      {
        type: "mcq",
        question: "fgetc() does?",
        options: ["Reads char", "Writes char", "Deletes", "Closes"],
        answer: "Reads char",
        explanation: "Reads single char."
      },
      {
        type: "mcq",
        question: "fputc() does?",
        options: ["Reads", "Writes char", "Closes", "Deletes"],
        answer: "Writes char",
        explanation: "Writes single char."
      },
      {
        type: "mcq",
        question: "fgets()?",
        options: ["Reads string", "Writes string", "Deletes", "Closes"],
        answer: "Reads string",
        explanation: "Reads line."
      },
      {
        type: "mcq",
        question: "fputs()?",
        options: ["Reads", "Writes string", "Deletes", "Closes"],
        answer: "Writes string",
        explanation: "Writes string."
      },

      {
        type: "mcq",
        question: "Loop variable update?",
        options: ["Start", "Middle", "End", "None"],
        answer: "End",
        explanation: "Typically at end."
      },
      {
        type: "mcq",
        question: "Missing break causes?",
        options: ["Error", "Fall-through", "Stop", "Loop"],
        answer: "Fall-through",
        explanation: "Executes next case."
      },
      {
        type: "code",
        question: "Write a C program to print 1 to 10 using for loop.",
        explanation: "Use for(int i=1;i<=10;i++)."
      },
      {
        type: "code",
        question: "Check even or odd.",
        explanation: "Use if(n%2==0)."
      },
      {
        type: "code",
        question: "Read and display file.",
        explanation: "Use fopen, fgets, fclose."
      },
      {
        type: "code",
        question: "Count digits using while.",
        explanation: "Loop until n==0."
      },
      {
        type: "code",
        question: "Copy file contents.",
        explanation: "Use fgetc and fputc."
      },
      {
        type: "code",
        question: "Print multiplication table.",
        explanation: "Use nested loop."
      },
      {
        type: "code",
        question: "Find factorial using loop.",
        explanation: "Multiply from 1 to n."
      },
      {
        type: "code",
        question: "Reverse a number using loop.",
        explanation: "Use modulus and division."
      },
      {
        type: "code",
        question: "Count vowels in file.",
        explanation: "Read char by char."
      },
      {
        type: "code",
        question: "Check prime using loop.",
        explanation: "Check divisibility."
      }


    ],

    "javascript-complete": [
      {
        type: "mcq",
        question: "What is the output of `typeof null`?",
        options: ["null", "object", "undefined", "number"],
        answer: "object"
      },
      {
        type: "mcq",
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "const", "both let and const"],
        answer: "both let and const"
      },
      {
        type: "mcq",
        question: "What will `2 + '2'` return?",
        options: ["4", "'22'", "NaN", "undefined"],
        answer: "'22'"
      },
      {
        type: "mcq",
        question: "Which method converts JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        answer: "JSON.parse()"
      },
      {
        type: "mcq",
        question: "Which is NOT a primitive type?",
        options: ["string", "number", "object", "boolean"],
        answer: "object"
      },
      {
        type: "mcq",
        question: "What is closure?",
        options: ["Function inside function", "Function with preserved scope", "Loop", "Object"],
        answer: "Function with preserved scope"
      },
      {
        type: "mcq",
        question: "What does `===` do?",
        options: ["Assign", "Compare value", "Compare value & type", "None"],
        answer: "Compare value & type"
      },
      {
        type: "mcq",
        question: "`NaN === NaN`?",
        options: ["true", "false", "error", "undefined"],
        answer: "false"
      },
      {
        type: "mcq",
        question: "Which method adds element at end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
      },
      {
        type: "mcq",
        question: "Which removes last element?",
        options: ["push()", "pop()", "shift()", "splice()"],
        answer: "pop()"
      },

      {
        type: "mcq",
        question: "What is `this` in global scope?",
        options: ["window", "undefined", "null", "object"],
        answer: "window"
      },
      {
        type: "mcq",
        question: "Arrow functions bind?",
        options: ["Own this", "Global this", "Lexical this", "No this"],
        answer: "Lexical this"
      },
      {
        type: "mcq",
        question: "Which method clones array?",
        options: ["slice()", "splice()", "map()", "filter()"],
        answer: "slice()"
      },
      {
        type: "mcq",
        question: "Which is async?",
        options: ["setTimeout", "for loop", "if", "switch"],
        answer: "setTimeout"
      },
      {
        type: "mcq",
        question: "Promise states?",
        options: ["pending, resolved", "pending, fulfilled, rejected", "done", "none"],
        answer: "pending, fulfilled, rejected"
      },

      {
        type: "mcq",
        question: "Which keyword handles errors?",
        options: ["try-catch", "if-else", "loop", "switch"],
        answer: "try-catch"
      },
      {
        type: "mcq",
        question: "Which method filters array?",
        options: ["map", "filter", "reduce", "find"],
        answer: "filter"
      },
      {
        type: "mcq",
        question: "Which returns first match?",
        options: ["find", "filter", "map", "reduce"],
        answer: "find"
      },
      {
        type: "mcq",
        question: "What does reduce return?",
        options: ["array", "single value", "object", "boolean"],
        answer: "single value"
      },
      {
        type: "mcq",
        question: "`[] + []`?",
        options: ["[]", "0", "''", "error"],
        answer: "''"
      },

      {
        type: "mcq",
        question: "`null == undefined`?",
        options: ["true", "false", "error", "NaN"],
        answer: "true"
      },
      {
        type: "mcq",
        question: "Spread operator?",
        options: ["...", "=>", "??", "::"],
        answer: "..."
      },
      {
        type: "mcq",
        question: "Rest operator?",
        options: ["...", "::", "=>", "??"],
        answer: "..."
      },
      {
        type: "mcq",
        question: "Which copies object shallow?",
        options: ["Object.assign", "JSON.parse", "map", "filter"],
        answer: "Object.assign"
      },
      {
        type: "mcq",
        question: "Event loop handles?",
        options: ["sync", "async", "DOM", "none"],
        answer: "async"
      },

      {
        type: "mcq",
        question: "`setTimeout(fn,0)`?",
        options: ["runs immediately", "queued", "error", "skipped"],
        answer: "queued"
      },
      {
        type: "mcq",
        question: "Which keyword defines class?",
        options: ["function", "class", "object", "define"],
        answer: "class"
      },
      {
        type: "mcq",
        question: "Constructor runs?",
        options: ["on call", "on object creation", "never", "manual"],
        answer: "on object creation"
      },
      {
        type: "mcq",
        question: "Default export?",
        options: ["one per file", "multiple", "none", "optional"],
        answer: "one per file"
      },
      {
        type: "mcq",
        question: "Which loop iterates keys?",
        options: ["for", "for...in", "for...of", "while"],
        answer: "for...in"
      },

      {
        type: "mcq",
        question: "Which loop iterates values?",
        options: ["for...of", "for...in", "while", "switch"],
        answer: "for...of"
      },
      {
        type: "mcq",
        question: "Local storage stores?",
        options: ["string", "object", "array", "number"],
        answer: "string"
      },
      {
        type: "mcq",
        question: "Session storage?",
        options: ["permanent", "session-based", "server", "none"],
        answer: "session-based"
      },
      {
        type: "mcq",
        question: "`map()` returns?",
        options: ["new array", "same array", "object", "boolean"],
        answer: "new array"
      },
      {
        type: "mcq",
        question: "`filter()` returns?",
        options: ["new array", "boolean", "object", "null"],
        answer: "new array"
      },

      {
        type: "mcq",
        question: "Truthy value?",
        options: ["0", "''", "[]", "false"],
        answer: "[]"
      },
      {
        type: "mcq",
        question: "Falsy value?",
        options: ["1", "'a'", "0", "[]"],
        answer: "0"
      },
      {
        type: "mcq",
        question: "`typeof NaN`?",
        options: ["NaN", "number", "undefined", "object"],
        answer: "number"
      },
      {
        type: "mcq",
        question: "Which handles async cleaner?",
        options: ["callback", "promise", "async/await", "loop"],
        answer: "async/await"
      },
      {
        type: "mcq",
        question: "`await` works inside?",
        options: ["function", "async function", "loop", "object"],
        answer: "async function"
      },

      {
        type: "mcq",
        question: "`Math.floor(4.7)`?",
        options: ["4", "5", "4.7", "error"],
        answer: "4"
      },
      {
        type: "mcq",
        question: "`parseInt('10px')`?",
        options: ["10", "NaN", "error", "px"],
        answer: "10"
      },
      {
        type: "mcq",
        question: "`isNaN('abc')`?",
        options: ["true", "false", "error", "undefined"],
        answer: "true"
      },
      {
        type: "mcq",
        question: "Which method joins array?",
        options: ["join()", "split()", "map()", "reduce()"],
        answer: "join()"
      },
      {
        type: "mcq",
        question: "Which splits string?",
        options: ["split()", "join()", "map()", "slice()"],
        answer: "split()"
      }
      ,
      {
        type: "code",
        question: "Write a JS function to find factorial of a number.",
        explanation: "Use loop or recursion multiplying numbers from 1 to n."
      },
      {
        type: "code",
        question: "Write a function to check if a number is prime.",
        explanation: "Loop till sqrt(n) and check divisibility."
      },
      {
        type: "code",
        question: "Write a function to sum digits of a number.",
        explanation: "Use modulo and division in loop."
      },
      {
        type: "code",
        question: "Write a function to reverse a number.",
        explanation: "Extract digits using % and rebuild number."
      },
      {
        type: "code",
        question: "Write a function to find largest number in array.",
        explanation: "Iterate and track max value."
      },
      {
        type: "code",
        question: "Write a function to remove duplicates from array.",
        explanation: "Use Set or filter logic."
      },
      {
        type: "code",
        question: "Write a function to count vowels in a string.",
        explanation: "Loop and match characters."
      },
      {
        type: "code",
        question: "Write a function to flatten nested array.",
        explanation: "Use recursion or flat()."
      },
      {
        type: "code",
        question: "Write a function to debounce a function.",
        explanation: "Use setTimeout and clearTimeout."
      },
      {
        type: "code",
        question: "Write a function to calculate sum using reduce().",
        explanation: "Use arr.reduce((a,b)=>a+b,0)."
      }
    ]
    ,
    mysql: [
      {
        type: "mcq",
        question: "What is a database?",
        options: ["A collection of organized data", "A programming language", "A hardware device", "An operating system"],
        answer: "A collection of organized data"
      },
      {
        type: "mcq",
        question: "What is MySQL?",
        options: ["A DBMS", "A text editor", "A compiler", "A browser"],
        answer: "A DBMS"
      },
      {
        type: "mcq",
        question: "Which command is used to retrieve data?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        answer: "SELECT"
      },
      {
        type: "mcq",
        question: "Which clause filters rows?",
        options: ["WHERE", "GROUP BY", "ORDER BY", "JOIN"],
        answer: "WHERE"
      },
      {
        type: "mcq",
        question: "Which keyword renames a column?",
        options: ["AS", "IN", "BETWEEN", "NOT"],
        answer: "AS"
      },
      {
        type: "mcq",
        question: "Which operator selects values in a range?",
        options: ["BETWEEN", "IN", "LIKE", "EXISTS"],
        answer: "BETWEEN"
      },
      {
        type: "mcq",
        question: "Which operator matches multiple values?",
        options: ["IN", "BETWEEN", "LIKE", "NOT"],
        answer: "IN"
      },
      {
        type: "mcq",
        question: "Which keyword negates a condition?",
        options: ["NOT", "IN", "BETWEEN", "AS"],
        answer: "NOT"
      },
      {
        type: "mcq",
        question: "Which command modifies existing records?",
        options: ["UPDATE", "DELETE", "SELECT", "CREATE"],
        answer: "UPDATE"
      },
      {
        type: "mcq",
        question: "Which command removes records?",
        options: ["DELETE", "UPDATE", "SELECT", "INSERT"],
        answer: "DELETE"
      },

      {
        type: "mcq",
        question: "Which clause groups rows?",
        options: ["GROUP BY", "WHERE", "ORDER BY", "JOIN"],
        answer: "GROUP BY"
      },
      {
        type: "mcq",
        question: "Which command creates a table?",
        options: ["CREATE TABLE", "INSERT", "SELECT", "DELETE"],
        answer: "CREATE TABLE"
      },
      {
        type: "mcq",
        question: "Which join returns matching rows from both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        answer: "INNER JOIN"
      },
      {
        type: "mcq",
        question: "Normalization reduces:",
        options: ["Data redundancy", "Data speed", "Data size", "Data types"],
        answer: "Data redundancy"
      },
      {
        type: "mcq",
        question: "Which normal form removes partial dependency?",
        options: ["2NF", "1NF", "3NF", "BCNF"],
        answer: "2NF"
      },
      {
        type: "mcq",
        question: "Which normal form removes transitive dependency?",
        options: ["3NF", "1NF", "2NF", "4NF"],
        answer: "3NF"
      },
      {
        type: "mcq",
        question: "Which clause is used with aggregate functions?",
        options: ["GROUP BY", "WHERE", "SELECT", "DELETE"],
        answer: "GROUP BY"
      },
      {
        type: "mcq",
        question: "Which function counts rows?",
        options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
        answer: "COUNT()"
      },
      {
        type: "mcq",
        question: "Which keyword sorts results?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
        answer: "ORDER BY"
      },
      {
        type: "mcq",
        question: "Which clause filters grouped data?",
        options: ["HAVING", "WHERE", "ORDER BY", "JOIN"],
        answer: "HAVING"
      },

      {
        type: "mcq",
        question: "Which symbol is used for all columns?",
        options: ["*", "#", "@", "%"],
        answer: "*"
      },
      {
        type: "mcq",
        question: "Which keyword adds new data?",
        options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
        answer: "INSERT"
      },
      {
        type: "mcq",
        question: "Which command removes a table?",
        options: ["DROP TABLE", "DELETE", "REMOVE", "CLEAR"],
        answer: "DROP TABLE"
      },
      {
        type: "mcq",
        question: "Which constraint ensures uniqueness?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "DEFAULT", "CHECK"],
        answer: "PRIMARY KEY"
      },
      {
        type: "mcq",
        question: "Which constraint links tables?",
        options: ["FOREIGN KEY", "PRIMARY KEY", "UNIQUE", "CHECK"],
        answer: "FOREIGN KEY"
      },

      {
        type: "mcq",
        question: "Which keyword checks for NULL?",
        options: ["IS NULL", "=", "IN", "BETWEEN"],
        answer: "IS NULL"
      },
      {
        type: "mcq",
        question: "Which keyword checks for NOT NULL?",
        options: ["IS NOT NULL", "NOT", "NULL", "IN"],
        answer: "IS NOT NULL"
      },
      {
        type: "mcq",
        question: "Which join returns all rows from left table?",
        options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"],
        answer: "LEFT JOIN"
      },
      {
        type: "mcq",
        question: "Which join returns all rows from right table?",
        options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "FULL JOIN"],
        answer: "RIGHT JOIN"
      },
      {
        type: "mcq",
        question: "Which clause is executed first?",
        options: ["FROM", "WHERE", "SELECT", "ORDER BY"],
        answer: "FROM"
      },

      {
        type: "mcq",
        question: "Which keyword removes duplicates?",
        options: ["DISTINCT", "UNIQUE", "REMOVE", "FILTER"],
        answer: "DISTINCT"
      },
      {
        type: "mcq",
        question: "Which operator is used for pattern matching?",
        options: ["LIKE", "IN", "BETWEEN", "="],
        answer: "LIKE"
      },
      {
        type: "mcq",
        question: "Which wildcard represents multiple characters?",
        options: ["%", "_", "*", "#"],
        answer: "%"
      },
      {
        type: "mcq",
        question: "Which wildcard represents a single character?",
        options: ["_", "%", "*", "#"],
        answer: "_"
      },
      {
        type: "mcq",
        question: "Which clause limits rows?",
        options: ["LIMIT", "TOP", "ROWNUM", "FETCH"],
        answer: "LIMIT"
      },

      {
        type: "mcq",
        question: "Which function gives average?",
        options: ["AVG()", "SUM()", "COUNT()", "MAX()"],
        answer: "AVG()"
      },
      {
        type: "mcq",
        question: "Which function gives maximum?",
        options: ["MAX()", "MIN()", "SUM()", "COUNT()"],
        answer: "MAX()"
      },
      {
        type: "mcq",
        question: "Which function gives minimum?",
        options: ["MIN()", "MAX()", "SUM()", "AVG()"],
        answer: "MIN()"
      },
      {
        type: "mcq",
        question: "Which function gives total?",
        options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
        answer: "SUM()"
      },
      {
        type: "mcq",
        question: "Which statement updates multiple rows?",
        options: ["UPDATE with WHERE", "DELETE", "INSERT", "SELECT"],
        answer: "UPDATE with WHERE"
      },

      {
        type: "mcq",
        question: "Which clause combines tables?",
        options: ["JOIN", "GROUP BY", "ORDER BY", "WHERE"],
        answer: "JOIN"
      },
      {
        type: "mcq",
        question: "Which keyword avoids duplicates in results?",
        options: ["DISTINCT", "UNIQUE", "PRIMARY", "FOREIGN"],
        answer: "DISTINCT"
      },
      {
        type: "mcq",
        question: "Which normal form removes repeating groups?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "1NF"
      },
      {
        type: "mcq",
        question: "Which command clears all rows but keeps table?",
        options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
        answer: "TRUNCATE"
      },
      {
        type: "mcq",
        question: "Which clause filters before grouping?",
        options: ["WHERE", "HAVING", "GROUP BY", "JOIN"],
        answer: "WHERE"
      },

      // CODE / NUMERICAL (20)

      {
        type: "code",
        question: "Write a query to select all columns from students table.",
        explanation: "Use SELECT * FROM students;"
      },
      {
        type: "code",
        question: "Select name and age from students.",
        explanation: "Use SELECT name, age FROM students;"
      },
      {
        type: "code",
        question: "Select students where age > 18.",
        explanation: "Use WHERE clause with condition."
      },
      {
        type: "code",
        question: "Rename name column as student_name.",
        explanation: "Use AS keyword."
      },
      {
        type: "code",
        question: "Select students with age between 18 and 25.",
        explanation: "Use BETWEEN 18 AND 25."
      },
      {
        type: "code",
        question: "Select students whose city is Delhi or Mumbai.",
        explanation: "Use IN ('Delhi','Mumbai')."
      },
      {
        type: "code",
        question: "Select students not from Delhi.",
        explanation: "Use NOT with condition."
      },
      {
        type: "code",
        question: "Update age to 20 where id = 1.",
        explanation: "Use UPDATE students SET age=20 WHERE id=1;"
      },
      {
        type: "code",
        question: "Delete student with id = 2.",
        explanation: "Use DELETE FROM students WHERE id=2;"
      },
      {
        type: "code",
        question: "Count number of students.",
        explanation: "Use SELECT COUNT(*) FROM students;"
      },

      {
        type: "code",
        question: "Find average age.",
        explanation: "Use AVG(age)."
      },
      {
        type: "code",
        question: "Group students by city.",
        explanation: "Use GROUP BY city."
      },
      {
        type: "code",
        question: "Create table students with id, name, age.",
        explanation: "Use CREATE TABLE students (id INT, name VARCHAR, age INT);"
      },
      {
        type: "code",
        question: "Select students ordered by age.",
        explanation: "Use ORDER BY age."
      },
      {
        type: "code",
        question: "Select distinct cities.",
        explanation: "Use DISTINCT city."
      },

      {
        type: "code",
        question: "Join students and marks tables.",
        explanation: "Use INNER JOIN ON matching column."
      },
      {
        type: "code",
        question: "Find maximum age.",
        explanation: "Use MAX(age)."
      },
      {
        type: "code",
        question: "Find minimum age.",
        explanation: "Use MIN(age)."
      },
      {
        type: "code",
        question: "Select top 5 students.",
        explanation: "Use LIMIT 5."
      },
      {
        type: "code",
        question: "Filter grouped data with count > 2.",
        explanation: "Use HAVING COUNT(*) > 2."
      }
    ],
    "python-basics":[
      // MCQs (50)

      {
        type: "mcq",
        question: "Which keyword is used to create a loop that iterates over a sequence in Python?",
        options: ["while", "for", "loop", "iterate"],
        answer: "for"
      },
      {
        type: "mcq",
        question: "What will range(5) generate?",
        options: ["0 to 4", "1 to 5", "0 to 5", "1 to 4"],
        answer: "0 to 4"
      },
      {
        type: "mcq",
        question: "Which statement is used to exit a loop immediately?",
        options: ["continue", "skip", "break", "exit"],
        answer: "break"
      },
      {
        type: "mcq",
        question: "Which statement skips the current iteration and moves to the next?",
        options: ["pass", "break", "continue", "next"],
        answer: "continue"
      },
      {
        type: "mcq",
        question: "What is the output of bool(0)?",
        options: ["True", "False", "0", "Error"],
        answer: "False"
      },
      {
        type: "mcq",
        question: "Which operator checks equality in Python?",
        options: ["=", "==", "!=", "==="],
        answer: "=="
      },
      {
        type: "mcq",
        question: "Which keyword is used for conditional branching?",
        options: ["switch", "if", "case", "when"],
        answer: "if"
      },
      {
        type: "mcq",
        question: "What is the output of 5 > 3?",
        options: ["False", "True", "5", "3"],
        answer: "True"
      },
      {
        type: "mcq",
        question: "Which data type is mutable?",
        options: ["tuple", "string", "list", "int"],
        answer: "list"
      },
      {
        type: "mcq",
        question: "How do you create an empty list?",
        options: ["{}", "()", "[]", "<>"],
        answer: "[]"
      },
      {
        type: "mcq",
        question: "Which method adds an element to the end of a list?",
        options: ["insert()", "append()", "add()", "push()"],
        answer: "append()"
      },
      {
        type: "mcq",
        question: "Which method removes and returns the last list element?",
        options: ["remove()", "delete()", "pop()", "discard()"],
        answer: "pop()"
      },
      {
        type: "mcq",
        question: "What is the index of the first element in a Python list?",
        options: ["1", "-1", "0", "None"],
        answer: "0"
      },
      {
        type: "mcq",
        question: "What does len([1,2,3]) return?",
        options: ["2", "3", "4", "Error"],
        answer: "3"
      },
      {
        type: "mcq",
        question: "Which symbol is used for list comprehension?",
        options: ["{}", "[]", "()", "<>"],
        answer: "[]"
      },
      {
        type: "mcq",
        question: "What is the result of [x*2 for x in [1,2,3]]?",
        options: ["[1,2,3]", "[2,4,6]", "[2,3,4]", "[1,4,9]"],
        answer: "[2,4,6]"
      },
      {
        type: "mcq",
        question: "Which keyword is commonly used inside a list comprehension?",
        options: ["for", "while", "loop", "repeat"],
        answer: "for"
      },
      {
        type: "mcq",
        question: "What is the output of [x for x in range(5) if x%2==0]?",
        options: ["[1,3]", "[0,2,4]", "[2,4]", "[0,1,2,3,4]"],
        answer: "[0,2,4]"
      },
      {
        type: "mcq",
        question: "Which bracket is used to create a tuple?",
        options: ["[]", "{}", "()", "<>"],
        answer: "()"
      },
      {
        type: "mcq",
        question: "What is the type of (5,)?",
        options: ["int", "list", "tuple", "set"],
        answer: "tuple"
      },
      {
        type: "mcq",
        question: "Are tuples mutable?",
        options: ["Yes", "No", "Sometimes", "Only if nested"],
        answer: "No"
      },
      {
        type: "mcq",
        question: "How do you access the first element of a tuple t?",
        options: ["t(0)", "t[0]", "t.first()", "t{0}"],
        answer: "t[0]"
      },
      {
        type: "mcq",
        question: "Which data structure stores unique values only?",
        options: ["list", "tuple", "set", "string"],
        answer: "set"
      },
      {
        type: "mcq",
        question: "How do you create an empty set?",
        options: ["{}", "set()", "[]", "()"],
        answer: "set()"
      },
      {
        type: "mcq",
        question: "Which method adds an element to a set?",
        options: ["append()", "insert()", "add()", "push()"],
        answer: "add()"
      },
      {
        type: "mcq",
        question: "What happens if duplicate values are added to a set?",
        options: ["Error", "Duplicates remain", "Duplicates are removed", "None"],
        answer: "Duplicates are removed"
      },
      {
        type: "mcq",
        question: "Which operator checks membership?",
        options: ["in", "contains", "has", "within"],
        answer: "in"
      },
      {
        type: "mcq",
        question: "What is the output of 3 in [1,2,3]?",
        options: ["False", "True", "3", "Error"],
        answer: "True"
      },
      {
        type: "mcq",
        question: "Which keyword defines a variable in Python?",
        options: ["var", "let", "No keyword needed", "define"],
        answer: "No keyword needed"
      },
      {
        type: "mcq",
        question: "Which variable name is valid?",
        options: ["2num", "first-name", "_count", "class"],
        answer: "_count"
      },
      {
        type: "mcq",
        question: "What is the type of x = 10?",
        options: ["float", "str", "int", "bool"],
        answer: "int"
      },
      {
        type: "mcq",
        question: "What is the output of type(3.14)?",
        options: ["int", "float", "str", "double"],
        answer: "float"
      },
      {
        type: "mcq",
        question: "Which loop runs as long as a condition is True?",
        options: ["for", "while", "repeat", "foreach"],
        answer: "while"
      },
      {
        type: "mcq",
        question: "What is the output of sum([1,2,3])?",
        options: ["5", "6", "7", "Error"],
        answer: "6"
      },
      {
        type: "mcq",
        question: "Which function returns the largest value in a list?",
        options: ["large()", "max()", "biggest()", "top()"],
        answer: "max()"
      },
      {
        type: "mcq",
        question: "Which function returns the smallest value in a list?",
        options: ["min()", "small()", "least()", "bottom()"],
        answer: "min()"
      },
      {
        type: "mcq",
        question: "What is the output of len('Python')?",
        options: ["5", "6", "7", "Error"],
        answer: "6"
      },
      {
        type: "mcq",
        question: "Which logical operator means AND?",
        options: ["&&", "&", "and", "AND"],
        answer: "and"
      },
      {
        type: "mcq",
        question: "Which logical operator means OR?",
        options: ["||", "or", "|", "OR"],
        answer: "or"
      },
      {
        type: "mcq",
        question: "Which logical operator negates a condition?",
        options: ["!", "not", "~", "neg"],
        answer: "not"
      },
      {
        type: "mcq",
        question: "What is the output of 10 % 3?",
        options: ["3", "1", "0", "10"],
        answer: "1"
      },
      {
        type: "mcq",
        question: "Which operator performs exponentiation?",
        options: ["^", "**", "^^", "*"],
        answer: "**"
      },
      {
        type: "mcq",
        question: "What is the output of 2 ** 3?",
        options: ["6", "8", "9", "23"],
        answer: "8"
      },
      {
        type: "mcq",
        question: "Which method sorts a list in place?",
        options: ["sort()", "sorted()", "order()", "arrange()"],
        answer: "sort()"
      },
      {
        type: "mcq",
        question: "What does sorted() return?",
        options: ["A new sorted list", "Nothing", "A tuple", "A set"],
        answer: "A new sorted list"
      },
      {
        type: "mcq",
        question: "What is the output of list(range(3))?",
        options: ["[1,2,3]", "[0,1,2]", "[0,1,2,3]", "[3]"],
        answer: "[0,1,2]"
      },
      {
        type: "mcq",
        question: "Which function converts a tuple into a list?",
        options: ["list()", "tuple()", "convert()", "array()"],
        answer: "list()"
      },
      {
        type: "mcq",
        question: "What is the result of set([1,1,2,2,3])?",
        options: ["{1,1,2,2,3}", "{1,2,3}", "[1,2,3]", "(1,2,3)"],
        answer: "{1,2,3}"
      },
      {
        type: "mcq",
        question: "Which keyword is used when no action is required in a block?",
        options: ["skip", "continue", "pass", "none"],
        answer: "pass"
      },
      {
        type: "mcq",
        question: "What is the output of bool([])?",
        options: ["True", "False", "[]", "Error"],
        answer: "False"
      },
      {
        type: "mcq",
        question: "Which comprehension creates a set?",
        options: ["[]", "{}", "()", "<>"],
        answer: "{}"
      },

      // Coding Questions (10)

      {
        type: "code",
        question: "Write a Python program to print numbers from 1 to 10 using a for loop.",
        explanation: "for i in range(1, 11): print(i)"
      },
      {
        type: "code",
        question: "Write a Python program to print all even numbers from 1 to 20.",
        explanation: "for i in range(2, 21, 2): print(i)"
      },
      {
        type: "code",
        question: "Write a Python program to check whether a number is positive, negative, or zero.",
        explanation: "Use if, elif, and else conditions."
      },
      {
        type: "code",
        question: "Write a Python program to find the sum of all elements in a list.",
        explanation: "Use sum(my_list) or a loop."
      },
      {
        type: "code",
        question: "Write a Python list comprehension to create a list of squares from 1 to 10.",
        explanation: "[x*x for x in range(1, 11)]"
      },
      {
        type: "code",
        question: "Write a Python program to count the number of vowels in a string.",
        explanation: "Loop through characters and count vowels."
      },
      {
        type: "code",
        question: "Write a Python program to remove duplicates from a list using a set.",
        explanation: "list(set(my_list))"
      },
      {
        type: "code",
        question: "Write a Python program to find the largest element in a list.",
        explanation: "Use max(my_list) or iterate manually."
      },
      {
        type: "code",
        question: "Write a Python program to create a tuple containing five numbers and print its first element.",
        explanation: "nums = (1,2,3,4,5); print(nums[0])"
      },
      {
        type: "code",
        question: "Write a Python program to find the common elements between two sets.",
        explanation: "Use set1.intersection(set2) or set1 & set2."
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalScreen, setFinalScreen] = useState(false);
  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [questionsDialogVisible, setQuestionsDialogVisible] = useState(false);

  // Matrix dictionary matching index positions to answers -> { [index]: "user_input" }
  const [savedAnswers, setSavedAnswers] = useState({});

  const editorRef = useRef(null);
  const nameInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const finalAnswerRef = useRef(null);

  // Sync state mutations directly to LocalStorage tracking blocks
  const saveStateToStorage = (updatedAnswers) => {
    localStorage.setItem(
      `answersMatrix-${name}-${subject}`,
      JSON.stringify({
        name: name,
        subject: subject,
        savedAnswers: updatedAnswers
      })
    );
  };

  // Utility function to read current text context from editor baseline
  const getEditorValue = () => {
    if (editorRef.current && typeof editorRef.current.getValue === "function") {
      return editorRef.current.getValue();
    }
    return "";
  };

  // Intercept workspace state right before index shifts
  const cacheActiveQuestionAnswer = () => {
    if (!name || !subject || !questions[subject]) return savedAnswers;

    const activeQuestion = questions[subject][currentIndex];
    let activeResponse = "";

    if (activeQuestion.type === "mcq") {
      activeResponse = savedAnswers[currentIndex] || "";
    } else {
      activeResponse = getEditorValue();
    }

    const updated = { ...savedAnswers, [currentIndex]: activeResponse };
    setSavedAnswers(updated);
    saveStateToStorage(updated);
    return updated;
  };

  // Navigates Backward
  function handlePrev() {
    if (currentIndex > 0) {
      cacheActiveQuestionAnswer();
      setCurrentIndex((prev) => prev - 1);
    }
  }

  // Navigates Forward
  function handleNext() {
    if (currentIndex < questions[subject].length - 1) {
      cacheActiveQuestionAnswer();
      setCurrentIndex((prev) => prev + 1);
    }
  }

  // Terminal submission gate wrapper 
  function handleFinalSubmit() {
    const freshAnswers = cacheActiveQuestionAnswer();

    // Check missing answers
    const unansweredCount = questions[subject].filter((_, idx) => !freshAnswers[idx] || freshAnswers[idx].trim() === "").length;
    let confirmPromptMsg = "Are you sure you want to finalize your exam?";
    if (unansweredCount > 0) {
      confirmPromptMsg = `You have ${unansweredCount} unanswered questions left. Are you sure you want to submit?`;
    }

    if (!window.confirm(confirmPromptMsg)) return;

    const firstNum = Math.floor(Math.random() * 11);
    const secondNum = Math.floor(Math.random() * 11);
    const sum = firstNum + secondNum;
    const response = prompt(
      `Security Validation Check:\nWhat is ${firstNum} + ${secondNum} = ?`,
    );

    if (parseInt(response, 10) === sum) {
      setFinalScreen(true);
    } else {
      alert("Verification calculation error! Submission aborted.");
    }
  }

  // Effect handles authentication initialization logic
  useEffect(() => {
    if (name && subject && questions[subject]) {
      const existingData = localStorage.getItem(`answersMatrix-${name}-${subject}`);
      if (existingData) {
        const parsed = JSON.parse(existingData);
        if (parsed.savedAnswers) {
          setSavedAnswers(parsed.savedAnswers);
        }
      }
    }
  }, [name, subject]);

  // Handle setting/re-hydrating the dynamic code editor values during question index jumps
  useEffect(() => {
    if (name && subject && questions[subject]) {
      const currentQuestion = questions[subject][currentIndex];
      if (currentQuestion && currentQuestion.type === "code" && editorRef.current) {
        const standardValue = savedAnswers[currentIndex] || "// start coding!";
        // Delay to allow Monoco engine initialization instances
        setTimeout(() => {
          if (editorRef.current) {
            editorRef.current.setValue(standardValue);
          }
        }, 80);
      }
    }
  }, [currentIndex, name, subject]);

  // Syntax highlight string parser utility
  const formatTextWithInlineCode = (text) => {
    if (!text) return "";
    const segments = text.split(/(`[^`]+`)/g);
    return segments.map((seg, i) => {
      if (seg.startsWith("`") && seg.endsWith("`")) {
        return (
          <code key={i} className="mx-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-amber-400 text-sm">
            {seg.slice(1, -1)}
          </code>
        );
      }
      return <span key={i}>{seg}</span>;
    });
  };

  if (!name) {
    return (
      <div className="fixed bg-black/50 h-screen w-screen z-[400] flex justify-center items-center">
        <div className="w-96 bg-slate-900 border border-slate-700 rounded-xl p-8 flex flex-col gap-4 text-slate-200">
          <p className="font-bold text-lg font-mono text-white">Initialize Examination Identity</p>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Your Full Name"
            className="p-2.5 px-4 bg-slate-800 rounded border border-slate-700 focus:outline-none focus:border-indigo-500 text-sm"
          />
          <input
            ref={subjectInputRef}
            type="text"
            placeholder="javascript"
            className="p-2.5 px-4 bg-slate-800 rounded border border-slate-700 focus:outline-none focus:border-indigo-500 text-sm"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded transition-all active:scale-95 text-sm"
            onClick={() => {
              if (nameInputRef.current && subjectInputRef.current) {
                const enteredName = nameInputRef.current.value.toLowerCase().trim();
                const enteredSubject = subjectInputRef.current.value.toLowerCase().trim();
                if (enteredName && enteredSubject) {
                  setName(enteredName);
                  setSubject(enteredSubject);
                } else {
                  alert("Please complete fields correctly.");
                }
              }
            }}
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  } else if (name && !questions[subject]) {
    return (
      <div className="h-screen w-screen fixed top-0 left-0 text-white bg-slate-900 flex justify-center items-center">
        <p className="font-mono text-xl">Invalid Subject matching catalog indices!</p>
      </div>
    );
  } else if (finalScreen) {
    return (
      <div ref={finalAnswerRef} className="bg-[#0f172a] min-h-screen text-slate-200 p-12 px-16 lg:px-48 flex flex-col gap-12">
        <div className="border-b border-slate-700 pb-4">
          <h1 className="text-2xl font-bold font-mono text-white">Exam Overview Sheet</h1>
          <p className="text-slate-400 text-sm mt-1">Candidate Profile: <span className="text-indigo-400 font-bold uppercase">{name}</span></p>
        </div>

        {questions[subject].map((questionObj, index) => {
          const answerText = savedAnswers[index] || "No Answer Logged";
          return (
            <div key={index} className="flex flex-col gap-4 font-mono border-b border-slate-800 pb-8">
              <p className="font-bold text-white flex items-start gap-3">
                <span className="bg-slate-800 text-slate-400 border border-slate-700 px-3 py-0.5 text-xs rounded">{index + 1}</span>{" "}
                <span className="flex-1">{formatTextWithInlineCode(questionObj.question)}</span>
              </p>

              {questionObj.type === "mcq" ? (
                <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 pl-6 text-sm text-indigo-300">
                  Selected Answer: <span className="font-bold underline text-white">{answerText}</span>
                </div>
              ) : (
                <pre className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-sm text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                  {answerText}
                </pre>
              )}
            </div>
          );
        })}

        <button
          onClick={() => {
            // 1. Create a virtual deep clone of the current document structure
            const clonedDoc = document.documentElement.cloneNode(true);

            // 2. Locate the head component inside the clone
            const head = clonedDoc.querySelector("head");

            if (head) {
              // 3. Create a script element pointing to the Tailwind Play CDN
              const tailwindScript = document.createElement("script");
              tailwindScript.src = "https://cdn.tailwindcss.com";

              // 4. Append it to the top of the cloned document's head
              head.appendChild(tailwindScript);
            }

            // 5. Convert the modified virtual document structure back to a string
            const htmlContent = clonedDoc.outerHTML;

            // 6. Create the download package
            const file = new Blob([htmlContent], { type: "text/html" });
            const url = URL.createObjectURL(file);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${name}-${subject}-submission.html`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }}
          className="self-center lg:self-end bg-emerald-600 text-white font-medium px-12 py-3 rounded-lg hover:bg-emerald-500 duration-200"
        >
          Export & Save Assessment
        </button>
      </div>
    );
  } else if (!finalScreen && name) {
    const activeQuestion = questions[subject][currentIndex];

    return (
      <div className="flex h-screen bg-[#0f172a] text-slate-200 antialiased">
        {/* Left Column: Question Information Module */}
        <div className="w-1/3 flex flex-col border-r border-slate-700/50 bg-[#1e293b]/30">
          <div className="p-8 overflow-y-auto flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-500/20">
                Question {currentIndex + 1} of {questions[subject].length}
              </span>
              <span className="bg-slate-800 text-slate-400 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-slate-700">
                {activeQuestion.type.toUpperCase()}
              </span>
            </div>

            <h2 className="text-xl font-semibold leading-relaxed text-white font-sans">
              {formatTextWithInlineCode(activeQuestion.question)}
            </h2>
            {/*
            <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 text-sm text-slate-400 leading-6">
              <div className="font-mono text-xs text-slate-500 font-bold mb-2 uppercase tracking-wider">// Execution Context Blueprint:</div>
              <p className="font-sans leading-relaxed">
               {formatTextWithInlineCode(activeQuestion.explanation)}
              </p>
            </div>
            */}
          </div>


          {/* Bottom Pagination Control Center */}
          <div className="p-4 border-t border-slate-700/50 flex flex-col gap-3 bg-[#0f172a]">
            <div className="flex items-center justify-between px-2 text-xs text-slate-500 font-mono">
              <div>Progress metric: {Math.round(((currentIndex + 1) / questions[subject].length) * 100)}%</div>
              <button
                onClick={() => setQuestionsDialogVisible(true)}
                className="text-indigo-400 hover:underline cursor-pointer"
              >
                Dashboard Map
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-medium py-2 rounded-lg transition-all border border-slate-700 text-sm"
              >
                Previous
              </button>

              <button
                disabled={currentIndex === questions[subject].length - 1}
                onClick={handleNext}
                className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-medium py-2 rounded-lg transition-all border border-slate-700 text-sm"
              >
                Next
              </button>

              <button
                onClick={handleFinalSubmit}
                className="bg-rose-600 hover:bg-rose-500 text-white font-medium py-2 rounded-lg transition-all shadow-lg text-sm font-semibold"
              >
                Submit Exam
              </button>
            </div>

            {/* Assessment Question Grid Modal */}
            {questionsDialogVisible && (
              <div
                className="bg-black/80 h-screen w-screen p-12 fixed top-0 left-0 z-[100] flex justify-center items-center"
                onClick={() => setQuestionsDialogVisible(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-slate-900 border border-slate-700 text-white p-8 max-h-[80vh] w-full max-w-4xl overflow-auto flex flex-col gap-4 rounded-xl font-mono"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <p className="font-bold text-lg text-slate-200">Interactive Directory Manifest</p>
                    <button className="text-sm bg-slate-800 text-slate-400 px-3 py-1 rounded" onClick={() => setQuestionsDialogVisible(false)}>Escape</button>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {questions[subject].map((question, index) => {
                      const isAnswered = savedAnswers[index] && savedAnswers[index].trim() !== "";
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            cacheActiveQuestionAnswer();
                            setCurrentIndex(index);
                            setQuestionsDialogVisible(false);
                          }}
                          className={`flex items-center gap-4 border p-2.5 rounded-lg cursor-pointer transition-all ${currentIndex === index
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-slate-800 bg-slate-900 hover:border-slate-700"
                            }`}
                        >
                          <span className={`px-2.5 py-1 text-xs rounded font-bold ${isAnswered ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-slate-800 text-slate-400"}`}>
                            {`${index + 1}`.padStart(2, '0')}
                          </span>
                          <p className="text-xs text-slate-300 truncate flex-1">{question.question}</p>
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">{question.type}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Code Editor OR MCQ Interactive Board */}
        <div className="flex-1 flex flex-col bg-[#0b0f1a]">
          <div className="h-10 border-b border-slate-700/50 flex items-center px-4 bg-slate-900/80 justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
              <span className="ml-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                {subject.split("-")[0]} Sandbox Environment
              </span>
            </div>
            {savedAnswers[currentIndex] && savedAnswers[currentIndex].trim() !== "" && (
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                ✓ Response Captured
              </span>
            )}
          </div>

          <div className="flex-1 relative h-screen">
            {activeQuestion.type === "mcq" ? (
              <div className="p-12 flex flex-col gap-6 max-w-2xl font-sans">
                <h3 className="text-sm text-slate-500 font-mono mb-2">// Evaluation Prompt Options Matrix:</h3>
                <div className="flex flex-col gap-4">
                  {activeQuestion.options.map((option, idx) => {
                    const isSelected = savedAnswers[currentIndex] === option;
                    return (
                      <label
                        key={idx}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer select-none transition-all duration-200 ${isSelected
                          ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-950/20"
                          : "border-slate-800 bg-slate-900/40 hover:bg-slate-900/90 hover:border-slate-700"
                          }`}
                      >
                        <input
                          type="radio"
                          name={`mcq-group-${currentIndex}`}
                          value={option}
                          checked={isSelected}
                          onChange={(e) => {
                            const updated = { ...savedAnswers, [currentIndex]: e.target.value };
                            setSavedAnswers(updated);
                            saveStateToStorage(updated);
                          }}
                          className="w-4 h-4 accent-indigo-500 cursor-pointer"
                        />
                        <span className="text-base text-slate-200 font-mono">{formatTextWithInlineCode(option)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <CodeEditor
                language={subject.split("-")[0]}
                editorRef={editorRef}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}