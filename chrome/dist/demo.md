# MD2RichText
Convert Markdown to rich-text easily.  
GitHub: [https://github.com/HuQingyang/MD2RichText](https://github.com/HuQingyang/MD2RichText)

## Features
* Convert Markdown to rich-text
* Customize style with CSS
* Working with WeChat Editor
* Supporting code highlight
* Code themes

### Code Example
```javascript
const OnlineMarkdown = {
  init: function() {
    var self = this;
    self.load().then(function() {
      self.start()
    }).fail(function(){
      self.start();
    });
  },
  start: function() {
    this.updateOutput();
  },
  load: function() {
    return $.ajax({
      type: 'GET',
      url: params.path || './demo.md',
      dateType: 'text',
      timeout: 2000
    }).then(function(data) {
      $('#input').val(data);
    });
  },
  updateOutput: function () {
    var val = this.converter.makeHtml($('#input').val());
    $('#output .wrapper').html(val);
    PR.prettyPrint();
  }
};

OnlineMarkdown.init();
```

### Table Example

| 品类 | 个数 | 备注 |
|-----|-----|------|
| 苹果 | 1   | nice |
| 橘子 | 2   | job |

## Get It
See [MD2RichText](https://)

## About
Modified from [dyc87112/online-markdown](https://github.com/dyc87112/online-markdown/)  

## See Also
[HuQingyang/markdown-img-to-base64](https://github.com/HuQingyang/markdown-img-to-base64)

## LICENSE
MIT
