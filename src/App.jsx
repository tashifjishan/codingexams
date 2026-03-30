import { useEffect, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";

export default function QuestionComponent() {
  // useEffect(() => {
  //   function handleVisibilityChange() {
  //     if (document.visibilityState === "hidden") {
  //       alert("This will be counted as an attempt of cheating.");
  //     }
  //   }

  //   function handleBlur() {
  //     alert("This will be counted as an attempt of cheating.");
  //   }

  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   window.addEventListener("blur", handleBlur);

  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //     window.removeEventListener("blur", handleBlur);
  //   };
  // }, []);
  const questions = {
    javascript: [
      {
        question:
          "Write a program to print numbers from 1 to 50. But for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'.",
        explanation:
          "Use a loop (for loop preferred). At each iteration, check conditions using if-else. First check for divisible by both (i % 3 === 0 && i % 5 === 0), then individual cases. Order of conditions matters.",
      },
      {
        question:
          "Count how many digits are present in a given number (e.g., 12345 → 5 digits).",
        explanation:
          "Use a while loop. Keep dividing the number by 10 using Math.floor(num / 10) until it becomes 0. Increment a counter each time.",
      },
      {
        question: "Reverse a number (e.g., 1234 → 4321).",
        explanation:
          "Use a loop. Extract last digit using num % 10, then build reversed number using rev = rev * 10 + digit. Reduce number using Math.floor(num / 10).",
      },
      {
        question:
          "Check whether a given number is a palindrome (e.g., 121 → true, 123 → false).",
        explanation:
          "Reverse the number using the logic from previous question and compare it with the original number. If equal, it's a palindrome.",
      },
      {
        question: "Find the sum of digits of a number (e.g., 123 → 6).",
        explanation:
          "Use a loop. Extract each digit using num % 10 and add to sum. Reduce number using Math.floor(num / 10).",
      },
      {
        question: "Print all even numbers between 1 and 100.",
        explanation:
          "Use a loop from 1 to 100. Check if number % 2 === 0 and print it.",
      },
      {
        question: "Given a string, count how many vowels are present in it.",
        explanation:
          "Loop through string using for loop. Check each character against vowels (a, e, i, o, u). You may convert string to lowercase for consistency.",
      },
      {
        question: "Reverse a string without using built-in reverse() method.",
        explanation:
          "Loop from end of string to start and build a new string by concatenating characters.",
      },
      {
        question: "Check if a string is a palindrome (e.g., 'madam').",
        explanation:
          "Reverse the string manually and compare it with original string. If equal → palindrome.",
      },
      {
        question:
          "Count how many times a specific character appears in a string.",
        explanation:
          "Loop through string and compare each character with target character. Maintain a counter.",
      },
      {
        question:
          "Find the largest number in an array without using built-in methods.",
        explanation:
          "Initialize max = arr[0]. Loop through array and update max if a larger element is found.",
      },
      {
        question:
          "Find the smallest number in an array without using built-in methods.",
        explanation:
          "Initialize min = arr[0]. Loop through array and update min when a smaller element is found.",
      },
      {
        question: "Calculate the sum of all elements in an array.",
        explanation:
          "Initialize sum = 0. Loop through array and add each element to sum.",
      },
      {
        question: "Print all elements of an array in reverse order.",
        explanation:
          "Loop from last index (arr.length - 1) to 0 and print elements.",
      },
      {
        question:
          "Count how many even and odd numbers are present in an array.",
        explanation:
          "Loop through array. If element % 2 === 0 → evenCount++, else oddCount++.",
      },
      {
        question: "Check if a number is prime.",
        explanation:
          "Loop from 2 to sqrt(n). If any number divides n, it's not prime. Otherwise, it's prime.",
      },
      {
        question: "Print multiplication table of a given number.",
        explanation:
          "Use a loop from 1 to 10. Multiply given number with loop variable and print.",
      },
      {
        question: "Remove all spaces from a string.",
        explanation:
          "Loop through string and build a new string by adding only non-space characters.",
      },
      {
        question:
          "Check if a string contains only digits using a regular expression.",
        explanation:
          "Use regex /^[0-9]+$/. Use test() method to check if string matches only digits.",
      },
      {
        question:
          "Validate if a string is a valid simple email format (basic regex).",
        explanation:
          "Use regex like /^[a-zA-Z0-9._]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$/. Use test() method. This is basic validation, not production-level.",
      },
    ],
    python: [
      { question: "Print numbers from 1 to 10 using a for loop.", explanation: "hint: Use range() in a for loop." },
      { question: "Print all even numbers between 1 and 20.", explanation: "hint: Check divisibility by 2." },
      { question: "Print all odd numbers between 1 and 15 using a while loop.", explanation: "hint: Increment the counter by 1 each time." },
      { question: "Print numbers from 10 down to 1 in descending order.", explanation: "hint: Use range() with a negative step." },
      { question: "Print the sum of all numbers from 1 to 50.", explanation: "hint: Keep a running total inside the loop." },
      { question: "Print the multiplication table of 7 up to 10.", explanation: "hint: Multiply 7 by numbers from 1 to 10." },
      { question: "Print all numbers from 1 to 30 that are divisible by 3.", explanation: "hint: Use modulus operator to check divisibility." },
      { question: "Print numbers from 1 to 10, but skip 5 using continue.", explanation: "hint: Use an if condition inside the loop to skip." },
      { question: "Print numbers from 1 to 10, but stop the loop if number is greater than 7 using break.", explanation: "hint: Use an if condition and break statement." },
      { question: "Print all characters of the string 'Python' one by one using a loop.", explanation: "hint: You can iterate directly over a string." },
      { question: "Print all elements of the list [2,4,6,8,10] using a for loop.", explanation: "hint: Iterate over the list directly." },
      { question: "Print the sum of all elements in the list [1,2,3,4,5].", explanation: "hint: Use a loop to accumulate the total." },
      { question: "Print numbers from 1 to 20, and print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5.", explanation: "hint: Use modulus operator with if/elif." },
      { question: "Print the reverse of the string 'Python'.", explanation: "hint: Use slicing or loop from the end." },
      { question: "Print the first 10 numbers and their squares.", explanation: "hint: Multiply the number by itself inside the loop." },
      { question: "Print numbers from 1 to 50, and print only those that are divisible by both 2 and 5.", explanation: "hint: Use logical AND in if condition." },
      { question: "Print all items in the list ['apple','banana','cherry'] in uppercase.", explanation: "hint: Use string method upper() inside the loop." },
      { question: "Print the factorial of 5 using a loop.", explanation: "hint: Multiply numbers from 1 to 5 in a running product." },
      { question: "Print numbers from 1 to 10, but mark even numbers with 'E' and odd numbers with 'O'.", explanation: "hint: Use modulus operator inside loop to check even/odd." },
      { question: "Print numbers from 1 to 20, but replace multiples of 4 with '*'.", explanation: "hint: Use if condition to check divisibility by 4." }
    ],
    "javascript-basic": [
      {
        "question": "Print numbers from 1 to 50, but print \"Fizz\" for multiples of 3 and \"Buzz\" for multiples of 5.",
        "explanation": "You need to iterate through numbers from 1 to 50 and apply conditions to decide whether to print the number itself or replace it with specific words based on divisibility."
      },
      {
        "question": "Find the sum of all even numbers between 1 and 100.",
        "explanation": "You are required to identify even numbers within a range and calculate their total sum."
      },
      {
        "question": "Count how many numbers between 1 and 200 are divisible by both 4 and 6.",
        "explanation": "The task involves checking numbers in a range and counting those that satisfy multiple divisibility conditions."
      },
      {
        "question": "Reverse a number (e.g., input 1234 → output 4321).",
        "explanation": "You need to transform a number so that its digits appear in reverse order."
      },
      {
        "question": "Find the largest digit in a given number.",
        "explanation": "This requires examining each digit of a number and determining which one has the highest value."
      },
      {
        "question": "Check if a number is a palindrome (e.g., 121 → true).",
        "explanation": "A palindrome number reads the same forward and backward, so you must compare its original form with its reversed version."
      },
      {
        "question": "Print the factorial of a number using a loop.",
        "explanation": "Factorial is the product of all positive integers up to a given number, and you need to compute it iteratively."
      },
      {
        "question": "Count the number of digits in a number using a loop.",
        "explanation": "The task is to determine how many digits a number contains by repeatedly processing it."
      },
      {
        "question": "Print all prime numbers between 1 and 50.",
        "explanation": "You must identify numbers that are divisible only by 1 and themselves within a given range."
      },
      {
        "question": "Generate the first 10 numbers of the Fibonacci sequence.",
        "explanation": "The Fibonacci sequence is formed by adding the previous two numbers, and you need to generate a fixed number of terms."
      },
      {
        "question": "Find the sum of digits of a number (e.g., 123 → 6).",
        "explanation": "You must extract each digit from a number and compute their total sum."
      },
      {
        "question": "Check if a number is an Armstrong number.",
        "explanation": "An Armstrong number is one where the sum of its digits raised to the power of the number of digits equals the number itself."
      },
      {
        "question": "Print numbers from 1 to 100, but print \"Even\" for even numbers and \"Odd\" for odd numbers.",
        "explanation": "You need to classify numbers based on whether they are divisible by 2 and print corresponding labels."
      },
      {
        "question": "Find the second largest number in an array.",
        "explanation": "You are given a collection of numbers and must determine the value that is the second highest."
      },
      {
        "question": "Count how many numbers in an array are greater than 50.",
        "explanation": "The task is to examine each element in an array and count how many exceed a given threshold."
      },
      {
        "question": "Select an element with id \"counter\" and increment its value by 1 when a button is clicked.\n\n<button id=\"btn\">Click</button>\n<p id=\"counter\">0</p>",
        "explanation": "You need to access a specific DOM element and update its displayed value in response to a user interaction."
      },
      {
        "question": "Select all elements with class \"item\" and change their background color if their text is a number greater than 10.\n\n<div class=\"item\">5</div>\n<div class=\"item\">15</div>",
        "explanation": "This involves selecting multiple DOM elements, reading their content, and conditionally modifying their style."
      },
      {
        "question": "Get the value from an input field and display whether it is even or odd in a <p> tag.\n\n<input id=\"num\" />\n<p id=\"result\"></p>",
        "explanation": "You must read user input, evaluate it, and display a result dynamically on the page."
      },
      {
        "question": "Add a click event to a button that takes a number input and displays its square and cube.\n\n<input id=\"num\" />\n<button id=\"btn\">Calculate</button>\n<p id=\"output\"></p>",
        "explanation": "This requires capturing input, performing calculations, and showing multiple computed results after a user action."
      },
      {
        "question": "Add an event listener to a list so that when any list item is clicked, its numeric value is doubled.\n\n<ul>\n  <li>2</li>\n  <li>5</li>\n  <li>10</li>\n</ul>",
        "explanation": "You need to detect which element triggered an event and modify its displayed numeric value accordingly."
      }
    ],
    cpp: [
      { question: "What is the output of the following code?\n\nint x = 5;\nif(x > 3) {\n  cout << \"Yes\";\n}", explanation: "hint: Check if 5 is greater than 3." },
      { question: "Which loop is best when the number of iterations is known beforehand?", explanation: "hint: for loop is usually used when iterations are fixed." },
      { question: "What will this code print?\n\nint i = 0;\nwhile(i < 3) {\n  cout << i;\n  i++;\n}", explanation: "hint: Consider how i increments each time." },
      { question: "What keyword is used to exit a loop immediately?", explanation: "hint: Think of a word that 'breaks' the loop." },
      { question: "What is the output?\n\nint x = 10;\nif(x % 2 == 0) {\n  cout << \"Even\";\n} else {\n  cout << \"Odd\";\n}", explanation: "hint: 10 modulo 2 equals 0." },
      { question: "Which loop will execute at least once, even if the condition is false?", explanation: "hint: Only one type of loop checks the condition after executing." },
      { question: "What does the 'continue' statement do inside a loop?", explanation: "hint: It skips the remaining code and jumps to the next iteration." },
      { question: "Write a for loop to print numbers from 1 to 5.", explanation: "hint: Use for(initialization; condition; increment) structure." },
      { question: "What is the output?\n\nint a = 5;\nif(a < 3) cout << \"Small\";\nelse if(a < 10) cout << \"Medium\";\nelse cout << \"Large\";", explanation: "hint: Check which condition is true first." },
      { question: "How do you create an infinite loop using while?", explanation: "hint: Think about a condition that is always true." },
      { question: "Which operator is used for logical AND in conditions?", explanation: "hint: It's a double symbol: &&." },
      { question: "What will be printed?\n\nfor(int i = 0; i < 3; i++) {\n  if(i == 1) break;\n  cout << i;\n}", explanation: "hint: Loop breaks when i equals 1." },
      { question: "How do you check if a number 'n' is not equal to 0 in an if statement?", explanation: "hint: Use != operator." },
      { question: "Write a while loop to print numbers 1 to 3.", explanation: "hint: Initialize a variable before the loop and increment inside." },
      { question: "What is the output?\n\nint x = 3;\nif(x > 5)\n  cout << \"A\";\nelse\n  cout << \"B\";", explanation: "hint: x is not greater than 5." },
      { question: "Which loop is preferable if the number of iterations is unknown?", explanation: "hint: while or do-while loops are used when iterations depend on a condition." },
      { question: "What does this code print?\n\nfor(int i = 1; i <= 3; i++) {\n  if(i == 2) continue;\n  cout << i;\n}", explanation: "hint: It skips printing 2." },
      { question: "Which statement allows multiple conditions to be checked sequentially?", explanation: "hint: else if allows multiple checks." },
      { question: "How do you write a do-while loop that prints 'Hello' once?", explanation: "hint: do { /* code */ } while(condition); structure." },
      { question: "What is the output?\n\nint x = 0;\nif(x) cout << \"Yes\";\nelse cout << \"No\";", explanation: "hint: 0 is considered false in C++." }
    ],
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalScreen, setFinalScreen] = useState(false);
  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [questionsDialogVisible, setQuestionsDialogVisible] = useState(true);

  const editorRef = useRef(null);
  function handleNext() {
    const firstNum = Math.floor(Math.random() * 11);
    const secondNum = Math.floor(Math.random() * 11);
    const sum = firstNum + secondNum;
    const response = prompt(
      `Just to make sure you really mean to move forward. Please answer the following questions:\n${firstNum}+${secondNum} = ?`,
    );
    if (response != sum) return;

    if (editorRef.current) {
      let prev = localStorage.getItem(`answers-${name}-${subject}`);
      prev = JSON.parse(prev);
      if (prev) {
        const answer = {
          question: questions[subject][currentIndex].question,
          answer: editorRef.current.getValue(),
        };
        prev.answers.push(answer);
        prev.questionCount = currentIndex + 1;
        editorRef.current.setValue("");
        // }
        setCurrentAnswers(prev.answers);
        localStorage.setItem(
          `answers-${name}-${subject}`,
          JSON.stringify(prev),
        );
      }

      if (currentIndex != questions[subject].length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setFinalScreen(true);
      }
    }
  }

  const finalAnswerRef = useRef(null);
  const nameInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  useEffect(() => {
    if (name && questions[subject.split("-")[0]]) {
      if (!localStorage.getItem(`answers-${name}-${subject}`)) {
        localStorage.setItem(
          `answers-${name}-${subject}`,
          JSON.stringify({ name: name, answers: [], questionCount: 0 }),
        );
      } else {
        const saved = JSON.parse(
          localStorage.getItem(`answers-${name}-${subject}`),
        );
        if (saved.questionCount >= questions[subject].length) {
          setFinalScreen(true);
        } else {
          setCurrentIndex(saved.questionCount);
        }
        setCurrentAnswers(saved.answers);
      }
    }
  }, [name]);

  if (!name) {
    return (
      <div className="fixed bg-black/50 h-screen w-screen z-[400] flex justify-center items-center">
        <div className="w-400 bg-white px-12 py-6 flex flex-col gap-2">
          <p className="font-bold text-lg font-mono">
            Please tell us your name.
          </p>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Jhon Doe"
            className="p-2 px-6 border-[1px]"
          />
          <input
            ref={subjectInputRef}
            type="text"
            placeholder="javascript"
            className="p-2 px-6 border-[1px]"
          />
          <button
            className="bg-green-500 p-2"
            onClick={() => {
              if (nameInputRef.current && subjectInputRef.current) {
                setName(nameInputRef.current.value.toLowerCase().trim());
                setSubject(subjectInputRef.current.value.toLowerCase().trim());
              }
            }}
          >
            Start
          </button>
        </div>
      </div>
    );
  } else if (name && !questions[subject.split("-")[0]]) {
    return (
      <div className="h-screen w-screen fixed top-0 left-0 text-white bg-slate-800 flex justify-center items-center">
        <p className="font-mono text-xl">Invalid Subject!</p>
      </div>
    );
  } else if (finalScreen) {
    let answers = JSON.parse(
      localStorage.getItem(`answers-${name}-${subject}`),
    );
    answers = answers.answers;
    return (
      <div
        ref={finalAnswerRef}
        className="bg-slate-800 min-h-screen text-white p-12 px-48 flex flex-col gap-12"
      >
        {answers.map((answer, index) => {
          if (answer.answer.trim() != "" && answer.answer.trim().toLowerCase() != "// start coding!") return (
            <div className="flex flex-col gap-6 font-mono">
              <p className="font-bold">
                <span className="bg-white/20 px-4">{index + 1}</span>{" "}
                {answer.question}
              </p>
              <pre className="bg-white/10 p-12">{answer.answer}</pre>
            </div>
          );
        })}

        <button
          onClick={() => {
            const htmlContent = document.documentElement.outerHTML;
            const file = new Blob([htmlContent], { type: "text/html" });
            const url = URL.createObjectURL(file);
            const a = document.createElement("a");
            a.href = url;
            a.download = "page.html";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }}
          className="self-end bg-green-500 px-12 py-2 text-slate-800 rounded-lg hover:bg-slate-800 duration-300 hover:text-white hover:border-[1px] border-green-500"
        >
          Save
        </button>
      </div>
    );
  } else if (!finalScreen && name) {
    return (
      <div className="flex h-screen bg-[#0f172a] text-slate-200 antialiased">
        {/* Left Column: Question Info */}
        <div className="w-1/3 flex flex-col border-r border-slate-700/50 bg-[#1e293b]/30">
          <div className="p-8 overflow-y-auto flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-500/20">
                Question {currentIndex + 1}
              </span>
            </div>

            <h2 className="text-xl font-semibold leading-relaxed text-white">
              {questions[subject][currentIndex].question}
            </h2>

            <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 text-sm text-slate-400 leading-6">
              <pre className="font-mono italic w-full whitespace-pre-wrap break-all">
                {questions[subject][currentIndex].explanation}
              </pre>
            </div>
          </div>

          {/* Bottom Actions for Left Column */}
          <div className="p-6 border-t border-slate-700/50 flex justify-between items-center bg-[#0f172a]">
            <div className="text-xs text-slate-500 font-mono">
              Progress:{" "}
              {Math.round(
                ((currentIndex + 1) / questions[subject].length) * 100,
              )}
              %
            </div>
            <button
              onClick={handleNext}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-8 rounded-lg transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              {currentIndex === questions[subject].length - 1
                ? "Submit Exam"
                : "Next Challenge"}
            </button>

            <button onClick={() => setQuestionsDialogVisible(true)}>
              Show All Questions
            </button>
            {questionsDialogVisible && (
              <div
                className="bg-black/80 h-screen w-screen p-12 fixed top-0 left-0 z-[100]  "
                onClick={() => setQuestionsDialogVisible(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-slate-800 text-white p-12 max-h-[80vh] overflow-auto  flex flex-col gap-2 font-mono text-xl "
                >
                  <p className="font-bold bg-white/50 p-4 mb-12">
                    You are supposed to answer any 10 questions.
                  </p>
                  {questions[subject].map((question, index) => (
                    <div className="flex gap-2">
                      <span className="bg-white/20 px-4 py-2">
                        {`${index + 1}`.padStart(2, 0)}
                      </span>
                      . <p>{question.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Editor */}
        <div className="flex-1 flex flex-col bg-[#0b0f1a]">
          <div className="h-10 border-b border-slate-700/50 flex items-center px-4 bg-slate-900/80">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
            </div>
            <span className="ml-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
              {subject.split("-")[0]}
            </span>
          </div>

          <div className="flex-1 relative h-screen bg-green-500">
            <CodeEditor
              language={subject.split("-")[0]}
              editorRef={editorRef}
            />
          </div>
        </div>
      </div>
    );
  }

  // if(questionsDialogVisible){
  //   return(

  //   )
  // }
}
