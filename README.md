# catch-of-the-day

Coding along with React For Beginners tutorial, however using Meteor and adding some unit testing.

## Sources
* [React For Beginners](https://reactforbeginners.com/)
    * [start files for tutorial](https://github.com/wesbos/React-For-Beginners-Starter-Files)
* [Meteor React Testing Boilerplate](https://github.com/sjm-practice/meteor-react-testing-bp)

## Notes
* Setup
    * start with Meteor React Testing Boilerplate
    * had to add assets (css, fonts, images) from tutorial repo, to public folder
    * need to install specific version of react router (v4 alpha)
* React, some tenets
    * Props to pass data
    * State to store data
    * Context to 'surface' or provide access to higher level items (such as router)
        * "surface the router from a parent"
* one step in the tutorial saves a reference to an input component value using ref with a function
    * instead of using an id string for a reference (aks string ref), a function is used (aka functin ref), that is executed when the component is rendered
        * this provides a reference to the whole component, and you can access the value from that
    * an explanation of that can be found [here](https://facebook.github.io/react/docs/refs-and-the-dom.html)
* when and why binding 'this' to methods is done, good explanation found [here](https://facebook.github.io/react/docs/handling-events.html)
    * ie, in component constructors you may see `this.handleClick = this.handleClick.bind(this)`
* using context to provide access to other items
    * define __contextTypes__ for the component, including item to provide access to (ie router)
    * those are then accessible in component's __context__
        * `this.context.router.transitionTo`
    * React docs on context [here](https://facebook.github.io/react/docs/context.html)
* changing routes imperatively: the tutorial, in one case, used .context.router.transitionTo to change the current 
    * note you can do so declaratively, by using a redirect component
    * I could not find formal docs on transitionTo
* in lesson 19 (localStorage), Wes Passes router params from App to the Order component. I don't see why, it wasn't used there. Perhaps it will be used in a later lesson.
* one __useful technique__ used to dynamically update any field of the fish object was used in the Inventory component
    * check out the handleChange method
### Animation
* I removed the 'Fold' checkbox / button and rotated view. Wasn't working correctly, and easier to view without it.
* in some cases (some types of animation) you need to add a key attribute to an element, because react adds a new element before removing the original, and they must be able to be uniquely identified
* For the most part, the react package CSSTransitionGroup, adds some life cycle hooks for adding and removing css classes as elements are rendered to support animation
### Authentication
* relying mostly on firebase authentication
    * setup via firebase, and the oauth clients you wish to use (ie, Facebook, Github)
    * then adding buttons, storing userid / owner in state, and wiring up button to firebase auth call
* ran in to issue with facebook and github oauth: `auth/operation-not-supported-in-this-environment`
    * SO, using firebase auth with email and password
    * created a few firebase test users: test@user.com, nikki@test.com, joe@test.com, steve@test.com
    * __NOTE:__ although I left the github and facebook login buttons in there, they likely do not work
    
## Questions / Suggestions
* Why not container pattern? Could you create another lesson, refactoring some components?
* TBD suggest, doing proptypes sooner (right after introducing props)
    * going back after to update / add to all components more work, not instilling habit
* Using ref= input => ... to get access to input values, instead of using state seems like an anti-pattern 
    * I thought I recalled at some point seeing, in a doc or console warning, that a certain use of ref was being deprecated (maybe that was if it wasn't a function)
* The logged in user and / or owner, seem like good candidates for context
* Authenticate / Login should be its own component, and extracted from the Inventory component
* Inventory component is a mess. should be broken up in to multiple components. 
