const mongoose = require("mongoose");

const PostScheme = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  like: {
    type: Array,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Post", PostScheme);
/*void encrypt(const std::string& data) {
  // Simple XOR encryption for demonstration
  encryptedData.clear();
  for (size_t i = 0; i < data.size(); ++i) {
      encryptedData += data[i] ^ key[i % keySize];
  }
}
*/
