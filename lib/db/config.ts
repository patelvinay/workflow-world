export function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env, for example: postgresql://postgres:password@localhost:5432/workflow_world",
    );
  }

  try {
    const parsed = new URL(databaseUrl);

    if (!parsed.password) {
      throw new Error(
        "DATABASE_URL is missing a password. If your password contains special characters like @, :, /, or #, URL-encode it first.",
      );
    }

    return databaseUrl;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Invalid DATABASE_URL: ${error.message}`);
    }

    throw error;
  }
}
