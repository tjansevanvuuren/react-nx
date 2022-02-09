<script language="javascript" type="text/javascript">
  jQuery(document).ready(function ($) {
    /* Override DNN button styles with Bootstrap styles */
    $('a.dnnPrimaryAction').addClass('btn').removeClass("dnnPrimaryAction");
    $('a.dnnSecondaryAction').addClass('btn btn-light').removeClass("dnnSecondaryAction");
    $('.btn.btn-link').removeClass("btn");
  });

  <!-- Feedback -->
  if ($('.ModDNNFeedbackC').length) {
      $('.ModDNNFeedbackC').addClass("form-group");
      $('.ModDNNFeedbackC h3').css("display", "none");
      $('.ModDNNFeedbackC .dnnFormItem').removeClass("dnnFormItem");
      $('.ModDNNFeedbackC .dnnLabel').removeClass("dnnLabel");
      $('.ModDNNFeedbackC .NormalTextBox').addClass('form-control');
      $('.ModDNNFeedbackC .dnnActions .dnnPrimaryAction').removeClass("dnnPrimaryAction").addClass('btn btn-light');
  }

  <!-- Evoq Forms -->
  if ($('.ModFormC').length) {
      $('.ModFormC .dnnPrimaryAction').removeClass("dnnPrimaryAction").addClass('btn btn-primary');
  }
</script>