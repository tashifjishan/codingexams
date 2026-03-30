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
        "question": "What does df['sales'].sum() return in pandas?",
        "explanation": "hint:  think of adding all values in a single column"
      },
      {
        "question": "How do you calculate the mean of a column named 'price'?",
        "explanation": "hint:  there's a built-in function similar to average"
      },
      {
        "question": "What will df.groupby('category')['revenue'].sum() do?",
        "explanation": "hint:  grouping splits data before applying aggregation"
      },
      {
        "question": "How do you count the number of rows in each group using groupby?",
        "explanation": "hint:  use a function that counts entries per group"
      },
      {
        "question": "What does df.loc[0, 'name'] access?",
        "explanation": "hint:  loc uses labels, not positions"
      },
      {
        "question": "What is the difference between df.loc[0:2] and df.iloc[0:2]?",
        "explanation": "hint:  one includes the endpoint, the other does not"
      },
      {
        "question": "How do you filter rows where 'age' > 30 using pandas?",
        "explanation": "hint:  boolean indexing is used"
      },
      {
        "question": "What does df.iloc[1, 2] return?",
        "explanation": "hint:  think row index 1 and column index 2"
      },
      {
        "question": "How do you create a new column 'profit' as revenue - cost?",
        "explanation": "hint:  column operations are vectorized"
      },
      {
        "question": "What does numpy.where(condition, x, y) do?",
        "explanation": "hint:  conditional selection like if-else"
      },
      {
        "question": "Write a numpy.where condition to assign 1 if values in array > 50 else 0.",
        "explanation": "hint:  condition first, then true value, then false value"
      },
      {
        "question": "How do you iterate over a list and sum only even numbers?",
        "explanation": "hint:  use a loop and a condition with modulo"
      },
      {
        "question": "What does the following loop output: for i in range(3): print(i)?",
        "explanation": "hint:  range starts at 0 and excludes the stop"
      },
      {
        "question": "How do you break a loop when a number equals 5?",
        "explanation": "hint:  there is a keyword to exit loops early"
      },
      {
        "question": "What is the output of: sum([i for i in range(5)])?",
        "explanation": "hint:  list comprehension from 0 to 4"
      },
      {
        "question": "How do you apply a function to each element in a pandas column?",
        "explanation": "hint:  there's a method called apply"
      },
      {
        "question": "What does df.groupby('dept').agg({'salary': 'max'}) return?",
        "explanation": "hint:  aggregation with dictionary mapping"
      },
      {
        "question": "How do you select rows 2 to 5 using iloc?",
        "explanation": "hint:  slicing excludes last index"
      },
      {
        "question": "What does df['col'].value_counts() compute?",
        "explanation": "hint:  frequency of unique values"
      },
      {
        "question": "How do you replace values less than 0 with 0 using numpy?",
        "explanation": "hint:  use numpy.where with a condition"
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
