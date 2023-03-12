import { throttle } from 'lodash';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state'

refs.form.addEventListener('input', throttle(e => {
    const object = { email: refs.email.value, message: refs.message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
}, 500)
);

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    
    if (refs.email.value === "" || refs.message.value === "") {
        return alert('Заповніть всі поля!'); 
    }
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}
//    дописать функцию котора загружает страничку и записіввеет из стореджа туда данніе 

const load = key => {
  try {
    const serializedState = localStorage.getItem(key); 
    
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
   
    console.error('Get state error: ', error.message);
  }
};
const storageData = load(STORAGE_KEY);

if (storageData) {
  refs.email.value = storageData.email;
  refs.message.value = storageData.message;
} 