$(document).ready(function(){

  $('form').on('submit', function(){

      var name = $('form input');
      var todo = {name: name.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var name = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + name,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
