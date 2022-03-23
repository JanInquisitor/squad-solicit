function HTMLMarkup(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>Team</h1>
    
    <div>
    <h2>${data[0].name}</h2>
     <p>Role: ${data[0].getRole()}</p>
    </div>
    
     <div>
    <h2>${data[1].name}</h2>
     <p>Role: ${data[1].getRole()}</p>
    </div>
    
</body>
</html>
`
}


module.exports = HTMLMarkup