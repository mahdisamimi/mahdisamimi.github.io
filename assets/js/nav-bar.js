window.onscroll = function() {myFunction()};

        function myFunction() {
          var headerHeight = document.getElementsByTagName("HEADER")[0].clientHeight;
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (winScroll >= headerHeight){
                var scrolled = (winScroll-headerHeight / height-headerHeight) * 100;
                document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
          }
        }
