## Crate app
```
npx create-react-app todo --template typescript
```



<br>
<br>

## Add JSON Server and JSON Auth
```
npm install -D json-server json-server-auth
```


Add **db.json** file schema:
```
{
  "users": [ ],
  "todos": [ ]
}
```

Update package.json **scripts** session:
```
"scripts": {
    ...   
    "server": "json-server db.json -m ./node_modules/json-server-auth --port 2001"
},
```

Execute JSON Server:
```
yarn server
```

Execute App:
```
yarn start
```