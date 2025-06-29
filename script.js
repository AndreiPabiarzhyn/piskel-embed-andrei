(function () {
  var sprites = {
    megaman : {"modelVersion":2,"piskel":{"name":"Megaman moving","description":"","fps":2,"height":28,"width":31,"layers":["{\"name\":\"Layer 1\",\"frameCount\":3,\"base64PNG\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAcCAYAAAADdbMKAAACi0lEQVRoQ+2Yu3HDMAyG6SoaI2XmSJE5MoY7253HyBwpMkdKj8FUzvEBCgTfEgn5EqnyWRR+8gMIAjyI/WEncGBX3AXFGuh3xG+NnSVu2Eq7i+4SWE748mV+nl61mSW2WoFvpd1VtxXUXRzlDOo6CUbwW2l3122B7osD+utEo7XFZm2kb6U9RLcFUHICLto/f4QwTmixWwN+K+0hurVw7grsSUGNPRDtKvX0h76V9jDdEnTvAAHo8v0sxPPZ4Z/sT3kWYpq6RXpaGzl++jDiak7Ty7XHLhu+5hR0LYwPSYh0DNwCFvL7qBcspewBPa+dSUYrobOtOQZdbyv66LLwKHVEQZRXQqfGcrurqG3BuumBwxM9Q612UbfnmikAfXBc3p7y0NVblF7EzTri5rb4/D0pMTMNVb12ItqpQ2h5m3QM85qj0GFyCr6KcK8Wt9Geizg6HjsR7EUaKq9SYNRm181C15WIrUgwSLWl6aOcQNMSpCRvLLJJSsugCWHSZteN5nS3LQGQohZ2nx7L3DngBvqN1CNpz+AZ1pyuXnAuJtBjKdWmC/pK2a89zODbsCFBDh+ozaabrSRwxMciGQAMuPDyIo9Rm0W3rjmyUZ+savq3/cqfZofwaw/XLUE3i6epBu/x/m0/tr6V9lDdEvTs/QOUdQMuuLSzc/c9A7WH61Z3h/Syi9bencF7HSKjNotutnqhORwqFHywOSD90ky0M2XQZtMNmyN0eKmfAJ5UKNHyamW0ewfYX9YG6MGCgy7Sr1DCLm7+oHRO0FL732mb5qWtOmkdn7ie0n+32mod/5DasY4xNlEcveG9b/hFbbS32modn4eee2veDVl3LZzy9PYR1QR26NWo+g38BXXvWDvG9IC5AAAAAElFTkSuQmCC\"}"]}},
    sonic : {"modelVersion":2,"piskel":{"name":"Imported piskel","description":"","fps":12,"height":50,"width":50,"layers":["{\"name\":\"Layer 1\",\"frameCount\":25,\"base64PNG\":\"data:image/png;base64,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\"}"]}},
    mario : {"modelVersion":2,"piskel":{"name":"Mario kart","description":"","fps":3,"height":42,"width":40,"layers":["{\"name\":\"Layer 1\",\"frameCount\":2,\"base64PNG\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAqCAYAAAAkqNwKAAAEpklEQVRoQ+2aLVjzMBDHDzeJrJyMnEROIpGTSCQSOYlEIicnkZNIZGXlZCWyrjx3zYVrljQfLdve92nNurZJL7//fSTZbmA+RhG4GdV6bgwzwJFOMAOcAY4kMLL57IFXAVCp1mlHVf33Ao0boAbXVFXHr2m6z8Wi+1Cq+34NIG2RJ7IpH6BSrQEn4bEraogG5EQGJ0ecLbLuYCpx8wAKeHsAeGRPs0a3qyrYSIPPCdEDzhZgLMh0gA54PU8UFqJxF4FoRwcAoNAbnWL2i4UR1gQMOkGGwNkA2fMQnlHRkpfvMUR6LsPIpLC1BOa2DI+/I0Rzb0SUZAFEIBi2DKgpSzKh/nijz+LhuSsiq5V5htucC+BQarEFGSNwPECrijG84/aRgCEsPMdjud0BQkWgdO7y0r/yRKVaKXCM93KqoVyeaJcfIAPDDjEsyhLK72+4W697NsUAlA2+Pj9hdXtLwMlY+Z6Y0Yae0f0Zjw89D0B52hTCSQA6gEmACA09S3ocn7O9rvt4rQcQoP890fgTNkq1bBvfSxHYtE2wY9ADh7yOAeEnHvuHVW88m48uL0rY/Cw/eOKNEd7ifUTDcwk4lGI45UgHIDsjIQ7nQJ5L6SLBIYyw7lYr8sKYA437KktAqAyNiwy1jzR28F1KtWyXDYWLml3k+LuMFrYz1qYgQBww5z15bkN84eWcHuWrnlxLeHjL2d8UALFzDRFPUWCXN/quITg8KHIS7IkCSAat173B22rbk2msbBwWRlUBEEFyvykGBz1eR42dC30pRqaZnGgIT2OUaqXX4Etk1fKFs+15dlU0fSaoHYTHD4hwDqWZnp0ZtoQB6tCQSzK8RBPVbQOwX50UEB4HhcOmhN22v3Qyk9wMg1MhcjjbIBlcTthKG5IA0st0awOQaPYrsHnBpssrEiC2wyNn0poCjybvkQI320W3HM0QNA6g9kIO318ABxpTA0vn2BZw7K6rewp70w5PMoyNAijWwgQwQmAEiEcOxHiAbL1eKpE3ig1Ue0OBiorY/fhzrxP24bvl7ktH53fzoFNdw8UA0rsz5wGIIQnQYgjKSiqLBJ+f3Icz/IyqBVZ1TUtGPmjpKA7eAMFLOL+tiiIrrQSnMd6wwfzGuQ/PtzWFKh3VAWBb9O/78uRfhLOeyqQI3Nmd/hvO4FLu3to4wHcccP6mgVXvvxsL6umzB/Dkngbq7TPDeLMRIVXmDQopMArK4vKz8ho/Kzc37D49njQIUC1Pi0N1PJKHIaDdky4SWFXfl6DeujxTPTen9zRgf5+J6ivVXoPA4e0sF/nqAC+OysvLN3tZh128YkW2vSBSZaf4SrXXIHAQoG0ke2AuQGd/OfnH91u0zsG59nlzvifFBAHaYUI5UK9p7ZfJTQffPV9/yQlcA7y0wEGALgNxmoLThI+i6HHyhfBDXZtpwtQeeGmBs6YxOFEt65p2aGS+cwHEa7QHWBTeX++SvQ9lG/DAcwqcBRAH3AC4/w/jSSILnERP/R8aT3/nFDi8lPP9p2QoiTsrt56mTPkflQFBziVwGKC3LF3JjQsL/O8DvLCOM8CRAswAZ4AjCYxsPnvgSIA/kjKcWEd9DO4AAAAASUVORK5CYII=\"}"]}}

  };

  var init = function () {
    var sidebarEl = document.querySelector(".sidebar");
    if (sidebarEl) {
      sidebarEl.addEventListener("click", function (evt) {
        var spriteName = evt.target.dataset.sprite;
        if (spriteName && sprites[spriteName]) {
          loadSprite(sprites[spriteName]);
        }
      });
    }

    setupBrushSizeButtons();
  };

  var loadSprite = function (sprite) {
    var editorFrameEl = document.querySelector(".editor-frame");
    var pskl = editorFrameEl?.contentWindow?.pskl;
    if (pskl) {
      var fps = sprite.piskel.fps;
      var piskel = sprite.piskel;
      var descriptor = new pskl.model.piskel.Descriptor(piskel.name, piskel.description, true);
      pskl.utils.serialization.Deserializer.deserialize(sprite, function (piskel) {
        piskel.setDescriptor(descriptor);
        pskl.app.piskelController.setPiskel(piskel);
        pskl.app.previewController.setFPS(fps);
      });
    }
  };

  // Brush size selector
  function setupBrushSizeButtons() {
    const buttons = document.querySelectorAll('.brush-size');
    if (!buttons.length) return;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const size = parseInt(button.dataset.size, 10);
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Сохраняем выбранный размер
        window.selectedBrushSize = size;

        const editorFrameEl = document.querySelector('.editor-frame');
        const pskl = editorFrameEl?.contentWindow?.pskl;
        if (pskl && pskl.app && pskl.app.toolController) {
          const tool = pskl.app.toolController.getCurrentTool();
          if (tool) {
            if (typeof tool.setLineWidth === 'function') {
              tool.setLineWidth(size); // Pencil tool
            } else if (typeof tool.setBrushSize === 'function') {
              tool.setBrushSize(size); // Другие кастомные
            }
          }
        }
      });
    });
  }

  init();
})();
