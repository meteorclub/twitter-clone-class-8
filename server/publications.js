Meteor.publish('tweets', function() {
  return Tweets.find();
});

Meteor.publish('profile', function(username) {
  return Users.find({username: username}, {fields: {profile: 1, username: 1}});
});
