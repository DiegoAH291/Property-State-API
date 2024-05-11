import core from "./core";

const port = core.get("port");

core.listen(port, () => {
  console.log(`🚀 Server running on port http://localhost:${port}`);
});
