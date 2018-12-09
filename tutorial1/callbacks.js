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

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000)
}

createPost({title : "Post three", body: "this is post three"}, getPost);
//getPost();
