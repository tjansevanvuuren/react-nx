<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<% if (DotNetNuke.Security.Permissions.TabPermissionController.CanViewPage() && DotNetNuke.Entities.Tabs.TabController.CurrentPage.HasAVisibleVersion) {%>
  <!--#include file="./skin.ascx" -->
<%} else {%>
  <!--#include file="./forbidden.ascx" -->
<%}%>
