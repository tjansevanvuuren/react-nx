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
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>



<!-- CSS only -->

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

<!--#include file="./header.ascx" -->
<main id="app"></main>
<!--#include file="./footer.ascx" -->
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
        ClientResourceManager.RegisterScript(Page, System.IO.Path.Combine(skinBaseUrl, "animsition.min.js"), 11, "DnnPageHeaderProvider");
        ClientResourceManager.RegisterStyleSheet(Page, System.IO.Path.Combine(skinBaseUrl, "animsition.min.css"), 12, "DnnFormBottomProvider");
        
        //ClientResourceManager.RegisterStyleSheet(Page, "/Portals/0/assets/fonts/fonts.css", 12, "DnnFormBottomProvider");
        //ClientResourceManager.RegisterStyleSheet(Page, "/Portals/0/assets/theme.css", 12, "DnnFormBottomProvider");
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