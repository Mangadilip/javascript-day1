
let username=prompt('enter username')
let product=prompt('enter product')
let price=prompt('enter price')
let day=prompt('enter day')
let occassion=prompt('enter occassion')
let platform=prompt('platform')
let user_object={
    username:username,
    product: product,
    price:price,
    day: day,
    occassion:occassion,
    platform:platform,
}
console.log(`${user_object.username} has purchased a ${user_object.product} which costs ${user_object.price} on ${user_object.day} on occassion of ${user_object.occassion} in ${user_object.platform}`)
alert(`${user_object.username} has purchased a ${user_object.product} which costs ${user_object.price} on ${user_object.day} on occassion of ${user_object.occassion} in ${user_object.platform}`)



let studentname=prompt('enter studentname')
let student_object={
    studentname:studentname,
    companyname:'stick-soft',
    package:'4lpa',
    domain:'rectdeveloper',
    joiningdate:'01/01/2025',
}
console.log(`${student_object.studentname} got palced in ${student_object.companyname} company as a ${student_object.domain} with package of ${student_object.package} and joining is on ${student_object.joiningdate}`)
alert(`${student_object.studentname} got palced in ${student_object.companyname} company as a ${student_object.domain} with package of ${student_object.package} and joining is on ${student_object.joiningdate}`)