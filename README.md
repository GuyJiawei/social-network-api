# Social Network API 

  ![License Badge](https://img.shields.io/badge/license-MIT-green.svg)

  ## Description
  This is a RESTful API built with Express.js and MongoDB, utilizing the Mongoose ODM. It allows users to share their thoughts, react to their friends’ thoughts, and create a friend list. The API supports CRUD operations for users, thoughts, and reactions, and provides endpoints for adding and removing friends.

  This project is designed to showcase how social networks utilise technology to handle large amounts of data and unstructured content. The API is built with scalability and flexibility in mind, enabling easy modifications and expansions as the application grows.

  To format timestamps, the API uses the native JavaScript Date object. It is recommended to use the latest version of Node.js and MongoDB, and to install the mongoose package version 6.9.2 to avoid potential breaking changes introduced in later versions.

  To see the API in action, please refer to the walkthrough video that demonstrates its functionality and meets the following acceptance criteria:

  Acceptance Criteria
  - The API should allow users to create a new user profile with a username and email.
  - The API should allow users to retrieve all users or a single user by ID.
  - The API should allow users to update their own profile.
  - The API should allow users to delete their own profile.
  - The API should allow users to create a new thought with a message and a username associated with it.
  - The API should allow users to retrieve all thoughts or a single thought by ID.
  - The API should allow users to update their own thoughts.
  - The API should allow users to delete their own thoughts.
  - The API should allow users to add a reaction to a thought.
  - The API should allow users to remove a reaction from a thought.
  - The API should allow users to add and remove friends to their friend list.

  ## Table of Contents

  * [Installation](#installation)
  * [Contributing](#contrubuting)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  Copy the package from my repository, navigate to the project directory in your command line interface, and enter the command 'npm i' to download the necessary dependencies. Once completed, run the command 'node index' to start the application.
  
  After starting the app, open Insomnia and navigate to http://localhost:3001/api/users/ to create a new user with a POST request. It's important to note that there are no seeds available, so you'll need to create a user in order to interact with the API.

  ## Contributing

  Contribution to this project will not be accepted, unfortunately. Thank you for your interest!
  
  ## License
  - MIT
  - https://choosealicense.com/licenses/MIT/
  - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  

  ## Questions

  If you have any questions or require further information, please contact me at:

  - GitHub: https://github.com/GuyJiawei
  - Email: guy.jiawei.anderson@gmail.com

  ## Demo

  ![GIF](./Assets/Demo.gif)

  ## Screenshot

  ![Screenshot](./Assets/html_pic.png)
