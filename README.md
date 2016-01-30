# Accelerometer

An app for utilizing a device's accelerometer.

## Git Setup

* Download and install [Git](https://git-scm.com/downloads)
* Follow [this guide](https://help.github.com/articles/generating-an-ssh-key/) to add an SSH key to your GitHub account
* In GitBash, you should now be able to run the following commands so you won't have to type your username and password every time you want to access the repository

## Project Setup

Use GitBash for the following steps.

* Change to the directory where you usually keep your eclipse projects (C:\Users\YourName\Workspace)
* Run the following command to download and initialize the project:
	- git clone git@github.com:mcnedward/accelerometer.git
* Open Eclipse
* Create a new Java Project
	- File -> New -> Java Project
* Use *accelerometer* as the Project Name
* Uncheck *Use default location*, and browse to the location of the downloaded project
* Click finish

## Running the app locally

Follow these steps to run the accelerometer app locally in your browser:

* Open a new GitBash and move to the project directory
* Move into the folder named *ionic-server*
	- cd ionic-server
* Start the node server with this command:
	- node server
* Open a new GitBash and move to the project directory
* Startup the ionic project with this command:
	- ionic serve

The app should open up automatically in your default browser. You can now make any changes to the app in Eclipse. As soon as you save the changes, you will see the changes updated immediately in your browser, without having to refresh!
