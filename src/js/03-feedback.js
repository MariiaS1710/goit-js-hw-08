import { throttle } from 'lodash';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(e => {
    const object = { email: refs.email.value, message: refs.message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(object));
}, 500)
);

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    
    if (refs.email.value === "" || refs.message.value === "") {
        return alert('Заповніть всі поля!'); 
    }
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
}
//    дописать функцию котора загружает страничку и записіввеет из стореджа туда данніе 

