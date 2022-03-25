function cardMarkup(employeeData) {
    function getOfficeNumber() {
        return `Office Number: ${employeeData.getOfficeNumber()}`
    }

    function getGithub() {
        return `Github username: ${employeeData.getGithub()}`
    }

    function getSchool() {
        return `School: ${employeeData.getSchool()}`
    }

    return `
<div class="card">
    <div class="card-container">
        <h2>${employeeData.getName()}</h2>
        <h4><b>${employeeData.id}</b></h4>
        <p>Role: ${employeeData.getRole()}</p>
        <p>Email: ${employeeData.email}</p>
        ${employeeData['role'] === 'Manager' ? getOfficeNumber() : ''}
        ${employeeData['role'] === 'Engineer' ? getGithub() : ''}
        ${employeeData['role'] === 'Intern' ? getSchool() : ''}         
    </div>
</div>`
}

function HTMLMarkup(teamData) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="Work, Team, Professional, Team-work, Squad, Engineer">
    <meta name="author" content="Jan Carlos">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/Skeleton-2.0.4/css/skeleton.css">
    <link rel="stylesheet" href="./css/Skeleton-2.0.4/css/normalize.css">
    
    <title>Professional Squad Generator</title>
</head>
<body>
   
<div class="container">
    ${teamData.map(employee => {
        return cardMarkup(employee)
    })}
</div>
    
</body>
</html>
`
}

module.exports = HTMLMarkup