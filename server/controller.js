
module.exports = {
    login: (req,res,next) => {
        const {session} = req;
        const {username, password} = req.body;

        const user = users.find(user => user.username === username && user.password === password);

        if(user) {
            session.user.username = user.username;
            res.status(200).send(session.user);
        } else {
            res.status(200).send("Unauthorized.");
        }
    },

    register: (req, res, next) => {
        const {session} = req;
        let {username, password} = req.body

        users.push({id, username, password});
        id++;

        session.user.username = username;

        res.status(200).send(session.user);
    },
    posts: (req,res) => {
        let {userposts, search} = req.query;
        const db = req.app.get('db');

        db.posts().then(posts => {
            if(userposts && search){
                let filteredPosts = posts.filter(posts => posts.search === search);
                res.status(200).send(filteredPosts)
            }else if (userposts && search){
                let filteredId = posts.filter(posts => {
                    posts.id !== req.params.id
                })
            }else if (userposts && search){
                
            }
        },
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}
