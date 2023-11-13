import sys

TEMPLATE_STRING = """import { Vyxal } from "./vyxal.js";


self.addEventListener("message", function (e) {
  const data = e.data;
  console.log("Worker received: " + data.mode);
  const session = data.session;
  const sendFn = (x) => {
    this.postMessage({ val: x, command: "append", session: session });
  };
  Vyxal.setShortDict(data.dictionary.short);
  Vyxal.setLongDict(data.dictionary.long);
  Vyxal.execute(data.code, data.inputs, data.flags, sendFn);
  this.postMessage({ command: "done", session: data.session });
});
"""

if __name__ == "__main__":
  new_base = sys.argv[1]
  with open(new_base + "/worker.js", "w") as f:
    f.write(TEMPLATE_STRING)
