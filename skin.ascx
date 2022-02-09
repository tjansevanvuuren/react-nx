<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Import Namespace="System.Web" %>

<%@ Import Namespace="WebSitesCreative.Modules.Next.Helpers" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Data" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Data.DBO" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Components" %>

<%@ Import Namespace="DotNetNuke.Web.Client.ClientResourceManagement" %>
<%@ Import Namespace="DotNetNuke.Framework.JavaScriptLibraries" %>

<!--This is our default font-->
<link rel="stylesheet" type="text/css" href="<%=TemplateSourceDirectory%>/assets/fonts/fonts.css">
<link rel="stylesheet" type="text/css" href="<%=TemplateSourceDirectory%>/assets/theme.css">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


<script runat="server" type="text/C#" language="C#">
    bool isDevelopment = false;
</script>

<script runat="server" type="text/C#" language="C#">
    int ct = ExtensionController.CacheResources(); // should be called before FontsProvider.GetGoogleFontsLink
    ThemesHelper.SkinInfo skinInfo = ThemesHelper.GetCurrentSkinInfoFromPortalTab();
    Snapshot snapshot = WebSitesCreative.Modules.Next.API.GetLatestSnapshot(true); // true - ask for default settings for the preloader
</script>

<%#FontsProvider.GetGoogleFontsLink(snapshot)%>

<script type="text/javascript">
    window.wscNextLoadedPromise = $.Deferred();
</script>

<% if (SnapshotHelper.GetNormalizedSettingValue<string>(snapshot.Settings, "preloader", "") != "off")
    {%>
<!--#include file="./loader.ascx" -->
<%}
    else
    {%>
<script>document.body.classList.add("no-page-loader");</script>
<style>
    body:not(.no-page-loader) #Form {
        opacity: 0;
        animation-fill-mode: both;
    }
</style>
<%}%>

<div class="fixed-top sticky m-0 p-0 w-100">

    <nav class="menu-left overlap" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: white">
        <nav class="menu-left overlap" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: #FFF">
            <div class="wsc_header_content" style="padding: 5px 0px 0px; line-height: 34px; height: auto; min-height: 34px; margin: 0px auto; max-width: 1440px; width: 100%;">
                <div class="wsc_header_content_inner">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3 col-lg-3">
                                <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                                    <img class="img-fluid" alt="Next Biosciences" title="Next Biosciences" style="width: 350px;" src="/Portals/0/NextBiosciences_ID_2021_Blue-50.png?ver=UjV7XR4HWUXoNOVh3nsPsA%3d%3d">
                                </a>
                            </div>
                            <div class="col-md-8 col-lg-7">
                                <span class="d-flex flex-row justify-content-center align-items-start flex-grow-2"></span>
                            </div>
                            <div class="col-md-1 col-lg-2 col-xl-2">
                                <span style="margin-top: 10px" class="fs-5 d-flex align-items-end">
                                    <i class="fa fa-search p-1"></i>
                                    <i class="fa fa-shopping-basket p-1"></i>
                                    <dnn:LOGIN ID="DnnLogin" CssClass="fa fa-user p-1" rel="nofollow" runat="server" Text="&nbsp;" LogoffText="&nbsp;" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="menu-left navBarNav" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: rgba(80,80,80,0.5); position: relative">
                <dnn:MENU MenuStyle="nav/main/NextNav" NodeSelector="*,0,3" ID="dnnTopMenu" runat="server" />
            </nav>
        </nav>

        <%--<nav class="menu-left" style="box-shadow: none; border: medium none; border-radius: 0px; background-color: rgba(80,80,80,0.5); position: relative">
            <div class="wsc_header_content" style="padding: 0px; line-height: 34px; height: auto; min-height: 34px; margin: 0px auto; max-width: 1440px; width: 100%;">
                <div class="wsc_header_content_inner">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-10 col-lg-10">
                                <dnn:MENU MenuStyle="nav/main/NextNav" NodeSelector="*,0,3" runat="server" />
                            </div>
                            <div class="col-md-1 col-lg-2 col-xl-2">
                                <a class="btn btn-outline">ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </nav>--%>
</div>

<div id="app" style="padding-top: 80px;"></div>

<div runat="server" id="ContentPane" style="display: none !important;"></div>
<div runat="server" id="Unpublished" style="display: none !important;"></div>

<style>
    #dnn_Unpublished {
        display: none !important;
    }
</style>

<!--#include file="./dnn.ascx" -->
<!--#include file="./revindex.ascx" -->

<!--#include file="./jrespond.ascx" -->
<!--#include file="./polyfills.ascx" -->

<script runat="server" language="c#">
    public void Page_Init(object sender, EventArgs e)
    {
        JavaScript.RequestRegistration(CommonJs.jQuery);

        NextSkinController.EnsureNextModuleExists();
        ExtensionController.RegisterExtensions(Page);
    }

    public void Page_Load(object sender, EventArgs e)
    {
        var isAdmin = PermissionController.IsAvailable(snapshot);

        // doesn't seem to be necessary
        Unpublished.Visible = isAdmin;

        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(TemplateSourceDirectory, "vendor/jrespond.min.js"), 8, "DnnPageHeaderProvider");

        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(TemplateSourceDirectory, "build/misc.css"), 9, "DnnPageHeaderProvider");
        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(TemplateSourceDirectory, "build/fa.css"), 500); // Set low priority to overwrite Action Form css

        // " Blog Detail leave comment " uses it
        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(TemplateSourceDirectory, "vendor/summernote/summernote-lite.min.js"), 11, "DnnPageHeaderProvider");
        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(TemplateSourceDirectory, "vendor/summernote/summernote.css"), 200, "DnnPageHeaderProvider");
        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(TemplateSourceDirectory, "vendor/summernote/summernote-lite.css"), 200, "DnnPageHeaderProvider");

        string skinBaseUrl = isDevelopment ? "http://windows:3001/next/build" : System.IO.Path.Combine(TemplateSourceDirectory, "build");

        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "jquery.bundle.css"), 10, "DnnFormBottomProvider");
        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "jquery.bundle.js"), 10, "DnnPageHeaderProvider");

        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "react.bundle.js"), 10, "DnnPageHeaderProvider");

        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "vendor.js"), 11, "DnnPageHeaderProvider");

        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "common.js"), 11, "DnnPageHeaderProvider");
        if (!isDevelopment)
        {
            ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "common.css"), 11, "DnnFormBottomProvider");
        }

        if (!isDevelopment)
        {
            ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "interface.css"), 11, "DnnFormBottomProvider");
        }
        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "interface.js"), 11, "DnnPageHeaderProvider");
        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "viewer.js"), 12, "DnnPageHeaderProvider");

        // note: js is added before to the top, so other modules can overwrite the deps, like lodash (DNNSharp's version of lodash conflicts with ours, precisely method _.any)
        if (isAdmin)
        {
            ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "admin.js"), 11, "DnnPageHeaderProvider");
            if (!isDevelopment)
            {
                ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "admin.css"), 12, "DnnFormBottomProvider");
            }
        }
        else
        {
            ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "app.js"), 11, "DnnPageHeaderProvider");
            ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "app.css"), 12, "DnnFormBottomProvider");
        }

    }

    public void Page_PreRender(object sender, EventArgs e)
    {
        PageController.PreRender(Page);
    }
</script>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<script language="javascript" type="text/javascript">
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    //(function ($) {
    //    $.fn.countTo = function (options) {
    //        options = options || {};

    //        return $(this).each(function () {
    //            // set options for current element
    //            var settings = $.extend({}, $.fn.countTo.defaults, {
    //                from: $(this).data('from'),
    //                to: $(this).data('to'),
    //                speed: $(this).data('speed'),
    //                refreshInterval: $(this).data('refresh-interval'),
    //                decimals: $(this).data('decimals')
    //            }, options);

    //            // how many times to update the value, and how much to increment the value on each update
    //            var loops = Math.ceil(settings.speed / settings.refreshInterval),
    //                increment = (settings.to - settings.from) / loops;

    //            // references & variables that will change with each update
    //            var self = this,
    //                $self = $(this),
    //                loopCount = 0,
    //                value = settings.from,
    //                data = $self.data('countTo') || {};

    //            $self.data('countTo', data);

    //            // if an existing interval can be found, clear it first
    //            if (data.interval) {
    //                clearInterval(data.interval);
    //            }
    //            data.interval = setInterval(updateTimer, settings.refreshInterval);

    //            // initialize the element with the starting value
    //            render(value);

    //            function updateTimer() {
    //                value += increment;
    //                loopCount++;

    //                render(value);

    //                if (typeof (settings.onUpdate) == 'function') {
    //                    settings.onUpdate.call(self, value);
    //                }

    //                if (loopCount >= loops) {
    //                    // remove the interval
    //                    $self.removeData('countTo');
    //                    clearInterval(data.interval);
    //                    value = settings.to;

    //                    if (typeof (settings.onComplete) == 'function') {
    //                        settings.onComplete.call(self, value);
    //                    }
    //                }
    //            }

    //            function render(value) {
    //                var formattedValue = settings.formatter.call(self, value, settings);
    //                $self.html(formattedValue);
    //            }
    //        });
    //    };

    //    $.fn.countTo.defaults = {
    //        from: 0,               // the number the element should start at
    //        to: 0,                 // the number the element should end at
    //        speed: 1000,           // how long it should take to count between the target numbers
    //        refreshInterval: 100,  // how often the element should be updated
    //        decimals: 0,           // the number of decimal places to show
    //        formatter: formatter,  // handler for formatting the value before rendering
    //        onUpdate: null,        // callback method for every time the element is updated
    //        onComplete: null       // callback method for when the element finishes updating
    //    };

    //    function formatter(value, settings) {
    //        return value.toFixed(settings.decimals);
    //    }
    //}(jQuery));

    //jQuery(function ($) {
    //    // custom formatting example
    //    $('.count-number').data('countToOptions', {
    //        formatter: function (value, options) {
    //            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    //        }
    //    });

    //    // start all the timers
    //    $(document).on('scroll', function () {
    //        $('.timer').each(count).isOnScreen();
    //    });


    //    function count(options) {
    //        var $this = $(this);
    //        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //        $this.countTo(options);
    //    }
    //});


    jQuery(document).ready(function ($) {
        var config = {
            portalId: <%= PortalSettings.PortalId %>,
            tabId: <%= PortalSettings.ActiveTab.TabID %>,
            paths: {
                apiUrl: "<%# WebSitesCreative.Modules.Next.Services.Helper.GetAPIUrl(PortalSettings.PortalId) %>",
                assetsUrl: "<%# TemplateSourceDirectory %>/assets",
                baseUrl: "<%# WebSitesCreative.Modules.Next.Services.Helper.GetBaseUrl(PortalSettings.PortalId) %>",
                blogAPIUrl: "<%# WebSitesCreative.Modules.Next.Services.Helper.GetBlogAPIUrl(PortalSettings.PortalId) %>",
                mediaServiceUrl: "<%# WebSitesCreative.Modules.Next.Config.MediaServiceUrl %>",
                internalMediaUrl: "<%# FilesHelper.ToVirtual(MediaHelper.GetInternalFolderPath(PortalSettings.PortalId)) %>",
                skinFolderUrl: "<%# TemplateSourceDirectory %>",
                templatesServiceUrl: "<%# WebSitesCreative.Modules.Next.Config.TemplatesServiceUrl %>",
                uploadsMediaUrl: "<%# FilesHelper.ToVirtual(MediaHelper.GetUploadedFolderPath(PortalSettings.PortalId)) %>"
            },
            version: <%= SiteInfoProvider.Version %>
    };

        var isAdmin = <%= PermissionController.IsAvailable(snapshot).ToString().ToLower() %>;
        if (isAdmin) {
            Object.assign(config, {
                availability: {
                    blog: <%= (!WebSitesCreative.Modules.Next.Config.IsCartly).ToString().ToLower() %>,
                    memberTemplates: <%= WebSitesCreative.Modules.Next.Config.IsCartly.ToString().ToLower() %>,
                    funnelTemplates: <%= WebSitesCreative.Modules.Next.Config.IsCartly.ToString().ToLower() %>
        },
                dnn: {
                    hasPersonaBar: !!document.querySelector("#personaBar-iframe"),
                    isEditMode: <%= DotNetNuke.Common.Globals.IsEditMode().ToString().ToLower() %>
        },
                isDemo: <%= WebSitesCreative.Modules.Next.Config.IsDemo.ToString().ToLower() %>,
                savePreviewImage: <%= WebSitesCreative.Modules.Next.Config.IsCartly.ToString().ToLower() %>
      });

            WSCNext.admin.default(document.querySelector("#app"), config, <%=PortalSettings.UserInfo.UserID%>)
        } else {
            WSCNext.app.default(document.querySelector("#app"), config);
        }
    });
</script>
