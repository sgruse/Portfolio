module.exports = [
  {
    "projectOne": {
      "name": "Overbrook",
      "tech": "Javacript + Angular + NodeJS + AWS S3 + MongoDB",
      "quickDesc": "Full stack application",
      "description": "I joined Overbrook Construction to completely redesign their website, giving it a modern look and advanced mapping functionality.  I transformed a custom wireframe into a full stack application using AngularJS, ExpressJS, NodeJS, and MongoDB linked with Amazon’s S3 storage system.  The site displays Overbrook’s entire portfolio of completed, current and future homes, leveraging the Google Maps API to plot each location on an interactive map.  Internally, I built custom content management system that allows Overbrook admins the ability to easily update their site and was successful in a complete transformation of Overbrook's online brand.",
      "url": "http://bit.ly/2b5KxtK",
      "imgSrc": require(__dirname + '/main/img/project-images/overbrook-main.png'),
      "imgTwo": require(__dirname + '/main/img/project-images/overbrook-map.png')
    },
    "projectTwo": {
      "name": "Siren Finder",
      "tech": "Javascript + PageJS + Handlebars + GoogleMapsApi",
      "quickDesc": "Displays up-to-date crime activity in Seattle",
      "description": "Siren Finder is a web application that utilizes Socrata's SOAP API and displays up-to-date crime activity in the Seattle area.  My team and I were thrilled to present this application to the City of Seattle and development team at Socrata.  We developed this application using javascript and page.js to create a fast, single page web application.  Utilizing jQuery and the Google maps API we were able to plot crime activity on a map, offering our users the ability to filter by location and types of crime.",
      "url": "http://sirenfinder.herokuapp.com/",
      "imgSrc": require(__dirname + '/main/img/project-images/sirenfinder-main.png'),
      "imgTwo": require(__dirname + '/main/img/project-images/sirenfinder-map.png')
    },
    "projectThree": {
      "name": "Snap Gig",
      "tech": "Javascript + NodeJS + Express + Mocha/Chai + AWS S3",
      "quickDesc": "Collaboration platform for freelancers",
      "description": "Custom, fully RESTful backend for a freelance collaboration platform targeted at both freelancers and business owners.  Using custom authorization and social sharing middleware, users can post gigs, work submissions, and manage deadlines. Amazon AWS / S3 is leveraged as a persistence layer for relevant data.",
      "url": null,
      "imgSrc": require(__dirname + '/main/img/project-images/snapgig.png'),
      "imgTwo": require(__dirname + '/main/img/project-images/snapgig-two.jpg')
    },
    "projectFour": {
      "name": "Story Blocks",
      "tech": "Javascript + Angular + NodeJS + MongoDB + Gulp + SASS/CSS",
      "quickDesc": "Displays API info via a 3D interface",
      "description": "Story Blocks is a project that my team and I created during our time at Code Fellows.  The goal of the project was to create a platform in which users could access various social media sites such as Facebook, Reddit and Twitter, and have desired information displayed on 3D cubes made with vanilla SASS/CSS.  This project offered a great opportunity to learn OAuth as well the unique UI/UX that can be created through custom SASS/CSS.",
      "url": null,
      "imgSrc": require(__dirname + '/main/img/project-images/storyblocks-two.png'),
      "imgTwo": require(__dirname + '/main/img/project-images/blocks-two.png')
    },
    "projectFive": {
      "name": "My Portfolio",
      "tech": "Javascript + Angular + NodeJS + Webpack + SASS/CSS + Bootstrap",
      "quickDesc": "My personal portfolio",
      "description": "This is the portfolio you are currently viewing!  I had a lot of fun making it and used it as an opportunity to dive deep into the wonderfulness that is Webpack.  Utilizing the Bootstrap grid system and custom SASS/CSS, I was very happy with the way everything turned out.",
      "url": null,
      "imgSrc": require(__dirname + '/main/img/project-images/portfoliopic.png'),
      "imgTwo": require(__dirname + '/main/img/project-images/portfolio-two.jpg')
    }
  }
]
