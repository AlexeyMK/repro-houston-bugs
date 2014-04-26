Houston.menu({
  'type': 'template',
  'use': 'admin_powers',
  'title': 'Power Tools'
}, {
  'type': 'link',
  'use': '/',
  'title': 'Back to Game'
});

Template.admin_powers.helpers({
  nonzero_users: function() {
    return Entity.find({score: {$gt: 0}}).count();
  }
});

Template.admin_powers.rendered = function() {
  $('.reset-scores').on('click', function() {
    Entity.find().forEach(function(entity) {
      Entity.update(entity._id, {$set: {score: 0}});
    });
  });
};
