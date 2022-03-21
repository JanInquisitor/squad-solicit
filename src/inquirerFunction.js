const writeToFile = require('./fileControllers')

let htmlMarkUp = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
`

writeToFile('dist', 'index.html', htmlMarkUp)