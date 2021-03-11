const cs = new CSInterface();

var c = cs.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
console.log(`$.evalFile("${c}json3.jsx")`);
cs.evalScript(`$.evalFile("${c}json3.jsx")`);

const evalJSXScript = (script) =>
  new Promise((resolve) => {
    cs.evalScript(script, (res) => {
      console.log(res);
      resolve(JSON.parse(res));
    });
  });

export const getLayers = () => evalJSXScript("getAllLayers()");

export const hideLayers = () => evalJSXScript("hideAllTextLayers()");
