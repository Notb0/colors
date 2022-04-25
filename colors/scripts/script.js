//<script>
//function myFunction() {
//  // Объявлять переменные
//  var input, filter, ul, li, a, i;
//  input = document.getElementById("mySearch");
//  filter = input.value.toUpperCase();
//  ul = document.getElementById("myMenu");
//  li = ul.getElementsByTagName("li");
//
//  // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
//  for (i = 0; i < li.length; i++) {
//    a = li[i].getElementsByTagName("a")[0];
//    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//      li[i].style.display = "";
//    } else {
//      li[i].style.display = "none";
//    }
//  }
//}
//</script>
/* Установить ширину боковой панели с шириной 250 пикселей и следующий и левой части страницы содержимого шириной 250 пикселей и следующий */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

/* Установите ширину боковой навигации на 0, а левое поле содержимого страницы - на 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}