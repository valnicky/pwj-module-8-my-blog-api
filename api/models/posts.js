const PATH = "./exercise/data.json";
const fs = require('fs');

class Post {
    get() {
        /*get posts */
    return this.readData();
    }

    getIndividualBlog() {
        /*get one blog post */
    }
    
    add(newPost){
        /*add new post*/
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }
    
    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
            return posts;
    }
    
    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;