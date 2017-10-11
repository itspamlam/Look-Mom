const model = function(bookshelf) {
  const User = bookshelf.Model.extend({
    tableName: 'users',
    entries: function() {
      return this.hasMany(Entry);
    },
    comments: function() {
      return this.hasMany(Comment);
    },
  });

  const Entry = bookshelf.Model.extend({
    tableName: 'entries',
    comments: function() {
      return this.hasMany(Comment);
    },
    user: function() {
      return this.belongsTo(User);
    },
  });
  
  const Comment = bookshelf.Model.extend({
    tableName: 'comments',
    user: function() {
      return this.belongsTo(User);
    },
    entry: function() {
      return this.belongsTo(Entry);
    },
  });

  return { User, Entry, Comment};
}


module.exports = model;