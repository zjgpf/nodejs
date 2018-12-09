const posts = [
    {title : "Post one", body : "This is post one"},
    {title : "Post two", body : "This is post two"}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach(
            (e) => {
                output += `<li>${e.title}</li>`;
                console.info(e);
            }
        );
    document.body.innerHTML = output;
    },1000);
}

//function createPost(post){
//    return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//            posts.push(post);
//            let error = false;
//            //do something ...
//
//            error == false ? resolve() : reject('Error');
//            
//        }, 2000);
//    });
//}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
        let error = false;
        //do something ...

        error == false ? resolve() : reject('Error');
        
    }, 2000);
}

async function init(){
    await createPost({title : "Post three", body: "this is post three"});
    getPost();
}
init()
