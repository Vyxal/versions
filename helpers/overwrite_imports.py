import re

JS_IMPORTS = """import { Vyxal } from "./vyxal.js";
import { HelpText } from "./helpText.js";
"""

HTML_IMPORT = '<script src="./parsed_yaml.js" defer></script>'

if __name__ == "__main__":
  with open("index.html", "r") as index_read:
    contents = re.sub(r'(<!-- === -->)(.|\n)+\1', HTML_IMPORT, index_read.read())
    
  with open("index.html", "w") as index_write:
    index_write.write(contents)

  with open("main.js", "r") as js_read:
    contents = re.sub(r'(\/\* === \*\/)(.|\n)+\1', JS_IMPORTS, js_read.read())

  with open("main.js", "w") as js_write:
    js_write.write(contents)
