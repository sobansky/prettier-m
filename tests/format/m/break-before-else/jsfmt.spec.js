const dirPath = `${__dirname}/../../js/if`;

run_spec(dirPath, ["babel", "babel-flow", "flow", "typescript"], {
    breakBeforeElse: true,

    trailingComma: "none",
});