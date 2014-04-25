Houston.menu({
  'type': 'template',
  'use': 'admin_powers',
  'title': 'Power Tools'
});

Template.admin_powers.helpers({
  nonzero_users: function() {
    return Entity.find({score: {$gt: 0}}).count();
  }
});

Template.admin_powers.rendered = function() {
  console.log("here and now2");
  console.log($('.reset-scores'));
  $('.reset-scores').on('click', function() {
    console.log("here and now");
    Entity.find().forEach(function(entity) {
      Entity.update(entity._id, {$set: {score: 0}});
    });
  });
};
