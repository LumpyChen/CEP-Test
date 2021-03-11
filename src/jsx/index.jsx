function getAllLayers() {
  var out = [];
  var doc = app.activeDocument;
  getLayers(doc.layers);
  function getLayers(layers) {
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].typename == "LayerSet") {
        //判断是否是图层组
        out.push(layers[i].name);
        getLayers(layers[i].layers);
      } else {
        out.push(layers[i].name);
      }
    }
  }
  return JSON.stringify(out);
}

function hideAllTextLayers() {
  var doc = app.activeDocument;
  var out = [];
  function getLayers(layers) {
    for (var i = 0; i < layers.length; i++) {
      if (layers[i] && layers[i].kind === LayerKind.TEXT) {
        out.push(layers[i]);
      }
      if (layers[i].typename == "LayerSet") {
        getLayers(layers[i].layers);
      }
    }
  }
  getLayers(doc.layers);
  for (var j = 0; j < out.length; j++) {
    out[j].remove();
  }
  return "{}";
}
