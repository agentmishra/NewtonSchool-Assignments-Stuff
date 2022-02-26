React Basics, Building a First Custom Functional Component, Working with Fragmen ... - In Class
Question 1
Paint App: Colour Picker
You want to create an app that gives users an option to choose colors for given blocks.
You are given an App that contains a list of three ColourSelector components and a list of three Selection components. The ColourSelector is clicked, the color corresponding to it is selected. Then when a Selection component is clicked, the selected color is applied to its background.

You are supposed to complete the implementation of the Selection component that takes a callback from the parent. When the Selection component is clicked, the callback is invoked. (More details in Acceptance Criteria)
Also, complete the styling and label of the ColourSelector component.

Acceptance Criteria
App.js contains three ColourSelector component, which on click changes the nextBackground state variable.

App.js contains three Selection components which accepts the prop applyColor.

Structure Selection.js such that

It accepts the prop applyColor

It renders a div component with className fix-box

This div component should have a style attribute that takes its value from the component's state variable

Initial value of this state variable should be {background:''}

When the component is clicked, this state variable should get the value of the nextBackground state variable of the App component. (Hint: use applyColor for this)

The div component should have a child component that's a h2 tag having text "Selection" and class subheading.

Export the Selection component by default.




