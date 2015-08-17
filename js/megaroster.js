var Megaroster = function() {
  this.init = function() {
    var self = this;
    this.students = [];
    $('#new_student_form').on('submit', function(ev){
      ev.preventDefault();
      var student_name = $(this.student_name).val();
      self.students.push(student_name);
      $('#students').append('<li class="list-group-item">' + student_name + '</li>');
      this.student_name.focus();
      this.student_name.select();
    });
  };
};

var roster = new Megaroster();
roster.init();
