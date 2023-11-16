import sys
import json

if __name__ == "__main__":
  version_tag = sys.argv[1]
  with open("versions.json", "r") as READ:
    version_json = json.loads(READ.read())
    version_json["versions"].append(version_tag.replace("v", ""))
  with open("versions.json", "w") as WRITE:
    WRITE.write(json.dumps(version_json))
