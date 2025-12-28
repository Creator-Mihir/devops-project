console.log("🔍 Analyzer started");

process.stdin.on("data", (data) => {
  const log = data.toString();

  if (log.includes("Database connection failed")) {
    console.log("🚨 ROOT CAUSE: Database not reachable");
    console.log("💡 SUGGESTED FIX:");
    console.log("- Check DB credentials");
    console.log("- Verify DB service is running");
    console.log("- Validate environment variables");
  }

  if (log.includes("INFO")) {
    console.log("ℹ️ Analyzer detected INFO log");
  }
});
