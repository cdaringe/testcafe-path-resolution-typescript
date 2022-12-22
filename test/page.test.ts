import { foo } from "foo";
import { ClientFunction } from "testcafe";

fixture`foo`.page("http://localhost:3333");

const log = ClientFunction(() => console.log("sup"));

test("bar", async (t) => {
  foo();
  await log();
  await t.debug();
});
