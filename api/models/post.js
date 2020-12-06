const PATH = "./exercise/data.json";
const fs = require('fs');

class Posts {
    get() {
        /*get posts */
        return this.readData();
    }

    /*  getIndividualBlog(postId) {
          get one blog post 
          const posts = this.readData();
          const foundPost = posts.find((post) => post.id == postId);
          return foundPost;
      }*/

    add(newPost) {
        /*add new post*/
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        try {
            return JSON.parse(fs.readFileSync(PATH, 'utf8'));
        } catch (err) {
            console.error(err);
            return false
        };
    }

    storeData(rawData) {
        try {
            fs.writeFileSync(PATH, JSON.stringify(rawData));
        } catch (err) { console.log(err); }

    }
}

module.exports = Posts;