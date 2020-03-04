(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{259:function(e,t,o){e.exports=o.p+"assets/img/home_struc.5b1dce73.png"},335:function(e,t,o){"use strict";o.r(t);var a=o(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gathering-information-to-troubleshoot-zowe-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gathering-information-to-troubleshoot-zowe-cli"}},[e._v("#")]),e._v(" Gathering information to troubleshoot Zowe CLI")]),e._v(" "),a("p",[e._v("Follow these instructions to gather specific pieces of information to help troubleshoot Zowe™ CLI issues.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#identify-the-currently-installed-cli-version"}},[e._v("Identify the currently installed CLI version")])]),a("li",[a("a",{attrs:{href:"#identify-the-currently-installed-versions-of-plug-ins"}},[e._v("Identify the currently installed versions of plug-ins")])]),a("li",[a("a",{attrs:{href:"#environment-variables"}},[e._v("Environment variables")]),a("ul",[a("li",[a("a",{attrs:{href:"#log-levels"}},[e._v("Log levels")])]),a("li",[a("a",{attrs:{href:"#home-directory"}},[e._v("Home directory")])])])]),a("li",[a("a",{attrs:{href:"#home-directory-structure"}},[e._v("Home directory structure")]),a("ul",[a("li",[a("a",{attrs:{href:"#location-of-logs"}},[e._v("Location of logs")])]),a("li",[a("a",{attrs:{href:"#profile-configuration"}},[e._v("Profile configuration")])])])]),a("li",[a("a",{attrs:{href:"#node-js-and-npm"}},[e._v("Node.js and npm")]),a("ul",[a("li",[a("a",{attrs:{href:"#npm-configuration"}},[e._v("npm configuration")])]),a("li",[a("a",{attrs:{href:"#npm-log-files"}},[e._v("npm log files")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"identify-the-currently-installed-cli-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-cli-version"}},[e._v("#")]),e._v(" Identify the currently installed CLI version")]),e._v(" "),a("p",[e._v("Issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe -V\n")])])]),a("p",[e._v("The exact Zowe CLI version may vary depending upon if the "),a("code",[e._v("@latest")]),e._v(" or "),a("code",[e._v("@zowe-v1-lts")]),e._v(", or "),a("code",[e._v("@lts-incremental")]),e._v(" version is installed.")]),e._v(" "),a("p",[e._v("For the "),a("code",[e._v("@zowe-v1-lts")]),e._v(" and the "),a("code",[e._v("@latest")]),e._v(" (forward-development) version tags:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm list -g @zowe/cli\n")])])]),a("p",[e._v("For the "),a("code",[e._v("@lts-incremental")]),e._v(" version tag:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm list -g @brightside/core\n")])])]),a("p",[e._v("More information regarding versioning conventions for Zowe CLI and plug-ins is located in "),a("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/MaintainerVersioning.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioning Guidelines"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"identify-the-currently-installed-versions-of-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-versions-of-plug-ins"}},[e._v("#")]),e._v(" Identify the currently installed versions of plug-ins")]),e._v(" "),a("p",[e._v("Issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins list\n")])])]),a("p",[e._v("The output describes version and the registry information.")]),e._v(" "),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),a("p",[e._v("The following settings are configurable via environment variables:")]),e._v(" "),a("h3",{attrs:{id:"log-levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-levels"}},[e._v("#")]),e._v(" Log levels")]),e._v(" "),a("p",[e._v("Environment variables are available to specify logging level and the CLI home directory.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v(' Setting the log level to TRACE or ALL might result in "sensitive" data being logged. For example, command line arguments will be logged when TRACE is set.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Environment Variable")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Values")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("ZOWE_APP_LOG_LEVEL")])]),e._v(" "),a("td",[e._v("Zowe CLI logging level")]),e._v(" "),a("td",[e._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),e._v(" "),a("td",[e._v("DEBUG")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("ZOWE_IMPERATIVE_LOG_LEVEL")])]),e._v(" "),a("td",[e._v("Imperative CLI Framework logging level")]),e._v(" "),a("td",[e._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),e._v(" "),a("td",[e._v("DEBUG")])])])]),e._v(" "),a("h3",{attrs:{id:"home-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-directory"}},[e._v("#")]),e._v(" Home directory")]),e._v(" "),a("p",[e._v("You can set the location on your computer for the Zowe CLI home directory, which contains log files, profiles, and plug-ins for the product.")]),e._v(" "),a("p",[a("strong",[e._v("Tip!")]),e._v(" The default "),a("code",[e._v(".zowe")]),e._v(" folder is created when you issue your first Zowe CLI command. If you change the location of the folder, you must reinstall plug-ins and recreate or move profiles and log files that you want to retain. In some cases, you might want to maintain a different set of profiles in multiple folders, then switch between them using the environment variable.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Environment Variable")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Values")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("ZOWE_CLI_HOME")])]),e._v(" "),a("td",[e._v("Zowe CLI home directory location")]),e._v(" "),a("td",[e._v("Any valid path on your computer")]),e._v(" "),a("td",[e._v("C:\\Users\\<username>\\.zowe")])])])]),e._v(" "),a("p",[e._v("The values for these variables can be "),a("strong",[e._v("echo")]),e._v("ed.")]),e._v(" "),a("h2",{attrs:{id:"home-directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-directory-structure"}},[e._v("#")]),e._v(" Home directory structure")]),e._v(" "),a("p",[a("img",{attrs:{src:o(259),alt:"Home Directory"}})]),e._v(" "),a("h3",{attrs:{id:"location-of-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-of-logs"}},[e._v("#")]),e._v(" Location of logs")]),e._v(" "),a("p",[e._v("There are two sets of logs to be aware of:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Imperative CLI Framework log, which generally contains installation and configuration information.")])]),e._v(" "),a("li",[a("p",[e._v("Zowe CLI log, which contains information about interaction between CLI and the server endpoints.")])])]),e._v(" "),a("p",[e._v("Analyze these logs for any information relevant to your issue.")]),e._v(" "),a("h3",{attrs:{id:"profile-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-configuration"}},[e._v("#")]),e._v(" Profile configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("profiles")]),e._v(" folder stores connnection information.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v(' The profile directory might contain "sensitive" information, such as your mainframe password. You should obfuscate any sensitive references before providing configuration files.')]),e._v(" "),a("h2",{attrs:{id:"node-js-and-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-and-npm"}},[e._v("#")]),e._v(" Node.js and npm")]),e._v(" "),a("p",[e._v("Zowe CLI should be compatible with Node.js v8 and greater.")]),e._v(" "),a("p",[e._v("To gather Node.js and npm versions, use the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node --version\nnpm --version\n")])])]),a("h3",{attrs:{id:"npm-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-configuration"}},[e._v("#")]),e._v(" npm configuration")]),e._v(" "),a("p",[e._v("If you are having trouble installing Zowe CLI from an npm registry, gather your npm configuration to help identify issues with registry settings, global install paths, proxy settings, etc...")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config ls -l\n")])])]),a("h3",{attrs:{id:"npm-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-log-files"}},[e._v("#")]),e._v(" npm log files")]),e._v(" "),a("p",[e._v("In case of errors, npm creates log files in the "),a("code",[e._v("npm_cache\\_logs")]),e._v(" location. To get the "),a("code",[e._v("npm_cache")]),e._v(" location for a specific OS, run the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config get cache\n")])])]),a("p",[e._v("By default, npm keeps only 10 log files, but sometimes more are needed. Increase the log count by issuing the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config set logs-max 50\n")])])]),a("p",[e._v("This command increases the log count to 50, so that more log files will be stored on the system. Now you can run tests multiple times and not lose the log files. The logs can be passed to Support for analysis.")]),e._v(" "),a("p",[e._v("As the log files are created only when an npm conmmand fails, but you are interested to see what is executed, you can increase the log level of npm. Issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config set loglevel verbose\n")])])]),a("ul",[a("li",[a("p",[e._v("With this change, you can see all actions taken by npm on the stdout. If the command is successful, it still does not generate a log file.")])]),e._v(" "),a("li",[a("p",[e._v('The available log levels are:\n"silent", "error", "warn", "notice", "http", "timing", "info", "verbose", "silly", and "notice". "Notice" is the default.\n')])]),e._v(" "),a("li",[a("p",[e._v("Alternatively, you can pass "),a("code",[e._v("--loglevel verbose")]),e._v(" on the command line, but this only works with npm related commands. By setting log level in the config, it also works when you issue some "),a("code",[e._v("zowe")]),e._v(" commands that use npm (for example, "),a("code",[e._v("zowe plugins install @zowe/cics")]),e._v(").")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);