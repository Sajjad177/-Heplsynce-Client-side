# HelpSync

### 🌐 [Live link to HelpSync](https://assignment-11-a2b0e.web.app) 🌐

<br/>

## 📜 Project Overview :

- **Project Concept** : This website you can add different category volunteer according to your need and if you want you can also join according to volunteer..

- **Problem Solved** : Dealing with challenges with volunteer skills with appropriate opportunities.  Working as part of various social activities.

---

## 🌟 Features 

### Responsive Design :
- **Fully responsive layout** that adapts to different screen sizes and devices.
- **Optimized for mobile, tablet, and desktop** viewing, ensuring a seamless experience across all platforms.

### Real-time Updates : 
- You can add and update volunteers according to different categories.
- You can also join as volunteer which skill you have.

### User Information : 
- **User-friendly login and registration system** for a personalized experience.
- **User also see his added volunteer category, delete some category and add blog. 

---

## 🛠 Technology Used
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
<br/>

## How to Clone and Run the Project Locally : 
1. **Clone the repository:**
   - First, you need to clone the **client** and **server side**. Open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **client-side** and **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
3. **Environment setup:**
   - In your server side configure environment variables by creating a `.env` file in the root directory. Add the following variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/art_and_craft_db
     JWT_SECRET=your_jwt_secret_key_here
     ```
     Replace `your_jwt_secret_key_here` with your actual keys.

4. **Firebase setup:**
   - In your client side configure environment variables by creating a `.env.local` file in the root directory. Add the following variables:
     ```plaintext
       VITE_APIKEY
       VITE_AUTHDOMAIN
       VITE_PROJECTID
       VITE_STORAGEBUCKET
       VITE_MESSAGINGSENDERID
       VITE_APPID
     ```
     Replace `VITE_API_URL` add your server url example `VITE_API_URL='http://localhost:3000'` .

5. **Access the server :**
   - run code is `nodemon index.js ` or `npm run dev` and also check which file are you now. 
   - Open your web browser and navigate to `http://localhost:3000` to view the application locally.

7. **Run local :**
   - Open your vsCode tarminal and check which file are you. Go your client file and run code `npm run dev` then client side run in local.






