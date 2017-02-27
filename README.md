# Egghead.io course on manage state with the Angular Router

I finally got around to checking this course out.

For a while, I doubted that I really needed to know stuff like lazy loading and the more advanced features of the router since I had subscribed to the ngrx patterns

## Some takeaways:
The explaintion and demo on lazy loading made a lot more sense.  I had heard about it, but seeing it in code solidified it, and I understand now why feature modules are a good idea

- rxjs is just an abstraction from what angular already does.  Without rxjs, if you want to pass data from one component to the next, you would pass in the required data (like an id) into the url, then in the routed to component's constructur, you would make the GET request.

- This also made ngrx/effects make more sense.  I still prefur abstracting the services and http away from the components, but that may just be as part of valuing functional programming: Use pure functions, higher order functions, small functions that do just one thing right.  That makes for easier to maintain and easier to test code. It requires you to understand the abstractions, which should likely have vague arguments and variable names because they are so reusable.

- Without rxjs, you don't get that sort of global store, which you could probably still create for your services.  But I can see the cation about blindly going with it because it can post the same threats that pushing a lot of data onto a global object can pose, along with using something you don't really understand. In the context of when I first started using it, I probably should have just used services by themselves, but to get the same results I would have had needed a stronger understanding of rxjs.x
