# RealTime-Chat
This is an improved version of my live chat project that I have in the repository, but using event sourcing and web socket technologies
# Project   
The project implements chat behavior on different technologies.  
In the service of the event resource, this is an anonymous chat to which you can get only knowing the link to it.  
With the help of a web socket, a mechanism is implemented that allows you to communicate under the name that the user enters
# Starting 
To deploy the project on your computer, you need to copy or download it.   
Install required dependencies using npm commands. The next step is to touch up the script to be executed on the server.  
In the json file in the server directory, change the startup script to the desired technology (websocket or event resource).   
Also in the directory on the client in the App file, select the same technology as on the server.  
First you need to start the server with the npm start command and then the client  
# If you did everything right, you should see the following    
Example demonstrates the work simultaneously from two different browser tabs  
  
    
    
  <img src="https://github.com/Sentry11/media/raw/main/chat.png" height="250"/>
