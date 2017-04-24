# toDecimalIP
This is a website which converts a hex ip to a decimal ip.

## How to use:

Place the `<script>` Tags in your `<head>` like: 

```html
<script src="js/ipconverter.js"></script>
```

Optional if you want to use the submit on enter feature:

```html
  <script src="js/jquery-js.js"></script>
  <script src="https://ajax.googleapis.com/ajaxlibsjquery3.2.0jquery.min.js"><script>
```

Important here is the jQuery script, which you can get from different CDN (Just google jQuery and take a look at the website.)

For the input put the `<input>` tag with the `<button>` tag into your `<body>` as well as the result section

```
  <input id="id1" type="text" min="0" required>
  <button onclick="getLineInput()">OK</button>
  Result: <b id="result"></b>
```

If you want to show the input ip you can put the `Input: <span id="oc"></span>` as well in your desired tag. 

If you have any questions or need help, please leave me a Message.

## TODO:

- [x] README.MD update
- [x] Submit on enter
- [ ] OpenSearch (Implemented but not working)
- [ ] Beautiful and simple CSS 

License: [GNU General Public License v3.0](https://github.com/KurzGedanke/toDecimalIP/blob/master/LICENSE)