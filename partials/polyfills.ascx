<!-- add button('loading') and button('reset') methods to simulate bootstrap 4 data-loading-text feature -->
<script type="text/javascript">
  (function () {
    var origin = $.fn.button;
    $.fn.button = function (command) {
      var $this = $(this);
      if (command === 'loading') {
        $this.attr('disabled', 'disabled');
        $this.attr('data-temp-text', encodeURIComponent($this.html()));
        $this.text($this.attr('data-loading-text') || 'Please wait...');
        return $this;
      } else if (command === 'reset') {
        $this.removeAttr('disabled');
        $this.html(decodeURIComponent($this.attr('data-temp-text')));
        $this.removeAttr('data-temp-text');
        return $this;
      } else {
        return origin.apply(this, arguments);
      }
    }
  })();
</script>