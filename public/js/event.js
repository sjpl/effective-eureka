
var test = {};
    test.prepareForTouches = function () {

        function dragElement(event) {
            var elementToDrag = event.target;
            elementToDrag.style.left = event.gesture.deltaX + 'px';
        };

        function deleteElement(event) {
            var elementToDelete = event.target;
            event.gesture.stopDetect();
            elementToDelete.style.display = 'none';
        };

        function resetElement(event) {
            var elementToReset = event.target;
            elementToReset.style.left = 0;
        };

        var swipeOptions = {dragLockToAxis: true, dragBlockHorizontal: true};

        function initTouchListeners(touchableElement) {
            var touchControl = new Hammer(touchableElement, swipeOptions);
            touchControl.on("dragright", dragElement)
                    .on("swiperight", deleteElement)
                    .on("release", resetElement);
        };

        var listItems = document.querySelectorAll('li');
        for (var i = 0; i < listItems.length; i += 1) {
            initTouchListeners(listItems[i]);
        }
    }
    test.prepareForTouchesWhenReady = function () {
        document.addEventListener("DOMContentLoaded", test.prepareForTouches);
    };
    test.prepareForTouchesWhenReady();