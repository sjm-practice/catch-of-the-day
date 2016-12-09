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