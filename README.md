# Terribly Tiny Tales Assignment
![mobile view](https://github.com/ReejoJoseph1244/Terribly-Tiny-Tales-Assignment/assets/92742868/062f4543-4d70-41f4-82af-2f5e6588cf0f)

## Task Details
1. Develop a frontend in Reactjs or Nextjs, which does the following:

2. Renders a "profile screen" as follows: https://www.terriblytinytales.com/profile.jpeg (this is a sample screenshot taken from mobile view)

3. The profile data can be hardcoded in a local JSON and need not have a backend.

4. The screen when opened on different mobile types, should render consistently. This can be checked in Chrome Inspect in mobile view, by changing device types or on actual physical devices.

## Components
Note:- All the components are created in components folder in src
```
---src
    |
    |----> components
    |        |
    |        |----> Navbar.jsx
    |        |----> Header.jsx
    |        |----> PostContent.jsx
    |        |----> Posts.jsx
    |        |----> assests
    |
    |----> app.js
    |----> app.css
```
### App
This is the one of the main component of the application that imports various components such as Navbar, Header, and Posts, and uses the useState and useEffect hooks to manage the state of the application. 
The **saveStateToLocalStorage** and **getStateFromLocalStorage** functions are used to save and retrieve the **localjson profiledata** state from the browser's local storage. The useEffect hook is used to fetch the data from local storage when the component mounts.

### NavBar
This Component is created to render the navigation bar of the webpage. It returns a JSX element that represents a navigation bar with a logo, a title, and a button labeled "Courses". The logo is an SVG image imported from a file called ttt.svg. The navigation bar has a black background and white text, and the logo and title are positioned using flexbox. The button has a yellow background and changes color on hover. The component is exported as the default export of the module.
![navbar](https://github.com/ReejoJoseph1244/Terribly-Tiny-Tales-Assignment/assets/92742868/db50d594-9161-4237-ac31-2dc4910d0c5c)


### Header 
The Header Component is used to display the profile information using Local json.  It takes in a props called profiledata which is an object containing various data about a user's profile fteched from the Browser Local Json. The component renders an image of a background, an image of the user's profile, their name, a section displaying their followers and following count, their bio, and links to their Instagram profile and their Instagram ID. It also renders a section displaying various statistics about the user, such as their star rating, number of likes, views, and number of posts they have liked.

 ![header view](https://github.com/ReejoJoseph1244/Terribly-Tiny-Tales-Assignment/assets/92742868/57e62012-a0f8-472c-9a1f-92bbbe8f96cd)


### Posts
It is a parent component for PostContent Component that displays a list of posts, It has all post data, which is on loading saved to the localstorage of the browser using javascript functions and fetched to map and render on each post. It uses the useState and useEffect hooks to manage state and fetch data from local storage. The component renders a list of PostContent components, each with data passed as a prop. The data is an array of objects that contain information about each post, such as the post title, description, author, date, read time, and views. The component also includes a horizontal line between each post to separate them. 

### PostContent
It is the child component of Posts, it takes the posts data as props and display the posts.The data property is an object that contains information about a post, including its title, description, author, date, type, read time, and views.
The component renders the post's title, a truncated version of its description (if it exceeds a certain length), the author, date, type, read time, and views. It also displays an image icon for "thumbs up" and a horizontal line to separate the post's content from the post's metadata.
It also uses the split() method to split the post's description into multiple lines if it exceeds a certain length.


## libraries and plugins used
```
React Js (18.2.0)
Tailwind CSS (3.0.2)
npm ( >=6 or >=9)
node (>=16)
```

## Local Json data
![local json](https://github.com/ReejoJoseph1244/Terribly-Tiny-Tales-Assignment/assets/92742868/4b1f2273-fe34-4cc0-bc36-e9fca755119d)
