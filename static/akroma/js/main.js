        $(document).ready(function(){
            $("#prof").click(function(){
                $("body").hide(function () {
                    $("body").load("../profile.html");
                    history.pushState(null, '', '/profile.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        $(document).ready(function(){
            $("#cont").click(function(){
                $("body").hide(function () {
                    $("body").load("../contact.html");
                    history.pushState(null, '', '/contact.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        $(document).ready(function(){
            $("#team").click(function(){
                $("body").hide(function () {
                    $("body").load("../team.html");
                    history.pushState(null, '', '/team.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        $(document).ready(function(){
            $("#profile").click(function(){
                $("body").hide(function () {
                    $("body").load("../profile.html");
                    history.pushState(null, '', '/profile.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        $(document).ready(function(){
            $("#contact").click(function(){
                $("body").hide(function () {
                    $("body").load("../contact.html");
                    history.pushState(null, '', '/contact.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        $(document).ready(function(){
            $("#teams").click(function(){
                $("body").hide(function () {
                    $("body").load("../team.html");
                    history.pushState(null, '', '/team.html');
                });
                $("body").fadeIn(900);
                return false;
            });
        });
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        /* Close/hide the sidenav */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }