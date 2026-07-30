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