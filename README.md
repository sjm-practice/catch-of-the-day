# catch-of-the-day

Coding along with React For Beginners tutorial, however using Meteor and adding some unit testing.

## Sources
* [React For Beginners](https://reactforbeginners.com/)
    * [start files for tutorial](https://github.com/wesbos/React-For-Beginners-Starter-Files)
* [Meteor React Testing Boilerplate](https://github.com/sjm-practice/meteor-react-testing-bp)

## Notes
* start with Meteor React Testing Boilerplate
* had to add assets (css, fonts, images) from tutorial repo, to public folder
* need to install specific version of react router (v4 alpha)
* one step in the tutorial saves a reference to an input component value using ref with a function
    * instead of using an id string for a reference (aks string ref), a function is used (aka functin ref), that is executed when the component is rendered
        * this provides a reference to the whole component, and you can access the value from that
    * an explanation of that can be found [here](https://facebook.github.io/react/docs/refs-and-the-dom.html)
* when and why binding 'this' to methods is done, good explanation found [here](https://facebook.github.io/react/docs/handling-events.html)
    * ie, in component constructors you may see `this.handleClick = this.handleClick.bind(this)`