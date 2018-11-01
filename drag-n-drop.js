function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    let dropZone = document.getElementById('drop-zone');
    let uploadForm = document.getElementById('js-upload-form');

    const startUpload = function(files) {
        console.log(files)
    }

    uploadForm.addEventListener('submit', function(e) {
        const uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }
   //not needed, added extra script down below
   
    dropZone.ondragleave = function() {
        this.className = 'drag-nd-drop';
        return true;
    }

    dropZone


}(jQuery);