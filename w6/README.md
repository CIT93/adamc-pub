My Project Title: Computer Budgeting Service UI - Step 1: UI Setup, Basic Input Handling & Modular Output

Description: This App can help users, for example me create a budget based on what my personal budget is at and adjust it based on the options that are shown.[ eg. Location, Accessories, Uses, and Portability] Which for example one is based on where i'm at, either at home or a apartment for example will change it's budget. - This step will be only sets up the basic look and gets input capture and console logging working using a modular approach.

Input Types Used: Number for "Personal Computer Budget", Dropdown for "Computer Space Circumstances" Which depends on where you live in the options of House or Apartment. Next one is the CheckBox for "Accesories in general", and Radio buttons for "Computer Uses and Computer Location/Portability or Stationary". For why I did these is because I wanted to try a get a more simplified look at the options here. While, I could've done more it would've felt like it would be alot of different options to deal with. So i simplified it alot with the options I chose that I felt were important in setting a computer budget. Which is why I put most of the Accessories in a checkbox in general.

Color Pallete: A light blue and turquoise green simple pallete for the border and background with a little dark green for the texts and blue for the bigger headings. (eg. #4DCCBD, #007bff, #a8d4ed, #053225, #0E79B2  )

My Decision Focus: This app here is to help me budget myself with different things that has to deal with a computer, but also in general create a budgeting system that can change based on what option's I put in or how the different options can affect my budget in their own ways.

Decision Logic:
1: Starting in the decision.js file, the first function is 'calculatecompBudgetpoints', which this function works when a number is passed in as compBudget then the number will be scored. But at the moment it's being used to return the input to be used as a user base input to calculate from.

The second function being in 'calculatecompHomePoints', is when the 'computer size' is 'apartment', and the accessories checkbox is true, then it returns 3 points. When 'computer size' is 'apartment', and 'accessories' checkbox is false, then it returns it to 2 points. When 'computer size' is house, and accessories are true, then it returns 6 points. Lastly, when 'computer size' is house, and 'accessories' are false then it returns 5 points. Finally, when the input is either invalid or default, then it returns to 0.

For the third function being in 'calculatecompUsePoints', is when the usage is 'videogame', then it returns 10 points. When the usage is 'school', then it returns 8 points. When the 'engine'(engineering) is used then it returns 4 points. Lastly, when the usage is 'program'(programming) then it returns 2 points. But, when it's anything else then it returns 0 points.

The final function being 'calculatecompSizepoints', which is when the function is used in 'portable' then it returns 2 points. While, when it's used as a 'stationary' then it returns 1 point. Lastly, when it's default then it returns 0 points.

The Final decision works by gathering all of the individual scores and calling each of the helper functions with the user's input. 
Which they all add up to one value: 'totalBudgetPoints'.
Finally, it returns a object that returns the User's total budget(totalBudget) and shows a breakdown of the options that you chose and what they scored.(compBudget,compHome, compUse, compSize, budgetMessage, isAccess) In which they add up in total to the user's total pc budget. Which it outputs a budget message that depends on how much money you inputed and the choices you picked added up towards either a low end, mid range, and high end budget. But there is one more message if you go beyond that being the Premium Computer Setup.(If you want to.)


Example Outputs:
1. Input: Computer budget: $500, Computer Space: House(5 points), Accessories: No (0 points), Computer Uses: Gaming (10 points), and Computer Size: Portable(Laptop, 1 point). 
Output: Total PC Budget: $516, BudgetMessage: You have a low end budget computer setup.(Around $500 or less)

2. Input: Personal Computer Budget: $1520, Computer Space: Apartment(3 points), Accessories: Yes (3 Points), Computer Uses: School (8 Points), Computer Size: Portable (2 points).
Output: Current PC Budget: $1536. Budget Message: You have a high end budget computer setup.(Around $1500-$2000)

3. Input: Personal Budget: $3000, Computer Space: Apartment(3 Points), Accessories: Yes (3 points), Computer Use: Engineering(4 points), Computer Size: Stationary(1 point).
Outputs: Current PC Budget: $3011, Budget Message: You have a Very Premium Computer Setup!