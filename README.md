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
### NavBar
This Component is created to render the navigation bar of the webpage.

### Header 
The Header Component is used to display the profile information using Local json.

### Posts
It is a parent component for PostContent Component, It has all post data and maps and render on each post.

### PostContent
It is the child component of Posts, it takes the posts data as props and display the posts.


## libraries and plugins used
```
React Js
Tailwind CSS
npm
node
```
