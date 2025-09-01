<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
     <button type="submit" id="orange">Click Me!</button>
      <script >
        function change( color){
  return function(){
    document.body.style.backgroundColor = `${color}`
  }
}


document.getElementById("orange").onclick = change("orange")
        
      </script>
  </body>
</html>