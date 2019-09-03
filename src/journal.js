function journal (name, entry) {
this.name = name;
this.entry = [];
}

journal.prototype.pushEntry(entries) {
  this.entry.push(entries)
}











function entry (title, date, teaser, body) {
  this.title = title;
  this.date = date;
  this.teaser = teaser;
  this.body = body;
}

entry.body.prototype.wordCount() {
  var entrySplit = this.split(" ");
  return entrySplit.length();
  }
}

entry.prototype.getTeaser() {
  var firstPeriod = this.body.search(.);
  this.teaser = this.body.slice(0, firstPeriod);
}
