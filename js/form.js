
const formTitle = document.querySelector('#form-title')
const authForm = document.querySelector('#authForm')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const authButton = document.querySelector('#authButton')
//* paragraph
const authSwitch = document.querySelector('#authSwitch')
//* the link of rigister
const switchForm = document.querySelector('#switchForm')
const number = document.querySelector('#number')

// * click 
let signIn = true
document.body.addEventListener('click', (e) => {
    if (e.target.id != 'switchForm') return;
    switchFormAuto()

})

///?? form submit with User validation
authForm?.addEventListener('submit', (e) => {

    e.preventDefault()
    //* user information
    const user = {
        username: signIn ? undefined : username.value,
        email: email.value,
        password: password.value,
        confirmPassword: signIn ? undefined : confirmPassword.value,
        number: signIn ? undefined : number.value

    }
    if (signIn) {

        const users = JSON.parse(localStorage.getItem('users')) || []

        const existingUser = users.find(user => user.password == password.value && user.email == email.value)
        if (existingUser) {

            localStorage.setItem('onlineUser', JSON.stringify(existingUser))
            //* validate
            Swal.fire({
                icon: "success",
                title: "Verified",
                text: "Welcome ",
                // allowOutsideClick: false

            }).then((result) => {
                if (result.isConfirmed) {
                    // **! Remember to update here **
                    window.location.href = `./about.html`
                    return;
                }
            })

            // window.location.href = `./about.html`


        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Credential"
            });
        }

    } else {
        const users = JSON.parse(localStorage.getItem('users')) || []

        const existingUser = users.find(user => user.username == username.value && user.email == email.value)
        if (existingUser) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: `User ${username.value} is already exit`

            });
            return;
        }
        // * confirmation passwrd
        if (!signIn && confirmPassword.value.trim() !== password.value.trim()) {
            // alert('Passwords do not match')
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: `Passwords do not match`
                
            });
    
            return;
        }
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users));
        // alert('Registaration is successflly')

        Swal.fire({
            icon: "success",
            title: "Registration is successflly",
            text: `You have successfully registered.`

        });
        

        switchFormAuto()
    }

    

})

//* switch form autho for sign in and Sign Up
function switchFormAuto() {
    signIn = !signIn
    if (signIn) {
        formTitle.textContent = 'Sign In'
        username.style.display = 'none'
        confirmPassword.style.display = 'none'
        number.style.display = 'none'
        authButton.textContent = 'Sign In'
        username.value = ''
        confirmPassword.value = ''
        email.value = ""
        password.value = ""
        number.value = ""
        authSwitch.innerHTML = `New to Nestly? <a href="#" id="switchForm">Register now</a>`
    } else {
        formTitle.textContent = 'Sign Up'
        username.style.display = 'block'
        confirmPassword.style.display = 'block'
        authButton.textContent = 'Sign Up'
        number.style.display = 'block'

        authSwitch.innerHTML = `Already have an account <a href="#" id="switchForm">Sign In</a>`
    }
}


// ** Menu bar or toggleMenu
function toggleMenu(){
    const navbar = document.querySelector('.navbar')
    const loginButton = document.getElementsByClassName('login-button')[1]
    navbar.classList.toggle('active')
    loginButton.classList.toggle('active')
}

//* Email footer with locolStorage

const footerEmail = document.querySelector('#footer-email')
const footerBtn = document.querySelector('.telegram')
// console.log(footerBtn)

footerBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    let footerInput = footerEmail.value 
    localStorage.setItem('footerEmail', footerInput)
 
})

// * Contact Page for Form

const contactForm = document.querySelector('#contact-info')

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const firstName = document.getElementById('firstName')
    const lastName = document.querySelector('#lastName')
    const number = document.querySelector('#number')
    const message = document.querySelector('#message');

    let contactUser = {
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value,
        number : number.value,
        message : message
    }
    let oldContact = JSON.parse(localStorage.getItem('ContactFormUser')) || []
    console.log(oldContact)
    let existContactUser = oldContact.find(CoUser => CoUser.email == email.value && CoUser.number == number.value)
    console.log(existContactUser)
    if(existContactUser){
        alert(`This is already ${existContactUser.firstName} exist`)
        return;
    }
    oldContact.push(contactUser)
    localStorage.setItem('ContactFormUser', JSON.stringify(oldContact))

  
})