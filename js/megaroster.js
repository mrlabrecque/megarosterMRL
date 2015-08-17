var Megatask = {
  author: "Marty",
  hisDeal: "Who the heck knows?",
  newStudentForm: $('#new_student_form'),//between every object key value pair: YOU NEED A COMMA
  submitHandler: function(ev) {
    alert("WHAT????");
  },
  start: function(){
    this.newStudentForm.submit(this.submitHandler);
  },
};

Megatask.start();


var foods = {
  fruits: ['apples', 'oranges', 'bananas'],
  veggies: ['broccoli', 'celery', 'kale'],
  favorite: 'spaghetti',
};
