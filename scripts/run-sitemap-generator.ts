import { exec } from "child_process"

// Run the sitemap generator
console.log("Generating sitemap...")
exec("ts-node scripts/generate-sitemap.ts", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating sitemap: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`Sitemap generator stderr: ${stderr}`)
  }

  console.log(stdout)

  // Run the verification script
  console.log("\nVerifying sitemap...")
  exec("ts-node scripts/verify-sitemap.ts", (verifyError, verifyStdout, verifyStderr) => {
    if (verifyError) {
      console.error(`Error verifying sitemap: ${verifyError.message}`)
      return
    }

    if (verifyStderr) {
      console.error(`Sitemap verification stderr: ${verifyStderr}`)
    }

    console.log(verifyStdout)
  })
})
