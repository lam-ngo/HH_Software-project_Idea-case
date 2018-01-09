## Introduction
Single page application using React and Redux. The application requests data from Node.js backend API. This belongs to the group project Idea Case for course Software Project.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The application is deployed at: http://softwareproject.s3-website-eu-west-1.amazonaws.com/.  

## Application structure
```  
index.js: Main entry point where redux store is created and connect to the application
App.js: Main routing component that routes to different views based on the URL
/actions  (folder for all redux actions)  
    index.js: contains all the action creators and call back function for API request
/components  (folder for all components)    
    idea_index.js: ("/"),main app view. Display all ideas, view idea detail => ("/ideas/:id"), add new idea => ("/ideas/new").  
    idea_show.js: ("/ideas/:id"),view specific idea detail with all comments, edit => ("/edit"), delete idea.
    comment_index.js: sub-component for ('idea_show.js'). Display all ideas.
    idea_edit.js: ("/edit")edit specific idea.
    idea_new.js: ("/ideas/new")add new idea.  
/reducers  (folder for all redux reducers)  
    index.js:  combine all redux reducers.   
    reducer_idea.js: redux reducer for all idea actions.  
    reducer_comment.js:  redux reducer for comments action.    
/visual  (visual resources)  
    hero.png:  main view hero image.  
```  

## Technology and Key Features  

### Technology
- React
- Redux
- Amazon Web Service

### Key Features
- User can ADD, VIEW, EDIT, DELETE ideas and VIEW comments for each idea.
- Ideas and comments are on separate views.

## Limitation
With simple requirement from the course, the Idea Case does not have authentication, authorization, complex features, etc.

## Further Extension
This project will be extended according to team agreement.
