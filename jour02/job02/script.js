function showhide()
{
   var button = document.getElementById("button");
   if(button.textContent == 'Afficher')
   {
        button.innerHTML = "Masquer";
        var b = document.body;
        var article = document.createElement("article");
        var text = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
        b.prepend(article);
        article.append(text);
   }
   else
   {
       button.innerHTML = "Afficher";
       var content = document.getElementsByTagName("article")[0];
       content.parentNode.removeChild(content);
   }
}