const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../..");

const config = {
  watchFolders: [monorepoRoot],
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
    ],
    blockList: [
      new RegExp(
        `^${path.resolve(monorepoRoot, "node_modules", "react").replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}([/\\\\].*)?$`
      ),
      new RegExp(
        `^${path.resolve(monorepoRoot, "node_modules", "react-native").replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}([/\\\\].*)?$`
      ),
    ],
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === "@groooh/react-native-webify" || moduleName === "rn-to-react") {
        return {
          filePath: path.resolve(monorepoRoot, "dist/react-native.js"),
          type: "sourceFile",
        };
      }
      if (moduleName.startsWith("@groooh/react-native-webify/")) {
        const subpath = moduleName.replace("@groooh/react-native-webify/", "");
        const target = path.resolve(monorepoRoot, "dist", subpath.endsWith(".js") ? subpath : subpath + ".js");
        return {
          filePath: target,
          type: "sourceFile",
        };
      }
      if (moduleName.startsWith("rn-to-react/")) {
        const subpath = moduleName.replace("rn-to-react/", "");
        const target = path.resolve(monorepoRoot, "dist", subpath.endsWith(".js") ? subpath : subpath + ".js");
        return {
          filePath: target,
          type: "sourceFile",
        };
      }
      if (
        moduleName === "react" ||
        moduleName.startsWith("react/") ||
        moduleName === "react-native" ||
        moduleName.startsWith("react-native/")
      ) {
        return context.resolveRequest(
          { ...context, originModulePath: path.join(projectRoot, "index.ts") },
          moduleName,
          platform
        );
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);


