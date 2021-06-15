# Packages:

- react-router-dom
- react-scroll
- react-icons (placeholder)
- sass (dev dependency)
- mkrc dev dependency)

# Extensions:

- Prettier (code formatter)
  - where Prettier and ESLint disagree, change Prettier rules to match ESLint
- ESLint by Dirk Baeumer
  - (identifies problems with the code written)
- Babel JavaScript by Michael McDermott
  - (identifies problems with the code written)

# Suggested Extensions:

- Better comments by Aaron Bond
  vscode settings:
- Tab size: 4

# Coding standards

- Do NOT mutate state, objects or arrays directly - Can lead to bugs in the code
  - If you need to change state / an object or array , make sure you copy and avoid directly modifying the state/object/array
  - (use spread operator or slice())
  - e.g.
  ```
  const [aState, setAState] = useState({})
  const foo = () => {
    const newObjectToChange = aState // very bad
    --> do this instead (basically using spread operator)
    const newObjectToChange = {...aState}
  }
  ```
- Use {} as a delimiter for JSX. Use single quotes for strings and {} for JS expressions (not both)
  - Use the delimiter {} if the type or expression does matter (basically js) otherwise use ‘’
    - side note: {} in JSX is a javascript expression delimiter
  - use single quotes instead of double (“”)
  - e.g.
    - <element propName={“a string”} /> // bad
    - <element propName=“a string” /> //good
    - <element propName={jsExpression} /> //good
  - Avoid using special characters / entities e.g. \n and &#169; (use CSS to handle special characters / use icons/images)
- Use good naming conventions - descriptive but brief
- KISS (keep it simple, stupid), DRY (Don’t repeat yourself, stupid)
- Try to return immediately if you have finished with the logic but ensure code is still readable
  - e.g. const foo(num1, num2) {
    return num1 + num2; //okay
    }
  - e.g. const foo(num1, num2) {
    const sum = num1 + num2;
    return sum; //okay
    }
  - e.g. const foo(num1, num2) {
    const userInput1 = num1;
    const userInput2 = num2;
    const sum = userInput1 + userInput2;
    return sum; //bad
    }
- Use strict comparisons instead of double == comparison; Use: (=== and !==)
- Parse variables/data when needed especially if it is being returned somewhere;
  - e.g. If a function is expected to return a number, make sure the data being returned is converted before it is returned - handle edge cases appropriately

# Styling:

- Follow Airbnb’s styling guide
- Use BEM(?)
  -- BLOCK (block)
  -- ELEMENT (block**element)
  -- MODIFIER (block**element_modifier)
  - Use Sass with CSS modules
- Make the class names as brief but descriptive and relevant to the element being styled as possible
  - Camel casing (Pascal casing if necessary)

# Commits

- DO NOT PUSH TO MASTER DIRECTLY
  - The code will need to be peer reviewed before it is merged
  - When making a new branch, add ticket numbers
  - Pull from remote when you need to, to avoid conflicts
  - Under 50 characters for the description of the commit
  - Do not push code if you’re only formatting the indentation!
    - Harder to read changes in github

# Extra/Bonus

- Use a functional programming approach when you can
  - function returns the same output given the same input
  - It does not cause side effect’s
- Conditionally rendering
  - Use the && operator in favour to conditionally render JSX
  - e.g.
  - {bool && <element />}

# Stick to conventions/patterns?

- container -> component design pattern?!?
  - https://blog.bitsrc.io/implementing-the-container-pattern-using-react-hooks-f490a8492d05
  - https://stackoverflow.com/questions/59848485/does-the-container-and-presentational-patter-is-still-a-best-practice-with-hooks
- Where does state live?
  - Common ancestor that houses the components that need the state
- useContext hook if state/props are deeply nested
- Render props and props.children to render specific use case??
