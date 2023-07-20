
# Project description

### I did not have any particular idea for project to develop, so i did choose something I like and I'm interested in. 
### Nasa API works and responds very well, so this was also a good point to develop something around it. 
### My project idea was to provide photos taken by the rovers on Mars and to build some content around it. 
### I collected very basic information  about rovers, orbiters and helicopter from wikipedia and official Nasa website to fullfill my small app. 

### Initialy, my idea was to build small app for mobile, therefore on bigger screens this project does not look very good and look quiet empty, because lack of content. 

### Design part

### Minimalistic, colors:  redish and rustic shades. This app is more about getting images from Mars, so I intentially avoid more styling.
### Some screens only contains search bars, so I was hardly adding paddings and margins to fill the space, because I wasn't able to set viewport height of dinamically inserted content. 
### Animation part is one of the weknesses of project. 
### I have 2 images folders, which is confusing, but I entered a problem while refering. Some images I wasn't able to take from the src folder, therefore I had to export them into public. 

### DONE

### From developing in general perspective - I made manny things I planned. 
### 5 main screens, plus 4 nested inside Messengers screen. 
### I made a slider for best images, accordion for home page, search bars by rover/orbiter. 
### All data is mostly dinamically inserted. I made my own myData.js folder and files.
### I tried to structurise the data about rovers and orbiters, also paragraphs for accordion, and slides.js for images slider. 
### I tried to give the same names for files and variables as it contains information. 
### I get 2 searchs from api: raw images taken by rovers and APOD - which is A Picture Of Day. 
### Raw images search is limited to 4 rovers. 2 of them are operating now, and 2 - operated in the past. Therefore calendar dates for operational periods are selected and limited also. 
### Picture of Day returns every day one new photo with explanation. 
### And last screen is dedicated for beautiful processed images taken by rovers/ orbiters on different date. I could insert more of them , but I think it's quiet enough. 

### I made ButtonUp.jsx component to navigate up, this is also personal preference, I dislike when page has a lot of content and by scrolling down I can not escape quickly. But it does not have smooth behaviour back to top, although it should be. 


### UNDONE


### myData folder contains intro.js file which holds rover images and serves for Interval.jsx component. I made images on interval but I does not work nicely without animation. Or in general this component  to be remake. 

### Pagination - I wanted to implement pagination for returned raw images. Now I'm limiting my user to 15 images. There are  more points here. 1. Depending on date, search can return from 10-20 ( or even few) images to 800. Not sure what kind of solution could be used here. even paginated result could be huge. 2. The  photos can repeating images a lot, so I think would need to limit search result anyway. 

### On my work copy project, I've implemented react-full-screen plugin. Although when installing, it broke my file and I had to recover it by reinstalling node modules. It works now, but I did not tried on original copy yet. 

### INCOMPLETE

### My comonents folder organisation is terrible and I know it. I did not thought I will come to the point where I'll have 27 components. I should have to organise jsx files from beginning into separate folder for screens and components probably. 

### Timer.jsx components contains js function to calculate the time from the day rover Curiosity ( or any other) landed on Mars till now. Although it works and counts the time, the formula is very basic and does not count correctly the time because of manny specifics about the dates. I was searching for the plugin, not sure which one would serve for me. 

### Toast component is incomplete, it works, but not styled. Need to create my own style.css for it.  




