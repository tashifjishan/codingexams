import { useEffect, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";

export default function QuestionComponent() {
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
      {
        "question": "What is the output of: sum([i for i in range(10) if i % 3 == 0])?",
        "explanation": "hint: consider multiples of 3 less than 10"
      },
      {
        "question": "How many numbers between 1 and 50 (inclusive) are divisible by both 2 and 5?",
        "explanation": "hint: think about LCM of 2 and 5"
      },
      {
        "question": "What is the output of: len([i for i in range(20) if i % 4 == 1])?",
        "explanation": "hint: list numbers giving remainder 1 when divided by 4"
      },
      {
        "question": "What will be printed: for i in range(1,6): if i % 2 == 0: print(i*i)?",
        "explanation": "hint: focus only on even numbers"
      },
      {
        "question": "What is the sum of digits in the string 'a1b2c3d4' after extracting numbers?",
        "explanation": "hint: isolate digits and add them"
      },
      {
        "question": "What is the output of: [len(str(i)) for i in range(8, 15)]?",
        "explanation": "hint: count digits of each number"
      },
      {
        "question": "How many elements are in the list: [i for i in range(100) if i % 7 == 0 and i % 5 == 0]?",
        "explanation": "hint: numbers divisible by both 5 and 7"
      },
      {
        "question": "What is the output of: sum([int(x) for x in '12345'])?",
        "explanation": "hint: convert characters to integers before summing"
      },
      {
        "question": "What will be the result of: max([i*2 for i in range(6)])?",
        "explanation": "hint: find largest value after transformation"
      },
      {
        "question": "What is the output of: min([i**2 for i in range(-3, 3)])?",
        "explanation": "hint: consider squares of negative and positive numbers"
      },
      {
        "question": "How many times will the loop run: for i in range(2, 20, 3)?",
        "explanation": "hint: start at 2, increment by 3, stop before 20"
      },
      {
        "question": "What is the sum of all odd numbers between 1 and 15 using Python logic?",
        "explanation": "hint: filter numbers using modulo"
      },
      {
        "question": "What is the output of: sum([i for i in range(10) if i % 2 != 0])?",
        "explanation": "hint: sum of odd numbers less than 10"
      },
      {
        "question": "What will this return: len(set([1,2,2,3,4,4,5]))?",
        "explanation": "hint: sets remove duplicates"
      },
      {
        "question": "What is the output of: sorted([3,1,4,1,5])[-2]?",
        "explanation": "hint: second largest element"
      },
      {
        "question": "What will be printed: for i in range(3): for j in range(3): if i == j: print(i+j)?",
        "explanation": "hint: when indices are equal"
      },
      {
        "question": "What is the output of: sum([len(str(i)) for i in range(1, 101)])?",
        "explanation": "hint: count digits from 1 to 100"
      },
      {
        "question": "How many numbers between 10 and 99 have both digits the same?",
        "explanation": "hint: think of numbers like 11, 22, etc."
      },
      {
        "question": "What is the output of: [i for i in range(10) if '3' in str(i)]?",
        "explanation": "hint: convert numbers to strings to check digit presence"
      },
      {
        "question": "What is the result of: sum([i for i in range(50) if i % 4 == 0 and i % 6 != 0])?",
        "explanation": "hint: divisible by 4 but not by 6"
      }
    ],
    cpp: [
      {
        question: "Print numbers from 1 to N.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 5;\n    // Use a for loop to iterate from 1 to N\n    // Expected output: 1 2 3 4 5\n    return 0;\n}`,
      },
      {
        question: "Find the sum of all even numbers from 1 to N.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 10, sum = 0;\n    // Iterate 1 to N, check (i % 2 == 0), add to sum\n    // Expected output: 30\n    return 0;\n}`,
      },
      {
        question: "Check if a number is positive, negative, or zero.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = -5;\n    // Use if-else if-else logic\n    // Expected output: Negative\n    return 0;\n}`,
      },
      {
        question: "Swap two numbers using a third variable.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10, temp;\n    // temp = a; a = b; b = temp;\n    // Expected output: a=10, b=5\n    return 0;\n}`,
      },
      {
        question: "Find the smallest of two numbers.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 8;\n    // Use if(a < b) or the ternary operator\n    // Expected output: 8\n    return 0;\n}`,
      },
      {
        question: "Print all odd numbers between 1 and N.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 7;\n    // Loop and check if (i % 2 != 0)\n    // Expected output: 1 3 5 7\n    return 0;\n}`,
      },
      {
        question: "Calculate the square of a number.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 4;\n    // Result is x * x\n    // Expected output: 16\n    return 0;\n}`,
      },
      {
        question: "Find the sum of digits of a number.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 123, sum = 0;\n    // While(num > 0): sum += num % 10; num /= 10;\n    // Expected output: 6\n    return 0;\n}`,
      },
      {
        question: "Check if a number is divisible by 5.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 25;\n    // Check if (num % 5 == 0)\n    // Expected output: Divisible\n    return 0;\n}`,
      },
      {
        question: "Print numbers in reverse from N to 1.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 5;\n    // Use a for loop: for(int i = N; i >= 1; i--)\n    // Expected output: 5 4 3 2 1\n    return 0;\n}`,
      },
      {
        question: "Find the sum of digits of a number.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 123, sum = 0;\n    // While(num > 0): sum += num % 10; num /= 10;\n    // Expected output: 6\n    return 0;\n}`,
      },
      {
        question: "Check if a number is divisible by 5.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 25;\n    // Check if (num % 5 == 0)\n    // Expected output: Divisible\n    return 0;\n}`,
      },
      {
        question: "Print numbers in reverse from N to 1.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 5;\n    // Use a for loop: for(int i = N; i >= 1; i--)\n    // Expected output: 5 4 3 2 1\n    return 0;\n}`,
      },
      {
        question: "Find the sum of digits of a number.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 123, sum = 0;\n    // While(num > 0): sum += num % 10; num /= 10;\n    // Expected output: 6\n    return 0;\n}`,
      },
      {
        question: "Check if a number is divisible by 5.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 25;\n    // Check if (num % 5 == 0)\n    // Expected output: Divisible\n    return 0;\n}`,
      },
      {
        question: "Print numbers in reverse from N to 1.",
        explanation: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int N = 5;\n    // Use a for loop: for(int i = N; i >= 1; i--)\n    // Expected output: 5 4 3 2 1\n    return 0;\n}`,
      },
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
