<!-- Write requirements with node and docker -->
# Requirements
- Node.js (via NVM preferably v21.3.0 [windows](https://codedamn.com/news/nodejs/nvm-installation-setup-guide) [macos](https://tecadmin.net/install-nvm-macos-with-homebrew/)))
- Docker (via [docker desktop](https://www.docker.com/products/docker-desktop))
- Git (via [git-scm](https://git-scm.com/downloads))
- NPM 

# Setup
<!-- Write setup process -->
1. Fill .env file based on template.env

# Installation
<!-- Write installation process -->
1. Clone this repository
```bash
git clone https://github.com/Mavannkas/cineplex.git
```
2. Go to the project directory
```bash
cd cineplex
```
3. Install dependencies
```bash
npm install
```
4. First run the database
```bash
npm run mysql:init
```

# Usage
<!-- Write usage examples -->
1. Run the server in dev mode
```bash
npm run dev
```
2. Run the server in production mode
```bash
npm run start
```
3. Run the database
```bash
npm run mysql:start
```
4. Stop the database
```bash
npm run mysql:stop
```

