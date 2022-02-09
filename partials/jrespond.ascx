<!-- Adds device-* classes to body -->
<script type="text/javascript">
  jRespond([{label:"smallest",enter:0,exit:479},{label:"handheld",enter:480,exit:767},{label:"tablet",enter:768,exit:991},{label:"laptop",enter:992,exit:1199},{label:"desktop",enter:1200,exit:1e4}]).addFunc([{breakpoint:"desktop",enter:function(){document.body.classList.add("device-lg")},exit:function(){document.body.classList.remove("device-lg")}},{breakpoint:"laptop",enter:function(){document.body.classList.add("device-md")},exit:function(){document.body.classList.remove("device-md")}},{breakpoint:"tablet",enter:function(){document.body.classList.add("device-sm")},exit:function(){document.body.classList.remove("device-sm")}},{breakpoint:"handheld",enter:function(){document.body.classList.add("device-xs")},exit:function(){document.body.classList.remove("device-xs")}},{breakpoint:"smallest",enter:function(){document.body.classList.add("device-xxs")},exit:function(){document.body.classList.remove("device-xxs")}}]);

  (function () {
    var meta = document.querySelector("meta[name=viewport]");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "viewport";
      document.head.appendChild(meta);
    }

    meta.content = "width=device-width, initial-scale=1";
  })();
</script>