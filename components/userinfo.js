export const userinfo = (user) => {
    let ctr = document.createElement('div')
    ctr.classList.add("container")
    let fullName = document.createElement('div')
    fullName.classList.add('fullName')
    fullName.innerText = `${user.firstName + " " + user.lastName}`
    let username = document.createElement('div')
    username.classList.add('username')
    username.innerText = `${user.login}`
    let city =document.createElement('div')
    city.classList.add('city')
    city.innerText =user.city
    ctr.append(username,fullName,city)
    return ctr
}