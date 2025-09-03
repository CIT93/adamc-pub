
console.log ('Hello from app.js! Your javascript is connected and running!');
// Had to look back at the previous code alongs for some help with the DOMContentLoaded and structure of the code.
// I Asked for ai to help with one being with what does the error with '/' expected issue specified means.
// *thankfully managed to fix it and it explained what does this error means in my code which I missed a closing parenthesis ; that connected from the opening parenthesis.
// This helped me understand what the issue was and understand the error that it caused.
// Just noticed an error in the console which the "for" element did not match any other element which I realized I didn't update it to Codename. So I switched it out with that and fixed it.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greet-form');
    const input = document.getElementById('codename');
    const message = document.getElementById('greeting-message');

    form.addEventListener('submit',(event)=> {
        event.preventDefault(); //prevents the page reloading
        const name= input.value.trim();

        if(name) {
            message.textContent = `Hello, ${name} nice to see you.`;
        }else{
            message.textContent = 'Enter your Name.';
        }
        form.reset();
    });
});
