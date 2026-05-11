const GITHUB_USERNAME = "Ashour993";

export async function GET() {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [commitsRes, reposRes] = await Promise.all([
      fetch(
        `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`,
        { headers, next: { revalidate: 1 } }
      ),
      fetch(
        `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}&per_page=1`,
        { headers, next: { revalidate: 1 } }
      ),
    ]);

    if (!commitsRes.ok || !reposRes.ok) {
      return Response.json({ error: "GitHub API error" }, { status: 502 });
    }

    const [commitsData, reposData] = await Promise.all([
      commitsRes.json(),
      reposRes.json(),
    ]);

    return Response.json({
      commits: commitsData.total_count ?? 0,
      repos: reposData.total_count ?? 0,
    });
  } catch {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}