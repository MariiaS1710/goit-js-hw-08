var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("kEUo3");const l={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};l.form.addEventListener("input",(0,o.throttle)((e=>{const t={email:l.email.value,message:l.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===l.email.value||""===l.message.value)return alert("Заповніть всі поля!");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const n=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");n&&(l.email.value=n.email,l.message.value=n.message);
//# sourceMappingURL=03-feedback.460c5cd1.js.map