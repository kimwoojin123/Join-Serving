const subPage = (id) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style/sub.css">
  </head>
  <body>
    <form method="POST" action="/login">
    <h1><span>${id}</span>님! 반갑습니다.<br>저에게 편지를 보내주세요!</h1>
      Title <input type="text" id="title" name="title"><br>
      Text <input type="text" id="text" name="text"><br>
      <input type="submit" value="send">
    </form>
  </body>
  </html>`;
};

module.exports = subPage;
