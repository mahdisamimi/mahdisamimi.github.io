var headerHeight = document.getElementsByTagName("HEADER")[0].offsetHeight;
window.onscroll = function() {myFunction()};

        function myFunction() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll-headerHeight / height-headerHeight) * 100;
          if (winScroll >= headerHeight){
                document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
          }
        }
