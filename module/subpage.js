const subPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/style/sub.css">
</head>
<body>
  <form method="POST" action="/login">
    Title <input type="text" id="title" name="title"><br>
    Text <input type="text" id="text" name="text"><br>
    <input type="submit" value="send">
  </form>
</body>
</html>`;

module.exports = subPage;
