import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.getElementById("promiseForm").addEventListener("submit",function(t){t.preventDefault();const s=parseInt(t.target.delay.value),i=t.target.state.value;new Promise((e,o)=>{setTimeout(()=>{i==="fulfilled"?e(s):o(s)},s)}).then(e=>{iziToast.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{iziToast.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
