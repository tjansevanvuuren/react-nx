<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Import Namespace="System.Web" %>

<%@ Import Namespace="WebSitesCreative.Modules.Next.Helpers" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Data" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Data.DBO" %>
<%@ Import Namespace="WebSitesCreative.Modules.Next.Components" %>

<%@ Import Namespace="DotNetNuke.Web.Client.ClientResourceManagement" %>
<%@ Import Namespace="DotNetNuke.Framework.JavaScriptLibraries" %>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

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

<div id="app"></div>

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

</script>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
