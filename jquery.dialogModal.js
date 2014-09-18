; (function ($) {
  $.fn.myDialogModal = function (options) {
    var defaultOptions = {
      rootSelect: '#myDialog',
      header: "Title",
      content: "<p>This is the warning</p>",
      footer: "",
      contentWidth: 500
    };

    var movableElement = null;
    var startPoint = {
      x: 0,
      y: 0
    };
    var endPoint = { x: 0, y: 0 };


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

      movableElement = valignContainer;

      lockDocument();

      addEventListeners();
    };

    init();

    function addEventListeners() {
      //element.on("click", modalClicked);
      movableElement.on("mousedown", function (e) {
        startDrag(e);
        $("body").on("mousemove", moveDrag);
      });
      //movableElement.on("mousemove", moveDrag);
      movableElement.on("mouseup", function (e) {
        endDrag(e);
        $("body").off("mousemove", moveDrag);
      });
    }

    function startDrag(e) {
      startPoint.x = e.clientX;
      startPoint.y = e.clientY;

      console.log("start point:", startPoint);
    }



    function moveDrag(e) {
      console.log("draging.", e.clientX, e.clientY);


      movableElement.css("position", "relative");
      movableElement.css({
        left: e.clientX - startPoint.x, 
        top: e.clientY - startPoint.y
      });
    }

    function endDrag(e) {
      endPoint.x = e.clientX;
      endPoint.y = e.clientY;
      console.log("Drag end!", endPoint);
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