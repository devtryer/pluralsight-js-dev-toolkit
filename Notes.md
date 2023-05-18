#Javascript Developer Starter Kit and environment
##Boilerplate|Starter Kit|Seed|Starter Project

*PRE-described* 
**Ember**

A description of what is need to go in the starter kit

*Required GIT commands:*
STAGE: git add .
COMMIT LOCALLY: git commit -m "feature name" 
PUSH CHANGES TO GIT: git push


------------------
Speak to influencers 
Ask questions 
Take action 
------------------

### **1** EDITOR 
EditorConfig standard: 
	*Visual Studio code* (recommended)(using)
	Brackets 
	Atom 
	
	WebStorm (not free)
	
	JS lends itself to a lighter weight editor (therefore VS, Eclipe, Netbeans not really recommended for front end )
	
	You can use a different editor for back and front end code programming. 
	
	Check EditorConfog 
	
### **2** PACKAGE MANAGER 
	*npm* - defacto package manager (recommended obviously)
	Install node (and npm automatically)
	Install packages by populating the package.json file: 
		bit.ly/js-dev-env-package-json

#### 2.2 SECURITY SCAN  with Snyk but you can use npm audit.


### **3** WEB SERVER 
	preferrable to use web servers focused on local development:
		*Express* (... and also koa and hapi) - will most likely be used in production too.
		Web Pack web server - Webpack's built in web server 
		Browsersync 
#### 3.2 expose local development with npm packages: 
localtunnel - no hassle set up. not secure - DOESN'T WORK!
		
ngrok - login required, and is protected 

vercel - publishes file to a server 

surge - only supports static files, hosts your files publicly - can enve be used for prod deployments
	
	
*Ctrl+C to kill process in given terminal*


## 4. AUTOMATING DEVELOPMENT ENVIRONMENT AND BUILDS
Grunt - task runner - now less popular.

Gulp - faster, more declarative power - using javascript ... or just using npm scripts - very versatile, seems more straight forward (seems recommended)
	
*npm scripts* recommended
	 // type npm start (no need to type npm run start )

removes issues when debugging
	 
"pre..." named scripts run before the "..." script.
"post..." named scripts run after the "..." Script.
	 
the "npm-run-all" runs commands in parallel.

## 5. TRANSPILING 
*Babel* obvious recommendation!
Typescript - a superset of Javascript - by adding type annotations. 
	
(restart this lesson)


## 6 BUNDLING AND MODULE FORMAT 
### 6.1 Module format 
*ES6 (ES2015) Modules* recommended. The rest are redundand and outdated. 

### 6.2 Bundling

| Browserify | WEB | | | |
|------------ | ---------- | ----------- |----------- |----------- |
| WebPack | Web | Server | App Dev | | | | | 
| Roll up | Web | | Mobile | Treeshaking | ----------- | 
| Snow pack | Web/Frontend | | | | | Configurable |

WebPack for application developer in addition but is more comprehensive and mature :( . 

Snowpack is front end focused. 

All compelling.

### Source Maps: 
enables links back to source code when debugging using developer tools. only requested when using developer tools.  
"debugger;" in code causes a break point 


## 7 Linting
- Catch errors. 
- Enforce Consitency. 
- Avoid Mistakes. 
- Enforces team practices; can be enforced during build. 

*ESLint* recommended.








