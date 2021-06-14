
<h1 align='center'> The Regina 👑</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>
<img width="1438" alt="Screenshot 2021-06-06 at 3 22 15 PM" src="https://user-images.githubusercontent.com/63084088/120925406-1adede00-c6f6-11eb-9749-7f23aaa8b246.png">

## What is it? 👸🏻
The product consists of three software subsystems which were combined to make it a complete working prototype. It has a happiness index marker in which you need to Signup and Login. Although human emotions are fuzzy numbers that cannot be scaled linearly; for keeping it simple for the user we have added 5 emotions to select from. Upon selecting key-value pair of timestamp and mood gets pushed in the Firestore Database. After fetching the data I used chart.js to convert the data into graphs to give the user a better visual representation. The web application also has features of updating user profile and forgot password button where the user gets a mail-in his / her registered mail id from where the password can be reset. The next subsystem is a chrome extension which makes google meet private in public. The extension is a solution to data breaches by hiding some components and to unhide the user needs to hover over it.  Being the ultimate solution to women empowerment the product also includes an AR martial art teacher model which teaches various moves when you click on the moves specified.

<img width="1440" alt="Screenshot 2021-06-06 at 5 52 55 PM" src="https://user-images.githubusercontent.com/63084088/120925387-0dc1ef00-c6f6-11eb-8087-5444c1d45f2d.png">

Firstly I have a web application which keeps a track of your happiness index. You simply login to your dashboard and select the emoji best describing your day. Then a graph is generated according to your records. This motivates the person to keep trying to increase their happiness index and keep a check on their mental health. You can also update your profile and if you forget your password, you can reset it and you will receive a secure link to change it in your mail.

<img width="1440" alt="Screenshot 2021-06-06 at 5 53 25 PM" src="https://user-images.githubusercontent.com/63084088/120925395-1286a300-c6f6-11eb-8e56-be166113d412.png">

The second part of regina is a chrome extension to talk to someone on google meet and keep all the privacy you want. This chrome extension shows only what you want to show. So you can freely talk to anyone anywhere. It can blur videos, chats, participant list etc and you simply hover over it to see.

<img width="1440" alt="Screenshot 2021-06-06 at 5 53 56 PM" src="https://user-images.githubusercontent.com/63084088/120925400-161a2a00-c6f6-11eb-89c8-1603b5762179.png">

Lastly, I have an AR application that teaches you some very crucial self-defence moves. You can either watch it in VR on the website or you can also download the app to get the full Augmented Reality experience. You can simply tap on the move you want to learn and the instructor will teach you how to do it.

## How it was built 👷‍♀️
The product consists of various software subsystems which were combined to make it a complete working prototype. React was used in the front  end of the web application. Firebase was used while authenticating users and Firestore for storing and retriving the key-value pairs. After fetching the data I used chart.js to convert the data into graph to give user a better visual representation. The web application is hosted on cloud. The AR model required AR core, AR Foundation and Unity 3D.And finally the Chrome extension was built in HTML,CSS and vanilla Javascript.  

## Limitations with TheRegina 🥺
The biggest challenge was human emotions are fuzzy numbers which cannot be scaled by linear scaling. To actually know how the person actually in actually feels in a week or a span of month and make the graphs actually research ready we need servers which are fast and database which can hold huge amount of data. Scaling human emotion on a scale from 1-5 is just an approximate and probabilistic approach to know how girls and non binary actually feel.Talking about the AR part including more moves and animating them on blender will make the model large and difficult to render on usual runtime making it difficult to place the product for production. 

## What's next for TheRegina 👑
Currently TheRegina is terms of snopping data breeches only makes Google meet secured the chrome extension can be extended other social media platforms and apps as in Microsoft teams , Discord and more. TheRegina fitness trainer hosting on cloud to make the rendering fast and quick. The web application emotion scaling after proper research on the number can be either scaled up to more emotions or scaled down to less. Social media share buttons will be added so that people can share their graphs showing their happiness index.    





