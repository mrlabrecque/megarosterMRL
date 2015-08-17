var Megaroster = function() {
  var self = this;

  this.save = function () {
    try {
      return (localStorage.students = JSON.stringify(self.students));
    }
    catch(err) {
      return false;
    }
  };

  this.load = function() {
    try {
      self.students = JSON.parse(localStorage.students);
      $.each(self.students, function (index, student_name) {
      self.appendToList(student_name);
      });
    }
    catch(err) {
      return false;
    }
  };

  this.appendToList = function (student_name) {
    $('#students').append('<li class="list-group-item">' + student_name + '</li>');
  };

  this.addStudent = function(student_name) {
    self.students.push(student_name);
    self.save();
    self.appendToList(student_name);

  };

  this.init = function() {
    self.students = [];
    self.load();
    $('#new_student_form').on('submit', function(ev){
      ev.preventDefault();
      var student_name = $(this.student_name).val();
      self.addStudent(student_name);
      $(this.student_name)
        .focus()
        .val(' ');
    });
  };
};

var roster = new Megaroster();
roster.init();
