var top_btn = document.getElementById('top_btn');
var list_collapse = document.getElementById('list_collapse');

top_btn.addEventListener('click', function() {
  this.classList.toggle('active');
  list_collapse.classList.toggle('show');
  console.log(this.classList);
});


