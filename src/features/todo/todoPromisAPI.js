 function TodoPromisAPI({urlfetch}){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!!urlfetch){
            fetch(urlfetch)
                .then((response)=>{
                    return response.json();
                }).then((date)=>{
                    resolve(date);
                })
            }
            else {
                reject("no context");
            }
        },500)
    })
 }
 export {TodoPromisAPI}