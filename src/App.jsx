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
        question: "Which CSS property enables Flexbox layout?",
        options: [
          "display: flex",
          "display: block",
          "display: inline",
          "display: grid",
        ],
        answer: "display: flex",
      },
      {
        type: "mcq",
        question: "Which element becomes the flex container?",
        options: [
          "The parent element",
          "The first child element",
          "The last child element",
          "The largest element",
        ],
        answer: "The parent element",
      },
      {
        type: "mcq",
        question: "By default, what is the value of flex-direction?",
        options: ["column", "row", "row-reverse", "column-reverse"],
        answer: "row",
      },
      {
        type: "mcq",
        question: "Which property changes the direction of flex items?",
        options: [
          "justify-content",
          "flex-direction",
          "flex-wrap",
          "align-items",
        ],
        answer: "flex-direction",
      },
      {
        type: "mcq",
        question: "Which value of flex-direction stacks items vertically?",
        options: ["row", "column", "row-reverse", "inline"],
        answer: "column",
      },
      {
        type: "mcq",
        question: "Which property controls the alignment of items along the main axis?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "place-items",
        ],
        answer: "justify-content",
      },
      {
        type: "mcq",
        question: "Which value of justify-content places items at the center?",
        options: ["start", "center", "end", "stretch"],
        answer: "center",
      },
      {
        type: "mcq",
        question: "Which property aligns items along the cross axis?",
        options: [
          "justify-content",
          "align-items",
          "flex-wrap",
          "flex-direction",
        ],
        answer: "align-items",
      },
      {
        type: "mcq",
        question: "Which value of align-items stretches items to fill the container?",
        options: ["center", "flex-start", "stretch", "baseline"],
        answer: "stretch",
      },
      {
        type: "mcq",
        question: "Which property allows flex items to move onto multiple lines?",
        options: [
          "flex-wrap",
          "flex-flow",
          "align-content",
          "justify-content",
        ],
        answer: "flex-wrap",
      },
      {
        type: "mcq",
        question: "Which value prevents flex items from wrapping?",
        options: ["wrap", "nowrap", "reverse", "inherit"],
        answer: "nowrap",
      },
      {
        type: "mcq",
        question: "Which shorthand property combines flex-direction and flex-wrap?",
        options: [
          "flex",
          "flex-flow",
          "flex-layout",
          "flex-box",
        ],
        answer: "flex-flow",
      },
      {
        type: "mcq",
        question: "Which property specifies how much a flex item should grow?",
        options: [
          "flex-grow",
          "flex-expand",
          "grow",
          "flex-size",
        ],
        answer: "flex-grow",
      },
      {
        type: "mcq",
        question: "Which property specifies how much a flex item should shrink?",
        options: [
          "flex-shrink",
          "flex-reduce",
          "shrink",
          "flex-compress",
        ],
        answer: "flex-shrink",
      },
      {
        type: "mcq",
        question: "Which property specifies the initial size of a flex item?",
        options: [
          "flex-basis",
          "width",
          "flex-size",
          "basis",
        ],
        answer: "flex-basis",
      },
      {
        type: "mcq",
        question: "Which shorthand property combines flex-grow, flex-shrink, and flex-basis?",
        options: [
          "flex",
          "flex-item",
          "flex-layout",
          "flex-flow",
        ],
        answer: "flex",
      },
      {
        type: "mcq",
        question: "Which property changes the display order of a flex item?",
        options: [
          "order",
          "z-index",
          "position",
          "flex-order",
        ],
        answer: "order",
      },
      {
        type: "mcq",
        question: "Which property aligns a single flex item differently from the others?",
        options: [
          "align-self",
          "justify-self",
          "self-align",
          "place-self",
        ],
        answer: "align-self",
      },
      {
        type: "mcq",
        question: "Which value of justify-content creates equal space around items?",
        options: [
          "space-around",
          "space-evenly",
          "space-between",
          "center",
        ],
        answer: "space-around",
      },
      {
        type: "mcq",
        question: "Which value of justify-content creates equal spacing between all items and the container edges?",
        options: [
          "space-between",
          "space-around",
          "space-evenly",
          "flex-start",
        ],
        answer: "space-evenly",
      },


      {
        type: "mcq",
        question: "Which HTML tag is used to link a Google Font stylesheet?",
        options: ["<style>", "<script>", "<link>", "<font>"],
        answer: "<link>",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to apply a Google Font?",
        options: ["font-family", "font-style", "font-type", "font-name"],
        answer: "font-family",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the size of text?",
        options: ["font-size", "text-size", "font-style", "size"],
        answer: "font-size",
      },
      {
        type: "mcq",
        question: "Which CSS property makes text bold?",
        options: ["font-style", "font-weight", "text-bold", "font-bold"],
        answer: "font-weight",
      },
      {
        type: "mcq",
        question: "Which value of font-weight represents bold text?",
        options: ["300", "400", "700", "200"],
        answer: "700",
      },
      {
        type: "mcq",
        question: "Which CSS property makes text italic?",
        options: ["font-weight", "font-style", "text-style", "italic"],
        answer: "font-style",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color",
      },
      {
        type: "mcq",
        question: "Which CSS property aligns text horizontally?",
        options: ["text-align", "align", "font-align", "justify"],
        answer: "text-align",
      },
      {
        type: "mcq",
        question: "Which value of text-align centers the text?",
        options: ["left", "center", "right", "justify"],
        answer: "center",
      },
      {
        type: "mcq",
        question: "Which CSS property adds a line under text?",
        options: [
          "font-decoration",
          "text-decoration",
          "underline",
          "text-style",
        ],
        answer: "text-decoration",
      },

      {
        type: "mcq",
        question: "Which CSS property changes the spacing between letters?",
        options: [
          "letter-spacing",
          "word-spacing",
          "text-spacing",
          "character-spacing",
        ],
        answer: "letter-spacing",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the spacing between words?",
        options: [
          "word-spacing",
          "letter-spacing",
          "text-spacing",
          "line-height",
        ],
        answer: "word-spacing",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the space between lines of text?",
        options: [
          "line-height",
          "text-height",
          "font-height",
          "line-spacing",
        ],
        answer: "line-height",
      },
      {
        type: "mcq",
        question: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: "<h1>",
      },
      {
        type: "mcq",
        question: "Which HTML tag is used to create a paragraph?",
        options: ["<para>", "<text>", "<p>", "<paragraph>"],
        answer: "<p>",
      },
      {
        type: "mcq",
        question: "Which HTML tag is used to insert an image?",
        options: ["<picture>", "<img>", "<image>", "<src>"],
        answer: "<img>",
      },
      {
        type: "mcq",
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        type: "mcq",
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        type: "mcq",
        question: "Which HTML tag represents a list item?",
        options: ["<ul>", "<ol>", "<li>", "<item>"],
        answer: "<li>",
      },
      {
        type: "mcq",
        question: "Which HTML tag is commonly used as a generic container for styling with CSS?",
        options: ["<section>", "<div>", "<span>", "<article>"],
        answer: "<div>",
      },

      {
        type: "mcq",
        question: "Which CSS property is used to apply animations?",
        options: ["transition", "animation", "transform", "motion"],
        answer: "animation",
      },
      {
        type: "mcq",
        question: "Which rule is used to define an animation?",
        options: ["@transition", "@animation", "@keyframes", "@frames"],
        answer: "@keyframes",
      },
      {
        type: "mcq",
        question: "Which property specifies the name of the animation?",
        options: [
          "animation-name",
          "animation-id",
          "animation-key",
          "animation-effect",
        ],
        answer: "animation-name",
      },
      {
        type: "mcq",
        question: "Which property specifies how long an animation takes to complete one cycle?",
        options: [
          "animation-delay",
          "animation-duration",
          "transition-duration",
          "animation-time",
        ],
        answer: "animation-duration",
      },
      {
        type: "mcq",
        question: "Which property specifies the number of times an animation should repeat?",
        options: [
          "animation-repeat",
          "animation-loop",
          "animation-iteration-count",
          "animation-count",
        ],
        answer: "animation-iteration-count",
      },
      {
        type: "mcq",
        question: "Which value makes an animation repeat forever?",
        options: ["always", "repeat", "infinite", "endless"],
        answer: "infinite",
      },
      {
        type: "mcq",
        question: "Which property delays the start of an animation?",
        options: [
          "animation-delay",
          "transition-delay",
          "animation-duration",
          "animation-start",
        ],
        answer: "animation-delay",
      },
      {
        type: "mcq",
        question: "Which property controls the speed curve of an animation?",
        options: [
          "animation-timing-function",
          "animation-speed",
          "animation-curve",
          "animation-mode",
        ],
        answer: "animation-timing-function",
      },
      {
        type: "mcq",
        question: "Which shorthand property combines all animation properties?",
        options: ["animation", "transition", "transform", "keyframes"],
        answer: "animation",
      },
      {
        type: "mcq",
        question: "Which property specifies whether an animation runs normally or in reverse?",
        options: [
          "animation-direction",
          "animation-order",
          "animation-mode",
          "animation-flow",
        ],
        answer: "animation-direction",
      },

      // Positioning
      {
        type: "mcq",
        question: "Which CSS property is used to position an element?",
        options: ["display", "position", "float", "align"],
        answer: "position",
      },
      {
        type: "mcq",
        question: "Which position value places an element according to the normal document flow?",
        options: ["relative", "absolute", "fixed", "static"],
        answer: "static",
      },
      {
        type: "mcq",
        question: "Which position value allows an element to be moved relative to its normal position?",
        options: ["absolute", "fixed", "relative", "sticky"],
        answer: "relative",
      },
      {
        type: "mcq",
        question: "Which position value removes an element from the normal document flow?",
        options: ["relative", "static", "absolute", "inherit"],
        answer: "absolute",
      },
      {
        type: "mcq",
        question: "Which position value keeps an element fixed relative to the browser window?",
        options: ["sticky", "relative", "absolute", "fixed"],
        answer: "fixed",
      },
      {
        type: "mcq",
        question: "Which position value behaves like relative until a scroll threshold is reached?",
        options: ["fixed", "sticky", "absolute", "static"],
        answer: "sticky",
      },
      {
        type: "mcq",
        question: "Which property controls the stacking order of positioned elements?",
        options: ["layer", "z-index", "stack", "order"],
        answer: "z-index",
      },
      {
        type: "mcq",
        question: "Which property is commonly used with position:absolute to move an element downward?",
        options: ["margin-top", "top", "padding-top", "bottom"],
        answer: "top",
      },
      {
        type: "mcq",
        question: "An absolutely positioned element is positioned relative to:",
        options: [
          "The nearest positioned ancestor",
          "The browser window only",
          "The body element only",
          "Its previous sibling",
        ],
        answer: "The nearest positioned ancestor",
      },
      {
        type: "mcq",
        question: "Which combination keeps a navigation bar visible while scrolling?",
        options: [
          "position: relative",
          "position: static",
          "position: fixed",
          "position: absolute",
        ],
        answer: "position: fixed",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to apply a transition effect?",
        options: ["animation", "transition", "transform", "effect"],
        answer: "transition",
      },
      {
        type: "mcq",
        question: "Which property specifies the duration of a CSS transition?",
        options: [
          "transition-delay",
          "transition-duration",
          "animation-duration",
          "duration",
        ],
        answer: "transition-duration",
      },
      {
        type: "mcq",
        question: "Which property defines the CSS property that should transition?",
        options: [
          "transition-property",
          "transition-name",
          "transition-target",
          "property",
        ],
        answer: "transition-property",
      },
      {
        type: "mcq",
        question: "Which transition timing function starts slowly, speeds up, then slows down?",
        options: ["linear", "ease", "ease-in", "ease-out"],
        answer: "ease",
      },
      {
        type: "mcq",
        question: "Which transition timing function moves at a constant speed?",
        options: ["ease", "linear", "ease-in-out", "ease-out"],
        answer: "linear",
      },
      {
        type: "mcq",
        question: "Which property delays the start of a transition?",
        options: [
          "transition-duration",
          "transition-delay",
          "animation-delay",
          "delay",
        ],
        answer: "transition-delay",
      },
      {
        type: "mcq",
        question: "Which shorthand property combines all transition properties?",
        options: ["transform", "transition", "animation", "effect"],
        answer: "transition",
      },
      {
        type: "mcq",
        question: "Transitions are commonly triggered by which pseudo-class?",
        options: [":hover", ":before", ":after", ":focus-visible"],
        answer: ":hover",
      },
      {
        type: "mcq",
        question: "What happens if transition-duration is set to 0s?",
        options: [
          "The transition is disabled.",
          "The transition becomes infinite.",
          "The transition runs slowly.",
          "The transition repeats once.",
        ],
        answer: "The transition is disabled.",
      },
      {
        type: "mcq",
        question: "Which CSS property is commonly transitioned to create a fade effect?",
        options: ["display", "opacity", "visibility", "overflow"],
        answer: "opacity",
      },

      // Transforms
      {
        type: "mcq",
        question: "Which CSS property is used to apply transformations?",
        options: ["translate", "transform", "transition", "animation"],
        answer: "transform",
      },
      {
        type: "mcq",
        question: "Which transform function moves an element horizontally or vertically?",
        options: ["rotate()", "scale()", "translate()", "skew()"],
        answer: "translate()",
      },
      {
        type: "mcq",
        question: "Which transform function rotates an element?",
        options: ["rotate()", "translate()", "scale()", "move()"],
        answer: "rotate()",
      },
      {
        type: "mcq",
        question: "Which transform function changes the size of an element?",
        options: ["zoom()", "resize()", "scale()", "grow()"],
        answer: "scale()",
      },
      {
        type: "mcq",
        question: "Which transform function slants an element?",
        options: ["rotate()", "translate()", "skew()", "scale()"],
        answer: "skew()",
      },
      {
        type: "mcq",
        question: "Which property changes the origin point of transformations?",
        options: [
          "transform-origin",
          "transform-point",
          "origin",
          "transform-center",
        ],
        answer: "transform-origin",
      },
      {
        type: "mcq",
        question: "Which value rotates an element by 90 degrees?",
        options: [
          "rotate(90deg)",
          "rotate(90px)",
          "rotateX(90px)",
          "rotate(90)",
        ],
        answer: "rotate(90deg)",
      },
      {
        type: "mcq",
        question: "Which transform function enlarges an element to twice its size?",
        options: ["scale(2)", "scale(200)", "zoom(2)", "grow(2)"],
        answer: "scale(2)",
      },
      {
        type: "mcq",
        question: "Which transform function moves an element 50px to the right?",
        options: [
          "translateX(50px)",
          "moveX(50px)",
          "translateY(50px)",
          "left(50px)",
        ],
        answer: "translateX(50px)",
      },
      {
        type: "mcq",
        question: "Multiple transform functions can be applied by:",
        options: [
          "Writing them in the same transform property",
          "Using multiple transform properties",
          "Using transition",
          "Using animation only",
        ],
        answer: "Writing them in the same transform property",
      },

      {
        type: "mcq",
        question: "Which CSS property is used to change the text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to make text bold?",
        options: ["font-style", "font-weight", "text-weight", "bold"],
        answer: "font-weight",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to align text horizontally?",
        options: ["align", "text-align", "font-align", "justify-content"],
        answer: "text-align",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the size of the text?",
        options: ["text-size", "font-size", "size", "text-style"],
        answer: "font-size",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to underline text?",
        options: ["text-decoration", "font-decoration", "underline", "text-style"],
        answer: "text-decoration",
      },
      {
        type: "mcq",
        question: "Which part of the CSS Box Model surrounds the content directly?",
        options: ["Margin", "Border", "Padding", "Content"],
        answer: "Padding",
      },
      {
        type: "mcq",
        question: "Which part of the CSS Box Model is outside the border?",
        options: ["Padding", "Content", "Margin", "Outline"],
        answer: "Margin",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the space between the content and the border?",
        options: ["margin", "spacing", "padding", "border-spacing"],
        answer: "padding",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the thickness of a border?",
        options: ["border-width", "border-size", "width", "outline-width"],
        answer: "border-width",
      },
      {
        type: "mcq",
        question: "What is the correct order of the CSS Box Model from inside to outside?",
        options: [
          "Content → Padding → Border → Margin",
          "Content → Border → Padding → Margin",
          "Padding → Content → Border → Margin",
          "Content → Margin → Border → Padding"
        ],
        answer: "Content → Padding → Border → Margin",
      },
      {
        type: "mcq",
        question: "Which display value makes an element a flex container?",
        options: ["display: block", "display: inline", "display: flex", "display: grid"],
        answer: "display: flex",
      },
      {
        type: "mcq",
        question: "Which Flexbox property changes the direction of flex items?",
        options: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
        answer: "flex-direction",
      },
      {
        type: "mcq",
        question: "Which Flexbox property aligns items horizontally in a row?",
        options: ["justify-content", "align-items", "align-content", "text-align"],
        answer: "justify-content",
      },
      {
        type: "mcq",
        question: "Which Flexbox property aligns items vertically when flex-direction is row?",
        options: ["justify-content", "align-items", "text-align", "flex-wrap"],
        answer: "align-items",
      },
      {
        type: "mcq",
        question: "Which Flexbox property allows items to move to the next line?",
        options: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
        answer: "flex-wrap",
      },
      {
        type: "mcq",
        question: "Which display value makes an element start on a new line and take the full available width?",
        options: ["inline", "inline-block", "block", "flex"],
        answer: "block",
      },
      {
        type: "mcq",
        question: "Which display value allows elements to stay on the same line but does NOT allow width and height to be set?",
        options: ["block", "inline", "inline-block", "flex"],
        answer: "inline",
      },
      {
        type: "mcq",
        question: "Which display value allows elements to stay on the same line while allowing width and height to be set?",
        options: ["block", "inline", "inline-block", "flex"],
        answer: "inline-block",
      },
      {
        type: "mcq",
        question: "Which CSS property changes the background color of an element?",
        options: ["bg-color", "background-color", "color", "background-style"],
        answer: "background-color",
      },
      {
        type: "mcq",
        question: "Which CSS property is used to round the corners of an element?",
        options: ["corner-radius", "border-round", "border-radius", "radius"],
        answer: "border-radius",
      }
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