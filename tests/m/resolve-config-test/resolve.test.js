const getConfig = require("./resolving-test.js");

test("Resolving config test", async () => {
    const config = await getConfig("d:\\Development\\Extensions\\prettier-more\\test-assets\\project\\formatTest\\ugly.ts");//"d:\\temp\\configTest\\file\\file.ts");
    expect(config).toEqual("d:\\Development\\Extensions\\prettier-more\\test-assets\\project\\.prettierrc");
})