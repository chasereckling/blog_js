Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    delete:function() {
      if(confirm('Are you sure?')){
        this.get('model').destroyRecord();
        this.transitionToRoute('posts');
      }
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
});
