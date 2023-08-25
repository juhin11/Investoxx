# Investoxx : Invest with Confidence
Investoxx is a platform that helps users create and manage stock portfolios using AI to analyze market trends and stock news. Users can generate custom portfolios for informed investment decisions. Experience the future of portfolio management with Investoxx.

## Investoxx has 3 Platforms:
- Web App - [investoxx.tech](https://investoxx.tech)
- Mobile App - [Downlaod APK](https://investoxx-assets.oss-ap-south-1.aliyuncs.com/Investoxx.apk)
- Desktop App - [Download Microsoft Installer](https://investoxx-assets.oss-ap-south-1.aliyuncs.com/Investoxx.msi)

---

## `Web App` - 
## Preqrequisites
- [Node.js](https://nodejs.org/en/)
- [python3](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)
- [SSH key Linked to Github](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)


## Installation

1. Make a folder for the project and open git bash in that folder.
2. Clone the repository 
    - React JS Frontend
        ```bash
        git clone -b react git@github.com:juhin11/Investoxx.git react
        ```
    - Django Backend
        ```bash
        git clone -b django git@github.com:juhin11/Investoxx.git django
        ```
    - Node Backend
        ```bash
        git clone -b node git@github.com:juhin11/Investoxx.git node
        ```

3. This will create a folder named `react`, `django` and `node` in the current directory.

4. Add the `.env` file in the `node` folder. The `.env` file contains the environment variables for the project. The `.env` file is not included in the repository for security reasons.

    - Visit [This Link](https://investoxx-assets.oss-ap-south-1.aliyuncs.com/.env) to download the `.env` file. If the file is downloaded as `env` than make sure to rename it as `.env`
    - Copy the `.env` file in the `node` folder.


5. Install the dependencies for the project.

    - React JS Frontend, open git bash in the `react` folder and run the following command.
        ```bash
        npm install
        ```

    - Django Backend, open git bash in the `django` folder and run the following command.
        ```bash
        pip install -r requirements.txt
        ```

    - Node Backend, open git bash in the `node` folder and run the following command.
        ```bash
        npm install
        ```

6. Run the project.
    
    - Django Backend, open git bash in the `django` folder and run the following command.
        ```bash
        python manage.py runserver
        ```
    
    - Node Backend, open git bash in the `node` folder and run the following command.
        ```bash
        npm start
        ```
    - React JS Frontend, open git bash in the `react` folder and run the following command.
        ```bash
        npm start
        ```
    
    ```
    NOTE : The backend server should be running before the frontend server.
    ```



7. Open the browser and go to [`http://localhost:3000/`](http://localhost:3000/) to view the project.

## Common Issues and Solutions

- If the node server crashes make sure the `.env` file is in the `node` folder, also the name of the file is `.env` NOT `env`.

- If the django server is not starting and giving error of "module name" not found, in that case try to run the django server in an virtual enviornment (venv). Follow these steps - 
    1. Create a new folder.
    2. Open terminal in the folder.
    3. Create a virtual enviornment, run the following command.
        ```bash
        python -m venv investoxxenv  
        ```
    4. Activate Virtual Environment
        ```bash
        cd investoxxenv
        Scripts\activate
        ```
    5. Cloning django source code 
        ```bash
        git clone -b django git@github.com:juhin11/Investoxx.git investoxx
        ```
    6. Go to the investoxx folder
        ```bash
        cd investoxx
        ```
    7. Install requirements
        ```bash
        pip install -r requirements.txt
        ```
    8. Running server
        ```bash
        python manage.py runserver
        ```


- If your django server crashes or you are facing issuse even after trying the solutions, then check if there are multiple version of python is installed. If installed then only keep python3 and remove the others. 



- If you are running the project on linux or mac, then you might face the error of pypywin32 unable to install. To solve this issue, go to the `django` folder and open the `requirements.txt` file. Remove the line `pypiwin32==223` from the file and save it. Then run the following command in the `django` folder.
    ```bash
    pip install -r requirements.txt
    ```
- If the application keeps loading, then the backend server is not running. Please check the backend server is running or not. Try to run the backend server again.

- If node js backend is not running, make sure there is nothing running on port 5000.

- If the application is not loading, then the frontend server is not running. Please check the frontend server is running or not. Try to run the frontend server again.




---

## `Mobile App` - 
## Preqrequisites
- [Node.js](https://nodejs.org/en/)
- [React Native CLI (Development OS - Windows and Target OS - Android)](https://reactnative.dev/docs/environment-setup)
- [Android Studio with a virtual device](https://developer.android.com/studio/run/managing-avds)
- [Git](https://git-scm.com/downloads)
- [SSH key Linked to Github](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)


## Installation

1. Make a folder for the project and open git bash in that folder.
2. Clone the repository 
    - React Native 
        ```bash
        git clone -b reactNative git@github.com:juhin11/Investoxx.git reactNative
        ```


3. This will create a folder named `reactNative` in the current directory.


4. Install the dependencies for the project.

    - Open git bash in the `reactNative` folder and run the following command.
        ```bash
        npm install
        ```

5. Run the project.
    
    - Open git bash in the `reactNative` folder and run the following command.
        ```bash
        npm run android
        ```
    


---

## `Desktop App` - 
## Preqrequisites
- [Node.js](https://nodejs.org/en/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Git](https://git-scm.com/downloads)
- [SSH key Linked to Github](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)


## Installation

1. Make a folder for the project and open git bash in that folder.
2. Clone the repository 
    - Taui JS
        ```bash
        git clone -b taurijs git@github.com:juhin11/Investoxx.git taurijs 
        ```


3. This will create a folder named `taurijs` in the current directory.


4. Install the dependencies for the project.

    - Open git bash in the `taurijs` folder and run the following command.
        ```bash
        npm install
        ```

5. Run the project.
    
    - Open git bash in the `taurijs` folder and run the following command.
        ```bash
        npm run tauri dev
        ```
---    

### If you face any issues, please contact [Karan Kewat](mailto:karankewat2911@gmail.com) or [Juhi Nema](mailto:juhinema200@gmail.com).
