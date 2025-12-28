console.log("🔍 Analyzer started");

process.stdin.on("data", (data) => {
  const log = data.toString();

  if (log.includes("ERROR")) {
    console.log("🚨 Analyzer detected an ERROR");
    console.log("Suggested Fix: Check route logic or environment variables");
  }

  if (log.includes("INFO")) {
    console.log("ℹ️ Analyzer detected INFO log");
  }
});
