package :  
- [X] express 
- [X] express-handlebars 
- [X] express-session
- [X] method-override
- [X] mongoose
- [X] passport and passport-local
- [X] bcryptjs
- [X] connect-flash

```bash 
npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash
```

dev package:  

- [X] nodemon

```bash
npm i nodemon -D
```

settings nodemom:  

```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```

run with npm :  

```bash
npm run dev
```

create structure:  

```text
src:
  - config
  - helpers
  - models
  - public 
  - routes:
      - index.js
      - users.js
      - notes.js
  - views:
      - layouts
      - partials

```

```bash
cd src && mkdir config helpers models public routes views 
```

