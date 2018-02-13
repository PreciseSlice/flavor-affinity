## Project Name: TBD (Flavor Affinity Box)

#### Check In: One

#### Project Pitch

I have a culinary degree and worked in kitchens for 8 years. The longer I cooked the less I found myself needing recipes. What mattered was not the proportions of ingredients but which ingredients went well with others. This is referred to as flavor pairings or flavor affinities. Keeping a book in the kitchen to look this information up is impractical and inconvenient. 

This app will have the user select ingredients and then display flavor affinities organized by strong, medium and weak. Phase one is one ingredient, phase two is the user can input multiple ingredients.  Extension is the user will then be offered recipe suggestions.        

### Deliverables


#### Stack:

React, Redux, Thunk, React Router

#### APIs:

Foodpairing API 

http://developer.foodpairing.com/ 

#### Wireframes

![Landing](https://i.imgur.com/IB0H1QC.jpg)

![Results](https://i.imgur.com/0uHcBK6.jpg)

#### Waffle & Github

https://waffle.io/PreciseSlice/flavor-affinity

https://github.com/PreciseSlice/flavor-affinity


#### Order of Attack

Phase One:  

User can input one ingredient and then flavor affinities are displayed on the page organized by strong, medium and weak.

Phase Two: 

User can input multiple ingredients.  Flavor affinities from all ingredients are then compared.
Infinities that are not shared between all ingredients are discarded. Shared affinities between all user input ingredients are then displayed organized by strong, medium and weak.

Phase Three / Extension:

After user inputs multiple ingredients recipe suggestions are then recipes are suggested.  Second Api may be required for recipes.  Favoriting ingredients or combinations could be implemented. 

#### MVP

Phase Two complete, fully functional, well tested and styled in an aesthetically pleasing manor.

#### Nice To Haves

Auto complete on the ingredient form. Responsive design that displays well on mobile, recipe extension completed. 

#### Biggest Challenges

Making multiple fetches when user inputs multiple ingredients and then comparing the fetch responses and rendering them in an aesthetically pleasing manor.

#### Instructor Notes

#### Deliverables for next checkin:
