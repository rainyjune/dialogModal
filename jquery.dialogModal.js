; (function ($) {
  $.fn.myDialogModal = function (options) {
    var defaultOptions = {
      rootSelect: '#myDialog',
      header: "Title",
      content: "<p>This is the warning</p>",
      footer: "",
      contentWidth: 500
    };

    mergedOptions = $.extend(defaultOptions, options);

    var element = $(this);

    function init() {

      element.addClass("dialogRootContainer");

      var container = $("<div>")
      container.addClass("dialog-container");

      var valignContainer = $("<div>");
      valignContainer.addClass("valignMiddle");

      var alignInnerContainer = $("<div>");
      alignInnerContainer.addClass("valignInner");

      var headerContainer = $("<div>")
      headerContainer.addClass("header");
      headerContainer.html(mergedOptions.header);

      var mainContainer = $("<div>");
      mainContainer.addClass("main");
      mainContainer.html(mergedOptions.content);

      var footerContainer = $("<div>");
      footerContainer.addClass("footer");
      footerContainer.html(mergedOptions.footer);

      alignInnerContainer.append(headerContainer);
      alignInnerContainer.append(mainContainer);
      alignInnerContainer.append(footerContainer);

      valignContainer.append(alignInnerContainer);
      container.append(valignContainer);

      element.append(container);

      lockDocument();

      addEventListeners();
    };

    init();

    function addEventListeners() {
      element.on("click", modalClicked);
    }

    function modalClicked() {
      unlockDocument();
      element.hide();
    }

    function lockDocument() {
      $("html").css("overflow", "hidden");
    }

    function unlockDocument() {
      $("html").css("overflow", "auto");
    }

    return element;
  };
})(jQuery);