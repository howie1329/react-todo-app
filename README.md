# CRUD Todo App

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I wanted to focus on a mobile first approch while using React, Tailwind, and Firebase. First was understanding how i wanted the app to look and feel. Next was create components and using tailwind to style. Finally, I used Firebase for the backend for CRUD operations

### Built with

- Semantic HTML5 markup
- [Tailwind]() - CSS Framework
- [Firebase]()
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I was able to create a CRUD operation that takes in data from a database, parses through the data for the title and body of the todo, and returns the id for each todo
```JS
  //Read Todos From Database
  async function readTodo(){
    const querySnapshot = await getDocs(collection(db,'todos'));
    let todoData = []
    let dataId = []
    querySnapshot.forEach((doc) => {
      todoData.push(doc.data())
      dataId.push(doc.id)
    })
    setTodo([...todoData])
    setID([...dataId])
  }
```

### Continued development

Next I would like to add a completed status and a time and data display for each todo

### Useful resources

- [Firebase Docs](https://firebase.google.com/docs?authuser=0&hl=en) - This helped me understand how to connect to the Firebase and preform CURD functionaliy
- [Tailwind Docs](https://tailwindcss.com/docs/installation) - Helped me get used to using tailwind. Docs were simple and straight forward

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

