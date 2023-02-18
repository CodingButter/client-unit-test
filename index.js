import fs from "fs"
import path from "path"
import packageJson from "../../package.json" assert { type: "json" }

const packageJsonPath = packageJson.Test && packageJson.Test.path ? packageJson.Test.path : "src"
const testLibFile = "./Test.js"
const packagePathExists = fs.existsSync(path.join("../../", packageJsonPath))
const testLibFileExists = fs.existsSync(testLibFile)
if (packagePathExists) {
  if (testLibFileExists) {
    // copy Test.js to the defined path
    const status = fs.copyFileSync(testLibFile, path.join("../../", packageJsonPath, "Test.js"))
    if (status) {
      console.log("Test.js copied to", path.join("../../", packageJsonPath, "Test.js"))
    } else {
      console.log("Failed to copy Test.js to", path.join("../../", packageJsonPath, "Test.js"))
    }
  } else {
    console.log("Test.js not found")
  }
} else {
  console.log("Package path not found")
}
