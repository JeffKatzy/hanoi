$(function(){
  $('.towers').on('click', '.tower', gather_first);
});

var first = 0;
var second = 0;

function gather_first(){
  if (first === 0)
    {first = $('.tower').attr('id');
    check_if_tower_has_elements(first); }
  else
    {second = $('.tower').attr('id');
    check_if_legal(); }
}

// function check_if_legal(){
//   if
// }

function check_if_tower_has_elements(first){
  if (first.elements)
}