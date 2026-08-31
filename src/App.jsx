import { useEffect, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";

export default function QuestionComponent() {
  const questions = {
    "python-morning":
      [
        {
          type: "mcq",
          question: "What is the output of print(15 % 4)?",
          options: ["3", "4", "2", "1"],
          answer: "3",
        },
        {
          type: "mcq",
          question: "Which statement is used to check multiple conditions in Python?",
          options: ["if", "elif", "else", "switch"],
          answer: "elif",
        },
        {
          type: "mcq",
          question: "What is the output of the following?\n\nx = 10\nif x > 5:\n    print('Yes')\nelse:\n    print('No')",
          options: ["Yes", "No", "10", "Error"],
          answer: "Yes",
        },
        {
          type: "mcq",
          question: "How many times will the following loop execute?\n\nfor i in range(5):",
          options: ["4", "5", "6", "0"],
          answer: "5",
        },
        {
          type: "mcq",
          question: "What is the output of len('Python')?",
          options: ["5", "6", "7", "Error"],
          answer: "6",
        },
        {
          type: "mcq",
          question: "Which string method converts all characters to uppercase?",
          options: ["capitalize()", "upper()", "title()", "swapcase()"],
          answer: "upper()",
        },
        {
          type: "mcq",
          question: "What is the output of 'python'.capitalize()?",
          options: ["Python", "PYTHON", "python", "PyThOn"],
          answer: "Python",
        },
        {
          type: "mcq",
          question: "Which method removes whitespace from both ends of a string?",
          options: ["trim()", "strip()", "remove()", "delete()"],
          answer: "strip()",
        },
        {
          type: "mcq",
          question: "What is the output of 'apple'.find('p')?",
          options: ["1", "2", "0", "-1"],
          answer: "1",
        },
        {
          type: "mcq",
          question: "Which method replaces a substring with another string?",
          options: ["change()", "replace()", "modify()", "swap()"],
          answer: "replace()",
        },
        {
          type: "mcq",
          question: "What is the output of [1, 2, 3][1]?",
          options: ["1", "2", "3", "Error"],
          answer: "2",
        },
        {
          type: "mcq",
          question: "Which list method adds an element to the end of a list?",
          options: ["insert()", "append()", "extend()", "add()"],
          answer: "append()",
        },
        {
          type: "mcq",
          question: "Which list method removes the last element of a list?",
          options: ["delete()", "remove()", "pop()", "clear()"],
          answer: "pop()",
        },
        {
          type: "mcq",
          question: "What is the output?\n\nnums = [10, 20, 30]\nprint(len(nums))",
          options: ["2", "3", "30", "Error"],
          answer: "3",
        },
        {
          type: "mcq",
          question: "What is the output of sum([2, 4, 6])?",
          options: ["10", "12", "14", "8"],
          answer: "12",
        },
        {
          type: "mcq",
          question: "How many times will this loop execute?\n\nfor i in range(2, 10, 2):",
          options: ["3", "4", "5", "6"],
          answer: "4",
        },
        {
          type: "mcq",
          question: "What is the output?\n\nx = 7\nif x % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
          options: ["Even", "Odd", "7", "Error"],
          answer: "Odd",
        },
        {
          type: "mcq",
          question: "Which loop is generally used when the number of iterations is known?",
          options: ["while", "for", "do-while", "repeat"],
          answer: "for",
        },
        {
          type: "mcq",
          question: "What is the output?\n\ntext = 'Python'\nprint(text[0:-1])",
          options: ["Python", "nohtyP", "Pnohty", "Error"],
          answer: "nohtyP",
        },
        {
          type: "mcq",
          question: "Which method sorts a list in ascending order?",
          options: ["arrange()", "order()", "sort()", "sortedlist()"],
          answer: "sort()",
        },
        {
          type: "code",
          question: "Write a Python program to print the multiplication table of a given number.",
        },
        {
          type: "code",
          question: "Write a Python program to check whether a given number is even or odd using if-else.",
        },
        {
          type: "code",
          question: "Write a Python program to find the largest of three numbers using if-elif-else.",
        },
        {
          type: "code",
          question: "Write a Python program to calculate the factorial of a given number using a for loop.",
        },
        {
          type: "code",
          question: "Write a Python program to print all even numbers from 1 to 100 using a loop.",
        },
        {
          type: "code",
          question: "Write a Python program to calculate the sum of the first N natural numbers.",
        },
        {
          type: "code",
          question: "Write a Python program to count the number of digits in a given integer.",
        },
        {
          type: "code",
          question: "Write a Python program to reverse a given number using a while loop.",
        },
        {
          type: "code",
          question: "Write a Python program to check whether a given number is a palindrome.",
        },
        {
          type: "code",
          question: "Write a Python program to print the following pattern for N rows:\n*\n**\n***\n****",
        },
        {
          type: "code",
          question: "Write a Python program to count the number of vowels in a given string.",
        },
        {
          type: "code",
          question: "Write a Python program to check whether a given string is a palindrome.",
        },
        {
          type: "code",
          question: "Write a Python program to count the occurrences of a specific character in a string.",
        },
        {
          type: "code",
          question: "Write a Python program to replace all spaces in a string with hyphens (-).",
        },
        {
          type: "code",
          question: "Write a Python program to find the longest word in a given sentence.",
        },
        {
          type: "code",
          question: "Write a Python program to find the largest element in a list without using max().",
        },
        {
          type: "code",
          question: "Write a Python program to calculate the sum of all elements in a list.",
        },
        {
          type: "code",
          question: "Write a Python program to remove duplicate elements from a list.",
        },
        {
          type: "code",
          question: "Write a Python program to count how many even and odd numbers are present in a list.",
        },
        {
          type: "code",
          question: "Write a Python program to create a new list containing the squares of all even numbers from 1 to 20.",
        },

      ],
    "python-dsdc-august": [
      {
        type: "code",
        question: "Write a Python program to find the largest number in a list."
      },
      {
        type: "code",
        question: "Write a Python program to count how many even numbers are present in a list."
      },
      {
        type: "code",
        question: "Write a Python program to calculate the sum of all numbers in a list."
      },
      {
        type: "code",
        question: "Write a Python program to create a new list containing only the positive numbers from a given list."
      },
      {
        type: "code",
        question: "Write a Python program to find how many times a given element appears in a list."
      },
      {
        type: "code",
        question: "Write a Python program to print all the elements of a list using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to reverse a list using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to find the smallest number in a list without using the min() function."
      },
      {
        type: "code",
        question: "Write a Python program to remove all duplicate elements from a list."
      },
      {
        type: "code",
        question: "Write a Python program to separate the even and odd numbers from a list into two different lists."
      },
      {
        type: "code",
        question: "Write a Python program to create a dictionary containing the names of three students and their marks."
      },
      {
        type: "code",
        question: "Write a Python program to print all the keys and values of a dictionary using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to find the student with the highest marks from a dictionary of student names and marks."
      },
      {
        type: "code",
        question: "Write a Python program to count the number of times each character appears in a given string using a dictionary."
      },
      {
        type: "code",
        question: "Write a Python program to check whether a given key exists in a dictionary."
      },
      {
        type: "code",
        question: "Write a Python program to calculate the total of all the values in a dictionary."
      },
      {
        type: "code",
        question: "Write a Python program to create a dictionary of numbers from 1 to 5 and their squares."
      },
      {
        type: "code",
        question: "Write a Python program to print only the dictionary values that are greater than 50."
      },
      {
        type: "code",
        question: "Write a Python program to check whether a given number is positive, negative, or zero using if/elif/else."
      },
      {
        type: "code",
        question: "Write a Python program to check whether a given number is even or odd."
      },
      {
        type: "code",
        question: "Write a Python program to print the numbers from 1 to 20 using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to print the multiplication table of a given number using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to calculate the factorial of a given number using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to count the number of vowels in a given string using a loop."
      },
      {
        type: "code",
        question: "Write a Python program to check whether a given number is divisible by both 3 and 5."
      },
      {
        type: "code",
        question: "Write a Python function named greet that takes a person's name as a parameter and prints a greeting message."
      },
      {
        type: "code",
        question: "Write a Python function named add_numbers that takes two numbers as arguments and returns their sum."
      },
      {
        type: "code",
        question: "Write a Python function named is_even that takes a number as an argument and returns True if it is even and False otherwise."
      },
      {
        type: "code",
        question: "Write a Python function named find_largest that takes a list of numbers as a parameter and returns the largest number."
      },
      {
        type: "code",
        question: "Write a Python function named count_vowels that takes a string as a parameter and returns the number of vowels in the string."
      }
    ],

    "javascript-dsdc-august": [
      {
        type: "code",
        question: "Write a JavaScript program to declare variables for your name, age, and city, and print them to the console."
      },
      {
        type: "code",
        question: "Write a JavaScript program to swap the values of two variables."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate the area of a rectangle using length and width variables."
      },
      {
        type: "code",
        question: "Write a JavaScript program to convert a temperature from Celsius to Fahrenheit."
      },
      {
        type: "code",
        question: "Write a JavaScript program to check whether a given number is positive, negative, or zero using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program to check whether a given number is even or odd."
      },
      {
        type: "code",
        question: "Write a JavaScript program to find the largest of three numbers using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program to print the numbers from 1 to 20 using a for loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to print the multiplication table of a given number using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate the sum of all numbers from 1 to a given number using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate the factorial of a given number using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to count the number of vowels in a given string."
      },
      {
        type: "code",
        question: "Write a JavaScript function named greet that takes a name as a parameter and prints a greeting message."
      },
      {
        type: "code",
        question: "Write a JavaScript function named add that takes two numbers as parameters and returns their sum."
      },
      {
        type: "code",
        question: "Write a JavaScript function named isEven that takes a number as an argument and returns true if the number is even and false otherwise."
      },
      {
        type: "code",
        question: "Write a JavaScript function named findLargest that takes an array of numbers and returns the largest number."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an array of five numbers and print each element using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to find the sum of all elements in an array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create a new array containing only the even numbers from a given array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to reverse an array without using the reverse() method."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an object representing a student with properties for name, age, and marks, and print each property."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an array of student objects and print the names of students who scored more than 80 marks."
      },
      {
        type: "code",
        question: "Write a JavaScript program to select a button from an HTML page using the DOM and change its text when it is clicked."
      },
      {
        type: "code",
        question: "Write a JavaScript program that takes text from an input field and displays the text inside a paragraph when a button is clicked."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create a simple counter with Increment and Decrement buttons using DOM events."
      },
      {
        type: "code",
        question: "Write a JavaScript program to use setTimeout() to print a message to the console after 2 seconds."
      },
      {
        type: "code",
        question: "Write a JavaScript program that uses fetch() to retrieve data from a public API and print the returned JSON data to the console."
      },
      {
        type: "code",
        question: "Write a JavaScript program that uses fetch() and async/await to retrieve a list of users from an API and print their names."
      },
      {
        type: "code",
        question: "Write a JavaScript program that uses fetch() to retrieve data from an API and displays the results as a list of items on an HTML page."
      },
      {
        type: "code",
        question: "Write a JavaScript program that uses fetch() with async/await and try/catch to handle API errors and display an appropriate error message to the user."
      }
    ],
    "react-dsdc-july": [
      {
        type: "code",
        question: "Create a React functional component named Welcome that displays 'Hello, React!' inside an <h1> tag."
      },
      {
        type: "code",
        question: "Create a React component named Student that displays your name and course inside separate <p> tags."
      },
      {
        type: "code",
        question: "Create a Header component and render it inside the App component."
      },
      {
        type: "code",
        question: "Create a Footer component that displays '© 2026 My Website' and render it in App."
      },
      {
        type: "code",
        question: "Create a Profile component that displays a profile picture, name, and profession."
      },
      {
        type: "code",
        question: "Create a Greeting component that accepts a name prop and displays 'Hello, {name}!'."
      },
      {
        type: "code",
        question: "Create a Product component that receives productName and price as props and displays them."
      },
      {
        type: "code",
        question: "Create a UserCard component that accepts username and age as props and displays them."
      },
      {
        type: "code",
        question: "Create a Movie component that receives title and rating as props and displays them."
      },
      {
        type: "code",
        question: "Create a Book component that receives title, author, and year as props and displays the information."
      },
      {
        type: "code",
        question: "Rewrite the Greeting component using props destructuring instead of props.name."
      },
      {
        type: "code",
        question: "Create a StudentCard component that destructures name, rollNo, and course from props."
      },
      {
        type: "code",
        question: "Create a ProductCard component that destructures productName and price from props."
      },
      {
        type: "code",
        question: "Create a Weather component that destructures city and temperature from props and displays them."
      },
      {
        type: "code",
        question: "Create an Employee component that destructures name, department, and salary from props."
      },
      {
        type: "code",
        question: "Create a button that displays an alert saying 'Button Clicked!' when clicked."
      },
      {
        type: "code",
        question: "Create a button that logs 'React Event Triggered' to the console when clicked."
      },
      {
        type: "code",
        question: "Create a component with a button that changes the page title to 'Welcome to React' when clicked."
      },
      {
        type: "code",
        question: "Create two buttons: one displays an alert saying 'Accepted' and the other displays 'Rejected'."
      },
      {
        type: "code",
        question: "Create a button that changes the background color of the page when clicked."
      },
      {
        type: "code",
        question: "Create a counter application using useState with Increment and Decrement buttons."
      },
      {
        type: "code",
        question: "Create a component that displays a name using useState and changes it to another name when a button is clicked."
      },
      {
        type: "code",
        question: "Create a component that toggles between 'ON' and 'OFF' using useState."
      },
      {
        type: "code",
        question: "Create a component that tracks the number of times a button has been clicked using useState."
      },
      {
        type: "code",
        question: "Create a component that increases a score by 10 every time a button is clicked using useState."
      },
      {
        type: "code",
        question: "Create a component that displays 'Logged In' if isLoggedIn is true; otherwise display 'Please Log In'."
      },
      {
        type: "code",
        question: "Create a component that displays 'Pass' if marks are 40 or above; otherwise display 'Fail'."
      },
      {
        type: "code",
        question: "Create a component that conditionally displays an image only if showImage is true."
      },
      {
        type: "code",
        question: "Create a React component that renders a list of five fruits using the map() method."
      },
      {
        type: "code",
        question: "Create a React component that renders a list of students (name and roll number) using map() and assigns a unique key to each item."
      }
    ],

    "cpp-dics-july": [
      {
        type: "code",
        question: "Write a C++ program to input two numbers and print the larger number using if/else.",
      },
      {
        type: "code",
        question: "Write a C++ program to check whether a number is even or odd using if/else.",
      },
      {
        type: "code",
        question: "Write a C++ program to check whether a number is positive, negative, or zero using if/else.",
      },
      {
        type: "code",
        question: "Write a C++ program to find the largest of three numbers using if/else statements.",
      },
      {
        type: "code",
        question: "Write a C++ program to determine whether a given year is a leap year using if/else.",
      },
      {
        type: "code",
        question: "Write a C++ program to calculate the factorial of a number using a for loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to print the multiplication table of a number from 1 to 10 using a for loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to print all even numbers from 1 to 100 using a for loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to calculate the sum of the first n natural numbers using a for loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to print a right-angled triangle pattern of stars using nested for loops.",
      },
      {
        type: "code",
        question: "Write a C++ program to reverse the digits of a number using a while loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to count the number of digits in an integer using a while loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to check whether a number is a palindrome using a while loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to calculate the sum of the digits of a number using a while loop.",
      },
      {
        type: "code",
        question: "Write a C++ program to print the Fibonacci series up to n terms using a while loop.",
      },
      {
        type: "code",
        question: "Write a C++ function that takes two integers as input and returns their sum.",
      },
      {
        type: "code",
        question: "Write a C++ function to calculate the square of a given number.",
      },
      {
        type: "code",
        question: "Write a C++ function to determine whether a number is prime.",
      },
      {
        type: "code",
        question: "Write a C++ function that returns the factorial of a given number.",
      },
      {
        type: "code",
        question: "Write a C++ function that accepts a character and returns whether it is a vowel or a consonant.",
      },
      {
        type: "code",
        question: "Write a C++ program to input 10 integers into an array and print all the elements.",
      },
      {
        type: "code",
        question: "Write a C++ program to find the largest element in an array.",
      },
      {
        type: "code",
        question: "Write a C++ program to calculate the sum and average of elements in an array.",
      },
      {
        type: "code",
        question: "Write a C++ program to reverse the elements of an array.",
      },
      {
        type: "code",
        question: "Write a C++ program to search for a given element in an array using linear search.",
      },
      {
        type: "code",
        question: "Write a C++ program to swap the values of two variables using a third variable.",
      },
      {
        type: "code",
        question: "Write a C++ program to calculate the area of a rectangle using variables for length and width.",
      },
      {
        type: "code",
        question: "Write a C++ program to convert temperature from Celsius to Fahrenheit using variables.",
      },
      {
        type: "code",
        question: "Write a C++ program to count the number of even and odd elements in an array.",
      },
      {
        type: "code",
        question: "Write a C++ program that defines a function to swap two numbers and then calls it from main().",
      }
    ],


    css: [
      {
        type: "mcq",
        question: "Which HTML element is used to create the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: "<h1>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        answer: "<p>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to display an image?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        answer: "<img>",
      },
      {
        type: "mcq",
        question: "Which attribute is required for the <img> tag to specify the image source?",
        options: ["href", "alt", "src", "link"],
        answer: "src",
      },
      {
        type: "mcq",
        question: "Which HTML element is commonly used to create a button?",
        options: ["<input>", "<button>", "<click>", "<btn>"],
        answer: "<button>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used for a list item?",
        options: ["<item>", "<li>", "<ul>", "<listitem>"],
        answer: "<li>",
      },
      {
        type: "mcq",
        question: "Which HTML element is commonly used as a generic container for block-level content?",
        options: ["<span>", "<section>", "<div>", "<container>"],
        answer: "<div>",
      },
      {
        type: "mcq",
        question: "Which HTML element is commonly used as a generic inline container?",
        options: ["<div>", "<span>", "<section>", "<inline>"],
        answer: "<span>",
      },
      {
        type: "mcq",
        question: "Which CSS display value makes an element a block element?",
        options: ["inline", "inline-block", "block", "none"],
        answer: "block",
      },
      {
        type: "mcq",
        question: "Which CSS display value keeps an element inline without allowing width and height?",
        options: ["block", "inline", "flex", "grid"],
        answer: "inline",
      },
      {
        type: "mcq",
        question: "Which CSS display value allows an element to stay inline while accepting width and height?",
        options: ["inline-block", "block", "inline", "none"],
        answer: "inline-block",
      },
      {
        type: "mcq",
        question: "Which CSS display value completely hides an element?",
        options: ["hidden", "opacity: 0", "display: none", "visibility: hidden"],
        answer: "display: none",
      },
      {
        type: "mcq",
        question: "Which HTML element makes text bold by default?",
        options: ["<strong>", "<bold>", "<b>", "Both <strong> and <b>"],
        answer: "Both <strong> and <b>",
      },
      {
        type: "mcq",
        question: "Which HTML element displays italic text?",
        options: ["<italic>", "<i>", "<em>", "Both <i> and <em>"],
        answer: "Both <i> and <em>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to underline text?",
        options: ["<underline>", "<u>", "<line>", "<mark>"],
        answer: "<u>",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the text colour?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the background colour of an element?",
        options: ["background", "background-color", "color", "bg-color"],
        answer: "background-color",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the font size?",
        options: ["font-style", "font-size", "text-size", "size"],
        answer: "font-size",
      },
      {
        type: "mcq",
        question: "Which CSS property makes text bold?",
        options: ["font-weight", "font-style", "text-weight", "font-bold"],
        answer: "font-weight",
      },
      {
        type: "mcq",
        question: "Which HTML input type is used to enter an email address?",
        options: ["text", "mail", "email", "address"],
        answer: "email",
      },
      {
        type: "mcq",
        question: "Which HTML input type hides the characters entered by the user?",
        options: ["hidden", "password", "secret", "text"],
        answer: "password",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create a form?",
        options: ["<input>", "<form>", "<fieldset>", "<label>"],
        answer: "<form>",
      },
      {
        type: "mcq",
        question: "Which HTML element associates text with a form input?",
        options: ["<text>", "<caption>", "<label>", "<span>"],
        answer: "<label>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create a table row?",
        options: ["<td>", "<tr>", "<th>", "<table-row>"],
        answer: "<tr>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to create a table cell?",
        options: ["<tr>", "<td>", "<th>", "<cell>"],
        answer: "<td>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to define the main content of a webpage?",
        options: ["<content>", "<main>", "<body>", "<section>"],
        answer: "<main>",
      },
      {
        type: "mcq",
        question: "Which HTML element is commonly used to group related content into a section?",
        options: ["<group>", "<section>", "<span>", "<aside>"],
        answer: "<section>",
      },
      {
        type: "mcq",
        question: "Which HTML element is used to include an external CSS file?",
        options: ["<style>", "<css>", "<link>", "<script>"],
        answer: "<link>",
      },
    ],

    "c-morning": [
      {
        type: "code",
        question: "Write a C program to print numbers from 1 to 10 using a while loop."
      },
      {
        type: "code",
        question: "Write a C program to print numbers from 1 to 10 using a for loop."
      },
      {
        type: "code",
        question: "Write a C program to print even numbers from 1 to 20."
      },
      {
        type: "code",
        question: "Write a C program to print odd numbers from 1 to 20."
      },
      {
        type: "code",
        question: "Write a C program to add two integers."
      },
      {
        type: "code",
        question: "Write a C program to subtract two integers."
      },
      {
        type: "code",
        question: "Write a C program to multiply two integers."
      },
      {
        type: "code",
        question: "Write a C program to divide two integers."
      },
      {
        type: "code",
        question: "Write a C program to check whether a number is even or odd using if-else."
      },
      {
        type: "code",
        question: "Write a C program to check whether a number is positive or negative."
      },
      {
        type: "code",
        question: "Write a C program to find the largest of two numbers using if-else."
      },
      {
        type: "code",
        question: "Write a C program to find the smallest of two numbers using if-else."
      },
      {
        type: "code",
        question: "Write a C program to find the largest of three numbers using if-else-if."
      },
      {
        type: "code",
        question: "Write a C program to print the multiplication table of a number."
      },
      {
        type: "code",
        question: "Write a C program to calculate the sum of first 10 natural numbers."
      },
      {
        type: "code",
        question: "Write a C program to find factorial of a small number using a loop."
      },
      {
        type: "code",
        question: "Write a C program to store 5 numbers in an array and print them."
      },
      {
        type: "code",
        question: "Write a C program to find the sum of elements in an array."
      },
      {
        type: "code",
        question: "Write a C program to find the largest number in a small array."
      },
      {
        type: "code",
        question: "Write a C program to print all elements of an array."
      },
      {
        type: "code",
        question: "Write a C program to input and print a string using character array."
      },
      {
        type: "code",
        question: "Write a C program to count the number of characters in a string."
      },
      {
        type: "code",
        question: "Write a C program to print a string using fgets()."
      },
      {
        type: "code",
        question: "Write a C program to remove newline character from input using strcspn()."
      },
      {
        type: "code",
        question: "Write a C program to print first character of a string."
      },
      {
        type: "code",
        question: "Write a C program to compare two numbers using if-else."
      },
      {
        type: "code",
        question: "Write a C program to find average of 3 numbers."
      },
      {
        type: "code",
        question: "Write a C program to check whether a number is zero, positive, or negative."
      },
      {
        type: "code",
        question: "Write a C program to print digits of a number using a loop (basic level)."
      },
      {
        type: "code",
        question: "Write a C program to reverse a small number using a loop."
      }
    ],

    "javascript-2pm": [
      {
        type: "code",
        question: "Declare two variables and use console.log() to print their sum."
      },
      {
        type: "code",
        question: "Declare a variable called age and use an if statement to print 'Adult' if age is 18 or more, otherwise print 'Minor'."
      },
      {
        type: "code",
        question: "Write a program that checks if a number is even or odd using if...else and prints the result with console.log()."
      },
      {
        type: "code",
        question: "Use a for loop to print the numbers from 1 to 10 using console.log()."
      },
      {
        type: "code",
        question: "Use a while loop to print the numbers from 10 down to 1 using console.log()."
      },
      {
        type: "code",
        question: "Write a program to print the multiplication table of 5 using a for loop."
      },
      {
        type: "code",
        question: "Declare a variable score and print 'Pass' if the score is 40 or above, otherwise print 'Fail'."
      },
      {
        type: "code",
        question: "Write a program to print all even numbers from 1 to 20 using a loop."
      },
      {
        type: "code",
        question: "Write a program to print all odd numbers from 1 to 20 using a loop."
      },
      {
        type: "code",
        question: "Use a loop to calculate and print the sum of numbers from 1 to 10."
      },
      {
        type: "code",
        question: "Declare a variable temperature and use if...else to print 'Hot' if it is above 30, otherwise print 'Cool'."
      },
      {
        type: "code",
        question: "Write a program to count from 1 to 5 using a do...while loop and print each number."
      },
      {
        type: "code",
        question: "Write a program to print the square of numbers from 1 to 10 using a for loop."
      },
      {
        type: "code",
        question: "Declare a variable number and print 'Positive' if it is greater than 0, otherwise print 'Not Positive'."
      },
      {
        type: "code",
        question: "Write a program that prints numbers from 1 to 20 but skips multiples of 3 using if...else."
      },
      {
        type: "code",
        question: "Use a loop to print the first 10 natural numbers using console.log()."
      },
      {
        type: "code",
        question: "Declare a variable marks and print 'Excellent' if marks are 90 or above, otherwise print 'Keep Practicing'."
      },
      {
        type: "code",
        question: "Write a program to print a countdown from 5 to 1 using a while loop."
      },
      {
        type: "code",
        question: "Use a for loop to print numbers from 1 to 15 and print 'Fizz' instead of numbers divisible by 3."
      },
      {
        type: "code",
        question: "Write a program that declares a variable n and prints the factorial of n using a loop."
      }
    ],

    "sql": [
      {
        type: "code",
        question: "Write a SELECT query to display all columns from the employees table."
      },
      {
        type: "code",
        question: "Write a SELECT query to display only the name and salary columns from the employees table."
      },
      {
        type: "code",
        question: "Write a SELECT query to display unique department names from the employees table using DISTINCT."
      },
      {
        type: "code",
        question: "Write a WHERE query to display employees whose salary is greater than 50000."
      },
      {
        type: "code",
        question: "Write a WHERE query to display employees who belong to the 'Sales' department."
      },
      {
        type: "code",
        question: "Write a WHERE query to display employees whose age is between 25 and 35."
      },
      {
        type: "code",
        question: "Write a WHERE query to display employees whose name starts with the letter 'A'."
      },
      {
        type: "code",
        question: "Write a query using GROUP BY to count the number of employees in each department."
      },
      {
        type: "code",
        question: "Write a query using GROUP BY to calculate the average salary for each department."
      },
      {
        type: "code",
        question: "Write a query using GROUP BY and HAVING to display departments with more than 5 employees."
      },
      {
        type: "code",
        question: "Write a query using GROUP BY and HAVING to display departments where the average salary is greater than 60000."
      },
      {
        type: "code",
        question: "Write a query to display employees whose manager_id is NULL."
      },
      {
        type: "code",
        question: "Write a query to display employees whose email is NOT NULL."
      },
      {
        type: "code",
        question: "Write a query using IS NULL to find products that do not have a discount value."
      },
      {
        type: "code",
        question: "Write a query using IS NOT NULL to display customers who have provided a phone number."
      },
      {
        type: "code",
        question: "Write a query using REGEXP to display employees whose names start with either 'A' or 'B'."
      },
      {
        type: "code",
        question: "Write a query using REGEXP to display email addresses ending with '.com'."
      },
      {
        type: "code",
        question: "Write a query using REGEXP to display product names that contain at least one digit."
      },
      {
        type: "code",
        question: "Write a query using the COUNT() aggregation function to count the total number of employees."
      },
      {
        type: "code",
        question: "Write a query using the SUM() aggregation function to calculate the total salary of all employees."
      },
      {
        type: "code",
        question: "Write a query using the AVG() aggregation function to calculate the average salary."
      },
      {
        type: "code",
        question: "Write a query using the MAX() aggregation function to find the highest salary."
      },
      {
        type: "code",
        question: "Write a query using the MIN() aggregation function to find the lowest salary."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to display 'High' if salary is greater than 70000, otherwise display 'Low'."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to categorize students as 'Pass' if marks are 40 or above, otherwise 'Fail'."
      },
      {
        type: "code",
        question: "Write a SELECT query that creates a calculated column named annual_salary by multiplying salary by 12."
      },
      {
        type: "code",
        question: "Write a SELECT query that creates a calculated column named discounted_price by subtracting discount from price."
      },
      {
        type: "code",
        question: "Write a SELECT query that creates a calculated column named full_name by combining first_name and last_name."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to assign grades: 'A' for marks >= 90, 'B' for marks >= 75, otherwise 'C'."
      },
      {
        type: "code",
        question: "Write a query that groups employees by department and displays the total salary only for departments where the total salary exceeds 500000."
      }
    ],

    "javascript-dsdc-july": [
      {
        type: "code",
        question: "Write a JavaScript program to print numbers from 1 to 20 using a for loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to print all even numbers from 2 to 50 using a for loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate the sum of numbers from 1 to 100 using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to print the multiplication table of 7 using a for loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to count how many numbers between 1 and 100 are divisible by 5."
      },
      {
        type: "code",
        question: "Write a JavaScript program that checks if a number is positive, negative, or zero using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program that checks whether a given number is even or odd using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program to find the largest of three numbers using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate a student's grade based on marks using if/else (90+: A, 80–89: B, 70–79: C, below 70: D)."
      },
      {
        type: "code",
        question: "Write a JavaScript program that checks whether a given year is a leap year using if/else."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an array of five numbers and print each element using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to add three new numbers to an array using push() and print the updated array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to remove the last element from an array using pop() and display both the removed element and the updated array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to remove the first element from an array using shift() and print the updated array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to add two elements at the beginning of an array using unshift() and print the updated array."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create a new array containing elements from index 2 to index 5 using slice()."
      },
      {
        type: "code",
        question: "Write a JavaScript program to replace two elements in an array starting at index 1 using splice()."
      },
      {
        type: "code",
        question: "Write a JavaScript program to calculate the sum of all numbers in an array using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to find the largest number in an array using a loop."
      },
      {
        type: "code",
        question: "Write a JavaScript program to count how many numbers in an array are greater than 50."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an object representing a student with properties name, age, and marks, then print each property."
      },
      {
        type: "code",
        question: "Write a JavaScript program to update the price property of a product object and display the updated object."
      },
      {
        type: "code",
        question: "Write a JavaScript program to create an array of objects representing three students and print the name of each student."
      },
      {
        type: "code",
        question: "Write a JavaScript program to find and display the names of students whose marks are greater than or equal to 75 from an array of objects."
      },
      {
        type: "code",
        question: "Write a JavaScript function named square that takes a number as a parameter and returns its square."
      },
      {
        type: "code",
        question: "Write a JavaScript function named findAverage that takes an array of numbers and returns the average."
      },
      {
        type: "code",
        question: "Write a JavaScript function that accepts two numbers and returns the larger number."
      },
      {
        type: "code",
        question: "Write a JavaScript program to select an element with the id 'title' and change its text content to 'Welcome to JavaScript'."
      },
      {
        type: "code",
        question: "Write a JavaScript program to select all elements with the class 'item' and change their text color to blue."
      },
      {
        type: "code",
        question: "Write a JavaScript program to add a click event listener to a button that increments and displays a counter every time the button is clicked."
      }
    ],
    "python-dsdc-july": [
      {
        "type": "code",
        "question": "Write a Python program to declare two variables and print their sum."
      },
      {
        "type": "code",
        "question": "Write a Python program to swap the values of two variables."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a user's name as input and print 'Hello, <name>!'."
      },
      {
        "type": "code",
        "question": "Write a Python program to take two numbers as input and print their product."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the area of a rectangle using user input for length and width."
      },
      {
        "type": "code",
        "question": "Write a Python program to check whether a number is positive, negative, or zero using if/else."
      },
      {
        "type": "code",
        "question": "Write a Python program to check whether a number is even or odd."
      },
      {
        "type": "code",
        "question": "Write a Python program to find the largest of three numbers using if/else."
      },
      {
        "type": "code",
        "question": "Write a Python program to assign grades based on marks (90+: A, 80–89: B, 70–79: C, below 70: D)."
      },
      {
        "type": "code",
        "question": "Write a Python program to check whether a given year is a leap year."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from 1 to 20 using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print all even numbers between 1 and 50."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the sum of numbers from 1 to 100 using a loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the multiplication table of a given number."
      },
      {
        "type": "code",
        "question": "Write a Python program to count how many numbers between 1 and 100 are divisible by 7."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from 10 down to 1 using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to create a list of five numbers and print each element using a loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to add three numbers to a list using append()."
      },
      {
        "type": "code",
        "question": "Write a Python program to remove the last element from a list and print the updated list."
      },
      {
        "type": "code",
        "question": "Write a Python program to find the largest number in a list."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the sum of all numbers in a list."
      },
      {
        "type": "code",
        "question": "Write a Python program to count how many numbers in a list are greater than 50."
      },
      {
        "type": "code",
        "question": "Write a Python program to replace the third element of a list with a new value."
      },
      {
        "type": "code",
        "question": "Write a Python program to create a list of dictionaries representing three students with keys 'name' and 'marks'."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the names of all students from a list of dictionaries."
      },
      {
        "type": "code",
        "question": "Write a Python program to find and print the names of students who scored more than 80 marks from a list of dictionaries."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the average marks of students stored in a list of dictionaries."
      },
      {
        "type": "code",
        "question": "Write a Python program to count how many students passed if passing marks are 40, using a list of dictionaries."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five numbers as input from the user, store them in a list, and print the largest number."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and ages of three people as input, store them as dictionaries in a list, and print the name of the oldest person."
      }
    ],

    "css-dics-july": [
      {
        type: "mcq",
        question: "Which CSS display value arranges child elements in a flexible row or column?",
        options: ["block", "inline", "flex", "grid"],
        answer: "flex",
      },
      {
        type: "mcq",
        question: "Which property is applied to create a flex container?",
        options: ["display", "flex", "justify-content", "align-items"],
        answer: "display",
      },
      {
        type: "mcq",
        question: "What is the default value of flex-direction?",
        options: ["column", "row", "row-reverse", "column-reverse"],
        answer: "row",
      },
      {
        type: "mcq",
        question: "Which flex-direction value stacks items vertically from top to bottom?",
        options: ["row", "column", "row-reverse", "inherit"],
        answer: "column",
      },
      {
        type: "mcq",
        question: "Which property aligns flex items along the main axis?",
        options: ["align-items", "justify-content", "align-content", "place-items"],
        answer: "justify-content",
      },
      {
        type: "mcq",
        question: "Which property aligns flex items along the cross axis?",
        options: ["justify-content", "align-items", "flex-wrap", "gap"],
        answer: "align-items",
      },
      {
        type: "mcq",
        question: "Which value of justify-content places equal space around flex items?",
        options: ["center", "space-between", "space-around", "stretch"],
        answer: "space-around",
      },
      {
        type: "mcq",
        question: "Which justify-content value places the first and last items at the edges?",
        options: ["space-around", "space-evenly", "space-between", "center"],
        answer: "space-between",
      },
      {
        type: "mcq",
        question: "Which justify-content value provides equal spacing between all items and edges?",
        options: ["space-evenly", "space-around", "space-between", "flex-end"],
        answer: "space-evenly",
      },
      {
        type: "mcq",
        question: "Which property allows flex items to move onto multiple lines?",
        options: ["flex-direction", "flex-wrap", "flex-grow", "order"],
        answer: "flex-wrap",
      },
      {
        type: "mcq",
        question: "What is the default value of flex-wrap?",
        options: ["wrap", "nowrap", "wrap-reverse", "inherit"],
        answer: "nowrap",
      },
      {
        type: "mcq",
        question: "Which property specifies the spacing between flex items?",
        options: ["margin", "padding", "gap", "spacing"],
        answer: "gap",
      },
      {
        type: "mcq",
        question: "Which property controls the order of flex items?",
        options: ["sequence", "position", "order", "z-index"],
        answer: "order",
      },
      {
        type: "mcq",
        question: "Which property allows a flex item to grow and fill available space?",
        options: ["flex-grow", "flex-wrap", "flex-basis", "order"],
        answer: "flex-grow",
      },
      {
        type: "mcq",
        question: "Which property defines the initial size of a flex item?",
        options: ["flex-basis", "flex-grow", "width", "height"],
        answer: "flex-basis",
      },
      {
        type: "mcq",
        question: "Which shorthand property combines flex-grow, flex-shrink, and flex-basis?",
        options: ["flexbox", "flex", "flex-item", "flex-wrap"],
        answer: "flex",
      },
      {
        type: "mcq",
        question: "Which display value makes an element behave like a block element?",
        options: ["inline", "block", "inline-block", "none"],
        answer: "block",
      },
      {
        type: "mcq",
        question: "Which display value allows elements to sit on the same line without width and height?",
        options: ["block", "inline", "flex", "grid"],
        answer: "inline",
      },
      {
        type: "mcq",
        question: "Which display value allows width and height while keeping elements inline?",
        options: ["inline-block", "inline", "block", "contents"],
        answer: "inline-block",
      },
      {
        type: "mcq",
        question: "Which display value completely removes an element from the layout?",
        options: ["hidden", "opacity", "none", "collapse"],
        answer: "none",
      },
      {
        type: "mcq",
        question: "Which display value is commonly used to create flexible layouts in React applications?",
        options: ["block", "inline", "flex", "table"],
        answer: "flex",
      },
      {
        type: "mcq",
        question: "Which text property changes the color of text?",
        options: ["background-color", "font-color", "color", "text-fill"],
        answer: "color",
      },
      {
        type: "mcq",
        question: "Which property aligns text horizontally?",
        options: ["text-align", "align-items", "justify-content", "vertical-align"],
        answer: "text-align",
      },
      {
        type: "mcq",
        question: "Which value of text-align centers text?",
        options: ["left", "center", "right", "justify"],
        answer: "center",
      },
      {
        type: "mcq",
        question: "Which text-align value stretches text so both edges are aligned?",
        options: ["center", "justify", "left", "right"],
        answer: "justify",
      },
      {
        type: "mcq",
        question: "Which property changes the capitalization of text?",
        options: ["font-transform", "text-style", "text-transform", "text-case"],
        answer: "text-transform",
      },
      {
        type: "mcq",
        question: "Which text-transform value converts all letters to uppercase?",
        options: ["capitalize", "uppercase", "lowercase", "inherit"],
        answer: "uppercase",
      },
      {
        type: "mcq",
        question: "Which text-transform value converts the first letter of each word to uppercase?",
        options: ["capitalize", "uppercase", "lowercase", "none"],
        answer: "capitalize",
      },
      {
        type: "mcq",
        question: "Which property adds decoration like underline or line-through?",
        options: ["font-style", "text-decoration", "text-effect", "border-bottom"],
        answer: "text-decoration",
      },
      {
        type: "mcq",
        question: "Which text-decoration value underlines text?",
        options: ["overline", "underline", "line-through", "none"],
        answer: "underline",
      },
      {
        type: "mcq",
        question: "Which text-decoration value removes text decoration?",
        options: ["clear", "none", "hidden", "inherit"],
        answer: "none",
      },
      {
        type: "mcq",
        question: "Which property controls the spacing between letters?",
        options: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
        answer: "letter-spacing",
      },
      {
        type: "mcq",
        question: "Which property controls the spacing between words?",
        options: ["letter-spacing", "word-spacing", "line-height", "gap"],
        answer: "word-spacing",
      },
      {
        type: "mcq",
        question: "Which property controls the space between lines of text?",
        options: ["line-spacing", "line-height", "text-spacing", "font-height"],
        answer: "line-height",
      },
      {
        type: "mcq",
        question: "Which property indents the first line of a paragraph?",
        options: ["margin-left", "padding-left", "text-indent", "letter-spacing"],
        answer: "text-indent",
      },
      {
        type: "mcq",
        question: "Which property adds a shadow effect to text?",
        options: ["box-shadow", "shadow", "text-shadow", "font-shadow"],
        answer: "text-shadow",
      },
      {
        type: "mcq",
        question: "Which property controls how overflowing text is displayed with an ellipsis?",
        options: ["text-overflow", "overflow-wrap", "white-space", "clip-path"],
        answer: "text-overflow",
      },
      {
        type: "mcq",
        question: "Which value of text-overflow displays three dots when text is clipped?",
        options: ["hidden", "ellipsis", "clip", "wrap"],
        answer: "ellipsis",
      },
      {
        type: "mcq",
        question: "Which property prevents text from wrapping onto the next line?",
        options: ["overflow", "white-space", "text-wrap", "word-break"],
        answer: "white-space",
      },
      {
        type: "mcq",
        question: "Which white-space value prevents text wrapping?",
        options: ["normal", "nowrap", "pre-wrap", "inherit"],
        answer: "nowrap",
      },
      {
        type: "mcq",
        question: "Which property specifies the direction of flex items?",
        options: ["justify-content", "flex-direction", "align-items", "order"],
        answer: "flex-direction",
      },
      {
        type: "mcq",
        question: "Which flex-direction value displays items from right to left?",
        options: ["row", "column", "row-reverse", "column-reverse"],
        answer: "row-reverse",
      },
      {
        type: "mcq",
        question: "Which property aligns individual flex items differently from others?",
        options: ["align-self", "align-items", "justify-content", "order"],
        answer: "align-self",
      },
      {
        type: "mcq",
        question: "Which property aligns multiple rows of wrapped flex items?",
        options: ["align-content", "align-items", "justify-content", "gap"],
        answer: "align-content",
      },
      {
        type: "mcq",
        question: "Which display value hides an element while preserving layout space?",
        options: ["none", "inline", "visibility", "block"],
        answer: "visibility",
      },
      {
        type: "mcq",
        question: "Which text-align value aligns text to the left?",
        options: ["left", "center", "right", "justify"],
        answer: "left",
      },
      {
        type: "mcq",
        question: "Which text-align value aligns text to the right?",
        options: ["left", "center", "right", "justify"],
        answer: "right",
      },
      {
        type: "mcq",
        question: "Which flex property prevents a flex item from shrinking?",
        options: ["flex-grow", "flex-shrink", "flex-basis", "order"],
        answer: "flex-shrink",
      },
      {
        type: "mcq",
        question: "Which property is commonly used with display: flex to center items vertically?",
        options: ["justify-content", "align-items", "text-align", "margin"],
        answer: "align-items",
      },
      {
        type: "mcq",
        question: "Which CSS display value is best suited for building responsive navigation bars in MERN projects?",
        options: ["inline", "flex", "table", "list-item"],
        answer: "flex",
      },
    ],
    "python-dics-july": [
      {
        "type": "code",
        "question": "Write a Python program to take an integer as input and print whether it is positive, negative, or zero."
      },
      {
        "type": "code",
        "question": "Write a Python program to take two integers as input and print the larger number using if-else."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a student's marks as input and print 'Pass' if the marks are at least 40, otherwise print 'Fail'."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a number as input and print whether it is even or odd."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a person's age as input and print whether they are eligible to vote."
      },
      {
        "type": "code",
        "question": "Write a Python program to take three integers as input and print the largest number using if-else statements."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a character as input and print whether it is a vowel or a consonant."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a year as input and print whether it is a leap year."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a number as input and print whether it is divisible by both 3 and 5."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a temperature in Celsius as input and print 'Hot' if it is above 30, otherwise print 'Pleasant'."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from 1 to 10 using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from 10 to 1 using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the multiplication table of a given number using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the sum of numbers from 1 to N using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the sum of numbers from 1 to N using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print all even numbers from 1 to N using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print all odd numbers from 1 to N using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to count from 1 to 20 and print each number using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the square of numbers from 1 to 10 using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the cube of numbers from 1 to 10 using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the factorial of a number using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the factorial of a number using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to reverse the digits of a given number using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to count the number of digits in a given integer using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the sum of the digits of a given integer using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from 1 to N that are divisible by 5 using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the first N natural numbers using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print all multiples of 7 less than or equal to N using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to calculate the product of numbers from 1 to N using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print numbers from N down to 1 using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five integers as input, store them in a list, and print the largest number."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five integers as input, store them in a list, and print the smallest number."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five integers as input, store them in a list, and print the sum of all numbers."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five integers as input, store them in a list, and count how many are even."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five integers as input, store them in a list, and count how many are odd."
      },
      {
        "type": "code",
        "question": "Write a Python program to take N integers as input, store them in a list, and print all positive numbers."
      },
      {
        "type": "code",
        "question": "Write a Python program to take N integers as input, store them in a list, and print the average of the numbers."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five student marks as input, store them in a list, and count how many students passed with marks of at least 40."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five names as input, store them in a list, and print each name using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to take five numbers as input, store them in a list, and print only the numbers greater than 50."
      },
      {
        "type": "code",
        "question": "Write a Python program to take three people's names and ages as input, store them as dictionaries in a list, and print the youngest person's name."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and salaries of three employees as input, store them as dictionaries in a list, and print the employee with the highest salary."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and marks of three students as input, store them as dictionaries in a list, and print the student with the highest marks."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and prices of three products as input, store them as dictionaries in a list, and print the most expensive product."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and quantities of three items as input, store them as dictionaries in a list, and print the item with the highest quantity."
      },
      {
        "type": "code",
        "question": "Write a Python program to take three cities and their populations as input, store them as dictionaries in a list, and print the city with the largest population."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and scores of three players as input, store them as dictionaries in a list, and print all players whose score is greater than 50."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and ages of three people as input, store them as dictionaries in a list, and count how many people are adults (age 18 or above)."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and marks of five students as input, store them as dictionaries in a list, and print the names of students who passed."
      },
      {
        "type": "code",
        "question": "Write a Python program to take the names and ages of three people as input, store them as dictionaries in a list, and print the name of the oldest person."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a number N as input and print all numbers from 1 to N, replacing multiples of 3 with 'Fizz' using if-else."
      },
      {
        "type": "code",
        "question": "Write a Python program to take an integer as input and determine whether it is a prime number using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to take an integer as input and print all of its factors using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to take two integers as input and calculate their greatest common divisor (GCD) using a while loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to print the first N multiples of a given number using a for loop."
      },
      {
        "type": "code",
        "question": "Write a Python program to take a number as input and count how many of its digits are even using a while loop."
      }
    ],

    "sql-dics-july": [
      {
        type: "code",
        question: "Create a table named students with columns student_id (INT), name (VARCHAR), and address (TEXT)."
      },
      {
        type: "code",
        question: "Create a table named employees with columns emp_id (INT), emp_name (VARCHAR), and department (VARCHAR)."
      },
      {
        type: "code",
        question: "Create a table named books with columns book_id (INT), title (VARCHAR), and description (TEXT)."
      },
      {
        type: "code",
        question: "Create a table named products with columns product_id (INT), product_name (VARCHAR), and details (TEXT)."
      },
      {
        type: "code",
        question: "Create a table named customers with columns customer_id (INT), customer_name (VARCHAR), and city (VARCHAR)."
      },

      {
        type: "code",
        question: "Insert a new record into the students table with appropriate values."
      },
      {
        type: "code",
        question: "Insert three records into the employees table in a single query."
      },
      {
        type: "code",
        question: "Insert a new book into the books table with a title and description."
      },
      {
        type: "code",
        question: "Insert two products into the products table."
      },
      {
        type: "code",
        question: "Insert a new customer into the customers table."
      },

      {
        type: "code",
        question: "Update the city of a customer whose customer_id is 5."
      },
      {
        type: "code",
        question: "Update the department of all employees currently working in 'Sales' to 'Marketing'."
      },
      {
        type: "code",
        question: "Update the title of the book with book_id = 3."
      },
      {
        type: "code",
        question: "Delete the student record whose student_id is 8."
      },
      {
        type: "code",
        question: "Delete all products whose product_id is greater than 100."
      },
      {
        type: "code",
        question: "Delete all customers from the customers table whose city is 'Delhi'."
      },
      {
        type: "code",
        question: "Update the details column of the products table for product_id = 10."
      },
      {
        type: "code",
        question: "Delete all books whose title is 'Unknown'."
      },

      {
        type: "code",
        question: "Select all records from the students table where student_id > 10."
      },
      {
        type: "code",
        question: "Select all employees whose emp_id is less than or equal to 20."
      },
      {
        type: "code",
        question: "Select all customers whose customer_id is IN (1, 3, 5, 7)."
      },
      {
        type: "code",
        question: "Select all books whose book_id is NOT IN (2, 4, 6)."
      },
      {
        type: "code",
        question: "Select all students whose student_id is BETWEEN 5 AND 15."
      },
      {
        type: "code",
        question: "Select all employees whose emp_name starts with the letter 'A' using LIKE."
      },
      {
        type: "code",
        question: "Select all products whose product_name ends with 'Pro' using LIKE."
      },
      {
        type: "code",
        question: "Select all customers whose city contains the word 'New' using LIKE."
      },
      {
        type: "code",
        question: "Select all books whose title is not equal to 'Database Systems'."
      },
      {
        type: "code",
        question: "Select all products where product_id >= 50 AND product_id <= 100."
      },
      {
        type: "code",
        question: "Select all employees whose emp_id is NOT BETWEEN 10 AND 20."
      },
      {
        type: "code",
        question: "Select all students whose name is LIKE '%Kumar%'."
      },

      {
        type: "code",
        question: "Write a query using CASE WHEN to display 'Adult' if student_id is greater than 18, otherwise display 'Minor' as a new column."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to display 'Senior Employee' if emp_id is greater than 100, otherwise 'Junior Employee'."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to display 'Available' if product_id is less than 50, otherwise 'Limited Stock'."
      },
      {
        type: "code",
        question: "Write a query using CASE WHEN to display 'Local' if city is 'Delhi', otherwise 'Outside Delhi'."
      },

      {
        type: "code",
        question: "Select student_id and display a calculated column that adds 100 to student_id."
      },
      {
        type: "code",
        question: "Select emp_id and display a calculated column showing emp_id multiplied by 2."
      },
      {
        type: "code",
        question: "Select product_id and display its square as a calculated column."
      },
      {
        type: "code",
        question: "Select customer_id and display customer_id divided by 2 as a calculated column."
      },
      {
        type: "code",
        question: "Select book_id and display a calculated column that subtracts 5 from book_id."
      },
      {
        type: "code",
        question: "Select student_id and name, and display a calculated column that multiplies student_id by 10 and aliases it as score."
      }
    ],
    "node-dics-august": [
      {
        type: "code",
        question: "Write a Node.js program to create a file named notes.txt using the File System module."
      },
      {
        type: "code",
        question: "Write a Node.js program to create a file named student.txt and write your name into it."
      },
      {
        type: "code",
        question: "Write a Node.js program to read the contents of data.txt and display them in the console."
      },
      {
        type: "code",
        question: "Write a Node.js program to read a file asynchronously using fs.readFile()."
      },
      {
        type: "code",
        question: "Write a Node.js program to append the text 'Welcome to Node.js' to an existing file named message.txt."
      },
      {
        type: "code",
        question: "Write a Node.js program to append a new line containing today's date to log.txt."
      },
      {
        type: "code",
        question: "Write a Node.js program to delete a file named temp.txt using fs.unlink()."
      },
      {
        type: "code",
        question: "Write a Node.js program to check if a file exists before deleting it."
      },
      {
        type: "code",
        question: "Write a Node.js program to create a file, append new content to it, and then read its contents."
      },
      {
        type: "code",
        question: "Write a Node.js program to create a file named report.txt containing multiple lines of text."
      },

      {
        type: "code",
        question: "Create an Express application with an app.get() route that displays 'Hello, World!' at the root URL (/)."
      },
      {
        type: "code",
        question: "Create an Express route '/about' that returns the message 'About Us'."
      },
      {
        type: "code",
        question: "Create an Express route '/contact' that returns your email address."
      },
      {
        type: "code",
        question: "Create an Express route '/student/:name' that displays the student's name using URL parameters."
      },
      {
        type: "code",
        question: "Create an Express route '/product/:id' that displays the product ID from the URL."
      },
      {
        type: "code",
        question: "Create an Express route '/user/:id/:name' that displays both the user ID and user name."
      },

      {
        type: "code",
        question: "Create an Express route '/search' that reads the query parameter 'name' and displays it."
      },
      {
        type: "code",
        question: "Create an Express route '/filter' that accepts query parameters 'category' and 'price' and displays both values."
      },
      {
        type: "code",
        question: "Create an Express route '/student' that accepts query parameters 'name' and 'course' and displays them."
      },
      {
        type: "code",
        question: "Create an Express route '/product' that accepts query parameters 'id' and 'brand' and displays both values."
      }
    ],

    "sql-dics-july-evening": [
      {
        type: "code",
        question: "Write a SQL query using CASE WHEN to categorize employees based on salary: High (salary >= 100000), Medium (50000-99999), and Low (below 50000)."
      },
      {
        type: "code",
        question: "Write a SQL query using CASE WHEN to display 'Pass' if a student's marks are greater than or equal to 40, otherwise display 'Fail'."
      },
      {
        type: "code",
        question: "Write a SQL query to convert all employee names into uppercase using SQL text functions."
      },
      {
        type: "code",
        question: "Write a SQL query to find the length of each customer's name using a string function."
      },
      {
        type: "code",
        question: "Write a SQL query to extract the first three characters from each product name."
      },
      {
        type: "code",
        question: "Write a SQL query using COALESCE to replace NULL values in the phone number column with 'Not Available'."
      },
      {
        type: "code",
        question: "Write a SQL query to calculate total salary by adding bonus to salary. Use COALESCE to handle NULL bonus values."
      },
      {
        type: "code",
        question: "Write a SQL UPDATE query to increase all employee salaries by 10%."
      },
      {
        type: "code",
        question: "Write a SQL UPDATE query to change the department to 'IT' for employees whose department value is NULL."
      },
      {
        type: "code",
        question: "Write a SQL DELETE query to remove all records from the employee table where salary is less than 20000."
      },
      {
        type: "code",
        question: "Write a SQL DELETE query to remove duplicate records from a table while keeping one copy of each record."
      },
      {
        type: "code",
        question: "Write a SQL query to create an Employees table with columns EmployeeID, Name, Department, Salary, and JoiningDate."
      },
      {
        type: "code",
        question: "Write SQL INSERT statements to add five records into the Employees table."
      },
      {
        type: "code",
        question: "Write a SQL query using DESC command to display the structure of the Employees table."
      },
      {
        type: "code",
        question: "Write a SQL INNER JOIN query to display customer names along with their order details."
      },
      {
        type: "code",
        question: "Write a SQL LEFT JOIN query to display all customers including customers who have not placed any orders."
      },
      {
        type: "code",
        question: "Write a SQL query using multiple joins to display customer name, order details, and payment information."
      },
      {
        type: "code",
        question: "Write a SQL query using ROW_NUMBER() window function to assign rankings to employees based on salary."
      },
      {
        type: "code",
        question: "Write a SQL query using RANK() window function to find employee salary rankings within each department."
      },
      {
        type: "code",
        question: "Write a SQL query using DENSE_RANK() to find the top three highest-paid employees in each department."
      },
      {
        type: "code",
        question: "Write a SQL query using LAG() window function to display each employee's previous salary."
      },
      {
        type: "code",
        question: "Write a SQL query using LEAD() window function to display the next employee's salary."
      },
      {
        type: "code",
        question: "Write a SQL query using SUM() OVER() to calculate a running total of sales."
      },
      {
        type: "code",
        question: "Write a SQL query using AVG() OVER() to calculate the average salary for each department."
      },
      {
        type: "code",
        question: "Write a SQL query using a subquery to find employees earning more than the average salary."
      },
      {
        type: "code",
        question: "Write a SQL query using a subquery to find the employee with the highest salary."
      },
      {
        type: "code",
        question: "Write a SQL query using a subquery to find the second highest salary from the Employees table."
      },
      {
        type: "code",
        question: "Write a SQL query using a CTE to calculate the average salary of employees in each department."
      },
      {
        type: "code",
        question: "Write a SQL query using a CTE and ROW_NUMBER() to find the top three employees in each department."
      },
      {
        type: "code",
        question: "Write a recursive CTE query to display an employee hierarchy showing managers and their employees."
      }],

    "javascript-node-dics-evening": [
      {
        type: "code",
        question: "Create a basic Express server that listens on port 3000."
      },
      {
        type: "code",
        question: "Write code to create an Express application using the express module."
      },
      {
        type: "code",
        question: "Write an Express GET route for '/' that sends 'Hello World' as the response."
      },
      {
        type: "code",
        question: "Write an Express GET route for '/about' that returns a JSON response."
      },
      {
        type: "code",
        question: "Write an Express POST route for '/login' that returns 'Login Successful'."
      },
      {
        type: "code",
        question: "Write code to use express.json() middleware in an Express application."
      },
      {
        type: "code",
        question: "Write code to access the request body in a POST route."
      },
      {
        type: "code",
        question: "Write an Express route that accepts a user's name in the request body and returns a welcome message."
      },
      {
        type: "code",
        question: "Write an Express GET route that accepts a route parameter 'id' and returns it in the response."
      },
      {
        type: "code",
        question: "Write an Express GET route that reads a query parameter named 'name' and returns it in the response."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to switch to a database named 'college'."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to display all databases."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to display all collections in the current database."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to insert one document into a 'students' collection."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to insert multiple documents into a 'students' collection."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to find all documents in the 'students' collection."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to find students whose name is 'Rahul'."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to delete one document from the 'students' collection."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to delete all students whose city is 'Delhi'."
      },
      {
        type: "code",
        question: "Write the MongoDB shell command to update one student's city using updateOne()."
      },
      {
        type: "code",
        question: "Write code to connect an Express application to MongoDB using Mongoose."
      },
      {
        type: "code",
        question: "Write code to import the Mongoose package into a Node.js application."
      },
      {
        type: "code",
        question: "Write code to create a Mongoose schema with 'name' and 'city' fields of type String."
      },
      {
        type: "code",
        question: "Write code to create a Mongoose model named 'Student' using the schema."
      },
      {
        type: "code",
        question: "Write code to insert one document using a Mongoose model."
      },
      {
        type: "code",
        question: "Write code to insert multiple documents using a Mongoose model."
      },
      {
        type: "code",
        question: "Write code to retrieve all documents from a collection using Mongoose."
      },
      {
        type: "code",
        question: "Write code to find students whose city is 'Mumbai' using Mongoose."
      },
      {
        type: "code",
        question: "Write code to delete one document using Mongoose's deleteOne() method."
      },
      {
        type: "code",
        question: "Write a complete Express application that connects to MongoDB using Mongoose, creates a simple schema with only String fields, defines a Student model, and implements one GET route and one POST route."
      }
    ],

    "sql-dics-july-evening": [
      {
        type: "code",
        question: "Write a SQL query to select all columns from the Employees table."
      },
      {
        type: "code",
        question: "Write a SQL query to select only the name and salary columns from the Employees table."
      },
      {
        type: "code",
        question: "Write a SQL query to display employees whose salary is greater than 50000 using the WHERE clause."
      },
      {
        type: "code",
        question: "Write a SQL query to find employees whose name starts with 'A' using the LIKE operator."
      },
      {
        type: "code",
        question: "Write a SQL query to find employees whose name ends with 'n' using the LIKE operator."
      },
      {
        type: "code",
        question: "Write a SQL query to display employees whose salary is between 30000 and 60000."
      },
      {
        type: "code",
        question: "Write a SQL query to find employees whose department is either 'HR', 'IT', or 'Sales' using the IN operator."
      },
      {
        type: "code",
        question: "Write a SQL query to display employees whose department is not 'HR' or 'Finance' using the NOT IN operator."
      },
      {
        type: "code",
        question: "Write a SQL query using multiple WHERE conditions with AND and OR."
      },
      {
        type: "code",
        question: "Write a SQL query to retrieve employees whose age is greater than 25 and salary is less than 60000."
      },
      {
        type: "code",
        question: "Write a SQL statement to create a table named Students with id, name, and marks columns."
      },
      {
        type: "code",
        question: "Write a SQL query to insert a single record into the Students table."
      },
      {
        type: "code",
        question: "Write a SQL query to insert multiple records into the Students table."
      },
      {
        type: "code",
        question: "Write a SQL query to update the salary of an employee whose id is 101."
      },
      {
        type: "code",
        question: "Write a SQL query to update the department of all employees currently in 'Support' to 'Customer Success'."
      },
      {
        type: "code",
        question: "Write a SQL query to delete a student whose id is 5."
      },
      {
        type: "code",
        question: "Write a SQL query to delete all employees whose salary is less than 20000."
      },
      {
        type: "code",
        question: "Write a SQL query to perform an INNER JOIN between the Employees and Departments tables."
      },
      {
        type: "code",
        question: "Write a SQL query to perform a LEFT JOIN between the Customers and Orders tables."
      },
      {
        type: "code",
        question: "Write a SQL query to perform a RIGHT JOIN between the Students and Courses tables."
      },
      {
        type: "code",
        question: "Write a SQL query to perform a FULL OUTER JOIN between two tables."
      },
      {
        type: "code",
        question: "Write a SQL query to display employee names along with their department names using an INNER JOIN."
      },
      {
        type: "code",
        question: "Write a SQL query using CASE WHEN to display 'Pass' if marks are 40 or above, otherwise 'Fail'."
      },
      {
        type: "code",
        question: "Write a SQL query using CASE WHEN to categorize employees as 'High Salary' if salary is above 70000, otherwise 'Low Salary'."
      },
      {
        type: "code",
        question: "Write a SQL query to create a calculated column showing annual salary by multiplying monthly salary by 12."
      },
      {
        type: "code",
        question: "Write a SQL query to display a calculated column showing a 10% bonus based on employee salary."
      },
      {
        type: "code",
        question: "Write a SQL statement to add an email column to the Students table using ALTER TABLE."
      },
      {
        type: "code",
        question: "Write a SQL statement to drop the phone column from the Students table using ALTER TABLE."
      },
      {
        type: "code",
        question: "Write a SQL statement to rename the name column to student_name using ALTER TABLE."
      },
      {
        type: "code",
        question: "Write a SQL statement to modify the salary column to DECIMAL(10,2) using ALTER TABLE."
      }
    ],

    "python-dics-morning-july": [
      {
        type: "mcq",
        question: "Which method adds an element to the end of a list?",
        options: ["append()", "add()", "insertEnd()", "push()"],
        answer: "append()",
      },
      {
        type: "mcq",
        question: "What is the output of len([10, 20, 30, 40])?",
        options: ["3", "4", "5", "Error"],
        answer: "4",
      },
      {
        type: "mcq",
        question: "Which list method removes and returns the last element?",
        options: ["remove()", "delete()", "pop()", "clear()"],
        answer: "pop()",
      },
      {
        type: "mcq",
        question: "How do you access the value of key 'name' in {'name': 'Alice'}?",
        options: ["dict.name", "dict['name']", "dict(name)", "dict.getValue('name')"],
        answer: "dict['name']",
      },
      {
        type: "mcq",
        question: "Which dictionary method returns all keys?",
        options: ["values()", "items()", "keys()", "getKeys()"],
        answer: "keys()",
      },
      {
        type: "mcq",
        question: "What is the output of {'a': 1}.get('b', 0)?",
        options: ["None", "Error", "0", "'b'"],
        answer: "0",
      },
      {
        type: "mcq",
        question: "Which string method converts all characters to uppercase?",
        options: ["capitalize()", "upper()", "title()", "swapcase()"],
        answer: "upper()",
      },
      {
        type: "mcq",
        question: "What is the output of 'Python'[1]?",
        options: ["P", "y", "t", "o"],
        answer: "y",
      },
      {
        type: "mcq",
        question: "Which method removes whitespace from both ends of a string?",
        options: ["trim()", "strip()", "remove()", "clean()"],
        answer: "strip()",
      },
      {
        type: "mcq",
        question: "How many times will the loop execute?\nfor i in range(5):",
        options: ["4", "5", "6", "Infinite"],
        answer: "5",
      },
      {
        type: "mcq",
        question: "Which keyword skips the current iteration of a loop?",
        options: ["break", "continue", "pass", "skip"],
        answer: "continue",
      },
      {
        type: "mcq",
        question: "Which keyword immediately exits a loop?",
        options: ["continue", "exit", "break", "return"],
        answer: "break",
      },
      {
        type: "mcq",
        question: "What is the output?\nif 5 > 3:\n    print('Yes')",
        options: ["Yes", "No", "Error", "Nothing"],
        answer: "Yes",
      },
      {
        type: "mcq",
        question: "Which operator checks if two values are equal?",
        options: ["=", "==", "!=", "==="],
        answer: "==",
      },
      {
        type: "mcq",
        question: "Which keyword is used for an alternative condition after if?",
        options: ["elseif", "elif", "otherwise", "then"],
        answer: "elif",
      },
      {
        type: "mcq",
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "func", "define", "def"],
        answer: "def",
      },
      {
        type: "mcq",
        question: "What is the purpose of the return statement in a function?",
        options: [
          "Stops the program",
          "Returns a value from the function",
          "Prints a value",
          "Repeats the function",
        ],
        answer: "Returns a value from the function",
      },
      {
        type: "mcq",
        question: "What is the output of len((1, 2, 3))?",
        options: ["2", "3", "4", "Error"],
        answer: "3",
      },
      {
        type: "mcq",
        question: "Which statement about tuples is true?",
        options: [
          "They are mutable",
          "They are immutable",
          "They only store numbers",
          "They cannot contain strings",
        ],
        answer: "They are immutable",
      },
      {
        type: "mcq",
        question: "Which symbol is commonly used to create a tuple?",
        options: ["[]", "()", "{}", "<>"],
        answer: "()",
      },
      {
        type: "mcq",
        question: "Which method adds an element to a set?",
        options: ["append()", "insert()", "add()", "push()"],
        answer: "add()",
      },
      {
        type: "mcq",
        question: "Which of the following is true about Python sets?",
        options: [
          "They allow duplicate values",
          "They are ordered",
          "They store unique values",
          "They use indexes",
        ],
        answer: "They store unique values",
      },
      {
        type: "mcq",
        question: "What is the result of len({1, 1, 2, 3})?",
        options: ["4", "3", "2", "Error"],
        answer: "3",
      },
      {
        type: "mcq",
        question: "Which mode opens a file for reading?",
        options: ["w", "a", "r", "x"],
        answer: "r",
      },
      {
        type: "mcq",
        question: "Which method reads the entire contents of a file?",
        options: ["read()", "readline()", "write()", "load()"],
        answer: "read()",
      },
      {
        type: "mcq",
        question: "Which statement automatically closes a file after use?",
        options: ["close()", "with", "endfile()", "exit()"],
        answer: "with",
      },
      {
        type: "mcq",
        question: "Which Python module is commonly used to work with JSON data?",
        options: ["json", "jsonify", "pickle", "csv"],
        answer: "json",
      },
      {
        type: "mcq",
        question: "Which function converts a Python object into a JSON string?",
        options: ["json.loads()", "json.dumps()", "json.read()", "json.parse()"],
        answer: "json.dumps()",
      },
      {
        type: "mcq",
        question: "Which function converts a JSON string into a Python object?",
        options: ["json.dumps()", "json.loads()", "json.write()", "json.convert()"],
        answer: "json.loads()",
      },
      {
        type: "mcq",
        question: "What is the output of print('Python'.lower())?",
        options: ["python", "PYTHON", "Python", "Error"],
        answer: "python",
      },
      {
        type: "code",
        question: "Write a Python program to count the occurrences of a specific character in a string.",
      },
      {
        type: "code",
        question: "Write a Python program to find the largest number in a list.",
      },
      {
        type: "code",
        question: "Write a Python program to calculate the sum of all elements in a list.",
      },
      {
        type: "code",
        question: "Write a Python program to remove duplicate elements from a list.",
      },
      {
        type: "code",
        question: "Write a Python program to reverse a given string without using slicing.",
      },
      {
        type: "code",
        question: "Write a Python program to check whether a string is a palindrome.",
      },
      {
        type: "code",
        question: "Write a Python program to count the number of vowels in a string.",
      },
      {
        type: "code",
        question: "Write a Python program to create a dictionary from two lists (keys and values).",
      },
      {
        type: "code",
        question: "Write a Python program to find the key with the highest value in a dictionary.",
      },
      {
        type: "code",
        question: "Write a Python program to merge two dictionaries into one.",
      },
      {
        type: "code",
        question: "Write a Python program to print the multiplication table of a given number using a loop.",
      },
      {
        type: "code",
        question: "Write a Python program to print all even numbers between 1 and 100 using a loop.",
      },
      {
        type: "code",
        question: "Write a Python program to calculate the factorial of a number using a loop.",
      },
      {
        type: "code",
        question: "Write a Python program to check whether a given number is prime.",
      },
      {
        type: "code",
        question: "Write a Python function that accepts a list of numbers and returns the average.",
      },
      {
        type: "code",
        question: "Write a Python function to find the maximum of three numbers.",
      },
      {
        type: "code",
        question: "Write a Python function to count the number of words in a sentence.",
      },
      {
        type: "code",
        question: "Write a Python program to swap the values of two variables using a function.",
      },
      {
        type: "code",
        question: "Write a Python program to find the common elements between two tuples.",
      },
      {
        type: "code",
        question: "Write a Python program to convert a tuple into a list and sort it.",
      },
      {
        type: "code",
        question: "Write a Python program to find the union and intersection of two sets.",
      },
      {
        type: "code",
        question: "Write a Python program to remove all duplicate values from a list using a set.",
      },
      {
        type: "code",
        question: "Write a Python program to read a text file and count the total number of lines.",
      },
      {
        type: "code",
        question: "Write a Python program to copy the contents of one file into another file.",
      },
      {
        type: "code",
        question: "Write a Python program to count the number of words in a text file.",
      },
      {
        type: "code",
        question: "Write a Python program to write a dictionary to a JSON file.",
      },
      {
        type: "code",
        question: "Write a Python program to read a JSON file and print all key-value pairs.",
      },
      {
        type: "code",
        question: "Write a Python program to update a value in a JSON file and save the changes.",
      },
      {
        type: "code",
        question: "Write a Python program to find the frequency of each word in a sentence.",
      },
      {
        type: "code",
        question: "Write a Python program to sort a dictionary by its values in ascending order.",
      }

    ],
    "mysql-dics-august-da": [
      {
        type: "code",
        question: "Write a MySQL query to find the total salary paid in each department using GROUP BY."
      },
      {
        type: "code",
        question: "Write a MySQL query to count the number of employees in each department."
      },
      {
        type: "code",
        question: "Write a MySQL query to find departments having more than 5 employees using HAVING."
      },
      {
        type: "code",
        question: "Write a MySQL query to find the average salary for each job role and display only roles with an average salary above 50000."
      },
      {
        type: "code",
        question: "Write a MySQL query to find the maximum salary in each department."
      },
      {
        type: "code",
        question: "Write a MySQL query to find departments where the total salary exceeds 500000."
      },
      {
        type: "code",
        question: "Write a MySQL ALTER TABLE statement to add an email column to the students table."
      },
      {
        type: "code",
        question: "Write a MySQL ALTER TABLE statement to remove the phone_number column from the customers table."
      },
      {
        type: "code",
        question: "Write a MySQL ALTER TABLE statement to rename the column mobile to phone_number in the customers table."
      },
      {
        type: "code",
        question: "Write a MySQL ALTER TABLE statement to change the salary column from INT to DECIMAL(10,2)."
      },
      {
        type: "code",
        question: "Write a MySQL ALTER TABLE statement to add a NOT NULL constraint to the employee_name column."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create a students table with id, name, age, and email columns."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement for an employees table with id as the primary key and department_id as a foreign key."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create a products table with an auto-incrementing product_id."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create an orders table with order_id, customer_id, order_date, and amount."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create a courses table where course_id is the primary key and course_name cannot be NULL."
      },
      {
        type: "code",
        question: "Write a MySQL INNER JOIN query to display employee names along with their department names."
      },
      {
        type: "code",
        question: "Write a MySQL LEFT JOIN query to display all customers and their orders, including customers who have not placed any orders."
      },
      {
        type: "code",
        question: "Write a MySQL query using INNER JOIN to display product names and their category names."
      },
      {
        type: "code",
        question: "Write a MySQL query using LEFT JOIN to find employees who are not assigned to any department."
      },
      {
        type: "code",
        question: "Write a MySQL query using JOINs to display order details along with the customer name and product name."
      },
      {
        type: "code",
        question: "Write a MySQL query using CASE WHEN to classify employees as 'High', 'Medium', or 'Low' earners based on salary."
      },
      {
        type: "code",
        question: "Write a MySQL query using CASE WHEN to display 'Pass' when marks are 40 or above and 'Fail' otherwise."
      },
      {
        type: "code",
        question: "Write a MySQL query using CASE WHEN to assign a performance rating based on an employee's score."
      },
      {
        type: "code",
        question: "Write a MySQL query using CASE WHEN to categorize products as 'Expensive', 'Moderate', or 'Cheap' based on price."
      },
      {
        type: "code",
        question: "Write a MySQL query to calculate the total price of each order using quantity multiplied by unit_price."
      },
      {
        type: "code",
        question: "Write a MySQL query to calculate the annual salary from an employee's monthly salary."
      },
      {
        type: "code",
        question: "Write a MySQL query to calculate the discount amount as 10% of the product price."
      },
      {
        type: "code",
        question: "Write a MySQL query to calculate the final price after applying a 15% discount to each product."
      },
      {
        type: "code",
        question: "Write a MySQL query to calculate each employee's salary after adding a 10% bonus."
      },
      {
        type: "code",
        question: "Write a MySQL stored procedure to display all employees from the employees table."
      },
      {
        type: "code",
        question: "Write a MySQL stored procedure that accepts a department ID as an input parameter and displays employees from that department."
      },
      {
        type: "code",
        question: "Write a MySQL stored procedure that accepts an employee ID and updates the employee's salary."
      },
      {
        type: "code",
        question: "Write a MySQL stored procedure to insert a new employee into the employees table using input parameters."
      },
      {
        type: "code",
        question: "Write a MySQL stored procedure that accepts a customer ID and returns the total number of orders placed by that customer."
      },
      {
        type: "code",
        question: "Write a MySQL function that accepts an employee's monthly salary and returns the annual salary."
      },
      {
        type: "code",
        question: "Write a MySQL function that accepts a student's marks and returns 'Pass' if the marks are 40 or above, otherwise 'Fail'."
      },
      {
        type: "code",
        question: "Write a MySQL function that accepts a product price and returns the price after applying a 10% discount."
      },
      {
        type: "code",
        question: "Write a MySQL function that accepts an employee's salary and returns the salary category as 'High', 'Medium', or 'Low'."
      },
      {
        type: "code",
        question: "Write a MySQL function that accepts an order ID and returns the total order amount by calculating quantity multiplied by unit price."
      }

    ],
    "mysql-dics-august-basics": [
      {
        type: "code",
        question: "Write a MySQL SELECT query to display all columns from the employees table."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to display the name and salary of all employees."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to display employees whose salary is greater than 50000."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to display employees who belong to the 'Sales' department."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to display employees ordered by salary from highest to lowest."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create a students table with student_id, name, age, and marks columns."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create a products table with product_id as the primary key, product_name, price, and stock_quantity."
      },
      {
        type: "code",
        question: "Write a MySQL CREATE TABLE statement to create an employees table with employee_id as an auto-increment primary key, employee_name, department, and salary."
      },
      {
        type: "code",
        question: "Write a MySQL INSERT statement to add one new student to the students table."
      },
      {
        type: "code",
        question: "Write a MySQL INSERT statement to add three new products to the products table in a single query."
      },
      {
        type: "code",
        question: "Write a MySQL INSERT statement to add a new employee with a name, department, and salary."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to calculate the total price as quantity multiplied by unit_price for each order."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to calculate annual_salary from an employee's monthly salary."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to calculate the discounted_price by reducing the product price by 10%."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query to calculate the total value of inventory as price multiplied by stock_quantity for each product."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query using GROUP BY to find the number of employees in each department."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query using GROUP BY to find the average salary for each department."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query using GROUP BY to find the total sales amount for each salesperson."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query using GROUP BY and HAVING to display departments with more than 5 employees."
      },
      {
        type: "code",
        question: "Write a MySQL SELECT query using GROUP BY and HAVING to display product categories whose total sales exceed 100000."
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
      `answersMatrix- ${name}-${subject} `,
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
      confirmPromptMsg = `You have ${unansweredCount} unanswered questions left.Are you sure you want to submit ? `;
    }

    if (!window.confirm(confirmPromptMsg)) return;

    const firstNum = Math.floor(Math.random() * 11);
    const secondNum = Math.floor(Math.random() * 11);
    const sum = firstNum + secondNum;
    const response = prompt(
      `Security Validation Check: \nWhat is ${firstNum} + ${secondNum} = ?`,
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
      const existingData = localStorage.getItem(`answersMatrix - ${name} -${subject} `);
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
    const segments = text.split(/(`[^ `]+`)/g);
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