
<h1 align='center'> The Regina 👑</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>
<img width="1438" alt="Screenshot 2021-06-06 at 3 22 15 PM" src="https://user-images.githubusercontent.com/63084088/120925406-1adede00-c6f6-11eb-9749-7f23aaa8b246.png">

## What is it? 👸🏻
The product consists of three software subsystems which were combined to make it a complete working prototype. It has a happiness index marker in which you need to Signup and Login. Although human emotions are fuzzy numbers that cannot be scaled linearly; for keeping it simple for the user we have added 5 emotions to select from. Upon selecting key-value pair of timestamp and mood gets pushed in the Firestore Database. After fetching the data I used chart.js to convert the data into graphs to give the user a better visual representation. The web application also has features of updating user profile and forgot password button where the user gets a mail-in his / her registered mail id from where the password can be reset. The next subsystem is a chrome extension which makes google meet private in public. The extension is a solution to data breaches by hiding some components and to unhide the user needs to hover over it.  Being the ultimate solution to women empowerment the product also includes an AR martial art teacher model which teaches various moves when you click on the moves specified.

<p float='left'>
<img width="350" alt="Dashboard of theRegina" src="https://user-images.githubusercontent.com/63084088/120925387-0dc1ef00-c6f6-11eb-8087-5444c1d45f2d.png">
<img width="350" alt="chrome extension of theRegina" src="https://user-images.githubusercontent.com/63084088/120925395-1286a300-c6f6-11eb-8e56-be166113d412.png">



Firstly I have a web application which keeps a track of your happiness index. You simply login to your dashboard and select the emoji best describing your day. Then a graph is generated according to your records. This motivates the person to keep trying to increase their happiness index and keep a check on their mental health. You can also update your profile and if you forget your password, you can reset it and you will receive a secure link to change it in your mail.



The second part of regina is a chrome extension to talk to someone on google meet and keep all the privacy you want. This chrome extension shows only what you want to show. So you can freely talk to anyone anywhere. It can blur videos, chats, participant list etc and you simply hover over it to see.


Lastly, I have an AR application that teaches you some very crucial self-defence moves. You can either watch it in VR on the website or you can also download the app to get the full Augmented Reality experience. You can simply tap on the move you want to learn and the instructor will teach you how to do it.


[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)

TheRegina is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐

# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/Aniket762/theregina.git
```
Install all the npm packages. Go into the client folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**


# Connecting with Firebase 
Allow authentication via email and password. Setup your firestore as the database and make proper collection and document ids. Name your collection as mood. Then add the following in your `.env` file and keep it in the root.

```
REACT_APP_FIREBASE_KEY = "<your_firebase_key>" 
REACT_APP_FIREBASE_DOMAIN = "<your_firebase_domain>"
REACT_APP_FIREBASE_PROJECT_ID = "<your_project_id>"
REACT_APP_FIREBASE_BUCKET = "<your_project_id>.appspot.com"
REACT_APP_FIREBASE_SENDER_ID = <your_sender_id>
REACT_APP_FIREBASE_APP_ID =  "<your_app_id>"
REACT_APP_FIREBASE_DATABASE_URL = "https://<your_project_id>.firebaseio.com/"
```

## Limitations with TheRegina 🥺
The biggest challenge was human emotions are fuzzy numbers which cannot be scaled by linear scaling. To actually know how the person actually in actually feels in a week or a span of month and make the graphs actually research ready we need servers which are fast and database which can hold huge amount of data. Scaling human emotion on a scale from 1-5 is just an approximate and probabilistic approach to know how girls and non binary actually feel.Talking about the AR part including more moves and animating them on blender will make the model large and difficult to render on usual runtime making it difficult to place the product for production. 

## What's next for TheRegina 👑
Currently TheRegina is terms of snopping data breeches only makes Google meet secured the chrome extension can be extended other social media platforms and apps as in Microsoft teams , Discord and more. TheRegina fitness trainer hosting on cloud to make the rendering fast and quick. The web application emotion scaling after proper research on the number can be either scaled up to more emotions or scaled down to less. Social media share buttons will be added so that people can share their graphs showing their happiness index.    





