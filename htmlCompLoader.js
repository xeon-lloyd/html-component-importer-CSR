(()=>{
    let tags = document.querySelectorAll('import-comp');
    tags.forEach(async ele=>{
        const xhr = new XMLHttpRequest();
        xhr.open('get', ele.dataset.src);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                ele.insertAdjacentHTML("afterend", xhr.response)
                ele.remove()
            } else {
                console.error('컴포넌트 못 불렀어!');
            }
        }
    })
})()