<%--<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>--%>

<div class="fixed-top sticky m-0 p-0 w-100" id="header" style="max-width:100vw">
    <nav class="menu-left" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: #FFF; position: relative">
        <div id="header-container" style="padding: 0px; margin: 0px auto; max-width: 1440px; width: 100%; height: 40px;">
            <div style="display: flex;">
                <div style="justify-content: start;">
                    <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img alt="Next Biosciences" id="navbar-brand" title="Next Biosciences" src="/Portals/0/NextBiosciences_ID_2021_Blue-50.png?ver=UjV7XR4HWUXoNOVh3nsPsA%3d%3d" class="img-fluid pt-2 pb-2" style="max-width:350px">
                    </a>
                </div>
                <div style="flex-grow: 1;">
                    <span class="d-flex flex-row justify-content-center align-items-start flex-grow-2"></span>
                </div>
                <div style="justify-content: end;">
                    <span style="margin-top: 10px" class="d-flex align-items-end">
                        <i class="fa fa-search p-1"></i>|
                        <i class="fa fa-shopping-basket p-1"></i>|
                        <a class="fa fa-user p-1" style="color: #505050;" rel="nofollow" href="/Signin?returnurl=/">&nbsp;</a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
    <nav class="menu-left" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: rgba(80,80,80,0.5); position: relative">
        <div style="padding: 0px; margin: 0px auto; max-width: 1440px; width: 100%; height: 40px;">
            <div style="display: flex;">
                <div style="justify-content: start; flex-grow: 1;">
                    <dnn:MENU MenuStyle="nav/main/NextNav" NodeSelector="*,0,3" ID="mainMenu" runat="server" />
                </div>
                <div style="justify-content: end; padding-top: 7px;">
                    <a class="btn-outline nav-btn-order">ORDER</a>
                </div>
            </div>
        </div>
    </nav>
</div>
<script type="text/javascript">
/* === Shrink Header on Scroll === */

    var header = $('navbar-brand');
    var shrinkIt = header.height();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if ( scroll >= shrinkIt ) {
      header.addClass('shrunk');
    }
    else {
      header.removeClass('shrunk');
    }
  });


</script>