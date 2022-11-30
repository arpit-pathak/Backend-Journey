const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL
exports.connect = () => {
    mongoose.connect(MONGODB_URL,
        {
            useNewUrlParser: true,
            // useFindAndModify: false,  // it is by-default false
            useUnifiedTopology: true
        })
        .then(console.log("DB connected with a success"))
        .catch((error) => {
            console.log("DB connection falied");
            console.log(error);
            process.exit(1);
        })
}
// export default connect; also use this method